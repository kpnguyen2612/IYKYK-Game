/**
 * Faker / IYKYK Party Game - Secure REST API Backend & Realtime Socket.IO Server
 * Production-ready server for word bank security, comeback validation,
 * multiplayer room management with circular turns and 50% threshold / 50/50 tie-break voting.
 */

const express = require('express');
const http = require('http');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { Server } = require('socket.io');
const RoomManager = require('./room_manager');

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

// Enable CORS for all origins
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Attach Socket.IO
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// Load category database
const dataFilePath = path.join(__dirname, 'data', 'categories.json');
let categoriesData = [];

try {
  let raw = fs.readFileSync(dataFilePath, 'utf8');
  if (raw.charCodeAt(0) === 0xFEFF) {
    raw = raw.slice(1);
  }
  categoriesData = JSON.parse(raw);
  console.log(`[INFO] Loaded ${categoriesData.length} categories successfully.`);
} catch (err) {
  console.error('[ERROR] Failed to load categories.json:', err.message);
  process.exit(1);
}

// Instantiate Room Manager
const roomManager = new RoomManager(categoriesData);

// In-memory active match sessions store for offline/pass-and-play REST mode
const activeMatches = new Map();

// Periodic sweep to clean up expired pass-and-play sessions (older than 2 hours)
setInterval(() => {
  const now = Date.now();
  const maxAgeMs = 2 * 60 * 60 * 1000;
  for (const [token, match] of activeMatches.entries()) {
    if (now - match.createdAt > maxAgeMs) {
      activeMatches.delete(token);
    }
  }
}, 10 * 60 * 1000);

// Helper: Normalize Vietnamese strings
function normalizeVietnamese(str) {
  if (!str) return '';
  let res = str.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9]/g, '');
  res = res.replace(/^(con|cay|cai|chiec|mon|qua|bo|chu)\s*/i, '').trim();
  return res;
}

// Broadcast sanitized room state to each player in the room privately
function broadcastRoomState(roomCode) {
  const room = roomManager.rooms.get(roomCode);
  if (!room) return;

  for (const player of room.players.values()) {
    if (player.socketId) {
      const state = roomManager.getPublicRoomState(roomCode, player.id);
      io.to(player.socketId).emit('room:state', state);
    }
  }
}

// Helper: Transition to Online Voting Phase
function startVotingPhase(roomCode) {
  const room = roomManager.rooms.get(roomCode);
  if (!room) return;

  if (room.speakerTimer) {
    clearInterval(room.speakerTimer);
    room.speakerTimer = null;
  }

  room.status = (room.status === 'TIE_BREAK_DESCRIPTION') ? 'TIE_BREAK_VOTING' : 'VOTING';
  room.votes.clear();
  Array.from(room.players.values()).forEach(p => { p.hasVoted = false; });
  room.votingTimeRemaining = room.voteDurationSec;

  broadcastRoomState(roomCode);

  io.to(roomCode).emit('vote:phase_start', {
    durationSec: room.voteDurationSec,
    isTieBreak: room.status === 'TIE_BREAK_VOTING',
    tieBreakSuspects: room.tieBreakSuspects
  });

  // Start voting countdown
  if (room.votingTimer) clearInterval(room.votingTimer);
  room.votingTimer = setInterval(() => {
    room.votingTimeRemaining--;
    io.to(roomCode).emit('vote:timer_tick', { remaining: room.votingTimeRemaining });

    if (room.votingTimeRemaining <= 0) {
      clearInterval(room.votingTimer);
      room.votingTimer = null;
      resolveVotingPhase(roomCode);
    }
  }, 1000);
}

