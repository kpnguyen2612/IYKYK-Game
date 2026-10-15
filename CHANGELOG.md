# 📝 NHẬT KÝ CẬP NHẬT & BACKNOTES (CHANGELOG)

Tài liệu này lưu trữ toàn bộ các ghi chú thay đổi (backnotes) cho từng lần cập nhật và đẩy mã nguồn lên GitHub của dự án **Faker (Guess The Imposter)**.

---

## 📌 Quy Tắc Triển Khai (Deployment Policy)
- **Kiểm tra trước khi đẩy**: Mọi tính năng và thành phần (UI, State, Timers, Role logic, Console) phải được kiểm thử toàn diện trên trình duyệt trước khi push.
- **Không tự động push (No Auto-Push)**: Chỉ thực hiện `git push` khi người dùng yêu cầu trực tiếp.
- **Bắt buộc ghi Backnote**: Mỗi lần cập nhật đẩy lên GitHub đều phải ghi nhận chi tiết thay đổi vào tài liệu này và commit message.

---

## [2026-10-15] - Cập Nhật Bộ Từ Thuần Việt, Tinh Chỉnh Vai Trò & Tối Ưu Lật Kèo

### 📚 1. Thay Thế Toàn Bộ 7 Chủ Đề & 365 Cặp Từ Thuần Việt Mới
- **Backnote**:
  - Xóa sạch toàn bộ từ khóa và danh mục cũ trong `data_categories.js`.
  - Cập nhật 7 chủ đề mới phong phú:
    - **Đồ ăn** (55 cặp từ)
    - **Động vật** (55 cặp từ)
    - **Nơi chốn** (55 cặp từ)
    - **Vật dụng** (55 cặp từ)
    - **Nghề & đời sống** (55 cặp từ)
    - **Thiên nhiên** (45 cặp từ)
    - **Giải trí** (45 cặp từ)
  - Đồng bộ hiển thị thẻ xem trước chủ đề (`#chip-category-name`) và fallback danh mục mặc định trong `index.html` và `app.js`.

### 🎭 2. Thuần Việt Hóa 100% Dữ Liệu Vai Trò (`data_roles.js`)
- **Backnote**:
  - Rà soát và loại bỏ hoàn toàn các trường tiếng Anh thừa (`name_en`, `desc_en`, `ability_en`, `win_en`) trong tất cả 20 vai trò mặc định.
  - Tinh chỉnh mô tả kịch bản, kỹ năng và điều kiện thắng sang ngôn ngữ tiếng Việt tự nhiên, trực quan.
  - Cập nhật logic render thẻ vai trò và modal trong `app.js` để ưu tiên các trường tiếng Việt thuần nhất.

### 🎲 3. Tối Ưu Đối Soát Từ Khóa & Minh Bạch Hóa Tính Điểm Lật Kèo (Imposter Comeback)
- **Backnote**:
  - Cải tiến hàm kiểm tra từ đoán `checkImposterComebackGuess`: Khắc phục triệt để lỗi khớp chuỗi con lỏng lẻo trước đây (tránh tình trạng chỉ nhập lượng từ như `"con"`, `"bánh"`, `"cơm"` mà vẫn trúng từ).
  - Cho phép nhận diện linh hoạt giữa từ có dấu và không dấu, hỗ trợ nhập từ ngữ cốt lõi (ví dụ từ `"con mèo"` thì gõ `"mèo"` hoặc `"con mèo"` đều hợp lệ).
  - Giữ nguyên và chuẩn hóa cơ chế tính điểm: Imposter lật kèo nhận `+2.5đ x số Dân` (từ 12đ đến 25đ); Dân làng bị trừ `-8đ` (-5đ thua ván + -3đ làm lộ từ khóa).
  - Bổ sung ghi nhận chi tiết cơ hội lật kèo vào Nhật ký diễn biến trận đấu (`#match-timeline-log`) để bảng điểm cuối ván minh bạch, rõ ràng.

---

## [2026-10-14] - Cập Nhật Hệ Thống & Tinh Gọn Giao Diện

### 🎯 1. Xóa Bỏ Cài Đặt "Độ Khó" (Difficulty Removal)
- **Backnote**: 
  - Khảo sát và xác nhận cài đặt "Độ khó" trước đây chỉ là nút chuyển đổi trạng thái giao diện (`Easy` ➔ `Normal` ➔ `Hard` ➔ `Custom`), không can thiệp vào luật chơi hay bộ từ vựng.
  - Xóa bỏ hàng `#btn-cycle-difficulty` trong `index.html`.
  - Gỡ bỏ thuộc tính `this.difficulty`, từ điển i18n (`setting_difficulty`, `setting_difficulty_desc`) và các trình lắng nghe sự kiện liên quan trong `app.js`.
  - Cập nhật tài liệu kiến trúc `ARCHITECTURE.md`.

