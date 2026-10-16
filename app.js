// ==========================================================
// GUESS THE IMPOSTER - ALL-IN-ONE STANDALONE CONTROLLER
// Zero external dependencies, 100% offline & local file compatible
// ==========================================================

// ==========================================
// 1. DATA & AUDIO MODULES
// Loaded via audio.js, data_roles.js, data_categories.js
// ==========================================
const I18N = {
  vi: {
    party_game: "Game Suy Luận Party",
    hero_subtitle: "Ai là Kẻ Giả Mạo đang ẩn nấp?",
    mode_pass: "Chuyền Máy (Offline)",
    mode_online: "Chơi Online (Phòng)",
    room_code: "Mã phòng:",
    online_desc: "Các thiết bị khác truy cập cùng mạng Wi-Fi hoặc nhập mã phòng để tham gia.",
    instruction_text: "Mỗi người chơi bí mật xem vai trò của mình. Hãy thảo luận, tìm manh mối và đoán xem ai là kẻ giả mạo.",
    section_match_settings: "Cài đặt ván chơi",
    setting_players: "Số người chơi",
    setting_players_desc: "Từ 3 đến 20 người",
    setting_imposters: "Kẻ Giả Mạo",
    setting_imposters_desc: "Số lượng Imposter trong ván",
    setting_roles: "Tất cả vai trò",
    setting_roles_desc: "7 vai trò cốt lõi & tự tạo",
    setting_category: "Chủ đề từ khóa",
    setting_hints: "Gợi ý cho Imposter",
    setting_hints_desc: "Cung cấp manh mối cho kẻ giả mạo",
    setting_timelimit: "Giới hạn thời gian",

    btn_start_game: "Bắt đầu thiết lập người chơi",
    btn_back: "Quay lại",
    title_choose_roles: "Quản lý vai trò",
    btn_custom_role: "Tạo vai trò",
    balance_label: "Tỷ lệ cân bằng vai trò:",
    btn_auto_balance: "Tự động cân bằng",
    filter_all: "Tất cả",
    filter_good: "Phe Dân",
    filter_evil: "Phe Ác",
    filter_neutral: "Trung lập",
    filter_custom: "Tự tạo",
    btn_save_roles: "Lưu cấu hình vai trò",
    title_players: "Tên người chơi",
    players_instruction: "Nhập tên của từng người chơi theo thứ tự ngồi chuyền điện thoại theo vòng tròn.",
    btn_deal_roles: "Phân vai & Chuyền điện thoại",
    pass_phone_to: "Chuyền điện thoại cho:",
    curtain_warning: "Đảm bảo những người xung quanh không nhìn thấy màn hình trước khi bấm lật thẻ!",
    btn_curtain_ready: "Tôi đã cầm máy, lật thẻ",
    tap_to_flip: "Chạm để mở thẻ bí mật",
    secret_keyword_label: "Từ khóa bí mật:",
    btn_hide_role: "Đã nhớ, giấu vai trò",
    phase_discussion: "Vòng thảo luận",
    toolbox_btn: "Năng lực bí mật",
    timer_caption: "Thời gian còn lại",
    hint_available: "Gợi ý sẵn sàng",
    discussion_tip: "Lần lượt từng người đưa ra 1 câu mô tả về từ khóa mà không được nói thẳng tên từ. Kẻ giả mạo hãy cố gắng bắt chước!",
    btn_pause: "Tạm dừng",
    btn_resume: "Tiếp tục",
    btn_add_time: "+30 Giây",
    btn_vote_now: "Bỏ phiếu loại Kẻ Giả Mạo",
    title_voting: "Bỏ phiếu loại",
    voting_instruction: "Chọn người chơi mà cả nhóm nghi ngờ là Kẻ Giả Mạo nhiều nhất. Người có nhiều phiếu nhất sẽ bị vạch mặt!",
    suspect_chosen: "Nghi phạm được chọn:",
    btn_confirm_elimination: "Vạch mặt & Công bố kết quả",
    imposter_was: "Kẻ Giả Mạo thực sự là:",
    secret_word_was: "Từ khóa bí mật là:",
    comeback_title: "Cơ hội lật kèo của Imposter!",
    comeback_desc: "Nếu Imposter bị bỏ phiếu loại nhưng đoán đúng từ khóa bí mật, Imposter sẽ LẬT KÈO CHIẾN THẮNG!",
    btn_guess: "Đoán từ",
    section_roster: "Danh tính toàn bộ người chơi",
    section_timeline: "Diễn biến ván đấu",
    btn_play_again: "Tiếp tục chơi",
    btn_change_roles: "Thay đổi vai trò",
    btn_back_home: "Về trang chủ",
    title_history: "Lịch sử ván chơi",
    btn_clear: "Xóa lịch sử",
    modal_custom_role_title: "Tạo vai trò mới",
    form_role_name: "Tên vai trò",
    form_role_icon: "Icon / Emoji",
    form_role_color: "Màu nhận diện",
    form_role_team: "Phe đồng minh",
    form_role_desc: "Mô tả ngắn",
    form_role_ability: "Kỹ năng đặc biệt",
    form_role_win: "Điều kiện chiến thắng",
    form_knows_keyword: "Biết từ khóa",
    form_gets_hint: "Nhận gợi ý",
    btn_save_role: "Lưu vai trò",
    modal_categories_title: "Chọn chủ đề từ khóa",
    toolbox_title: "Hộp công cụ vai trò bí mật",
    section_scoreboard: "Bảng Điểm & Xếp Hạng Party",
    modal_leaderboard_title: "🏆 Bảng Điểm Tích Lũy Party",
    btn_reset_scores: "Đặt lại điểm số giải đấu",
    btn_rules: "Luật",
    section_vocab_topic: "Chủ Đề Từ Vựng",
    badge_topic_options: "2 Tùy chọn",
    topic_specific_title: "Chọn ngữ cảnh",
    topic_specific_desc: "Tự chọn danh mục từ vựng quen thuộc",
    btn_change_topic: "Đổi chủ đề ›",
    topic_random_title: "Ngẫu nhiên",
    topic_random_desc: "Hệ thống tự chọn chủ đề bất ngờ mỗi ván",
    badge_surprise: "Bất ngờ",
    badge_selected: "Đang chọn",
    speakers_list: "Lượt phát biểu vòng này:",
    voting_penalty_rule: "Luật trừ điểm: Nếu trục xuất nhầm DÂN THƯỜNG vô tội, phe Dân sẽ bị trừ -5 điểm và ván chơi tiếp tục sang vòng sau!",
    btn_tie_vote: "Hòa phiếu / Bỏ qua vòng này",
    modal_rules_title: "📜 Luật Chơi Sâu Sắc & Hệ Thống Điểm",
    badge_comeback_stage: "🎲 CƠ HỘI LẬT KÈO CUỐI CÙNG",
    imposter_unmasked_title: "Đã bắt được Kẻ Giả Mạo:",
    comeback_pass_phone: "Chuyền điện thoại cho Kẻ Giả Mạo! Những người chơi khác tuyệt đối không được xem hoặc gợi ý từ khóa.",
    label_imposter_guess_input: "Từ khóa bí mật của phe Dân là gì?",
    btn_confirm_comeback: "Xác nhận đoán từ (+20đ nếu đúng, -10đ nếu sai)",
    btn_giveup: "Không đoán từ (Bảo toàn điểm, không bị phạt -10đ)",
    section_experience: "Tùy chọn trải nghiệm ván chơi",
    setting_roulette: "Vòng quay người nói trước",
    setting_roulette_desc: "Quay bánh xe chọn người phát biểu đầu tiên",
    setting_speech_time: "Thời gian phát biểu mỗi người",
    setting_speech_time_desc: "Thời gian đếm ngược từng lượt phát biểu",
    title_roulette: "Ai Là Người Nói Trước?",
    desc_roulette: "Bánh xe may mắn chọn người đầu tiên phải đưa ra manh mối về từ khóa!",
    btn_skip_wheel: "Bỏ qua",
  }
};

// ==========================================
// 4. MAIN GAME ENGINE
// ==========================================
class ImposterGame {
  constructor() {
    this.theme = localStorage.getItem('gti_theme') || 'dark';

    // Match Configuration
    this.playerCount = 6;
    this.imposterCount = 1;
    this.categoryMode = localStorage.getItem('gti_category_mode') || 'specific'; // 'specific' | 'random'
    this.selectedCategoryId = 'food_drink';
    this.hintsEnabled = true;
    this.durationSeconds = parseInt(localStorage.getItem('gti_discussion_time') || '180', 10);
    this.speechDurationSeconds = parseInt(localStorage.getItem('gti_speech_time') || '30', 10);
    this.rouletteEnabled = localStorage.getItem('gti_roulette') !== 'false';
    this.nightPhaseEnabled = localStorage.getItem('gti_night_phase') !== 'false';
    this.currentNightIndex = 0;
    this.gameMode = 'pass';

    // Special Roles Roll Rate (Tỉ lệ Roll vai trò khác: 25%, 50%, 70%, 85%, 100%)
    this.specialRoleRate = parseInt(localStorage.getItem('gti_special_role_rate') || '85', 10);
    this.roundUsedAbilities = new Set();
    this.firstEliminatedPlayer = null;
    this.allEliminatedPlayers = [];

    // Custom Categories & Word Pairs Management
    this.customCategories = JSON.parse(localStorage.getItem('gti_custom_categories') || '[]');
    this.customWordPairs = JSON.parse(localStorage.getItem('gti_custom_word_pairs') || '[]');
    this.activeWordPairsTab = 'pairs';
    this.editingWordPairId = null;
    this.editingCategoryId = null;
    this.filterWordPairCategory = 'all';
    this.searchWordPairKeyword = '';
    this.secretWord = null;
    this.imposterWord = null;
    this.migrateCustomWordPairs();

    // Fixed Guaranteed Roles (Vai trò cố định kèm số lượng)
    this.fixedRoles = this.loadSavedFixedRoles();

    // Active Roles
    this.customRoles = JSON.parse(localStorage.getItem('gti_custom_roles') || '[]');
    this.roles = this.buildInitialRoles();

    // Match State
    this.players = [];
    this.playerNames = this.loadSavedPlayerNames();
    this.categoryData = null;
    this.currentRevealIndex = 0;
    this.isCardFlipped = false;
    this.revealTimerInterval = null;
    this.isRevealTransitioning = false;
    this.currentSpeakerIndex = 0;

    // Timer & Speech State
    this.timerInterval = null;
    this.timerRemaining = 180;
    this.timerTotal = 180;
    this.isPaused = false;
    this.speechTimerInterval = null;
    this.speechTimerRemaining = 30;
    this.roundNumber = 1;

    // Lucky Wheel State
    this.rouletteAngle = 0;
    this.isSpinning = false;

    // Voting State
    this.selectedSuspectId = null;

    // Results & Scoreboard State
    this.winningTeam = null;
    this.caughtImposter = null;
    this.imposterWonByComeback = false;
    this.history = JSON.parse(localStorage.getItem('gti_history') || '[]');
    this.partyScores = JSON.parse(localStorage.getItem('gti_party_scores') || '{}');
    this.currentScoreboardTab = 'round'; // 'round' | 'cumulative'
    this.lastRoundScores = [];

    this.init();
  }

  loadSavedFixedRoles() {
    try {
      const saved = JSON.parse(localStorage.getItem('gti_fixed_roles') || '{}');
      if (Array.isArray(saved)) {
        const obj = {};
        saved.forEach(id => { obj[id] = 1; });
        return obj;
      } else if (typeof saved === 'object' && saved !== null) {
        return saved;
      }
    } catch (e) { }
    return {};
  }

  getTotalFixedCount() {
    return Object.values(this.fixedRoles || {}).reduce((sum, count) => sum + (count || 0), 0);
  }

  getMaxSpecialAllowed(players = this.playerCount) {
    if (players <= 4) return 1;
    if (players <= 7) return 2;
    if (players <= 11) return 3;
    if (players <= 15) return 4;
    return 5;
  }

  getRecommendedSpecialCount(players = this.playerCount) {
    if (players <= 4) return 1;
    if (players <= 7) return 2;
    if (players <= 11) return 3;
    if (players <= 15) return 4;
    return 5;
  }

  buildInitialRoles() {
    const cloned = DEFAULT_ROLES.map(r => ({
      ...r,
      count: r.defaultCount || 1,
      enabled: r.enabled !== false
    }));
    this.customRoles.forEach(cr => {
      cloned.push({
        ...cr,
        count: cr.defaultCount || 1,
        enabled: cr.enabled !== false
      });
    });
    return cloned;
  }

  init() {
    this.applyTheme();
    this.applyLanguage();
    this.setupDeviceAdaptation();
    this.bindEvents();
    this.updateSoundSettingsUI();

    this.autoBalanceRoles(this.playerCount);
    this.renderFixedRolesChips();
    this.renderSettingsValues();
    this.updateSetupTournamentBanner();
    this.updateStageProgressUI('screen-setup');
  }

  applyTheme() {
    document.documentElement.setAttribute('data-theme', this.theme);
    const icon = document.getElementById('theme-icon');
    if (icon) icon.textContent = this.theme === 'dark' ? '🌙' : '☀️';
    localStorage.setItem('gti_theme', this.theme);

    // Sync Settings Modal Theme UI
    const isDark = this.theme === 'dark';
    const badge = document.getElementById('label-current-theme-badge');
    if (badge) badge.textContent = isDark ? 'Chế độ Tối' : 'Chế độ Sáng';

    const btnDark = document.getElementById('btn-theme-dark');
    const btnLight = document.getElementById('btn-theme-light');
    if (btnDark) btnDark.classList.toggle('active', isDark);
    if (btnLight) btnLight.classList.toggle('active', !isDark);
  }

  setTheme(themeName) {
    this.theme = themeName;
    if (typeof sound !== 'undefined') sound.playToggle();
    this.applyTheme();
  }

  toggleTheme() {
    this.setTheme(this.theme === 'dark' ? 'light' : 'dark');
  }

  openSettingsModal() {
    const modal = document.getElementById('modal-settings');
    if (!modal) return;
    if (typeof sound !== 'undefined') sound.playClick();

    this.applyTheme();
    this.updateSoundSettingsUI();

    modal.classList.add('open');
  }

  updateSoundSettingsUI() {
    const soundBtn = document.getElementById('btn-toggle-sound-switch');
    const soundIcon = document.getElementById('settings-sound-icon');
    const soundText = document.getElementById('settings-sound-text');
    const isMuted = typeof sound !== 'undefined' && sound.muted;

    if (soundBtn) {
      soundBtn.className = `switch-toggle-btn ${isMuted ? 'muted' : 'active'}`;
    }
    if (soundIcon) soundIcon.textContent = isMuted ? '🔇' : '🔊';
    if (soundText) soundText.textContent = isMuted ? 'Đã tắt' : 'Đang bật';

    // Volume Slider
    const slider = document.getElementById('slider-sound-volume');
    const volVal = document.getElementById('val-sound-volume');
    const vol = typeof sound !== 'undefined' ? Math.round((sound.volume ?? 1) * 100) : 100;
    if (slider) slider.value = vol;
    if (volVal) volVal.textContent = `${vol}%`;

    // Haptic Switch
    const hapticSwitch = document.getElementById('switch-haptic');
    if (hapticSwitch && typeof sound !== 'undefined') {
      hapticSwitch.checked = sound.hapticEnabled !== false;
    }
  }

  applyLanguage() {
    document.documentElement.lang = 'vi';
    const dict = I18N.vi || I18N;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    this.renderSettingsValues();
    this.renderRolesList();
  }

  setupDeviceAdaptation() {
    const handleAdaptation = () => {
      const isDesktop = window.innerWidth > 768;
      if (isDesktop) {
        document.body.classList.add('device-desktop');
        document.body.classList.remove('device-mobile', 'frame-mode', 'fullscreen-mode');
      } else {
        document.body.classList.add('device-mobile');
        document.body.classList.remove('device-desktop', 'frame-mode', 'fullscreen-mode');
      }
    };

    handleAdaptation();
    window.addEventListener('resize', handleAdaptation);
    if (window.matchMedia) {
      window.matchMedia('(min-width: 769px)').addEventListener('change', handleAdaptation);
    }
  }