// Helper: Resolve voting results (50% threshold + 50/50 tie-break)
function resolveVotingPhase(roomCode) {
  const room = roomManager.rooms.get(roomCode);
  if (!room) return;

  if (room.votingTimer) {
    clearInterval(room.votingTimer);
    room.votingTimer = null;
  }

  const evalResult = roomManager.evaluateVotes(roomCode);
  if (!evalResult) return;

  if (evalResult.result === 'TIE_BREAK_50_50') {
    // 50/50 tie-break defense description round!
    io.to(roomCode).emit('vote:tie_break_50_50', {
      suspects: evalResult.suspects,
      voteCountEach: evalResult.voteCountEach,
      totalVotes: evalResult.totalVotes
    });

    broadcastRoomState(roomCode);

    // Give each suspect a 25s defense turn
    setTimeout(() => {
      startTieBreakDefense(roomCode);
    }, 3500);

  } else if (evalResult.result === 'ELIMINATE') {
    io.to(roomCode).emit('vote:eliminated', {
      eliminatedPlayer: evalResult.eliminatedPlayer,
      voteCount: evalResult.voteCount,
      totalVotes: evalResult.totalVotes,
      ratio: evalResult.ratio,
      gameOver: evalResult.gameOver,
      winner: evalResult.winner
    });

    broadcastRoomState(roomCode);

    if (!evalResult.gameOver) {
      setTimeout(() => {
        // Start next round
        room.round++;
        room.turnOrder = room.turnOrder.filter(id => {
          const p = room.players.get(id);
          return p && p.isAlive;
        });
        room.currentSpeakerIndex = 0;
        room.status = 'PLAYING_DESCRIPTION';
        broadcastRoomState(roomCode);
        startSpeakerTurn(roomCode);
      }, 4500);
    }

  } else {
    // NO_ELIMINATION (<50%)
    io.to(roomCode).emit('vote:no_elimination', {
      reason: evalResult.reason,
      totalVotes: evalResult.totalVotes,
      topCount: evalResult.topCount
    });

    broadcastRoomState(roomCode);

    setTimeout(() => {
      room.round++;
      room.currentSpeakerIndex = 0;
      room.status = 'PLAYING_DESCRIPTION';
      broadcastRoomState(roomCode);
      startSpeakerTurn(roomCode);
    }, 4000);
  }
}

// Start circular turn speaker timer
function startSpeakerTurn(roomCode) {
  const room = roomManager.rooms.get(roomCode);
  if (!room || room.status !== 'PLAYING_DESCRIPTION') return;

  if (room.speakerTimer) clearInterval(room.speakerTimer);

  const speaker = roomManager.getCurrentSpeaker(room);
  if (!speaker) {
    startVotingPhase(roomCode);
    return;
  }

  room.speakerTimeRemaining = room.turnDurationSec;
  broadcastRoomState(roomCode);

  io.to(roomCode).emit('turn:active_speaker', {
    speakerId: speaker.id,
    speakerName: speaker.name,
    avatar: speaker.avatar,
    durationSec: room.turnDurationSec
  });

  room.speakerTimer = setInterval(() => {
    room.speakerTimeRemaining--;
    io.to(roomCode).emit('turn:timer_tick', { remaining: room.speakerTimeRemaining });

    if (room.speakerTimeRemaining <= 0) {
      clearInterval(room.speakerTimer);
      room.speakerTimer = null;
      advanceToNextSpeaker(roomCode);
    }
  }, 1000);
}

function advanceToNextSpeaker(roomCode) {
  const room = roomManager.rooms.get(roomCode);
  if (!room) return;

  if (room.speakerTimer) {
    clearInterval(room.speakerTimer);
    room.speakerTimer = null;
  }

  const res = roomManager.nextSpeaker(room);
  if (res.finishedRound) {
    // All alive players finished their turn -> Transition to Voting
    startVotingPhase(roomCode);
  } else {
    startSpeakerTurn(roomCode);
  }
}