### 📚 2. Quản Lý Chủ Đề & Cặp Từ Khóa (Topic & Word Pair CRUD System)
- **Backnote**:
  - Xây dựng hệ thống quản lý danh mục chủ đề và từ khóa toàn diện trong Modal Quản lý Cặp từ.
  - Cho phép người dùng:
    - Xem danh sách từ ngữ theo từng chủ đề hoặc tất cả.
    - Tạo chủ đề mới tùy chỉnh.
    - Thêm cặp từ vựng mới (Dân thường & Imposter) và ghép (match) vào chủ đề mong muốn.
    - Sửa / Xóa cặp từ vựng và tự động đồng bộ vào `localStorage`.

### 🎭 3. Logic Tiêu Hao Thẻ Vai Trò Độc Lập (Role Card Consumption Logic)
- **Backnote**:
  - Điều chỉnh logic hành động ban đêm / giai đoạn đặc biệt: Khi trong ván có nhiều người chơi cùng một vai trò (ví dụ: 2 Bác sĩ, 2 Thám tử, v.v.), giao diện hiển thị từng thẻ/nút riêng biệt cho từng người chơi.
  - Sau khi người chơi kích hoạt kỹ năng của thẻ tương ứng, thẻ đó sẽ **biến mất ngay lập tức** (auto-consumption), ngăn chặn việc dùng lại hoặc trùng lặp hành động.

### 🧭 4. Tinh Gọn Thanh Điều Hướng Trên (Top Bar Clean Stage Tracking)
- **Backnote**:
  - Loại bỏ các con số đếm bước rườm rà và dropdown tùy chọn phức tạp ở thanh tiêu đề trên cùng.
  - Thay thế bằng thanh trạng thái giai đoạn tối giản, hiển thị rõ ràng tiến trình của ván chơi theo thời gian thực.
  - Chuyển nút **Luật chơi** thành biểu tượng dấu hỏi `?` tinh tế ở góc trên bên phải, đặt cạnh biểu tượng bánh răng cài đặt.

### ⚖️ 5. Đồng Bộ Điểm Phạt Kẻ Sống Sót (Survivor Penalty Synchronization)
- **Backnote**:
  - Thêm logic trừ `-5 điểm` khi Kẻ Sống Sót (Survivor) bị loại (`p.isEliminated === true`) trong `app.js`, đồng bộ chính xác với Bảng Điểm Thưởng & Phạt trong Modal Luật Chơi (`index.html`).
  - Cập nhật mô tả kỹ năng vai trò Kẻ Sống Sót trong `data_roles.js` thể hiện rõ cả điểm thưởng khi sống sót (+15đ) và điểm phạt khi bị loại (-5đ).

### 🎭 6. Hoàn Tất Toàn Diện Logic Game Cho Tất Cả 20 Vai Trò (Full Roles Logic Implementation)
- **Backnote**:
  - **Thẩm Phán (Judge)**: Tích hợp quyền Phủ Quyết (Veto) 1 lần duy nhất trong ván; khi có người bị vote loại, game kiểm tra và cho phép Thẩm Phán hủy án tử; hiển thị thẻ trạng thái Veto trong Hộp công cụ; thưởng +5 điểm Phủ quyết công tâm.
  - **Phù Thủy (Witch)**: Thêm 2 năng lực độc lập trong Hộp công cụ: Bình Cứu (cứu mục tiêu khỏi bị vote loại) và Bình Độc (đầu độc loại ngay mục tiêu); tính điểm phe Trung Lập (+15 điểm nếu sống sót, -5 điểm nếu bị loại).
  - **Tin Tặc (Hacker)**: Tích hợp chức năng hack đột nhập dữ liệu trong Hộp công cụ, cho phép kiểm tra giải mã chính xác vai trò và phe phái của 1 người chơi.
  - **Bà Đồng (Medium)**: Tích hợp chức năng Thỉnh cầu linh hồn (Séance) trong Hộp công cụ, giao tiếp với linh hồn người đã bị loại để biết chính xác vai trò và phe phái thật của họ.
  - **Tắc Kè Hoa (Chameleon)**: Tích hợp thẻ xem lại 3 từ ngụy trang bí mật trong Hộp công cụ mọi lúc trong vòng thảo luận.
  - **Kẻ Câm Lặng (Mime)**: Hiển thị huy hiệu giới hạn phát biểu `🤐 Kẻ Câm Lặng (Tối đa 1 từ)` trên thanh HUD Speaker khi tới lượt phát biểu và thông báo khi lật thẻ.
  - **Thị Trưởng (Mayor)**: Gắn huy hiệu `👑 x2 Phiếu` trực quan trên thẻ biểu quyết ở màn hình Bỏ phiếu loại.
  - **Kẻ Phản Bội (Traitor)**: Ngăn chặn cơ chế Lật Kèo khi bị vote loại (vì Kẻ Phản Bội vốn đã biết từ khóa từ đầu); đồng bộ tính điểm chung phe Ác khi Imposter thắng.
  - **Kẻ Say Rượu (Drunkard)**: Sửa lỗi tính điểm: Đồng bộ ăn điểm theo phe Dân Làng (+10 điểm nếu Dân thắng, +5 điểm nếu chết nhưng phe Dân thắng, -5 điểm nếu Imposter thắng).
  - **Điệp Viên Hai Mang (Double Agent)**: Triển khai điều kiện thắng & tính điểm: Thắng +15 điểm nếu phe Imposter thắng hoặc Điệp Viên sống sót cuối ván; phạt -5 điểm nếu toàn bộ Imposter bị vạch mặt.
  - **Thưởng Kỹ Năng Hành Động (Action Bonuses)**: Thêm điểm thưởng ghi nhận chiến công trên BXH: Thám Tử soi trúng Imposter (+5đ), Bác Sĩ bảo vệ thành công (+10đ), Vệ Sĩ hy sinh cứu đồng đội (+10đ), Thẩm Phán phủ quyết công tâm (+5đ).