  switchScreen(screenId) {
    sound.playClick();
    if (screenId !== 'screen-comeback' && this.comebackTimerInterval) {
      clearInterval(this.comebackTimerInterval);
      this.comebackTimerInterval = null;
    }
    document.querySelectorAll('.view-screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(screenId);
    if (target) {
      target.classList.add('active');
      target.scrollTop = 0;
    }

    this.updateStageProgressUI(screenId);

    if (screenId === 'screen-history') {
      this.renderHistoryScreen();
    }
    if (screenId === 'screen-roulette') {
      this.drawRouletteWheel();
    }
    if (screenId === 'screen-results') {
      this.renderResultsScoreboard();
    }
  }

  updateStageProgressUI(screenId) {
    const roundSuffix = (this.roundNumber && this.roundNumber > 1) ? ` • Vòng ${this.roundNumber}` : '';

    const stageNames = {
      'screen-setup': 'Cài đặt ván',
      'screen-roles': 'Quản lý vai trò',
      'screen-players': 'Tên người chơi',
      'screen-reveal': 'Lật thẻ',
      'screen-roulette': 'Vòng quay',
      'screen-night': `Ban đêm${roundSuffix}`,
      'screen-discussion': `Thảo luận${roundSuffix}`,
      'screen-voting': `Bỏ phiếu${roundSuffix}`,
      'screen-comeback': 'Lật kèo',
      'screen-results': 'Kết quả',
      'screen-history': 'Lịch sử ván'
    };

    const isMatchPhase = [
      'screen-reveal',
      'screen-roulette',
      'screen-night',
      'screen-discussion',
      'screen-voting',
      'screen-comeback',
      'screen-results'
    ].includes(screenId);

    const titleEl = document.getElementById('header-stage-title');
    if (titleEl) {
      titleEl.textContent = stageNames[screenId] || 'Guess the Imposter';
      titleEl.classList.toggle('match-phase', isMatchPhase);
    }
  }

  autoBalanceRoles(players = this.playerCount) {
    let impCount = 1;
    if (players >= 8 && players <= 12) impCount = 2;
    else if (players >= 13 && players <= 16) impCount = 3;
    else if (players >= 17) impCount = 4;
    this.imposterCount = impCount;

    const maxSpecial = this.getMaxSpecialAllowed(players);
    const fixedRolesList = Object.keys(this.fixedRoles || {});
    let activeSpecialRoles = [];

    if (fixedRolesList.length > 0) {
      activeSpecialRoles = fixedRolesList;
    } else {
      if (players <= 4) {
        activeSpecialRoles = ['spy'];
      } else if (players <= 7) {
        activeSpecialRoles = ['spy', 'jester'];
      } else if (players <= 11) {
        activeSpecialRoles = ['spy', 'jester', 'traitor'];
      } else if (players <= 15) {
        activeSpecialRoles = ['spy', 'jester', 'traitor', 'drunkard'];
      } else {
        activeSpecialRoles = ['spy', 'jester', 'traitor', 'drunkard', 'double_agent'];
      }
    }

    const specialCountUsed = Math.min(activeSpecialRoles.length, maxSpecial, Math.max(0, players - impCount - 1));
    const civCount = Math.max(1, players - impCount - specialCountUsed);
    const chosenSpecials = activeSpecialRoles.slice(0, specialCountUsed);

    this.roles.forEach(r => {
      if (r.id === 'imposter') {
        r.enabled = true;
        r.count = impCount;
      } else if (r.id === 'civilian') {
        r.enabled = true;
        r.count = civCount;
      } else if (chosenSpecials.includes(r.id)) {
        r.enabled = true;
        r.count = (this.fixedRoles && this.fixedRoles[r.id]) ? this.fixedRoles[r.id] : 1;
      } else {
        r.enabled = false;
        r.count = 0;
      }
    });

    this.syncFixedRolesWithDeck();
    this.renderFixedRolesChips();
    this.updateBalanceMeter();
    this.renderSettingsValues();
    if (this.currentRoleFilter) {
      this.renderRolesList(this.currentRoleFilter);
    }
  }

  enableAllRolesInPool() {
    this.roles.forEach(r => {
      r.enabled = true;
      if (!r.count || r.count === 0) r.count = 1;
    });
    this.updateBalanceMeter();
    this.renderRolesList(this.currentRoleFilter || 'all');
    if (typeof sound !== 'undefined') sound.playWinFanfare();
    this.showToast(`🎲 Đã bật ${this.roles.length} vai trò vào vòng quay! Ván đấu vẫn tự động giới hạn tối đa ${this.getMaxSpecialAllowed()} vai trò đặc biệt để bảo toàn số Dân.`);
  }


  getAssignedCount() {
    return this.roles.reduce((sum, r) => sum + (r.enabled ? (r.count || 0) : 0), 0);
  }

  updateBalanceMeter() {
    const total = this.getAssignedCount();
    const meterText = document.getElementById('role-balance-count-text');
    const warningMsg = document.getElementById('role-balance-warning-msg');
    const badgeCount = document.getElementById('badge-roles-count');

    if (badgeCount) badgeCount.textContent = `${total} / ${this.playerCount}`;

    let goodCount = 0, evilCount = 0, neutralCount = 0;
    this.roles.forEach(r => {
      if (r.enabled) {
        if (r.team === 'good') goodCount += r.count;
        else if (r.team === 'evil') evilCount += r.count;
        else neutralCount += r.count;
      }
    });

    const barGood = document.getElementById('bar-good');
    const barNeutral = document.getElementById('bar-neutral');
    const barEvil = document.getElementById('bar-evil');
    const pct = total > 0 ? 100 / total : 0;
    if (barGood) barGood.style.width = `${goodCount * pct}%`;
    if (barNeutral) barNeutral.style.width = `${neutralCount * pct}%`;
    if (barEvil) barEvil.style.width = `${evilCount * pct}%`;

    if (meterText) {
      meterText.textContent = `${total} / ${this.playerCount} ${'Vai trò'}`;
      if (total === this.playerCount) {
        meterText.className = 'balance-meter-text balanced';
        if (warningMsg) warningMsg.textContent = `✓ Bộ vai trò đã khớp chính xác với ${this.playerCount} người chơi.`;
      } else if (total < this.playerCount) {
        meterText.className = 'balance-meter-text unbalanced';
        const diff = this.playerCount - total;
        if (warningMsg) warningMsg.textContent = `⚠️ Đang thiếu ${diff} vai trò. Nhấn Tự động cân bằng hoặc tăng số Dân thường.`;
      } else {
        meterText.className = 'balance-meter-text unbalanced';
        const diff = total - this.playerCount;
        if (warningMsg) warningMsg.textContent = `⚠️ Đang thừa ${diff} vai trò so với số lượng người chơi.`;
      }
    }
  }

  renderSettingsValues() {
    const valPlayers = document.getElementById('val-players');
    if (valPlayers) valPlayers.textContent = this.playerCount;

    const valImposters = document.getElementById('val-imposters');
    if (valImposters) valImposters.textContent = this.imposterCount;

    const cat = CATEGORIES.find(c => c.id === this.selectedCategoryId) || CATEGORIES[0];
    const catName = document.getElementById('label-category-name');
    if (catName) catName.textContent = cat.name_vi;

    const chipIcon = document.getElementById('chip-category-icon');
    const chipName = document.getElementById('chip-category-name');
    if (chipIcon) chipIcon.textContent = cat.icon;
    if (chipName) {
      const wordsPreview = cat.words.slice(0, 2).map(w => w.civilian || w.vi || w).join(', ');
      chipName.textContent = `${cat.name_vi} (${wordsPreview}...)`;
    }

    const timeVal = document.getElementById('val-time');
    const timeDesc = document.getElementById('label-duration-desc');
    if (timeVal) {
      timeVal.textContent = this.durationSeconds === 0 ? '∞' : `${Math.floor(this.durationSeconds / 60)}m`;
    }
    if (timeDesc) {
      timeDesc.textContent = this.durationSeconds === 0
        ? ('Không giới hạn thời gian thảo luận')
        : (`${Math.floor(this.durationSeconds / 60)} phút / ván thảo luận`);
    }

    const speechVal = document.getElementById('val-speech-time');
    const speechDesc = document.getElementById('label-speech-desc');
    if (speechVal) {
      speechVal.textContent = this.speechDurationSeconds === 0 ? ('Tự do') : `${this.speechDurationSeconds}s`;
    }
    if (speechDesc) {
      speechDesc.textContent = this.speechDurationSeconds === 0
        ? ('Phát biểu tự do, không đếm giây')
        : (`${this.speechDurationSeconds} giây / lượt phát biểu`);
    }

    const rouletteSwitch = document.getElementById('switch-roulette');
    if (rouletteSwitch) {
      rouletteSwitch.checked = this.rouletteEnabled;
    }

    const nightSwitch = document.getElementById('switch-night-phase');
    if (nightSwitch) {
      nightSwitch.checked = this.nightPhaseEnabled;
    }
    const nightModalSwitch = document.getElementById('switch-night-phase-modal');
    if (nightModalSwitch) {
      nightModalSwitch.checked = this.nightPhaseEnabled;
    }


    this.setTopicMode(this.categoryMode || 'specific', false);
    this.updateBalanceMeter();
    this.renderFixedRolesChips();
  }

  setTopicMode(mode, playSound = true) {
    this.categoryMode = mode;
    localStorage.setItem('gti_category_mode', mode);

    const cardSpecific = document.getElementById('opt-topic-specific');
    const cardRandom = document.getElementById('opt-topic-random');
    const statusBadge = document.getElementById('badge-specific-status');

    if (mode === 'specific') {
      cardSpecific?.classList.add('active');
      cardRandom?.classList.remove('active', 'random-mode');
      if (statusBadge) statusBadge.textContent = 'Đang chọn';
    } else {
      cardSpecific?.classList.remove('active');
      cardRandom?.classList.add('active', 'random-mode');
      if (statusBadge) statusBadge.textContent = 'Tự chọn';
    }

    if (playSound) sound.playClick();
  }

  getRoleStatusBadgeHtml(role) {
    const isSpecial = role.id !== 'civilian' && role.id !== 'imposter';
    const isFixed = isSpecial && !!(this.fixedRoles && this.fixedRoles[role.id]);
    const fixedCount = isFixed ? (this.fixedRoles[role.id] || 1) : 0;

    if (!role.enabled || role.count === 0) {
      return `<span class="role-status-badge off">⛔ Đã tắt</span>`;
    }

    if (isFixed) {
      return `<span class="role-status-badge fixed">📌 Cố định${fixedCount > 1 ? ` (${fixedCount})` : ''}</span>`;
    }

    if (isSpecial) {
      return `<span class="role-status-badge pool">🎲 Trong vòng quay ngẫu nhiên</span>`;
    }

    return `<span class="role-status-badge active">✓ Kích hoạt</span>`;
  }

  updateRoleCardBadges(card, role) {
    const badgeSlot = card.querySelector('.role-status-badge-slot');
    if (badgeSlot) {
      badgeSlot.innerHTML = this.getRoleStatusBadgeHtml(role);
    }

    const isSpecial = role.id !== 'civilian' && role.id !== 'imposter';
    if (!isSpecial) return;

    const isFixed = !!(this.fixedRoles && this.fixedRoles[role.id]);
    const fixedCount = isFixed ? (this.fixedRoles[role.id] || 1) : 0;

    const pinLabel = card.querySelector('.role-fixed-pin-label');
    const pinActions = card.querySelector('.role-fixed-pin-actions');
    if (pinLabel && pinActions) {
      pinLabel.className = `role-fixed-pin-label ${isFixed ? 'active' : ''}`;
      pinLabel.textContent = isFixed ? 'Cố định trong ván (chắc chắn xuất hiện):' : 'Tùy chọn cố định vai trò này:';

      pinActions.innerHTML = isFixed ? `
        <div class="fixed-role-stepper-control">
          <button type="button" class="stepper-btn card-dec-fixed" data-role-id="${role.id}" title="Giảm số lượng cố định">-</button>
          <span class="stepper-val card-val-fixed">${fixedCount}</span>
          <button type="button" class="stepper-btn card-inc-fixed" data-role-id="${role.id}" title="Tăng số lượng cố định">+</button>
        </div>
        <button type="button" class="btn-remove-fixed card-remove-fixed" data-role-id="${role.id}" title="Hủy cố định vai trò này">✕</button>
      ` : `
        <button type="button" class="ctrl-btn card-btn-pin-fixed" data-role-id="${role.id}" style="color: #10b981; border-color: rgba(16, 185, 129, 0.4); font-size: 11px; padding: 4px 10px; font-weight: 700;">
          <span>+ Ghim cố định</span>
        </button>
      `;
      this.bindCardFixedEvents(card, role);
    }
  }

  bindCardFixedEvents(card, role) {
    const isSpecial = role.id !== 'civilian' && role.id !== 'imposter';
    if (!isSpecial) return;

    card.querySelector('.card-btn-pin-fixed')?.addEventListener('click', (e) => {
      e.stopPropagation();
      const maxSpecial = this.getMaxSpecialAllowed();
      if (this.getTotalFixedCount() >= maxSpecial) {
        this.showToast(`⚠️ Đã hết slot vai trò đặc biệt (${maxSpecial} slot)!`, 'warning');
        return;
      }
      sound.playClick();
      role.enabled = true;
      if (!role.count || role.count === 0) role.count = 1;
      this.setFixedRoleCount(role.id, 1);
    });

    card.querySelector('.card-inc-fixed')?.addEventListener('click', (e) => {
      e.stopPropagation();
      const maxSpecial = this.getMaxSpecialAllowed();
      if (this.getTotalFixedCount() >= maxSpecial) {
        this.showToast(`⚠️ Đã hết slot vai trò đặc biệt (${maxSpecial} slot)!`, 'warning');
        return;
      }
      const curFixed = (this.fixedRoles && this.fixedRoles[role.id]) || 1;
      if (curFixed >= (role.maxCount || 3)) {
        this.showToast(`⚠️ Vai trò "${role.name_vi}" tối đa ${role.maxCount || 3} người!`, 'warning');
        return;
      }
      sound.playClick();
      this.setFixedRoleCount(role.id, curFixed + 1);
    });

    card.querySelector('.card-dec-fixed')?.addEventListener('click', (e) => {
      e.stopPropagation();
      sound.playClick();
      const curFixed = (this.fixedRoles && this.fixedRoles[role.id]) || 1;
      this.setFixedRoleCount(role.id, curFixed - 1);
    });

    card.querySelector('.card-remove-fixed')?.addEventListener('click', (e) => {
      e.stopPropagation();
      sound.playClick();
      this.setFixedRoleCount(role.id, 0);
    });
  }

  renderRolesList(filter = 'all') {
    this.currentRoleFilter = filter;
    const container = document.getElementById('roles-container');
    if (!container) return;
    const prevScroll = container.scrollTop;
    container.innerHTML = '';

    const filterFixedCountEl = document.getElementById('filter-fixed-count');
    if (filterFixedCountEl) {
      filterFixedCountEl.textContent = Object.keys(this.fixedRoles || {}).length;
    }

    const filtered = this.roles.filter(r => {
      if (filter === 'all') return true;
      if (filter === 'fixed') return !!(this.fixedRoles && this.fixedRoles[r.id]);
      if (filter === 'custom') return !r.isDefault;
      return r.team === filter;
    });

    if (filtered.length === 0 && filter === 'fixed') {
      container.innerHTML = `
        <div style="text-align: center; color: var(--text-muted); padding: 32px 16px; font-size: 13px;">
          <div style="font-size: 28px; margin-bottom: 8px;">📌</div>
          Chưa có vai trò nào được cố định.<br />
          Hãy bấm nút <strong>+ Ghim cố định</strong> ở các vai trò bên dưới để đảm bảo vai trò đó xuất hiện trong ván đấu!
        </div>
      `;
      return;
    }

    filtered.forEach(role => {
      const card = document.createElement('div');
      card.className = `role-card-item ${role.enabled ? 'enabled' : ''}`;
      card.style.setProperty('--role-color', role.color);
      card.style.setProperty('--role-glow', `${role.color}33`);

      const title = role.name_vi;
      const desc = role.desc_vi;
      const ability = role.ability_vi;
      const winCond = role.win_vi;
      const teamLabel = role.team === 'good' ? ('Phe Dân')
        : role.team === 'evil' ? ('Phe Ác')
          : ('Trung lập');

      const isSpecial = role.id !== 'civilian' && role.id !== 'imposter';
      const isFixed = isSpecial && !!(this.fixedRoles && this.fixedRoles[role.id]);
      const fixedCount = isFixed ? (this.fixedRoles[role.id] || 1) : 0;

      card.innerHTML = `
        <div class="role-header-line">
          <div class="role-id-badge">
            <div class="role-emoji-icon" style="background: ${role.color}20; color: ${role.color};">
              ${role.icon}
            </div>
            <div class="role-title-team">
              <div class="role-title-tags">
                <h4>${title}</h4>
                <span class="team-tag ${role.team}">${teamLabel}</span>
              </div>
              <div class="role-status-badge-slot">
                ${this.getRoleStatusBadgeHtml(role)}
              </div>
            </div>
          </div>
          <label class="switch-control" title="${role.enabled ? 'Nhấn để tắt vai trò' : 'Nhấn để bật vai trò'}">
            <input type="checkbox" class="role-toggle-switch" data-role-id="${role.id}" ${role.enabled ? 'checked' : ''} />
            <span class="switch-slider"></span>
          </label>
        </div>

        <p class="role-desc-short">${desc}</p>
        <div class="role-ability-pill">⚡ <strong>Kỹ năng:</strong> ${ability}</div>
        ${winCond ? `
          <div class="role-win-pill">🏆 <strong>Điều kiện thắng & Điểm:</strong> ${winCond}</div>
        ` : ''}

        <div class="role-footer-controls">
          <span style="font-size: 11px; color: var(--text-muted);">
            Số lượng cho phép:
          </span>
          <div class="role-count-stepper">
            <button class="stepper-btn role-dec-btn" data-role-id="${role.id}">-</button>
            <span class="stepper-val" id="role-val-${role.id}">${role.count}</span>
            <button class="stepper-btn role-inc-btn" data-role-id="${role.id}">+</button>
          </div>
        </div>

        ${isSpecial ? `
          <div class="role-fixed-pin-row">
            <div class="role-fixed-pin-info">
              <span class="role-fixed-pin-icon">📌</span>
              <span class="role-fixed-pin-label ${isFixed ? 'active' : ''}">
                ${isFixed ? 'Cố định trong ván (chắc chắn xuất hiện):' : 'Tùy chọn cố định vai trò này:'}
              </span>
            </div>
            <div class="role-fixed-pin-actions">
              ${isFixed ? `
                <div class="fixed-role-stepper-control">
                  <button type="button" class="stepper-btn card-dec-fixed" data-role-id="${role.id}" title="Giảm số lượng cố định">-</button>
                  <span class="stepper-val card-val-fixed">${fixedCount}</span>
                  <button type="button" class="stepper-btn card-inc-fixed" data-role-id="${role.id}" title="Tăng số lượng cố định">+</button>
                </div>
                <button type="button" class="btn-remove-fixed card-remove-fixed" data-role-id="${role.id}" title="Hủy cố định vai trò này">✕</button>
              ` : `
                <button type="button" class="ctrl-btn card-btn-pin-fixed" data-role-id="${role.id}" style="color: #10b981; border-color: rgba(16, 185, 129, 0.4); font-size: 11px; padding: 4px 10px; font-weight: 700;">
                  <span>+ Ghim cố định</span>
                </button>
              `}
            </div>
          </div>
        ` : ''}
      `;

      const toggle = card.querySelector('.role-toggle-switch');
      toggle.addEventListener('change', (e) => {
        sound.playToggle();
        role.enabled = e.target.checked;
        if (role.enabled) {
          if (!role.count || role.count === 0) role.count = 1;
        } else {
          role.count = 0;
          if (this.fixedRoles && this.fixedRoles[role.id]) {
            delete this.fixedRoles[role.id];
            this.saveFixedRoles();
            this.renderFixedRolesChips();
          }
        }
        card.classList.toggle('enabled', role.enabled);
        const valEl = card.querySelector(`#role-val-${role.id}`);
        if (valEl) valEl.textContent = role.count;
        this.updateRoleCardBadges(card, role);
        this.updateBalanceMeter();
      });

      const decBtn = card.querySelector('.role-dec-btn');
      decBtn.addEventListener('click', () => {
        if (role.count > 0) {
          sound.playClick();
          role.count--;
          if (role.count === 0) {
            role.enabled = false;
            toggle.checked = false;
            card.classList.remove('enabled');
            if (this.fixedRoles && this.fixedRoles[role.id]) {
              delete this.fixedRoles[role.id];
              this.saveFixedRoles();
              this.renderFixedRolesChips();
            }
          }
          card.querySelector(`#role-val-${role.id}`).textContent = role.count;
          this.updateRoleCardBadges(card, role);
          this.updateBalanceMeter();
        }
      });

      const incBtn = card.querySelector('.role-inc-btn');
      incBtn.addEventListener('click', () => {
        if (role.count < (role.maxCount || 10)) {
          sound.playClick();
          role.count++;
          role.enabled = true;
          toggle.checked = true;
          card.classList.add('enabled');
          card.querySelector(`#role-val-${role.id}`).textContent = role.count;
          this.updateRoleCardBadges(card, role);
          this.updateBalanceMeter();
        }
      });

      // Bind inline card fixed pin actions
      if (isSpecial) {
        this.bindCardFixedEvents(card, role);
      }

      container.appendChild(card);
    });

    if (prevScroll) {
      container.scrollTop = prevScroll;
    }
  }

  // ==========================================================
  // [SEC 05] PLAYER MANAGEMENT (Edit, Delete, Add, Randomize)
  // ==========================================================
  loadSavedPlayerNames() {
    try {
      const saved = JSON.parse(localStorage.getItem('gti_player_names') || '[]');
      const legacyNames = [
        "Bảo Long", "Minh Anh", "Thỏ Ngọc", "Khánh Vy", "Gia Huy",
        "Tú Linh", "Đức Bo", "Trúc Mây", "Hoàng Nam", "Diệu Nhi",
        "Tuấn Kiệt", "Mai Phương", "Quang Hải", "Hà My", "Hải Đăng",
        "Thanh Hằng", "Duy Mạnh", "Bích Phương", "Tiến Dũng", "Ngọc Trinh"
      ];
      const hasLegacy = Array.isArray(saved) && saved.some(n => legacyNames.includes(n));
      if (Array.isArray(saved) && saved.length >= 3 && !hasLegacy) {
        return saved;
      }
    } catch (e) { }
    const defaultNames = [];
    const count = this.playerCount || 6;
    for (let i = 1; i <= count; i++) {
      defaultNames.push(`Người chơi ${i}`);
    }
    return defaultNames;
  }

  generatePlayerInputs() {
    const container = document.getElementById('player-inputs-container');
    if (!container) return;
    container.innerHTML = '';

    if (!this.playerNames || !Array.isArray(this.playerNames)) {
      this.playerNames = this.loadSavedPlayerNames();
    }

    // Ensure playerNames matches playerCount
    while (this.playerNames.length < this.playerCount) {
      this.playerNames.push(`Người chơi ${this.playerNames.length + 1}`);
    }
    if (this.playerNames.length > this.playerCount) {
      this.playerNames = this.playerNames.slice(0, this.playerCount);
    }
    localStorage.setItem('gti_player_names', JSON.stringify(this.playerNames));

    // Populate datalist with existing tournament players
    const datalist = document.getElementById('datalist-party-roster');
    if (datalist) {
      datalist.innerHTML = '';
      Object.entries(this.partyScores || {}).forEach(([pName, pData]) => {
        const total = typeof pData === 'object' && pData !== null ? (pData.total ?? pData.score ?? pData.points ?? 0) : Number(pData) || 0;
        const opt = document.createElement('option');
        opt.value = pName;
        opt.label = `${pName} (${total} điểm)`;
        datalist.appendChild(opt);
      });
    }

    for (let i = 0; i < this.playerCount; i++) {
      const palette = AVATAR_PALETTES[i % AVATAR_PALETTES.length];
      const currentName = this.playerNames[i] || `Người chơi ${i + 1}`;
      const rawRec = this.partyScores && this.partyScores[currentName];
      const existingRecord = rawRec ? (typeof rawRec === 'object' ? rawRec : { total: Number(rawRec) || 0 }) : null;
      const recTotal = existingRecord ? (existingRecord.total ?? existingRecord.score ?? existingRecord.points ?? 0) : 0;

      const row = document.createElement('div');
      row.className = 'player-item-row';
      row.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px; flex: 1;">
          <button type="button" class="player-avatar-picker-btn" data-index="${i}" title="${'Đổi avatar'}" style="background: ${existingRecord?.avatarBg || palette.bg}; color: ${palette.text};">
            ${existingRecord?.avatar || palette.emoji}
          </button>
          <div style="flex: 1;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 11px; color: var(--text-muted); font-weight: 700;">
                Người chơi ${i + 1}
              </span>
              <span class="player-score-link-badge ${recTotal < 0 ? 'negative' : ''}" id="score-link-${i}" style="${existingRecord ? '' : 'display: none;'}" title="${recTotal < 0 ? ('Điểm tích lũy âm') : ('Đã liên kết hồ sơ điểm giải đấu')}">
                ${existingRecord ? `${recTotal < 0 ? '🔻' : '🏆'} ${recTotal}đ` : ''}
              </span>
            </div>
            <div style="display: flex; align-items: center; gap: 6px; margin-top: 3px;">
              <input type="text" class="player-name-input form-input" data-index="${i}" value="${this.escapeHtml(currentName)}" list="datalist-party-roster" placeholder="Người chơi ${i + 1}" style="padding: 6px 10px; font-weight: 700; font-size: 14px; flex: 1;" />
            </div>
          </div>
        </div>
        <button type="button" class="btn-delete-player" data-index="${i}" title="${'Xóa người chơi này'}">
          🗑️
        </button>
      `;
      container.appendChild(row);
    }

    // Bind real-time input editing & tournament profile linking
    container.querySelectorAll('.player-name-input').forEach(inp => {
      const syncInput = (e) => {
        const idx = parseInt(e.target.dataset.index, 10);
        const val = e.target.value.trim();
        this.playerNames[idx] = val || `Người chơi ${idx + 1}`;
        localStorage.setItem('gti_player_names', JSON.stringify(this.playerNames));

        const badgeEl = document.getElementById(`score-link-${idx}`);
        if (this.partyScores && this.partyScores[val]) {
          const raw = this.partyScores[val];
          const rec = typeof raw === 'object' && raw !== null ? raw : { total: Number(raw) || 0 };
          const recTotal = rec.total ?? rec.score ?? rec.points ?? 0;
          if (badgeEl) {
            badgeEl.textContent = `${recTotal < 0 ? '🔻' : '🏆'} ${recTotal} pts`;
            badgeEl.className = `player-score-link-badge ${recTotal < 0 ? 'negative' : ''}`;
            badgeEl.style.display = 'inline-flex';
          }
          if (rec.avatar) {
            const avatarBtn = container.querySelector(`.player-avatar-picker-btn[data-index="${idx}"]`);
            if (avatarBtn) {
              avatarBtn.textContent = rec.avatar;
              if (rec.avatarBg) avatarBtn.style.background = rec.avatarBg;
            }
          }
        } else if (badgeEl) {
          badgeEl.style.display = 'none';
        }
      };

      inp.addEventListener('input', syncInput);
      inp.addEventListener('change', syncInput);
    });

    // Bind delete player button
    container.querySelectorAll('.btn-delete-player').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.dataset.index, 10);
        this.deletePlayer(idx);
      });
    });

    // Bind avatar shift button
    container.querySelectorAll('.player-avatar-picker-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (typeof sound !== 'undefined') sound.playFlipCard();
        // Shift palettes array for fresh avatars
        const first = AVATAR_PALETTES.shift();
        AVATAR_PALETTES.push(first);
        this.generatePlayerInputs();
      });
    });
  }

  deletePlayer(index) {
    if (this.playerCount <= 3) {
      if (typeof sound !== 'undefined') sound.playEmergencyTick();
      this.showToast('⚠️ Trò chơi cần tối thiểu 3 người chơi!', 'warning');
      return;
    }
    if (typeof sound !== 'undefined') sound.playClick();
    this.playerNames.splice(index, 1);
    this.playerCount = this.playerNames.length;
    localStorage.setItem('gti_player_names', JSON.stringify(this.playerNames));

    // Synchronize Screen 1 players stepper & auto-balance
    const stepperVal = document.getElementById('val-players');
    if (stepperVal) stepperVal.textContent = this.playerCount;
    this.autoBalanceRoles(this.playerCount);
    this.renderSettingsValues();
    this.generatePlayerInputs();
  }

  addPlayer() {
    if (this.playerCount >= 20) {
      if (typeof sound !== 'undefined') sound.playEmergencyTick();
      this.showToast('⚠️ Tối đa 20 người chơi trong một phòng!', 'warning');
      return;
    }
    if (typeof sound !== 'undefined') sound.playClick();
    const newName = `Người chơi ${this.playerNames.length + 1}`;
    this.playerNames.push(newName);
    this.playerCount = this.playerNames.length;
    localStorage.setItem('gti_player_names', JSON.stringify(this.playerNames));

    // Synchronize Screen 1 players stepper & auto-balance
    const stepperVal = document.getElementById('val-players');
    if (stepperVal) stepperVal.textContent = this.playerCount;
    this.autoBalanceRoles(this.playerCount);
    this.renderSettingsValues();
    this.generatePlayerInputs();
  }


  buildMatchDeck() {
    const total = this.playerCount;
    const deck = [];

    // 1. Guaranteed Imposter(s)
    const imposterRole = this.roles.find(r => r.id === 'imposter') || DEFAULT_ROLES[1];

    // Check if any evil special role is fixed
    let evilFixedCount = 0;
    Object.keys(this.fixedRoles || {}).forEach(rId => {
      const r = this.roles.find(x => x.id === rId);
      if (r && r.team === 'evil') evilFixedCount += (this.fixedRoles[rId] || 0);
    });

    const standardImpostersNeeded = Math.max(1, this.imposterCount - evilFixedCount);
    for (let i = 0; i < standardImpostersNeeded; i++) {
      deck.push({ ...imposterRole });
    }

    // 2. Guaranteed Fixed Roles (chắc chắn xuất hiện trong ván)
    const maxSpecial = this.getMaxSpecialAllowed(total);
    let specialCountInDeck = 0;

    Object.entries(this.fixedRoles || {}).forEach(([roleId, count]) => {
      const roleDef = this.roles.find(r => r.id === roleId);
      if (roleDef && roleDef.id !== 'imposter' && roleDef.id !== 'civilian') {
        for (let i = 0; i < count; i++) {
          if (deck.length < total - 1 && specialCountInDeck < maxSpecial) {
            deck.push({ ...roleDef, isGuaranteed: true });
            specialCountInDeck++;
          }
        }
      }
    });

    // 3. Roll for remaining special slots up to maxSpecial
    const availableCandidates = this.roles.filter(r =>
      r.id !== 'civilian' &&
      r.id !== 'imposter' &&
      r.enabled !== false &&
      !(this.fixedRoles && this.fixedRoles[r.id])
    );

    const allowedExtraSpecials = Math.max(0, maxSpecial - specialCountInDeck);
    const rate = this.specialRoleRate || 75;

    if (allowedExtraSpecials > 0 && availableCandidates.length > 0) {
      const shuffledCandidates = [...availableCandidates];
      this.shuffle(shuffledCandidates);

      for (let s = 0; s < allowedExtraSpecials; s++) {
        const currentRemaining = total - deck.length;
        if (currentRemaining <= 1) break;

        const rollChance = Math.random() * 100;
        if (rollChance < rate && shuffledCandidates.length > 0) {
          const candidate = shuffledCandidates.shift();
          deck.push({ ...candidate, isRolled: true });
          specialCountInDeck++;
        }
      }
    }

    // 4. Fill ALL remaining slots with Civilian (guaranteeing Civilians are the majority)
    const civ = this.roles.find(r => r.id === 'civilian') || DEFAULT_ROLES[0];
    while (deck.length < total) {
      deck.push({ ...civ });
    }
    if (deck.length > total) {
      deck.length = total;
    }

    // Thorough shuffle so seat allocation is completely randomized
    this.shuffle(deck);
    return deck;
  }

  startMatchSession() {
    const inputs = document.querySelectorAll('.player-name-input');
    const names = [];
    inputs.forEach((inp, idx) => {
      names.push(inp.value.trim() || `Người chơi ${idx + 1}`);
    });
    if (names.length >= 3) {
      this.playerCount = names.length;
    }
    localStorage.setItem('gti_player_names', JSON.stringify(names));

    this.syncFixedRolesWithDeck();
    const deck = this.buildMatchDeck();
    this.doctorShieldedPlayerId = null;
    this.doctorShieldedPlayerIds = new Set();
    this.doctorShieldHistory = [];
    this.doctorSuccessfulSaves = new Set();
    this.roundUsedAbilities = new Set();
    this.detectivesExposedImposter = new Set();
    this.witchSavedPlayerId = null;
    this.witchUsedSavePotion = false;
    this.witchUsedPoisonPotion = false;
    this.firstEliminatedPlayer = null;
    this.allEliminatedPlayers = [];
    this.wrongVoteCount = 0;
    this.imposterGuessResult = null;
    this.imposterGuessText = '';
    this.pendingWrongVotePenaltyMode = 'all';
    this.pendingCustomPenalizedPlayerIds = new Set();

    // Reset match verdict & outcomes cleanly for new match
    this.winningTeam = null;
    this.caughtImposter = null;
    this.imposterWonByComeback = false;
    this.selectedSuspectId = null;
    this.isCurrentRoundScoreDiscarded = false;
    this.roundNumber = 1;

    const allCats = this.getPlayableCategories();
    let cat;
    if (this.categoryMode === 'random') {
      const candidates = allCats.filter(c => c.words && c.words.length > 0);
      cat = candidates.length > 0 ? candidates[Math.floor(Math.random() * candidates.length)] : allCats[0];
    } else {
      cat = allCats.find(c => c.id === this.selectedCategoryId);
      if (!cat || !cat.words || cat.words.length === 0) {
        cat = allCats.find(c => c.words && c.words.length > 0) || allCats[0];
      }
    }
    this.categoryData = cat;

    const randomPair = cat.words[Math.floor(Math.random() * cat.words.length)];
    if (randomPair.civilian) {
      this.secretWord = randomPair.civilian;
      this.imposterWord = randomPair.imposter;
    } else if (randomPair.vi) {
      this.secretWord = randomPair.vi;
      this.imposterWord = randomPair.imposter || "";
    } else {
      this.secretWord = String(randomPair);
      this.imposterWord = "";
    }

    this.roundNumber = 1;
    this.players = names.map((name, idx) => {
      const assignedRole = deck[idx];
      const palette = AVATAR_PALETTES[idx % AVATAR_PALETTES.length];
      return {
        id: `p_${idx + 1}`,
        name,
        avatar: palette.emoji,
        avatarBg: palette.bg,
        role: assignedRole,
        isImposter: assignedRole.team === 'evil',
        isEliminated: false,
        votesReceived: 0,
        penalty: 0
      };
    });

    this.currentRevealIndex = 0;
    this.isCardFlipped = false;
    this.showRevealStep(this.currentRevealIndex);
    this.switchScreen('screen-reveal');
  }

  showRevealStep(index) {
    this.stopRevealTimer();
    this.isRevealTransitioning = false;

    if (index >= this.players.length) {
      if (this.rouletteEnabled) {
        this.showRouletteScreen();
      } else {
        const living = this.players.filter(p => !p.isEliminated);
        const pick = living[Math.floor(Math.random() * (living.length || 1))];
        this.currentSpeakerIndex = pick ? this.players.indexOf(pick) : 0;
        sound.playWinFanfare();
        this.prepareRoundStart();
      }
      return;
    }

    const player = this.players[index];
    const curtainBox = document.getElementById('reveal-curtain-box');
    const cardViewport = document.getElementById('reveal-card-viewport');
    const innerCard = document.getElementById('flip-card-inner');
    const progressPill = document.getElementById('reveal-progress-pill');

    if (progressPill) {
      progressPill.textContent = `Người chơi ${index + 1} / ${this.players.length}`;
    }

    // Update Reveal Counter Under Card: "Đã mở: index/total người"
    const totalPlayers = this.players.length;
    const openedCount = index;
    const remainingCount = totalPlayers - openedCount;

    const counterVal = document.getElementById('reveal-counter-val');
    if (counterVal) counterVal.textContent = `${openedCount}/${totalPlayers} người`;

    const counterRemaining = document.getElementById('reveal-counter-remaining');
    if (counterRemaining) counterRemaining.textContent = `(Còn ${remainingCount} người)`;

    const dotsContainer = document.getElementById('reveal-counter-dots');
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      for (let i = 0; i < totalPlayers; i++) {
        const dot = document.createElement('span');
        dot.className = `reveal-dot ${i < openedCount ? 'done' : (i === index ? 'current' : 'pending')}`;
        dotsContainer.appendChild(dot);
      }
    }

    curtainBox.style.display = 'flex';
    cardViewport.style.display = 'none';
    innerCard.classList.remove('flipped');
    this.isCardFlipped = false;

    document.getElementById('curtain-player-name').textContent = player.name;
    document.getElementById('flip-front-player-name').textContent = player.name;

    const backCard = document.getElementById('flip-card-back');
    backCard.style.setProperty('--role-color', player.role.color);

    const cardTimerStroke = document.getElementById('card-timer-stroke');
    if (cardTimerStroke) {
      cardTimerStroke.style.stroke = player.role.color || '#10b981';
      cardTimerStroke.style.filter = `drop-shadow(0 0 10px ${player.role.color || '#10b981'})`;
      cardTimerStroke.style.strokeDashoffset = '0';
      cardTimerStroke.classList.remove('warning');
    }
    const timerBadge = document.getElementById('reveal-timer-badge');
    if (timerBadge) {
      timerBadge.textContent = '⏱️ 30s';
      timerBadge.classList.remove('warning');
    }
    const secHint = document.getElementById('reveal-timer-sec-hint');
    if (secHint) {
      secHint.textContent = '30s';
    }

    const teamTag = document.getElementById('revealed-team-tag');
    teamTag.className = `team-tag ${player.role.team}`;
    teamTag.textContent = player.role.team === 'good' ? 'Phe Dân'
      : player.role.team === 'evil' ? 'Phe Ác'
        : 'Trung Lập';

    document.getElementById('revealed-icon').textContent = player.role.icon;
    document.getElementById('revealed-name').textContent = player.role.name_vi;

    const keywordLabel = document.getElementById('keyword-label');
    const keywordText = document.getElementById('keyword-text');
    const keywordCat = document.getElementById('keyword-category');

    const catName = this.categoryData?.name_vi || this.categoryData?.name || 'Chung';

    if (player.role.id === 'jester') {
      keywordLabel.textContent = 'TỪ KHÓA BÍ MẬT:';
      keywordText.className = 'secret-keyword-text';
      keywordText.textContent = this.secretWord;
      keywordCat.textContent = `Chủ đề: ${catName}`;
    } else if (player.role.id === 'drunkard') {
      const drunkWord = this.getDrunkardWord();
      keywordLabel.textContent = 'TỪ KHÓA CỦA BẠN (SAY XỈN 🍺):';
      keywordText.className = 'secret-keyword-text';
      keywordText.textContent = drunkWord;
      keywordCat.textContent = `Chủ đề: ${catName}`;
    } else if (player.role.id === 'traitor') {
      keywordLabel.textContent = 'TỪ KHÓA BÍ MẬT:';
      keywordText.className = 'secret-keyword-text imposter';
      keywordText.textContent = this.secretWord;
      keywordCat.textContent = `Chủ đề: ${catName}`;
    } else if (player.role.id === 'double_agent') {
      keywordLabel.textContent = 'TỪ KHÓA BÍ MẬT:';
      keywordText.className = 'secret-keyword-text';
      keywordText.textContent = this.secretWord;
      const imposterNames = this.players.filter(p => p.isImposter && p.id !== player.id).map(p => p.name).join(', ') || 'Đang ẩn nấp';
      keywordCat.textContent = `Chủ đề: ${catName} • Imposter: ${imposterNames}`;
    } else if (player.role.id === 'spy') {
      keywordLabel.textContent = 'TỪ ĐỒNG NGHĨA TRONG CẶP:';
      keywordText.className = 'secret-keyword-text';
      keywordText.style.color = '#a855f7';
      keywordText.style.textShadow = '0 0 16px rgba(168, 85, 247, 0.4)';
      const spyWord = this.imposterWord || 'Từ đồng nghĩa trong cặp';
      keywordText.textContent = spyWord;
      keywordCat.textContent = `Chủ đề: ${catName}`;
    } else if (player.role.knowsKeyword) {
      keywordLabel.textContent = 'TỪ KHÓA BÍ MẬT:';
      keywordText.className = 'secret-keyword-text';
      keywordText.textContent = this.secretWord;
      keywordCat.textContent = `Chủ đề: ${catName}`;
    } else {
      // Kẻ Giả Mạo (Imposter)
      if (this.hintsEnabled && this.imposterWord) {
        keywordLabel.textContent = 'TỪ GỢI Ý ĐỂ HÒA NHẬP:';
        keywordText.className = 'secret-keyword-text imposter';
        keywordText.textContent = this.imposterWord;
        keywordCat.textContent = `Chủ đề: ${catName}`;
      } else {
        keywordLabel.textContent = 'MANH MỐI BÍ MẬT:';
        keywordText.className = 'secret-keyword-text imposter';
        keywordText.textContent = '❓ KHÔNG BIẾT TỪ KHÓA';
        keywordCat.textContent = `Chủ đề: ${catName}`;
      }
    }

    document.getElementById('revealed-ability').textContent = player.role.ability_vi;
  }

  startRevealTimer(durationSec = 30) {
    this.stopRevealTimer();

    const cardBack = document.getElementById('flip-card-back');
    const svg = document.getElementById('card-timer-svg');
    const track = document.getElementById('card-timer-track');
    const stroke = document.getElementById('card-timer-stroke');
    const badge = document.getElementById('reveal-timer-badge');
    const secHint = document.getElementById('reveal-timer-sec-hint');

    const w = (cardBack ? cardBack.offsetWidth : 340) || 340;
    const h = (cardBack ? cardBack.offsetHeight : 480) || 480;
    const inset = 2;
    const rx = 26;
    const ry = 26;

    if (svg) {
      svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    }
    [track, stroke].forEach(el => {
      if (!el) return;
      el.setAttribute('x', inset.toString());
      el.setAttribute('y', inset.toString());
      el.setAttribute('width', (w - inset * 2).toString());
      el.setAttribute('height', (h - inset * 2).toString());
      el.setAttribute('rx', rx.toString());
      el.setAttribute('ry', ry.toString());
      el.setAttribute('pathLength', '1000');
    });

    if (stroke) {
      stroke.style.strokeDashoffset = '0';
      stroke.classList.remove('warning');
    }
    if (badge) {
      badge.textContent = `⏱️ ${durationSec}s`;
      badge.classList.remove('warning');
    }
    if (secHint) {
      secHint.textContent = `${durationSec}s`;
    }

    const startTime = Date.now();
    const durationMs = durationSec * 1000;

    this.revealTimerInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remainingMs = Math.max(0, durationMs - elapsed);
      const remainingSec = Math.ceil(remainingMs / 1000);
      const ratio = remainingMs / durationMs;
      const offset = 1000 * (1 - ratio);

      if (stroke) {
        stroke.style.strokeDashoffset = offset.toFixed(1);
        if (remainingSec <= 5) {
          stroke.classList.add('warning');
        }
      }
      if (badge) {
        badge.textContent = `⏱️ ${remainingSec}s`;
        if (remainingSec <= 5) {
          badge.classList.add('warning');
        }
      }
      if (secHint) {
        secHint.textContent = `${remainingSec}s`;
      }

      if (remainingMs <= 0) {
        this.stopRevealTimer();
        this.hideRoleAndAdvance();
      }
    }, 100);
  }

  stopRevealTimer() {
    if (this.revealTimerInterval) {
      clearInterval(this.revealTimerInterval);
      this.revealTimerInterval = null;
    }
    const stroke = document.getElementById('card-timer-stroke');
    const badge = document.getElementById('reveal-timer-badge');
    if (stroke) stroke.classList.remove('warning');
    if (badge) badge.classList.remove('warning');
  }

  flipCardOpen() {
    if (this.isCardFlipped || this.isRevealTransitioning) return;
    this.isRevealTransitioning = true;
    sound.playFlipCard();

    const card = document.getElementById('flip-card-inner');
    if (card) card.classList.add('flipped');
    this.isCardFlipped = true;

    // Bắt đầu đếm ngược 30s xem vai trò kèm viền chạy quanh thẻ
    this.startRevealTimer(30);

    setTimeout(() => {
      this.isRevealTransitioning = false;
    }, 400);
  }

  hideRoleAndAdvance() {
    if (!this.isCardFlipped || this.isRevealTransitioning) return;
    this.isRevealTransitioning = true;
    this.stopRevealTimer();
    sound.playFlipCard();

    const card = document.getElementById('flip-card-inner');
    if (card) card.classList.remove('flipped');
    this.isCardFlipped = false;

    // Chờ hiệu ứng úp thẻ hoàn tất rồi mới chuyển sang màn che quyền riêng tư của người tiếp theo
    setTimeout(() => {
      this.currentRevealIndex++;
      this.showRevealStep(this.currentRevealIndex);
      this.isRevealTransitioning = false;
    }, 350);
  }

  getDrunkardWord() {
    if (this.imposterWord) return this.imposterWord;
    const catWords = (this.categoryData?.words || []).map(w => w.civilian || w.vi || w);
    const otherWords = catWords.filter(w => w !== this.secretWord);
    if (otherWords.length > 0) {
      return otherWords[Math.floor(Math.random() * otherWords.length)];
    }
    return `${this.secretWord} (?)`;
  }

  getChameleonDecoys() {
    const list = [];
    if (this.imposterWord) list.push(this.imposterWord);
    const catWords = (this.categoryData?.words || []).map(w => w.civilian || w.vi || w);
    const shuffled = [...catWords.filter(w => w !== this.secretWord)];
    this.shuffle(shuffled);
    while (list.length < 3 && shuffled.length > 0) {
      const nextWord = shuffled.pop();
      if (!list.includes(nextWord)) list.push(nextWord);
    }
    while (list.length < 3) {
      list.push(`Manh mối ${list.length + 1}`);
    }
    return list;
  }

  // ==========================================================
  // [SEC 08.5] ROULETTE WHEEL (FIRST SPEAKER SELECTION)
  // ==========================================================
  showRouletteScreen() {
    this.switchScreen('screen-roulette');
    const winnerCard = document.getElementById('roulette-winner-card');
    if (winnerCard) winnerCard.style.display = 'none';

    if (!this.players || this.players.length === 0) {
      this.ensureSamplePlayersForReview();
    }

    this.rouletteAngle = 0;
    this.isSpinning = false;
    this.drawRouletteWheel();
  }

  ensureSamplePlayersForReview() {
    const names = (this.playerNames && this.playerNames.length >= 3) ? this.playerNames : ['Người chơi 1', 'Người chơi 2', 'Người chơi 3', 'Người chơi 4', 'Người chơi 5', 'Người chơi 6'];
    this.players = names.map((n, i) => {
      const p = AVATAR_PALETTES[i % AVATAR_PALETTES.length];
      return {
        id: `p_preview_${i}`,
        name: n,
        avatar: p.emoji,
        avatarBg: p.bg,
        role: DEFAULT_ROLES[i % DEFAULT_ROLES.length],
        isImposter: i === 0,
        isEliminated: false
      };
    });
  }

  drawRouletteWheel() {
    const canvas = document.getElementById('roulette-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (!this.players || this.players.length === 0) {
      this.ensureSamplePlayersForReview();
    }

    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    const radius = cx - 10;
    const n = this.players.length || 1;
    const sliceAngle = (2 * Math.PI) / n;

    ctx.clearRect(0, 0, width, height);

    // Outer glow ring
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, radius + 3, 0, 2 * Math.PI);
    ctx.strokeStyle = 'rgba(255, 107, 53, 0.45)';
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.restore();

    // Slices
    for (let i = 0; i < n; i++) {
      const p = this.players[i];
      const palette = AVATAR_PALETTES[i % AVATAR_PALETTES.length];
      const startAngle = this.rouletteAngle + i * sliceAngle;
      const endAngle = startAngle + sliceAngle;

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = palette.bg;
      ctx.fill();

      // Slice divider line
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Slice content (Emoji + Name)
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(startAngle + sliceAngle / 2);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      ctx.font = '22px sans-serif';
      ctx.fillText(p.avatar || palette.emoji, radius * 0.72, 0);

      ctx.fillStyle = palette.text || '#ffffff';
      ctx.font = '600 11px Lexend, "Be Vietnam Pro", sans-serif';
      const shortName = p.name.length > 7 ? p.name.substring(0, 6) + '..' : p.name;
      ctx.fillText(shortName, radius * 0.44, 0);
      ctx.restore();

      ctx.restore();
    }

    // Center decorative ring
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, 38, 0, 2 * Math.PI);
    ctx.fillStyle = '#1c1c24';
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.restore();
  }

  spinRouletteWheel() {
    if (this.isSpinning) return;
    const canvas = document.getElementById('roulette-canvas');
    if (!canvas) return;

    if (!this.players || this.players.length === 0) {
      this.ensureSamplePlayersForReview();
    }

    const living = this.players.filter(p => !p.isEliminated);
    if (living.length === 0) return;

    this.isSpinning = true;
    const winnerCard = document.getElementById('roulette-winner-card');
    if (winnerCard) winnerCard.style.display = 'none';

    const winner = living[Math.floor(Math.random() * living.length)];
    const winnerIdx = this.players.indexOf(winner);
    const n = this.players.length;
    const sliceAngle = (2 * Math.PI) / n;

    // Pointer is at top: 1.5 * Math.PI (or -Math.PI / 2)
    // Slice center angle = rouletteAngle + (winnerIdx + 0.5) * sliceAngle = 1.5 * Math.PI
    const desiredFinalMod = (1.5 * Math.PI - (winnerIdx + 0.5) * sliceAngle) % (2 * Math.PI);
    const normalizedDesired = (desiredFinalMod + 2 * Math.PI) % (2 * Math.PI);

    const startAngle = this.rouletteAngle % (2 * Math.PI);
    const fullSpins = (5 + Math.floor(Math.random() * 3)) * (2 * Math.PI);
    let targetAngle = startAngle + fullSpins;
    const currentMod = targetAngle % (2 * Math.PI);
    let diff = normalizedDesired - currentMod;
    if (diff < 0) diff += 2 * Math.PI;
    targetAngle += diff;

    const duration = 3800; // 3.8s
    const startTime = performance.now();
    let lastSliceIdx = -1;

    const animateWheel = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      // Quartic ease out
      const ease = 1 - Math.pow(1 - progress, 4);

      this.rouletteAngle = startAngle + (targetAngle - startAngle) * ease;
      this.drawRouletteWheel();

      // Sound tick on passing slices
      const pointerNorm = ((1.5 * Math.PI - this.rouletteAngle) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
      const currentSlice = Math.floor(pointerNorm / sliceAngle) % n;
      if (currentSlice !== lastSliceIdx) {
        lastSliceIdx = currentSlice;
        sound.playTick();
      }

      if (progress < 1) {
        requestAnimationFrame(animateWheel);
      } else {
        this.isSpinning = false;
        this.currentSpeakerIndex = winnerIdx;
        sound.playWinFanfare();

        const winnerAvatar = document.getElementById('roulette-winner-avatar');
        const winnerName = document.getElementById('roulette-winner-name');
        if (winnerAvatar) winnerAvatar.textContent = winner.avatar;
        if (winnerName) winnerName.textContent = winner.name;
        if (winnerCard) winnerCard.style.display = 'block';

        if (window.confetti) {
          try {
            window.confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
          } catch (e) { }
        }
      }
    };

    requestAnimationFrame(animateWheel);
  }

  // ==========================================================
  // [SEC 08.6] ACTIVE SPEAKER HUD & SPEECH TIMER
  // ==========================================================
  updateCurrentSpeakerHUD() {
    const current = this.players[this.currentSpeakerIndex];
    if (!current) return;

    const avatarEl = document.getElementById('speaker-active-avatar');
    const nameEl = document.getElementById('speaker-active-name');
    const timerVal = document.getElementById('val-speaker-timer');

    if (avatarEl) {
      avatarEl.textContent = current.avatar;
      avatarEl.style.background = current.avatarBg || '#fee2e2';
    }
    if (nameEl) {
      nameEl.textContent = current.name;
    }

    this.speechTimerRemaining = this.speechDurationSeconds;
    if (timerVal) {
      timerVal.textContent = this.speechDurationSeconds === 0
        ? ('Tự do')
        : `${this.speechTimerRemaining}s`;
    }
  }

  startSpeakerTimer() {
    if (this.speechTimerInterval) clearInterval(this.speechTimerInterval);
    if (this.speechDurationSeconds <= 0) return;

    this.speechTimerRemaining = this.speechDurationSeconds;
    const timerVal = document.getElementById('val-speaker-timer');

    this.speechTimerInterval = setInterval(() => {
      if (this.isPaused) return;

      this.speechTimerRemaining--;
      if (timerVal) {
        timerVal.textContent = `${Math.max(0, this.speechTimerRemaining)}s`;
      }

      if (this.speechTimerRemaining <= 3 && this.speechTimerRemaining > 0) {
        sound.playTick();
      }

      if (this.speechTimerRemaining <= 0) {
        sound.playGavel();
        this.nextSpeaker();
      }
    }, 1000);
  }

  nextSpeaker() {
    if (!this.players || this.players.length === 0) return;

    let nextIdx = (this.currentSpeakerIndex + 1) % this.players.length;
    let attempts = 0;
    while (this.players[nextIdx]?.isEliminated && attempts < this.players.length) {
      nextIdx = (nextIdx + 1) % this.players.length;
      attempts++;
    }

    this.currentSpeakerIndex = nextIdx;
    sound.playClick();
    this.updateCurrentSpeakerHUD();
    this.renderSpeakersStrip();
    this.startSpeakerTimer();
  }

  hasActiveNightRoles() {
    const activeNightRoleIds = new Set(['spy']);
    return this.players.some(p => !p.isEliminated && activeNightRoleIds.has(p.role.id));
  }

  prepareRoundStart() {
    if (!this.roundNumber) this.roundNumber = 1;

    // Reset round abilities at round start
    this.roundUsedAbilities = new Set();

    // If Night Phase is enabled AND active night roles exist in this match
    if (this.nightPhaseEnabled && this.hasActiveNightRoles()) {
      this.startNightPhase();
    } else {
      this.startDiscussionStage();
    }
  }

  startNightPhase() {
    this.currentNightIndex = 0;
    const roundPill = document.getElementById('night-round-pill');
    if (roundPill) {
      roundPill.textContent = `🌙 BAN ĐÊM VÒNG ${this.roundNumber}`;
    }

    this.switchScreen('screen-night');
    sound.playDramaticReveal();
    this.showNightStep(this.currentNightIndex);
  }

  showNightStep(index) {
    const livingPlayers = this.players.filter(p => !p.isEliminated);
    const curtainBox = document.getElementById('night-curtain-box');
    const actionViewport = document.getElementById('night-action-viewport');
    const dawnCard = document.getElementById('night-dawn-card');
    const progressPill = document.getElementById('night-progress-pill');

    if (index >= livingPlayers.length) {
      // All living players have finished their night turns!
      if (curtainBox) curtainBox.style.display = 'none';
      if (actionViewport) actionViewport.style.display = 'none';
      if (dawnCard) dawnCard.style.display = 'block';
      if (progressPill) {
        progressPill.textContent = 'Hoàn tất ban đêm';
      }
      sound.playWinFanfare();
      return;
    }

    const player = livingPlayers[index];
    if (curtainBox) curtainBox.style.display = 'block';
    if (actionViewport) actionViewport.style.display = 'none';
    if (dawnCard) dawnCard.style.display = 'none';

    if (progressPill) {
      progressPill.textContent = `${'Người chơi'} ${index + 1} / ${livingPlayers.length}`;
    }

    const curtainName = document.getElementById('night-curtain-player-name');
    if (curtainName) curtainName.textContent = player.name;

    this.renderNightPlayerAction(player);
  }

  renderNightPlayerAction(player) {
    const avatar = document.getElementById('night-player-avatar');
    const name = document.getElementById('night-player-name');
    const roleBadge = document.getElementById('night-player-role-badge');
    const teamTag = document.getElementById('night-player-team-tag');
    const cardContent = document.getElementById('night-role-action-card');

    if (avatar) {
      avatar.textContent = player.avatar;
      avatar.style.background = player.avatarBg || '#fee2e2';
    }
    if (name) name.textContent = player.name;
    if (roleBadge) {
      roleBadge.textContent = `${player.role.icon} ${player.role.name_vi}`;
      roleBadge.style.color = player.role.color;
    }
    if (teamTag) {
      teamTag.className = `team-tag ${player.role.team}`;
      teamTag.textContent = player.role.team === 'good' ? 'Phe Dân'
        : player.role.team === 'evil' ? 'Phe Ác'
          : 'Trung Lập';
    }

    if (!cardContent) return;
    cardContent.innerHTML = '';

    const alivePlayers = this.players.filter(p => !p.isEliminated);
    const otherAlive = alivePlayers.filter(p => p.id !== player.id);

    const markAbilityDone = (msg) => {
      this.roundUsedAbilities.add(player.id);
      cardContent.innerHTML = `
        <div style="text-align: center; padding: 12px 6px;">
          <div style="font-size: 28px; margin-bottom: 6px;">✅</div>
          <strong style="color: #10b981; font-size: 14px;">${'Đã hoàn tất hành động đêm nay!'}</strong>
          <p style="font-size: 12px; color: var(--text-muted); margin-top: 4px;">${msg || ''}</p>
        </div>
      `;
    };

    switch (player.role.id) {
      case 'spy': {
        const spyWord = this.imposterWord || 'Từ đồng nghĩa trong cặp';
        cardContent.innerHTML = `
          <div style="text-align: center; padding: 10px;">
            <span style="font-size: 26px;">🕵️</span>
            <div style="font-size: 13px; font-weight: 700; color: #8b5cf6; margin: 4px 0;">Từ Đồng Nghĩa Trong Cặp (Gián Điệp)</div>
            <div style="font-size: 18px; font-weight: 800; color: #fff; margin: 6px 0;">"${spyWord}"</div>
            <div style="font-size: 12px; color: var(--text-muted);">Chủ đề: ${this.categoryData.name_vi} • Bạn thuộc Phe Trung Lập nhận từ đồng nghĩa trong cặp từ. Hãy khéo léo hòa nhập để sống sót!</div>
          </div>
        `;
        break;
      }

      default: {
        let flavorTitle = 'Đêm Đen Tĩnh Lặng';
        let flavorDesc = 'Bạn đang chìm vào giấc ngủ say. Đêm nay bạn không có hành động đặc biệt nào.';
        let icon = '💤';

        if (player.role.id === 'imposter') {
          flavorTitle = 'Kẻ Giả Mạo Ẩn Nấp';
          flavorDesc = 'Hãy giữ bình tĩnh, nét mặt tự nhiên và ghi nhớ các gợi ý để chuẩn bị thao túng phe Dân khi trời sáng!';
          icon = '🎭';
        } else if (player.role.id === 'traitor') {
          flavorTitle = 'Kẻ Phản Bội Bí Mật';
          flavorDesc = 'Bạn biết từ khóa nhưng thuộc phe Ác. Hãy chuẩn bị dẫn dắt dư luận chia rẽ phe Dân!';
          icon = '🗡️';
        } else if (player.role.id === 'civilian') {
          flavorTitle = 'Dân Thường Yên Giấc';
          flavorDesc = 'Bạn là Dân Thường vô tội. Hãy giữ nét mặt tự nhiên và chuẩn bị thảo luận khi trời sáng.';
          icon = '💤';
        }

        cardContent.innerHTML = `
          <div style="text-align: center; padding: 16px 8px;">
            <div style="font-size: 32px; margin-bottom: 6px;">${icon}</div>
            <strong style="font-size: 15px; color: #fff;">${flavorTitle}</strong>
            <p style="font-size: 12px; color: var(--text-muted); margin: 6px auto 0; max-width: 280px; line-height: 1.4;">${flavorDesc}</p>
          </div>
        `;
        break;
      }
    }
  }

  startDiscussionStage() {
    if (!this.roundNumber) this.roundNumber = 1;
    this.switchScreen('screen-discussion');
    this.timerRemaining = this.durationSeconds;
    this.timerTotal = this.durationSeconds;
    this.isPaused = false;

    document.getElementById('hud-category-name').textContent = this.categoryData.name_vi;

    const livingPlayers = this.players.filter(p => !p.isEliminated);
    document.getElementById('hud-players-count').textContent = `${livingPlayers.length} ${'Người sống sót'}`;

    const roundPill = document.getElementById('round-stage-pill');
    if (roundPill) roundPill.textContent = `${'Vòng'} ${this.roundNumber}`;

    if (this.players[this.currentSpeakerIndex]?.isEliminated) {
      const living = this.players.find(p => !p.isEliminated);
      if (living) this.currentSpeakerIndex = this.players.indexOf(living);
    }

    this.updateCurrentSpeakerHUD();
    this.renderSpeakersStrip();
    this.runTimer();
    this.startSpeakerTimer();
  }

  renderSpeakersStrip() {
    const strip = document.getElementById('speakers-avatar-strip');
    if (!strip) return;
    strip.innerHTML = '';

    this.players.forEach((p, i) => {
      const item = document.createElement('div');
      const isSpeaking = i === this.currentSpeakerIndex && !p.isEliminated;
      item.className = `speaker-avatar-item ${isSpeaking ? 'active-speaking' : ''} ${p.isEliminated ? 'eliminated' : ''}`;
      item.innerHTML = `
        <div class="avatar-circle speaker-avatar-circle" style="background: ${p.avatarBg}; ${p.isEliminated ? 'border: 2px solid #ef4444;' : ''}">
          ${p.isEliminated ? '❌' : p.avatar}
        </div>
        <div class="speaker-name-label" style="${p.isEliminated ? 'text-decoration: line-through; color: #ef4444;' : ''}">
          ${p.name}
        </div>
      `;

      if (!p.isEliminated) {
        item.addEventListener('click', () => {
          if (this.currentSpeakerIndex !== i) {
            this.currentSpeakerIndex = i;
            sound.playClick();
            this.updateCurrentSpeakerHUD();
            this.renderSpeakersStrip();
            this.startSpeakerTimer();
          }
        });
      }

      strip.appendChild(item);
    });
  }

  runTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.updateTimerDisplay();

    this.timerInterval = setInterval(() => {
      if (!this.isPaused) {
        if (this.durationSeconds > 0) {
          this.timerRemaining--;
          this.updateTimerDisplay();

          if (this.timerRemaining <= 10 && this.timerRemaining > 0) {
            sound.playTick();
          }

          if (this.timerRemaining <= 0) {
            clearInterval(this.timerInterval);
            if (this.speechTimerInterval) clearInterval(this.speechTimerInterval);
            sound.playGong();
            setTimeout(() => {
              this.startVotingStage();
            }, 1000);
          }
        }
      }
    }, 1000);
  }

  updateTimerDisplay() {
    if (this.durationSeconds === 0) {
      const display = document.getElementById('timer-display');
      if (display) display.textContent = '∞';
      return;
    }

    const mins = Math.floor(Math.max(0, this.timerRemaining) / 60);
    const secs = Math.max(0, this.timerRemaining) % 60;
    const str = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    const display = document.getElementById('timer-display');
    if (display) display.textContent = str;

    const wrapper = document.getElementById('timer-wrapper');
    if (wrapper) {
      if (this.timerRemaining <= 10) wrapper.classList.add('timer-critical');
      else wrapper.classList.remove('timer-critical');
    }

    const circle = document.getElementById('timer-progress');
    if (circle) {
      const circumference = 2 * Math.PI * 95;
      const ratio = this.timerRemaining / this.timerTotal;
      circle.style.strokeDashoffset = circumference * (1 - Math.max(0, ratio));
    }
  }

  startVotingStage() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    if (this.speechTimerInterval) clearInterval(this.speechTimerInterval);
    this.switchScreen('screen-voting');
    sound.playVote();

    this.selectedSuspectId = null;
    document.getElementById('suspect-name').textContent = '-';
    document.getElementById('voting-round-badge').textContent = `${'Vòng'} ${this.roundNumber}`;

    const grid = document.getElementById('voting-cards-grid');
    grid.innerHTML = '';

    this.players.forEach(p => {
      if (p.isEliminated) return;

      const card = document.createElement('div');
      card.className = 'vote-player-card';
      card.dataset.playerId = p.id;
      card.innerHTML = `
        <div class="vote-player-avatar" style="background: ${p.avatarBg};">
          ${p.avatar}
        </div>
        <div class="vote-player-name">${this.escapeHtml(p.name)}</div>
        <div style="font-size: 11px; color: var(--text-muted);">${'Nghi phạm'}</div>
      `;

      card.addEventListener('click', () => {
        sound.playClick();
        grid.querySelectorAll('.vote-player-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        this.selectedSuspectId = p.id;
        document.getElementById('suspect-name').textContent = p.name;
      });

      grid.appendChild(card);
    });
  }

  submitVotingOutcome() {
    if (!this.selectedSuspectId) {
      this.showToast('⚠️ Vui lòng chọn 1 người chơi bị nghi ngờ!', 'warning');
      return;
    }

    const suspect = this.players.find(p => p.id === this.selectedSuspectId);

    suspect.isEliminated = true;
    suspect.eliminatedInRound = this.roundNumber;
    if (!this.firstEliminatedPlayer) this.firstEliminatedPlayer = suspect;
    if (!this.allEliminatedPlayers) this.allEliminatedPlayers = [];
    this.allEliminatedPlayers.push(suspect);

    sound.playDramaticReveal();

    if (suspect.role.id === 'jester') {
      this.winningTeam = 'jester';
      this.showResultsScreen(suspect);
      return;
    }

    // Traitor (Kẻ Phản Bội): Evil team but ALREADY knows keyword! No comeback guess
    if (suspect.role.id === 'traitor') {
      const remainingImposters = this.players.filter(p => p.isImposter && !p.isEliminated);
      if (remainingImposters.length === 0) {
        this.winningTeam = 'good';
        this.showResultsScreen(suspect);
        return;
      } else {
        this.showActionNotice({
          icon: '🗡️',
          title: 'VẠCH MẶT KẺ PHẢN BỘI',
          targetName: suspect.name,
          type: 'evil',
          heading: '🗡️ KẺ PHẢN BỘI BỊ TRỤC XUẤT',
          message: `<strong>${suspect.name}</strong> thuộc <strong>Phe Ác (Kẻ Phản Bội)</strong> và đã bị trục xuất!<br>Tuy nhiên, vẫn còn Kẻ Giả Mạo khác đang ẩn nấp trong phòng.`,
          note: 'Phe Dân tiếp tục cảnh giác và truy tìm kẻ còn lại.',
          onClose: () => {
            this.showRoundIntermission(suspect, true);
          }
        });
        return;
      }
    }

    // Spy (Gián Điệp): Phe Trung Lập nhận từ đồng nghĩa trong cặp từ, không có khả năng đoán từ khi bị phát hiện!
    if (suspect.role.id === 'spy') {
      const remainingNormalImposters = this.players.filter(p => p.role.id === 'imposter' && !p.isEliminated);
      if (remainingNormalImposters.length === 0) {
        this.winningTeam = 'good';
        this.showActionNotice({
          icon: '🕵️',
          title: 'TRỤC XUẤT GIÁN ĐIỆP',
          targetName: suspect.name,
          type: 'neutral',
          heading: '🕵️ GIÁN ĐIỆP BỊ TRỤC XUẤT',
          message: `<strong>${suspect.name}</strong> thuộc <strong>Phe Trung Lập (Gián Điệp)</strong> và đã bị trục xuất!<br>Gián Điệp nắm giữ từ đồng nghĩa trong cặp từ nhưng đã bị phát hiện.<br><strong>Kẻ Giả Mạo đã bị loại bỏ trước đó! Phe Dân Làng giành chiến thắng!</strong>`,
          note: 'Phe Dân Làng bảo toàn chiến thắng!',
          onClose: () => {
            this.showResultsScreen(suspect);
          }
        });
        return;
      } else {
        this.showActionNotice({
          icon: '🕵️',
          title: 'TRỤC XUẤT GIÁN ĐIỆP',
          targetName: suspect.name,
          type: 'neutral',
          heading: '🕵️ GIÁN ĐIỆP BỊ TRỤC XUẤT',
          message: `<strong>${suspect.name}</strong> thuộc <strong>Phe Trung Lập (Gián Điệp)</strong> và đã bị trục xuất!<br>Gián Điệp nắm giữ từ đồng nghĩa trong cặp từ nhưng đã bị phát hiện.<br>Tuy nhiên, Kẻ Giả Mạo vẫn đang ẩn nấp trong phòng.`,
          note: 'Phe Dân tiếp tục cảnh giác và truy tìm Kẻ Giả Mạo!',
          onClose: () => {
            this.showRoundIntermission(suspect, true);
          }
        });
        return;
      }
    }

    if (suspect.isImposter) {
      const remainingImposters = this.players.filter(p => p.role.id === 'imposter' && !p.isEliminated);
      if (remainingImposters.length === 0) {
        // All imposters caught!
        // DO NOT show results screen yet! (Keep secret word confidential)
        // Route to dedicated separate Comeback stage:
        this.caughtImposter = suspect;
        this.showComebackStage(suspect);
        return;
      } else {
        // Multi-imposter match: 1 down, 1 remaining!
        this.showRoundIntermission(suspect, true);
        return;
      }
    }

    // Neutral roles (Phù Thủy, Điệp Viên Hai Mang...): Phe Trung Lập bị trục xuất!
    if (suspect.role && suspect.role.team === 'neutral' && suspect.role.id !== 'drunkard') {
      const remainingImposters = this.players.filter(p => p.isImposter && !p.isEliminated);
      if (remainingImposters.length === 0) {
        this.winningTeam = 'good';
        this.showResultsScreen(suspect);
        return;
      } else {
        this.showActionNotice({
          icon: suspect.role.icon || '🔮',
          title: 'VẠCH MẶT ' + (suspect.role.name_vi || 'PHE TRUNG LẬP').toUpperCase(),
          targetName: suspect.name,
          type: 'neutral',
          heading: `${suspect.role.icon || '🔮'} ${suspect.role.name_vi.toUpperCase()} BỊ TRỤC XUẤT`,
          message: `<strong>${suspect.name}</strong> thuộc <strong>Phe Trung Lập (${suspect.role.name_vi})</strong> và đã bị trục xuất!<br>Tuy nhiên, Kẻ Giả Mạo vẫn đang ẩn nấp trong phòng.`,
          note: 'Phe Dân tiếp tục cảnh giác và truy tìm Kẻ Giả Mạo!',
          onClose: () => {
            this.showRoundIntermission(suspect, true);
          }
        });
        return;
      }
    }

    // Suspect is INNOCENT (Civilian or good team) -> WRONG VOTE PENALTY!
    this.wrongVoteCount = (this.wrongVoteCount || 0) + 1;

    const livingInnocents = this.players.filter(p => !p.isImposter && !p.isEliminated);
    const livingImposters = this.players.filter(p => p.isImposter && !p.isEliminated);

    if (livingImposters.length >= livingInnocents.length) {
      // Imposters have equaled or outnumbered innocent players -> Imposters win!
      this.players.filter(p => p.role.team === 'good' && !p.isEliminated).forEach(p => {
        p.penalty = (p.penalty || 0) + 5;
      });
      this.winningTeam = 'evil';
      this.showResultsScreen(suspect);
    } else {
      // Game continues! Show Intermission Modal with penalty warning & configuration
      this.showRoundIntermission(suspect, false);
    }
  }

  showRoundIntermission(eliminatedPlayer, isImposterCaught) {
    this.lastIntermissionWasImposter = isImposterCaught;
    const modal = document.getElementById('modal-round-intermission');
    const avatar = document.getElementById('intermission-avatar');
    const badge = document.getElementById('intermission-badge');
    const title = document.getElementById('intermission-title');
    const desc = document.getElementById('intermission-desc');
    const btnLabel = document.getElementById('label-next-round-btn');

    const livingInnocents = this.players.filter(p => !p.isImposter && !p.isEliminated).length;
    const livingImposters = this.players.filter(p => p.isImposter && !p.isEliminated).length;

    document.getElementById('pill-innocents-left').textContent = `👥 ${livingInnocents} ${'Dân thường còn lại'}`;
    document.getElementById('pill-imposters-left').textContent = `🎭 ${livingImposters} ${'Imposter lẩn trốn'}`;

    if (avatar) avatar.textContent = eliminatedPlayer.avatar;

    const penaltyConfigEl = document.getElementById('intermission-penalty-config');
    const penaltyVotersContainer = document.getElementById('penalty-voters-container');
    const penaltyGrid = document.getElementById('penalty-voters-selector-grid');
    const btnPenaltyAll = document.getElementById('btn-penalty-all');
    const btnPenaltyVoters = document.getElementById('btn-penalty-voters');
    const btnPenaltySelectAll = document.getElementById('btn-penalty-select-all');
    const btnPenaltyDeselectAll = document.getElementById('btn-penalty-deselect-all');
    const penaltyDesc = document.getElementById('penalty-explainer-text');

    if (isImposterCaught) {
      if (penaltyConfigEl) penaltyConfigEl.style.display = 'none';
      if (badge) {
        badge.textContent = '🎯 BẮT TRÚNG IMPOSTER!';
        badge.style.background = '#10b981';
      }
      if (title) {
        title.textContent = `Đã loại 1 Kẻ Giả Mạo: ${eliminatedPlayer.name}!`;
        title.style.color = '#10b981';
      }
      if (desc) {
        desc.innerHTML = `Phe Dân được <strong>thưởng +5 điểm</strong>!<br />Tuy nhiên vẫn còn ${livingImposters} Kẻ Giả Mạo khác đang ẩn nấp!`;
      }
    } else {
      if (badge) {
        badge.textContent = '❌ OAN SAI!';
        badge.style.background = '#ef4444';
      }
      if (title) {
        title.textContent = `${eliminatedPlayer.name} là Dân Thường Vô Tội!`;
        title.style.color = '#ef4444';
      }
      if (desc) {
        desc.innerHTML = `Phe Dân đã biểu quyết sai! Toàn bộ người chơi còn sống bị <strong style="color: #ef4444;">phạt trừ -5 điểm</strong>.<br />Kẻ Giả Mạo vẫn chưa bị lộ và đang lẩn trốn.`;
      }

      // Configure interactive penalty target selector
      if (penaltyConfigEl) {
        penaltyConfigEl.style.display = 'block';
        this.pendingWrongVotePenaltyMode = 'all';
        this.pendingCustomPenalizedPlayerIds = new Set();

        // Cho phép TẤT CẢ người chơi còn sống xuất hiện trong danh sách vote chỉ tay
        const livingVoters = this.players.filter(p => !p.isEliminated);
        livingVoters.forEach(p => this.pendingCustomPenalizedPlayerIds.add(p.id));

        if (penaltyGrid) {
          penaltyGrid.innerHTML = '';
          livingVoters.forEach(p => {
            const chip = document.createElement('button');
            chip.type = 'button';
            chip.className = 'penalty-voter-chip selected';
            chip.dataset.playerId = p.id;
            chip.innerHTML = `<span>${p.avatar}</span> <span>${p.name}</span> <span class="chip-check">✓</span>`;
            chip.addEventListener('click', () => {
              sound.playClick();
              if (this.pendingCustomPenalizedPlayerIds.has(p.id)) {
                this.pendingCustomPenalizedPlayerIds.delete(p.id);
                chip.classList.remove('selected');
                chip.innerHTML = `<span>${p.avatar}</span> <span>${p.name}</span>`;
              } else {
                this.pendingCustomPenalizedPlayerIds.add(p.id);
                chip.classList.add('selected');
                chip.innerHTML = `<span>${p.avatar}</span> <span>${p.name}</span> <span class="chip-check">✓</span>`;
              }
            });
            penaltyGrid.appendChild(chip);
          });
        }

        if (btnPenaltySelectAll) {
          btnPenaltySelectAll.onclick = () => {
            sound.playClick();
            livingVoters.forEach(p => this.pendingCustomPenalizedPlayerIds.add(p.id));
            penaltyGrid?.querySelectorAll('.penalty-voter-chip').forEach(c => {
              c.classList.add('selected');
              const pid = c.dataset.playerId;
              const pl = livingVoters.find(x => x.id === pid);
              if (pl) c.innerHTML = `<span>${pl.avatar}</span> <span>${pl.name}</span> <span class="chip-check">✓</span>`;
            });
          };
        }

        if (btnPenaltyDeselectAll) {
          btnPenaltyDeselectAll.onclick = () => {
            sound.playClick();
            this.pendingCustomPenalizedPlayerIds.clear();
            penaltyGrid?.querySelectorAll('.penalty-voter-chip').forEach(c => {
              c.classList.remove('selected');
              const pid = c.dataset.playerId;
              const pl = livingVoters.find(x => x.id === pid);
              if (pl) c.innerHTML = `<span>${pl.avatar}</span> <span>${pl.name}</span>`;
            });
          };
        }

        const updatePenaltyUI = (mode) => {
          this.pendingWrongVotePenaltyMode = mode;
          const setActive = (btn, active) => {
            if (!btn) return;
            btn.style.background = active ? 'rgba(239, 68, 68, 0.25)' : 'rgba(255, 255, 255, 0.05)';
            btn.style.borderColor = active ? '#ef4444' : 'var(--border-subtle)';
            btn.style.color = active ? '#fff' : 'var(--text-muted)';
          };

          setActive(btnPenaltyAll, mode === 'all');
          setActive(btnPenaltyVoters, mode === 'custom');

          if (penaltyVotersContainer) {
            penaltyVotersContainer.style.display = mode === 'custom' ? 'block' : 'none';
          } else if (penaltyGrid) {
            penaltyGrid.style.display = mode === 'custom' ? 'flex' : 'none';
          }

          if (mode === 'all') {
            if (penaltyDesc) penaltyDesc.innerHTML = '<strong>Trách nhiệm tập thể:</strong> Cả nhóm đã thống nhất biểu quyết theo số đông, do đó toàn bộ người chơi còn sống cùng chịu phạt -5 điểm.';
          } else {
            if (penaltyDesc) penaltyDesc.innerHTML = '<strong>Chỉ phạt người chỉ tay:</strong> Chỉ những người được tích chọn bên trên (đã giơ tay biểu quyết oan) mới bị trừ -5 điểm (cho phép chọn bất kỳ ai trong số tất cả người chơi còn sống).';
          }
        };

        if (btnPenaltyAll) btnPenaltyAll.onclick = () => { sound.playClick(); updatePenaltyUI('all'); };
        if (btnPenaltyVoters) btnPenaltyVoters.onclick = () => { sound.playClick(); updatePenaltyUI('custom'); };
        updatePenaltyUI('all');
      }
    }

    if (btnLabel) {
      btnLabel.textContent = `Tiến vào Vòng ${this.roundNumber + 1} Thảo Luận`;
    }

    modal.classList.add('open');
  }

  skipVotingRound() {
    if (typeof sound !== 'undefined') {
      sound.playToggle?.() || sound.playClick?.();
    }
    const nextRound = (this.roundNumber || 1) + 1;

    let hasTransitioned = false;
    const proceedToNextRound = () => {
      if (hasTransitioned) return;
      hasTransitioned = true;
      if (this.tieVoteAutoTimer) {
        clearTimeout(this.tieVoteAutoTimer);
        this.tieVoteAutoTimer = null;
      }
      this.roundNumber++;
      this.prepareRoundStart();
    };

    this.showActionNotice({
      icon: '⚖️',
      title: 'KẾT QUẢ: HÒA PHIẾU',
      targetName: 'Không ai bị loại',
      type: 'neutral',
      heading: '⚖️ HÒA PHIẾU BỎ PHIẾU',
      message: `Số phiếu bầu hòa nhau hoặc cả nhóm chưa đồng thuận được nghi phạm!<br><strong>Không có bất kỳ người chơi nào bị loại ở vòng này.</strong><br>Hệ thống tự động chuyển sang <strong>Vòng ${nextRound} Thảo Luận</strong>.`,
      note: 'Mọi người hãy chú ý thêm các biểu cảm và manh mối mới trong lượt phát biểu sắp tới!',
      btnText: `Tiến vào Vòng ${nextRound} Thảo Luận →`,
      onClose: () => {
        proceedToNextRound();
      }
    });

    // Tự động chuyển đến vòng thảo luận kế tiếp sau 2.8 giây nếu không ai bấm
    if (this.tieVoteAutoTimer) clearTimeout(this.tieVoteAutoTimer);
    this.tieVoteAutoTimer = setTimeout(() => {
      const modal = document.getElementById('modal-action-notice');
      if (modal && modal.classList.contains('open')) {
        document.getElementById('btn-close-action-notice')?.click();
      } else {
        proceedToNextRound();
      }
    }, 2800);
  }

  showComebackStage(suspect) {
    this.caughtImposter = suspect;
    if (suspect) {
      suspect.isEliminated = true;
      if (!suspect.eliminatedInRound) suspect.eliminatedInRound = this.roundNumber || 1;
    }
    this.switchScreen('screen-comeback');
    sound.playDramaticReveal();

    const nameEl = document.getElementById('comeback-imposter-name');
    if (nameEl) nameEl.textContent = suspect.name;

    const input = document.getElementById('input-imposter-guess');
    if (input) {
      input.value = '';
      setTimeout(() => input.focus(), 300);
    }

    // Khởi tạo bộ đếm ngược 30 giây suy nghĩ đoán từ
    if (this.comebackTimerInterval) {
      clearInterval(this.comebackTimerInterval);
      this.comebackTimerInterval = null;
    }

    this.comebackTimeRemaining = 30;
    const timerDisplay = document.getElementById('comeback-timer-display');
    if (timerDisplay) {
      timerDisplay.innerHTML = `30<span style="font-size: 18px; font-weight: 600; margin-left: 2px;">s</span>`;
      timerDisplay.style.color = '#ef4444';
      timerDisplay.style.animation = 'none';
    }

    this.comebackTimerInterval = setInterval(() => {
      this.comebackTimeRemaining--;
      if (timerDisplay) {
        timerDisplay.innerHTML = `${this.comebackTimeRemaining}<span style="font-size: 18px; font-weight: 600; margin-left: 2px;">s</span>`;
        if (this.comebackTimeRemaining <= 5) {
          timerDisplay.style.color = '#ff3333';
          timerDisplay.style.animation = 'pulse 0.5s infinite alternate';
          if (typeof sound !== 'undefined' && sound.playTick) {
            sound.playTick();
          }
        }
      }

      if (this.comebackTimeRemaining <= 0) {
        clearInterval(this.comebackTimerInterval);
        this.comebackTimerInterval = null;
        if (typeof sound !== 'undefined' && sound.playToggle) sound.playToggle();
        this.showToast('⏱️ Đã hết 30s suy nghĩ! Hệ thống tự động tính là Không Đoán Từ.');
        this.checkImposterComebackGuess(true, true);
      }
    }, 1000);
  }

  showResultsScreen(eliminatedPlayer) {
    if (!this.categoryData) this.categoryData = CATEGORIES[0];
    if (!this.secretWord) this.secretWord = 'Trà Sữa Trân Châu';

    if (this.caughtImposter) {
      this.caughtImposter.isEliminated = true;
      if (!this.caughtImposter.eliminatedInRound) this.caughtImposter.eliminatedInRound = this.roundNumber || 1;
    }

    // Verify / Determine legitimate winning team based on actual player states
    const livingImposters = this.players.filter(p => p.isImposter && !p.isEliminated);
    const livingInnocents = this.players.filter(p => !p.isImposter && !p.isEliminated);
    const jesterEliminated = this.players.find(p => p.role.id === 'jester' && p.isEliminated);

    if (jesterEliminated && this.winningTeam === 'jester') {
      this.winningTeam = 'jester';
    } else if (this.imposterWonByComeback) {
      this.winningTeam = 'evil';
    } else if (this.caughtImposter && !this.imposterWonByComeback) {
      // Imposter bị bắt và lật kèo thất bại/không đoán -> Phe Dân bảo toàn chiến thắng!
      this.winningTeam = 'good';
    } else if (livingImposters.length === 0) {
      // ALL imposters have been eliminated and comeback failed
      this.winningTeam = 'good';
    } else {
      // Imposter(s) survived! Civilians failed to eliminate Imposters!
      this.winningTeam = 'evil';
    }

    if (!eliminatedPlayer) {
      eliminatedPlayer = this.caughtImposter ||
        this.players.filter(p => p.isEliminated).pop() ||
        this.players.find(p => p.isImposter) ||
        this.players[0];
    }

    this.switchScreen('screen-results');
    this.isCurrentRoundScoreDiscarded = false;
    const discardBtn = document.getElementById('btn-discard-round-score');
    if (discardBtn) {
      discardBtn.classList.remove('discarded');
      discardBtn.title = 'Không tính điểm ván này (Hủy kết quả BXH)';
      const textEl = discardBtn.querySelector('.btn-text');
      if (textEl) textEl.textContent = 'Không tính điểm';
    }

    if (typeof confetti === 'function') {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }

    const winnerBanner = document.getElementById('result-winner-banner');
    if (this.imposterWonByComeback) {
      winnerBanner.textContent = '💀 KẺ GIẢ MẠO LẬT KÈO CHIẾN THẮNG!';
      winnerBanner.style.background = 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)';
    } else if (this.winningTeam === 'good') {
      winnerBanner.textContent = '🎉 PHE DÂN LÀNG CHIẾN THẮNG!';
      winnerBanner.style.background = 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)';
    } else if (this.winningTeam === 'jester') {
      winnerBanner.textContent = '🤪 KẺ NGU CHIẾN THẮNG ĐỘC LẬP!';
      winnerBanner.style.background = 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)';
    } else {
      winnerBanner.textContent = '💀 KẺ GIẢ MẠO CHIẾN THẮNG!';
      winnerBanner.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
    }

    const imposters = this.players.filter(p => p.isImposter).map(p => p.name).join(', ');
    document.getElementById('result-imposter-names').textContent = imposters || eliminatedPlayer.name;
    document.getElementById('result-keyword').textContent = this.secretWord;

    const comebackBadge = document.getElementById('results-comeback-badge');
    if (comebackBadge) {
      if (this.imposterWonByComeback) {
        comebackBadge.style.display = 'block';
        comebackBadge.style.color = '#f59e0b';
        comebackBadge.textContent = '🔥 Lật kèo thành công! Imposter đã xuất sắc đoán trúng từ khóa (+20đ, miễn trừ mọi hình phạt)';
      } else if (this.caughtImposter) {
        comebackBadge.style.display = 'block';
        if (this.imposterGuessResult === 'wrong') {
          comebackBadge.style.color = '#ef4444';
          const guessDisplay = this.imposterGuessText ? `"${this.imposterGuessText}"` : ('Đoán sai');
          comebackBadge.textContent = `❌ Lật kèo thất bại: Imposter đoán sai từ khóa (${guessDisplay} ≠ "${this.secretWord}") ➔ Phạt thêm -10đ`;
        } else {
          comebackBadge.style.color = 'var(--text-muted)';
          const reasonText = this.imposterGuessText ? ` (${this.imposterGuessText})` : '';
          comebackBadge.textContent = `🏳️ Imposter không đoán từ khóa${reasonText} (Bảo toàn điểm, không bị phạt -10đ đoán sai)`;
        }
      } else {
        comebackBadge.style.display = 'none';
      }
    }

    const rosterList = document.getElementById('results-roster-list');
    rosterList.innerHTML = '';
    this.players.forEach(p => {
      const row = document.createElement('div');
      row.className = 'role-summary-row';
      const roleName = p.role.name_vi;
      row.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
          <div style="width: 32px; height: 32px; border-radius: 50%; background: ${p.avatarBg}; display: flex; align-items: center; justify-content: center; font-size: 16px;">
            ${p.avatar}
          </div>
          <div>
            <div style="font-family: var(--font-display); font-weight: 700; font-size: 14px;">${p.name}</div>
            <div style="font-size: 11px; color: ${p.role.color}; font-weight: 600;">${p.role.icon} ${roleName}</div>
          </div>
        </div>
        <div>
          ${p.isEliminated
          ? `<span class="team-tag" style="background: rgba(239, 68, 68, 0.2); color: #ef4444;">${'Bị loại'}</span>`
          : `<span class="team-tag" style="background: rgba(16, 185, 129, 0.2); color: #10b981;">${'Sống sót'}</span>`}
        </div>
      `;
      rosterList.appendChild(row);
    });

    const logBox = document.getElementById('match-timeline-log');
    const elimName = eliminatedPlayer ? eliminatedPlayer.name : 'Nghi phạm';
    const elimRole = eliminatedPlayer && eliminatedPlayer.role ? (eliminatedPlayer.role.name_vi) : 'Kẻ Giả Mạo';

    const eliminatedEvilsAndNeutrals = this.players.filter(p =>
      p.isEliminated && (
        p.isImposter ||
        (p.role && (p.role.team === 'evil' || (p.role.team === 'neutral' && p.role.id !== 'drunkard')))
      )
    );
    const caughtCount = eliminatedEvilsAndNeutrals.length;
    const voteBonusPerLivingGood = caughtCount * 5;
    const voteBonusNoteText = caughtCount > 0
      ? (caughtCount > 1
        ? `Dân còn sống vote đúng ${caughtCount} Kẻ Giả Mạo & Trung Lập (+${voteBonusPerLivingGood}đ)`
        : `Dân còn sống vote đúng Kẻ Giả Mạo & Trung Lập (+5đ)`)
      : '';
    const voteBonusSuffix = voteBonusNoteText ? `; ${voteBonusNoteText}` : '';

    let comebackTimelineNote = '';
    if (this.imposterWonByComeback) {
      const heroName = this.caughtImposter ? this.caughtImposter.name : elimName;
      comebackTimelineNote = `<div>• <strong>🔥 Cơ hội lật kèo:</strong> ${heroName} đã xuất sắc đoán chính xác từ khóa "<strong>${this.secretWord}</strong>"! Phe Kẻ Giả Mạo giành chiến thắng chung cuộc (+20đ cho Imposter, miễn trừ mọi phạt bị bắt hay lộ vòng 1; Dân Làng bị trừ -5đ thua ván).</div>`;
    } else if (this.caughtImposter) {
      const heroName = this.caughtImposter.name;
      if (this.imposterGuessResult === 'wrong') {
        const guessDisp = this.imposterGuessText ? `"${this.imposterGuessText}"` : ('Đoán sai');
        comebackTimelineNote = `<div>• <strong>❌ Cơ hội lật kèo:</strong> ${heroName} đã đoán ${guessDisp} (không chính xác, từ đúng là "${this.secretWord}") ➔ Phạt thêm -10đ đoán sai (Tổng phạt -20đ; nếu Vòng 1 là -25đ). Phe Dân Làng bảo toàn chiến thắng (Tất cả Dân +10đ${voteBonusSuffix})!</div>`;
      } else {
        const skipDetail = this.imposterGuessText ? ` (${this.imposterGuessText})` : '';
        comebackTimelineNote = `<div>• <strong>🏳️ Cơ hội lật kèo:</strong> ${heroName} đã chọn không đoán từ${skipDetail} ➔ Bảo toàn điểm, không bị phạt -10đ đoán sai (chỉ chịu -10đ bị bắt; nếu Vòng 1 là -15đ). Phe Dân Làng bảo toàn chiến thắng (Tất cả Dân +10đ${voteBonusSuffix})!</div>`;
      }
    }

    logBox.innerHTML = `
      <div>• <strong>${'Bắt đầu ván:'}</strong> ${this.players.length || 6} ${'người chơi tham gia'}.</div>
      <div>• <strong>${'Chủ đề từ khóa:'}</strong> ${this.categoryData.name_vi} (${this.secretWord}).</div>
      <div>• <strong>${'Kết quả bỏ phiếu:'}</strong> ${elimName} (${elimRole}) ${'đã bị đa số trục xuất.'}</div>
      ${comebackTimelineNote}
    `;

    // ==========================================
    // SCORE CALCULATION & PARTY LEADERBOARD
    // ==========================================
    const roundScores = [];

    this.players.forEach(p => {
      let delta = 0;
      let reasons = [];

      // ========================================================
      // 1. KẾT QUẢ THEO PHE THẮNG / THUA
      // ========================================================
      if (this.winningTeam === 'good') {
        // Phe Ác Thua
        if (p.isImposter || (p.role && p.role.team === 'evil') || (p.role && p.role.id === 'imposter')) {
          const isCaughtOne = this.caughtImposter ? (p.id === this.caughtImposter.id) : p.isEliminated;
          const elimRound = p.eliminatedInRound || (isCaughtOne ? this.roundNumber : 1) || 1;
          const isRound1 = elimRound === 1;

          if (isCaughtOne) {
            if (this.imposterGuessResult === 'wrong') {
              if (isRound1) {
                delta -= 25;
                reasons.push('Bị bắt & đoán sai ở Vòng 1 (-25đ: -10đ bị bắt, -10đ đoán sai, -5đ lộ sớm)');
              } else {
                delta -= 20;
                reasons.push('Bị bắt & đoán sai từ (-20đ: -10đ bị bắt, -10đ đoán sai)');
              }
            } else {
              // Skipped (hoặc hết 30s): không bị trừ 10đ đoán sai
              if (isRound1) {
                delta -= 15;
                reasons.push('Bị bắt ở Vòng 1 (-15đ: -10đ bị bắt, -5đ lộ sớm, không đoán từ)');
              } else {
                delta -= 10;
                reasons.push('Bị bắt & không đoán từ (-10đ)');
              }
            }
          } else {
            // Đồng minh phe Ác khác nếu có
            if (p.isEliminated) {
              delta -= (isRound1 ? 15 : 10);
              reasons.push('Bị loại khỏi ván đấu (-10đ)');
            } else {
              delta -= 10;
              reasons.push('Phe Ác thua ván (-10đ)');
            }
          }
        } else if (p.role.team === 'good' || p.role.id === 'drunkard') {
          // Phe Dân Thắng: tất cả +10đ
          delta += 10;
          reasons.push('Phe Dân thắng (+10đ)');

          // Dân còn sống vote đúng Kẻ Giả Mạo & Trung Lập: +5đ/kẻ (lũy kế nếu có nhiều kẻ)
          if (!p.isEliminated && caughtCount > 0) {
            delta += voteBonusPerLivingGood;
            reasons.push(caughtCount > 1
              ? `Dân còn sống vote đúng ${caughtCount} Kẻ Giả Mạo & Trung Lập (+${voteBonusPerLivingGood}đ)`
              : `Dân còn sống vote đúng Kẻ Giả Mạo & Trung Lập (+${voteBonusPerLivingGood}đ)`);
          }
        }
      } else if (this.winningTeam === 'jester') {
        // Kẻ Ngu thắng độc lập: Kẻ Ngu bị vote loại nhận +30đ, tất cả người chơi khác (kể cả Kẻ Ngu chưa bị vote) nhận 0đ (không bị trừ điểm)
        if (p.role.id === 'jester' && p.isEliminated) {
          delta = 30;
          reasons = ['Kẻ Ngu chiến thắng khi bị vote loại (+30đ)'];
        } else if (p.role.id === 'jester') {
          delta = 0;
          reasons = ['Kẻ Ngu không bị vote loại (0đ)'];
        } else {
          delta = 0;
          reasons = ['Kẻ Ngu đã chiến thắng ván đấu (0đ)'];
        }
      } else {
        // ========================================================
        // PHE ÁC THẮNG (IMPOSTER THẮNG / DÂN THƯỜNG THUA)
        // ========================================================
        if (p.isImposter) {
          if (this.imposterWonByComeback) {
            delta += 20;
            const isHero = this.caughtImposter ? (p.id === this.caughtImposter.id) : true;
            reasons.push((isHero ? 'Lật kèo đoán trúng từ (+20đ, miễn trừ mọi hình phạt)' : 'Đồng đội lật kèo cứu ván (+20đ)'));
          } else if (!p.isEliminated) {
            delta += 15;
            reasons.push('Kẻ Giả Mạo sống sót thắng ván (+15đ)');
          } else {
            delta += 10;
            reasons.push('Phe Kẻ Giả Mạo thắng (+10đ)');
          }
        } else if (p.role.team === 'good' || p.role.id === 'drunkard') {
          // DÂN THƯỜNG & KẺ SAY RƯỢU THUA TRẬN TRƯỚC IMPOSTER: XỬ THUA & TRỪ ĐIỂM
          delta -= 5;
          reasons.push('Thua trận trước Imposter (-5đ)');

          // Dân còn sống nếu đã từng vote đúng Kẻ Giả Mạo & Trung Lập các vòng trước: +5đ/kẻ lũy kế
          if (!p.isEliminated && caughtCount > 0) {
            delta += voteBonusPerLivingGood;
            reasons.push(caughtCount > 1
              ? `Dân còn sống vote đúng ${caughtCount} Kẻ Giả Mạo & Trung Lập (+${voteBonusPerLivingGood}đ)`
              : `Dân còn sống vote đúng Kẻ Giả Mạo & Trung Lập (+${voteBonusPerLivingGood}đ)`);
          }
        }
      }

      // ========================================================
      // 2. CƠ CHẾ PHÂN HÓA ĐẶC BIỆT THEO HÀNH VI & VAI TRÒ
      // (Không áp dụng nếu Kẻ Ngu thắng, vì Kẻ Ngu thắng được +25đ và tất cả trừ 5đ)
      // ========================================================
      if (this.winningTeam !== 'jester') {
        // Kẻ Ngu không bị loại khi phe khác thắng -> thất bại nhưng KHÔNG mất điểm (0đ)
        if (p.role.id === 'jester') {
          reasons.push('Kẻ Ngu không bị loại (0đ)');
        }

        // B. Điệp Viên Hai Mang (Double Agent): Thắng nếu Imposter sống sót hoặc là người cuối cùng
        if (p.role.id === 'double_agent') {
          const anyImposterSurvived = this.players.some(pl => pl.isImposter && !pl.isEliminated);
          if (anyImposterSurvived || this.winningTeam === 'evil' || !p.isEliminated) {
            delta += 15;
            reasons.push('Điệp Viên giúp Imposter thắng (+15)');
          } else {
            delta -= 5;
            reasons.push('Điệp Viên thất bại (-5)');
          }
        }

        // C. Gián Điệp (Spy) - Phe Trung Lập: Thắng độc lập khi SỐNG SÓT (+20đ), bị loại (-10đ), vote ai cũng 0đ
        if (p.role.id === 'spy') {
          if (!p.isEliminated) {
            delta += 20;
            reasons.push('Gián Điệp sống sót thành công (+20đ)');
          } else {
            delta -= 10;
            reasons.push('Gián Điệp bị phát hiện & trục xuất (-10đ)');
          }
        }

        // E. Phạt biểu quyết oan sai (Wrong vote penalty): tất cả dân còn sống -5đ (không tính dân đã chết)
        // Kẻ Ngu và Gián Điệp: vote đúng hay sai đều không tăng giảm điểm!
        if (!p.isEliminated && p.penalty && p.penalty > 0 && p.role.id !== 'jester' && p.role.id !== 'spy') {
          delta -= p.penalty;
          reasons.push(`Vote sai dân làng (-${p.penalty}đ)`);
        }
      }

      if (!this.partyScores[p.name]) {
        this.partyScores[p.name] = { total: 0, wins: 0, games: 0, avatar: p.avatar, avatarBg: p.avatarBg };
      }
      this.partyScores[p.name].total = (this.partyScores[p.name].total || 0) + delta;
      this.partyScores[p.name].games += 1;
      if (delta >= 10) this.partyScores[p.name].wins += 1;
      this.partyScores[p.name].avatar = p.avatar;
      this.partyScores[p.name].avatarBg = p.avatarBg;

      roundScores.push({
        name: p.name,
        avatar: p.avatar,
        avatarBg: p.avatarBg,
        role: p.role,
        delta,
        total: this.partyScores[p.name].total,
        reason: reasons.join(', ') || ('Tham gia (+0)')
      });
    });

    localStorage.setItem('gti_party_scores', JSON.stringify(this.partyScores));
    this.lastRoundScores = roundScores;

    // Update match count display
    const totalMatches = Object.values(this.partyScores).reduce((max, cur) => Math.max(max, cur.games || 0), 0) || 1;
    const matchCountEl = document.getElementById('val-match-count');
    if (matchCountEl) {
      matchCountEl.textContent = `${totalMatches} ${'ván đã chơi'}`;
    }

    // Render results scoreboard based on active tab
    this.renderResultsScoreboard();
    this.updateSetupTournamentBanner();
    this.saveMatchToHistory();
  }

