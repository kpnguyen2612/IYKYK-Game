/**
 * Faker / IYKYK Party Game - Online Room & Match Manager
 * Handles multi-device room lifecycles, circular turns, role distribution,
 * and 50% threshold / 50/50 tie-break voting rules inspired by Werewolf Voice.
 */

class RoomManager {
  constructor(categoriesData = []) {
    this.categoriesData = categoriesData;
    // Map: roomCode (string) -> Room
    this.rooms = new Map();
    // Map: socketId -> roomCode
    this.socketToRoom = new Map();
  }

  setCategoriesData(data) {
    this.categoriesData = data;
  }

  generateRoomCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    do {
      code = '';
      for (let i = 0; i < 6; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
      }
    } while (this.rooms.has(code));
    return code;
  }

  createRoom(hostSocketId, hostName, settings = {}) {
    const roomCode = this.generateRoomCode();
    const playerId = 'p_' + Math.random().toString(36).substring(2, 9);

    const room = {
      code: roomCode,
      hostId: playerId,
      status: 'LOBBY', // LOBBY, PLAYING_DESCRIPTION, DISCUSSION, VOTING, TIE_BREAK_DESCRIPTION, TIE_BREAK_VOTING, GAME_OVER
      round: 1,
      turnDurationSec: Number(settings.turnDurationSec) || 30,
      voteDurationSec: Number(settings.voteDurationSec) || 25,
      imposterCount: Math.max(1, Number(settings.imposterCount) || 1),
      categoryId: settings.categoryId || 'all',
      category: null,
      secretWords: {
        civilian: '',
        imposter: ''
      },
      // Map: playerId -> Player
      players: new Map(),
      // Seating order of player IDs
      turnOrder: [],
      currentSpeakerIndex: 0,
      speakerTimeRemaining: 0,
      speakerTimer: null,
      // Voting store: Map(voterPlayerId -> suspectPlayerId)
      votes: new Map(),
      votingTimer: null,
      votingTimeRemaining: 0,
      // Tie-break state
      tieBreakSuspects: [], // [idA, idB] if 50/50 tie occurs
      tieBreakSpeakerIndex: 0,
      createdAt: Date.now()
    };

    const hostPlayer = {
      id: playerId,
      socketId: hostSocketId,
      name: (hostName || 'Chủ phòng').trim().substring(0, 20),
      avatar: '👑',
      isHost: true,
      isAlive: true,
      role: null, // 'CIVILIAN', 'IMPOSTER'
      secretWord: '',
      hasVoted: false,
      isConnected: true,
      score: 0
    };

    room.players.set(playerId, hostPlayer);
    room.turnOrder.push(playerId);

    this.rooms.set(roomCode, room);
    if (hostSocketId) {
      this.socketToRoom.set(hostSocketId, roomCode);
    }

    return { room, player: hostPlayer };
  }

  joinRoom(roomCode, socketId, playerName, customAvatar = null) {
    const cleanCode = (roomCode || '').trim().toUpperCase();
    const room = this.rooms.get(cleanCode);
    if (!room) {
      return { success: false, message: 'Phòng không tồn tại hoặc đã đóng' };
    }

    if (room.status !== 'LOBBY') {
      return { success: false, message: 'Trận đấu đang diễn ra, không thể tham gia lúc này' };
    }

    if (room.players.size >= 12) {
      return { success: false, message: 'Phòng đã đủ 12 người chơi tối đa' };
    }

    const playerId = 'p_' + Math.random().toString(36).substring(2, 9);
    const avatars = ['🦊', '🐼', '🐯', '🦁', '🐸', '🐵', '🦄', '🐙', '🐨', '🦉', '🐺', '🐰'];
    const chosenAvatar = customAvatar || avatars[room.players.size % avatars.length];

    const player = {
      id: playerId,
      socketId,
      name: (playerName || `Người chơi ${room.players.size + 1}`).trim().substring(0, 20),
      avatar: chosenAvatar,
      isHost: false,
      isAlive: true,
      role: null,
      secretWord: '',
      hasVoted: false,
      isConnected: true,
      score: 0
    };

    room.players.set(playerId, player);
    room.turnOrder.push(playerId);
    if (socketId) {
      this.socketToRoom.set(socketId, cleanCode);
    }

    return { success: true, room, player };
  }

  leaveRoom(socketId) {
    const roomCode = this.socketToRoom.get(socketId);
    if (!roomCode) return null;

    const room = this.rooms.get(roomCode);
    if (!room) {
      this.socketToRoom.delete(socketId);
      return null;
    }

    let leftPlayer = null;
    for (const [pId, p] of room.players.entries()) {
      if (p.socketId === socketId) {
        leftPlayer = p;
        p.isConnected = false;
        break;
      }
    }

    this.socketToRoom.delete(socketId);

    if (leftPlayer) {
      // Remove player from the room
      room.players.delete(leftPlayer.id);
      room.turnOrder = room.turnOrder.filter(id => id !== leftPlayer.id);
      leftPlayer.score = 0; // Wipe leaving player's score

      // If room is now empty or has no connected players, destroy room and wipe all scores!
      if (room.players.size === 0 || this.checkAndCleanupEmptyRoom(roomCode)) {
        this.destroyRoom(roomCode);
        return { roomCode, roomDestroyed: true, leftPlayer };
      }

      // If host left, transfer host role to the next remaining player
      if (leftPlayer.isHost) {
        const nextPlayer = room.players.values().next().value;
        if (nextPlayer) {
          nextPlayer.isHost = true;
          room.hostId = nextPlayer.id;
        }
      }
    }

    return { roomCode, room, leftPlayer, roomDestroyed: false };
  }

  removePlayer(roomCode, playerId) {
    const cleanCode = (roomCode || '').trim().toUpperCase();
    const room = this.rooms.get(cleanCode);
    if (!room) return { success: false, message: 'Phòng không tồn tại' };

    const player = room.players.get(playerId);
    if (!player) return { success: false, message: 'Người chơi không có trong phòng' };

    if (player.socketId) {
      this.socketToRoom.delete(player.socketId);
    }
    room.players.delete(playerId);
    room.turnOrder = room.turnOrder.filter(id => id !== playerId);
    player.score = 0;

    if (room.players.size === 0 || this.checkAndCleanupEmptyRoom(cleanCode)) {
      this.destroyRoom(cleanCode);
      return { success: true, roomDestroyed: true };
    }

    if (player.isHost) {
      const nextPlayer = room.players.values().next().value;
      if (nextPlayer) {
        nextPlayer.isHost = true;
        room.hostId = nextPlayer.id;
      }
    }

    return { success: true, room, roomDestroyed: false };
  }

  kickPlayer(roomCode, hostPlayerId, targetPlayerId) {
    const cleanCode = (roomCode || '').trim().toUpperCase();
    const room = this.rooms.get(cleanCode);
    if (!room) return { success: false, message: 'Phòng không tồn tại' };

    if (room.hostId !== hostPlayerId) {
      return { success: false, message: 'Chỉ chủ phòng mới có quyền mời người chơi ra khỏi phòng' };
    }

    if (hostPlayerId === targetPlayerId) {
      return { success: false, message: 'Chủ phòng không thể tự kick chính mình' };
    }

    const targetPlayer = room.players.get(targetPlayerId);
    if (!targetPlayer) {
      return { success: false, message: 'Người chơi không tồn tại trong phòng' };
    }

    const targetSocketId = targetPlayer.socketId;
    if (targetSocketId) {
      this.socketToRoom.delete(targetSocketId);
    }

    room.players.delete(targetPlayerId);
    room.turnOrder = room.turnOrder.filter(id => id !== targetPlayerId);
    targetPlayer.score = 0;

    return {
      success: true,
      room,
      kickedPlayer: targetPlayer,
      targetSocketId
    };
  }

  checkAndCleanupEmptyRoom(roomCode) {
    const room = this.rooms.get(roomCode);
    if (!room) return true;

    const connectedPlayers = Array.from(room.players.values()).filter(p => p.isConnected);
    if (connectedPlayers.length === 0 || room.players.size === 0) {
      this.destroyRoom(roomCode);
      return true;
    }
    return false;
  }

  destroyRoom(roomCode) {
    const room = this.rooms.get(roomCode);
    if (!room) return;
    if (room.speakerTimer) clearInterval(room.speakerTimer);
    if (room.votingTimer) clearInterval(room.votingTimer);

    // Xoá toàn bộ điểm số và dọn dẹp bộ nhớ khi phòng không còn ai
    for (const p of room.players.values()) {
      p.score = 0;
      if (p.socketId) this.socketToRoom.delete(p.socketId);
    }
    room.players.clear();
    room.votes.clear();
    this.rooms.delete(roomCode);
    console.log(`[ROOM_MANAGER] Phòng ${roomCode} không còn ai - Đã xoá toàn bộ điểm số và giải tán phòng.`);
  }

  resetRoomScores(roomCode, requestPlayerId) {
    const room = this.rooms.get(roomCode);
    if (!room) return { success: false, message: 'Phòng không tồn tại' };
    if (room.hostId !== requestPlayerId) {
      return { success: false, message: 'Chỉ chủ phòng mới có quyền đặt lại điểm' };
    }
    for (const p of room.players.values()) {
      p.score = 0;
      p.roundDelta = 0;
    }
    return { success: true, room };
  }

  returnToLobby(roomCode, requestPlayerId) {
    const room = this.rooms.get(roomCode);
    if (!room) return { success: false, message: 'Phòng không tồn tại' };
    if (room.hostId !== requestPlayerId) {
      return { success: false, message: 'Chỉ chủ phòng mới có quyền chuyển về sảnh' };
    }

    if (room.speakerTimer) clearInterval(room.speakerTimer);
    if (room.votingTimer) clearInterval(room.votingTimer);

    room.status = 'LOBBY';
    room.round = 1;
    room.votes.clear();
    room.tieBreakSuspects = [];
    room.winner = null;

    for (const p of room.players.values()) {
      p.isAlive = true;
      p.role = null;
      p.secretWord = '';
      p.hasVoted = false;
      p.roundDelta = 0;
      // p.score is PRESERVED for cumulative ranking!
    }

    return { success: true, room };
  }

  updateRoomSettings(roomCode, requestPlayerId, settings = {}) {
    const room = this.rooms.get(roomCode);
    if (!room) return { success: false, message: 'Phòng không tồn tại' };
    if (room.hostId !== requestPlayerId) {
      return { success: false, message: 'Chỉ chủ phòng mới có quyền thay đổi cài đặt phòng' };
    }
    if (room.status !== 'LOBBY') {
      return { success: false, message: 'Chỉ có thể thay đổi cài đặt khi phòng đang ở sảnh chờ' };
    }

    if (settings.imposterCount !== undefined) {
      const imp = Math.max(1, Math.min(3, parseInt(settings.imposterCount, 10) || 1));
      room.imposterCount = imp;
    }
    if (settings.turnDurationSec !== undefined) {
      const dur = Math.max(15, Math.min(120, parseInt(settings.turnDurationSec, 10) || 30));
      room.turnDurationSec = dur;
    }
    if (settings.categoryId !== undefined) {
      room.categoryId = String(settings.categoryId || 'all');
    }

    return {
      success: true,
      settings: {
        imposterCount: room.imposterCount,
        turnDurationSec: room.turnDurationSec,
        categoryId: room.categoryId
      }
    };
  }

  startMatch(roomCode, requestPlayerId) {
    const room = this.rooms.get(roomCode);
    if (!room) return { success: false, message: 'Phòng không tồn tại' };

    if (room.hostId !== requestPlayerId) {
      return { success: false, message: 'Chỉ chủ phòng mới có quyền bắt đầu trận đấu' };
    }

    const alivePlayers = Array.from(room.players.values());
    if (alivePlayers.length < 3) {
      return { success: false, message: 'Cần tối thiểu 3 người chơi để bắt đầu' };
    }

    // Pick random category and words from categoriesData
    let targetCat = null;
    if (room.categoryId && room.categoryId !== 'all') {
      targetCat = this.categoriesData.find(c => c.id === room.categoryId);
    }
    if (!targetCat && this.categoriesData.length > 0) {
      const idx = Math.floor(Math.random() * this.categoriesData.length);
      targetCat = this.categoriesData[idx];
    }

    let civWord = 'Mèo Nhà';
    let impWord = 'Hổ';
    let catInfo = { id: 'default', name_vi: 'Động vật', icon: '🐾' };

    if (targetCat && Array.isArray(targetCat.words) && targetCat.words.length > 0) {
      const pairIdx = Math.floor(Math.random() * targetCat.words.length);
      const pair = targetCat.words[pairIdx];
      civWord = pair.civilian || pair.vi || pair;
      impWord = pair.imposter || '';
      catInfo = { id: targetCat.id, name_vi: targetCat.name_vi, icon: targetCat.icon || '🏷️' };
    }

    room.category = catInfo;
    room.secretWords = { civilian: civWord, imposter: impWord };

    // Reset player roles and status
    alivePlayers.forEach(p => {
      p.isAlive = true;
      p.role = 'CIVILIAN';
      p.secretWord = civWord;
      p.hasVoted = false;
    });

    // Assign Imposters randomly
    const shuffledIds = [...room.turnOrder].sort(() => Math.random() - 0.5);
    const impCount = Math.min(room.imposterCount, Math.floor(alivePlayers.length / 2));
    for (let i = 0; i < impCount; i++) {
      const impPlayer = room.players.get(shuffledIds[i]);
      if (impPlayer) {
        impPlayer.role = 'IMPOSTER';
        impPlayer.secretWord = impWord;
      }
    }

    // Shuffle seating turn order
    room.turnOrder = [...room.turnOrder].sort(() => Math.random() - 0.5);
    room.currentSpeakerIndex = 0;
    room.status = 'PLAYING_DESCRIPTION';
    room.round = 1;
    room.votes.clear();
    room.tieBreakSuspects = [];

    return {
      success: true,
      room,
      category: catInfo
    };
  }

  // Active speaker management
  getCurrentSpeaker(room) {
    if (room.turnOrder.length === 0) return null;
    const playerId = room.turnOrder[room.currentSpeakerIndex];
    return room.players.get(playerId) || null;
  }

  nextSpeaker(room) {
    const aliveTurnOrder = room.turnOrder.filter(id => {
      const p = room.players.get(id);
      return p && p.isAlive;
    });

    if (aliveTurnOrder.length === 0) return { finishedRound: true };

    const currentId = room.turnOrder[room.currentSpeakerIndex];
    const currentAliveIdx = aliveTurnOrder.indexOf(currentId);

    if (currentAliveIdx === -1 || currentAliveIdx >= aliveTurnOrder.length - 1) {
      // Completed full circle description round!
      return { finishedRound: true };
    }

    const nextId = aliveTurnOrder[currentAliveIdx + 1];
    room.currentSpeakerIndex = room.turnOrder.indexOf(nextId);
    return {
      finishedRound: false,
      nextSpeaker: room.players.get(nextId)
    };
  }

  // Cast vote
  submitVote(roomCode, voterPlayerId, suspectPlayerId) {
    const room = this.rooms.get(roomCode);
    if (!room) return { success: false, message: 'Phòng không tồn tại' };

    if (room.status !== 'VOTING' && room.status !== 'TIE_BREAK_VOTING') {
      return { success: false, message: 'Chưa tới giai đoạn bỏ phiếu' };
    }

    const voter = room.players.get(voterPlayerId);
    if (!voter || !voter.isAlive) {
      return { success: false, message: 'Người chơi đã bị loại hoặc không hợp lệ' };
    }

    // In tie-break voting, only tied suspects can be voted
    if (room.status === 'TIE_BREAK_VOTING' && room.tieBreakSuspects.length === 2) {
      if (suspectPlayerId !== 'SKIP' && !room.tieBreakSuspects.includes(suspectPlayerId)) {
        return { success: false, message: 'Chỉ được bỏ phiếu cho 1 trong 2 người đang hòa phiếu' };
      }
    }

    room.votes.set(voterPlayerId, suspectPlayerId);
    voter.hasVoted = true;

    const aliveCount = Array.from(room.players.values()).filter(p => p.isAlive).length;
    const votedCount = room.votes.size;

    return {
      success: true,
      votedCount,
      totalEligible: aliveCount,
      allVoted: votedCount >= aliveCount
    };
  }

  /**
   * Evaluate voting results with strict 50% threshold and 50/50 tie-break rule
   * Rule:
   * 1. Total votes = all valid votes submitted.
   * 2. If top 2 suspects have identical votes with 50/50 ratio:
   *    -> DO NOT eliminate. Enter TIE_BREAK_DESCRIPTION (defense round).
   * 3. A suspect is eliminated ONLY IF their vote ratio >= 50% (>= 0.5).
   * 4. Otherwise: NO ELIMINATION, match continues to next round.
   */
  evaluateVotes(roomCode) {
    const room = this.rooms.get(roomCode);
    if (!room) return null;

    const alivePlayers = Array.from(room.players.values()).filter(p => p.isAlive);
    const totalEligible = alivePlayers.length;
    const totalVotesCast = room.votes.size;

    const counts = {}; // suspectId -> count
    for (const [voterId, suspectId] of room.votes.entries()) {
      if (suspectId && suspectId !== 'SKIP') {
        counts[suspectId] = (counts[suspectId] || 0) + 1;
      }
    }

    const sortedSuspects = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    const totalVotesReceived = Object.values(counts).reduce((s, c) => s + c, 0);

    // If no suspect received any votes
    if (sortedSuspects.length === 0 || totalVotesReceived === 0) {
      return {
        result: 'NO_ELIMINATION',
        reason: 'NO_VOTES',
        counts,
        totalVotes: totalVotesCast,
        totalEligible
      };
    }

    const top1 = sortedSuspects[0]; // [suspectId, count]
    const top2 = sortedSuspects[1] || null;

    // Check 50/50 Tie-break condition:
    // If top 2 suspects have identical count and each holds 50% of total votes received
    if (top2 && top1[1] === top2[1]) {
      const isPureFiftyFifty = (top1[1] * 2 === totalVotesReceived);
      if (isPureFiftyFifty) {
        room.status = 'TIE_BREAK_DESCRIPTION';
        room.tieBreakSuspects = [top1[0], top2[0]];
        room.tieBreakSpeakerIndex = 0;
        room.votes.clear();
        Array.from(room.players.values()).forEach(p => { p.hasVoted = false; });

        return {
          result: 'TIE_BREAK_50_50',
          suspects: [
            room.players.get(top1[0]),
            room.players.get(top2[0])
          ],
          voteCountEach: top1[1],
          totalVotes: totalVotesReceived,
          ratio: 0.5,
          counts
        };
      } else {
        // Tie between suspects but neither reached 50% alone (e.g. 2 vs 2 vs 1 in 5 votes)
        return {
          result: 'NO_ELIMINATION',
          reason: 'BELOW_50_PERCENT',
          topSuspect: room.players.get(top1[0]),
          topCount: top1[1],
          ratio: top1[1] / totalVotesReceived,
          counts,
          totalVotes: totalVotesReceived
        };
      }
    }

    // Check 50% threshold: "từ 50% là bị loại"
    const topRatio = top1[1] / totalVotesReceived;
    if (topRatio >= 0.5) {
      const eliminatedPlayer = room.players.get(top1[0]);
      if (eliminatedPlayer) {
        eliminatedPlayer.isAlive = false;
      }

      // Check win condition
      const remainingAlive = Array.from(room.players.values()).filter(p => p.isAlive);
      const remainingImposters = remainingAlive.filter(p => p.role === 'IMPOSTER');

      let gameOver = false;
      let winner = null;

      if (remainingImposters.length === 0) {
        gameOver = true;
        winner = 'CIVILIAN';
        room.status = 'GAME_OVER';
        room.winner = winner;
      } else if (remainingImposters.length >= (remainingAlive.length - remainingImposters.length)) {
        gameOver = true;
        winner = 'IMPOSTER';
        room.status = 'GAME_OVER';
        room.winner = winner;
      }

      // Trao điểm khi kết thúc trận đấu (bảo lưu theo phòng)
      if (gameOver) {
        for (const p of room.players.values()) {
          let delta = 0;
          if (winner === 'CIVILIAN') {
            if (p.role === 'CIVILIAN') {
              delta = p.isAlive ? 15 : 5;
            }
          } else if (winner === 'IMPOSTER') {
            if (p.role === 'IMPOSTER') {
              delta = 25;
            }
          }
          // Điểm thưởng khi bỏ phiếu đúng Kẻ Giả Mạo
          if (eliminatedPlayer && eliminatedPlayer.role === 'IMPOSTER' && room.votes.get(p.id) === eliminatedPlayer.id) {
            delta += 5;
          }
          p.roundDelta = delta;
          p.score = (p.score || 0) + delta;
        }
      }

      return {
        result: 'ELIMINATE',
        eliminatedPlayer,
        voteCount: top1[1],
        totalVotes: totalVotesReceived,
        ratio: topRatio,
        counts,
        gameOver,
        winner
      };
    } else {
      // Top candidate has < 50% of the votes
      return {
        result: 'NO_ELIMINATION',
        reason: 'BELOW_50_PERCENT',
        topSuspect: room.players.get(top1[0]),
        topCount: top1[1],
        ratio: topRatio,
        counts,
        totalVotes: totalVotesReceived
      };
    }
  }

  // Get sanitized public room state (never leaks secret words of others)
  getPublicRoomState(roomCode, viewingPlayerId) {
    const room = this.rooms.get(roomCode);
    if (!room) return null;

    const me = room.players.get(viewingPlayerId);

    const publicPlayers = Array.from(room.players.values()).map(p => {
      const isMe = p.id === viewingPlayerId;
      return {
        id: p.id,
        name: p.name,
        avatar: p.avatar,
        isHost: p.isHost,
        isAlive: p.isAlive,
        hasVoted: p.hasVoted,
        isConnected: p.isConnected,
        score: p.score || 0,
        roundDelta: p.roundDelta || 0,
        // Secret role and word are ONLY exposed to the viewing player or when game over
        role: (isMe || room.status === 'GAME_OVER') ? p.role : undefined,
        secretWord: (isMe || room.status === 'GAME_OVER') ? p.secretWord : undefined
      };
    });

    // Bảng xếp hạng realtime trong phòng: Sắp xếp giảm dần theo điểm số
    const ranking = [...publicPlayers].sort((a, b) => (b.score || 0) - (a.score || 0)).map((p, idx) => ({
      rank: idx + 1,
      id: p.id,
      name: p.name,
      avatar: p.avatar,
      score: p.score || 0,
      roundDelta: p.roundDelta || 0,
      isHost: p.isHost,
      isAlive: p.isAlive,
      isConnected: p.isConnected,
      role: (room.status === 'GAME_OVER') ? p.role : undefined
    }));

    const activeSpeaker = this.getCurrentSpeaker(room);

    return {
      code: room.code,
      status: room.status,
      round: room.round,
      turnDurationSec: room.turnDurationSec,
      voteDurationSec: room.voteDurationSec,
      imposterCount: room.imposterCount || 1,
      categoryId: room.categoryId || 'all',
      category: room.category,
      settings: {
        imposterCount: room.imposterCount || 1,
        turnDurationSec: room.turnDurationSec || 30,
        voteDurationSec: room.voteDurationSec || 25,
        categoryId: room.categoryId || 'all'
      },
      players: publicPlayers,
      ranking: ranking,
      winner: room.winner || null,
      secretWords: room.status === 'GAME_OVER' ? room.secretWords : undefined,
      hostId: room.hostId,
      myPlayerId: viewingPlayerId,
      myRole: me ? me.role : null,
      mySecretWord: me ? me.secretWord : null,
      activeSpeakerId: activeSpeaker ? activeSpeaker.id : null,
      activeSpeakerName: activeSpeaker ? activeSpeaker.name : null,
      tieBreakSuspects: room.tieBreakSuspects,
      votedCount: room.votes.size,
      totalEligibleVoters: Array.from(room.players.values()).filter(p => p.isAlive).length
    };
  }
}

module.exports = RoomManager;