### 🌙 7. Chế Độ Ban Đêm Chuyền Tay Bí Mật Kèm Tùy Chọn Bật/Tắt (Pass-the-Phone Night Phase & Toggle)
- **Backnote**:
  - Xây dựng màn hình Ban Đêm Chuyền Tay Bí Mật (Screen 4.8: `#screen-night`) hoạt động trước phiên thảo luận ở Vòng 1 và sau mỗi vòng chuyển tiếp (Intermission).
  - Từng người chơi còn sống lần lượt cầm điện thoại riêng tư với màn che bảo mật (`#night-curtain-box`).
  - Khi người chơi chạm "Mở mắt hành động", giao diện hiển thị danh tính bí mật và form kích hoạt kỹ năng tương ứng với vai trò của họ:
    - **Thám Tử**: Chọn 1 người chơi để soi xem có thuộc phe Ác (Imposter) hay không.
    - **Bác Sĩ**: Tiêm huyết thanh bảo vệ 1 người chơi (hoặc bản thân) khỏi bị vote loại vòng này.
    - **Vệ Sĩ**: Chọn 1 người chơi để âm thầm bảo vệ thế mạng nếu họ bị loại.
    - **Kẻ Phá Hoại**: Kích hoạt cắt giảm 30s thời gian thảo luận của cả phòng.
    - **Gián Điệp**: Xem chữ cái đầu tiên của từ khóa phe Dân.
    - **Nhà Tiên Tri**: Xem cấu trúc số tiếng và số ký tự của từ khóa phe Dân.
    - **Bà Đồng**: Thỉnh cầu linh hồn người đã bị loại để biết vai trò và phe thật.
    - **Tin Tặc**: Hack giải mã dữ liệu hồ sơ để biết chính xác vai trò và phe của 1 người chơi.
    - **Phù Thủy**: Sử dụng Bình Cứu hoặc Bình Độc (nếu còn bình).
    - **Tắc Kè Hoa**: Xem 3 từ khóa ngụy trang an toàn.
    - **Dân Thường & Kẻ Giả Mạo**: Hiển thị thẻ ngủ đêm tự nhiên giúp toàn bộ người chơi đều cầm máy một khoảng thời gian tương đương, chống suy đoán thời gian cầm máy.
  - Sau khi người chơi cuối cùng hành động xong, Thẻ Bình Minh ("Trời Đã Sáng! ☀️") xuất hiện để cả phòng cùng mở mắt và bước vào phiên thảo luận.
  - **Tùy chọn Bật/Tắt linh hoạt (`gti_night_phase`)**:
    - Tích hợp công tắc chuyển đổi `#switch-night-phase` ở màn hình Cài đặt ván chơi (`#screen-setup`) và `#switch-night-phase-modal` trong Modal Cài đặt hệ thống, tự động đồng bộ thời gian thực qua `localStorage`.
    - Khi tắt công tắc: Game tự động bỏ qua giai đoạn Ban Đêm và chuyển thẳng vào phiên Thảo Luận; người chơi vẫn có thể mở Hộp công cụ kỹ năng thủ công khi cần.
    - Tự động bỏ qua thông minh: Nếu trong ván chỉ toàn Dân Thường và Imposter thuần (không có vai trò đêm chủ động), game tự động bỏ qua Ban Đêm để tránh làm chậm nhịp độ ván đấu.
    - Cung cấp nút "Bỏ qua đêm ›" (`#btn-skip-night-phase`) nhanh trên thanh tiêu đề ban đêm.

