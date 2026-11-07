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
    this._connectedUrl = null;
  }

  get serverUrl() {
    return this.resolveServerUrl();
  }

  resolveServerUrl() {
    // 1. Check custom configured URL in localStorage or FakerAPI
    const custom = (typeof localStorage !== 'undefined' && localStorage.getItem('faker_api_url'))
      || (typeof window !== 'undefined' && window.FakerAPI && window.FakerAPI.customUrl);
    if (custom) {
      return custom.replace(/\/api\/v1\/?$/, '').replace(/\/api\/?$/, '').replace(/\/+$/, '');
    }

    // 2. Local environment
    if (typeof window !== 'undefined' && window.location && window.location.origin) {
      const origin = window.location.origin;
      if (origin.includes('localhost') || origin.includes('127.0.0.1')) {
        return origin;
      }
      if (origin.includes('onrender.com')) {
        return origin;
      }
    }

    // 3. Remote hosting fallback (Vercel, Netlify, custom domains) -> point to production Render backend
    return 'https://iykyk-game.onrender.com';
  }

  async safeFetchJson(url, options = {}) {
    let res;
    try {
      res = await fetch(url, options);
    } catch (netErr) {
      throw new Error(`Không thể kết nối đến máy chủ (${this.serverUrl}). Vui lòng kiểm tra mạng hoặc thử lại!`);
    }

    const contentType = res.headers.get('content-type') || '';
    if (!res.ok) {
      if (res.status === 404) {
        throw new Error(`Máy chủ không hỗ trợ cổng này (404 Not Found) tại ${new URL(url).origin}.`);
      }
      if (res.status === 502 || res.status === 503 || res.status === 504) {
        throw new Error(`Máy chủ Render đang thức giấc (cold start). Vui lòng đợi khoảng 20-30 giây rồi bấm thử lại!`);
      }
      const errText = await res.text().catch(() => '');
      throw new Error(`Lỗi máy chủ (${res.status}): ${errText.slice(0, 100)}`);
    }

    if (!contentType.includes('application/json')) {
      const rawText = await res.text().catch(() => '');
      throw new Error(`Máy chủ phản hồi định dạng không hợp lệ: ${rawText.slice(0, 80)}`);
    }

    return await res.json();
  }

  init() {
    this.bindDOMEvents();
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const roomParam = urlParams.get('room');
      if (roomParam) {
        const modeTabOnline = document.getElementById('mode-tab-online');
        const btnSubJoin = document.getElementById('btn-subtab-join-room');
        const inputJoinCode = document.getElementById('input-join-code');
        if (inputJoinCode) inputJoinCode.value = roomParam.trim().toUpperCase();
        if (modeTabOnline) modeTabOnline.click();
        if (btnSubJoin) btnSubJoin.click();
      }
    } catch (e) {
      console.warn('[ONLINE] Error parsing url params:', e);
    }
  }

  connectSocket() {
    const targetUrl = this.serverUrl;
    if (this.socket && this.socket.connected && this._connectedUrl === targetUrl) return;

    if (this.socket) {
      try { this.socket.disconnect(); } catch (e) {}
      this.socket = null;
    }

    if (typeof io === 'undefined') {
      console.warn('[ONLINE] Socket.io client library not loaded yet');
      return;
    }

    try {
      this._connectedUrl = targetUrl;
      console.log('[ONLINE] Connecting socket to:', targetUrl);
      this.socket = io(targetUrl, {
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

      // Room closed / disbanded (e.g. empty room)
      this.socket.on('room:closed', (data) => {
        alert(data?.reason || 'Phòng đã tự động giải tán do không còn người chơi nào.');
        this.handleLeaveRoomCleanup();
      });

      // Player was kicked by host
      this.socket.on('room:kicked', (data) => {
        alert(data?.message || 'Bạn đã bị chủ phòng mời ra khỏi phòng đấu.');
        this.handleLeaveRoomCleanup();
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

    // Online Lobby Sub-tabs: Chỗ ngồi vs Bảng xếp hạng
    const tabSeats = document.getElementById('tab-lobby-seats');
    const tabRanking = document.getElementById('tab-lobby-ranking');
    const panelSeats = document.getElementById('panel-lobby-seats');
    const panelRanking = document.getElementById('panel-lobby-ranking');

    tabSeats?.addEventListener('click', () => {
      tabSeats.classList.add('active');
      tabRanking?.classList.remove('active');
      if (panelSeats) panelSeats.style.display = 'block';
      if (panelRanking) panelRanking.style.display = 'none';
      if (typeof sound !== 'undefined') sound.playClick();
    });

    tabRanking?.addEventListener('click', () => {
      tabRanking.classList.add('active');
      tabSeats?.classList.remove('active');
      if (panelSeats) panelSeats.style.display = 'none';
      if (panelRanking) panelRanking.style.display = 'block';
      if (typeof sound !== 'undefined') sound.playClick();
    });

    // Modal Online Room Ranking Open/Close
    document.getElementById('btn-open-room-ranking')?.addEventListener('click', () => {
      const modal = document.getElementById('modal-online-ranking');
      if (modal) modal.classList.add('open');
      if (typeof sound !== 'undefined') sound.playClick();
    });

    document.getElementById('btn-close-online-ranking')?.addEventListener('click', () => {
      const modal = document.getElementById('modal-online-ranking');
      if (modal) modal.classList.remove('open');
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

    // Lobby: Share Room Button -> Opens QR Share Modal
    document.getElementById('btn-share-room-link')?.addEventListener('click', () => {
      this.openShareModal();
    });

    // Share Modal Events
    document.getElementById('btn-close-online-share')?.addEventListener('click', () => {
      this.closeShareModal();
    });

    document.getElementById('modal-online-share')?.addEventListener('click', (e) => {
      if (e.target.id === 'modal-online-share') {
        this.closeShareModal();
      }
    });

    document.getElementById('btn-share-copy-code')?.addEventListener('click', () => {
      if (this.roomCode) {
        navigator.clipboard?.writeText(this.roomCode);
        this.showToast(`📋 Đã sao chép mã phòng: ${this.roomCode}`, 'success');
      }
    });

    document.getElementById('btn-share-copy-link')?.addEventListener('click', () => {
      if (this.roomCode) {
        const shareUrl = `${window.location.origin}${window.location.pathname}?room=${this.roomCode}`;
        navigator.clipboard?.writeText(shareUrl);
        this.showToast(`🔗 Đã chép link phòng: ${this.roomCode}`, 'success');
      }
    });

    document.getElementById('btn-share-zalo')?.addEventListener('click', () => {
      if (!this.roomCode) return;
      const shareUrl = `${window.location.origin}${window.location.pathname}?room=${this.roomCode}`;
      window.open(`https://zalo.me/share?url=${encodeURIComponent(shareUrl)}`, '_blank');
    });

    document.getElementById('btn-share-messenger')?.addEventListener('click', () => {
      if (!this.roomCode) return;
      const shareUrl = `${window.location.origin}${window.location.pathname}?room=${this.roomCode}`;
      if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        window.location.href = `fb-messenger://share/?link=${encodeURIComponent(shareUrl)}`;
      } else {
        window.open(`https://www.facebook.com/dialog/send?link=${encodeURIComponent(shareUrl)}&app_id=291494419107518&redirect_uri=${encodeURIComponent(shareUrl)}`, '_blank');
      }
    });

    document.getElementById('btn-share-telegram')?.addEventListener('click', () => {
      if (!this.roomCode) return;
      const shareUrl = `${window.location.origin}${window.location.pathname}?room=${this.roomCode}`;
      window.open(`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent('Vào phòng chơi Kẻ Giả Mạo! Mã phòng: ' + this.roomCode)}`, '_blank');
    });

    document.getElementById('btn-share-save-qr')?.addEventListener('click', () => {
      this.saveQrCard();
    });

    // Leave Room (Xoá toàn bộ điểm nếu không còn ai)
    const handleLeaveRoom = () => {
      if (!confirm('Bạn có chắc muốn rời phòng? Nếu tất cả người chơi rời đi, điểm số và phòng sẽ tự động xóa sạch.')) return;
      if (this.socket && this.socket.connected) {
        this.socket.emit('room:leave', { roomCode: this.roomCode, playerId: this.myPlayerId });
      } else if (this.roomCode) {
        this.safeFetchJson(`${this.serverUrl}/api/v1/rooms/leave`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ roomCode: this.roomCode, playerId: this.myPlayerId })
        }).catch(() => {});
      }
      this.handleLeaveRoomCleanup();
    };

    document.getElementById('btn-header-leave-online')?.addEventListener('click', handleLeaveRoom);
    document.getElementById('btn-leave-online-room')?.addEventListener('click', handleLeaveRoom);
    document.getElementById('btn-online-results-leave')?.addEventListener('click', handleLeaveRoom);

    // Host Reset Scores
    const handleResetScores = () => {
      if (!confirm('Bạn có chắc muốn đặt lại điểm của tất cả người chơi trong phòng về 0?')) return;
      if (this.socket && this.socket.connected) {
        this.socket.emit('room:reset_scores', { roomCode: this.roomCode, playerId: this.myPlayerId });
      } else {
        this.safeFetchJson(`${this.serverUrl}/api/v1/rooms/reset_scores`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ roomCode: this.roomCode, playerId: this.myPlayerId })
        }).catch(err => alert('Lỗi: ' + err.message));
      }
      this.showToast('🔄 Đã đặt lại điểm số cả phòng về 0', 'info');
    };

    document.getElementById('btn-lobby-reset-scores')?.addEventListener('click', handleResetScores);
    document.getElementById('btn-online-results-reset-scores')?.addEventListener('click', handleResetScores);

    // Host Start Match
    document.getElementById('btn-start-online-match')?.addEventListener('click', () => {
      this.handleHostStartMatch();
    });

    // Host Start Next Round (Giữ điểm bảng xếp hạng)
    document.getElementById('btn-online-next-round')?.addEventListener('click', () => {
      if (this.socket && this.socket.connected) {
        this.socket.emit('room:return_to_lobby', { roomCode: this.roomCode, playerId: this.myPlayerId });
      } else {
        this.safeFetchJson(`${this.serverUrl}/api/v1/rooms/reset_to_lobby`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ roomCode: this.roomCode, playerId: this.myPlayerId })
        }).catch(err => alert('Lỗi: ' + err.message));
      }
    });

    // Stage: Toggle Private Word Privacy
    document.getElementById('btn-toggle-private-word')?.addEventListener('click', () => {
      const wordEl = document.getElementById('stage-private-word');
      const iconEl = document.getElementById('btn-toggle-private-icon');
      const textEl = document.getElementById('btn-toggle-private-text');
      if (wordEl) {
        wordEl.classList.toggle('word-hidden');
        const isHidden = wordEl.classList.contains('word-hidden');
        if (iconEl) iconEl.textContent = isHidden ? '👁️‍🗨️' : '👁️';
        if (textEl) textEl.textContent = isHidden ? 'Hiện từ' : 'Ẩn từ';
        if (typeof sound !== 'undefined') sound.playClick();
      }
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

  handleLeaveRoomCleanup() {
    if (this.pollingInterval) clearInterval(this.pollingInterval);
    if (this.timerInterval) clearInterval(this.timerInterval);
    if (this.turnTimerInterval) clearInterval(this.turnTimerInterval);
    this.roomCode = null;
    this.myPlayerId = null;
    this.myPlayerInfo = null;
    this.currentRoomState = null;
    this.selectedSuspectId = null;
    this.hasSubmittedVote = false;
    this.setOnlineHeaderMode(false);
    this.switchScreen('screen-setup');
    const onlineHub = document.getElementById('online-hub-container');
    const passContainer = document.getElementById('pass-settings-container');
    const modeTabOnline = document.getElementById('mode-tab-online');
    const modeTabPass = document.getElementById('mode-tab-pass');
    if (onlineHub) onlineHub.style.display = 'none';
    if (passContainer) passContainer.style.display = 'block';
    if (modeTabPass) modeTabPass.classList.add('active');
    if (modeTabOnline) modeTabOnline.classList.remove('active');
  }

  setOnlineHeaderMode(isOnline, stageName = 'Cài đặt ván') {
    const btnLeaderboard = document.getElementById('btn-open-leaderboard');
    const btnLeave = document.getElementById('btn-header-leave-online');
    const stageTitle = document.getElementById('header-stage-title');

    if (isOnline) {
      if (btnLeaderboard) btnLeaderboard.style.display = 'none';
      if (btnLeave) btnLeave.classList.remove('hidden');
      if (stageTitle) stageTitle.textContent = stageName;
    } else {
      if (btnLeaderboard) btnLeaderboard.style.display = '';
      if (btnLeave) btnLeave.classList.add('hidden');
      if (stageTitle && window.fakerApp) {
        stageTitle.textContent = 'Cài đặt ván';
      }
    }
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
    const fetchState = async () => {
      if (!this.roomCode) return;
      try {
        const data = await this.safeFetchJson(`${this.serverUrl}/api/v1/rooms/${this.roomCode}?playerId=${this.myPlayerId || ''}`);
        if (data.success && data.room) {
          this.handleRoomStateUpdate(data.room);
        }
      } catch (err) {}
    };
    fetchState(); // Immediate fetch without 2s delay
    this.pollingInterval = setInterval(fetchState, 2000);
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
      this.safeFetchJson(`${this.serverUrl}/api/v1/rooms/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      .then(res => {
        if (res.success) {
          this.roomCode = res.roomCode;
          this.myPlayerId = res.playerId;
          this.myPlayerInfo = res.player;
          this.switchScreen('screen-online-lobby');
          this.showToast(`🎉 Đã tạo phòng: ${this.roomCode}`, 'success');
          if (res.player) {
            this.handleRoomStateUpdate({
              code: res.roomCode,
              status: 'LOBBY',
              hostId: res.playerId,
              players: [res.player],
              ranking: [{ rank: 1, ...res.player }]
            });
          }
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
      this.safeFetchJson(`${this.serverUrl}/api/v1/rooms/join`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
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
      this.safeFetchJson(`${this.serverUrl}/api/v1/rooms/start`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      .then(res => {
        if (!res.success) {
          alert(res.message || 'Không thể bắt đầu');
        }
      })
      .catch(err => {
        alert('Lỗi kết nối máy chủ: ' + err.message);
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

  renderRankingListHtml(ranking) {
    if (!ranking || ranking.length === 0) {
      return '<div style="text-align: center; color: var(--text-muted); padding: 16px; font-size: 12.5px;">Chưa có dữ liệu xếp hạng</div>';
    }

    const sorted = [...ranking].sort((a, b) => (b.score || 0) - (a.score || 0));

    return sorted.map((p, idx) => {
      const rank = idx + 1;
      let rankClass = '';
      let rankMedal = `#${rank}`;
      if (rank === 1) { rankClass = 'rank-top-1'; rankMedal = '🥇'; }
      else if (rank === 2) { rankClass = 'rank-top-2'; rankMedal = '🥈'; }
      else if (rank === 3) { rankClass = 'rank-top-3'; rankMedal = '🥉'; }

      const isSelf = (p.id === this.myPlayerId);
      const isHost = p.isHost;

      return `
        <div class="ranking-item-card ${rankClass} ${isSelf ? 'is-self' : ''}">
          <div class="ranking-badge-pos">${rankMedal}</div>
          <div class="ranking-player-info">
            <span class="ranking-avatar">${p.avatar || '👤'}</span>
            <div style="min-width: 0;">
              <div class="ranking-player-name">
                ${p.name} ${isSelf ? '<span style="color: #3b82f6; font-size: 11px;">(Bạn)</span>' : ''}
              </div>
              <div style="display: flex; gap: 4px; margin-top: 2px;">
                ${isHost ? '<span class="badge-host" style="font-size: 9px; padding: 1px 5px;">👑 Chủ</span>' : ''}
                ${p.role === 'IMPOSTER' ? '<span style="font-size: 9px; color: #ef4444; font-weight: 700;">🎭 Kẻ Giả Mạo</span>' : ''}
              </div>
            </div>
          </div>
          <div class="ranking-score-box">
            <span class="ranking-score-val">⭐ ${p.score || 0} đ</span>
            ${p.roundDelta ? `<span class="ranking-score-delta">+${p.roundDelta}</span>` : ''}
          </div>
        </div>
      `;
    }).join('');
  }

  getPlayerInitials(name) {
    if (!name) return '👤';
    const clean = name.replace(/[^\p{L}\p{N}\s]/gu, '').trim();
    const parts = clean.split(/\s+/).filter(Boolean);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    if (parts.length === 1 && parts[0].length >= 2) {
      return parts[0].substring(0, 2).toUpperCase();
    }
    return (name[0] || '👤').toUpperCase();
  }

  openShareModal() {
    if (!this.roomCode) return;
    const shareUrl = `${window.location.origin}${window.location.pathname}?room=${this.roomCode}`;
    
    // Update texts
    const codeEl = document.getElementById('share-modal-room-code');
    if (codeEl) codeEl.textContent = this.roomCode;
    
    const linkEl = document.getElementById('share-modal-link-text');
    if (linkEl) linkEl.textContent = shareUrl;

    // Render QR Code inside #share-qr-target
    const qrContainer = document.getElementById('share-qr-target');
    if (qrContainer) {
      qrContainer.innerHTML = '';
      if (typeof QRCode !== 'undefined') {
        new QRCode(qrContainer, {
          text: shareUrl,
          width: 190,
          height: 190,
          colorDark: '#000000',
          colorLight: '#ffffff',
          correctLevel: QRCode.CorrectLevel.H
        });
      } else {
        const img = document.createElement('img');
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&margin=10&format=png&data=${encodeURIComponent(shareUrl)}`;
        img.style.width = '190px';
        img.style.height = '190px';
        img.alt = `Mã QR phòng ${this.roomCode}`;
        qrContainer.appendChild(img);
      }
    }

    const modal = document.getElementById('modal-online-share');
    if (modal) modal.classList.add('open');
    if (typeof sound !== 'undefined') sound.playClick();
  }

  closeShareModal() {
    const modal = document.getElementById('modal-online-share');
    if (modal) modal.classList.remove('open');
    if (typeof sound !== 'undefined') sound.playClick();
  }

  saveQrCard() {
    try {
      const qrCanvas = document.querySelector('#share-qr-target canvas');
      const qrImg = document.querySelector('#share-qr-target img');

      const outCanvas = document.createElement('canvas');
      outCanvas.width = 600;
      outCanvas.height = 760;
      const ctx = outCanvas.getContext('2d');

      // 1. Background dark navy
      ctx.fillStyle = '#0d1322';
      ctx.fillRect(0, 0, outCanvas.width, outCanvas.height);

      // 2. White card
      ctx.fillStyle = '#ffffff';
      const cardX = 40, cardY = 110, cardW = 520, cardH = 590, r = 36;
      ctx.beginPath();
      ctx.moveTo(cardX + r, cardY);
      ctx.arcTo(cardX + cardW, cardY, cardX + cardW, cardY + cardH, r);
      ctx.arcTo(cardX + cardW, cardY + cardH, cardX, cardY + cardH, r);
      ctx.arcTo(cardX, cardY + cardH, cardX, cardY, r);
      ctx.arcTo(cardX, cardY, cardX + cardW, cardY, r);
      ctx.closePath();
      ctx.fill();

      // 3. Header title on dark top
      ctx.font = 'bold 26px sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.fillText('KẺ GIẢ MẠO • PHÒNG ĐẤU', outCanvas.width / 2, 55);

      ctx.font = 'bold 22px monospace';
      ctx.fillStyle = '#60a5fa';
      ctx.fillText(`MÃ PHÒNG: ${this.roomCode}`, outCanvas.width / 2, 90);

      // 4. Draw QR Code in white card
      const drawAndSave = (source) => {
        ctx.drawImage(source, 70, 150, 460, 460);

        // Center Gamepad Badge
        const badgeW = 96, badgeH = 96;
        const bx = outCanvas.width / 2 - badgeW / 2;
        const by = 150 + 230 - badgeH / 2;
        const br = 22;

        ctx.fillStyle = '#3b82f6';
        ctx.beginPath();
        ctx.moveTo(bx + br, by);
        ctx.arcTo(bx + badgeW, by, bx + badgeW, by + badgeH, br);
        ctx.arcTo(bx + badgeW, by + badgeH, bx, by + badgeH, br);
        ctx.arcTo(bx, by + badgeH, bx, by, br);
        ctx.arcTo(bx, by, bx + badgeW, by, br);
        ctx.closePath();
        ctx.fill();

        ctx.lineWidth = 6;
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();

        ctx.font = '46px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('🎮', outCanvas.width / 2, by + badgeH / 2);

        // Caption at bottom
        ctx.font = 'bold 24px sans-serif';
        ctx.fillStyle = '#1e293b';
        ctx.textBaseline = 'alphabetic';
        ctx.fillText('Quét mã vào phòng ngay', outCanvas.width / 2, 660);

        // Download
        const link = document.createElement('a');
        link.download = `QR-Phong-${this.roomCode}.png`;
        link.href = outCanvas.toDataURL('image/png');
        link.click();
        this.showToast(`💾 Đã lưu ảnh QR phòng: ${this.roomCode}!`, 'success');
      };

      if (qrCanvas) {
        drawAndSave(qrCanvas);
      } else if (qrImg && qrImg.complete) {
        drawAndSave(qrImg);
      } else {
        this.showToast('Đang tạo mã QR, vui lòng bấm lại sau 1 giây...', 'info');
      }
    } catch (err) {
      console.warn('Lỗi lưu ảnh QR:', err);
      this.showToast('Không thể lưu ảnh QR trên trình duyệt này', 'error');
    }
  }

  renderLobbyState(state) {
    this.switchScreen('screen-online-lobby');
    this.setOnlineHeaderMode(true, 'Cài đặt ván');
    const codeEl = document.getElementById('lobby-room-code');
    const inlineCodeEl = document.getElementById('lobby-inline-code');
    const countEl = document.getElementById('lobby-player-count');
    const countTabEl = document.getElementById('lobby-player-count-tab');
    const countPill = document.getElementById('lobby-player-count-pill');
    const grid = document.getElementById('lobby-players-grid');
    const hostControls = document.getElementById('lobby-host-controls');
    const guestWaiting = document.getElementById('lobby-guest-waiting');
    const lobbyRankingList = document.getElementById('lobby-ranking-list');
    const modalRankingList = document.getElementById('modal-ranking-list');
    const btnResetLobby = document.getElementById('btn-lobby-reset-scores');

    if (codeEl) codeEl.textContent = state.code;
    if (inlineCodeEl) inlineCodeEl.textContent = state.code;
    if (countEl) countEl.textContent = state.players.length;
    if (countTabEl) countTabEl.textContent = state.players.length;
    if (countPill) countPill.textContent = `${state.players.length}/12`;

    const isHost = (this.myPlayerId === state.hostId);
    if (hostControls) hostControls.style.display = isHost ? 'block' : 'none';
    if (guestWaiting) guestWaiting.style.display = isHost ? 'none' : 'block';
    if (btnResetLobby) btnResetLobby.style.display = isHost ? 'inline-flex' : 'none';

    // Start Button and Hint
    const startBtn = document.getElementById('btn-start-online-match');
    const hintEl = document.getElementById('lobby-start-hint');
    const hintTextEl = document.getElementById('lobby-start-hint-text');
    const neededPlayers = Math.max(0, 3 - state.players.length);

    if (startBtn) {
      startBtn.disabled = (state.players.length < 3);
      startBtn.style.opacity = (state.players.length < 3) ? '0.55' : '1';
      startBtn.style.cursor = (state.players.length < 3) ? 'not-allowed' : 'pointer';
    }

    if (hintEl && hintTextEl) {
      if (state.players.length < 3) {
        hintEl.classList.remove('ready');
        hintTextEl.textContent = `Cần thêm ít nhất ${neededPlayers} người chơi để bắt đầu`;
      } else {
        hintEl.classList.add('ready');
        hintTextEl.textContent = `Đã đủ người chơi để bắt đầu ván đấu!`;
      }
    }

    if (grid) {
      const players = state.players || [];
      const totalSeats = Math.max(6, Math.min(12, Math.ceil((players.length + 1) / 3) * 3));
      let cardsHtml = '';

      // Occupied Seats
      players.forEach((p) => {
        const pIsHost = p.isHost || (p.id === state.hostId);
        const isSelf = (p.id === this.myPlayerId);
        const canKick = isHost && !pIsHost;
        const initials = this.getPlayerInitials(p.name);
        const avatarContent = initials;

        const crownSvg = `
          <div class="host-floating-crown-svg">
            <svg width="28" height="19" viewBox="0 0 28 19" fill="none">
              <path d="M3 15.5h22v2.5H3v-2.5zm0-9.5 4.5 7.5h13L25 6l-6.5 4.5L14 1.5 9.5 10.5 3 6z" fill="url(#crown-grad-${p.id})"/>
              <defs>
                <linearGradient id="crown-grad-${p.id}" x1="3" y1="1.5" x2="25" y2="18" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FDE047"/>
                  <stop offset="1" stop-color="#F59E0B"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        `;

        cardsHtml += `
          <div class="online-player-card ${isSelf ? 'my-card' : ''} ${pIsHost ? 'host-card' : ''}">
            <div class="card-avatar-wrap">
              ${pIsHost ? crownSvg : ''}
              <div class="card-avatar-circle ${pIsHost ? 'host-avatar' : 'guest-avatar'}">
                ${avatarContent}
              </div>
            </div>
            <div class="card-player-name" title="${p.name}">
              ${p.name}
            </div>
            <div class="card-score-pill">
              ⭐ ${p.score || 0}đ
            </div>
            <div class="card-role-wrap">
              ${pIsHost 
                ? '<span class="role-badge-host">★ CHỦ PHÒNG</span>' 
                : '<span class="role-badge-ready">✓ SẴN SÀNG</span>'}
            </div>
            ${canKick ? `
              <button class="btn-card-kick" data-player-id="${p.id}" data-player-name="${p.name}" type="button" title="Mời người chơi này ra khỏi phòng">
                <span>👢 Kick</span>
              </button>
            ` : ''}
          </div>
        `;
      });

      // Empty / Invite Seats
      for (let i = players.length; i < totalSeats; i++) {
        const seatNum = i + 1;
        const isInvite = seatNum <= 3;
        cardsHtml += `
          <div class="online-seat-empty ${isInvite ? 'seat-invite' : ''}" data-seat="${seatNum}" role="button" tabindex="0" title="Bấm để mời bạn bè">
            <div class="seat-dashed-circle">
              <span>+</span>
            </div>
            <span class="seat-label">${isInvite ? 'Mời bạn' : 'Trống'}</span>
            <span class="seat-sub">Ghế số ${seatNum}</span>
          </div>
        `;
      }

      grid.innerHTML = cardsHtml;

      // Click on empty seats triggers share/copy link
      grid.querySelectorAll('.online-seat-empty').forEach(el => {
        el.addEventListener('click', () => {
          document.getElementById('btn-share-room-link')?.click();
        });
      });

      // Kick buttons
      grid.querySelectorAll('.btn-card-kick').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const targetId = btn.getAttribute('data-player-id');
          const targetName = btn.getAttribute('data-player-name') || 'người chơi';
          this.handleKickPlayer(targetId, targetName);
        });
      });
    }

    const rankingHtml = this.renderRankingListHtml(state.ranking || state.players);
    if (lobbyRankingList) lobbyRankingList.innerHTML = rankingHtml;
    if (modalRankingList) modalRankingList.innerHTML = rankingHtml;
  }

  handleKickPlayer(targetPlayerId, targetPlayerName) {
    if (!confirm(`Bạn có chắc muốn mời ${targetPlayerName} ra khỏi phòng đấu?`)) return;

    if (this.socket && this.socket.connected) {
      this.socket.emit('room:kick', {
        roomCode: this.roomCode,
        hostPlayerId: this.myPlayerId,
        targetPlayerId
      }, (res) => {
        if (res && res.success) {
          this.showToast(`👢 Đã mời ${targetPlayerName} ra khỏi phòng`, 'info');
        } else {
          alert(res?.message || 'Không thể kick người chơi');
        }
      });
    } else {
      this.safeFetchJson(`${this.serverUrl}/api/v1/rooms/kick`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          roomCode: this.roomCode,
          hostPlayerId: this.myPlayerId,
          targetPlayerId
        })
      })
      .then(res => {
        if (res.success) {
          this.showToast(`👢 Đã mời ${targetPlayerName} ra khỏi phòng`, 'info');
          this.startPollingRoomState();
        } else {
          alert(res.message || 'Không thể kick người chơi');
        }
      })
      .catch(err => alert('Lỗi: ' + err.message));
    }
  }

  renderVotingState(state) {
    this.switchScreen('screen-online-voting');
    const isTieBreak = (state.status === 'TIE_BREAK_VOTING');
    this.setOnlineHeaderMode(true, isTieBreak ? 'Bỏ phiếu lại' : 'Bỏ phiếu');
    this.renderVotingCandidates(isTieBreak, state.tieBreakSuspects || []);
  }

  renderStageState(state) {
    this.switchScreen('screen-online-stage');
    this.setOnlineHeaderMode(true, `Thảo luận • Vòng ${state.round || 1}`);

    // Update Round Badge
    const roundBadge = document.getElementById('stage-round-badge');
    if (roundBadge) roundBadge.textContent = `Vòng ${state.round || 1}`;

    // Update Private Word / Role Display
    const wordEl = document.getElementById('stage-private-word');
    const hintEl = document.getElementById('stage-private-hint');
    const roleBadge = document.getElementById('stage-role-badge');
    const roleCard = document.getElementById('stage-private-role-card');

    if (state.myRole === 'IMPOSTER') {
      if (roleBadge) {
        roleBadge.textContent = 'Kẻ Giả Mạo';
        roleBadge.className = 'stage-role-badge-pill role-imp';
      }
      if (roleCard) {
        roleCard.className = 'stage-role-banner role-imposter';
      }
      if (wordEl) {
        wordEl.textContent = '🎭 KẺ GIẢ MẠO';
        wordEl.style.color = '#ef4444';
      }
      if (hintEl) {
        hintEl.innerHTML = 'Bạn là <strong>Kẻ Giả Mạo</strong>! Bạn không có từ khóa bí mật. Hãy lắng nghe thật kỹ mô tả của mọi người để hòa nhập và đoán từ khóa.';
      }
    } else {
      if (roleBadge) {
        roleBadge.textContent = 'Dân Thường';
        roleBadge.className = 'stage-role-badge-pill role-civ';
      }
      if (roleCard) {
        roleCard.className = 'stage-role-banner';
      }
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
        const initials = this.getPlayerInitials(p.name);
        return `
          <div class="turn-chip ${isSpeaker ? 'active-turn' : ''} ${!p.isAlive ? 'dead' : ''}">
            <span class="chip-avatar">${initials}</span>
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
    const spotlightBox = document.getElementById('speaker-spotlight-box');

    const isMyTurn = (speakerId === this.myPlayerId);

    if (spotlightBox) {
      if (isMyTurn) spotlightBox.classList.add('is-my-turn');
      else spotlightBox.classList.remove('is-my-turn');
    }

    if (avatarEl) {
      const initials = this.getPlayerInitials(speakerName);
      avatarEl.textContent = initials || avatar || '🎙️';
    }
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
    this.setOnlineHeaderMode(true, isTieBreak ? 'Bỏ phiếu lại' : 'Bỏ phiếu');
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
      const initials = this.getPlayerInitials(candidate.name);
      return `
        <div class="online-suspect-card ${isMe ? 'is-self' : ''}" data-suspect-id="${candidate.id}">
          <div class="suspect-avatar-circle">${initials}</div>
          <div class="suspect-name" title="${candidate.name}">${candidate.name} ${isMe ? '(Bạn)' : ''}</div>
          <div class="suspect-select-badge">
            <span class="suspect-check-icon">◯</span> <span>${isMe ? 'Bạn' : 'Chọn'}</span>
          </div>
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
          const check = c.querySelector('.suspect-check-icon');
          if (check) check.textContent = '◯';
        });

        card.classList.add('selected');
        const check = card.querySelector('.suspect-check-icon');
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
      this.safeFetchJson(`${this.serverUrl}/api/v1/rooms/vote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(err => console.warn('[ONLINE] Vote post fallback failed:', err));
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
    this.switchScreen('screen-online-results');
    this.setOnlineHeaderMode(true, 'Kết quả ván');

    const winnerBanner = document.getElementById('online-result-winner-banner');
    const imposterNamesEl = document.getElementById('online-result-imposter-names');
    const civWordEl = document.getElementById('online-result-civilian-word');
    const impWordEl = document.getElementById('online-result-imposter-word');
    const resultsRankingList = document.getElementById('online-results-ranking-list');
    const hostControls = document.getElementById('online-results-host-controls');
    const guestWaiting = document.getElementById('online-results-guest-waiting');
    const btnResetResults = document.getElementById('btn-online-results-reset-scores');

    const isHost = (this.myPlayerId === state.hostId);
    if (hostControls) hostControls.style.display = isHost ? 'block' : 'none';
    if (guestWaiting) guestWaiting.style.display = isHost ? 'none' : 'block';
    if (btnResetResults) btnResetResults.style.display = isHost ? 'inline-flex' : 'none';

    if (winnerBanner) {
      if (state.winner === 'CIVILIAN') {
        winnerBanner.textContent = '🎉 PHE DÂN LÀNG CHIẾN THẮNG!';
        winnerBanner.style.background = 'linear-gradient(135deg, #059669 0%, #10b981 100%)';
        winnerBanner.style.color = '#ffffff';
      } else {
        winnerBanner.textContent = '🎭 KẺ GIẢ MẠO CHIẾN THẮNG!';
        winnerBanner.style.background = 'linear-gradient(135deg, #b91c1c 0%, #ef4444 100%)';
        winnerBanner.style.color = '#ffffff';
      }
    }

    const imposters = (state.players || []).filter(p => p.role === 'IMPOSTER');
    if (imposterNamesEl) {
      imposterNamesEl.textContent = imposters.length > 0
        ? imposters.map(p => `${p.avatar || '🎭'} ${p.name}`).join(', ')
        : 'Ẩn danh';
    }

    if (state.secretWords) {
      if (civWordEl) civWordEl.textContent = state.secretWords.civilian || '••••';
      if (impWordEl) impWordEl.textContent = state.secretWords.imposter || 'Không có từ';
    }

    if (resultsRankingList) {
      resultsRankingList.innerHTML = this.renderRankingListHtml(state.ranking || state.players);
    }

    if (typeof sound !== 'undefined') {
      if (state.winner === 'CIVILIAN') sound.playSafe?.();
      else sound.playEliminated?.();
    }

    if (typeof confetti === 'function') {
      try {
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    }
  }
}

// Instantiate global online controller
window.onlineController = new OnlineGameController();
document.addEventListener('DOMContentLoaded', () => {
  window.onlineController.init();
});
