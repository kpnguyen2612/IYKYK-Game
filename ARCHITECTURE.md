# 🗺️ GUESS THE IMPOSTER - BẢN ĐỒ KIẾN TRÚC & HƯỚNG DẪN TRA CỨU CODE NHANH

> **Tài liệu hướng dẫn tra cứu code siêu tốc**: Giúp tìm đúng file, đúng hàm, đúng dòng khi cần chỉnh sửa hoặc mở rộng tính năng mà không cần mất thời gian tìm kiếm.

---

## 📂 1. Cấu Trúc File Dự Án (File Structure)

```
vuive/
├── index.html           # Toàn bộ cấu trúc HTML của 7 màn hình & 5 Modal Bottom Sheet
├── styles.css           # Toàn bộ hệ thống giao diện Obsidian Arcade & Hiệu ứng 
├── app.js               # Logic điều khiển chính, máy trạng thái, đồng hồ, tính điểm
├── audio.js             # Bộ tổng hợp âm thanh Web Audio API & rung phản hồi haptic
├── data_roles.js        # Dữ liệu 7 vai trò cốt lõi (phe Dân, phe Ác, Trung lập)
├── data_categories.js   # Danh mục từ vựng tiếng Việt/Anh, bảng màu avatar, tên ngẫu nhiên
├── ARCHITECTURE.md      # Bản đồ tra cứu code (Tài liệu này)
└── tools_stitch/        # Thư mục lưu trữ các file kịch bản & schema API tạm thời
```

---

## ⚡ 2. Tra Cứu Nhanh Theo Tính Năng (Feature Lookup Table)