// Helper: 50/50 Defense description turn
function startTieBreakDefense(roomCode) {
  const room = roomManager.rooms.get(roomCode);
  if (!room || room.tieBreakSuspects.length !== 2) return;

  const suspectIdA = room.tieBreakSuspects[0];
  const suspectIdB = room.tieBreakSuspects[1];

  const playerA = room.players.get(suspectIdA);
  const playerB = room.players.get(suspectIdB);

  // Defense turn for Player A first
  io.to(roomCode).emit('turn:defense_start', {
    activeSpeaker: playerA,
    durationSec: 25,
    message: `${playerA.name} có 25s để mô tả lại và bảo chữa!`
  });

  let defenseTime = 25;
  const defTimerA = setInterval(() => {
    defenseTime--;
    io.to(roomCode).emit('turn:timer_tick', { remaining: defenseTime });
    if (defenseTime <= 0) {
      clearInterval(defTimerA);

      // Defense turn for Player B
      io.to(roomCode).emit('turn:defense_start', {
        activeSpeaker: playerB,
        durationSec: 25,
        message: `${playerB.name} có 25s để mô tả lại và bảo chữa!`
      });

      let defenseTimeB = 25;
      const defTimerB = setInterval(() => {
        defenseTimeB--;
        io.to(roomCode).emit('turn:timer_tick', { remaining: defenseTimeB });
        if (defenseTimeB <= 0) {
          clearInterval(defTimerB);
          // Now proceed to re-vote
          startVotingPhase(roomCode);
        }
      }, 1000);
    }
  }, 1000);
}