  renderResultsScoreboard() {
    const lbContainer = document.getElementById('results-leaderboard-list');
    const descEl = document.getElementById('label-score-view-desc');
    const mvpTag = document.getElementById('label-mvp-tag');
    if (!lbContainer) return;

    lbContainer.innerHTML = '';

    if (this.currentScoreboardTab === 'round') {
      if (descEl) descEl.textContent = 'Hiển thị điểm cộng theo đóng góp ván này';

      const sortedRound = [...this.lastRoundScores].sort((a, b) => b.delta - a.delta || b.total - a.total);
      const mvpPlayer = sortedRound[0];
      if (mvpTag) {
        if (mvpPlayer && mvpPlayer.delta > 0) {
          mvpTag.textContent = `MVP: ${mvpPlayer.name} (+${mvpPlayer.delta}đ)`;
        } else {
          mvpTag.textContent = 'MVP: -';
        }
      }

      if (!this.lastRoundScores || this.lastRoundScores.length === 0) {
        lbContainer.innerHTML = `
          <div style="text-align: center; color: var(--text-muted); padding: 24px 0; font-size: 13px;">
            ${'Chưa có dữ liệu ván đấu nào. Hãy bắt đầu ván mới!'}
          </div>
        `;
        return;
      }

      sortedRound.forEach((item, idx) => {
        const row = document.createElement('div');
        row.className = `leaderboard-row ${idx === 0 && item.delta > 0 ? 'mvp-highlight' : ''}`;
        const rankClass = idx === 0 ? 'rank-1' : idx === 1 ? 'rank-2' : idx === 2 ? 'rank-3' : 'rank-other';
        const medal = idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `${idx + 1}`;
        const deltaFormatted = item.delta > 0 ? `+${item.delta}` : `${item.delta}`;

        row.innerHTML = `
          <div style="display: flex; align-items: center; gap: 10px;">
            <div class="rank-badge ${rankClass}">${medal}</div>
            <div style="width: 32px; height: 32px; border-radius: 50%; background: ${item.avatarBg}; display: flex; align-items: center; justify-content: center; font-size: 16px;">
              ${item.avatar}
            </div>
            <div>
              <div style="font-family: var(--font-display); font-weight: 700; font-size: 14px;">${item.name}</div>
              <div style="font-size: 11px; color: var(--text-muted);">${item.reason}</div>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 6px;">
            <span class="score-tag-delta ${item.delta < 0 ? 'negative' : ''}">${deltaFormatted}</span>
            <span class="score-tag-total ${item.total < 0 ? 'negative' : ''}" title="${'Tổng điểm tích lũy'}">${item.total}đ</span>
          </div>
        `;
        lbContainer.appendChild(row);
      });
    } else {
      // Cumulative Series Standings
      if (descEl) descEl.textContent = 'Bảng tổng sắp tích lũy sau tất cả các ván chơi';

      const entries = Object.entries(this.partyScores).map(([name, data]) => ({
        name,
        ...data
      }));

      entries.sort((a, b) => b.total - a.total || b.wins - a.wins);

      if (mvpTag) {
        if (entries[0] && entries[0].total > 0) {
          mvpTag.textContent = `👑 TOP 1: ${entries[0].name} (${entries[0].total}đ)`;
        } else {
          mvpTag.textContent = '👑 TOP 1: -';
        }
      }

      if (entries.length === 0) {
        lbContainer.innerHTML = `
          <div style="text-align: center; color: var(--text-muted); padding: 24px 0; font-size: 13px;">
            ${'Chưa có điểm số nào được ghi nhận. Hãy chơi ván đầu tiên!'}
          </div>
        `;
        return;
      }

      entries.forEach((item, idx) => {
        const row = document.createElement('div');
        row.className = `leaderboard-row ${idx === 0 && item.total > 0 ? 'mvp-highlight' : ''}`;
        const rankClass = idx === 0 ? 'rank-1' : idx === 1 ? 'rank-2' : idx === 2 ? 'rank-3' : 'rank-other';
        const medal = idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `${idx + 1}`;

        row.innerHTML = `
          <div style="display: flex; align-items: center; gap: 10px;">
            <div class="rank-badge ${rankClass}">${medal}</div>
            <div style="width: 32px; height: 32px; border-radius: 50%; background: ${item.avatarBg || '#e0e7ff'}; display: flex; align-items: center; justify-content: center; font-size: 16px;">
              ${item.avatar || '👤'}
            </div>
            <div>
              <div style="font-family: var(--font-display); font-weight: 700; font-size: 14px;">${item.name}</div>
              <div style="font-size: 11px; color: var(--text-muted);">${item.wins || 0} trận thắng / ${item.games || 0} ván</div>
            </div>
          </div>
          <div style="display: flex; align-items: center;">
            <span class="score-tag-total ${item.total < 0 ? 'negative' : ''}" style="font-size: 16px; color: ${item.total < 0 ? '#ef4444' : '#f59e0b'};">${item.total}đ</span>
          </div>
        `;
        lbContainer.appendChild(row);
      });
    }
  }