| Tính Năng Cần Sửa | File Chứa Code | Vị Trí / Từ Khóa Tìm Nhanh |
| :--- | :--- | :--- |
| **Vòng quay người nói trước (Lucky Wheel)** | [`app.js`](file:///c:/Users/Windows/Documents/APP%20code/vuive/app.js) | Tìm: `[SEC 08.5]` hoặc `showRouletteScreen`, `drawRouletteWheel`, `spinRouletteWheel` |
| **Giao diện Vòng quay Screen 4.5** | [`index.html`](file:///c:/Users/Windows/Documents/APP%20code/vuive/index.html) | Tìm: `#screen-roulette`, `#roulette-canvas`, `#btn-spin-wheel` |
| **Ban Đêm chuyền tay bí mật (Night Phase)** | [`app.js`](file:///c:/Users/Windows/Documents/APP%20code/vuive/app.js) & [`index.html`](file:///c:/Users/Windows/Documents/APP%20code/vuive/index.html) | Tìm: `#screen-night`, `nightPhaseEnabled`, `startNightPhase`, `showNightStep` |
| **Thời gian thảo luận & phát biểu mỗi người** | [`app.js`](file:///c:/Users/Windows/Documents/APP%20code/vuive/app.js) | Tìm: `[SEC 08.6]` hoặc `updateCurrentSpeakerHUD`, `startSpeakerTimer`, `nextSpeaker` |
| **Thêm / Xóa từng người chơi & Sửa tên** | [`app.js`](file:///c:/Users/Windows/Documents/APP%20code/vuive/app.js) | Tìm: `[SEC 05]` hoặc `generatePlayerInputs`, `deletePlayer`, `addPlayer` |
| **Giao diện danh sách người chơi** | [`index.html`](file:///c:/Users/Windows/Documents/APP%20code/vuive/index.html) | Tìm: `#screen-players` & `#player-inputs-container` |
| **Đổi tên người chơi trên BXH (Khóa điểm tuyệt đối)** | [`app.js`](file:///c:/Users/Windows/Documents/APP%20code/vuive/app.js) | Tìm: `openRenamePlayerModal`, `saveRenamedPlayer`, `#modal-rename-player` (Không cho phép can thiệp/sửa điểm) |
| **Chọn người chơi từ BXH giải đấu (Roster Picker)** | [`app.js`](file:///c:/Users/Windows/Documents/APP%20code/vuive/app.js) | Tìm: `openRosterPicker`, `applySelectedRoster`, `#btn-pick-roster`, `#modal-roster-picker` |
| **Gợi ý tự động & Liên kết điểm thời gian thực** | [`app.js`](file:///c:/Users/Windows/Documents/APP%20code/vuive/app.js) | Tìm: `#datalist-party-roster`, `.player-score-link-badge` (`🏆 X pts`) |
| **Tính điểm ván & Điểm tích lũy giải đấu** | [`app.js`](file:///c:/Users/Windows/Documents/APP%20code/vuive/app.js) | Tìm: `[SEC 12]` hoặc `showResultsScreen`, `partyScores` |
| **Đặt lại tất cả điểm (Reset Scores)** | [`app.js`](file:///c:/Users/Windows/Documents/APP%20code/vuive/app.js) | Tìm: `resetAllScores` |
| **Phạt phe Dân bầu sai (-5 điểm)** | [`app.js`](file:///c:/Users/Windows/Documents/APP%20code/vuive/app.js) | Tìm: `[SEC 10]` hoặc `p.penalty`, `confirmEliminationVote` |
| **Phạt Imposter bị bắt ngay Vòng 1 (-15 điểm)** | [`app.js`](file:///c:/Users/Windows/Documents/APP%20code/vuive/app.js) | Tìm: `p.eliminatedInRound === 1` (Bị bắt ngay vòng 1 trừ 15đ; Dân thường bị loại sớm không bị trừ điểm) |
| **Cơ hội lật kèo của Imposter (Screen 6.5)** | [`app.js`](file:///c:/Users/Windows/Documents/APP%20code/vuive/app.js) | Tìm: `[SEC 11]` hoặc `showComebackStage`, `checkImposterComebackGuess` |
| **Vai trò cố định kèm số lượng (Fixed Roles & Stepper)** | [`app.js`](file:///c:/Users/Windows/Documents/APP%20code/vuive/app.js) | Tìm: `[SEC 04.4]` hoặc `syncFixedRolesWithDeck`, `setFixedRoleCount`, `renderFixedRolesChips` |
| **Giao diện Vai trò cố định & Modal 2.2** | [`index.html`](file:///c:/Users/Windows/Documents/APP%20code/vuive/index.html) | Tìm: `#card-fixed-roles`, `#modal-fixed-roles`, `#btn-open-fixed-roles-modal` |
| **Quản lý cặp từ vựng tự tạo (Word Pairs)** | [`app.js`](file:///c:/Users/Windows/Documents/APP%20code/vuive/app.js) | Tìm: `[SEC 04.5]` hoặc `openWordPairsModal`, `addCustomWordPair`, `deleteCustomWordPair` |
| **Kỹ năng các vai trò đặc biệt (Special Role Abilities)** | [`app.js`](file:///c:/Users/Windows/Documents/APP%20code/vuive/app.js) | Tìm: `openSpecialAbilityToolbox`, `showRevealStep` |
| **Gián Điệp, Kẻ Phản Bội, Kẻ Ngu** | [`app.js`](file:///c:/Users/Windows/Documents/APP%20code/vuive/app.js) | Tìm: `aliveSpies`, `traitor`, `jester` |
| **Kẻ Say Rượu & Điệp Viên Hai Mang** | [`app.js`](file:///c:/Users/Windows/Documents/APP%20code/vuive/app.js) | Tìm: `getDrunkardWord`, `double_agent` |
| **Cài đặt hệ thống (Theme & Âm thanh)** | [`app.js`](file:///c:/Users/Windows/Documents/APP%20code/vuive/app.js) & [`index.html`](file:///c:/Users/Windows/Documents/APP%20code/vuive/index.html) | Tìm: `#btn-open-settings` (Góc trên bên phải), `#modal-settings`, `openSettingsModal` |
| **Bản địa hóa 100% Tiếng Việt** | Toàn bộ ứng dụng | Không sử dụng song ngữ Anh-Việt, khóa cứng ngôn ngữ tiếng Việt thuần túy |
| **Thêm / Sửa từ vựng mặc định (Word Pairs)** | [`data_categories.js`](file:///c:/Users/Windows/Documents/APP%20code/vuive/data_categories.js) | Tìm: `CATEGORIES` (Cặp từ: `{ civilian, imposter }`) |

---

## 🎯 3. Chi Tiết Các Màn Hình Trong `index.html`

Mỗi màn hình được bọc trong thẻ `<section id="screen-..." class="view-screen">`:

1. **`#screen-setup` (Screen 1 - Cài đặt ván chơi)**: 
   - Banner giải đấu tích lũy (`#setup-tournament-banner`).
   - Chọn số người chơi, số Imposter.
   - Thẻ Tùy chọn chủ đề: `#opt-topic-specific` & `#opt-topic-random`.
   - **Tùy chọn trải nghiệm**: Vòng quay nói trước (`#switch-roulette`), Thời gian thảo luận (`#val-time`), Thời gian phát biểu mỗi người (`#val-speech-time`).
   - **Vai trò cố định (`#card-fixed-roles`)**: Hiển thị vai trò chắc chắn xuất hiện kèm bộ chọn số lượng `- [count] +`, nút xóa nhanh và mở modal cấu hình.
2. **`#screen-roles` (Screen 2 - Quản lý vai trò)**:
   - Danh sách bật/tắt các vai trò mặc định, thanh cân bằng phe, nút tạo vai trò mới.
   - **Vai trò cố định tích hợp**: Banner vai trò cố định thời gian thực, filter chip `📌 Cố định (X)`, và trên từng thẻ vai trò đặc biệt có nút **`+ Ghim cố định`** kèm bộ điều khiển số lượng `- [count] +`.
3. **`#screen-players` (Screen 3 - Tên người chơi & Roster)**:
   - Danh sách thẻ người chơi động (`#player-inputs-container`).
   - Nút **`👥 Chọn từ BXH`** (`#btn-pick-roster`) mở Modal Roster Picker chọn thành viên từ giải đấu.
   - Nút **➕ Thêm người chơi** (`#btn-add-player`).
   - Từng dòng có: Avatar đồng bộ theo hồ sơ giải đấu, ô nhập tên liên kết Datalist gợi ý, huy hiệu phát sáng `🏆 X pts` khi kết nối hồ sơ có sẵn, nút xúc xắc 🎲 đổi tên đơn lẻ, nút thùng rác 🗑️ xóa người chơi.
4. **`#screen-reveal` (Screen 4 - Chuyền điện thoại & Xem vai trò)**:
   - Màn che bảo mật và thẻ bài 3D chạm để lật.
5. **`#screen-roulette` (Screen 4.5 - Vòng quay may mắn ai nói trước)**:
   - Bánh xe canvas chia nan quạt theo người chơi, nút QUAY ở tâm, hiệu ứng giảm tốc và vạch kim chỉ hướng.
   - Thẻ công bố người phát biểu mở màn, nút bắt đầu thảo luận hoặc quay lại/bỏ qua.
6. **`#screen-night` (Screen 4.8 - Ban Đêm Bí Mật Chuyền Tay - Pass-the-Phone Night Phase)**:
   - Màn che bảo mật riêng tư (`#night-curtain-box`), hiển thị tên người chơi tiếp theo và nút "Mở mắt hành động".
   - Viewport hành động bí mật (`#night-action-viewport`) hiển thị vai trò và form kích hoạt kỹ năng riêng cho từng vai trò đặc biệt (Thám tử, Bác sĩ, Gián điệp, Phù thủy, Tắc kè hoa) và thẻ ngủ yên cho dân thường/imposter.
   - Thẻ bình minh "Trời Đã Sáng! ☀️" (`#night-dawn-card`) sau khi tất cả người chơi hoàn tất, chuyển sang phiên thảo luận.
   - Cung cấp tùy chọn bật/tắt linh hoạt (`#switch-night-phase` và `#switch-night-phase-modal`), tự động bỏ qua nếu tắt hoặc ván không có vai trò đêm chủ động.
7. **`#screen-discussion` (Screen 5 - Thảo luận & Đồng hồ)**:
   - Đồng hồ đếm ngược ván chơi.
   - Thanh HUD người đang phát biểu (`#current-speaker-hud`) có avatar, tên, đồng hồ đếm ngược từng lượt và nút **Xong lượt ⏭️**.
   - Dải avatar chạm để chuyển lượt phát biểu, nút hộp đồ năng lực bí mật.
7. **`#screen-voting` (Screen 6 - Bỏ phiếu loại)**:
   - Lưới chọn người bị tình nghi, cảnh báo trừ 5 điểm nếu vote nhầm, nút bỏ qua/hòa phiếu.
8. **`#screen-comeback` (Screen 6.5 - Cơ hội lật kèo kín đáo của Imposter)**:
   - Màn hình bí mật tách biệt dành riêng cho Imposter cầm máy gõ từ khóa mà không nhìn thấy đáp án.
9. **`#screen-results` (Screen 7 - Kết quả ván & Bảng điểm)**:
   - Bảng điểm 2 tab: `⚡ Điểm ván này` & `👑 Tổng tích lũy giải đấu`.
   - Nút `🔄 Đặt lại tất cả điểm`.
   - **Thanh thao tác cố định ở dưới (`.results-actions-bar`)**:
     - Bên trái: `🏠` (`#btn-back-to-home` - Về trang chủ).
     - Ở giữa: `🔄` (`#btn-play-again` - Chơi lại ván mới).
     - Bên phải: `🗑️` (`#btn-discard-round-score` - **Button Thùng Rác: Không tính điểm số ván này**; hoàn tác điểm cộng/trừ của ván đấu khỏi BXH giải đấu).