// ========================================================
// SOCKET.IO EVENT HANDLERS
// ========================================================
io.on('connection', (socket) => {
  console.log(`[SOCKET] Client connected: ${socket.id}`);

  // 1. Create Room
  socket.on('room:create', ({ hostName, settings }, callback) => {
    try {
      const { room, player } = roomManager.createRoom(socket.id, hostName, settings);
      socket.join(room.code);
      if (typeof callback === 'function') {
        callback({
          success: true,
          roomCode: room.code,
          playerId: player.id,
          player
        });
      }
      broadcastRoomState(room.code);
    } catch (err) {
      console.error('[ERROR] room:create:', err);
      if (typeof callback === 'function') callback({ success: false, message: err.message });
    }
  });

  // 2. Join Room
  socket.on('room:join', ({ roomCode, playerName }, callback) => {
    try {
      const result = roomManager.joinRoom(roomCode, socket.id, playerName);
      if (!result.success) {
        if (typeof callback === 'function') callback(result);
        return;
      }
      socket.join(result.room.code);
      if (typeof callback === 'function') {
        callback({
          success: true,
          roomCode: result.room.code,
          playerId: result.player.id,
          player: result.player
        });
      }
      broadcastRoomState(result.room.code);
    } catch (err) {
      console.error('[ERROR] room:join:', err);
      if (typeof callback === 'function') callback({ success: false, message: err.message });
    }
  });

  // 3. Start Match
  socket.on('room:start_match', ({ roomCode, playerId }, callback) => {
    try {
      const result = roomManager.startMatch(roomCode, playerId);
      if (!result.success) {
        if (typeof callback === 'function') callback(result);
        return;
      }

      if (typeof callback === 'function') callback({ success: true });
      broadcastRoomState(roomCode);

      // 3s reveal card animation delay then begin round 1 speaker spotlight
      setTimeout(() => {
        startSpeakerTurn(roomCode);
      }, 3500);

    } catch (err) {
      console.error('[ERROR] room:start_match:', err);
      if (typeof callback === 'function') callback({ success: false, message: err.message });
    }
  });

  // 4. Next Speaker (Host or current speaker passes turn early)
  socket.on('turn:next', ({ roomCode, playerId }) => {
    const room = roomManager.rooms.get(roomCode);
    if (!room) return;
    const speaker = roomManager.getCurrentSpeaker(room);
    if (speaker && (speaker.id === playerId || room.hostId === playerId)) {
      advanceToNextSpeaker(roomCode);
    }
  });

  // 5. Submit Vote
  socket.on('vote:cast', ({ roomCode, voterPlayerId, suspectPlayerId }, callback) => {
    try {
      const result = roomManager.submitVote(roomCode, voterPlayerId, suspectPlayerId);
      if (typeof callback === 'function') callback(result);

      if (result.success) {
        io.to(roomCode).emit('vote:progress', {
          votedCount: result.votedCount,
          totalEligible: result.totalEligible
        });

        // If everyone has voted, resolve immediately without waiting out the timer
        if (result.allVoted) {
          setTimeout(() => {
            resolveVotingPhase(roomCode);
          }, 800);
        }
      }
    } catch (err) {
      console.error('[ERROR] vote:cast:', err);
      if (typeof callback === 'function') callback({ success: false, message: err.message });
    }
  });

  // 6. Quick Chat / In-game reaction
  socket.on('chat:message', ({ roomCode, playerName, text, emoji }) => {
    io.to(roomCode).emit('chat:broadcast', {
      sender: playerName,
      text: (text || '').substring(0, 80),
      emoji: emoji || null,
      timestamp: Date.now()
    });
  });

  // 7. Explicit Room Leave
  socket.on('room:leave', ({ roomCode, playerId }, callback) => {
    try {
      const result = roomManager.removePlayer(roomCode, playerId);
      socket.leave(roomCode);
      if (typeof callback === 'function') callback(result);

      if (result.roomDestroyed) {
        io.to(roomCode).emit('room:closed', { reason: 'Phòng không còn người chơi nào và đã tự động giải tán.' });
      } else {
        broadcastRoomState(roomCode);
      }
    } catch (err) {
      console.error('[ERROR] room:leave:', err);
    }
  });

  // 8. Return to Lobby for next round (Host only, preserves cumulative score)
  socket.on('room:return_to_lobby', ({ roomCode, playerId }, callback) => {
    try {
      const result = roomManager.returnToLobby(roomCode, playerId);
      if (typeof callback === 'function') callback(result);
      if (result.success) {
        broadcastRoomState(roomCode);
      }
    } catch (err) {
      console.error('[ERROR] room:return_to_lobby:', err);
    }
  });

  // 9. Reset Scores (Host only)
  socket.on('room:reset_scores', ({ roomCode, playerId }, callback) => {
    try {
      const result = roomManager.resetRoomScores(roomCode, playerId);
      if (typeof callback === 'function') callback(result);
      if (result.success) {
        broadcastRoomState(roomCode);
      }
    } catch (err) {
      console.error('[ERROR] room:reset_scores:', err);
    }
  });

  // 10. Kick Player (Host only)
  socket.on('room:kick', ({ roomCode, hostPlayerId, targetPlayerId }, callback) => {
    try {
      const cleanCode = (roomCode || '').toUpperCase();
      const result = roomManager.kickPlayer(cleanCode, hostPlayerId, targetPlayerId);
      if (!result.success) {
        if (typeof callback === 'function') callback(result);
        return;
      }

      if (typeof callback === 'function') callback({ success: true, kickedPlayer: result.kickedPlayer });

      // Gửi sự kiện riêng cho người chơi bị kick
      if (result.targetSocketId) {
        const targetSocket = io.sockets.sockets.get(result.targetSocketId);
        if (targetSocket) {
          targetSocket.emit('room:kicked', {
            message: 'Bạn đã bị chủ phòng mời ra khỏi phòng đấu.'
          });
          targetSocket.leave(cleanCode);
        }
      }

      broadcastRoomState(cleanCode);
    } catch (err) {
      console.error('[ERROR] room:kick:', err);
      if (typeof callback === 'function') callback({ success: false, message: err.message });
    }
  });

  // 11. Disconnect
  socket.on('disconnect', () => {
    const leaveRes = roomManager.leaveRoom(socket.id);
    if (leaveRes) {
      if (leaveRes.roomDestroyed) {
        io.to(leaveRes.roomCode).emit('room:closed', { reason: 'Phòng không còn ai và đã tự động xóa toàn bộ điểm.' });
      } else if (leaveRes.room) {
        broadcastRoomState(leaveRes.roomCode);
      }
    }
  });
});

// ========================================================
// REST API ROUTES
// ========================================================

// Health check
app.get('/api/v1/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    categoriesCount: categoriesData.length,
    activeRoomsCount: roomManager.rooms.size,
    activeMatchesCount: activeMatches.size,
    version: '2.0.0'
  });
});

