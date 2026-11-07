/**
 * Faker / IYKYK Party Game - Online Realtime Controller
 * Powers multi-device online gameplay, circular Werewolf Voice-style turns,
 * and dedicated multi-device voting with 50% threshold and 50/50 tie-break rules.
 */

class OnlineGameController {
  constructor() {
    this.socket = null;
    this.isConnected = false;
    this.roomCode = null;
    this.myPlayerId = null;
    this.myPlayerInfo = null;
    this.currentRoomState = null;
    this.selectedSuspectId = null;
    this.hasSubmittedVote = false;
    this.timerInterval = null;
    this.turnTimerInterval = null;

    // Detect server endpoint (Render, local, or current window host)
    this.serverUrl = (typeof window !== 'undefined' && window.location && window.location.origin && window.location.origin.startsWith('http'))
      ? window.location.origin
      : 'http://localhost:8080';
  }

  init() {
    this.bindDOMEvents();
  }

  connectSocket() {
    if (this.socket && this.socket.connected) return;

    if (typeof io === 'undefined') {
      console.warn('[ONLINE] Socket.io client library not loaded yet');
      return;
    }

    try {
      this.socket = io(this.serverUrl, {
        transports: ['websocket', 'polling'],
        timeout: 10000,
        reconnectionAttempts: 5
      });

      this.socket.on('connect', () => {
        console.log('[ONLINE] Socket connected:', this.socket.id);
        this.isConnected = true;
      });

      this.socket.on('disconnect', () => {
        console.log('[ONLINE] Socket disconnected');
        this.isConnected = false;
      });

      // Synchronize Room State
      this.socket.on('room:state', (state) => {
        this.handleRoomStateUpdate(state);
      });

      // Active Speaker Spotlight (Werewolf Voice)
      this.socket.on('turn:active_speaker', (data) => {
        this.handleActiveSpeaker(data);
      });

      this.socket.on('turn:timer_tick', (data) => {
        this.handleTurnTick(data.remaining);
      });

      // Voting Phase Events
      this.socket.on('vote:phase_start', (data) => {
        this.handleVotePhaseStart(data);
      });

      this.socket.on('vote:progress', (data) => {
        this.handleVoteProgress(data);
      });

      this.socket.on('vote:timer_tick', (data) => {
        this.handleVoteTimerTick(data.remaining);
      });

      // Tie-break 50/50 defense event
      this.socket.on('vote:tie_break_50_50', (data) => {
        this.handleTieBreak5050(data);
      });

      this.socket.on('turn:defense_start', (data) => {
        this.handleDefenseStart(data);
      });

      // Elimination event (>= 50%)
      this.socket.on('vote:eliminated', (data) => {
        this.handleEliminated(data);
      });

      // No elimination event (< 50%)
      this.socket.on('vote:no_elimination', (data) => {
        this.handleNoElimination(data);
      });

    } catch (err) {
      console.error('[ONLINE] Failed to init socket connection:', err);
    }
  }