  discardCurrentMatchScores() {
    if (this.isCurrentRoundScoreDiscarded) {
      this.showToast('Ván này đã được hủy tính điểm!', 'warning');
      return;
    }

    if (!this.lastRoundScores || this.lastRoundScores.length === 0) {
      this.showToast('Không có điểm số nào để hủy!', 'warning');
      return;
    }

    // Hoàn tác điểm số đã tính trong ván này khỏi BXH giải đấu partyScores
    this.lastRoundScores.forEach(item => {
      if (this.partyScores && this.partyScores[item.name]) {
        const pData = this.partyScores[item.name];
        pData.total = (pData.total || 0) - item.delta;
        pData.games = Math.max(0, (pData.games || 1) - 1);
        if (item.delta >= 10) {
          pData.wins = Math.max(0, (pData.wins || 1) - 1);
        }
        item.total = pData.total;
      }
      item.delta = 0;
      item.reason = '🚫 Không tính điểm ván này';
    });

    this.isCurrentRoundScoreDiscarded = true;
    localStorage.setItem('gti_party_scores', JSON.stringify(this.partyScores));

    // Xóa ván vừa lưu khỏi lịch sử nếu có
    if (Array.isArray(this.history) && this.history.length > 0) {
      this.history.pop();
      localStorage.setItem('gti_history', JSON.stringify(this.history));
    }

    // Cập nhật giao diện scoreboard Screen 7 & setup banner
    if (typeof sound !== 'undefined') sound.playClick();
    this.renderResultsScoreboard();
    this.renderCumulativeLeaderboard();
    this.updateSetupTournamentBanner();

    // Cập nhật trạng thái hiển thị của nút
    const btn = document.getElementById('btn-discard-round-score');
    if (btn) {
      btn.classList.add('discarded');
      btn.title = 'Đã hủy tính điểm ván này';
      const textEl = btn.querySelector('.btn-text');
      if (textEl) textEl.textContent = 'Đã hủy điểm';
    }

    this.showToast('🗑️ Đã hủy điểm ván này! Không tính vào BXH giải đấu.', 'danger');
  }

