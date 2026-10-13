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
    party_game: "Party Deduction Game",
    hero_subtitle: "Ai là Kẻ Giả Mạo đang ẩn nấp?",
    mode_pass: "Chuyền Máy (Offline)",
    mode_online: "Chơi Online (Room)",
    room_code: "Mã phòng:",
    online_desc: "Các thiết bị khác truy cập cùng mạng Wi-Fi hoặc nhập mã phòng để tham gia.",
    instruction_text: "Mỗi người chơi bí mật xem vai trò của mình. Hãy thảo luận, tìm manh mối và đoán xem ai là kẻ giả mạo.",
    section_match_settings: "Cài đặt ván chơi",
    setting_players: "Số người chơi",
    setting_players_desc: "Từ 3 đến 20 người",
    setting_imposters: "Kẻ Giả Mạo",
    setting_imposters_desc: "Số lượng Imposter trong ván",
    setting_roles: "Vai trò (Roles)",
    setting_roles_desc: "20 vai trò mặc định & tự tạo",
    setting_category: "Chủ đề từ khóa",
    setting_hints: "Gợi ý cho Imposter",
    setting_hints_desc: "Cung cấp manh mối cho kẻ giả mạo",
    setting_timelimit: "Giới hạn thời gian",
    setting_difficulty: "Độ khó",
    setting_difficulty_desc: "Dễ, Bình thường, Khó, Tùy chỉnh",
    btn_start_game: "Bắt đầu thiết lập người chơi",
    btn_back: "Quay lại",
    title_choose_roles: "Quản lý vai trò",
    btn_custom_role: "+ Tạo vai trò",
    balance_label: "Tỷ lệ cân bằng vai trò:",
    btn_auto_balance: "⚡ Tự động cân bằng (Auto Balance)",
    filter_all: "Tất cả",
    filter_good: "Phe Dân (Good)",
    filter_evil: "Phe Ác (Evil)",
    filter_neutral: "Trung lập (Neutral)",
    filter_custom: "Tự tạo (Custom)",
    btn_save_roles: "Lưu cấu hình vai trò",
    title_players: "Tên người chơi",
    btn_random_names: "Tên ngẫu nhiên",
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
    btn_play_again: "Chơi lại ván mới",
    btn_change_roles: "Thay đổi vai trò",
    btn_back_home: "Về trang chủ",
    title_history: "Lịch sử ván chơi",
    btn_clear: "Xóa lịch sử",
    modal_custom_role_title: "Tạo vai trò mới",
    form_role_name: "Tên vai trò",
    form_role_icon: "Icon / Emoji",
    form_role_color: "Màu nhận diện",
    form_role_team: "Phe (Team)",
    form_role_desc: "Mô tả ngắn",
    form_role_ability: "Kỹ năng đặc biệt",
    form_role_win: "Điều kiện chiến thắng",
    form_knows_keyword: "Biết từ khóa",
    form_gets_hint: "Nhận gợi ý",
    btn_save_role: "Lưu vai trò (Save Role)",
    modal_categories_title: "Chọn chủ đề từ khóa",
    toolbox_title: "Hộp công cụ vai trò bí mật",
    section_scoreboard: "🏆 Bảng Điểm & Xếp Hạng Party",
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
    btn_confirm_comeback: "Xác nhận đoán từ & Lật kèo",
    btn_giveup: "Không đoán được (Chấp nhận thua)",
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
    this.lang = 'vi';
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
    this.difficulty = 'Normal';
    this.gameMode = 'pass';

    // Special Roles Roll Rate (Tỉ lệ Roll vai trò khác: 25%, 50%, 70%, 85%, 100%)
    this.specialRoleRate = parseInt(localStorage.getItem('gti_special_role_rate') || '85', 10);
    this.doctorShieldedPlayerId = null;
    this.bodyguardProtectedPlayerId = null;
    this.detectivesExposedImposter = new Set();

    // Custom Word Pairs (Cặp từ tự tạo)
    this.customWordPairs = JSON.parse(localStorage.getItem('gti_custom_word_pairs') || '[]');
    this.secretWord = null;
    this.imposterWord = null;

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
    } catch (e) {}
    return {};
  }

  getTotalFixedCount() {
    return Object.values(this.fixedRoles || {}).reduce((sum, count) => sum + (count || 0), 0);
  }

  getMaxSpecialAllowed(players = this.playerCount) {
    if (players <= 4) return 1;
    if (players <= 6) return 2;
    if (players <= 8) return 2;
    if (players <= 12) return 3;
    return Math.min(4, Math.floor(players * 0.25));
  }

  getRecommendedSpecialCount(players = this.playerCount) {
    if (players <= 4) return 1;
    if (players <= 6) return 1;
    if (players <= 8) return 2;
    if (players <= 12) return 3;
    return Math.min(4, Math.floor(players * 0.25));
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
  }

  applyTheme() {
    document.documentElement.setAttribute('data-theme', this.theme);
    const icon = document.getElementById('theme-icon');
    if (icon) icon.textContent = this.theme === 'dark' ? '🌙' : '☀️';
    localStorage.setItem('gti_theme', this.theme);

    // Sync Settings Modal Theme UI
    const isDark = this.theme === 'dark';
    const badge = document.getElementById('label-current-theme-badge');
    if (badge) badge.textContent = isDark ? 'Dark Mode' : 'Light Mode';

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
    document.querySelectorAll('.view-screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(screenId);
    if (target) {
      target.classList.add('active');
      target.scrollTop = 0;
    }
    const select = document.getElementById('screen-jump-select');
    if (select) select.value = screenId;

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
      if (players <= 5) {
        activeSpecialRoles = ['detective'];
      } else if (players <= 6) {
        activeSpecialRoles = ['detective'];
      } else if (players <= 8) {
        activeSpecialRoles = ['detective', 'doctor'];
      } else if (players <= 12) {
        activeSpecialRoles = ['detective', 'doctor', 'spy'];
      } else {
        activeSpecialRoles = ['detective', 'doctor', 'spy', 'jester'];
      }
    }

    const specialCountUsed = Math.min(activeSpecialRoles.length, maxSpecial, Math.max(0, players - impCount - 2));
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
    this.showToast(this.lang === 'vi' 
      ? `🎲 Đã bật 20 vai trò vào vòng quay! Ván đấu vẫn tự động giới hạn tối đa ${this.getMaxSpecialAllowed()} vai trò đặc biệt để bảo toàn số Dân.` 
      : `🎲 All roles enabled in pool! Match limits max ${this.getMaxSpecialAllowed()} special roles.`);
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
      meterText.textContent = `${total} / ${this.playerCount} ${this.lang === 'vi' ? 'Vai trò' : 'Roles'}`;
      if (total === this.playerCount) {
        meterText.className = 'balance-meter-text balanced';
        if (warningMsg) warningMsg.textContent = this.lang === 'vi' 
          ? `✓ Bộ vai trò đã khớp chính xác với ${this.playerCount} người chơi.`
          : `✓ Role count perfectly matches ${this.playerCount} players.`;
      } else if (total < this.playerCount) {
        meterText.className = 'balance-meter-text unbalanced';
        const diff = this.playerCount - total;
        if (warningMsg) warningMsg.textContent = this.lang === 'vi'
          ? `⚠️ Đang thiếu ${diff} vai trò. Nhấn Auto Balance hoặc tăng số Dân thường.`
          : `⚠️ Needs ${diff} more roles. Click Auto Balance or add Civilians.`;
      } else {
        meterText.className = 'balance-meter-text unbalanced';
        const diff = total - this.playerCount;
        if (warningMsg) warningMsg.textContent = this.lang === 'vi'
          ? `⚠️ Đang thừa ${diff} vai trò so với số lượng người chơi.`
          : `⚠️ Exceeds player count by ${diff} roles.`;
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
    if (catName) catName.textContent = this.lang === 'vi' ? cat.name_vi : cat.name_en;

    const chipIcon = document.getElementById('chip-category-icon');
    const chipName = document.getElementById('chip-category-name');
    if (chipIcon) chipIcon.textContent = cat.icon;
    if (chipName) {
      const wordsPreview = cat.words.slice(0, 2).map(w => this.lang === 'vi' ? w.vi : w.en).join(', ');
      chipName.textContent = `${this.lang === 'vi' ? cat.name_vi : cat.name_en} (${wordsPreview}...)`;
    }

    const timeVal = document.getElementById('val-time');
    const timeDesc = document.getElementById('label-duration-desc');
    if (timeVal) {
      timeVal.textContent = this.durationSeconds === 0 ? '∞' : `${Math.floor(this.durationSeconds / 60)}m`;
    }
    if (timeDesc) {
      timeDesc.textContent = this.durationSeconds === 0
        ? (this.lang === 'vi' ? 'Không giới hạn thời gian thảo luận' : 'Unlimited discussion time')
        : (this.lang === 'vi' ? `${Math.floor(this.durationSeconds / 60)} phút / ván thảo luận` : `${Math.floor(this.durationSeconds / 60)} mins per discussion`);
    }

    const speechVal = document.getElementById('val-speech-time');
    const speechDesc = document.getElementById('label-speech-desc');
    if (speechVal) {
      speechVal.textContent = this.speechDurationSeconds === 0 ? (this.lang === 'vi' ? 'Tự do' : 'Free') : `${this.speechDurationSeconds}s`;
    }
    if (speechDesc) {
      speechDesc.textContent = this.speechDurationSeconds === 0
        ? (this.lang === 'vi' ? 'Phát biểu tự do, không đếm giây' : 'Free speech, untimed')
        : (this.lang === 'vi' ? `${this.speechDurationSeconds} giây / lượt phát biểu` : `${this.speechDurationSeconds}s per speaker turn`);
    }

    const rouletteSwitch = document.getElementById('switch-roulette');
    if (rouletteSwitch) {
      rouletteSwitch.checked = this.rouletteEnabled;
    }

    const diffBadge = document.getElementById('badge-difficulty');
    if (diffBadge) diffBadge.textContent = this.difficulty;

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
      if (statusBadge) statusBadge.textContent = this.lang === 'vi' ? 'Đang chọn' : 'Active';
    } else {
      cardSpecific?.classList.remove('active');
      cardRandom?.classList.add('active', 'random-mode');
      if (statusBadge) statusBadge.textContent = this.lang === 'vi' ? 'Tự chọn' : 'Specific';
    }

    if (playSound) sound.playClick();
  }

  renderRolesList(filter = 'all') {
    this.currentRoleFilter = filter;
    const container = document.getElementById('roles-container');
    if (!container) return;
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

      const title = this.lang === 'vi' ? role.name_vi : role.name_en;
      const desc = this.lang === 'vi' ? role.desc_vi : role.desc_en;
      const ability = this.lang === 'vi' ? role.ability_vi : role.ability_en;
      const winCond = this.lang === 'vi' ? role.win_vi : role.win_en;
      const teamLabel = role.team === 'good' ? (this.lang === 'vi' ? 'Phe Dân' : 'Good')
                      : role.team === 'evil' ? (this.lang === 'vi' ? 'Phe Ác' : 'Evil')
                      : (this.lang === 'vi' ? 'Trung lập' : 'Neutral');

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
              <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                <h4>${title}</h4>
                <span class="team-tag ${role.team}">${teamLabel}</span>
                ${isFixed ? '<span class="team-tag good" style="font-size: 9px; padding: 1px 5px; background: rgba(16, 185, 129, 0.15); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.3);">📌 Cố định</span>' : ''}
                ${isSpecial && !isFixed && role.enabled ? '<span class="team-tag" style="font-size: 9px; padding: 1px 5px; background: rgba(168, 85, 247, 0.15); color: #c084fc; border: 1px solid rgba(168, 85, 247, 0.3);">🎲 Trong vòng quay ngẫu nhiên</span>' : ''}
                ${!role.enabled ? '<span class="team-tag" style="font-size: 9px; padding: 1px 5px; background: rgba(107, 114, 128, 0.15); color: #9ca3af;">⛔ Đã tắt</span>' : ''}
              </div>
              <span style="font-size: 11px; color: var(--text-muted);">${winCond}</span>
            </div>
          </div>
          <label class="switch-control">
            <input type="checkbox" class="role-toggle-switch" data-role-id="${role.id}" ${role.enabled ? 'checked' : ''} />
            <span class="switch-slider"></span>
          </label>
        </div>
        <p class="role-desc-short">${desc}</p>
        <div class="role-ability-pill">⚡ <strong>${this.lang === 'vi' ? 'Kỹ năng:' : 'Ability:'}</strong> ${ability}</div>
        <div class="role-footer-controls">
          <span style="font-size: 11px; color: var(--text-muted);">
            ${this.lang === 'vi' ? 'Số lượng cho phép:' : 'Allowed quantity:'}
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
        if (role.enabled && role.count === 0) role.count = 1;
        card.classList.toggle('enabled', role.enabled);
        card.querySelector(`#role-val-${role.id}`).textContent = role.count;
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
            if (this.fixedRoles[role.id]) {
              this.setFixedRoleCount(role.id, 0);
            }
          }
          card.querySelector(`#role-val-${role.id}`).textContent = role.count;
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
          this.updateBalanceMeter();
        }
      });

      // Bind inline card fixed pin actions
      if (isSpecial) {
        card.querySelector('.card-btn-pin-fixed')?.addEventListener('click', (e) => {
          e.stopPropagation();
          const maxSpecial = this.getMaxSpecialAllowed();
          if (this.getTotalFixedCount() >= maxSpecial) {
            alert(`⚠️ Đã hết slot vai trò đặc biệt (${maxSpecial} slot). Hãy tăng số người chơi hoặc giảm vai trò khác!`);
            return;
          }
          sound.playClick();
          role.enabled = true;
          if (role.count === 0) role.count = 1;
          this.setFixedRoleCount(role.id, 1);
        });

        card.querySelector('.card-inc-fixed')?.addEventListener('click', (e) => {
          e.stopPropagation();
          const maxSpecial = this.getMaxSpecialAllowed();
          if (this.getTotalFixedCount() >= maxSpecial) {
            alert(`⚠️ Đã hết slot vai trò đặc biệt (${maxSpecial} slot). Hãy tăng số người chơi hoặc giảm vai trò khác!`);
            return;
          }
          if (fixedCount >= (role.maxCount || 3)) {
            alert(`⚠️ Vai trò "${role.name_vi}" chỉ được phép có tối đa ${role.maxCount || 3} người trong ván!`);
            return;
          }
          sound.playClick();
          this.setFixedRoleCount(role.id, fixedCount + 1);
        });

        card.querySelector('.card-dec-fixed')?.addEventListener('click', (e) => {
          e.stopPropagation();
          sound.playClick();
          this.setFixedRoleCount(role.id, fixedCount - 1);
        });

        card.querySelector('.card-remove-fixed')?.addEventListener('click', (e) => {
          e.stopPropagation();
          sound.playClick();
          this.setFixedRoleCount(role.id, 0);
        });
      }

      container.appendChild(card);
    });
  }

  // ==========================================================
  // [SEC 05] PLAYER MANAGEMENT (Edit, Delete, Add, Randomize)
  // ==========================================================
  loadSavedPlayerNames() {
    try {
      const saved = JSON.parse(localStorage.getItem('gti_player_names') || '[]');
      if (Array.isArray(saved) && saved.length >= 3) {
        return saved;
      }
    } catch (e) {}
    const randomPool = [...RANDOM_NAMES_VI];
    this.shuffle(randomPool);
    return randomPool.slice(0, this.playerCount);
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
      const pool = this.lang === 'vi' ? [...RANDOM_NAMES_VI] : [...RANDOM_NAMES_EN];
      const unused = pool.filter(n => !this.playerNames.includes(n));
      const nextName = unused.length > 0 ? unused[0] : `Player ${this.playerNames.length + 1}`;
      this.playerNames.push(nextName);
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
        opt.label = `${pName} (${total} pts)`;
        datalist.appendChild(opt);
      });
    }

    for (let i = 0; i < this.playerCount; i++) {
      const palette = AVATAR_PALETTES[i % AVATAR_PALETTES.length];
      const currentName = this.playerNames[i] || `Player ${i + 1}`;
      const rawRec = this.partyScores && this.partyScores[currentName];
      const existingRecord = rawRec ? (typeof rawRec === 'object' ? rawRec : { total: Number(rawRec) || 0 }) : null;
      const recTotal = existingRecord ? (existingRecord.total ?? existingRecord.score ?? existingRecord.points ?? 0) : 0;

      const row = document.createElement('div');
      row.className = 'player-item-row';
      row.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px; flex: 1;">
          <button type="button" class="player-avatar-picker-btn" data-index="${i}" title="${this.lang === 'vi' ? 'Đổi avatar' : 'Change avatar'}" style="background: ${existingRecord?.avatarBg || palette.bg}; color: ${palette.text};">
            ${existingRecord?.avatar || palette.emoji}
          </button>
          <div style="flex: 1;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 11px; color: var(--text-muted); font-weight: 700;">
                ${this.lang === 'vi' ? 'Người chơi' : 'Player'} ${i + 1}
              </span>
              <span class="player-score-link-badge" id="score-link-${i}" style="${existingRecord ? '' : 'display: none;'}" title="${this.lang === 'vi' ? 'Đã liên kết hồ sơ điểm giải đấu' : 'Linked tournament profile'}">
                ${existingRecord ? `🏆 ${recTotal} pts` : ''}
              </span>
            </div>
            <div style="display: flex; align-items: center; gap: 6px; margin-top: 3px;">
              <input type="text" class="player-name-input form-input" data-index="${i}" value="${currentName}" list="datalist-party-roster" placeholder="${this.lang === 'vi' ? 'Nhập tên hoặc chọn người chơi cũ...' : 'Enter or pick existing player...'}" style="padding: 6px 10px; font-weight: 700; font-size: 14px; flex: 1;" />
              <button type="button" class="btn-random-single-name" data-index="${i}" title="${this.lang === 'vi' ? 'Đổi tên ngẫu nhiên cho người này' : 'Randomize name'}">
                🎲
              </button>
            </div>
          </div>
        </div>
        <button type="button" class="btn-delete-player" data-index="${i}" title="${this.lang === 'vi' ? 'Xóa người chơi này' : 'Delete player'}">
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
        this.playerNames[idx] = val || `Player ${idx + 1}`;
        localStorage.setItem('gti_player_names', JSON.stringify(this.playerNames));

        const badgeEl = document.getElementById(`score-link-${idx}`);
        if (this.partyScores && this.partyScores[val]) {
          const raw = this.partyScores[val];
          const rec = typeof raw === 'object' && raw !== null ? raw : { total: Number(raw) || 0 };
          const recTotal = rec.total ?? rec.score ?? rec.points ?? 0;
          if (badgeEl) {
            badgeEl.textContent = `🏆 ${recTotal} pts`;
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

    // Bind single randomize button
    container.querySelectorAll('.btn-random-single-name').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.currentTarget.dataset.index, 10);
        this.randomizeSinglePlayer(idx);
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
      alert(this.lang === 'vi' ? '⚠️ Trò chơi cần tối thiểu 3 người chơi!' : '⚠️ Minimum 3 players required!');
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
      alert(this.lang === 'vi' ? '⚠️ Tối đa 20 người chơi trong một phòng!' : '⚠️ Maximum 20 players allowed!');
      return;
    }
    if (typeof sound !== 'undefined') sound.playClick();
    const pool = [...RANDOM_NAMES_VI];
    const unused = pool.filter(n => !this.playerNames.includes(n));
    const newName = (unused.length > 0 ? unused[Math.floor(Math.random() * unused.length)] : `Người chơi ${this.playerCount + 1}`);
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

  randomizeSinglePlayer(index) {
    if (typeof sound !== 'undefined') sound.playClick();
    const pool = [...RANDOM_NAMES_VI];
    const unused = pool.filter(n => !this.playerNames.includes(n));
    const newName = (unused.length > 0 ? unused[Math.floor(Math.random() * unused.length)] : pool[Math.floor(Math.random() * pool.length)]);
    this.playerNames[index] = newName;
    localStorage.setItem('gti_player_names', JSON.stringify(this.playerNames));
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
      names.push(inp.value.trim() || `Player ${idx + 1}`);
    });
    localStorage.setItem('gti_player_names', JSON.stringify(names));

    this.syncFixedRolesWithDeck();
    const deck = this.buildMatchDeck();
    this.doctorShieldedPlayerId = null;
    this.doctorShieldHistory = [];
    this.bodyguardProtectedPlayerId = null;
    this.detectivesExposedImposter = new Set();
    this.wrongVoteCount = 0;
    this.imposterGuessResult = null;
    this.imposterGuessText = '';
    this.pendingWrongVotePenaltyMode = 'team';
    this.pendingCustomPenalizedPlayerIds = new Set();

    // Reset match verdict & outcomes cleanly for new match
    this.winningTeam = null;
    this.caughtImposter = null;
    this.imposterWonByComeback = false;
    this.selectedSuspectId = null;
    this.isCurrentRoundScoreDiscarded = false;
    this.roundNumber = 1;

    let allCats = [...CATEGORIES];
    if (this.customWordPairs && this.customWordPairs.length > 0) {
      allCats.unshift({
        id: "custom_user_pairs",
        name_vi: "✨ Cặp Từ Tự Tạo",
        icon: "⭐",
        words: this.customWordPairs
      });
    }

    let cat;
    if (this.categoryMode === 'random') {
      cat = allCats[Math.floor(Math.random() * allCats.length)];
    } else {
      cat = allCats.find(c => c.id === this.selectedCategoryId) || allCats[0];
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
    if (index >= this.players.length) {
      if (this.rouletteEnabled) {
        this.showRouletteScreen();
      } else {
        const living = this.players.filter(p => !p.isEliminated);
        const pick = living[Math.floor(Math.random() * (living.length || 1))];
        this.currentSpeakerIndex = pick ? this.players.indexOf(pick) : 0;
        sound.playWinFanfare();
        this.startDiscussionStage();
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

    curtainBox.style.display = 'flex';
    cardViewport.style.display = 'none';
    innerCard.classList.remove('flipped');
    this.isCardFlipped = false;

    document.getElementById('curtain-player-name').textContent = player.name;
    document.getElementById('flip-front-player-name').textContent = player.name;

    const backCard = document.getElementById('flip-card-back');
    backCard.style.setProperty('--role-color', player.role.color);

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

    if (player.role.id === 'jester') {
      keywordLabel.textContent = '🃏 BẠN LÀ KẺ HỀ (JESTER)!';
      keywordText.className = 'secret-keyword-text jester';
      keywordText.textContent = 'Mục tiêu: Bị bỏ phiếu loại!';
      keywordCat.textContent = 'Bạn không biết từ khóa. Hãy nói ẩn ý để mọi người nghi ngờ bạn là Kẻ Giả Mạo! Nếu bị vote loại, bạn THẮNG ĐỘC LẬP!';
    } else if (player.role.id === 'drunkard') {
      const drunkWord = this.getDrunkardWord();
      keywordLabel.textContent = 'Từ khóa bí mật (Hơi say xỉn 🍺):';
      keywordText.className = 'secret-keyword-text';
      keywordText.textContent = drunkWord;
      keywordCat.textContent = `Chủ đề: ${this.categoryData.name_vi} • Bạn tin chắc đây là từ đúng! Hãy miêu tả tự nhiên cùng phe Dân!`;
    } else if (player.role.id === 'traitor') {
      keywordLabel.textContent = 'TỪ KHÓA BÍ MẬT (BẠN LÀ PHE ÁC 🗡️):';
      keywordText.className = 'secret-keyword-text imposter';
      keywordText.textContent = this.secretWord;
      keywordCat.textContent = `Chủ đề: ${this.categoryData.name_vi} • Bạn thuộc PHE ÁC nhưng BIẾT TỪ KHÓA! Hãy ngầm tung hỏa mù dẫn dắt Dân nghi ngờ lẫn nhau!`;
    } else if (player.role.id === 'chameleon') {
      keywordLabel.textContent = 'BẠN LÀ TẮC KÈ HOA (PHE ÁC 🦎)!';
      keywordText.className = 'secret-keyword-text imposter';
      const decoys = this.getChameleonDecoys();
      keywordText.textContent = decoys.join(' • ');
      keywordCat.textContent = `Chủ đề: ${this.categoryData.name_vi} • Chọn 1 trong 3 từ gợi ý trên để miêu tả hòa nhập hoàn hảo!`;
    } else if (player.role.id === 'double_agent') {
      keywordLabel.textContent = 'Từ khóa bí mật:';
      keywordText.className = 'secret-keyword-text';
      keywordText.textContent = this.secretWord;
      const imposterNames = this.players.filter(p => p.isImposter && p.id !== player.id).map(p => p.name).join(', ') || 'Đang ẩn nấp';
      keywordCat.textContent = `Chủ đề: ${this.categoryData.name_vi} • 🎭 Mật vụ: Imposter là [${imposterNames}]! Thắng nếu Imposter sống sót!`;
    } else if (player.role.id === 'spy') {
      keywordLabel.textContent = 'Từ khóa bí mật:';
      keywordText.className = 'secret-keyword-text';
      keywordText.textContent = this.secretWord;
      const firstLetter = this.secretWord ? this.secretWord.charAt(0).toUpperCase() : '?';
      keywordCat.textContent = `Chủ đề: ${this.categoryData.name_vi} • 🕵️ Mật báo tình báo: Chữ cái đầu tiên là '${firstLetter}'`;
    } else if (player.role.id === 'seer') {
      keywordLabel.textContent = 'Từ khóa bí mật:';
      keywordText.className = 'secret-keyword-text';
      keywordText.textContent = this.secretWord;
      const wordCount = this.secretWord.trim().split(/\s+/).length;
      const charCount = this.secretWord.replace(/\s+/g, '').length;
      keywordCat.textContent = `Chủ đề: ${this.categoryData.name_vi} • 🔮 Thấu thị: Cụm từ gồm ${wordCount} tiếng (${charCount} ký tự)`;
    } else if (player.role.knowsKeyword) {
      keywordLabel.textContent = 'Từ khóa bí mật:';
      keywordText.className = 'secret-keyword-text';
      keywordText.textContent = this.secretWord;
      keywordCat.textContent = `Chủ đề: ${this.categoryData.name_vi}`;
    } else {
      keywordLabel.textContent = 'BẠN LÀ KẺ GIẢ MẠO!';
      keywordText.className = 'secret-keyword-text imposter';
      if (this.hintsEnabled && this.imposterWord) {
        keywordText.textContent = `Gợi ý của bạn: ${this.imposterWord}`;
        keywordCat.textContent = `Chủ đề: ${this.categoryData.name_vi} • Hãy khéo léo nói về từ này để hòa nhập cùng phe Dân!`;
      } else if (this.hintsEnabled) {
        keywordText.textContent = `Chủ đề: ${this.categoryData.name_vi}`;
        keywordCat.textContent = 'Hãy hòa nhập, lắng nghe manh mối và lừa mọi người!';
      } else {
        keywordText.textContent = 'Không biết từ khóa!';
        keywordCat.textContent = 'Hãy hòa nhập, lắng nghe manh mối và lừa mọi người!';
      }
    }

    document.getElementById('revealed-ability').textContent = player.role.ability_vi;
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
    const names = (this.playerNames && this.playerNames.length >= 3) ? this.playerNames : ['Bảo Long', 'Minh Anh', 'Hải Đăng', 'Thu Hà', 'Tuấn Kiệt', 'Thùy Chi'];
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
          } catch (e) {}
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
    if (nameEl) nameEl.textContent = current.name;

    this.speechTimerRemaining = this.speechDurationSeconds;
    if (timerVal) {
      timerVal.textContent = this.speechDurationSeconds === 0
        ? (this.lang === 'vi' ? 'Tự do' : 'Free')
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

  startDiscussionStage() {
    this.switchScreen('screen-discussion');
    this.timerRemaining = this.durationSeconds;
    this.timerTotal = this.durationSeconds;
    this.isPaused = false;
    if (!this.roundNumber) this.roundNumber = 1;

    document.getElementById('hud-category-name').textContent = this.lang === 'vi' ? this.categoryData.name_vi : this.categoryData.name_en;
    
    const livingPlayers = this.players.filter(p => !p.isEliminated);
    document.getElementById('hud-players-count').textContent = `${livingPlayers.length} ${this.lang === 'vi' ? 'Người sống sót' : 'Active Players'}`;

    const roundPill = document.getElementById('round-stage-pill');
    if (roundPill) roundPill.textContent = `${this.lang === 'vi' ? 'Vòng' : 'Round'} ${this.roundNumber}`;

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
    document.getElementById('voting-round-badge').textContent = `${this.lang === 'vi' ? 'Vòng' : 'Round'} ${this.roundNumber}`;

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
        <div class="vote-player-name">${p.name}</div>
        <div style="font-size: 11px; color: var(--text-muted);">${this.lang === 'vi' ? 'Nghi phạm' : 'Suspect'}</div>
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
      alert(this.lang === 'vi' ? 'Vui lòng chọn 1 người chơi bị nghi ngờ!' : 'Please select 1 suspected player!');
      return;
    }

    const suspect = this.players.find(p => p.id === this.selectedSuspectId);

    // Doctor Shield Protection Check
    if (this.doctorShieldedPlayerId && this.doctorShieldedPlayerId === suspect.id) {
      this.doctorShieldedPlayerId = null;
      sound.playWinFanfare();
      alert(`💉 BÁC SĨ ĐÃ BẢO VỆ THÀNH CÔNG!\n${suspect.name} đã được tiêm huyết thanh bảo hộ nên KHÔNG bị loại vòng này!\nVán chơi tiếp tục sang vòng sau.`);
      this.roundNumber++;
      this.startDiscussionStage();
      return;
    }

    suspect.isEliminated = true;
    suspect.eliminatedInRound = this.roundNumber;

    sound.playDramaticReveal();

    if (suspect.role.id === 'jester') {
      this.winningTeam = 'jester';
      this.showResultsScreen(suspect);
      return;
    } 
    
    if (suspect.isImposter) {
      const remainingImposters = this.players.filter(p => p.isImposter && !p.isEliminated);
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

    document.getElementById('pill-innocents-left').textContent = `👥 ${livingInnocents} ${this.lang === 'vi' ? 'Dân thường còn lại' : 'Civilians left'}`;
    document.getElementById('pill-imposters-left').textContent = `🎭 ${livingImposters} ${this.lang === 'vi' ? 'Imposter lẩn trốn' : 'Imposter hiding'}`;

    if (avatar) avatar.textContent = eliminatedPlayer.avatar;

    const penaltyConfigEl = document.getElementById('intermission-penalty-config');
    const penaltyGrid = document.getElementById('penalty-voters-selector-grid');
    const btnPenaltyTeam = document.getElementById('btn-penalty-team');
    const btnPenaltyVoters = document.getElementById('btn-penalty-voters');
    const penaltyDesc = document.getElementById('penalty-explainer-text');

    if (isImposterCaught) {
      if (penaltyConfigEl) penaltyConfigEl.style.display = 'none';
      if (badge) {
        badge.textContent = this.lang === 'vi' ? '🎯 BẮT TRÚNG IMPOSTER!' : '🎯 IMPOSTER CAUGHT!';
        badge.style.background = '#10b981';
      }
      if (title) {
        title.textContent = this.lang === 'vi' ? `Đã loại 1 Kẻ Giả Mạo: ${eliminatedPlayer.name}!` : `Eliminated Imposter: ${eliminatedPlayer.name}!`;
        title.style.color = '#10b981';
      }
      if (desc) {
        desc.innerHTML = this.lang === 'vi' 
          ? `Phe Dân được <strong>thưởng +5 điểm</strong>!<br />Tuy nhiên vẫn còn ${livingImposters} Kẻ Giả Mạo khác đang ẩn nấp!`
          : `Civilians earned <strong>+5 bonus points</strong>!<br />However, ${livingImposters} other Imposter is still hiding!`;
      }
    } else {
      if (badge) {
        badge.textContent = this.lang === 'vi' ? '❌ OAN SAI!' : '❌ WRONG VOTE!';
        badge.style.background = '#ef4444';
      }
      if (title) {
        title.textContent = this.lang === 'vi' ? `${eliminatedPlayer.name} là Dân Thường Vô Tội!` : `${eliminatedPlayer.name} is Innocent!`;
        title.style.color = '#ef4444';
      }
      if (desc) {
        desc.innerHTML = this.lang === 'vi'
          ? `Phe Dân đã biểu quyết sai và bị <strong style="color: #ef4444;">phạt trừ -5 điểm</strong>!<br />Kẻ Giả Mạo vẫn chưa bị lộ và đang lẩn trốn.`
          : `Civilians made a wrong vote and received a <strong style="color: #ef4444;">-5 points penalty</strong>!<br />The Imposter is still undercover.`;
      }

      // Configure interactive penalty target selector
      if (penaltyConfigEl) {
        penaltyConfigEl.style.display = 'block';
        this.pendingWrongVotePenaltyMode = 'team';
        this.pendingCustomPenalizedPlayerIds = new Set();

        const livingGood = this.players.filter(p => p.role.team === 'good' && !p.isEliminated);
        livingGood.forEach(p => this.pendingCustomPenalizedPlayerIds.add(p.id));

        if (penaltyGrid) {
          penaltyGrid.innerHTML = '';
          livingGood.forEach(p => {
            const chip = document.createElement('button');
            chip.type = 'button';
            chip.className = 'penalty-voter-chip selected';
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

        const updatePenaltyUI = (mode) => {
          this.pendingWrongVotePenaltyMode = mode;
          if (mode === 'team') {
            if (btnPenaltyTeam) {
              btnPenaltyTeam.style.background = 'rgba(239, 68, 68, 0.25)';
              btnPenaltyTeam.style.borderColor = '#ef4444';
              btnPenaltyTeam.style.color = '#fff';
            }
            if (btnPenaltyVoters) {
              btnPenaltyVoters.style.background = 'rgba(255, 255, 255, 0.05)';
              btnPenaltyVoters.style.borderColor = 'var(--border-subtle)';
              btnPenaltyVoters.style.color = 'var(--text-muted)';
            }
            if (penaltyGrid) penaltyGrid.style.display = 'none';
            if (penaltyDesc) penaltyDesc.innerHTML = '<strong>Trách nhiệm tập thể:</strong> Cả nhóm đã thống nhất biểu quyết theo số đông, do đó toàn bộ phe Dân còn sống cùng chịu phạt -5 điểm.';
          } else {
            if (btnPenaltyTeam) {
              btnPenaltyTeam.style.background = 'rgba(255, 255, 255, 0.05)';
              btnPenaltyTeam.style.borderColor = 'var(--border-subtle)';
              btnPenaltyTeam.style.color = 'var(--text-muted)';
            }
            if (btnPenaltyVoters) {
              btnPenaltyVoters.style.background = 'rgba(239, 68, 68, 0.25)';
              btnPenaltyVoters.style.borderColor = '#ef4444';
              btnPenaltyVoters.style.color = '#fff';
            }
            if (penaltyGrid) penaltyGrid.style.display = 'flex';
            if (penaltyDesc) penaltyDesc.innerHTML = '<strong>Chỉ phạt người chỉ tay:</strong> Chỉ những người được tích chọn bên trên (đã chỉ tay vote oan) mới bị trừ -5 điểm.';
          }
        };

        if (btnPenaltyTeam) btnPenaltyTeam.onclick = () => { sound.playClick(); updatePenaltyUI('team'); };
        if (btnPenaltyVoters) btnPenaltyVoters.onclick = () => { sound.playClick(); updatePenaltyUI('custom'); };
        updatePenaltyUI('team');
      }
    }

    if (btnLabel) {
      btnLabel.textContent = this.lang === 'vi' 
        ? `Tiến vào Vòng ${this.roundNumber + 1} Thảo Luận`
        : `Proceed to Round ${this.roundNumber + 1}`;
    }

    modal.classList.add('open');
  }

  skipVotingRound() {
    sound.playToggle();
    this.roundNumber++;
    this.startDiscussionStage();
  }

  showComebackStage(suspect) {
    this.caughtImposter = suspect;
    this.switchScreen('screen-comeback');
    sound.playDramaticReveal();

    const nameEl = document.getElementById('comeback-imposter-name');
    if (nameEl) nameEl.textContent = suspect.name;

    const input = document.getElementById('input-imposter-guess');
    if (input) {
      input.value = '';
      setTimeout(() => input.focus(), 300);
    }
  }

  showResultsScreen(eliminatedPlayer) {
    if (!this.categoryData) this.categoryData = CATEGORIES[0];
    if (!this.secretWord) this.secretWord = this.lang === 'vi' ? 'Trà Sữa Trân Châu' : 'Boba Milk Tea';

    // Verify / Determine legitimate winning team based on actual player states
    const livingImposters = this.players.filter(p => p.isImposter && !p.isEliminated);
    const livingInnocents = this.players.filter(p => !p.isImposter && !p.isEliminated);
    const jesterEliminated = this.players.find(p => p.role.id === 'jester' && p.isEliminated);

    if (jesterEliminated && this.winningTeam === 'jester') {
      this.winningTeam = 'jester';
    } else if (this.imposterWonByComeback) {
      this.winningTeam = 'evil';
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
      discardBtn.title = this.lang === 'vi' ? 'Không tính điểm ván này (Hủy kết quả BXH)' : 'Discard match score';
      const textEl = discardBtn.querySelector('.btn-text');
      if (textEl) textEl.textContent = this.lang === 'vi' ? 'Không tính điểm' : 'Discard Score';
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
      winnerBanner.textContent = this.lang === 'vi' ? '💀 KẺ GIẢ MẠO LẬT KÈO CHIẾN THẮNG!' : '💀 IMPOSTER COMEBACK WIN!';
      winnerBanner.style.background = 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)';
    } else if (this.winningTeam === 'good') {
      winnerBanner.textContent = this.lang === 'vi' ? '🎉 PHE DÂN LÀNG CHIẾN THẮNG!' : '🎉 CIVILIANS WIN!';
      winnerBanner.style.background = 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)';
    } else if (this.winningTeam === 'jester') {
      winnerBanner.textContent = this.lang === 'vi' ? '🃏 KẺ HỀ CHIẾN THẮNG ĐỘC LẬP!' : '🃏 JESTER WINS SOLO!';
      winnerBanner.style.background = 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)';
    } else {
      winnerBanner.textContent = this.lang === 'vi' ? '💀 KẺ GIẢ MẠO CHIẾN THẮNG!' : '💀 IMPOSTERS WIN!';
      winnerBanner.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
    }

    const imposters = this.players.filter(p => p.isImposter).map(p => p.name).join(', ');
    document.getElementById('result-imposter-names').textContent = imposters || eliminatedPlayer.name;
    document.getElementById('result-keyword').textContent = this.secretWord;

    const comebackBadge = document.getElementById('results-comeback-badge');
    const civilianCount = this.players.filter(p => p.role.team === 'good').length;
    if (comebackBadge) {
      if (this.imposterWonByComeback) {
        const comebackScore = Math.min(25, Math.max(12, Math.round(civilianCount * 2.5)));
        comebackBadge.style.display = 'block';
        comebackBadge.style.color = '#f59e0b';
        comebackBadge.textContent = this.lang === 'vi' 
          ? `🔥 Lật kèo thành công! Imposter đã xuất sắc đoán trúng từ khóa (+${comebackScore}đ: +2.5đ x ${civilianCount} Dân)`
          : `🔥 Comeback Success! Imposter accurately guessed keyword (+${comebackScore} pts)`;
      } else if (this.caughtImposter) {
        comebackBadge.style.display = 'block';
        comebackBadge.style.color = 'var(--text-muted)';
        const guessDisplay = this.imposterGuessText ? `"${this.imposterGuessText}"` : (this.lang === 'vi' ? 'Chịu thua' : 'Gave up');
        comebackBadge.textContent = this.lang === 'vi'
          ? `❌ Lật kèo thất bại: Imposter không đoán đúng từ khóa (${guessDisplay} ≠ "${this.secretWord}")`
          : `❌ Comeback Failed: Imposter failed to guess secret keyword (${guessDisplay})`;
      } else {
        comebackBadge.style.display = 'none';
      }
    }

    const rosterList = document.getElementById('results-roster-list');
    rosterList.innerHTML = '';
    this.players.forEach(p => {
      const row = document.createElement('div');
      row.className = 'role-summary-row';
      const roleName = this.lang === 'vi' ? p.role.name_vi : p.role.name_en;
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
            ? `<span class="team-tag" style="background: rgba(239, 68, 68, 0.2); color: #ef4444;">${this.lang === 'vi' ? 'Bị loại' : 'Exiled'}</span>`
            : `<span class="team-tag" style="background: rgba(16, 185, 129, 0.2); color: #10b981;">${this.lang === 'vi' ? 'Sống sót' : 'Survived'}</span>`}
        </div>
      `;
      rosterList.appendChild(row);
    });

    const logBox = document.getElementById('match-timeline-log');
    const elimName = eliminatedPlayer ? eliminatedPlayer.name : 'Nghi phạm';
    const elimRole = eliminatedPlayer && eliminatedPlayer.role ? (this.lang === 'vi' ? eliminatedPlayer.role.name_vi : eliminatedPlayer.role.name_en) : 'Kẻ Giả Mạo';
    logBox.innerHTML = `
      <div>• <strong>${this.lang === 'vi' ? 'Bắt đầu ván:' : 'Match start:'}</strong> ${this.players.length || 6} ${this.lang === 'vi' ? 'người chơi tham gia' : 'players participated'}.</div>
      <div>• <strong>${this.lang === 'vi' ? 'Chủ đề từ khóa:' : 'Topic:'}</strong> ${this.categoryData.name_vi} (${this.secretWord}).</div>
      <div>• <strong>${this.lang === 'vi' ? 'Kết quả bỏ phiếu:' : 'Voting verdict:'}</strong> ${elimName} (${elimRole}) ${this.lang === 'vi' ? 'đã bị đa số trục xuất.' : 'was eliminated.'}</div>
    `;

    // ==========================================
    // SCORE CALCULATION & PARTY LEADERBOARD
    // ==========================================
    const roundScores = [];
    const hasCaughtImposter = this.players.some(p => p.isImposter && p.isEliminated);

    this.players.forEach(p => {
      let delta = 0;
      let reasons = [];

      // ========================================================
      // 1. KẾT QUẢ THEO PHE THẮNG / THUA
      // ========================================================
      if (this.winningTeam === 'good') {
        // Phe Dân Thắng
        if (p.role.team === 'good') {
          if (!p.isEliminated) {
            delta += 10;
            reasons.push(this.lang === 'vi' ? 'Thắng ván (+10)' : 'Match win (+10)');
          } else {
            delta += 5;
            reasons.push(this.lang === 'vi' ? 'Phe thắng (+5)' : 'Team win (+5)');
          }
          if (hasCaughtImposter) {
            delta += 5;
            reasons.push(this.lang === 'vi' ? 'Bắt Imposter (+5)' : 'Exiled Imposter (+5)');
          }
        } else if (p.isImposter) {
          // Imposter Thua (bị bắt & đoán sai từ hoặc chịu thua)
          if (p.eliminatedInRound === 1) {
            delta -= 15;
            reasons.push(this.lang === 'vi' ? 'Bị bắt ngay vòng 1 (-15)' : 'Caught in Round 1 (-15)');
          } else {
            delta -= 5;
            reasons.push(this.lang === 'vi' ? 'Bị bắt & đoán sai từ (-5)' : 'Caught & wrong keyword (-5)');

            const roundsSurvived = Math.max(0, (p.eliminatedInRound || this.roundNumber) - 1);
            const stealthBonus = Math.min(6, roundsSurvived * 2);
            const deceptionBonus = Math.min(6, (this.wrongVoteCount || 0) * 2);
            const caughtConsolation = Math.min(6, stealthBonus + deceptionBonus);
            if (caughtConsolation > 0) {
              delta += caughtConsolation;
              reasons.push(this.lang === 'vi' ? `Trụ ${roundsSurvived} vòng (+${caughtConsolation})` : `Survived ${roundsSurvived} rounds (+${caughtConsolation})`);
            }
          }
        }
      } else if (this.winningTeam === 'jester') {
        // Kẻ Hề thắng độc lập
        if (p.role.id === 'jester') {
          delta += 30;
          reasons.push(this.lang === 'vi' ? 'Jackpot Kẻ Hề (+30)' : 'Jester Jackpot (+30)');
        } else {
          // Toàn bộ người chơi khác bị Kẻ Hề dắt mũi
          delta -= 5;
          reasons.push(this.lang === 'vi' ? 'Mắc bẫy Kẻ Hề (-5)' : 'Tricked by Jester (-5)');
        }
      } else { 
        // ========================================================
        // PHE ÁC THẮNG (IMPOSTER THẮNG / DÂN THƯỜNG THUA)
        // Dân không ngăn chặn được Imposter -> BỊ XỬ THUA VÀ TRỪ ĐIỂM!
        // ========================================================
        if (p.isImposter) {
          if (this.imposterWonByComeback) {
            const comebackScore = Math.min(25, Math.max(12, Math.round(civilianCount * 2.5)));
            delta += comebackScore;
            reasons.push(this.lang === 'vi' 
              ? `Lật kèo đoán trúng từ (+${comebackScore}đ: +2.5đ x ${civilianCount} Dân)` 
              : `Comeback word guess (+${comebackScore} pts)`);
          } else if (!p.isEliminated) {
            const imposterWinScore = Math.min(30, Math.max(10, civilianCount * 3));
            delta += imposterWinScore;
            reasons.push(this.lang === 'vi' 
              ? `Imposter sống sót (+${imposterWinScore}đ: +3đ x ${civilianCount} Dân)` 
              : `Imposter survived (+${imposterWinScore} pts)`);

            if (this.wrongVoteCount && this.wrongVoteCount > 0) {
              const deceptionBonus = Math.min(6, this.wrongVoteCount * 2);
              if (deceptionBonus > 0) {
                delta += deceptionBonus;
                reasons.push(this.lang === 'vi' ? `Lừa Dân bầu oan (+${deceptionBonus}đ)` : `Deceived civilians (+${deceptionBonus})`);
              }
            }
          } else {
            const imposterDeadWinScore = Math.min(20, Math.max(8, Math.round(civilianCount * 1.8)));
            delta += imposterDeadWinScore;
            reasons.push(this.lang === 'vi' 
              ? `Phe Imposter thắng (+${imposterDeadWinScore}đ)` 
              : `Imposter team win (+${imposterDeadWinScore} pts)`);
          }
        } else if (p.role.team === 'good') {
          // DÂN THƯỜNG KHÔNG NGĂN CHẶN ĐƯỢC IMPOSTER: XỬ THUA & TRỪ ĐIỂM
          delta -= 5;
          reasons.push(this.lang === 'vi' ? 'Thua trận trước Imposter (-5)' : 'Defeated by Imposter (-5)');

          // Nếu để Imposter lật kèo đoán trúng từ (gợi ý lộ liễu)
          if (this.imposterWonByComeback) {
            delta -= 3;
            reasons.push(this.lang === 'vi' ? 'Làm lộ từ khóa (-3)' : 'Leaked secret keyword (-3)');
          }
        }
      }

      // ========================================================
      // 2. CƠ CHẾ PHÂN HÓA ĐẶC BIỆT THEO HÀNH VI & VAI TRÒ
      // ========================================================

      // A. Kẻ Sống Sót (Survivor): mục tiêu sống sót đến cuối ván
      if (p.role.id === 'survivor') {
        if (!p.isEliminated) {
          delta += 15;
          reasons.push(this.lang === 'vi' ? 'Sống sót (+15)' : 'Survivor bonus (+15)');
        }
      }

      // B. Phạt biểu quyết oan sai (Wrong vote penalty)
      if (p.penalty && p.penalty > 0) {
        delta -= p.penalty;
        reasons.push(this.lang === 'vi' ? `Chỉ tay bầu oan (-${p.penalty})` : `Wrongful vote (-${p.penalty})`);
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
        reason: reasons.join(', ') || (this.lang === 'vi' ? 'Tham gia (+0)' : 'Participated (+0)')
      });
    });

    localStorage.setItem('gti_party_scores', JSON.stringify(this.partyScores));
    this.lastRoundScores = roundScores;

    // Update match count display
    const totalMatches = Object.values(this.partyScores).reduce((max, cur) => Math.max(max, cur.games || 0), 0) || 1;
    const matchCountEl = document.getElementById('val-match-count');
    if (matchCountEl) {
      matchCountEl.textContent = `${totalMatches} ${this.lang === 'vi' ? 'ván đã chơi' : 'matches played'}`;
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
      if (descEl) descEl.textContent = this.lang === 'vi' 
        ? 'Hiển thị điểm cộng theo đóng góp ván này' 
        : 'Points earned in this specific match';

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
            ${this.lang === 'vi' ? 'Chưa có dữ liệu ván đấu nào. Hãy bắt đầu ván mới!' : 'No round scores available yet. Start a new match!'}
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
            <span class="score-tag-total ${item.total < 0 ? 'negative' : ''}" title="${this.lang === 'vi' ? 'Tổng điểm tích lũy' : 'Cumulative Score'}">${item.total}đ</span>
          </div>
        `;
        lbContainer.appendChild(row);
      });
    } else {
      // Cumulative Series Standings
      if (descEl) descEl.textContent = this.lang === 'vi'
        ? 'Bảng tổng sắp tích lũy sau tất cả các ván chơi'
        : 'Tournament standings across all matches';

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
            ${this.lang === 'vi' ? 'Chưa có điểm số nào được ghi nhận. Hãy chơi ván đầu tiên!' : 'No party scores recorded yet. Play a match to begin!'}
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
              <div style="font-size: 11px; color: var(--text-muted);">${item.wins || 0} ${this.lang === 'vi' ? 'trận thắng' : 'wins'} / ${item.games || 0} ${this.lang === 'vi' ? 'ván' : 'matches'}</div>
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
      this.showToast(this.lang === 'vi' ? 'Ván này đã được hủy tính điểm!' : 'Match scores already discarded!', 'warning');
      return;
    }

    if (!this.lastRoundScores || this.lastRoundScores.length === 0) {
      this.showToast(this.lang === 'vi' ? 'Không có điểm số nào để hủy!' : 'No scores to discard!', 'warning');
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
      item.reason = this.lang === 'vi' ? '🚫 Không tính điểm ván này' : '🚫 Match score discarded';
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
      btn.title = this.lang === 'vi' ? 'Đã hủy tính điểm ván này' : 'Scores discarded';
      const textEl = btn.querySelector('.btn-text');
      if (textEl) textEl.textContent = this.lang === 'vi' ? 'Đã hủy điểm' : 'Discarded';
    }

    this.showToast(this.lang === 'vi' ? '🗑️ Đã hủy điểm ván này! Không tính vào BXH giải đấu.' : '🗑️ Match scores discarded! Not counted towards leaderboard.', 'danger');
  }

  updateSetupTournamentBanner() {
    const banner = document.getElementById('setup-tournament-banner');
    const stats = document.getElementById('setup-tournament-stats');
    if (!banner || !stats) return;

    const entries = Object.entries(this.partyScores || {}).filter(([_, data]) => data && (data.games > 0 || data.total > 0));
    if (entries.length === 0) {
      stats.textContent = this.lang === 'vi'
        ? 'Chưa có điểm • Sẵn sàng bắt đầu giải đấu mới!'
        : 'No scores yet • Ready to start a tournament!';
      return;
    }

    entries.sort((a, b) => b[1].total - a[1].total);
    const topPlayer = entries[0];
    const totalMatches = Object.values(this.partyScores).reduce((max, cur) => Math.max(max, cur.games || 0), 0) || 1;

    stats.innerHTML = this.lang === 'vi'
      ? `Đã đấu: <strong style="color: #fff;">${totalMatches} ván</strong> • Dẫn đầu: <strong style="color: #f59e0b;">${topPlayer[0]} (${topPlayer[1].total}đ)</strong>`
      : `Played: <strong style="color: #fff;">${totalMatches} matches</strong> • Leader: <strong style="color: #f59e0b;">${topPlayer[0]} (${topPlayer[1].total} pts)</strong>`;
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

  resetAllScores() {
    const modal = document.getElementById('modal-confirm-reset');
    if (modal) {
      if (typeof sound !== 'undefined') sound.playClick();
      modal.classList.add('open');
    } else {
      const msg = this.lang === 'vi'
        ? 'Bạn có chắc chắn muốn xóa và đặt lại toàn bộ điểm số của tất cả người chơi về 0 để bắt đầu giải đấu mới?'
        : 'Reset all tournament party scores back to 0 to begin a fresh tournament series?';
      if (confirm(msg)) {
        this.executeResetAllScores();
      }
    }
  }

  executeResetAllScores() {
    if (typeof sound !== 'undefined') sound.playClick();

    // Khởi tạo lại điểm số về 0 cho tất cả người chơi trong giải đấu
    const resetScores = {};
    if (Array.isArray(this.players) && this.players.length > 0) {
      this.players.forEach(p => {
        resetScores[p.name] = {
          total: 0,
          wins: 0,
          games: 0,
          avatar: p.avatar || '👤',
          avatarBg: p.avatarBg || '#e0e7ff'
        };
      });
    } else if (this.partyScores && Object.keys(this.partyScores).length > 0) {
      Object.entries(this.partyScores).forEach(([name, data]) => {
        resetScores[name] = {
          total: 0,
          wins: 0,
          games: 0,
          avatar: data.avatar || '👤',
          avatarBg: data.avatarBg || '#e0e7ff'
        };
      });
    }

    this.partyScores = resetScores;
    localStorage.setItem('gti_party_scores', JSON.stringify(this.partyScores));

    // Đặt lại điểm số ván gần nhất đồng bộ về 0
    if (this.lastRoundScores) {
      this.lastRoundScores.forEach(x => {
        x.delta = 0;
        x.total = 0;
        x.reason = this.lang === 'vi' ? 'Đã đặt lại điểm số' : 'Scores reset';
      });
    }

    // Đặt lại số ván hiển thị
    const countEl = document.getElementById('val-match-count');
    if (countEl) {
      countEl.textContent = `0 ${this.lang === 'vi' ? 'ván đã chơi' : 'matches played'}`;
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
    this.showToast(this.lang === 'vi' ? '✅ Đã đặt lại toàn bộ điểm số về 0đ!' : '✅ All scores reset to 0!');
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
          ${this.lang === 'vi' ? 'Chưa có điểm số nào được ghi nhận. Hãy chơi ván đầu tiên!' : 'No party scores recorded yet. Play a match to begin!'}
        </div>
      `;
      return;
    }

    entries.sort((a, b) => b.total - a.total || b.wins - a.wins);

    entries.forEach((item, idx) => {
      const row = document.createElement('div');
      row.className = `leaderboard-row ${idx === 0 ? 'mvp-highlight' : ''}`;
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
            <div style="font-size: 11px; color: var(--text-muted);">
              ${item.wins} ${this.lang === 'vi' ? 'chiến thắng' : 'wins'} / ${item.games} ${this.lang === 'vi' ? 'ván' : 'matches'}
            </div>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 6px;">
          <span class="score-tag-total ${item.total < 0 ? 'negative' : ''}" style="font-size: 16px; color: ${item.total < 0 ? '#ef4444' : '#f59e0b'};">${item.total} pts</span>
          <button type="button" class="leaderboard-action-btn btn-edit-lb-player" data-player="${item.name}" title="${this.lang === 'vi' ? 'Đổi tên người chơi' : 'Rename player'}">✏️</button>
          <button type="button" class="leaderboard-action-btn btn-delete-lb-player" data-player="${item.name}" title="${this.lang === 'vi' ? 'Xóa người chơi khỏi BXH' : 'Delete player'}">🗑️</button>
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
        if (confirm(this.lang === 'vi' ? `Bạn có chắc muốn xóa điểm số của "${playerName}" khỏi giải đấu?` : `Remove "${playerName}" from leaderboard?`)) {
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
      pointsVal.textContent = `${total} pts (${data.wins || 0} ${this.lang === 'vi' ? 'chiến thắng' : 'wins'} / ${data.games || 0} ${this.lang === 'vi' ? 'ván' : 'matches'})`;
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
      this.showToast(this.lang === 'vi' ? 'Tên người chơi không được để trống!' : 'Player name cannot be empty!', 'danger');
      return;
    }
    if (newName === oldName) {
      document.getElementById('modal-rename-player')?.classList.remove('open');
      return;
    }
    if (this.partyScores[newName]) {
      this.showToast(this.lang === 'vi' ? `Tên "${newName}" đã tồn tại trên BXH! Vui lòng chọn tên khác.` : `Name "${newName}" already exists!`, 'danger');
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
    this.showToast(this.lang === 'vi' ? `✅ Đã đổi tên thành "${newName}"! (Điểm số ${scoreVal} pts được giữ nguyên)` : `✅ Renamed to "${newName}"!`);
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
          ${this.lang === 'vi' 
            ? 'Chưa có người chơi nào trên BXH giải đấu. Hãy chơi ván đầu tiên hoặc nhập tên để bắt đầu tích lũy điểm!' 
            : 'No tournament players on leaderboard yet. Play a match to begin accumulating points!'}
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
        counter.textContent = this.lang === 'vi'
          ? `Đã chọn: ${this.selectedRosterNames.size} người chơi`
          : `Selected: ${this.selectedRosterNames.size} players`;
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
            <div style="font-size: 11px; color: var(--text-muted);">${item.wins || 0} ${this.lang === 'vi' ? 'chiến thắng' : 'wins'} / ${item.games || 0} ${this.lang === 'vi' ? 'ván' : 'matches'}</div>
          </div>
        </div>
        <div style="font-family: var(--font-mono); font-size: 14px; font-weight: 800; color: #f59e0b;">
          ${item.total || 0} pts
        </div>
      `;

      row.addEventListener('click', () => {
        if (this.selectedRosterNames.has(item.name)) {
          this.selectedRosterNames.delete(item.name);
          row.classList.remove('selected');
          row.querySelector('.roster-checkbox').textContent = '';
        } else {
          if (this.selectedRosterNames.size >= 20) {
            this.showToast(this.lang === 'vi' ? 'Tối đa 20 người chơi trong một ván!' : 'Maximum 20 players per match!', 'danger');
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
      this.showToast(this.lang === 'vi' ? 'Vui lòng chọn ít nhất 3 người chơi!' : 'Please select at least 3 players!', 'danger');
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
    this.showToast(this.lang === 'vi' ? `✅ Đã chọn ${this.playerCount} người chơi từ BXH vào ván đấu!` : `✅ Selected ${this.playerCount} players from leaderboard!`);
  }

  checkImposterComebackGuess(isGiveup = false) {
    const input = document.getElementById('input-imposter-guess');
    const guess = input ? input.value.trim() : '';
    const target = this.secretWord || '';
    this.imposterGuessText = isGiveup ? '' : guess;

    const norm = str => str.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/[^a-z0-9]/g, '');

    const normTarget = norm(target);
    const normGuess = norm(guess);

    const isMatch = !isGiveup && normGuess.length > 0 && (
      normTarget.includes(normGuess) || 
      normGuess.includes(normTarget)
    );

    if (isMatch) {
      sound.playWinFanfare();
      this.winningTeam = 'evil';
      this.imposterWonByComeback = true;
      this.imposterGuessResult = 'correct';
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
      category: this.lang === 'vi' ? this.categoryData.name_vi : this.categoryData.name_en,
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
          ${this.lang === 'vi' ? 'Chưa có lịch sử ván đấu nào.' : 'No match history recorded yet.'}
        </div>
      `;
      return;
    }

    this.history.forEach(item => {
      const row = document.createElement('div');
      row.className = 'setting-item-row';
      row.style.cursor = 'default';
      const winText = item.winner === 'good' ? (this.lang === 'vi' ? 'Phe Dân thắng' : 'Civilians won')
                    : item.winner === 'jester' ? (this.lang === 'vi' ? 'Kẻ Hề thắng' : 'Jester won')
                    : (this.lang === 'vi' ? 'Imposter thắng' : 'Imposter won');
      const winColor = item.winner === 'good' ? 'var(--team-good)' : 'var(--primary-red)';

      row.innerHTML = `
        <div>
          <div style="font-family: var(--font-display); font-weight: 700; font-size: 14px;">
            ${item.category} • <span style="color: ${winColor};">${winText}</span>
          </div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">
            ${item.date} • ${item.playersCount} ${this.lang === 'vi' ? 'người' : 'players'} • Imposter: ${item.imposters}
          </div>
        </div>
        <span class="setting-badge-val" style="color: #fff;">${item.keyword}</span>
      `;
      container.appendChild(row);
    });
  }

  openSpecialAbilityToolbox() {
    const modal = document.getElementById('modal-toolbox');
    const content = document.getElementById('toolbox-content');
    content.innerHTML = '';

    const activeRoles = new Set(this.players.filter(p => !p.isEliminated).map(p => p.role.id));

    if (activeRoles.has('detective')) {
      const item = document.createElement('div');
      item.className = 'setting-item-row';
      item.style.flexDirection = 'column';
      item.style.alignItems = 'flex-start';
      const aliveDetectives = this.players.filter(p => !p.isEliminated && p.role.id === 'detective');
      const actorSelectorHtml = aliveDetectives.length > 1
        ? `<div style="display: flex; align-items: center; gap: 8px; width: 100%; margin-top: 8px;">
            <span style="font-size: 11px; color: var(--text-muted);">${this.lang === 'vi' ? 'Thám Tử thực hiện:' : 'Detective actor:'}</span>
            <select id="detective-actor" class="form-select" style="flex: 1; padding: 4px 8px; font-size: 12px;">
              ${aliveDetectives.map(d => `<option value="${d.id}">${d.name}</option>`).join('')}
            </select>
          </div>`
        : '';

      item.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px; width: 100%;">
          <span style="font-size: 24px;">🔍</span>
          <div>
            <strong>${this.lang === 'vi' ? 'Thám Tử - Soi Danh Tính' : 'Detective Inspection'}</strong>
            <p style="font-size: 11px; color: var(--text-muted);">${this.lang === 'vi' ? 'Chọn 1 người chơi để kiểm tra phe' : 'Inspect 1 player alignment'}</p>
          </div>
        </div>
        ${actorSelectorHtml}
        <div style="display: flex; gap: 8px; width: 100%; margin-top: 10px;">
          <select id="detective-target" class="form-select" style="flex: 1; padding: 6px 10px;">
            ${this.players.filter(p => !p.isEliminated && p.role.id !== 'detective').map(p => `<option value="${p.id}">${p.name}</option>`).join('')}
          </select>
          <button id="btn-detective-scan" class="ctrl-btn" style="background: var(--team-good); color: #fff;">
            ${this.lang === 'vi' ? 'Kiểm tra' : 'Inspect'}
          </button>
        </div>
        <div id="detective-result" style="font-size: 12px; font-weight: 700; margin-top: 6px; display: none;"></div>
      `;
      content.appendChild(item);

      item.querySelector('#btn-detective-scan').addEventListener('click', () => {
        sound.playDramaticReveal();
        const targetId = item.querySelector('#detective-target').value;
        const target = this.players.find(p => p.id === targetId);
        const resEl = item.querySelector('#detective-result');
        resEl.style.display = 'block';
        if (target && target.isImposter) {
          resEl.style.color = '#ef4444';
          resEl.textContent = this.lang === 'vi' 
            ? `⚠️ BÁO ĐỘNG: ${target.name} THUỘC PHE ÁC (IMPOSTER)!` 
            : `⚠️ ALERT: ${target.name} IS EVIL (IMPOSTER)!`;
          const actorEl = item.querySelector('#detective-actor');
          const actorId = actorEl ? actorEl.value : (aliveDetectives[0]?.id || null);
          if (!this.detectivesExposedImposter) this.detectivesExposedImposter = new Set();
          if (actorId) {
            this.detectivesExposedImposter.add(actorId);
          } else {
            aliveDetectives.forEach(d => this.detectivesExposedImposter.add(d.id));
          }
        } else if (target) {
          resEl.style.color = '#10b981';
          resEl.textContent = this.lang === 'vi'
            ? `✓ BÌNH AN: ${target.name} là người vô tội (Phe Dân).`
            : `✓ CLEAR: ${target.name} is Innocent.`;
        }
      });
    }

    if (activeRoles.has('spy')) {
      const item = document.createElement('div');
      item.className = 'setting-item-row';
      const firstLetter = this.secretWord ? this.secretWord.charAt(0) : '?';
      item.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 24px;">🕵️</span>
          <div>
            <strong>${this.lang === 'vi' ? 'Gián Điệp - Manh Mối Ẩn' : 'Spy Intel'}</strong>
            <p style="font-size: 12px; color: var(--team-neutral);">
              ${this.lang === 'vi' ? `Chữ cái đầu của từ khóa: "${firstLetter}..."` : `First letter of keyword: "${firstLetter}..."`}
            </p>
          </div>
        </div>
      `;
      content.appendChild(item);
    }

    if (activeRoles.has('doctor')) {
      const item = document.createElement('div');
      item.className = 'setting-item-row';
      item.style.flexDirection = 'column';
      item.style.alignItems = 'flex-start';
      item.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px; width: 100%;">
          <span style="font-size: 24px;">💉</span>
          <div>
            <strong>${this.lang === 'vi' ? 'Bác Sĩ - Lá Chắn Bảo Hộ' : 'Doctor Protection'}</strong>
            <p style="font-size: 11px; color: var(--text-muted);">${this.lang === 'vi' ? 'Chọn 1 người để bảo vệ khỏi bị loại vòng này' : 'Protect 1 player from elimination'}</p>
          </div>
        </div>
        <div style="display: flex; gap: 8px; width: 100%; margin-top: 10px;">
          <select id="doctor-target" class="form-select" style="flex: 1; padding: 6px 10px;">
            ${this.players.filter(p => !p.isEliminated).map(p => `<option value="${p.id}" ${this.doctorShieldedPlayerId === p.id ? 'selected' : ''}>${p.name}</option>`).join('')}
          </select>
          <button id="btn-doctor-shield" class="ctrl-btn" style="background: var(--team-good); color: #fff;">
            ${this.lang === 'vi' ? 'Bảo vệ' : 'Shield'}
          </button>
        </div>
        <div id="doctor-result" style="font-size: 12px; font-weight: 700; margin-top: 6px; color: #10b981; display: ${this.doctorShieldedPlayerId ? 'block' : 'none'};">
          ${this.doctorShieldedPlayerId ? `✓ Đang bảo vệ: ${this.players.find(p => p.id === this.doctorShieldedPlayerId)?.name}` : ''}
        </div>
      `;
      content.appendChild(item);

      item.querySelector('#btn-doctor-shield')?.addEventListener('click', () => {
        sound.playWinFanfare();
        const targetId = item.querySelector('#doctor-target').value;
        this.doctorShieldedPlayerId = targetId;
        if (!this.doctorShieldHistory) this.doctorShieldHistory = [];
        this.doctorShieldHistory.push(targetId);
        const target = this.players.find(p => p.id === targetId);
        const resEl = item.querySelector('#doctor-result');
        resEl.style.display = 'block';
        resEl.textContent = `✓ Đã kích hoạt lá chắn bảo hộ cho: ${target?.name}!`;
      });
    }

    if (activeRoles.has('seer')) {
      const item = document.createElement('div');
      item.className = 'setting-item-row';
      const wordCount = this.secretWord ? this.secretWord.trim().split(/\s+/).length : 0;
      const charCount = this.secretWord ? this.secretWord.replace(/\s+/g, '').length : 0;
      item.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 24px;">🔮</span>
          <div>
            <strong>${this.lang === 'vi' ? 'Nhà Tiên Tri - Cấu Trúc Từ Khóa' : 'Seer Clue'}</strong>
            <p style="font-size: 12px; color: #a855f7;">
              Từ khóa bí mật gồm <strong>${wordCount} tiếng</strong> (${charCount} ký tự)
            </p>
          </div>
        </div>
      `;
      content.appendChild(item);
    }

    if (activeRoles.has('mayor')) {
      const item = document.createElement('div');
      item.className = 'setting-item-row';
      item.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 24px;">👑</span>
          <div>
            <strong>${this.lang === 'vi' ? 'Thị Trưởng - Quyền Lực Phiếu Bầu' : 'Mayor Power'}</strong>
            <p style="font-size: 12px; color: #f59e0b;">
              Lá phiếu biểu quyết của Thị Trưởng tính giá trị gấp đôi (x2 phiếu bầu)!
            </p>
          </div>
        </div>
      `;
      content.appendChild(item);
    }

    if (activeRoles.has('saboteur')) {
      const item = document.createElement('div');
      item.className = 'setting-item-row';
      item.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 24px;">💣</span>
            <div>
              <strong>${this.lang === 'vi' ? 'Kẻ Phá Hoại - Trừ Giờ' : 'Saboteur - Cut Time'}</strong>
              <p style="font-size: 11px; color: var(--text-muted);">${this.lang === 'vi' ? 'Rút ngắn 30s của phe Dân' : 'Subtract 30s'}</p>
            </div>
          </div>
          <button id="btn-sabotage-trigger" class="ctrl-btn" style="background: var(--primary-red); color: #fff;">
            -30s
          </button>
        </div>
      `;
      content.appendChild(item);

      item.querySelector('#btn-sabotage-trigger').addEventListener('click', () => {
        sound.playTick();
        this.timerRemaining = Math.max(5, this.timerRemaining - 30);
        this.updateTimerDisplay();
        alert(this.lang === 'vi' ? 'Đã kích hoạt phá hoại: Giảm 30 giây!' : 'Sabotage triggered: -30 seconds!');
      });
    }

    if (content.children.length === 0) {
      content.innerHTML = `
        <div style="text-align: center; color: var(--text-muted); padding: 20px 0; font-size: 13px;">
          ${this.lang === 'vi' ? 'Không có vai trò hành động đặc biệt nào đang kích hoạt trong ván.' : 'No active special role abilities available for this match.'}
        </div>
      `;
    }

    modal.classList.add('open');
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

    document.getElementById('screen-jump-select')?.addEventListener('change', (e) => {
      this.switchScreen(e.target.value);
    });

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

    document.getElementById('btn-cycle-difficulty')?.addEventListener('click', () => {
      sound.playClick();
      const diffs = ['Easy', 'Normal', 'Hard', 'Custom'];
      const nextIdx = (diffs.indexOf(this.difficulty) + 1) % diffs.length;
      this.difficulty = diffs[nextIdx];
      this.renderSettingsValues();
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
    document.getElementById('btn-random-names')?.addEventListener('click', () => {
      sound.playClick();
      const pool = [...RANDOM_NAMES_VI];
      this.shuffle(pool);
      this.playerNames = pool.slice(0, this.playerCount);
      localStorage.setItem('gti_player_names', JSON.stringify(this.playerNames));
      this.generatePlayerInputs();
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

    document.getElementById('flip-card-inner')?.addEventListener('click', () => {
      sound.playFlipCard();
      const card = document.getElementById('flip-card-inner');
      card.classList.toggle('flipped');
      this.isCardFlipped = card.classList.contains('flipped');
    });

    document.getElementById('btn-hide-role')?.addEventListener('click', (e) => {
      e.stopPropagation();
      sound.playFlipCard();
      this.currentRevealIndex++;
      this.showRevealStep(this.currentRevealIndex);
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
      this.startDiscussionStage();
    });
    document.getElementById('btn-roulette-proceed')?.addEventListener('click', () => {
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
        text.textContent = this.lang === 'vi' ? 'Tiếp tục' : 'Resume';
      } else {
        icon.textContent = '⏸️';
        text.textContent = this.lang === 'vi' ? 'Tạm dừng' : 'Pause';
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
        counter.textContent = this.lang === 'vi'
          ? `Đã chọn: ${this.selectedRosterNames.size} người chơi`
          : `Selected: ${this.selectedRosterNames.size} players`;
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
        counter.textContent = this.lang === 'vi'
          ? `Đã chọn: 0 người chơi`
          : `Selected: 0 players`;
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
          this.players.filter(p => p.role.team === 'good' && !p.isEliminated).forEach(p => {
            p.penalty = (p.penalty || 0) + 5;
          });
        }
      }

      document.getElementById('modal-round-intermission')?.classList.remove('open');
      this.roundNumber++;
      this.startDiscussionStage();
    });

    // Deep Rules Modal Events
    document.getElementById('btn-open-rules')?.addEventListener('click', () => {
      sound.playClick();
      document.getElementById('modal-deep-rules')?.classList.add('open');
    });
    document.getElementById('btn-close-rules')?.addEventListener('click', () => {
      document.getElementById('modal-deep-rules')?.classList.remove('open');
    });

    // Custom Word Pairs Modal Events
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
    document.getElementById('form-add-word-pair')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const civ = document.getElementById('wp-civilian')?.value;
      const imp = document.getElementById('wp-imposter')?.value;
      const cat = document.getElementById('wp-category')?.value;
      this.addCustomWordPair(civ, imp, cat);
    });
    document.getElementById('btn-clear-custom-pairs')?.addEventListener('click', () => {
      this.clearAllCustomWordPairs();
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
        const count = this.fixedRoles[r.id] || 0;
        if (count > 0) {
          r.enabled = true;
          r.count = count;
        } else {
          r.enabled = false;
          r.count = 0;
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
      if (totalFixed > 0) {
        const names = activeEntries
          .map(([id]) => this.roles.find(r => r.id === id)?.name_vi)
          .filter(Boolean);
        previewEl.innerHTML = `20 vai trò • <strong style="color: #10b981;">📌 ${totalFixed} cố định (${names.slice(0, 2).join(', ')}${names.length > 2 ? '...' : ''})</strong>`;
      } else {
        previewEl.textContent = '20 vai trò mặc định & tự tạo';
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
            alert(`⚠️ Đã hết slot vai trò đặc biệt (${maxSpecial} slot). Hãy tăng số người chơi hoặc giảm vai trò khác!`);
            return;
          }
          if (count >= (r.maxCount || 3)) {
            alert(`⚠️ Vai trò "${r.name_vi}" chỉ được phép có tối đa ${r.maxCount || 3} người trong ván!`);
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
              <strong style="color: #fff; font-size: 13px;">${role.name_vi}</strong>
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
          alert(`⚠️ Đã hết slot vai trò đặc biệt (${maxSpecial} slot). Hãy tăng số người chơi hoặc giảm vai trò khác!`);
          return;
        }
        if (currentCount >= (role.maxCount || 3)) {
          alert(`⚠️ Vai trò "${role.name_vi}" chỉ được phép có tối đa ${role.maxCount || 3} người trong ván!`);
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
  // [SEC 04.5] CUSTOM WORD PAIRS MANAGEMENT
  // ==========================================================
  openWordPairsModal() {
    if (typeof sound !== 'undefined') sound.playClick();
    this.renderCustomWordPairsList();
    const modal = document.getElementById('modal-word-pairs');
    if (modal) modal.classList.add('open');
  }

  saveCustomWordPairs() {
    localStorage.setItem('gti_custom_word_pairs', JSON.stringify(this.customWordPairs));
  }

  addCustomWordPair(civilian, imposter, category) {
    const civ = civilian ? civilian.trim() : '';
    const imp = imposter ? imposter.trim() : '';
    const cat = category ? category.trim() : 'Cặp từ tự tạo';

    if (!civ || !imp) {
      alert('Vui lòng nhập đầy đủ Từ Phe Dân và Từ Kẻ Giả Mạo!');
      return;
    }

    const newPair = {
      id: `wp_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      civilian: civ,
      imposter: imp,
      category: cat || 'Tự tạo'
    };

    this.customWordPairs.unshift(newPair);
    this.saveCustomWordPairs();
    if (typeof sound !== 'undefined') sound.playWinFanfare();

    this.renderCustomWordPairsList();

    // Reset input fields
    const civInp = document.getElementById('wp-civilian');
    const impInp = document.getElementById('wp-imposter');
    if (civInp) { civInp.value = ''; civInp.focus(); }
    if (impInp) impInp.value = '';
  }

  deleteCustomWordPair(id) {
    if (typeof sound !== 'undefined') sound.playClick();
    this.customWordPairs = this.customWordPairs.filter(wp => wp.id !== id);
    this.saveCustomWordPairs();
    this.renderCustomWordPairsList();
  }

  clearAllCustomWordPairs() {
    if (this.customWordPairs.length === 0) return;
    if (confirm('Bạn có chắc chắn muốn xóa tất cả các cặp từ tự tạo?')) {
      if (typeof sound !== 'undefined') sound.playClick();
      this.customWordPairs = [];
      this.saveCustomWordPairs();
      this.renderCustomWordPairsList();
    }
  }

  renderCustomWordPairsList() {
    const countEl = document.getElementById('count-custom-pairs');
    if (countEl) countEl.textContent = this.customWordPairs.length;

    const list = document.getElementById('custom-word-pairs-list');
    if (!list) return;

    list.innerHTML = '';

    if (this.customWordPairs.length === 0) {
      list.innerHTML = `
        <div style="text-align: center; color: var(--text-muted); padding: 24px 10px; font-size: 12px; line-height: 1.6;">
          <div style="font-size: 24px; margin-bottom: 6px;">📝</div>
          Chưa có cặp từ tự tạo nào.<br />
          Hãy nhập <strong>Từ Phe Dân</strong> & <strong>Từ Imposter</strong> ở form phía trên để thêm cặp từ cho phòng chơi của bạn!
        </div>
      `;
      return;
    }

    this.customWordPairs.forEach(wp => {
      const item = document.createElement('div');
      item.className = 'word-pair-item';
      item.innerHTML = `
        <div style="flex: 1; min-width: 0;">
          <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
            <span class="wp-civ-tag" title="Từ của phe Dân">👤 ${wp.civilian}</span>
            <span style="color: var(--text-muted); font-size: 11px;">⟷</span>
            <span class="wp-imp-tag" title="Từ của Imposter">🎭 ${wp.imposter}</span>
          </div>
          <div style="margin-top: 3px;">
            <span class="wp-cat-pill">🏷️ ${wp.category || 'Tự tạo'}</span>
          </div>
        </div>
        <button type="button" class="btn-delete-wp" data-wp-id="${wp.id}" title="Xóa cặp từ này">🗑️</button>
      `;

      item.querySelector('.btn-delete-wp')?.addEventListener('click', (e) => {
        e.stopPropagation();
        this.deleteCustomWordPair(wp.id);
      });

      list.appendChild(item);
    });
  }

  openCategoriesPicker() {
    const list = document.getElementById('categories-picker-list');
    if (!list) return;
    list.innerHTML = '';

    let allCats = [...CATEGORIES];
    if (this.customWordPairs && this.customWordPairs.length > 0) {
      allCats.unshift({
        id: "custom_user_pairs",
        name_vi: "✨ Cặp Từ Tự Tạo",
        icon: "⭐",
        words: this.customWordPairs
      });
    }

    allCats.forEach(cat => {
      const item = document.createElement('div');
      item.className = 'setting-item-row';
      const isSel = cat.id === this.selectedCategoryId;
      if (isSel) item.style.borderColor = 'var(--primary-red)';

      const name = cat.name_vi;
      item.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="font-size: 26px;">${cat.icon}</span>
          <div>
            <h4 style="font-family: var(--font-display); font-weight: 700;">${name}</h4>
            <p style="font-size: 11px; color: var(--text-muted);">${cat.words.length} cặp từ vựng</p>
          </div>
        </div>
        ${isSel ? '<span style="color: var(--primary-red); font-size: 18px; font-weight: 800;">✓</span>' : ''}
      `;

      item.addEventListener('click', () => {
        sound.playClick();
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
      name_en: name,
      icon,
      team,
      color,
      desc_vi: desc,
      desc_en: desc,
      ability_vi: ability,
      ability_en: ability,
      win_vi: win,
      win_en: win,
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
}

// Start Game Instance
window.addEventListener('DOMContentLoaded', () => {
  window.gameApp = new ImposterGame();
});