  bindDOMEvents() {
    // Mode tab toggle (Chuyền máy vs Chơi Online)
    const modeTabOnline = document.getElementById('mode-tab-online');
    const modeTabPass = document.getElementById('mode-tab-pass');
    const passContainer = document.getElementById('pass-settings-container');
    const onlineHub = document.getElementById('online-hub-container');

    modeTabOnline?.addEventListener('click', (e) => {
      e.preventDefault();
      modeTabOnline.classList.add('active');
      modeTabPass?.classList.remove('active');
      if (passContainer) passContainer.style.display = 'none';
      if (onlineHub) onlineHub.style.display = 'block';

      // Connect socket if not yet connected
      this.connectSocket();
      if (typeof sound !== 'undefined') sound.playClick();
    });

    modeTabPass?.addEventListener('click', () => {
      modeTabPass.classList.add('active');
      modeTabOnline?.classList.remove('active');
      if (passContainer) passContainer.style.display = 'block';
      if (onlineHub) onlineHub.style.display = 'none';
      if (typeof sound !== 'undefined') sound.playClick();
    });

    // Subtabs: Tạo phòng / Vào phòng
    const btnSubCreate = document.getElementById('btn-subtab-create-room');
    const btnSubJoin = document.getElementById('btn-subtab-join-room');
    const panelCreate = document.getElementById('panel-create-room');
    const panelJoin = document.getElementById('panel-join-room');

    btnSubCreate?.addEventListener('click', () => {
      btnSubCreate.classList.add('active');
      btnSubJoin?.classList.remove('active');
      if (panelCreate) panelCreate.style.display = 'block';
      if (panelJoin) panelJoin.style.display = 'none';
      if (typeof sound !== 'undefined') sound.playClick();
    });

    btnSubJoin?.addEventListener('click', () => {
      btnSubJoin.classList.add('active');
      btnSubCreate?.classList.remove('active');
      if (panelJoin) panelJoin.style.display = 'block';
      if (panelCreate) panelCreate.style.display = 'none';
      if (typeof sound !== 'undefined') sound.playClick();
    });

    // Online Imposter Stepper
    document.getElementById('btn-dec-online-imp')?.addEventListener('click', () => {
      const el = document.getElementById('val-online-imp');
      let val = parseInt(el?.textContent || '1', 10);
      if (val > 1) {
        val--;
        if (el) el.textContent = val;
        if (typeof sound !== 'undefined') sound.playStepper();
      }
    });

    document.getElementById('btn-inc-online-imp')?.addEventListener('click', () => {
      const el = document.getElementById('val-online-imp');
      let val = parseInt(el?.textContent || '1', 10);
      if (val < 4) {
        val++;
        if (el) el.textContent = val;
        if (typeof sound !== 'undefined') sound.playStepper();
      }
    });

    // Create Room Button
    document.getElementById('btn-do-create-room')?.addEventListener('click', () => {
      this.handleCreateRoomClick();
    });

    // Join Room Button
    document.getElementById('btn-do-join-room')?.addEventListener('click', () => {
      this.handleJoinRoomClick();
    });

    // Lobby: Copy Room Code
    document.getElementById('btn-copy-room-link')?.addEventListener('click', () => {
      if (this.roomCode) {
        navigator.clipboard?.writeText(this.roomCode);
        this.showToast(`📋 Đã sao chép mã phòng: ${this.roomCode}`);
      }
    });

    // Lobby: Leave Room
    document.getElementById('btn-leave-online-room')?.addEventListener('click', () => {
      if (confirm('Bạn có chắc muốn rời phòng đấu này?')) {
        window.location.reload();
      }
    });

    // Lobby: Host Start Match
    document.getElementById('btn-start-online-match')?.addEventListener('click', () => {
      this.handleHostStartMatch();
    });

    // Stage: Pass turn early
    document.getElementById('btn-pass-turn-done')?.addEventListener('click', () => {
      if (this.socket && this.roomCode) {
        this.socket.emit('turn:next', { roomCode: this.roomCode, playerId: this.myPlayerId });
        if (typeof sound !== 'undefined') sound.playClick();
      }
    });

    // Online Voting: Cast Vote
    document.getElementById('btn-online-cast-vote')?.addEventListener('click', () => {
      this.submitVote(this.selectedSuspectId);
    });

    // Online Voting: Skip Vote (Phiếu trắng)
    document.getElementById('btn-online-skip-vote')?.addEventListener('click', () => {
      this.submitVote('SKIP');
    });
  }

  showToast(message, type = 'info') {
    if (window.fakerApp && typeof window.fakerApp.showToast === 'function') {
      window.fakerApp.showToast(message, type);
    } else {
      console.log(`[TOAST ${type}]`, message);
    }
  }