  updateSetupTournamentBanner() {
    const banner = document.getElementById('setup-tournament-banner');
    const stats = document.getElementById('setup-tournament-stats');
    if (!banner || !stats) return;

    const entries = Object.entries(this.partyScores || {}).filter(([_, data]) => data && (data.games > 0 || data.total !== undefined));
    if (entries.length === 0) {
      stats.textContent = 'Chưa có điểm • Sẵn sàng bắt đầu giải đấu mới!';
      return;
    }

    entries.sort((a, b) => b[1].total - a[1].total);
    const topPlayer = entries[0];
    const lowestPlayer = entries.length > 1 && entries[entries.length - 1][1].total < 0 ? entries[entries.length - 1] : null;
    const totalMatches = Object.values(this.partyScores).reduce((max, cur) => Math.max(max, cur.games || 0), 0) || 1;

    let textVi = `Đã đấu: <strong class="tournament-stat-matches">${totalMatches} ván</strong> • Dẫn đầu: <strong class="tournament-stat-leader">${topPlayer[0]} (${topPlayer[1].total > 0 ? '+' : ''}${topPlayer[1].total}đ)</strong>`;

    if (lowestPlayer) {
      textVi += ` • <span style="color: var(--text-muted);">Điểm âm:</span> <strong style="color: #ef4444; font-weight: 700;">${lowestPlayer[0]} (${lowestPlayer[1].total}đ)</strong>`;
    }

    stats.innerHTML = textVi;
  }