### 🎨 8. Tối Ưu Độ Tương Phản Màu Sắc Chế Độ Sáng (Light Mode Contrast Fixes)
- **Backnote**:
  - Khắc phục lỗi chữ trắng (`color: #fff`) bị chìm hoàn toàn trên nền sáng ở banner Giải đấu Party (`#setup-tournament-banner`), khiến số ván đã đấu và tên người dẫn đầu không đọc được.
  - Chuyển đổi các giá trị màu cố định sang biến màu nhận diện theo theme (`var(--text-primary)`, `var(--text-secondary)`, `var(--accent-amber)`):
    - **Chế độ Sáng (Light Mode)**: Số ván đấu hiển thị màu đen xám đậm (`#0f172a`), điểm/tên người dẫn đầu hiển thị màu hổ phách đậm (`#b45309`), tiêu đề banner màu vàng sẫm cao độ tương phản (`#b45309`), nền thẻ `#fffbeb` viền `#fde68a`.
    - **Chế độ Tối (Dark Mode)**: Duy trì độ sáng sắc nét với màu trắng sáng (`#f8fafc`) và vàng kim rực rỡ (`#f59e0b`).
  - Sửa các thẻ tiêu đề vai trò cố định (`card-fixed-roles`), danh sách chủ đề và lịch sử ván đấu để loại bỏ tình trạng chữ trắng trên nền sáng.

### 📉 9. Lưu Trữ & Hiển Thị Đầy Đủ Người Chơi Bị Âm Điểm Trên Bảng Xếp Hạng (Negative Scores on Leaderboard)
- **Backnote**:
  - Đảm bảo 100% người chơi nhận điểm phạt (điểm âm như -5đ, -10đ, -15đ do vote oan Dân làng, Imposter bị bắt vòng 1, hoặc phe Dân thua cuộc) được ghi nhận và lưu trữ vĩnh viễn trong `partyScores` (`gti_party_scores`).
  - **Banner Giải đấu (`#setup-tournament-banner`)**: Không còn lọc bỏ người chơi có điểm âm; tự động hiển thị song song cả người chơi **Dẫn đầu** (Top 1) và người chơi **Điểm âm / Đội sổ** (Lowest) để bảng thành tích minh bạch và phản ánh đúng thực tế.
  - **Modal Bảng Điểm Tích Lũy (`#modal-leaderboard`)**:
    - Hiển thị đầy đủ tất cả người chơi có điểm âm, với huy hiệu mũi tên đỏ `🔻` và thẻ điểm màu đỏ nổi bật (`-5 pts`, `-15 pts`).
    - Hàng của người chơi bị âm điểm được thêm hiệu ứng nền cảnh báo nhẹ (`.negative-score-row`).
    - Bổ sung quy tắc trừ điểm rõ ràng trong hộp hướng dẫn cách tính điểm giải đấu.
  - **Modal Chọn Người Chơi Từ BXH (`#modal-roster-picker`)**: Người chơi bị âm điểm vẫn được hiển thị với điểm số màu đỏ và có thể tick chọn vào ván mới bình thường để có cơ hội gỡ điểm.
  - **Huy hiệu liên kết hồ sơ người chơi (`#screen-players`)**: Khi nhập tên người chơi có điểm âm, huy hiệu tự động chuyển sang trạng thái cảnh báo đỏ `🔻 -X pts`.

---

## [2026-10-13] - Nâng Cấp Hệ Thống Giải Đấu & Trải Nghiệm Thảo Luận

### 🏆 1. Hệ Thống Giải Đấu & Bảng Xếp Hạng (Tournament & Party Scoring)
- **Backnote**:
  - Tích hợp tính điểm giải đấu tích lũy qua nhiều ván đấu.
  - Phạt phe Dân bầu sai (-5 điểm); phạt Imposter bị phát hiện ngay Vòng 1 (-15 điểm).
  - Khóa điểm tuyệt đối khi đổi tên người chơi để chống gian lận.
  - Cho phép chọn danh sách người chơi nhanh từ BXH (Roster Picker).

### 🎡 2. Vòng Quay May Mắn (Lucky Roulette) & Bộ Đếm Thời Gian Từng Người
- **Backnote**:
  - Thêm vòng quay Canvas quay ngẫu nhiên người mở màn cuộc thảo luận.
  - Đồng hồ đếm ngược thảo luận chung kết hợp đồng hồ phát biểu cho từng cá nhân (Speech Timer HUD).