  switchScreen(screenId) {
    document.querySelectorAll('.view-screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(screenId);
    if (target) {
      target.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  startPollingRoomState() {
    if (this.pollingInterval) clearInterval(this.pollingInterval);
    this.pollingInterval = setInterval(async () => {
      if (!this.roomCode) return;
      try {
        const res = await fetch(`${this.serverUrl}/api/v1/rooms/${this.roomCode}?playerId=${this.myPlayerId || ''}`);
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.room) {
            this.handleRoomStateUpdate(data.room);
          }
        }
      } catch (err) {}
    }, 2000);
  }

  // Handle Create Room
  handleCreateRoomClick() {
    this.connectSocket();
    const hostNameInput = document.getElementById('input-online-host-name');
    const hostName = (hostNameInput?.value || '').trim() || 'Chủ phòng';
    const turnDuration = document.getElementById('select-turn-duration')?.value || 30;
    const imposterCount = document.getElementById('val-online-imp')?.textContent || 1;

    const payload = {
      hostName,
      settings: {
        turnDurationSec: turnDuration,
        imposterCount: imposterCount,
        voteDurationSec: 25
      }
    };

    if (this.socket && this.socket.connected) {
      this.socket.emit('room:create', payload, (res) => {
        if (res && res.success) {
          this.roomCode = res.roomCode;
          this.myPlayerId = res.playerId;
          this.myPlayerInfo = res.player;
          this.switchScreen('screen-online-lobby');
          this.showToast(`🎉 Đã tạo phòng: ${this.roomCode}`, 'success');
        } else {
          alert(res?.message || 'Không thể tạo phòng');
        }
      });
    } else {
      fetch(`${this.serverUrl}/api/v1/rooms/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      .then(r => r.json())
      .then(res => {
        if (res.success) {
          this.roomCode = res.roomCode;
          this.myPlayerId = res.playerId;
          this.myPlayerInfo = res.player;
          this.switchScreen('screen-online-lobby');
          this.showToast(`🎉 Đã tạo phòng: ${this.roomCode}`, 'success');
          this.startPollingRoomState();
        } else {
          alert(res.message || 'Không thể tạo phòng');
        }
      })
      .catch(err => {
        alert('Lỗi kết nối máy chủ: ' + err.message);
      });
    }
  }

  // Handle Join Room
  handleJoinRoomClick() {
    this.connectSocket();
    const codeInput = document.getElementById('input-join-room-code');
    const nameInput = document.getElementById('input-join-player-name');
    const roomCode = (codeInput?.value || '').trim().toUpperCase();
    const playerName = (nameInput?.value || '').trim() || 'Người chơi';

    if (!roomCode || roomCode.length < 4) {
      alert('Vui lòng nhập mã phòng hợp lệ');
      return;
    }

    const payload = { roomCode, playerName };

    if (this.socket && this.socket.connected) {
      this.socket.emit('room:join', payload, (res) => {
        if (res && res.success) {
          this.roomCode = res.roomCode;
          this.myPlayerId = res.playerId;
          this.myPlayerInfo = res.player;
          this.switchScreen('screen-online-lobby');
          this.showToast(`✅ Đã tham gia phòng ${this.roomCode}!`, 'success');
        } else {
          alert(res?.message || 'Không thể vào phòng');
        }
      });
    } else {
      fetch(`${this.serverUrl}/api/v1/rooms/join`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      .then(r => r.json())
      .then(res => {
        if (res.success) {
          this.roomCode = res.roomCode;
          this.myPlayerId = res.playerId;
          this.myPlayerInfo = res.player;
          this.switchScreen('screen-online-lobby');
          this.showToast(`✅ Đã tham gia phòng ${this.roomCode}!`, 'success');
          this.startPollingRoomState();
        } else {
          alert(res.message || 'Không thể vào phòng');
        }
      })
      .catch(err => {
        alert('Lỗi kết nối máy chủ: ' + err.message);
      });
    }
  }

  // Host Starts Match
  handleHostStartMatch() {
    if (!this.roomCode) return;
    const payload = {
      roomCode: this.roomCode,
      playerId: this.myPlayerId
    };

    if (this.socket && this.socket.connected) {
      this.socket.emit('room:start_match', payload, (res) => {
        if (!res.success) {
          alert(res.message || 'Không thể bắt đầu');
        }
      });
    } else {
      fetch(`${this.serverUrl}/api/v1/rooms/start`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      .then(r => r.json())
      .then(res => {
        if (!res.success) {
          alert(res.message || 'Không thể bắt đầu');
        }
      });
    }
  }

  // Handle Full Room State Updates
  handleRoomStateUpdate(state) {
    if (!state) return;
    this.currentRoomState = state;

    // 1. If in LOBBY
    if (state.status === 'LOBBY') {
      this.renderLobbyState(state);
    }
    // 2. If in PLAYING_DESCRIPTION
    else if (state.status === 'PLAYING_DESCRIPTION') {
      this.renderStageState(state);
    }
    // 3. If in VOTING or TIE_BREAK_VOTING
    else if (state.status === 'VOTING' || state.status === 'TIE_BREAK_VOTING') {
      this.renderVotingState(state);
    }
    // 4. If GAME_OVER
    else if (state.status === 'GAME_OVER') {
      this.renderGameOver(state);
    }
  }

  renderLobbyState(state) {
    const codeEl = document.getElementById('lobby-room-code');
    const inlineCodeEl = document.getElementById('lobby-inline-code');
    const countEl = document.getElementById('lobby-player-count');
    const grid = document.getElementById('lobby-players-grid');
    const hostControls = document.getElementById('lobby-host-controls');
    const guestWaiting = document.getElementById('lobby-guest-waiting');

    if (codeEl) codeEl.textContent = state.code;
    if (inlineCodeEl) inlineCodeEl.textContent = state.code;
    if (countEl) countEl.textContent = state.players.length;

    const isHost = (this.myPlayerId === state.hostId);
    if (hostControls) hostControls.style.display = isHost ? 'block' : 'none';
    if (guestWaiting) guestWaiting.style.display = isHost ? 'none' : 'block';

    const startBtn = document.getElementById('btn-start-online-match');
    if (startBtn) {
      startBtn.disabled = (state.players.length < 3);
      startBtn.style.opacity = (state.players.length < 3) ? '0.5' : '1';
    }

    if (grid) {
      grid.innerHTML = state.players.map((p, idx) => `
        <div class="online-player-card ${p.id === this.myPlayerId ? 'my-card' : ''}">
          <div class="online-player-avatar">${p.avatar || '👤'}</div>
          <div class="online-player-name">${p.name} ${p.id === this.myPlayerId ? '(Bạn)' : ''}</div>
          <div class="online-player-badge">
            ${p.isHost ? '<span class="badge-host">👑 Chủ phòng</span>' : '<span class="badge-ready">✓ Sẵn sàng</span>'}
          </div>
        </div>
      `).join('');
    }
  }

  renderStageState(state) {
    this.switchScreen('screen-online-stage');

    // Update Round Badge
    const roundBadge = document.getElementById('stage-round-badge');
    if (roundBadge) roundBadge.textContent = `Vòng ${state.round || 1}`;

    // Update Private Word / Role Display
    const wordEl = document.getElementById('stage-private-word');
    const hintEl = document.getElementById('stage-private-hint');

    if (state.myRole === 'IMPOSTER') {
      if (wordEl) {
        wordEl.textContent = '🎭 KẺ GIẢ MẠO';
        wordEl.style.color = '#ef4444';
      }
      if (hintEl) {
        hintEl.innerHTML = 'Bạn là <strong>Kẻ Giả Mạo</strong>! Bạn không có từ khóa bí mật. Hãy lắng nghe thật kỹ mô tả của mọi người để hòa nhập và đoán từ khóa.';
      }
    } else {
      if (wordEl) {
        wordEl.textContent = state.mySecretWord || '---';
        wordEl.style.color = 'var(--primary-accent)';
      }
      if (hintEl) {
        hintEl.innerHTML = 'Bạn là <strong>Dân Thường</strong>! Hãy mô tả từ khóa một cách tinh tế để phe Dân nhận ra nhau, nhưng đừng nói quá rõ khiến Imposter đoán được.';
      }
    }

    // Render turn order chips
    const chipsContainer = document.getElementById('stage-turn-order-chips');
    if (chipsContainer) {
      chipsContainer.innerHTML = state.players.map(p => {
        const isSpeaker = p.id === state.activeSpeakerId;
        const isMe = p.id === this.myPlayerId;
        return `
          <div class="turn-chip ${isSpeaker ? 'active-turn' : ''} ${!p.isAlive ? 'dead' : ''}">
            <span class="chip-avatar">${p.avatar}</span>
            <span class="chip-name">${p.name}${isMe ? ' (Bạn)' : ''}</span>
            ${isSpeaker ? '<span class="chip-mic">🎙️</span>' : ''}
          </div>
        `;
      }).join('');
    }
  }

  // Active Speaker Spotlight handler
  handleActiveSpeaker({ speakerId, speakerName, avatar, durationSec }) {
    const avatarEl = document.getElementById('stage-speaker-avatar');
    const nameEl = document.getElementById('stage-speaker-name');
    const timerEl = document.getElementById('stage-turn-timer');
    const myTurnActions = document.getElementById('stage-my-turn-actions');
    const guideEl = document.getElementById('stage-speaker-guide');

    const isMyTurn = (speakerId === this.myPlayerId);

    if (avatarEl) avatarEl.textContent = avatar || '🎙️';
    if (nameEl) {
      nameEl.textContent = isMyTurn ? '🗣️ ĐẾN LƯỢT BẠN PHÁT BIỂU!' : `${speakerName} đang phát biểu...`;
      nameEl.style.color = isMyTurn ? '#10b981' : 'var(--text-primary)';
    }

    if (guideEl) {
      guideEl.textContent = isMyTurn
        ? 'Hãy nói 1 câu mô tả ngắn gọn về từ khóa của bạn!'
        : `Lắng nghe ${speakerName} mô tả để tìm điểm nghi vấn.`;
    }

    if (timerEl) timerEl.textContent = `${durationSec}s`;
    if (myTurnActions) myTurnActions.style.display = isMyTurn ? 'block' : 'none';

    if (typeof sound !== 'undefined') {
      if (isMyTurn) sound.playSuccess();
      else sound.playTurnChange();
    }
  }

  handleTurnTick(remaining) {
    const timerEl = document.getElementById('stage-turn-timer');
    if (timerEl) {
      timerEl.textContent = `${remaining}s`;
      if (remaining <= 5) {
        timerEl.style.color = '#ef4444';
      } else {
        timerEl.style.color = 'var(--text-primary)';
      }
    }
  }

  // ========================================================
  // DEDICATED ONLINE VOTING SCREEN (50% RULE & 50/50 TIE-BREAK)
  // ========================================================
  handleVotePhaseStart({ durationSec, isTieBreak, tieBreakSuspects }) {
    this.switchScreen('screen-online-voting');
    this.selectedSuspectId = null;
    this.hasSubmittedVote = false;

    // Hide any previous alert banners
    const bannerTie = document.getElementById('banner-tiebreak-5050');
    const bannerElim = document.getElementById('banner-elimination-result');
    if (bannerTie) bannerTie.style.display = 'none';
    if (bannerElim) bannerElim.style.display = 'none';

    const pill = document.getElementById('online-voting-round-pill');
    if (pill) {
      pill.textContent = isTieBreak ? '⚖️ BỎ PHIẾU LẠI (HÒA 50/50)' : '🗳️ BIỂU QUYẾT LOẠI TRỪ';
      pill.style.background = isTieBreak ? 'rgba(245, 158, 11, 0.2)' : 'rgba(239, 68, 68, 0.2)';
      pill.style.color = isTieBreak ? '#f59e0b' : '#ef4444';
    }

    const countdown = document.getElementById('online-voting-countdown');
    if (countdown) countdown.textContent = `⏳ ${durationSec}s`;

    // Render Candidate Cards
    this.renderVotingCandidates(isTieBreak, tieBreakSuspects);

    if (typeof sound !== 'undefined') {
      sound.playCountdown(3);
    }
  }

  renderVotingCandidates(isTieBreak = false, tieBreakSuspects = []) {
    const grid = document.getElementById('online-voting-candidates-grid');
    if (!grid || !this.currentRoomState) return;

    const alivePlayers = this.currentRoomState.players.filter(p => p.isAlive);

    // Filter to only tie break suspects if in tie break voting
    const eligibleCandidates = (isTieBreak && tieBreakSuspects.length === 2)
      ? alivePlayers.filter(p => tieBreakSuspects.includes(p.id))
      : alivePlayers;

    grid.innerHTML = eligibleCandidates.map(candidate => {
      const isMe = candidate.id === this.myPlayerId;
      return `
        <div class="online-suspect-card ${isMe ? 'is-self' : ''}" data-suspect-id="${candidate.id}">
          <div class="suspect-avatar">${candidate.avatar}</div>
          <div class="suspect-info">
            <div class="suspect-name">${candidate.name} ${isMe ? '(Bạn)' : ''}</div>
            <div class="suspect-meta">${isMe ? 'Không thể tự vote mình' : 'Chạm để chọn nghi phạm'}</div>
          </div>
          <div class="suspect-select-check">◯</div>
        </div>
      `;
    }).join('');

    // Attach click events on suspect cards
    grid.querySelectorAll('.online-suspect-card').forEach(card => {
      card.addEventListener('click', () => {
        if (this.hasSubmittedVote) return;
        const suspectId = card.getAttribute('data-suspect-id');
        if (suspectId === this.myPlayerId) {
          this.showToast('⚠️ Bạn không thể tự bỏ phiếu cho chính mình!');
          return;
        }

        // Highlight selection
        grid.querySelectorAll('.online-suspect-card').forEach(c => {
          c.classList.remove('selected');
          const check = c.querySelector('.suspect-select-check');
          if (check) check.textContent = '◯';
        });

        card.classList.add('selected');
        const check = card.querySelector('.suspect-select-check');
        if (check) check.textContent = '✓';

        this.selectedSuspectId = suspectId;

        // Enable Submit Button
        const submitBtn = document.getElementById('btn-online-cast-vote');
        const statusText = document.getElementById('online-my-vote-status');
        const suspect = this.currentRoomState.players.find(p => p.id === suspectId);

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.style.opacity = '1';
        }
        if (statusText && suspect) {
          statusText.innerHTML = `Đã chọn: <strong style="color: #ef4444;">${suspect.name}</strong>`;
        }

        if (typeof sound !== 'undefined') sound.playCardFlip();
      });
    });
  }

  submitVote(suspectId) {
    if (this.hasSubmittedVote) return;
    if (!this.roomCode) return;

    this.hasSubmittedVote = true;
    const submitBtn = document.getElementById('btn-online-cast-vote');
    const skipBtn = document.getElementById('btn-online-skip-vote');
    const statusText = document.getElementById('online-my-vote-status');

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>✓</span> <span>Đã Gửi Phiếu</span>';
      submitBtn.style.background = '#10b981';
    }
    if (skipBtn) skipBtn.disabled = true;

    if (statusText) {
      statusText.innerHTML = (suspectId === 'SKIP')
        ? '<span style="color: #64748b;">Bạn đã bỏ phiếu trắng</span>'
        : '<span style="color: #10b981;">Phiếu của bạn đã được ghi nhận bí mật!</span>';
    }

    const payload = {
      roomCode: this.roomCode,
      voterPlayerId: this.myPlayerId,
      suspectPlayerId: suspectId
    };

    if (this.socket && this.socket.connected) {
      this.socket.emit('vote:cast', payload);
    } else {
      fetch(`${this.serverUrl}/api/v1/rooms/vote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    }

    if (typeof sound !== 'undefined') sound.playConfirm();
  }

  handleVoteProgress({ votedCount, totalEligible }) {
    const textEl = document.getElementById('text-voting-progress');
    const barEl = document.getElementById('bar-voting-progress');

    if (textEl) {
      textEl.textContent = `Đã bỏ phiếu: ${votedCount}/${totalEligible} người`;
    }
    if (barEl && totalEligible > 0) {
      const pct = Math.round((votedCount / totalEligible) * 100);
      barEl.style.width = `${pct}%`;
    }
  }

  handleVoteTimerTick(remaining) {
    const countdown = document.getElementById('online-voting-countdown');
    if (countdown) {
      countdown.textContent = `⏳ ${remaining}s`;
      if (remaining <= 5) {
        countdown.style.background = 'rgba(239, 68, 68, 0.3)';
        countdown.style.color = '#ef4444';
      }
    }
  }

  // Handle 50/50 Tie-break Event
  handleTieBreak5050({ suspects, voteCountEach, totalVotes }) {
    const banner = document.getElementById('banner-tiebreak-5050');
    const desc = document.getElementById('tiebreak-desc');

    if (banner) banner.style.display = 'flex';
    if (desc && suspects.length === 2) {
      desc.innerHTML = `
        <strong>${suspects[0].name}</strong> và <strong>${suspects[1].name}</strong> cùng nhận <strong>${voteCountEach}/${totalVotes} phiếu (50% - 50%)</strong>!<br />
        ⚖️ Chưa ai bị loại! Hệ thống mở vòng tranh luận bảo chữa 25s cho mỗi người trước khi vote lại.
      `;
    }

    if (typeof sound !== 'undefined') sound.playWarning();
  }

  handleDefenseStart({ activeSpeaker, durationSec, message }) {
    const banner = document.getElementById('banner-tiebreak-5050');
    const desc = document.getElementById('tiebreak-desc');

    if (desc) {
      desc.innerHTML = `
        🎙️ <strong>${activeSpeaker.name}</strong> đang phát biểu bảo chữa (${durationSec}s)!<br />
        ${activeSpeaker.id === this.myPlayerId ? '🗣️ Hãy tận dụng 25s này để chứng minh bạn vô tội!' : 'Lắng nghe xem ai là kẻ giả mạo!'}
      `;
    }

    if (typeof sound !== 'undefined') sound.playTurnChange();
  }

  // Handle Elimination (>= 50%)
  handleEliminated({ eliminatedPlayer, voteCount, totalVotes, ratio, gameOver, winner }) {
    const banner = document.getElementById('banner-elimination-result');
    const title = document.getElementById('elimination-title');
    const desc = document.getElementById('elimination-desc');

    const pct = Math.round(ratio * 100);

    if (banner) {
      banner.style.display = 'flex';
      banner.className = 'elimination-alert-box elim-dead';
    }
    if (title) {
      title.textContent = `🚨 ${eliminatedPlayer.name} BỊ LOẠI!`;
    }
    if (desc) {
      desc.innerHTML = `Nhận được <strong>${voteCount}/${totalVotes} phiếu (${pct}% ≥ 50%)</strong>. Danh tính: <strong>${eliminatedPlayer.role === 'IMPOSTER' ? 'Kẻ Giả Mạo 🎭' : 'Dân Thường 👤'}</strong>`;
    }

    if (typeof sound !== 'undefined') sound.playEliminated();
  }

  // Handle No Elimination (< 50%)
  handleNoElimination({ reason, totalVotes, topCount }) {
    const banner = document.getElementById('banner-elimination-result');
    const title = document.getElementById('elimination-title');
    const desc = document.getElementById('elimination-desc');

    if (banner) {
      banner.style.display = 'flex';
      banner.className = 'elimination-alert-box elim-safe';
    }
    if (title) {
      title.textContent = '🕊️ KHÔNG AI BỊ LOẠI VÒNG NÀY!';
    }
    if (desc) {
      desc.innerHTML = `Không có người chơi nào nhận đủ <strong>≥ 50%</strong> số phiếu bầu của cả phòng.<br />Trận đấu tiếp tục với vòng mô tả tiếp theo.`;
    }

    if (typeof sound !== 'undefined') sound.playSafe();
  }

  renderGameOver(state) {
    this.switchScreen('screen-results');
    // Delegate to standard game over rendering
    if (window.fakerApp && typeof window.fakerApp.renderFinalResults === 'function') {
      window.fakerApp.renderFinalResults();
    }
  }
}

// Instantiate global online controller
window.onlineController = new OnlineGameController();
document.addEventListener('DOMContentLoaded', () => {
  window.onlineController.init();
});