  showToast(message, type = 'success') {
    let toast = document.getElementById('app-floating-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'app-floating-toast';
      toast.className = 'app-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.className = `app-toast active ${type}`;
    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      toast.classList.remove('active');
    }, 2500);
  }

  showActionNotice({
    icon = '🔔',
    title = 'Thông Báo',
    targetName = '',
    type = 'info',
    heading = '',
    message = '',
    note = '🔒 Kết quả này chỉ hiển thị riêng tư cho bạn trên điện thoại.',
    btnText = '✓ Đã hiểu & Ghi nhớ',
    onClose = null
  } = {}) {
    const modal = document.getElementById('modal-action-notice');
    if (!modal) {
      if (onClose) onClose();
      return;
    }

    const iconEl = document.getElementById('action-notice-icon');
    const titleEl = document.getElementById('action-notice-title');
    const targetEl = document.getElementById('action-notice-target');
    const bodyBoxEl = document.getElementById('action-notice-body-box');
    const headingEl = document.getElementById('action-notice-heading');
    const subEl = document.getElementById('action-notice-sub');
    const noteEl = document.getElementById('action-notice-note');
    const btnClose = document.getElementById('btn-close-action-notice');

    if (iconEl) iconEl.textContent = icon;
    if (titleEl) titleEl.textContent = title;

    if (targetEl) {
      if (targetName) {
        targetEl.textContent = targetName.startsWith('Mục tiêu') ? targetName : `Mục tiêu: ${targetName}`;
        targetEl.style.display = 'inline-block';
      } else {
        targetEl.style.display = 'none';
      }
    }

    if (bodyBoxEl) {
      bodyBoxEl.className = `action-notice-body-box ${type}`;
    }
    if (headingEl) headingEl.textContent = heading;
    if (subEl) subEl.innerHTML = message;
    if (noteEl) noteEl.textContent = note;
    if (btnClose) {
      btnClose.innerHTML = `<span>${btnText}</span>`;
    }

    if (typeof sound !== 'undefined') {
      if (type === 'evil') sound.playDramaticReveal();
      else if (type === 'good') sound.playWinFanfare();
      else sound.playClick();
    }

    modal.classList.add('open');

    const handleClose = () => {
      modal.classList.remove('open');
      if (btnClose) btnClose.onclick = null;
      modal.onclick = null;
      if (onClose) onClose();
    };

    if (btnClose) {
      btnClose.onclick = (e) => {
        e.preventDefault();
        if (typeof sound !== 'undefined') sound.playClick();
        handleClose();
      };
    }

    modal.onclick = (e) => {
      if (e.target === modal) {
        if (typeof sound !== 'undefined') sound.playClick();
        handleClose();
      }
    };
  }

  resetAllScores() {
    const modal = document.getElementById('modal-confirm-reset');
    if (modal) {
      if (typeof sound !== 'undefined') sound.playClick();
      modal.classList.add('open');
    } else {
      const msg = 'Bạn có chắc chắn muốn xóa và đặt lại toàn bộ điểm số của tất cả người chơi về 0 để bắt đầu giải đấu mới?';
      if (confirm(msg)) {
        this.executeResetAllScores();
      }
    }
  }

  executeResetAllScores() {
    if (typeof sound !== 'undefined') sound.playClick();

    // Khởi tạo lại điểm số về 0 cho tất cả người chơi trong giải đấu
    const resetScores = {};
    if (this.partyScores && Object.keys(this.partyScores).length > 0) {
      Object.entries(this.partyScores).forEach(([name, data]) => {
        resetScores[name] = {
          total: 0,
          wins: 0,
          games: 0,
          avatar: (data && data.avatar) ? data.avatar : '👤',
          avatarBg: (data && data.avatarBg) ? data.avatarBg : '#e0e7ff'
        };
      });
    }
    if (Array.isArray(this.players) && this.players.length > 0) {
      this.players.forEach(p => {
        if (!resetScores[p.name]) {
          resetScores[p.name] = {
            total: 0,
            wins: 0,
            games: 0,
            avatar: p.avatar || '👤',
            avatarBg: p.avatarBg || '#e0e7ff'
          };
        }
      });
    }

    this.partyScores = resetScores;
    localStorage.setItem('gti_party_scores', JSON.stringify(this.partyScores));

    // Đặt lại điểm số ván gần nhất đồng bộ về 0
    if (this.lastRoundScores) {
      this.lastRoundScores.forEach(x => {
        x.delta = 0;
        x.total = 0;
        x.reason = 'Đã đặt lại điểm số';
      });
    }

    // Đặt lại số ván hiển thị
    const countEl = document.getElementById('val-match-count');
    if (countEl) {
      countEl.textContent = `0 ${'ván đã chơi'}`;
    }

    // Đặt lại nhãn MVP
    const mvpTag = document.getElementById('label-mvp-tag');
    if (mvpTag) {
      mvpTag.textContent = 'MVP: -';
    }

    // Đóng modal xác nhận
    document.getElementById('modal-confirm-reset')?.classList.remove('open');

    // Cập nhật giao diện
    this.renderResultsScoreboard();
    this.renderCumulativeLeaderboard();
    this.updateSetupTournamentBanner();

    // Thông báo Toast thành công
    this.showToast('✅ Đã đặt lại toàn bộ điểm số về 0đ!');
  }

  renderCumulativeLeaderboard() {
    const list = document.getElementById('cumulative-leaderboard-list');
    if (!list) return;
    list.innerHTML = '';

    const entries = Object.entries(this.partyScores).map(([name, data]) => {
      const parsedData = typeof data === 'object' && data !== null ? data : { total: Number(data) || 0 };
      const total = Number(parsedData.total ?? parsedData.score ?? parsedData.points ?? 0);
      return {
        name,
        ...parsedData,
        total,
        wins: Number(parsedData.wins || 0),
        games: Number(parsedData.games || 0)
      };
    });

    if (entries.length === 0) {
      list.innerHTML = `
        <div style="text-align: center; color: var(--text-muted); padding: 30px 0; font-size: 13px;">
          ${'Chưa có điểm số nào được ghi nhận. Hãy chơi ván đầu tiên!'}
        </div>
      `;
      return;
    }

    entries.sort((a, b) => b.total - a.total || b.wins - a.wins);

    entries.forEach((item, idx) => {
      const row = document.createElement('div');
      row.className = `leaderboard-row ${idx === 0 && item.total > 0 ? 'mvp-highlight' : (item.total < 0 ? 'negative-score-row' : '')}`;
      const rankClass = idx === 0 && item.total > 0 ? 'rank-1' : idx === 1 && item.total > 0 ? 'rank-2' : idx === 2 && item.total > 0 ? 'rank-3' : (item.total < 0 ? 'rank-other rank-negative' : 'rank-other');
      const medal = (idx === 0 && item.total > 0) ? '🥇' : (idx === 1 && item.total > 0) ? '🥈' : (idx === 2 && item.total > 0) ? '🥉' : (item.total < 0 ? '🔻' : `${idx + 1}`);

      row.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
          <div class="rank-badge ${rankClass}">${medal}</div>
          <div style="width: 32px; height: 32px; border-radius: 50%; background: ${item.avatarBg || '#e0e7ff'}; display: flex; align-items: center; justify-content: center; font-size: 16px;">
            ${item.avatar || '👤'}
          </div>
          <div>
            <div style="font-family: var(--font-display); font-weight: 700; font-size: 14px;">${item.name}</div>
            <div style="font-size: 11px; color: var(--text-muted);">
              ${item.wins} chiến thắng / ${item.games} ván
            </div>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 6px;">
          <span class="score-tag-total ${item.total < 0 ? 'negative' : ''}" style="font-size: 16px; color: ${item.total < 0 ? '#ef4444' : '#f59e0b'};">${item.total > 0 ? `+${item.total}` : `${item.total}`}đ</span>
          <button type="button" class="leaderboard-action-btn btn-edit-lb-player" data-player="${item.name}" title="Đổi tên người chơi">✏️</button>
          <button type="button" class="leaderboard-action-btn btn-delete-lb-player" data-player="${item.name}" title="Xóa người chơi khỏi BXH">🗑️</button>
        </div>
      `;
      list.appendChild(row);
    });

    list.querySelectorAll('.btn-edit-lb-player').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const oldName = e.currentTarget.dataset.player;
        this.openRenamePlayerModal(oldName);
      });
    });

    list.querySelectorAll('.btn-delete-lb-player').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const playerName = e.currentTarget.dataset.player;
        if (confirm(`Bạn có chắc muốn xóa điểm số của "${playerName}" khỏi giải đấu?`)) {
          delete this.partyScores[playerName];
          localStorage.setItem('gti_party_scores', JSON.stringify(this.partyScores));
          this.renderCumulativeLeaderboard();
          this.renderResultsScoreboard();
          this.updateSetupTournamentBanner();
          if (document.getElementById('screen-players')?.classList.contains('active')) {
            this.generatePlayerInputs();
          }
        }
      });
    });
  }

  // ==========================================
  // RENAME PLAYER MODAL (NO POINT TAMPERING)
  // ==========================================
  openRenamePlayerModal(playerName) {
    if (!this.partyScores || !this.partyScores[playerName]) return;
    this.renamingOldPlayerName = playerName;
    const rawData = this.partyScores[playerName];
    const data = typeof rawData === 'object' && rawData !== null ? rawData : { total: Number(rawData) || 0 };
    const total = Number(data.total ?? data.score ?? data.points ?? 0);

    const modal = document.getElementById('modal-rename-player');
    const pointsVal = document.getElementById('rename-player-points-val');
    const input = document.getElementById('input-rename-player-name');

    if (pointsVal) {
      pointsVal.textContent = `${total} điểm (${data.wins || 0} chiến thắng / ${data.games || 0} ván)`;
    }
    if (input) {
      input.value = playerName;
    }
    if (typeof sound !== 'undefined') sound.playClick();
    modal?.classList.add('open');
    setTimeout(() => input?.focus(), 150);
  }

  saveRenamedPlayer() {
    const input = document.getElementById('input-rename-player-name');
    const oldName = this.renamingOldPlayerName;
    if (!input || !oldName || !this.partyScores[oldName]) return;

    const newName = input.value.trim();
    if (!newName) {
      this.showToast('Tên người chơi không được để trống!', 'danger');
      return;
    }
    if (newName === oldName) {
      document.getElementById('modal-rename-player')?.classList.remove('open');
      return;
    }
    if (this.partyScores[newName]) {
      this.showToast(`Tên "${newName}" đã tồn tại trên BXH! Vui lòng chọn tên khác.`, 'danger');
      return;
    }

    // Sao chép điểm số của người chơi cũ sang tên mới (ĐIỂM SỐ ĐƯỢC GIỮ NGUYÊN BẢO MẬT, KHÔNG THỂ SỬA)
    const oldEntry = this.partyScores[oldName];
    const entryObj = typeof oldEntry === 'object' && oldEntry !== null
      ? { ...oldEntry }
      : { total: Number(oldEntry) || 0, wins: 0, games: 0, avatar: '👤', avatarBg: '#e0e7ff' };
    this.partyScores[newName] = entryObj;
    delete this.partyScores[oldName];

    // Cập nhật trong danh sách người chơi ván hiện tại nếu có
    if (Array.isArray(this.playerNames)) {
      const idx = this.playerNames.indexOf(oldName);
      if (idx !== -1) {
        this.playerNames[idx] = newName;
        localStorage.setItem('gti_player_names', JSON.stringify(this.playerNames));
      }
    }

    localStorage.setItem('gti_party_scores', JSON.stringify(this.partyScores));

    // Cập nhật lại giao diện
    this.renderCumulativeLeaderboard();
    this.renderResultsScoreboard();
    this.updateSetupTournamentBanner();
    if (document.getElementById('screen-players')?.classList.contains('active')) {
      this.generatePlayerInputs();
    }

    document.getElementById('modal-rename-player')?.classList.remove('open');
    if (typeof sound !== 'undefined') sound.playClick();
    const scoreVal = entryObj.total ?? entryObj.score ?? entryObj.points ?? 0;
    this.showToast(`✅ Đã đổi tên thành "${newName}"! (Điểm số ${scoreVal} điểm được giữ nguyên)`);
  }

  // ==========================================
  // ROSTER PICKER: CHỌN NGƯỜI CHƠI TỪ GIẢI ĐẤU
  // ==========================================
  openRosterPicker() {
    const modal = document.getElementById('modal-roster-picker');
    const list = document.getElementById('roster-picker-items-list');
    const counter = document.getElementById('label-roster-selected-count');
    if (!modal || !list) return;

    if (typeof sound !== 'undefined') sound.playClick();

    const entries = Object.entries(this.partyScores || {}).map(([name, data]) => {
      const parsedData = typeof data === 'object' && data !== null ? data : { total: Number(data) || 0 };
      const total = Number(parsedData.total ?? parsedData.score ?? parsedData.points ?? 0);
      return {
        name,
        ...parsedData,
        total,
        wins: Number(parsedData.wins || 0),
        games: Number(parsedData.games || 0)
      };
    });

    if (entries.length === 0) {
      list.innerHTML = `
        <div style="text-align: center; color: var(--text-muted); padding: 30px 10px; font-size: 13px;">
          ${'Chưa có người chơi nào trên BXH giải đấu. Hãy chơi ván đầu tiên hoặc nhập tên để bắt đầu tích lũy điểm!'}
        </div>
      `;
      modal.classList.add('open');
      return;
    }

    entries.sort((a, b) => b.total - a.total || b.wins - a.wins);

    // Mặc định chọn các người chơi đang có trong danh sách ván hiện tại
    this.selectedRosterNames = new Set(this.playerNames.filter(n => this.partyScores[n]));
    if (this.selectedRosterNames.size === 0) {
      entries.slice(0, Math.min(this.playerCount, entries.length)).forEach(e => this.selectedRosterNames.add(e.name));
    }

    const updateCounter = () => {
      if (counter) {
        counter.textContent = `Đã chọn: ${this.selectedRosterNames.size} người chơi`;
      }
    };

    list.innerHTML = '';
    entries.forEach((item, idx) => {
      const isSelected = this.selectedRosterNames.has(item.name);
      const row = document.createElement('div');
      row.className = `roster-picker-item ${isSelected ? 'selected' : ''}`;
      row.dataset.player = item.name;
      const rankClass = idx === 0 ? 'rank-1' : idx === 1 ? 'rank-2' : idx === 2 ? 'rank-3' : 'rank-other';
      const medal = idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `${idx + 1}`;

      row.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
          <div class="roster-checkbox">${isSelected ? '✓' : ''}</div>
          <div class="rank-badge ${rankClass}" style="width: 24px; height: 24px; font-size: 11px;">${medal}</div>
          <div style="width: 32px; height: 32px; border-radius: 50%; background: ${item.avatarBg || '#e0e7ff'}; display: flex; align-items: center; justify-content: center; font-size: 16px;">
            ${item.avatar || '👤'}
          </div>
          <div>
            <div style="font-family: var(--font-display); font-weight: 700; font-size: 14px;">${item.name}</div>
            <div style="font-size: 11px; color: var(--text-muted);">${item.wins || 0} chiến thắng / ${item.games || 0} ván</div>
          </div>
        </div>
        <div style="font-family: var(--font-mono); font-size: 14px; font-weight: 800; color: ${item.total < 0 ? '#ef4444' : '#f59e0b'};">
          ${item.total > 0 ? `+${item.total}` : `${item.total || 0}`}đ
        </div>
      `;

      row.addEventListener('click', () => {
        if (this.selectedRosterNames.has(item.name)) {
          this.selectedRosterNames.delete(item.name);
          row.classList.remove('selected');
          row.querySelector('.roster-checkbox').textContent = '';
        } else {
          if (this.selectedRosterNames.size >= 20) {
            this.showToast('Tối đa 20 người chơi trong một ván!', 'danger');
            return;
          }
          this.selectedRosterNames.add(item.name);
          row.classList.add('selected');
          row.querySelector('.roster-checkbox').textContent = '✓';
        }
        updateCounter();
      });

      list.appendChild(row);
    });

    updateCounter();
    modal.classList.add('open');
  }

  applySelectedRoster() {
    if (!this.selectedRosterNames || this.selectedRosterNames.size < 3) {
      this.showToast('Vui lòng chọn ít nhất 3 người chơi!', 'danger');
      return;
    }

    const chosen = Array.from(this.selectedRosterNames);
    this.playerCount = chosen.length;
    this.playerNames = chosen;
    localStorage.setItem('gti_player_names', JSON.stringify(this.playerNames));
    localStorage.setItem('gti_players', this.playerCount.toString());

    // Cập nhật thanh trượt số người chơi trên màn hình cài đặt nếu có
    const slider = document.getElementById('setting-players');
    const countVal = document.getElementById('val-players');
    if (slider) slider.value = this.playerCount;
    if (countVal) countVal.textContent = this.playerCount.toString();

    this.autoBalanceRoles(this.playerCount);
    this.generatePlayerInputs();

    document.getElementById('modal-roster-picker')?.classList.remove('open');
    if (typeof sound !== 'undefined') sound.playClick();
    this.showToast(`✅ Đã chọn ${this.playerCount} người chơi từ BXH vào ván đấu!`);
  }

  checkImposterComebackGuess(isGiveup = false, isTimeout = false) {
    if (this.comebackTimerInterval) {
      clearInterval(this.comebackTimerInterval);
      this.comebackTimerInterval = null;
    }

    const input = document.getElementById('input-imposter-guess');
    const guess = input ? input.value.trim() : '';
    const target = this.secretWord || '';

    // Nếu người chơi bấm xác nhận nhưng chưa gõ từ khóa: cảnh báo để tránh bị trừ 10 điểm oan
    if (!isGiveup && !guess) {
      this.showToast('⚠️ Vui lòng nhập từ khóa bạn muốn đoán, hoặc nhấn "Không đoán từ" để bảo toàn điểm!');
      if (input) input.focus();
      return;
    }

    this.imposterGuessText = isGiveup ? (isTimeout ? ('Hết 30s suy nghĩ') : '') : guess;

    const norm = str => str.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/[^a-z0-9]/g, '');

    const normTarget = norm(target);
    const normGuess = norm(guess);

    // Chuẩn hóa loại bỏ từ chỉ lượng/loại từ tiếng Việt (con, cây, cái, chiếc)
    const cleanClassifier = s => s.replace(/^(con|cây|cái|chiếc|món|quà|bộ)\s+/i, '').trim();
    const coreTarget = cleanClassifier(target);
    const coreGuess = cleanClassifier(guess);
    const normCoreTarget = norm(coreTarget);
    const normCoreGuess = norm(coreGuess);

    const isMatch = !isGiveup && normGuess.length > 0 && (
      normTarget === normGuess ||
      (normCoreTarget.length > 0 && normCoreTarget === normCoreGuess) ||
      (normCoreTarget.length > 0 && normCoreTarget === normGuess) ||
      (normTarget.length > 0 && normTarget === normCoreGuess)
    );

    if (isMatch) {
      sound.playWinFanfare();
      this.winningTeam = 'evil';
      this.imposterWonByComeback = true;
      this.imposterGuessResult = 'correct';
    } else if (isGiveup) {
      sound.playWinFanfare();
      this.winningTeam = 'good';
      this.imposterWonByComeback = false;
      this.imposterGuessResult = 'skipped';
    } else {
      sound.playWinFanfare();
      this.winningTeam = 'good';
      this.imposterWonByComeback = false;
      this.imposterGuessResult = 'wrong';
    }

    this.showResultsScreen(this.caughtImposter || this.players.find(p => p.isImposter));
  }

  saveMatchToHistory() {
    const record = {
      date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      category: this.categoryData.name_vi,
      keyword: this.secretWord,
      winner: this.winningTeam,
      playersCount: this.players.length,
      imposters: this.players.filter(p => p.isImposter).map(p => p.name).join(', ')
    };
    this.history.unshift(record);
    if (this.history.length > 20) this.history.pop();
    localStorage.setItem('gti_history', JSON.stringify(this.history));
  }

  renderHistoryScreen() {
    const container = document.getElementById('history-items-container');
    if (!container) return;
    container.innerHTML = '';

    if (this.history.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; color: var(--text-muted); padding: 40px 0; font-size: 13px;">
          ${'Chưa có lịch sử ván đấu nào.'}
        </div>
      `;
      return;
    }

    this.history.forEach(item => {
      const row = document.createElement('div');
      row.className = 'setting-item-row';
      row.style.cursor = 'default';
      const winText = item.winner === 'good' ? ('Phe Dân thắng')
        : item.winner === 'jester' ? ('Kẻ Ngu thắng')
          : ('Imposter thắng');
      const winColor = item.winner === 'good' ? 'var(--team-good)' : 'var(--primary-red)';

      row.innerHTML = `
        <div>
          <div style="font-family: var(--font-display); font-weight: 700; font-size: 14px;">
            ${item.category} • <span style="color: ${winColor};">${winText}</span>
          </div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">
            ${item.date} • ${item.playersCount} ${'người'} • Imposter: ${item.imposters}
          </div>
        </div>
        <span class="setting-badge-val" style="color: var(--text-primary);">${item.keyword}</span>
      `;
      container.appendChild(row);
    });
  }

  openSpecialAbilityToolbox() {
    const modal = document.getElementById('modal-toolbox');
    const content = document.getElementById('toolbox-content');
    content.innerHTML = '';

    if (!this.roundUsedAbilities) this.roundUsedAbilities = new Set();
    if (!this.doctorShieldedPlayerIds) this.doctorShieldedPlayerIds = new Set();

    const alivePlayers = this.players.filter(p => !p.isEliminated);

    const renderEmptyState = () => {
      content.innerHTML = `
        <div style="text-align: center; color: var(--text-muted); padding: 28px 16px; font-size: 13px;">
          <div style="font-size: 34px; margin-bottom: 8px;">✨</div>
          <strong style="color: var(--text-primary); font-size: 14px;">${'Đã hoàn tất kỹ năng vai trò'}</strong>
          <p style="margin-top: 6px; font-size: 12px; color: var(--text-muted);">
            ${'Tất cả vai trò bí mật đã sử dụng kỹ năng trong vòng này hoặc không có vai trò kích hoạt.'}
          </p>
        </div>
      `;
    };

    const dismissCard = (cardEl) => {
      cardEl.classList.add('toolbox-card-dismiss');
      setTimeout(() => {
        cardEl.remove();
        const remainingCards = content.querySelectorAll('.setting-item-row:not(.toolbox-card-dismiss)');
        if (remainingCards.length === 0) {
          renderEmptyState();
        }
      }, 360);
    };

    // 1. GIÁN ĐIỆP (Spy) - Xem từ của Imposter
    const aliveSpies = alivePlayers.filter(p => p.role.id === 'spy');
    const availableSpies = aliveSpies.filter(s => !this.roundUsedAbilities.has(s.id));
    availableSpies.forEach((spy, idx) => {
      const item = document.createElement('div');
      item.className = 'setting-item-row';
      item.dataset.playerId = spy.id;

      const titleNum = aliveSpies.length > 1 ? `#${idx + 1} ` : '';
      const spyWord = this.imposterWord || 'Từ đồng nghĩa trong cặp';

      item.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 24px;">🕵️</span>
            <div>
              <strong>${`Gián Điệp ${titleNum}(${spy.name})`}</strong>
              <p style="font-size: 11px; color: #8b5cf6; margin: 0;">${'Xem lại từ đồng nghĩa trong cặp'}</p>
            </div>
          </div>
          <button id="btn-spy-${spy.id}" class="ctrl-btn" style="background: var(--bg-surface-elevated); border: 1px solid var(--border-medium); color: var(--text-primary); min-width: 88px;">
            ${'Xem từ'}
          </button>
        </div>
      `;
      content.appendChild(item);

      item.querySelector(`#btn-spy-${spy.id}`).addEventListener('click', () => {
        this.roundUsedAbilities.add(spy.id);

        this.showActionNotice({
          icon: '🕵️',
          title: 'TỪ ĐỒNG NGHĨA TRONG CẶP',
          targetName: spy.name,
          type: 'neutral',
          heading: `🕵️ TỪ ĐỒNG NGHĨA: "${spyWord}"`,
          message: `Từ đồng nghĩa trong cặp nhận được cho Gián Điệp <strong>${spy.name}</strong>:<br><strong>"${spyWord}"</strong><br>Chủ đề: <em>${this.categoryData.name_vi}</em>`,
          note: 'Hãy khéo léo hòa nhập để không bị phát hiện và sống sót đến cuối ván!'
        });
        dismissCard(item);
      });
    });

    if (content.children.length === 0) {
      renderEmptyState();
    }

    modal.classList.add('open');
  }

  checkGameStatusAfterDeath() {
    const livingImposters = this.players.filter(p => p.isImposter && !p.isEliminated);
    const livingInnocents = this.players.filter(p => !p.isImposter && !p.isEliminated);

    if (livingImposters.length === 0) {
      this.winningTeam = 'good';
      this.showResultsScreen();
      return true;
    }
    if (livingImposters.length >= livingInnocents.length) {
      this.winningTeam = 'evil';
      this.showResultsScreen();
      return true;
    }
    return false;
  }

  openDonateModal() {
    if (typeof sound !== 'undefined') sound.playClick();
    const modal = document.getElementById('modal-donate');
    if (!modal) return;
    modal.classList.add('open');
  }

  updateDonateQr(amount = 0, label = 'Tùy tâm') {
    const qrImg = document.getElementById('donate-qr-img');
    const activeLabel = document.getElementById('donate-active-amount-label');
    if (activeLabel) activeLabel.textContent = label;

    if (!amount || amount === 0) {
      if (qrImg) qrImg.src = 'vietqr_donate.png';
      return;
    }

    // Call VietQR API to get exact raw text, then render via QR server to ensure 0 logos in center!
    const addInfo = 'Ung ho Faker Party';
    const postBody = {
      accountNo: '9964823876',
      accountName: 'VU BAO NGUYEN',
      acqId: 970407,
      amount: amount,
      addInfo: addInfo,
      format: 'text',
      template: 'qr_only'
    };

    fetch('https://api.vietqr.io/v2/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postBody)
    })
      .then(res => res.json())
      .then(data => {
        if (data && data.data && data.data.qrCode) {
          // Render raw string with zero logo
          const cleanUrl = `https://api.qrserver.com/v1/create-qr-code/?size=600x600&margin=20&format=png&data=${encodeURIComponent(data.data.qrCode)}`;
          if (qrImg) qrImg.src = cleanUrl;
        } else {
          if (qrImg) qrImg.src = 'vietqr_donate.png';
        }
      })
      .catch(() => {
        if (qrImg) qrImg.src = 'vietqr_donate.png';
      });
  }

  copyToClipboard(text, successCallback) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        if (successCallback) successCallback();
      }).catch(() => {
        this.fallbackCopyText(text, successCallback);
      });
    } else {
      this.fallbackCopyText(text, successCallback);
    }
  }

  fallbackCopyText(text, successCallback) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      if (successCallback) successCallback();
    } catch (err) {
      this.showToast('Không thể sao chép tự động!', 'error');
    }
    document.body.removeChild(textArea);
  }

  bindEvents() {
    document.getElementById('btn-toggle-lang')?.addEventListener('click', () => this.toggleLanguage());
    document.getElementById('btn-toggle-theme')?.addEventListener('click', () => this.toggleTheme());
    document.getElementById('btn-toggle-sound')?.addEventListener('click', () => {
      sound.setMuted(!sound.muted);
      this.updateSoundSettingsUI();
    });

    // Settings Modal Open/Close & Controls
    document.getElementById('btn-open-settings')?.addEventListener('click', () => {
      this.openSettingsModal();
    });
    document.getElementById('btn-close-settings')?.addEventListener('click', () => {
      document.getElementById('modal-settings')?.classList.remove('open');
    });
    document.getElementById('btn-close-settings-done')?.addEventListener('click', () => {
      document.getElementById('modal-settings')?.classList.remove('open');
    });
    document.getElementById('modal-settings')?.addEventListener('click', (e) => {
      if (e.target.id === 'modal-settings') {
        document.getElementById('modal-settings').classList.remove('open');
      }
    });

    // Theme Selector Buttons in Settings
    document.getElementById('btn-theme-dark')?.addEventListener('click', () => {
      this.setTheme('dark');
    });
    document.getElementById('btn-theme-light')?.addEventListener('click', () => {
      this.setTheme('light');
    });

    // Sound Toggle Button in Settings
    document.getElementById('btn-toggle-sound-switch')?.addEventListener('click', () => {
      sound.setMuted(!sound.muted);
      if (!sound.muted) sound.playToggle();
      this.updateSoundSettingsUI();
    });

    // Volume Slider in Settings
    document.getElementById('slider-sound-volume')?.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      sound.setVolume(val / 100);
      const volVal = document.getElementById('val-sound-volume');
      if (volVal) volVal.textContent = `${val}%`;
      if (sound.muted && val > 0) {
        sound.setMuted(false);
      }
      this.updateSoundSettingsUI();
    });
    document.getElementById('slider-sound-volume')?.addEventListener('change', () => {
      sound.playClick();
    });

    // Haptic Vibration Switch in Settings
    document.getElementById('switch-haptic')?.addEventListener('change', (e) => {
      sound.hapticEnabled = e.target.checked;
      localStorage.setItem('gti_haptic', sound.hapticEnabled ? 'true' : 'false');
      if (sound.hapticEnabled) sound.vibrate(40);
    });

    // Mode Tabs

    document.getElementById('mode-tab-pass')?.addEventListener('click', () => {
      sound.playClick();
      this.gameMode = 'pass';
      document.getElementById('mode-tab-pass').classList.add('active');
      document.getElementById('mode-tab-online')?.classList.remove('active');
      document.getElementById('online-lobby-banner').style.display = 'none';
      document.getElementById('online-coming-soon-bubble')?.classList.remove('show');
    });

    const onlineBtn = document.getElementById('mode-tab-online');
    const bubble = document.getElementById('online-coming-soon-bubble');
    let onlineBubbleTimeout = null;

    onlineBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (typeof sound !== 'undefined') {
        sound.playToggle();
        sound.vibrate(35);
      }

      // Add a subtle tactile wiggle animation
      onlineBtn.classList.remove('shake-subtle');
      void onlineBtn.offsetWidth;
      onlineBtn.classList.add('shake-subtle');

      // Pop the Coming Soon speech bubble
      if (bubble) {
        bubble.classList.remove('show');
        void bubble.offsetWidth;
        bubble.classList.add('show');

        clearTimeout(onlineBubbleTimeout);
        onlineBubbleTimeout = setTimeout(() => {
          bubble.classList.remove('show');
        }, 2500);
      }
    });

    // Dismiss bubble on outside tap
    document.addEventListener('click', (e) => {
      if (bubble && !onlineBtn?.contains(e.target) && !bubble.contains(e.target)) {
        bubble.classList.remove('show');
      }
    });

    document.getElementById('btn-dec-players')?.addEventListener('click', () => {
      if (this.playerCount > 3) {
        sound.playClick();
        this.playerCount--;
        this.autoBalanceRoles(this.playerCount);
        this.renderSettingsValues();
      }
    });
    document.getElementById('btn-inc-players')?.addEventListener('click', () => {
      if (this.playerCount < 20) {
        sound.playClick();
        this.playerCount++;
        this.autoBalanceRoles(this.playerCount);
        this.renderSettingsValues();
      }
    });

    document.getElementById('btn-dec-imposters')?.addEventListener('click', () => {
      if (this.imposterCount > 1) {
        sound.playClick();
        this.imposterCount--;
        const imp = this.roles.find(r => r.id === 'imposter');
        if (imp) imp.count = this.imposterCount;
        this.updateBalanceMeter();
        this.renderSettingsValues();
      }
    });
    document.getElementById('btn-inc-imposters')?.addEventListener('click', () => {
      if (this.imposterCount < Math.floor(this.playerCount / 2)) {
        sound.playClick();
        this.imposterCount++;
        const imp = this.roles.find(r => r.id === 'imposter');
        if (imp) imp.count = this.imposterCount;
        this.updateBalanceMeter();
        this.renderSettingsValues();
      }
    });

    const matchTimes = [60, 120, 180, 240, 300, 480, 600, 0];
    document.getElementById('btn-dec-time')?.addEventListener('click', () => {
      sound.playClick();
      const current = this.durationSeconds;
      const idx = matchTimes.indexOf(current);
      if (idx > 0) {
        this.durationSeconds = matchTimes[idx - 1];
        localStorage.setItem('gti_discussion_time', this.durationSeconds);
        this.renderSettingsValues();
      }
    });
    document.getElementById('btn-inc-time')?.addEventListener('click', () => {
      sound.playClick();
      const current = this.durationSeconds;
      const idx = matchTimes.indexOf(current);
      if (idx >= 0 && idx < matchTimes.length - 1) {
        this.durationSeconds = matchTimes[idx + 1];
        localStorage.setItem('gti_discussion_time', this.durationSeconds);
        this.renderSettingsValues();
      }
    });

    const speechTimes = [0, 15, 30, 45, 60, 90];
    document.getElementById('btn-dec-speech-time')?.addEventListener('click', () => {
      sound.playClick();
      const current = this.speechDurationSeconds;
      const idx = speechTimes.indexOf(current);
      if (idx > 0) {
        this.speechDurationSeconds = speechTimes[idx - 1];
        localStorage.setItem('gti_speech_time', this.speechDurationSeconds);
        this.renderSettingsValues();
      }
    });
    document.getElementById('btn-inc-speech-time')?.addEventListener('click', () => {
      sound.playClick();
      const current = this.speechDurationSeconds;
      const idx = speechTimes.indexOf(current);
      if (idx >= 0 && idx < speechTimes.length - 1) {
        this.speechDurationSeconds = speechTimes[idx + 1];
        localStorage.setItem('gti_speech_time', this.speechDurationSeconds);
        this.renderSettingsValues();
      }
    });

    document.getElementById('switch-roulette')?.addEventListener('change', (e) => {
      sound.playToggle();
      this.rouletteEnabled = e.target.checked;
      localStorage.setItem('gti_roulette', this.rouletteEnabled);
    });

    document.getElementById('switch-night-phase')?.addEventListener('change', (e) => {
      sound.playToggle();
      this.nightPhaseEnabled = e.target.checked;
      localStorage.setItem('gti_night_phase', this.nightPhaseEnabled ? 'true' : 'false');
      const modalSwitch = document.getElementById('switch-night-phase-modal');
      if (modalSwitch) modalSwitch.checked = this.nightPhaseEnabled;
    });

    document.getElementById('switch-night-phase-modal')?.addEventListener('change', (e) => {
      sound.playToggle();
      this.nightPhaseEnabled = e.target.checked;
      localStorage.setItem('gti_night_phase', this.nightPhaseEnabled ? 'true' : 'false');
      const setupSwitch = document.getElementById('switch-night-phase');
      if (setupSwitch) setupSwitch.checked = this.nightPhaseEnabled;
    });


    document.getElementById('switch-hints')?.addEventListener('change', (e) => {
      sound.playToggle();
      this.hintsEnabled = e.target.checked;
    });

    document.getElementById('btn-start-game')?.addEventListener('click', () => {
      this.generatePlayerInputs();
      this.switchScreen('screen-players');
    });

    document.getElementById('btn-open-roles')?.addEventListener('click', () => {
      this.renderRolesList();
      this.switchScreen('screen-roles');
    });
    document.getElementById('btn-back-to-setup')?.addEventListener('click', () => {
      this.switchScreen('screen-setup');
    });
    document.getElementById('btn-save-roles-done')?.addEventListener('click', () => {
      this.renderSettingsValues();
      this.switchScreen('screen-setup');
    });

    document.getElementById('btn-auto-balance')?.addEventListener('click', () => {
      sound.playWinFanfare();
      this.autoBalanceRoles(this.playerCount);
      this.renderRolesList();
    });

    document.getElementById('btn-enable-all-roles')?.addEventListener('click', () => {
      this.enableAllRolesInPool();
    });

    document.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        sound.playClick();
        document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.renderRolesList(chip.dataset.filter);
      });
    });

    document.getElementById('btn-back-from-players')?.addEventListener('click', () => {
      this.switchScreen('screen-setup');
    });
    document.getElementById('btn-pick-roster')?.addEventListener('click', () => {
      this.openRosterPicker();
    });
    document.getElementById('btn-add-player')?.addEventListener('click', () => {
      this.addPlayer();
    });
    document.getElementById('btn-confirm-players')?.addEventListener('click', () => {
      sound.playClick();
      this.startMatchSession();
    });

    document.getElementById('btn-curtain-ready')?.addEventListener('click', () => {
      sound.playClick();
      document.getElementById('reveal-curtain-box').style.display = 'none';
      document.getElementById('reveal-card-viewport').style.display = 'block';
    });

    document.getElementById('flip-card-inner')?.addEventListener('click', (e) => {
      // Nếu bấm trúng nút Đã nhớ, giấu vai trò thì để listener của nút xử lý
      if (e.target.closest('#btn-hide-role')) return;

      if (!this.isCardFlipped) {
        this.flipCardOpen();
      } else {
        // Người chơi chạm vào thẻ để úp lại -> giấu vai trò an toàn và chuyển sang màn che người tiếp theo (tránh lộ)
        this.hideRoleAndAdvance();
      }
    });

    document.getElementById('btn-hide-role')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.hideRoleAndAdvance();
    });

    // Roulette Screen Events
    document.getElementById('btn-spin-wheel')?.addEventListener('click', () => {
      this.spinRouletteWheel();
    });
    document.getElementById('roulette-canvas')?.addEventListener('click', () => {
      this.spinRouletteWheel();
    });
    document.getElementById('btn-spin-again')?.addEventListener('click', () => {
      this.spinRouletteWheel();
    });
    document.getElementById('btn-skip-roulette')?.addEventListener('click', () => {
      sound.playClick();
      if (!this.currentSpeakerIndex || this.players[this.currentSpeakerIndex]?.isEliminated) {
        const living = this.players.filter(p => !p.isEliminated);
        const pick = living[Math.floor(Math.random() * (living.length || 1))];
        this.currentSpeakerIndex = pick ? this.players.indexOf(pick) : 0;
      }
      this.prepareRoundStart();
    });
    document.getElementById('btn-roulette-proceed')?.addEventListener('click', () => {
      sound.playClick();
      this.prepareRoundStart();
    });

    // Screen Night Phase Events
    document.getElementById('btn-open-night-action')?.addEventListener('click', () => {
      sound.playClick();
      const curtain = document.getElementById('night-curtain-box');
      const viewport = document.getElementById('night-action-viewport');
      if (curtain) curtain.style.display = 'none';
      if (viewport) viewport.style.display = 'flex';
    });

    document.getElementById('btn-night-done')?.addEventListener('click', () => {
      sound.playClick();
      this.currentNightIndex++;
      this.showNightStep(this.currentNightIndex);
    });

    document.getElementById('btn-dawn-proceed')?.addEventListener('click', () => {
      sound.playWinFanfare();
      this.startDiscussionStage();
    });

    document.getElementById('btn-skip-night-phase')?.addEventListener('click', () => {
      sound.playClick();
      this.startDiscussionStage();
    });

    // Discussion Next Speaker Event
    document.getElementById('btn-next-speaker')?.addEventListener('click', () => {
      this.nextSpeaker();
    });

    document.getElementById('btn-pause-resume')?.addEventListener('click', () => {
      sound.playClick();
      this.isPaused = !this.isPaused;
      const icon = document.getElementById('pause-icon');
      const text = document.getElementById('pause-text');
      if (this.isPaused) {
        icon.textContent = '▶️';
        text.textContent = 'Tiếp tục';
      } else {
        icon.textContent = '⏸️';
        text.textContent = 'Tạm dừng';
      }
    });

    document.getElementById('btn-add-30s')?.addEventListener('click', () => {
      sound.playClick();
      this.timerRemaining += 30;
      this.timerTotal += 30;
      this.updateTimerDisplay();
    });

    document.getElementById('btn-go-to-vote')?.addEventListener('click', () => {
      this.startVotingStage();
    });

    document.getElementById('btn-back-to-timer')?.addEventListener('click', () => {
      this.switchScreen('screen-discussion');
    });
    document.getElementById('btn-submit-vote')?.addEventListener('click', () => {
      this.submitVotingOutcome();
    });

    document.getElementById('btn-play-again')?.addEventListener('click', () => {
      sound.playClick();
      this.startMatchSession();
    });
    document.getElementById('btn-discard-round-score')?.addEventListener('click', () => {
      this.discardCurrentMatchScores();
    });
    document.getElementById('btn-change-roles')?.addEventListener('click', () => {
      this.switchScreen('screen-roles');
    });
    document.getElementById('btn-back-to-home')?.addEventListener('click', () => {
      this.switchScreen('screen-setup');
    });
    document.getElementById('btn-check-guess')?.addEventListener('click', () => {
      this.checkImposterComebackGuess(false);
    });
    document.getElementById('btn-giveup-guess')?.addEventListener('click', () => {
      this.checkImposterComebackGuess(true);
    });

    document.getElementById('btn-history-back')?.addEventListener('click', () => {
      this.switchScreen('screen-setup');
    });
    document.getElementById('btn-clear-history')?.addEventListener('click', () => {
      sound.playClick();
      this.history = [];
      localStorage.removeItem('gti_history');
      this.renderHistoryScreen();
    });

    document.getElementById('btn-open-categories')?.addEventListener('click', () => {
      sound.playClick();
      this.openCategoriesPicker();
    });
    document.getElementById('btn-close-categories')?.addEventListener('click', () => {
      document.getElementById('modal-categories').classList.remove('open');
    });

    document.getElementById('btn-open-custom-role')?.addEventListener('click', () => {
      sound.playClick();
      document.getElementById('modal-custom-role').classList.add('open');
    });
    document.getElementById('btn-close-custom-role')?.addEventListener('click', () => {
      document.getElementById('modal-custom-role').classList.remove('open');
    });
    document.getElementById('form-custom-role')?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.saveCustomRole();
    });

    document.getElementById('btn-open-ability-toolbox')?.addEventListener('click', () => {
      sound.playClick();
      this.openSpecialAbilityToolbox();
    });
    document.getElementById('btn-close-toolbox')?.addEventListener('click', () => {
      document.getElementById('modal-toolbox').classList.remove('open');
    });

    // Leaderboard Modal Events
    document.getElementById('btn-open-leaderboard')?.addEventListener('click', () => {
      sound.playClick();
      this.renderCumulativeLeaderboard();
      document.getElementById('modal-leaderboard').classList.add('open');
    });
    document.getElementById('btn-close-leaderboard')?.addEventListener('click', () => {
      document.getElementById('modal-leaderboard').classList.remove('open');
    });
    document.getElementById('btn-reset-scores')?.addEventListener('click', () => {
      this.resetAllScores();
    });
    document.getElementById('btn-reset-scores-screen')?.addEventListener('click', () => {
      this.resetAllScores();
    });
    document.getElementById('btn-setup-reset-scores')?.addEventListener('click', () => {
      this.resetAllScores();
    });

    // In-App Confirm Reset Modal Listeners
    document.getElementById('btn-cancel-reset')?.addEventListener('click', () => {
      if (typeof sound !== 'undefined') sound.playClick();
      document.getElementById('modal-confirm-reset')?.classList.remove('open');
    });
    document.getElementById('btn-confirm-reset-action')?.addEventListener('click', () => {
      this.executeResetAllScores();
    });
    document.getElementById('modal-confirm-reset')?.addEventListener('click', (e) => {
      if (e.target.id === 'modal-confirm-reset') {
        document.getElementById('modal-confirm-reset').classList.remove('open');
      }
    });

    document.getElementById('btn-setup-view-leaderboard')?.addEventListener('click', () => {
      if (typeof sound !== 'undefined') sound.playClick();
      this.renderCumulativeLeaderboard();
      document.getElementById('modal-leaderboard')?.classList.add('open');
    });

    // Roster Picker Modal Events
    document.getElementById('btn-close-roster-picker')?.addEventListener('click', () => {
      document.getElementById('modal-roster-picker')?.classList.remove('open');
    });
    document.getElementById('btn-cancel-roster-picker')?.addEventListener('click', () => {
      document.getElementById('modal-roster-picker')?.classList.remove('open');
    });
    document.getElementById('btn-confirm-roster-picker')?.addEventListener('click', () => {
      this.applySelectedRoster();
    });
    document.getElementById('btn-roster-select-all')?.addEventListener('click', () => {
      const items = document.querySelectorAll('#roster-picker-items-list .roster-picker-item');
      if (!this.selectedRosterNames) this.selectedRosterNames = new Set();
      items.forEach(it => {
        const p = it.dataset.player;
        if (p && this.selectedRosterNames.size < 20) {
          this.selectedRosterNames.add(p);
          it.classList.add('selected');
          const cb = it.querySelector('.roster-checkbox');
          if (cb) cb.textContent = '✓';
        }
      });
      const counter = document.getElementById('label-roster-selected-count');
      if (counter) {
        counter.textContent = `Đã chọn: ${this.selectedRosterNames.size} người chơi`;
      }
    });
    document.getElementById('btn-roster-deselect-all')?.addEventListener('click', () => {
      if (this.selectedRosterNames) this.selectedRosterNames.clear();
      const items = document.querySelectorAll('#roster-picker-items-list .roster-picker-item');
      items.forEach(it => {
        it.classList.remove('selected');
        const cb = it.querySelector('.roster-checkbox');
        if (cb) cb.textContent = '';
      });
      const counter = document.getElementById('label-roster-selected-count');
      if (counter) {
        counter.textContent = `Đã chọn: 0 người chơi`;
      }
    });
    document.getElementById('modal-roster-picker')?.addEventListener('click', (e) => {
      if (e.target.id === 'modal-roster-picker') {
        document.getElementById('modal-roster-picker').classList.remove('open');
      }
    });

    // Rename Player Modal Events
    document.getElementById('btn-close-rename-player')?.addEventListener('click', () => {
      document.getElementById('modal-rename-player')?.classList.remove('open');
    });
    document.getElementById('btn-cancel-rename-player')?.addEventListener('click', () => {
      document.getElementById('modal-rename-player')?.classList.remove('open');
    });
    document.getElementById('btn-save-rename-player')?.addEventListener('click', () => {
      this.saveRenamedPlayer();
    });
    document.getElementById('input-rename-player-name')?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.saveRenamedPlayer();
      }
    });
    document.getElementById('modal-rename-player')?.addEventListener('click', (e) => {
      if (e.target.id === 'modal-rename-player') {
        document.getElementById('modal-rename-player').classList.remove('open');
      }
    });

    // Scoreboard Tabs on Screen 7
    document.getElementById('btn-tab-round-scores')?.addEventListener('click', () => {
      sound.playClick();
      this.currentScoreboardTab = 'round';
      document.getElementById('btn-tab-round-scores')?.classList.add('active');
      document.getElementById('btn-tab-cumulative-scores')?.classList.remove('active');
      this.renderResultsScoreboard();
    });
    document.getElementById('btn-tab-cumulative-scores')?.addEventListener('click', () => {
      sound.playClick();
      this.currentScoreboardTab = 'cumulative';
      document.getElementById('btn-tab-cumulative-scores')?.classList.add('active');
      document.getElementById('btn-tab-round-scores')?.classList.remove('active');
      this.renderResultsScoreboard();
    });

    // Topic Options Events (Specific Context vs Random All)
    document.getElementById('opt-topic-specific')?.addEventListener('click', () => {
      this.setTopicMode('specific');
    });
    document.getElementById('opt-topic-random')?.addEventListener('click', () => {
      this.setTopicMode('random');
    });
    document.getElementById('btn-change-specific-topic')?.addEventListener('click', (e) => {
      e.stopPropagation();
      sound.playClick();
      this.openCategoriesPicker();
    });

    // Multi-Round Voting Actions
    document.getElementById('btn-skip-vote')?.addEventListener('click', () => {
      this.skipVotingRound();
    });
    document.getElementById('btn-next-round-continue')?.addEventListener('click', () => {
      sound.playClick();

      // Apply pending wrong vote penalties if this intermission was for an innocent civilian
      if (!this.lastIntermissionWasImposter) {
        if (this.pendingWrongVotePenaltyMode === 'custom') {
          this.players.filter(p => !p.isEliminated).forEach(p => {
            if (this.pendingCustomPenalizedPlayerIds && this.pendingCustomPenalizedPlayerIds.has(p.id)) {
              p.penalty = (p.penalty || 0) + 5;
            }
          });
        } else {
          // Mặc định trách nhiệm tập thể: Tất cả người chơi còn sống cùng chịu phạt vì vote theo số đông
          this.players.filter(p => !p.isEliminated).forEach(p => {
            p.penalty = (p.penalty || 0) + 5;
          });
        }
      }

      document.getElementById('modal-round-intermission')?.classList.remove('open');
      this.roundNumber++;
      this.prepareRoundStart();
    });

    // Donate Modal Events
    document.getElementById('btn-open-donate')?.addEventListener('click', () => {
      this.openDonateModal();
    });
    document.getElementById('btn-close-donate')?.addEventListener('click', () => {
      document.getElementById('modal-donate')?.classList.remove('open');
    });
    document.getElementById('modal-donate')?.addEventListener('click', (e) => {
      if (e.target.id === 'modal-donate') {
        document.getElementById('modal-donate').classList.remove('open');
      }
    });

    // Copy STK
    document.getElementById('btn-copy-donate-stk')?.addEventListener('click', () => {
      if (typeof sound !== 'undefined') sound.playClick();
      this.copyToClipboard('9964823876', () => {
        const btn = document.getElementById('btn-copy-donate-stk');
        const icon = document.getElementById('copy-stk-icon');
        const text = document.getElementById('copy-stk-text');
        if (btn) btn.classList.add('copied');
        if (icon) icon.textContent = '✓';
        if (text) text.textContent = 'Đã chép!';
        this.showToast('📋 Đã sao chép STK Techcombank: 9964823876', 'success');
        setTimeout(() => {
          if (btn) btn.classList.remove('copied');
          if (icon) icon.textContent = '📋';
          if (text) text.textContent = 'Sao chép STK';
        }, 2500);
      });
    });

    // Copy Memo
    document.getElementById('btn-copy-donate-memo')?.addEventListener('click', () => {
      if (typeof sound !== 'undefined') sound.playClick();
      this.copyToClipboard('Faker Party', () => {
        const btn = document.getElementById('btn-copy-donate-memo');
        const icon = document.getElementById('copy-memo-icon');
        const text = document.getElementById('copy-memo-text');
        if (btn) btn.classList.add('copied');
        if (icon) icon.textContent = '✓';
        if (text) text.textContent = 'Đã chép!';
        this.showToast('📋 Đã sao chép nội dung: Faker Party', 'success');
        setTimeout(() => {
          if (btn) btn.classList.remove('copied');
          if (icon) icon.textContent = '📋';
          if (text) text.textContent = 'Sao chép';
        }, 2500);
      });
    });

    // Amount Selection Chips
    const amountChips = document.querySelectorAll('.amount-chip');
    amountChips.forEach(chip => {
      chip.addEventListener('click', () => {
        if (typeof sound !== 'undefined') sound.playClick();
        amountChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const amount = parseInt(chip.getAttribute('data-amount') || '0', 10);
        const label = chip.textContent.trim();
        this.updateDonateQr(amount, label);
      });
    });

    // Group Split Button (Quick)
    document.getElementById('btn-apply-group-split')?.addEventListener('click', () => {
      if (typeof sound !== 'undefined') sound.playClick();
      const players = this.playerCount || 6;
      const splitTotal = players * 10000;
      amountChips.forEach(c => c.classList.remove('active'));
      this.updateDonateQr(splitTotal, `Nhóm ${players} người (${splitTotal.toLocaleString('vi-VN')}đ)`);
      this.showToast(`🎯 Đã tạo QR ủng hộ nhóm: ${splitTotal.toLocaleString('vi-VN')}đ`, 'success');
    });



    // Deep Rules Modal Events
    document.getElementById('btn-open-rules')?.addEventListener('click', () => {
      sound.playClick();
      document.getElementById('modal-deep-rules')?.classList.add('open');
    });
    document.getElementById('btn-close-rules')?.addEventListener('click', () => {
      document.getElementById('modal-deep-rules')?.classList.remove('open');
    });

    // Custom Word Pairs & Topic Management Modal Events
    document.getElementById('btn-open-word-pairs')?.addEventListener('click', () => {
      this.openWordPairsModal();
    });
    document.getElementById('btn-setup-add-word-pair')?.addEventListener('click', () => {
      this.openWordPairsModal();
    });
    document.getElementById('btn-modal-open-word-pairs')?.addEventListener('click', () => {
      document.getElementById('modal-categories')?.classList.remove('open');
      this.openWordPairsModal();
    });
    document.getElementById('btn-close-word-pairs')?.addEventListener('click', () => {
      document.getElementById('modal-word-pairs')?.classList.remove('open');
    });

    // Tab switching in Word Pairs modal
    document.getElementById('tab-btn-pairs')?.addEventListener('click', () => {
      this.switchWordPairsTab('pairs');
    });
    document.getElementById('tab-btn-categories')?.addEventListener('click', () => {
      this.switchWordPairsTab('categories');
    });

    // Quick create category from Word Pair form
    document.getElementById('btn-quick-create-cat')?.addEventListener('click', () => {
      this.switchWordPairsTab('categories');
      document.getElementById('cat-name-input')?.focus();
    });

    // Word Pair Form Submit (Add or Edit)
    document.getElementById('form-add-word-pair')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const civ = document.getElementById('wp-civilian')?.value;
      const imp = document.getElementById('wp-imposter')?.value;
      const catId = document.getElementById('wp-category-select')?.value;
      const editId = document.getElementById('wp-editing-id')?.value;
      if (editId) {
        this.updateCustomWordPair(editId, civ, imp, catId);
      } else {
        this.addCustomWordPair(civ, imp, catId);
      }
    });

    // Cancel Edit Word Pair
    document.getElementById('btn-cancel-edit-wp')?.addEventListener('click', () => {
      this.cancelEditWordPair();
    });

    // Search and Filter Word Pairs
    document.getElementById('wp-search-input')?.addEventListener('input', (e) => {
      this.searchWordPairKeyword = e.target.value.trim().toLowerCase();
      this.renderCustomWordPairsList();
    });
    document.getElementById('wp-filter-category')?.addEventListener('change', (e) => {
      this.filterWordPairCategory = e.target.value;
      this.renderCustomWordPairsList();
    });

    // Clear word pairs
    document.getElementById('btn-clear-custom-pairs')?.addEventListener('click', () => {
      this.clearAllCustomWordPairs();
    });

    // Category Form Submit (Add or Edit)
    document.getElementById('form-add-category')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('cat-name-input')?.value;
      const icon = document.getElementById('cat-icon-input')?.value;
      const editId = document.getElementById('cat-editing-id')?.value;
      if (editId) {
        this.updateCustomCategory(editId, name, icon);
      } else {
        this.addCustomCategory(name, icon);
      }
    });

    // Cancel Edit Category
    document.getElementById('btn-cancel-edit-cat')?.addEventListener('click', () => {
      this.cancelEditCategory();
    });

    // Quick emoji chips
    document.querySelectorAll('.cat-emoji-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const emoji = chip.dataset.emoji;
        const iconInput = document.getElementById('cat-icon-input');
        if (iconInput && emoji) {
          iconInput.value = emoji;
          if (typeof sound !== 'undefined') sound.playClick();
        }
      });
    });

    // Fixed Roles Modal Events
    document.getElementById('btn-open-fixed-roles-modal')?.addEventListener('click', () => {
      this.openFixedRolesModal();
    });
    document.getElementById('btn-screen-roles-open-fixed')?.addEventListener('click', () => {
      this.openFixedRolesModal();
    });
    document.getElementById('btn-close-fixed-roles')?.addEventListener('click', () => {
      document.getElementById('modal-fixed-roles')?.classList.remove('open');
    });
    document.getElementById('btn-save-fixed-roles')?.addEventListener('click', () => {
      this.confirmFixedRolesModal();
    });
  }

  // ==========================================================
  // [SEC 04.4] FIXED ROLES MANAGEMENT (Vai trò cố định kèm số lượng)
  // ==========================================================
  syncFixedRolesWithDeck() {
    const maxSpecial = this.getMaxSpecialAllowed();
    let total = this.getTotalFixedCount();

    // If total exceeds max special slots, automatically trim
    while (total > maxSpecial && Object.keys(this.fixedRoles).length > 0) {
      const keys = Object.keys(this.fixedRoles);
      const lastKey = keys[keys.length - 1];
      if (this.fixedRoles[lastKey] > 1) {
        this.fixedRoles[lastKey]--;
      } else {
        delete this.fixedRoles[lastKey];
      }
      total = this.getTotalFixedCount();
    }
    localStorage.setItem('gti_fixed_roles', JSON.stringify(this.fixedRoles));

    this.roles.forEach(r => {
      if (r.id === 'civilian') {
        r.enabled = true;
        r.count = Math.max(1, this.playerCount - this.imposterCount - total);
      } else if (r.id === 'imposter') {
        r.enabled = true;
        r.count = this.imposterCount;
      } else {
        const fixedCount = this.fixedRoles[r.id] || 0;
        if (fixedCount > 0) {
          r.enabled = true;
          r.count = fixedCount;
        }
      }
    });

    this.updateBalanceMeter();
  }

  saveFixedRoles() {
    localStorage.setItem('gti_fixed_roles', JSON.stringify(this.fixedRoles));
  }

  setFixedRoleCount(roleId, count) {
    if (count <= 0) {
      delete this.fixedRoles[roleId];
    } else {
      this.fixedRoles[roleId] = count;
      const r = this.roles.find(x => x.id === roleId);
      if (r) {
        r.enabled = true;
        r.count = count;
      }
    }
    localStorage.setItem('gti_fixed_roles', JSON.stringify(this.fixedRoles));
    this.syncFixedRolesWithDeck();
    this.renderFixedRolesChips();
    this.renderSettingsValues();
    if (document.getElementById('screen-roles')?.classList.contains('active')) {
      this.renderRolesList(this.currentRoleFilter || 'all');
    }
  }

  renderFixedRolesChips() {
    const container1 = document.getElementById('fixed-roles-chips-list');
    const container2 = document.getElementById('screen-roles-fixed-chips');
    const labelSlots1 = document.getElementById('label-fixed-roles-slots');
    const labelSlots2 = document.getElementById('label-screen-roles-fixed-slots');
    const filterFixedCountEl = document.getElementById('filter-fixed-count');

    const totalFixed = this.getTotalFixedCount();
    const maxSpecial = this.getMaxSpecialAllowed();
    const civLeft = Math.max(1, this.playerCount - this.imposterCount - totalFixed);
    const activeEntries = Object.entries(this.fixedRoles || {}).filter(([_, count]) => count > 0);

    if (filterFixedCountEl) {
      filterFixedCountEl.textContent = activeEntries.length;
    }

    const summaryText = totalFixed > 0
      ? `Đang cố định: ${totalFixed} / ${maxSpecial} slot (${activeEntries.length} vai trò • Còn ${civLeft} Dân)`
      : `Chưa cố định vai trò nào (Còn ${civLeft} Dân Thường)`;

    if (labelSlots1) labelSlots1.textContent = totalFixed > 0 ? summaryText : 'Chắc chắn xuất hiện trong ván đấu';
    if (labelSlots2) labelSlots2.textContent = summaryText;

    const previewEl = document.getElementById('label-roles-preview');
    if (previewEl) {
      const roleCount = this.roles.length;
      if (totalFixed > 0) {
        const names = activeEntries
          .map(([id]) => this.roles.find(r => r.id === id)?.name_vi)
          .filter(Boolean);
        previewEl.innerHTML = `${roleCount} vai trò • <strong style="color: #10b981;">📌 ${totalFixed} cố định (${names.slice(0, 2).join(', ')}${names.length > 2 ? '...' : ''})</strong>`;
      } else {
        previewEl.textContent = `${roleCount} vai trò cốt lõi & tự tạo`;
      }
    }

    [container1, container2].forEach(container => {
      if (!container) return;
      container.innerHTML = '';

      if (activeEntries.length === 0) {
        container.innerHTML = `
          <div class="fixed-roles-empty-hint">
            Chưa chọn vai trò cố định (toàn bộ phe Dân là Dân Thường). Bấm <strong>➕ Thêm vai trò</strong> để chọn.
          </div>
        `;
        return;
      }

      activeEntries.forEach(([roleId, count]) => {
        const r = this.roles.find(x => x.id === roleId);
        if (!r) return;

        const item = document.createElement('div');
        item.className = 'fixed-role-badge-item';
        item.style.borderLeft = `3px solid ${r.color}`;

        const teamLabel = r.team === 'good' ? 'Phe Dân' : r.team === 'evil' ? 'Phe Ác' : 'Trung Lập';

        item.innerHTML = `
          <div class="fixed-role-badge-info">
            <span class="fixed-role-badge-icon" style="color: ${r.color}; background: ${r.color}15;">${r.icon}</span>
            <div class="fixed-role-badge-meta">
              <span class="fixed-role-badge-name">${r.name_vi}</span>
              <span class="team-tag ${r.team}" style="font-size: 9px; padding: 1px 5px;">${teamLabel}</span>
            </div>
          </div>
          <div class="fixed-role-stepper-control">
            <button type="button" class="stepper-btn btn-fixed-dec" data-role-id="${r.id}" title="Giảm số lượng">-</button>
            <span class="stepper-val fixed-count-val">${count}</span>
            <button type="button" class="stepper-btn btn-fixed-inc" data-role-id="${r.id}" title="Tăng số lượng">+</button>
            <button type="button" class="btn-remove-fixed" data-role-id="${r.id}" title="Gỡ vai trò này">✕</button>
          </div>
        `;

        item.querySelector('.btn-fixed-inc')?.addEventListener('click', (e) => {
          e.stopPropagation();
          const maxSpecial = this.getMaxSpecialAllowed();
          if (this.getTotalFixedCount() >= maxSpecial) {
            this.showToast(`⚠️ Đã hết slot vai trò đặc biệt (${maxSpecial} slot)!`, 'warning');
            return;
          }
          if (count >= (r.maxCount || 3)) {
            this.showToast(`⚠️ Vai trò "${r.name_vi}" tối đa ${r.maxCount || 3} người!`, 'warning');
            return;
          }
          sound.playClick();
          this.setFixedRoleCount(r.id, count + 1);
        });

        item.querySelector('.btn-fixed-dec')?.addEventListener('click', (e) => {
          e.stopPropagation();
          sound.playClick();
          this.setFixedRoleCount(r.id, count - 1);
        });

        item.querySelector('.btn-remove-fixed')?.addEventListener('click', (e) => {
          e.stopPropagation();
          sound.playClick();
          this.setFixedRoleCount(r.id, 0);
        });

        container.appendChild(item);
      });
    });
  }

  removeFixedRole(roleId) {
    if (typeof sound !== 'undefined') sound.playClick();
    this.setFixedRoleCount(roleId, 0);
  }

  openFixedRolesModal() {
    if (typeof sound !== 'undefined') sound.playClick();
    const modal = document.getElementById('modal-fixed-roles');
    const list = document.getElementById('fixed-roles-modal-list');
    const counter = document.getElementById('fixed-roles-slots-counter');
    if (!modal || !list) return;

    list.innerHTML = '';

    const maxSpecial = this.getMaxSpecialAllowed();
    const updateCounterDisplay = () => {
      const currentTotal = this.getTotalFixedCount();
      const civLeft = Math.max(1, this.playerCount - this.imposterCount - currentTotal);
      if (counter) {
        counter.textContent = `Đang chọn: ${currentTotal} / ${maxSpecial} slot vai trò đặc biệt (Còn lại: ${civLeft} Dân Thường, ${this.imposterCount} Imposter)`;
      }
    };
    updateCounterDisplay();

    const selectable = this.roles.filter(r => r.id !== 'civilian' && r.id !== 'imposter');

    selectable.forEach(role => {
      const count = this.fixedRoles[role.id] || 0;
      const item = document.createElement('div');
      item.className = `fixed-role-modal-item ${count > 0 ? 'active' : ''}`;

      const teamLabel = role.team === 'good' ? 'Phe Dân' : role.team === 'evil' ? 'Phe Ác' : 'Trung Lập';

      item.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px; flex: 1; min-width: 0;">
          <div style="font-size: 24px; width: 36px; height: 36px; border-radius: 8px; background: ${role.color}20; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            ${role.icon}
          </div>
          <div style="flex: 1; min-width: 0;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <strong style="color: var(--text-primary); font-size: 13px;">${role.name_vi}</strong>
              <span class="team-tag ${role.team}" style="font-size: 9px; padding: 1px 6px;">${teamLabel}</span>
            </div>
            <div style="font-size: 11px; color: var(--text-muted); line-height: 1.3; margin-top: 2px;">
              ${role.desc_vi || role.ability_vi}
            </div>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 6px; flex-shrink: 0;">
          <div class="fixed-role-stepper-control">
            <button type="button" class="stepper-btn modal-dec-btn" data-role-id="${role.id}">-</button>
            <span class="stepper-val modal-count-val" id="modal-val-${role.id}">${count}</span>
            <button type="button" class="stepper-btn modal-inc-btn" data-role-id="${role.id}">+</button>
          </div>
        </div>
      `;

      const valSpan = item.querySelector(`#modal-val-${role.id}`);
      const decBtn = item.querySelector('.modal-dec-btn');
      const incBtn = item.querySelector('.modal-inc-btn');

      incBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const currentCount = this.fixedRoles[role.id] || 0;
        const maxSpecial = this.getMaxSpecialAllowed();
        if (this.getTotalFixedCount() >= maxSpecial) {
          this.showToast(`⚠️ Đã hết slot vai trò đặc biệt (${maxSpecial} slot)!`, 'warning');
          return;
        }
        if (currentCount >= (role.maxCount || 3)) {
          this.showToast(`⚠️ Vai trò "${role.name_vi}" tối đa ${role.maxCount || 3} người!`, 'warning');
          return;
        }
        sound.playClick();
        const newCount = currentCount + 1;
        this.fixedRoles[role.id] = newCount;
        valSpan.textContent = newCount;
        item.classList.add('active');
        updateCounterDisplay();
      });

      decBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const currentCount = this.fixedRoles[role.id] || 0;
        if (currentCount > 0) {
          sound.playClick();
          const newCount = currentCount - 1;
          if (newCount === 0) {
            delete this.fixedRoles[role.id];
            item.classList.remove('active');
          } else {
            this.fixedRoles[role.id] = newCount;
          }
          valSpan.textContent = newCount;
          updateCounterDisplay();
        }
      });

      list.appendChild(item);
    });

    modal.classList.add('open');
  }

  confirmFixedRolesModal() {
    if (typeof sound !== 'undefined') sound.playWinFanfare();
    localStorage.setItem('gti_fixed_roles', JSON.stringify(this.fixedRoles));
    this.syncFixedRolesWithDeck();
    this.renderFixedRolesChips();
    this.renderSettingsValues();
    if (document.getElementById('screen-roles')?.classList.contains('active')) {
      this.renderRolesList(this.currentRoleFilter || 'all');
    }
    document.getElementById('modal-fixed-roles')?.classList.remove('open');
  }

  // ==========================================================
  // [SEC 04.5] CUSTOM WORD PAIRS & TOPIC MANAGEMENT
  // ==========================================================
  migrateCustomWordPairs() {
    let changed = false;
    const allCats = this.getAllCategories();
    this.customWordPairs.forEach(wp => {
      if (!wp.categoryId) {
        const matched = allCats.find(c => c.name_vi.toLowerCase() === (wp.category || '').toLowerCase());
        if (matched) {
          wp.categoryId = matched.id;
          wp.categoryName = matched.name_vi;
        } else {
          const defaultCustom = this.customCategories[0] || { id: 'cat_custom_general', name_vi: 'Chủ Đề Chung', icon: '⭐', isCustom: true };
          if (this.customCategories.length === 0) {
            this.customCategories.push(defaultCustom);
            this.saveCustomCategories();
          }
          wp.categoryId = defaultCustom.id;
          wp.categoryName = defaultCustom.name_vi;
        }
        changed = true;
      }
    });
    if (changed) {
      this.saveCustomWordPairs();
    }
  }

  saveCustomCategories() {
    localStorage.setItem('gti_custom_categories', JSON.stringify(this.customCategories));
  }

  saveCustomWordPairs() {
    localStorage.setItem('gti_custom_word_pairs', JSON.stringify(this.customWordPairs));
  }

  getAllCategories() {
    const defaultCats = CATEGORIES.map(c => ({
      id: c.id,
      name_vi: c.name_vi,
      icon: c.icon,
      isCustom: false,
      defaultWords: c.words || []
    }));
    return [...defaultCats, ...this.customCategories];
  }

  getPlayableCategories() {
    // 1. Built-in categories with user's matched custom pairs merged in
    const list = CATEGORIES.map(c => {
      const matchedCustom = this.customWordPairs.filter(wp => wp.categoryId === c.id);
      return {
        id: c.id,
        name_vi: c.name_vi,
        icon: c.icon,
        isCustom: false,
        words: [...(c.words || []), ...matchedCustom]
      };
    });

    // 2. Custom categories created by the user
    this.customCategories.forEach(cat => {
      const catWords = this.customWordPairs.filter(wp => wp.categoryId === cat.id);
      list.push({
        id: cat.id,
        name_vi: cat.name_vi,
        icon: cat.icon || '⭐',
        isCustom: true,
        words: catWords
      });
    });

    // 3. Option to play ALL custom pairs together
    if (this.customWordPairs && this.customWordPairs.length > 0) {
      list.unshift({
        id: "custom_user_pairs",
        name_vi: "✨ Tất Cả Cặp Từ Tự Tạo",
        icon: "⭐",
        words: this.customWordPairs
      });
    }

    return list;
  }

  openWordPairsModal() {
    if (typeof sound !== 'undefined') sound.playClick();
    this.populateCategorySelectors();
    this.renderCustomWordPairsList();
    this.renderCategoriesManagementList();
    this.switchWordPairsTab(this.activeWordPairsTab || 'pairs');
    const modal = document.getElementById('modal-word-pairs');
    if (modal) modal.classList.add('open');
  }

  switchWordPairsTab(tab) {
    this.activeWordPairsTab = tab;
    const btnPairs = document.getElementById('tab-btn-pairs');
    const btnCats = document.getElementById('tab-btn-categories');
    const contentPairs = document.getElementById('tab-content-pairs');
    const contentCats = document.getElementById('tab-content-categories');

    if (tab === 'pairs') {
      btnPairs?.classList.add('active');
      btnCats?.classList.remove('active');
      if (contentPairs) contentPairs.style.display = 'flex';
      if (contentCats) contentCats.style.display = 'none';
      this.populateCategorySelectors();
      this.renderCustomWordPairsList();
    } else {
      btnCats?.classList.add('active');
      btnPairs?.classList.remove('active');
      if (contentCats) contentCats.style.display = 'flex';
      if (contentPairs) contentPairs.style.display = 'none';
      this.renderCategoriesManagementList();
    }
  }

  populateCategorySelectors() {
    const allCats = this.getAllCategories();
    const select = document.getElementById('wp-category-select');
    const filter = document.getElementById('wp-filter-category');

    if (select) {
      const currentVal = select.value;
      select.innerHTML = allCats.map(c => `
        <option value="${c.id}">${c.icon} ${c.name_vi} ${c.isCustom ? '(Tự tạo)' : ''}</option>
      `).join('');
      if (currentVal && allCats.some(c => c.id === currentVal)) {
        select.value = currentVal;
      }
    }

    if (filter) {
      const currentFilter = this.filterWordPairCategory || 'all';
      filter.innerHTML = `
        <option value="all">Tất cả chủ đề (${this.customWordPairs.length})</option>
        ${allCats.map(c => {
        const count = this.customWordPairs.filter(wp => wp.categoryId === c.id).length;
        return `<option value="${c.id}">${c.icon} ${c.name_vi} (${count})</option>`;
      }).join('')}
      `;
      if (currentFilter && (currentFilter === 'all' || allCats.some(c => c.id === currentFilter))) {
        filter.value = currentFilter;
      }
    }
  }

  // --- WORD PAIRS CRUD ---
  addCustomWordPair(civilian, imposter, categoryId) {
    const civ = civilian ? civilian.trim() : '';
    const imp = imposter ? imposter.trim() : '';

    if (!civ || !imp) {
      alert('Vui lòng nhập đầy đủ Từ Phe Dân và Từ Imposter!');
      return;
    }

    const allCats = this.getAllCategories();
    let cat = allCats.find(c => c.id === categoryId) || allCats[0];

    const newPair = {
      id: `wp_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      civilian: civ,
      imposter: imp,
      categoryId: cat.id,
      categoryName: cat.name_vi
    };

    this.customWordPairs.unshift(newPair);
    this.saveCustomWordPairs();
    if (typeof sound !== 'undefined') sound.playWinFanfare();

    this.populateCategorySelectors();
    this.renderCustomWordPairsList();
    this.renderCategoriesManagementList();

    // Reset inputs
    const civInp = document.getElementById('wp-civilian');
    const impInp = document.getElementById('wp-imposter');
    if (civInp) { civInp.value = ''; civInp.focus(); }
    if (impInp) impInp.value = '';
  }

  startEditWordPair(id) {
    const pair = this.customWordPairs.find(wp => wp.id === id);
    if (!pair) return;

    this.editingWordPairId = id;
    if (typeof sound !== 'undefined') sound.playClick();

    this.switchWordPairsTab('pairs');

    const editIdInp = document.getElementById('wp-editing-id');
    const civInp = document.getElementById('wp-civilian');
    const impInp = document.getElementById('wp-imposter');
    const catSelect = document.getElementById('wp-category-select');
    const titleEl = document.getElementById('form-wp-title');
    const badgeEl = document.getElementById('badge-edit-mode');
    const submitText = document.getElementById('btn-submit-wp-text');
    const cancelBtn = document.getElementById('btn-cancel-edit-wp');

    if (editIdInp) editIdInp.value = pair.id;
    if (civInp) civInp.value = pair.civilian;
    if (impInp) impInp.value = pair.imposter;
    if (catSelect) catSelect.value = pair.categoryId || '';
    if (titleEl) titleEl.textContent = '✏️ Chỉnh Sửa Cặp Từ';
    if (badgeEl) badgeEl.style.display = 'inline-block';
    if (submitText) submitText.textContent = '💾 Cập Nhật Cặp Từ';
    if (cancelBtn) cancelBtn.style.display = 'inline-block';

    civInp?.focus();
    document.getElementById('form-add-word-pair')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  cancelEditWordPair() {
    this.editingWordPairId = null;
    const editIdInp = document.getElementById('wp-editing-id');
    const civInp = document.getElementById('wp-civilian');
    const impInp = document.getElementById('wp-imposter');
    const titleEl = document.getElementById('form-wp-title');
    const badgeEl = document.getElementById('badge-edit-mode');
    const submitText = document.getElementById('btn-submit-wp-text');
    const cancelBtn = document.getElementById('btn-cancel-edit-wp');

    if (editIdInp) editIdInp.value = '';
    if (civInp) civInp.value = '';
    if (impInp) impInp.value = '';
    if (titleEl) titleEl.textContent = '➕ Thêm Cặp Từ Mới';
    if (badgeEl) badgeEl.style.display = 'none';
    if (submitText) submitText.textContent = '💾 Lưu Cặp Từ';
    if (cancelBtn) cancelBtn.style.display = 'none';
  }

  updateCustomWordPair(id, civilian, imposter, categoryId) {
    const pair = this.customWordPairs.find(wp => wp.id === id);
    if (!pair) return;

    const civ = civilian ? civilian.trim() : '';
    const imp = imposter ? imposter.trim() : '';

    if (!civ || !imp) {
      alert('Vui lòng nhập đầy đủ Từ Phe Dân và Từ Imposter!');
      return;
    }

    const allCats = this.getAllCategories();
    const cat = allCats.find(c => c.id === categoryId) || allCats[0];

    pair.civilian = civ;
    pair.imposter = imp;
    pair.categoryId = cat.id;
    pair.categoryName = cat.name_vi;

    this.saveCustomWordPairs();
    if (typeof sound !== 'undefined') sound.playWinFanfare();

    this.cancelEditWordPair();
    this.populateCategorySelectors();
    this.renderCustomWordPairsList();
    this.renderCategoriesManagementList();
  }

  deleteCustomWordPair(id) {
    if (!confirm('Bạn có chắc muốn xóa cặp từ này?')) return;
    if (typeof sound !== 'undefined') sound.playClick();
    this.customWordPairs = this.customWordPairs.filter(wp => wp.id !== id);
    this.saveCustomWordPairs();
    if (this.editingWordPairId === id) this.cancelEditWordPair();
    this.populateCategorySelectors();
    this.renderCustomWordPairsList();
    this.renderCategoriesManagementList();
  }

  clearAllCustomWordPairs() {
    if (this.customWordPairs.length === 0) return;
    const filterCatId = this.filterWordPairCategory;
    const isFiltered = filterCatId && filterCatId !== 'all';
    const allCats = this.getAllCategories();
    const catName = isFiltered ? allCats.find(c => c.id === filterCatId)?.name_vi || '' : '';

    const confirmMsg = isFiltered
      ? `Bạn có chắc muốn xóa tất cả các cặp từ thuộc chủ đề "${catName}"?`
      : 'Bạn có chắc chắn muốn xóa tất cả các cặp từ tự tạo?';

    if (confirm(confirmMsg)) {
      if (typeof sound !== 'undefined') sound.playClick();
      if (isFiltered) {
        this.customWordPairs = this.customWordPairs.filter(wp => wp.categoryId !== filterCatId);
      } else {
        this.customWordPairs = [];
      }
      this.saveCustomWordPairs();
      this.cancelEditWordPair();
      this.populateCategorySelectors();
      this.renderCustomWordPairsList();
      this.renderCategoriesManagementList();
    }
  }

  renderCustomWordPairsList() {
    const list = document.getElementById('custom-word-pairs-list');
    const countTabEl = document.getElementById('count-tab-pairs');
    const countTotalEl = document.getElementById('count-custom-pairs');
    const countFilterEl = document.getElementById('count-filtered-pairs');

    if (countTabEl) countTabEl.textContent = this.customWordPairs.length;
    if (countTotalEl) countTotalEl.textContent = this.customWordPairs.length;

    if (!list) return;
    list.innerHTML = '';

    const allCats = this.getAllCategories();

    // Filtering & searching
    const filterCat = this.filterWordPairCategory || 'all';
    const keyword = this.searchWordPairKeyword || '';

    const filtered = this.customWordPairs.filter(wp => {
      const matchCat = (filterCat === 'all' || wp.categoryId === filterCat);
      const matchKey = !keyword ||
        wp.civilian.toLowerCase().includes(keyword) ||
        wp.imposter.toLowerCase().includes(keyword) ||
        (wp.categoryName || '').toLowerCase().includes(keyword);
      return matchCat && matchKey;
    });

    if (countFilterEl) countFilterEl.textContent = filtered.length;

    if (filtered.length === 0) {
      const emptyMsg = this.customWordPairs.length === 0
        ? `Chưa có cặp từ tự tạo nào.<br />Hãy nhập <strong>Từ Phe Dân</strong> & <strong>Từ Imposter</strong> ở form phía trên để bắt đầu!`
        : `Không tìm thấy cặp từ nào phù hợp với bộ lọc hiện tại.`;

      list.innerHTML = `
        <div style="text-align: center; color: var(--text-muted); padding: 24px 10px; font-size: 12px; line-height: 1.6;">
          <div style="font-size: 26px; margin-bottom: 6px;">📝</div>
          ${emptyMsg}
        </div>
      `;
      return;
    }

    filtered.forEach(wp => {
      const cat = allCats.find(c => c.id === wp.categoryId);
      const catIcon = cat ? cat.icon : '🏷️';
      const catName = cat ? cat.name_vi : (wp.categoryName || 'Tự tạo');

      const item = document.createElement('div');
      item.className = 'word-pair-item';
      if (this.editingWordPairId === wp.id) {
        item.style.borderColor = 'var(--primary-orange)';
        item.style.background = 'rgba(255, 107, 53, 0.08)';
      }

      item.innerHTML = `
        <div style="flex: 1; min-width: 0;">
          <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
            <span class="wp-civ-tag" title="Từ Phe Dân">👤 ${wp.civilian}</span>
            <span style="color: var(--text-muted); font-size: 11px;">⟷</span>
            <span class="wp-imp-tag" title="Từ Imposter">🎭 ${wp.imposter}</span>
          </div>
          <div style="margin-top: 4px; display: flex; align-items: center; gap: 6px;">
            <span class="wp-cat-pill" title="Chủ đề khớp">${catIcon} ${catName}</span>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 6px;">
          <button type="button" class="btn-edit-wp" title="Sửa cặp từ">✏️</button>
          <button type="button" class="btn-delete-wp" title="Xóa cặp từ">🗑️</button>
        </div>
      `;

      item.querySelector('.btn-edit-wp')?.addEventListener('click', (e) => {
        e.stopPropagation();
        this.startEditWordPair(wp.id);
      });

      item.querySelector('.btn-delete-wp')?.addEventListener('click', (e) => {
        e.stopPropagation();
        this.deleteCustomWordPair(wp.id);
      });

      list.appendChild(item);
    });
  }

  // --- CATEGORIES CRUD ---
  addCustomCategory(name, icon) {
    const catName = name ? name.trim() : '';
    if (!catName) {
      alert('Vui lòng nhập tên chủ đề!');
      return;
    }

    const catIcon = icon ? icon.trim() : '⭐';
    const newCat = {
      id: `cat_${Date.now()}`,
      name_vi: catName,
      icon: catIcon,
      isCustom: true
    };

    this.customCategories.push(newCat);
    this.saveCustomCategories();
    if (typeof sound !== 'undefined') sound.playWinFanfare();

    this.populateCategorySelectors();
    this.renderCategoriesManagementList();
    this.renderCustomWordPairsList();

    // Reset category form
    const nameInp = document.getElementById('cat-name-input');
    const iconInp = document.getElementById('cat-icon-input');
    if (nameInp) { nameInp.value = ''; nameInp.focus(); }
    if (iconInp) iconInp.value = '⭐';
  }

  startEditCategory(id) {
    const cat = this.customCategories.find(c => c.id === id);
    if (!cat) return;

    this.editingCategoryId = id;
    if (typeof sound !== 'undefined') sound.playClick();

    const editIdInp = document.getElementById('cat-editing-id');
    const nameInp = document.getElementById('cat-name-input');
    const iconInp = document.getElementById('cat-icon-input');
    const titleEl = document.getElementById('form-cat-title');
    const badgeEl = document.getElementById('badge-cat-edit-mode');
    const submitText = document.getElementById('btn-submit-cat-text');
    const cancelBtn = document.getElementById('btn-cancel-edit-cat');

    if (editIdInp) editIdInp.value = cat.id;
    if (nameInp) nameInp.value = cat.name_vi;
    if (iconInp) iconInp.value = cat.icon || '⭐';
    if (titleEl) titleEl.textContent = '✏️ Chỉnh Sửa Chủ Đề';
    if (badgeEl) badgeEl.style.display = 'inline-block';
    if (submitText) submitText.textContent = '💾 Cập Nhật Chủ Đề';
    if (cancelBtn) cancelBtn.style.display = 'inline-block';

    nameInp?.focus();
    document.getElementById('form-add-category')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  cancelEditCategory() {
    this.editingCategoryId = null;
    const editIdInp = document.getElementById('cat-editing-id');
    const nameInp = document.getElementById('cat-name-input');
    const iconInp = document.getElementById('cat-icon-input');
    const titleEl = document.getElementById('form-cat-title');
    const badgeEl = document.getElementById('badge-cat-edit-mode');
    const submitText = document.getElementById('btn-submit-cat-text');
    const cancelBtn = document.getElementById('btn-cancel-edit-cat');

    if (editIdInp) editIdInp.value = '';
    if (nameInp) nameInp.value = '';
    if (iconInp) iconInp.value = '⭐';
    if (titleEl) titleEl.textContent = '➕ Tạo Chủ Đề Mới';
    if (badgeEl) badgeEl.style.display = 'none';
    if (submitText) submitText.textContent = '➕ Tạo Chủ Đề';
    if (cancelBtn) cancelBtn.style.display = 'none';
  }

  updateCustomCategory(id, name, icon) {
    const cat = this.customCategories.find(c => c.id === id);
    if (!cat) return;

    const catName = name ? name.trim() : '';
    if (!catName) {
      alert('Vui lòng nhập tên chủ đề!');
      return;
    }

    const catIcon = icon ? icon.trim() : '⭐';
    cat.name_vi = catName;
    cat.icon = catIcon;

    // Update all word pairs matched to this category
    this.customWordPairs.forEach(wp => {
      if (wp.categoryId === id) {
        wp.categoryName = catName;
      }
    });

    this.saveCustomCategories();
    this.saveCustomWordPairs();
    if (typeof sound !== 'undefined') sound.playWinFanfare();

    this.cancelEditCategory();
    this.populateCategorySelectors();
    this.renderCategoriesManagementList();
    this.renderCustomWordPairsList();
  }

  deleteCustomCategory(id) {
    const cat = this.customCategories.find(c => c.id === id);
    if (!cat) return;

    const wordCount = this.customWordPairs.filter(wp => wp.categoryId === id).length;
    let confirmMsg = `Bạn có chắc muốn xóa chủ đề "${cat.name_vi}"?`;
    if (wordCount > 0) {
      confirmMsg += `\n(Có ${wordCount} cặp từ đang thuộc chủ đề này. Các từ này sẽ được chuyển sang chủ đề chung)`;
    }

    if (!confirm(confirmMsg)) return;

    if (typeof sound !== 'undefined') sound.playClick();

    // Reassign affected pairs to general category
    const remainingCats = this.customCategories.filter(c => c.id !== id);
    const fallbackCat = remainingCats[0] || { id: 'food_drink', name_vi: 'Đồ ăn' };
    this.customWordPairs.forEach(wp => {
      if (wp.categoryId === id) {
        wp.categoryId = fallbackCat.id;
        wp.categoryName = fallbackCat.name_vi;
      }
    });

    this.customCategories = remainingCats;
    this.saveCustomCategories();
    this.saveCustomWordPairs();

    if (this.editingCategoryId === id) this.cancelEditCategory();

    this.populateCategorySelectors();
    this.renderCategoriesManagementList();
    this.renderCustomWordPairsList();
  }

  renderCategoriesManagementList() {
    const list = document.getElementById('categories-management-list');
    const countTabEl = document.getElementById('count-tab-cats');
    const allCats = this.getAllCategories();
    if (countTabEl) countTabEl.textContent = allCats.length;

    if (!list) return;
    list.innerHTML = '';

    // 1. Custom Categories Section
    if (this.customCategories.length > 0) {
      const customHeader = document.createElement('div');
      customHeader.style.cssText = 'font-size: 11px; font-weight: 800; color: #a855f7; margin-top: 4px; margin-bottom: 2px; text-transform: uppercase; letter-spacing: 0.05em;';
      customHeader.textContent = `⭐ Chủ đề tự tạo (${this.customCategories.length})`;
      list.appendChild(customHeader);

      this.customCategories.forEach(cat => {
        const wordsCount = this.customWordPairs.filter(wp => wp.categoryId === cat.id).length;
        const item = document.createElement('div');
        item.className = 'cat-manage-item';
        if (this.editingCategoryId === cat.id) {
          item.style.borderColor = '#a855f7';
          item.style.background = 'rgba(168, 85, 247, 0.08)';
        }

        item.innerHTML = `
          <div style="display: flex; align-items: center; gap: 10px; flex: 1; min-width: 0;">
            <span style="font-size: 24px; flex-shrink: 0;">${cat.icon}</span>
            <div style="min-width: 0;">
              <strong style="font-size: 13px; color: var(--text-primary); display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                ${cat.name_vi}
              </strong>
              <span style="font-size: 11px; color: var(--text-muted);">${wordsCount} cặp từ đã match</span>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 6px; flex-shrink: 0;">
            <button type="button" class="ctrl-btn btn-add-to-cat" style="padding: 4px 8px; font-size: 11px; color: #10b981; border-color: rgba(16, 185, 129, 0.3);" title="Thêm từ vào chủ đề này">
              ➕ Thêm từ
            </button>
            <button type="button" class="btn-edit-wp" title="Sửa chủ đề">✏️</button>
            <button type="button" class="btn-delete-wp" title="Xóa chủ đề">🗑️</button>
          </div>
        `;

        item.querySelector('.btn-add-to-cat')?.addEventListener('click', () => {
          this.switchWordPairsTab('pairs');
          const select = document.getElementById('wp-category-select');
          if (select) select.value = cat.id;
          document.getElementById('wp-civilian')?.focus();
        });

        item.querySelector('.btn-edit-wp')?.addEventListener('click', () => {
          this.startEditCategory(cat.id);
        });

        item.querySelector('.btn-delete-wp')?.addEventListener('click', () => {
          this.deleteCustomCategory(cat.id);
        });

        list.appendChild(item);
      });
    }

    // 2. Default System Categories Section
    const sysHeader = document.createElement('div');
    sysHeader.style.cssText = 'font-size: 11px; font-weight: 800; color: var(--text-muted); margin-top: 8px; margin-bottom: 2px; text-transform: uppercase; letter-spacing: 0.05em;';
    sysHeader.textContent = `🔒 Chủ đề mặc định hệ thống (${CATEGORIES.length})`;
    list.appendChild(sysHeader);

    CATEGORIES.forEach(cat => {
      const matchedCount = this.customWordPairs.filter(wp => wp.categoryId === cat.id).length;
      const totalWords = (cat.words || []).length + matchedCount;

      const item = document.createElement('div');
      item.className = 'cat-manage-item';
      item.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px; flex: 1; min-width: 0;">
          <span style="font-size: 24px; flex-shrink: 0;">${cat.icon}</span>
          <div style="min-width: 0;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <strong style="font-size: 13px; color: var(--text-primary);">${cat.name_vi}</strong>
              <span style="font-size: 9.5px; padding: 1px 6px; border-radius: var(--radius-pill); background: rgba(255, 255, 255, 0.08); color: var(--text-muted);">Mặc định</span>
            </div>
            <span style="font-size: 11px; color: var(--text-muted);">
              ${cat.words.length} từ gốc ${matchedCount > 0 ? `+ <strong style="color: #10b981;">${matchedCount} từ bạn thêm</strong>` : ''}
            </span>
          </div>
        </div>
        <button type="button" class="ctrl-btn btn-add-to-cat" style="padding: 4px 8px; font-size: 11px; color: #10b981; border-color: rgba(16, 185, 129, 0.3);" title="Thêm từ vào chủ đề này">
          ➕ Thêm từ
        </button>
      `;

      item.querySelector('.btn-add-to-cat')?.addEventListener('click', () => {
        this.switchWordPairsTab('pairs');
        const select = document.getElementById('wp-category-select');
        if (select) select.value = cat.id;
        document.getElementById('wp-civilian')?.focus();
      });

      list.appendChild(item);
    });
  }

  // Categories Picker for Game Setup
  openCategoriesPicker() {
    const list = document.getElementById('categories-picker-list');
    if (!list) return;
    list.innerHTML = '';

    const allCats = this.getPlayableCategories();

    allCats.forEach(cat => {
      const item = document.createElement('div');
      item.className = 'setting-item-row';
      const isSel = cat.id === this.selectedCategoryId;
      if (isSel) item.style.borderColor = 'var(--primary-red)';

      const name = cat.name_vi;
      const wordCount = (cat.words || []).length;

      item.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px; flex: 1;">
          <span style="font-size: 26px;">${cat.icon}</span>
          <div>
            <div style="display: flex; align-items: center; gap: 6px;">
              <h4 style="font-family: var(--font-display); font-weight: 700; font-size: 14px;">${name}</h4>
              ${cat.isCustom ? '<span style="font-size: 9.5px; padding: 1px 6px; border-radius: var(--radius-pill); background: rgba(168, 85, 247, 0.18); color: #a855f7; font-weight: 700;">Tự tạo</span>' : ''}
            </div>
            <p style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">
              ${wordCount > 0 ? `${wordCount} cặp từ vựng` : '<span style="color: #ef4444;">Chưa có từ vựng (Bấm để thêm)</span>'}
            </p>
          </div>
        </div>
        ${isSel ? '<span style="color: var(--primary-red); font-size: 18px; font-weight: 800;">✓</span>' : ''}
      `;

      item.addEventListener('click', () => {
        sound.playClick();
        if (wordCount === 0) {
          alert(`Chủ đề "${name}" chưa có cặp từ nào! Hệ thống sẽ mở bảng thêm từ để bạn thêm từ vào chủ đề này.`);
          document.getElementById('modal-categories')?.classList.remove('open');
          this.openWordPairsModal();
          this.switchWordPairsTab('pairs');
          const select = document.getElementById('wp-category-select');
          if (select) select.value = cat.id;
          return;
        }

        this.selectedCategoryId = cat.id;
        const catNameEl = document.getElementById('label-category-name');
        if (catNameEl) catNameEl.textContent = name;
        const chipIcon = document.getElementById('chip-category-icon');
        if (chipIcon) chipIcon.textContent = cat.icon;
        const chipName = document.getElementById('chip-category-name');
        if (chipName) {
          const wordsPreview = cat.words.slice(0, 2).map(w => w.civilian || w.vi || w).join(', ');
          chipName.textContent = `${name} (${wordsPreview}...)`;
        }
        document.getElementById('modal-categories')?.classList.remove('open');
      });

      list.appendChild(item);
    });

    document.getElementById('modal-categories')?.classList.add('open');
  }

  saveCustomRole() {
    const name = document.getElementById('cr-name').value.trim();
    const icon = document.getElementById('cr-icon').value.trim() || '🎭';
    const color = document.getElementById('cr-color').value;
    const team = document.getElementById('cr-team').value;
    const desc = document.getElementById('cr-desc').value.trim();
    const ability = document.getElementById('cr-ability').value.trim();
    const win = document.getElementById('cr-win').value.trim();
    const knows = document.getElementById('cr-knows-keyword').checked;
    const hints = document.getElementById('cr-gets-hint').checked;

    if (!name) return;

    sound.playWinFanfare();

    const newRole = {
      id: `custom_${Date.now()}`,
      name_vi: name,
      icon,
      team,
      color,
      desc_vi: desc,
      ability_vi: ability,
      win_vi: win,
      knowsKeyword: knows,
      getsHint: hints,
      maxCount: 5,
      defaultCount: 1,
      count: 1,
      enabled: true,
      isDefault: false
    };

    this.customRoles.push(newRole);
    this.roles.push(newRole);
    localStorage.setItem('gti_custom_roles', JSON.stringify(this.customRoles));

    document.getElementById('form-custom-role').reset();
    document.getElementById('modal-custom-role').classList.remove('open');

    this.renderRolesList();
    this.updateBalanceMeter();
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
}

// Global utility helper
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ==========================================================
// [SEC 12] GAME BOOTSTRAP & ANTI-CHEAT STATE ENCAPSULATION
// ==========================================================
window.addEventListener('DOMContentLoaded', () => {
  // Instance nằm an toàn trong closure, không phơi bày biến trần ra window
  const activeGame = new ImposterGame();

  // Đặt bẫy chống gian lận (Anti-Cheat) khi người chơi mở F12 DevTools Console
  const antiCheatGuard = {
    get secretWord() {
      console.warn('%c⚠️ [ANTI-CHEAT] Phát hiện hành vi mở DevTools tra cứu biến game! Dữ liệu từ khóa đã được mã hóa an toàn.', 'color: #ef4444; font-weight: bold; font-size: 13px;');
      return '🔒 [ĐÃ MÃ HÓA BẢO VỆ]';
    },
    get imposterWord() {
      console.warn('%c⚠️ [ANTI-CHEAT] Dữ liệu từ khóa Imposter đã được mã hóa!', 'color: #ef4444; font-weight: bold;');
      return '🔒 [ĐÃ MÃ HÓA BẢO VỆ]';
    },
    get players() {
      console.warn('%c⚠️ [ANTI-CHEAT] Danh sách vai trò và thân phận người chơi đang được bảo vệ!', 'color: #ef4444; font-weight: bold;');
      return (activeGame.players || []).map(p => ({
        id: p.id,
        name: p.name,
        avatar: p.avatar,
        role: '🔒 [BẢO MẬT]',
        isImposter: '❓ [BÍ MẬT]',
        isEliminated: p.isEliminated
      }));
    },
    get isImposter() {
      return '🔒 [BẢO MẬT]';
    },
    get roundNumber() {
      return activeGame.roundNumber;
    },
    get playerCount() {
      return activeGame.playerCount;
    }
  };

  // Khóa đối tượng gameApp và app trên window bằng getter decoy
  Object.defineProperty(window, 'gameApp', {
    get: () => antiCheatGuard,
    set: () => console.warn('⚠️ [ANTI-CHEAT] Nghiêm cấm ghi đè trạng thái game!'),
    configurable: false,
    enumerable: false
  });

  Object.defineProperty(window, 'app', {
    get: () => antiCheatGuard,
    set: () => console.warn('⚠️ [ANTI-CHEAT] Nghiêm cấm ghi đè trạng thái game!'),
    configurable: false,
    enumerable: false
  });
});