// GET /api/v1/categories - Returns category metadata WITHOUT leaking words
app.get('/api/v1/categories', (req, res) => {
  const safeCategories = categoriesData.map(cat => ({
    id: cat.id,
    name_vi: cat.name_vi,
    icon: cat.icon,
    wordCount: Array.isArray(cat.words) ? cat.words.length : 0
  }));
  res.json({ success: true, categories: safeCategories });
});

// GET /api/v1/rooms/:code - Inspect room state
app.get('/api/v1/rooms/:code', (req, res) => {
  const code = (req.params.code || '').toUpperCase();
  const room = roomManager.rooms.get(code);
  if (!room) {
    return res.status(404).json({ success: false, message: 'Phòng không tồn tại' });
  }
  const state = roomManager.getPublicRoomState(code, req.query.playerId || '');
  res.json({ success: true, room: state });
});

// POST /api/v1/rooms/create - Create room via REST
app.post('/api/v1/rooms/create', (req, res) => {
  try {
    const { hostName, settings } = req.body || {};
    const { room, player } = roomManager.createRoom(null, hostName, settings);
    res.json({ success: true, roomCode: room.code, playerId: player.id, player });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST /api/v1/rooms/join - Join room via REST
app.post('/api/v1/rooms/join', (req, res) => {
  try {
    const { roomCode, playerName } = req.body || {};
    const result = roomManager.joinRoom(roomCode, null, playerName);
    if (!result.success) return res.status(400).json(result);
    broadcastRoomState(result.room.code);
    res.json({ success: true, roomCode: result.room.code, playerId: result.player.id, player: result.player });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST /api/v1/rooms/start - Start match via REST
app.post('/api/v1/rooms/start', (req, res) => {
  try {
    const { roomCode, playerId } = req.body || {};
    const result = roomManager.startMatch(roomCode, playerId);
    if (!result.success) return res.status(400).json(result);
    broadcastRoomState(roomCode);
    setTimeout(() => startSpeakerTurn(roomCode), 3500);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST /api/v1/rooms/vote - Submit vote via REST
app.post('/api/v1/rooms/vote', (req, res) => {
  try {
    const { roomCode, voterPlayerId, suspectPlayerId } = req.body || {};
    const result = roomManager.submitVote(roomCode, voterPlayerId, suspectPlayerId);
    if (!result.success) return res.status(400).json(result);
    if (result.allVoted) {
      setTimeout(() => resolveVotingPhase(roomCode), 800);
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST /api/v1/rooms/leave - Leave room via REST
app.post('/api/v1/rooms/leave', (req, res) => {
  try {
    const { roomCode, playerId } = req.body || {};
    const result = roomManager.removePlayer(roomCode, playerId);
    const code = (roomCode || '').toUpperCase();
    if (result.roomDestroyed) {
      io.to(code).emit('room:closed', { reason: 'Phòng không còn người chơi nào và đã tự động giải tán.' });
    } else if (result.success) {
      broadcastRoomState(code);
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST /api/v1/rooms/reset_to_lobby - Return room to lobby for next round
app.post('/api/v1/rooms/reset_to_lobby', (req, res) => {
  try {
    const { roomCode, playerId } = req.body || {};
    const code = (roomCode || '').toUpperCase();
    const result = roomManager.returnToLobby(code, playerId);
    if (!result.success) return res.status(400).json(result);
    broadcastRoomState(code);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST /api/v1/rooms/reset_scores - Reset all scores in room to 0
app.post('/api/v1/rooms/reset_scores', (req, res) => {
  try {
    const { roomCode, playerId } = req.body || {};
    const code = (roomCode || '').toUpperCase();
    const result = roomManager.resetRoomScores(code, playerId);
    if (!result.success) return res.status(400).json(result);
    broadcastRoomState(code);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST /api/v1/rooms/kick - Host kicks a player from room
app.post('/api/v1/rooms/kick', (req, res) => {
  try {
    const { roomCode, hostPlayerId, targetPlayerId } = req.body || {};
    const code = (roomCode || '').toUpperCase();
    const result = roomManager.kickPlayer(code, hostPlayerId, targetPlayerId);
    if (!result.success) return res.status(400).json(result);

    if (result.targetSocketId) {
      const targetSocket = io.sockets.sockets.get(result.targetSocketId);
      if (targetSocket) {
        targetSocket.emit('room:kicked', {
          message: 'Bạn đã bị chủ phòng mời ra khỏi phòng đấu.'
        });
        targetSocket.leave(code);
      }
    }

    broadcastRoomState(code);
    res.json({ success: true, kickedPlayer: result.kickedPlayer });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Pass & Play Match Start (Legacy/Single-device support)
app.post('/api/v1/match/start', (req, res) => {
  try {
    const { categoryId } = req.body || {};
    let targetCategory = null;
    if (categoryId && categoryId !== 'all') {
      targetCategory = categoriesData.find(c => c.id === categoryId);
    }
    if (!targetCategory) {
      const randomIndex = Math.floor(Math.random() * categoriesData.length);
      targetCategory = categoriesData[randomIndex];
    }
    if (!targetCategory || !targetCategory.words || targetCategory.words.length === 0) {
      return res.status(404).json({ success: false, message: 'Category not found or empty' });
    }

    const wordIndex = Math.floor(Math.random() * targetCategory.words.length);
    const pair = targetCategory.words[wordIndex];
    const civilianWord = pair.civilian || pair.vi || pair;
    const imposterWord = pair.imposter || '';

    const matchToken = 'mtk_' + crypto.randomBytes(16).toString('hex');
    activeMatches.set(matchToken, {
      secretWord: civilianWord,
      imposterWord: imposterWord,
      categoryId: targetCategory.id,
      categoryName: targetCategory.name_vi,
      createdAt: Date.now()
    });

    res.json({
      success: true,
      matchToken,
      category: {
        id: targetCategory.id,
        name_vi: targetCategory.name_vi,
        icon: targetCategory.icon
      },
      words: {
        civilian: civilianWord,
        imposter: imposterWord
      }
    });
  } catch (err) {
    console.error('[ERROR] /api/v1/match/start:', err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Verify Guess
app.post('/api/v1/match/verify-guess', (req, res) => {
  try {
    const { matchToken, guessText } = req.body || {};
    if (!matchToken || !activeMatches.has(matchToken)) {
      return res.status(404).json({
        success: false,
        message: 'Match session not found or expired',
        isCorrect: false
      });
    }

    const session = activeMatches.get(matchToken);
    const targetWord = session.secretWord || '';
    const cleanGuess = (guessText || '').trim();

    const normTarget = normalizeVietnamese(targetWord);
    const normGuess = normalizeVietnamese(cleanGuess);

    const isMatch = normGuess.length > 0 && (
      normTarget === normGuess ||
      normTarget.includes(normGuess) && normGuess.length >= 3 ||
      normGuess.includes(normTarget)
    );

    res.json({
      success: true,
      isCorrect: isMatch,
      penalty: isMatch ? 0 : 10
    });
  } catch (err) {
    console.error('[ERROR] /api/v1/match/verify-guess:', err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// ========================================================
// STATIC ASSETS
// ========================================================
const candidateStaticDir = path.join(__dirname, '..');
const isFrontendPresent = fs.existsSync(path.join(candidateStaticDir, 'index.html'));

if (isFrontendPresent) {
  app.use(express.static(candidateStaticDir));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api/') || req.path.startsWith('/socket.io/')) {
      return next();
    }
    res.sendFile(path.join(candidateStaticDir, 'index.html'));
  });
}

// Start Unified Server
server.listen(PORT, () => {
  console.log(`[FAKER-BACKEND] Unified Server with Socket.IO listening on port ${PORT}`);
  console.log(`[FAKER-BACKEND] Health check: http://localhost:${PORT}/api/v1/health`);
});
