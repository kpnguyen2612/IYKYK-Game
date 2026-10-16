# 📝 NHẬT KÝ CẬP NHẬT & BACKNOTES (CHANGELOG)

Tài liệu này lưu trữ toàn bộ các ghi chú thay đổi (backnotes) cho từng lần cập nhật và đẩy mã nguồn lên GitHub của dự án **Faker (Guess The Imposter)**.

---

## 📌 Quy Tắc Triển Khai (Deployment Policy)
- **Kiểm tra trước khi đẩy**: Mọi tính năng và thành phần (UI, State, Timers, Role logic, Console) phải được kiểm thử toàn diện trên trình duyệt trước khi push.
- **Không tự động push (No Auto-Push)**: Chỉ thực hiện `git push` khi người dùng yêu cầu trực tiếp.
- **Bắt buộc ghi Backnote**: Mỗi lần cập nhật đẩy lên GitHub đều phải ghi nhận chi tiết thay đổi vào tài liệu này và commit message.

---

## [2026-10-16] - Khắc Phục Lỗi Thông Báo Toast & Tạo Mã QR Donate Luôn Bị Cố Định 60.000đ

### 🎯 1. Nguyên Nhân Sự Cố
- Trước đó, nút cam **`Tạo QR`** (`#btn-apply-group-split`) vẫn giữ mã nguồn cũ của chức năng "Ủng hộ theo nhóm". Khi bấm nút này, hệ thống luôn tự động tính `số người chơi × 10.000đ = 60.000đ`, bỏ chọn các chip người dùng đã bấm và luôn hiển thị thông báo cố định: `🎯 Đã tạo QR ủng hộ nhóm: 60.000đ`.
- Các nút chọn mức ủng hộ nhanh (Tùy tâm, 10k, 20k, 50k, 100k) khi bấm chưa hiển thị thông báo toast xác nhận riêng, khiến người dùng bấm tiếp nút "Tạo QR" và bị ghi đè thành 60k.

### 🛠️ 2. Giải Pháp Hoàn Thiện
- **Đồng bộ hóa 100% lựa chọn**: Thêm hàm điều phối `applySelectedDonateOption` lưu trữ `selectedDonateAmount` và `selectedDonateLabel`.
- **Đồng bộ tiêu đề phụ khi mở modal & khi bấm chip (`#donate-active-amount-label`)**:
  - Khi mở Modal: Mặc định hiển thị chuẩn xác `Tùy tâm 💝` (hoặc chip đang chọn), tuyệt đối không bị kẹt ở nhãn cũ `Nhóm 6 người (60.000đ)`.
  - Khi bấm bất kỳ mức nào (10k, 20k, 50k, 100k, Tùy tâm, Cả nhóm): Tiêu đề phụ cạnh *"✨ Chọn nhanh mức ủng hộ:"* đổi ngay lập tức thành đúng tên và số tiền của lựa chọn đó (ví dụ: `50k (Cà phê ☕)`).
- **Phản hồi tức thì khi bấm chip**: Khi chọn bất kỳ mức nào, hệ thống:
  - Cập nhật mã QR tức thì theo số tiền tương ứng.
  - Cập nhật text trên nút cam: `Tạo QR (50.000đ)`.
  - Hiển thị Toast thông báo ngắn gọn, thanh lịch, xóa bỏ hoàn toàn hiện tượng lặp số tiền hay ngoặc kép lồng nhau: ví dụ `🎯 Đã tạo mã QR: 100.000đ (Bữa trưa 🍱)` thay vì `100.000đ (100k (Bữa trưa 🍱 ))`.
  - Mức tùy tâm hiển thị: `🎯 Đã tạo mã QR: Tùy tâm 💝`.
- **Nút "Tạo QR" chuẩn xác**: Bấm nút "Tạo QR" sẽ luôn lấy đúng mức tiền đang được chọn thay vì ép buộc thành 60k.
- **Xóa bỏ hoàn toàn nút / tùy chọn "Cả nhóm"**: Loại bỏ chip "Cả nhóm 👥" và toàn bộ logic liên quan, giữ lại 5 mức ủng hộ cá nhân trực quan, rõ ràng và tinh gọn (Tùy tâm 💝, 10k, 20k, 50k, 100k).

---

## [2026-10-16] - Xây Dựng Hoàn Thiện Vai Trò Dự Bị (Thám Tử, Bác Sĩ, Thị Trưởng) - Chưa Public Lên App

### 🔍 1. Thám Tử (Detective - Phe Dân)
- **Cấu trúc dữ liệu**: `UPCOMING_ROLES[0]` trong `data_roles.js` (`enabled: false, isPublic: false`).
- **Kỹ năng**: Điều tra danh tính người chơi khác (soi phe Dân / phe Ác). Kích hoạt thông qua Hộp Công Cụ Ban Ngày hoặc Ban Đêm bí mật. Soi trúng phe Ác (Imposter/Traitor) nhận thưởng ngay `+5 điểm` trong ván.
- **Điều kiện thắng/thua**: Phe Dân thắng (+10đ; còn sống vote đúng +5đ/kẻ). Soi trúng phe Ác: +5đ/lần. Thua ván: -5đ.

### 💉 2. Bác Sĩ (Doctor - Phe Dân)
- **Cấu trúc dữ liệu**: `UPCOMING_ROLES[1]` trong `data_roles.js` (`enabled: false, isPublic: false`).
- **Kỹ năng**: Tiêm huyết thanh bảo hộ / đặt Khiên Bảo Vệ cho 1 người (kể cả bản thân). Nếu người đó bị cả làng vote loại, án tử được hóa giải ngay, không ai bị loại và Bác Sĩ nhận thưởng ngay `+10 điểm`.
- **Điều kiện thắng/thua**: Phe Dân thắng (+10đ; còn sống vote đúng +5đ/kẻ). Cứu sống thành công: +10đ/lần. Thua ván: -5đ.

### 👑 3. Thị Trưởng (Mayor - Phe Dân)
- **Cấu trúc dữ liệu**: `UPCOMING_ROLES[2]` trong `data_roles.js` (`enabled: false, isPublic: false`).
- **Kỹ năng**: Lá phiếu biểu quyết có giá trị x2 khi bỏ phiếu trục xuất nghi phạm (hiển thị huy hiệu `👑 x2 Phiếu` trên thẻ biểu quyết).
- **Điều kiện thắng/thua**: Phe Dân thắng (+10đ; còn sống vote đúng +5đ/kẻ). Thua ván: -5đ.

### 🔒 4. Trạng Thái Ngầm & Cách Thức Kích Hoạt (Dormant Logic)
- **Không gây nhiễu giao diện live**: Danh sách vai trò mặc định đang hiển thị trên app vẫn giữ chuẩn 7 vai trò cốt lõi (`DEFAULT_ROLES`, filter chip `Tất cả (7)`).
- **Sẵn sàng kích hoạt**: Toàn bộ logic hook đã cài đặt sẵn trong `app.js` (Hộp công cụ, Khiên bảo vệ, Soi danh tính, Huy hiệu Thị trưởng, Thưởng điểm hành động). Khi muốn public, chỉ cần chuyển từ `UPCOMING_ROLES` sang `DEFAULT_ROLES`.

---

## [2026-10-16] - Tạm Ẩn Chế Độ Ban Đêm & Công Tắc Màn Đêm Để Trải Nghiệm Game Cơ Bản, Tinh Gọn

### 🌙 1. Tạm Ẩn Giao Diện Công Tắc Ban Đêm
- **Màn hình Cài đặt (`#screen-setup`)**: Ẩn mục chuyển đổi `#row-night-phase` ("Chế độ Ban Đêm bí mật").
- **Modal Cài đặt hệ thống (`#modal-settings`)**: Ẩn mục chuyển đổi `#row-night-phase-modal`.
- Giao diện cài đặt trở nên gọn gàng, liền mạch, tập trung hoàn toàn vào các tùy chọn trải nghiệm cốt lõi (Vòng quay, Thời gian ván, Thời gian mỗi người, Gợi ý Imposter).

### ⚡ 2. Bỏ Qua Giai Đoạn Đêm & Tối Giản Tiến Trình Ván Đấu
- Khởi tạo `this.nightPhaseEnabled = false`.
- Trong `prepareRoundStart()`: Tự động bỏ qua giai đoạn Ban Đêm (`startNightPhase`), chuyển thẳng trực tiếp từ màn hình lật thẻ/vòng quay sang **Vòng Thảo Luận (`startDiscussionStage`)**.
- Trò chơi diễn ra nhanh chóng, thuần túy tính chất Party Game từ vựng suy luận, không rườm rà.

---

### 🍺 1. Bản Chất Mới Của Kẻ Say Rượu (Drunkard)
- **Thuộc Phe Dân chính thức**: Kẻ Say Rượu thuộc **Phe Dân** (`team: 'good'`), không còn là Trung Lập.
- **Manh mối / Từ ngữ**:
  - Nhận **từ của Gián Điệp** (từ đồng nghĩa trong cặp từ `this.imposterWord`).
  - Là **đối trọng trực diện của Gián Điệp**: Cả 2 cùng cầm chung một từ đồng nghĩa, nhưng một người thuộc Phe Dân (Kẻ Say) và một người thuộc Phe Trung Lập (Gián Điệp).
- **Thẻ lật**: Huy hiệu `[PHE DÂN]`, nhãn: `TỪ KHÓA CỦA BẠN (SAY RƯỢU 🍺): [Từ đồng nghĩa]`.

### 🛡️ 2. Cơ Chế "Bị Vote Không Sao Cả" & Miễn Phạt Toàn Diện
- **Khi Kẻ Say Rượu bị biểu quyết loại**:
  - Kẻ Say Rượu nhận: **0 điểm** (bảo toàn điểm, không bị phạt).
  - **Cả làng Phe Dân được MIỄN PHẠT vote oan sai**: Hoàn toàn không bị trừ -5 điểm trách nhiệm tập thể.
  - Thông báo hiển thị hài hước: *"Kẻ Say Rượu cầm nhầm từ do say xỉn, miễn trừ hình phạt oan sai cho cả làng!"*.
  - Ván chơi tiếp tục bình thường để tìm Kẻ Giả Mạo & Gián Điệp.
- **Quyền biểu quyết**: Kẻ Say Rượu vote đúng hay sai đều **0 điểm** (không nhận thưởng vote bắt kẻ ác, không bị trừ phạt vote oan).

### 🏆 3. Quy Tắc Tính Điểm Chuẩn Xác Theo Cơ Chế Đối Trọng
- **Khi Phe Dân Thắng**:
  - Kẻ Say Rượu **còn sống**: Nhận **+20 điểm** (thưởng lớn cho khả năng sinh tồn tài tình khi cầm từ lệch).
  - Kẻ Say Rượu **đã bị loại trước đó**: Nhận **+10 điểm** (hưởng trọn điểm thắng chung cuộc của Phe Dân).
- **Khi Gián Điệp Sống Sót Thắng Ván**: Kẻ Say Rượu bị **phạt trừ -10 điểm** (thất bại trước đối thủ truyền kiếp Gián Điệp).
- **Khi Kẻ Giả Mạo (Imposter) Thắng Ván**: Kẻ Say Rượu **không bị trừ điểm (0 điểm)**.
- **Khi Kẻ Ngu Thắng Ván**: Nhận **0 điểm** như toàn bộ người chơi khác.

---

### 🕵️ 1. Chuẩn Hóa Gián Điệp (Spy) Sang Phe Trung Lập
- **Chuyển phe chính thức**: Gián Điệp chuyển từ **Phe Ác** (`team: 'evil'`) sang **Phe Trung Lập** (`team: 'neutral'`).
  - Không còn là đồng minh của Kẻ Giả Mạo, không biết ai là Imposter hay Dân Thường.
  - Phù hiệu hiển thị: `[TRUNG LẬP]`.
- **Manh mối & Từ ngữ**:
  - Gián Điệp nhận **từ đồng nghĩa / từ cặp tương tự** trong cặp từ (`this.imposterWord`), khác với từ khóa chính của phe Dân (`this.secretWord`).
  - Trên thẻ lật hiển thị nhãn rõ ràng: `TỪ ĐỒNG NGHĨA TRONG CẶP:`.
  - Nhiệm vụ: Khéo léo miêu tả từ của mình sao cho vừa hòa nhập với phe Dân, vừa che giấu sự khác biệt tinh tế của từ đồng nghĩa để sống sót.

### 🏆 2. Điều Kiện Thắng & Tính Điểm Độc Lập (User Confirmed)
- **Thắng độc lập khi SỐNG SÓT đến cuối ván**: Nhận ngay **+20 điểm** (bất kể phe Dân hay Imposter thắng ván chung cuộc).
- **Khi bị biểu quyết loại**: Nhận **-10 điểm**.
- **Bỏ phiếu**: Biểu quyết đúng hay sai đều **0 điểm** (không được thưởng vote bắt Kẻ Ác, không bị trừ phạt vote oan Dân làng).

### ⚖️ 3. Đồng Bộ Toàn Bộ Logic Xử Lý Ván Chơi
- **`data_roles.js`**: Cập nhật `team: 'neutral'`, mô tả `desc_vi`, kỹ năng `ability_vi`, và điều kiện thắng `win_vi` (+20đ sống sót / -10đ bị loại / 0đ vote).
- **`app.js`**:
  - `showRevealStep`: Hiển thị nhãn `TỪ ĐỒNG NGHĨA TRONG CẶP:` với từ ngữ `imposterWord` phát sáng tím trung lập.
  - `submitVotingOutcome`: Khi Gián Điệp bị trục xuất, hiển thị thông báo thuộc **Phe Trung Lập (Gián Điệp)**. Ván chơi tiếp tục sang vòng sau nếu Kẻ Giả Mạo vẫn còn sống. Dân còn sống được tính thưởng +5đ bắt Kẻ Trung Lập.
  - `calculateMatchScores`: Xóa bỏ các nhánh Gián Điệp cũ trong Phe Ác; tích hợp tính điểm Gián Điệp Trung Lập độc lập (+20đ sống sót, -10đ bị loại, 0đ khi Kẻ Ngu thắng hoặc vote oan).
  - `openSpecialAbilityToolbox` & `showNightStep`: Đồng bộ hiển thị từ đồng nghĩa trong cặp.
- **`index.html`**: Cập nhật bảng tra cứu điểm số chi tiết (`#modal-deep-rules`): `🕵️ Gián Điệp (Spy - Trung Lập)` nhận +20đ / -10đ.
- **`ARCHITECTURE.md`**: Cập nhật bảng tra cứu tính năng theo vai trò Gián Điệp Trung Lập.

---

### 🎭 1. Loại Bỏ 5 Vai Trò Thừa & Chuẩn Hóa 7 Vai Trò Cốt Lõi
- **5 vai trò đã xóa hoàn toàn khỏi hệ thống**:
  - `mayor` (Thị Trưởng)
  - `doctor` (Bác Sĩ)
  - `detective` (Thám Tử)
  - `witch` (Phù Thủy)
  - `chameleon` (Tắc Kè Hoa)
- **7 vai trò cốt lõi chính thức (Core Roster)**:
  1. 👤 **Dân Thường** (`civilian` - Phe Dân): Nhận từ khóa bí mật, suy luận tìm Kẻ Giả Mạo & Kẻ Ngu.
  2. 🎭 **Kẻ Giả Mạo** (`imposter` - Phe Ác): Biết chủ đề nhưng không biết từ, hòa nhập và kích hoạt cơ chế Lật Kèo 30s khi bị bắt.
  3. 🕵️ **Gián Điệp** (`spy` - Phe Ác): Đồng minh của Imposter, nhận từ gợi ý của Imposter, bí mật ra hiệu và sống sót đến cuối ván (+25đ).
  4. 🗡️ **Kẻ Phản Bội** (`traitor` - Phe Ác): Phe Ác nhưng **biết từ khóa bí mật** của phe Dân để tung hỏa mù dẫn dắt dư luận chia rẽ (+15đ / -10đ).
  5. 🤪 **Kẻ Ngu** (`jester` - Trung Lập): Biết từ khóa bí mật, mục tiêu là bị cả làng vote loại để thắng độc lập (+30đ, người khác 0đ; không bị vote vẫn được 0đ).
  6. 🍺 **Kẻ Say Rượu** (`drunkard` - Trung Lập): Tưởng mình là Dân nhưng nhận từ khóa bị biến dạng nhẹ (+10đ / -5đ).
  7. 🎭 **Điệp Viên Hai Mang** (`double_agent` - Trung Lập): Biết ai là Kẻ Giả Mạo, thắng nếu Imposter sống sót hoặc là người sống cuối cùng (+15đ / -5đ).

### ⚙️ 2. Đồng Bộ Hóa Toàn Diện Logic & Giao Diện
- **`data_roles.js`**:
  - Dọn sạch 5 vai trò đã xóa khỏi `DEFAULT_ROLES`, cập nhật metadata và comment hệ thống 7 vai trò cốt lõi.
- **`app.js`**:
  - **Cân bằng tự động (`autoBalanceRoles`)**: Phân bổ linh hoạt theo bậc số lượng người chơi chỉ dùng các vai trò đang hoạt động (`spy`, `jester`, `traitor`, `drunkard`, `double_agent`).
  - **Quy trình Lật thẻ & Đêm (`showRevealStep`, `hasActiveNightRoles`, `showNightStep`)**:
    - Lược bỏ các màn hình lật thẻ phụ của Chameleon/Witch.
    - Giai đoạn Ban Đêm chỉ kích hoạt khi ván đấu có Gián Điệp (`spy`). Nếu không có Gián Điệp, hệ thống tự động bỏ qua Đêm chuyển thẳng sang Vòng Thảo Luận.
  - **Biểu quyết & Hộp công cụ (`renderVotingScreen`, `submitVotingOutcome`, `openSpecialAbilityToolbox`)**:
    - Lược bỏ phù hiệu và logic x2 phiếu của Thị Trưởng.
    - Lược bỏ kiểm tra khiên bảo vệ của Bác Sĩ và bình cứu của Phù Thủy khi tính kết quả loại người chơi.
    - Hộp công cụ năng lực bí mật (`#modal-special-toolbox`) tinh gọn phục vụ Gián Điệp.
  - **Tính điểm (`calculateMatchScores`)**: Loại bỏ toàn bộ các nhánh cộng/trừ điểm phụ của Witch, Detective, Doctor, Mayor.
  - **Cài đặt & Thông báo**: Cập nhật nhãn đếm vai trò `label-roles-preview`, thông báo bật tất cả vai trò sang số lượng động `this.roles.length` (7 vai trò cốt lõi & tự tạo).
- **`index.html`**:
  - Cập nhật filter chip vai trò: `Tất cả (7)`.
  - Cập nhật nhãn mặc định: `7 vai trò cốt lõi & tự tạo`.
  - Cập nhật bảng điểm chi tiết vai trò đặc biệt (`#modal-deep-rules`): Hiển thị chuẩn xác 5 vai trò đặc biệt còn lại kèm điểm số minh bạch.
- **`ARCHITECTURE.md`**: Cập nhật sơ đồ vai trò và bảng tra cứu tính năng theo 7 vai trò cốt lõi.

---

### 🤪 1. Logic Tính Điểm Chuẩn Thân Thiện & Cân Bằng (Option 2)
- **Quy tắc tính điểm Kẻ Ngu (Jester)**:
  - **Khi Kẻ Ngu bị cả làng vote loại (Thắng độc lập)**:
    - Kẻ Ngu bị loại nhận ngay **+30 điểm** (nâng từ +25đ lên +30đ cho chiến thắng lừa cả làng xuất sắc).
    - **Toàn bộ người chơi khác nhận 0 điểm** (Không bị phạt, không ai bị trừ điểm - giữ trọn bầu không khí vui vẻ cho buổi tiệc).
  - **Khi Kẻ Ngu không bị vote đến cuối ván (Phe Dân hoặc Imposter thắng)**:
    - Kẻ Ngu bảo toàn điểm số với **0 điểm** (hoàn toàn không bị trừ điểm).
  - **Hỗ trợ ván có nhiều Kẻ Ngu**: Chỉ Kẻ Ngu nào bị biểu quyết loại mới nhận +30đ, Kẻ Ngu chưa bị loại nhận 0đ.
- **Các thành phần được đồng bộ**:
  - `app.js`: Cập nhật thuật toán tính điểm ván `calculateMatchScores` (`this.winningTeam === 'jester'`).
  - `data_roles.js`: Đồng bộ thuộc tính `ability_vi`, `win_vi` và cho phép tối đa 2 Kẻ Ngu (`maxCount: 2`).
  - `index.html`: Đồng bộ bảng giải thích luật sâu sắc (`#modal-deep-rules`) và banner tóm tắt điểm giải đấu (`#modal-cumulative-leaderboard`).

---

## [2026-10-16] - Lược Bỏ Lựa Chọn "Cả Phe Dân" Khỏi Bảng Phạt Oan Sai (Logic Thân Phận Ẩn)

### ⚖️ 1. Chuẩn Hóa Logic Phạt Biểu Quyết Oan Sai
- **Vấn đề logic**: Trong trò chơi suy luận ẩn thân phận, khi một Dân thường vô tội bị vote loại nhầm, cả nhóm và quản trò **hoàn toàn không thể biết ai trong số những người còn sống là Dân, là Imposter hay Trung Lập**. Do đó, nút "👥 Cả phe Dân" là hoàn toàn phi thực tế và vô lý khi áp dụng trách nhiệm cho ván chơi.
- **Cải tiến & Khắc phục**:
  - **Lược bỏ 100% nút "👥 Cả phe Dân" (`#btn-penalty-team`)**: Không còn phân biệt phe khi phạt oan sai.
  - **Tinh gọn còn 2 lựa chọn chuẩn mực 100% logic thực tế**:
    1. **`🌐 Tất cả người sống`** (`#btn-penalty-all` - Mặc định): Trách nhiệm tập thể do cả nhóm đã biểu quyết theo số đông, tất cả người chơi còn sống đều chịu phạt -5 điểm.
    2. **`👆 Chọn người chỉ tay`** (`#btn-penalty-voters`): Chỉ phạt đích danh những người chơi cụ thể đã giơ tay/chỉ tay biểu quyết nhầm.
  - Tối ưu layout 2 nút cân đối (`grid-template-columns: 1fr 1fr`), font chữ rõ nét (11px).
  - Cập nhật logic tính điểm `this.pendingWrongVotePenaltyMode = 'all'` và đồng bộ câu chữ giải thích luật ở màn hình biểu quyết (`#screen-voting`) và modal thông báo ván.

---

## [2026-10-16] - Thiết Kế Lại Thẻ Sau Lật: Xóa Bỏ Hoàn Toàn Trùng Lặp Thông Tin

### 🎨 1. Tinh Gọn & Xóa Bỏ Trùng Lặp Thông Tin 3 Tầng
- **Vấn đề**: Thẻ sau khi lật (đặc biệt là Kẻ Giả Mạo) bị trùng lặp thông tin rối mắt ở 3 tầng:
  1. Tên vai trò đã ở Header (`Kẻ Giả Mạo`), nhưng trong hộp lại viết hoa: `BẠN LÀ KẺ GIẢ MẠO!`.
  2. Từ gợi ý lồng thêm chữ dài dòng: `Gợi ý của bạn: [từ]`.
  3. Dòng chủ đề bị nhồi nhét câu văn dài: `Chủ đề: [Tên] • Bạn luôn biết chủ đề! Hãy khéo léo nói về từ này để hòa nhập cùng phe Dân!`.
  4. Khối mô tả ở dưới lại lặp lại lần thứ ba: `Luôn biết chủ đề từ vựng. Hòa nhập và lừa Dân...`.
- **Cải tiến & Khắc phục**:
  - **Phân tầng thông tin 3 khối độc lập & mạch lạc**:
    - **Khối 1 (Header)**: Thể hiện Tôi là ai? (`[Phe Ác]`, `[⏱️ 30s]`, Icon `🎭`, Tên vai trò to rõ `Kẻ Giả Mạo`).
    - **Khối 2 (Hộp từ khóa trung tâm)**: Thể hiện Tôi nhận được manh mối gì để nói?
      - Tiêu đề nhãn: `TỪ GỢI Ý ĐỂ HÒA NHẬP:` (hoặc `TỪ KHÓA BÍ MẬT:` cho phe Dân).
      - Từ khóa/gợi ý hiển thị to bản, sắc nét (26px, phát sáng màu phe), không chứa tiền tố thừa.
      - Badge chủ đề dạng chip tinh tế: `Chủ đề: [Tên chủ đề]`.
    - **Khối 3 (Khung nhiệm vụ & kỹ năng - `.revealed-ability-box`)**: Có header icon `🎯 Nhiệm vụ & Kỹ năng:` và nội dung súc tích, không lặp lại bất kỳ câu chữ nào từ hộp từ khóa.
  - Tối ưu `ability_vi` của Kẻ Giả Mạo trong `data_roles.js` trực diện, gọn gàng.
  - Áp dụng nhất quán chuẩn giao diện này cho toàn bộ 12 vai trò (Dân Thường, Kẻ Giả Mạo, Kẻ Ngu, Gián Điệp, Tắc Kè Hoa, v.v.).

---

## [2026-10-16] - Đồng Bộ Kích Cỡ Thẻ Trước Lật & Sau Lật (Zero Layout Shift)

### 🎴 1. Đồng Nhất 100% Kích Thước Thẻ Trước & Sau Lật
- **Vấn đề trước đây**: Thẻ màn che bảo mật trước khi lật (`#reveal-curtain-box`) có chiều cao tự do chỉ đạt 337.5px và không có margin dọc, trong khi thẻ lật vai trò 3D (`#reveal-card-viewport`) có chiều cao cố định 480px kèm `margin: 10px 0 20px`. Khi người chơi bấm "Tôi đã cầm máy, lật thẻ" hoặc úp thẻ chuyền cho người tiếp theo, kích cỡ thẻ bị giật nhảy tới 142.5px.
- **Cải tiến & Khắc phục**:
  - Khóa đồng bộ kích thước chuẩn **360px × 480px** cho cả:
    1. Thẻ màn che trước khi lật (`.privacy-curtain-card`).
    2. Khung thẻ lật (`.flip-card-viewport`).
    3. Mặt trước khi chạm lật (`.flip-card-front`).
    4. Mặt sau khi hiển thị vai trò (`.flip-card-back`).
  - Thiết lập đồng bộ `margin: 10px 0 20px`, bo góc `var(--radius-xl)` và `box-sizing: border-box`.
  - Tái cấu trúc khối nội dung giữa `.curtain-middle-content` (nhãn chuyền điện thoại, tên người chơi, cảnh báo) và nút bấm ở đáy thẻ (`width: 100%`) với `justify-content: space-between`, tạo bố cục cân xứng hoàn hảo.
  - Triệt tiêu 100% hiện tượng co giật giao diện (Layout Shift = 0px), mang lại trải nghiệm chuyền điện thoại xem vai trò mượt mà, chuyên nghiệp.

---

## [2026-10-16] - Tự Động Chuyển Vòng Khi Hòa Phiếu & Nâng Cấp Che Giấu State (Anti-Cheat) + Hàm escapeHtml

### ⚖️ 1. Cơ Chế Hòa Phiếu Thông Minh (Tie-Vote Auto-Transition)
- Khi bấm **"Hòa phiếu / Bỏ qua vòng này"** (`#btn-skip-vote`) do số phiếu bằng nhau:
  - Hệ thống hiển thị hộp thông báo Action Notice trang trọng: **"⚖️ KẾT QUẢ: HÒA PHIẾU"** kèm giải thích rõ ràng **không ai bị loại**.
  - Tự động đếm ngược 2.8 giây chuyển mượt mà sang **Vòng Thảo Luận kế tiếp** (hoặc người chơi có thể bấm nút "Tiến vào Vòng thảo luận tiếp theo →" ngay tức thì).
  - Tăng số vòng (`roundNumber++`), làm mới các lượt bảo vệ/kỹ năng và khởi động vòng mới mà không làm treo game.

### 🛡️ 2. Nâng Cấp Che Giấu State & Chống Gian Lận (Anti-Cheat DevTools Protection)
- Đóng gói toàn bộ đối tượng instance của game (`activeGame`) trong phạm vi đóng kín (lexical closure).
- Thiết lập bẫy kiểm tra thông minh qua `Object.defineProperty`:
  - Nếu bất kỳ người chơi nào mở Console (F12) gõ `window.gameApp` hoặc `app.secretWord`, hệ thống sẽ chặn đứng việc đọc biến trần, in ra cảnh báo đỏ: `⚠️ [ANTI-CHEAT] Phát hiện hành vi mở DevTools tra cứu biến game!`.
  - Trả về dữ liệu ngụy trang (`🔒 [ĐÃ MÃ HÓA BẢO VỆ]`), giấu kín hoàn toàn thân phận Imposter và từ khóa bí mật.

### 🔤 3. Bổ Sung Hàm `escapeHtml()` Chống XSS
- Thêm phương thức `escapeHtml(str)` dùng để khử toàn bộ ký tự đặc biệt (`&`, `<`, `>`, `"`, `'`) của tên người chơi và dữ liệu tự tạo khi render động vào HTML template.
- Triệt tiêu 100% rủi ro tiêm mã độc hoặc lỗi vỡ giao diện khi người chơi nhập tên có chứa dấu ngoặc nhọn hoặc dấu nháy kép.

---

## [2026-10-16] - Loại Bỏ 100% Logo "v" Khỏi Mã QR & Xây Dựng Modal Ủng Hộ (Donate) Sang Trọng

### 🎁 1. Xóa Bỏ Logo "v" Khỏi Mã QR Code (100% Unobstructed Scan)
- **Vấn đề**: Mã QR từ mẫu VietQR mặc định có chèn logo biểu tượng hình chữ "v" (trái tim Napas/VietQR) ở chính giữa tâm mã, khiến camera của nhiều ứng dụng ngân hàng bị cản trở ma trận dữ liệu và không thể nhận diện thanh toán.
- **Khắc phục**:
  - Trích xuất chuỗi mã hóa EMVCo chuẩn mực của Napas 247: `00020101021138540010A00000072701240006970407011099648238760208QRIBFTTA53037045802VN63047ACD`.
  - Tái tạo mã QR độ phân giải cao (600x600, margin 20px) **hoàn toàn sạch 100%, không chứa bất kỳ logo che khuất nào ở tâm**, đảm bảo 100% ứng dụng ngân hàng và ví điện tử quét chuyển khoản thành công trong 1 giây.

### 🎀 2. Icon Hộp Quà (🎁) Trên Header & Điều Hướng
- Bổ sung nút **Hộp quà (`🎁`)** (`#btn-open-donate`) tại vị trí đầu tiên của cụm điều khiển góc phải (`.control-group-right`), đứng trước nút Luật chơi (`❓`) và Cài đặt (`⚙️`), đồng thời giữ nút Cúp Bảng xếp hạng (`🏆`) ở phía tay trái (`.control-group-left`).
- Hiệu ứng viền vàng hổ phách phát sáng nhẹ (`.pulse-gift-btn`) với hiệu ứng hover và click mượt mà.

### ☕ 3. Xây Dựng Modal Thông Tin Ủng Hộ Dự Án (Techcombank)
- **Tối Giản Thẻ QR - Chỉ Giữ Logo Techcombank**:
  - Tích hợp trực tiếp logo nhận diện chính thức của **Techcombank** (`techcombank_logo.png`) đặt trang trọng phía trên mã QR, căn chỉnh kích thước lớn rõ nét và cân đối.
  - Lược bỏ hoàn toàn các dòng text thừa, rườm rà xung quanh khung mã QR, giữ cho khung thẻ thanh toán tối giản, sang trọng và chuẩn mực ngân hàng.
- **Giao diện Modal Bottom Sheet cao cấp (`#modal-donate`)**:
  - Khung thẻ mã QR viền trắng sắc nét, tương phản tối đa cho camera điện thoại quét.
  - Khối chi tiết tài khoản thụ hưởng:
    - **Ngân hàng**: Techcombank (TCB)
    - **Chủ tài khoản**: VU BAO NGUYEN
    - **Số tài khoản**: 9964823876
    - **Nội dung chuyển khoản**: Faker Party
  - Nút **[ 📋 Sao chép STK ]** và **[ 📋 Sao chép Nội dung ]** tiện lợi: Tự động sao chép vào clipboard và đổi trạng thái sang `✓ Đã chép!` kèm thông báo Toast.
  - **Tối giản cấu trúc**: Loại bỏ 2 nút "Bổ sung số tiền" và "Chia tiền" không cần thiết, chuyển thẳng tới các chip gợi ý mức ủng hộ (Tùy tâm, 10k, 20k, 50k, 100k) và nút **Tạo QR**.

---

## [2026-10-16] - Xóa Bỏ Hoàn Toàn 7 Vai Trò Dư Thừa & Tinh Gọn Hệ Thống Còn 12 Vai Trò Cốt Lõi

### 🧹 1. Xóa Bỏ Dữ Liệu & Logic 7 Vai Trò:
- **7 Vai trò bị loại bỏ hoàn toàn**:
  1. 🕯️ **Bà Đồng (Medium)** (`medium`): Giao tiếp linh hồn người bị loại.
  2. 💻 **Tin Tặc (Hacker)** (`hacker`): Hack đột nhập dữ liệu giải mã vai trò.
  3. ⚖️ **Thẩm Phán (Judge)** (`judge`): Quyền phủ quyết (veto) hủy án trục xuất.
  4. 🔮 **Nhà Tiên Tri (Seer)** (`seer`): Xem cấu trúc số tiếng và số ký tự.
  5. 🛡️ **Vệ Sĩ (Bodyguard)** (`bodyguard`): Âm thầm theo sát và hy sinh thế mạng.
  6. 🤐 **Kẻ Câm Lặng (Mime)** (`mime`): Giới hạn phát biểu tối đa 1 từ.
  7. 💣 **Kẻ Gây Rối / Phá Hoại (Saboteur)** (`saboteur`): Cắt giảm 30s thời gian thảo luận.
- **12 Vai trò cốt lõi còn lại**:
  - **Phe Dân (Good)**: Dân Thường, Thám Tử, Bác Sĩ, Thị Trưởng, Kẻ Say Rượu.
  - **Phe Ác (Evil)**: Kẻ Giả Mạo, Gián Điệp, Kẻ Phản Bội, Tắc Kè Hoa.
  - **Phe Trung Lập (Neutral)**: Kẻ Ngu (Jester), Phù Thủy (Witch), Điệp Viên Hai Mang (Double Agent).

### ⚙️ 2. Dọn Dẹp Logic Trong Mã Nguồn:
- **`data_roles.js`**: Loại bỏ toàn bộ định nghĩa đối tượng của 7 vai trò khỏi `DEFAULT_ROLES`.
- **`app.js`**:
  - Dọn sạch các thuộc tính trạng thái liên quan trong constructor và `startMatchSession`: `bodyguardProtectedPlayerId`, `bodyguardProtectedMap`, `bodyguardSacrifices`, `judgeVetoUsed`, `judgeVetoSavedPlayerId`.
  - Cập nhật thuật toán cân bằng vai trò `autoBalanceRoles`: Thay thế vai trò dự phòng `seer` bằng `mayor`.
  - Dọn sạch logic hiển thị thẻ bài bí mật `renderCardSecretInfo`: Bỏ các nhánh của 7 vai trò, giữ lại nguyên vẹn `witch` và các vai trò còn lại.
  - Tinh gọn thứ tự phát biểu `renderSpeakingOrder`: Bỏ badge giới hạn của `mime`.
  - Cập nhật danh sách vai trò hành động ban đêm `hasActiveNightRoles`: Chỉ còn lại `detective`, `doctor`, `spy`, `witch`, `chameleon`.
  - Dọn dẹp thẻ hành động ban đêm `renderNightRoleActionCard`: Bỏ toàn bộ các case của `bodyguard`, `saboteur`, `seer`, `medium`, `hacker`.
  - Dọn dẹp quy trình biểu quyết `submitVotingOutcome`: Bỏ kiểm tra quyền phủ quyết của Thẩm Phán và đỡ đòn hy sinh của Vệ Sĩ.
  - Dọn dẹp tính điểm `calculateMatchScores`: Bỏ điểm thưởng hy sinh Vệ Sĩ (+10đ) và phủ quyết Thẩm Phán (+5đ).
  - Dọn dẹp Hộp công cụ ban ngày `openSpecialAbilityToolbox`: Bỏ các thẻ kỹ năng của Vệ Sĩ, Phá Hoại, Tiên Tri, Bà Đồng, Tin Tặc, Thẩm Phán.
- **`index.html`**: Cập nhật bảng luật chơi chi tiết (`#modal-deep-rules`), gỡ bỏ dòng thưởng/phạt và tên của các vai trò đã xóa.
- **`ARCHITECTURE.md`**: Đồng bộ tài liệu kiến trúc sang 12 vai trò đặc biệt.

---

## [2026-10-16] - Cho Phép Tất Cả Người Chơi Vote & Tùy Chọn Phạt Oan Sai Toàn Diện

### 🗳️ 1. Cho Phép Tất Cả Người Chơi Còn Sống Xuất Hiện Trong Danh Sách Vote Oan
- **Hiện tượng trước đây**: Khi Dân thường bị biểu quyết loại nhầm, danh sách "Chọn người đã chỉ tay" chỉ lọc và hiển thị người chơi phe Dân (`team === 'good'`), ẩn hoàn toàn Imposter và các vai trò khác (như trong ảnh chụp: ván 6 người loại 1 Dân còn 5 người, nhưng chỉ hiển thị 4 Dân, thiếu mất 1 Imposter).
- **Cải tiến & Khắc phục**:
  - Mở rộng danh sách: Hiển thị **toàn bộ tất cả người chơi còn sống** (`this.players.filter(p => !p.isEliminated)`), không phân biệt phe Dân, Imposter hay Trung Lập, cho phép quản trò tự do chọn bất kỳ ai trong nhóm đã chỉ tay vote oan.
  - Bổ sung 3 chế độ linh hoạt:
    1. `👥 Cả phe Dân`: Áp dụng trách nhiệm tập thể cho toàn bộ Dân còn sống.
    2. `🌐 Tất cả người sống`: Áp dụng phạt -5đ cho toàn bộ người chơi còn sống tham gia vote.
    3. `👆 Chọn người chỉ tay`: Tự do chọn lọc từng người chơi cụ thể.
  - Bổ sung 2 nút thao tác nhanh: **[ ✓ Chọn tất cả ]** và **[ ✕ Bỏ chọn ]** giúp quản trò thao tác chỉ với 1 chạm.

---

## [2026-10-16] - Sửa Lỗi Đồng Bộ Trạng Thái Toggle & Tái Cấu Trúc Giao Diện Thẻ Vai Trò

### 🎛️ 1. Sửa Lỗi Bật/Tắt Switch Nhưng Badge Không Đổi (Role Toggle Sync Fix)
- **Hiện tượng**: Khi người dùng gạt công tắc switch sang ON (màu cam), nhãn badge trạng thái vẫn bị kẹt ở `⛔ ĐÃ TẮT`, khiến người dùng nghĩ vai trò chưa được đưa vào vòng quay game.
- **Nguyên nhân**: Thẻ badge trạng thái bị render tĩnh trong `innerHTML`, listener `toggle.addEventListener('change')` và bộ đếm `+` / `-` không cập nhật lại DOM của badge.
- **Khắc phục**:
  - Tạo hàm `getRoleStatusBadgeHtml(role)` và `updateRoleCardBadges(card, role)` để tự động cập nhật ngay lập tức:
    - Khi Bật (ON): Badge chuyển sang `🎲 Trong vòng quay ngẫu nhiên` (màu tím neon) hoặc `📌 Cố định` nếu đang ghim.
    - Khi Tắt (OFF): Badge chuyển sang `⛔ Đã tắt` (màu xám).
  - Tự động đồng bộ số lượng (`role.count`) và hủy ghim cố định nếu người dùng tắt vai trò.
  - Lưu và khôi phục vị trí cuộn trang (`container.scrollTop`) khi re-render để không bị nhảy màn hình.

### 📐 2. Sửa Lỗi Lệch Giao Diện Header Thẻ Vai Trò (Layout Cramping Fix)
- **Hiện tượng**: Phần chữ "Điều kiện thắng & Điểm" rất dài (hơn 130 ký tự) bị chèn trực tiếp vào `.role-title-team` ngay trong `.role-header-line`, làm dòng chữ bị ép ngang và đè sát vào công tắc toggle bên phải, gây méo mó xô lệch toàn bộ phần đầu thẻ.
- **Khắc phục**:
  - Tách nội dung điều kiện thắng ra khỏi header, chuyển thành khối riêng `.role-win-pill` (icon 🏆 màu vàng hổ phách sang trọng) nằm dưới phần kỹ năng (`.role-ability-pill`).
  - Chuẩn hóa CSS `.role-header-line`, `.role-id-badge`, `.role-title-team`, `.role-title-tags` với `flex: 1; min-width: 0;` và công tắc switch cố định `flex-shrink: 0;`, đảm bảo giao diện luôn thoáng đãng, sắc nét trên cả desktop lẫn mobile.

---

## [2026-10-16] - Cải Tổ Logic Trò Chơi: Kẻ Ngu, Gián Điệp, Imposter Luôn Biết Chủ Đề & Nút "Tiếp tục chơi"

### 🔄 1. Cập Nhật Ngữ Cảnh Nút Thao Tác: "Tiếp Tục Chơi" (Play Again CTA)
- Đổi nhãn nút chính màu cam/đỏ gradient tại màn hình kết quả ván từ **"Chơi lại ván mới"** thành **"Tiếp tục chơi"** (`btn_play_again`), đồng bộ trên giao diện `index.html`, từ điển controller `app.js` và tài liệu kiến trúc `ARCHITECTURE.md`.

### 🎭 2. Kẻ Giả Mạo (Imposter) Luôn Biết Chủ Đề
- Chuẩn hóa hiển thị khi lật thẻ: Imposter **luôn luôn biết chủ đề** (`Chủ đề: [Tên chủ đề]`) trong mọi trường hợp, bất kể bật hay tắt từ gợi ý phụ (`hintsEnabled`), giúp Imposter tự tin dẫn dắt và trà trộn.

### 🕵️ 3. Xóa Bỏ Kẻ Sống Sót, Thay Thế Bằng Gián Điệp (Spy)
- **Định vị vai trò**: Phe Ác (`team: 'evil'`), đồng minh đắc lực của Imposter.
- **Từ khóa**: Nhận từ của Imposter (`this.imposterWord`) để cùng trà trộn và nói khớp ý với Imposter.
- **Biểu quyết**: Bỏ phiếu vote đúng hay sai đều **không tăng giảm điểm** (0đ vote).
- **Hệ thống điểm**:
  - Phe Ác thắng ván: **+25 điểm**.
  - Bị trục xuất / chết: **-10 điểm**.
- **Xử lý khi bị trục xuất**: Khi Gián Điệp bị cả làng vote loại, thông báo vạch mặt Gián Điệp hiển thị, Gián Điệp bị trừ 10 điểm; ván chơi tiếp tục nếu Kẻ Giả Mạo chính vẫn còn sống (không kích hoạt màn đoán lật kèo).
- **Hộp công cụ ban ngày & Đêm**: Cung cấp chức năng "Xem lại từ của Imposter".
- **Xóa bỏ triệt để**: Xóa toàn bộ logic, định nghĩa và hiển thị của Kẻ Sống Sót (`survivor`) trên toàn bộ ứng dụng.

### 🤪 4. Đổi Thằng Hề Thành Kẻ Ngu (Jester)
- **Định vị vai trò**: Phe Trung Lập (`team: 'neutral'`), tên gọi **Kẻ Ngu**, icon `🤪`.
- **Từ khóa**: **Biết từ khóa bí mật** (`knowsKeyword: true`, hiển thị `this.secretWord` khi lật thẻ).
- **Mục tiêu**: Lừa cả làng nghi ngờ mình là Imposter để bị bỏ phiếu trục xuất.
- **Biểu quyết**: Vote đúng hay sai đều **không tăng giảm điểm** (0đ vote).
- **Hệ thống điểm**:
  - Bị cả làng vote loại: **Chiến thắng độc lập nhận +25 điểm** (tất cả người chơi khác bị lừa trừ -5 điểm).
  - Không bị vote loại (thất bại): **Không bị trừ điểm (0 điểm)**, không bị phạt -5đ như trước.

### 📖 5. Đồng Bộ Bảng Luật Chơi & Điểm Số
- Cập nhật chi tiết Bảng Luật Chơi Chi Tiết (`#modal-deep-rules`) và Box Gợi Ý BXH: ghi nhận chuẩn mực điểm số của Kẻ Ngu (+25đ / 0đ) và Gián Điệp (+25đ / -10đ / 0đ vote).

### 📌 6. Thiết Kế Lại Các Mốc Giới Hạn Slot Vai Trò Cố Định (Fixed Role Slots)
- Cập nhật logic `getMaxSpecialAllowed` và `getRecommendedSpecialCount` chuẩn xác theo các mốc số lượng người chơi:
  - **1 - 4 người chơi**: Tối đa **1 vai trò cố định** (1 slot).
  - **5 - 7 người chơi**: Tối đa **2 slot vai trò cố định** (2 slot).
  - **8 - 11 người chơi**: Tối đa **3 vai trò cố định** (3 slot).
  - **12 - 15 người chơi**: Tối đa **4 vai trò cố định** (4 slot).
  - **16 - 20 người chơi**: Tối đa **5 vai trò cố định** (5 slot).
- Đồng bộ hóa mượt mà: khi người chơi thay đổi số lượng người trong phòng (stepper tăng/giảm hoặc thêm/xóa người chơi), hệ thống tự động cập nhật slot, trim các vai trò cố định dư thừa nếu số người chơi giảm xuống, và hiển thị tức thì trên banner và Modal Chọn Vai Trò Cố Định.

### 🔮 7. Nâng Cấp Nút "Bắt Đầu Thiết Lập Người Chơi" Phong Cách Liquid Glass & Cố Định Đáy Khi Lướt
- **Luôn luôn hiển thị cố định ở đáy (Persistent Floating Dock)**: Nút được neo trực tiếp tại đáy màn hình (`position: fixed; bottom: max(16px, env(safe-area-inset-bottom)); left: 50%; transform: translateX(-50%);`), xuất hiện ngay từ khi ở đỉnh trang và giữ nguyên vị trí trong suốt quá trình người dùng lướt lên lướt xuống.
- **Hiệu ứng Kính Lỏng (Liquid Glass) Cao Cấp**:
  - Khay dock kính mờ (`.liquid-glass-dock`) với `backdrop-filter: blur(24px) saturate(200%)` khúc xạ ánh sáng mượt mà từ các nội dung cuộn bên dưới.
  - Thấu kính cong phản chiếu ánh sáng thủy tinh (`::before` specular highlight).
  - Vệt sáng phản quang lướt nhẹ (`::after` shimmer animation).
  - Icon `🚀` lồng trong viên ngọc kính tròn ("Button-in-Button" theo chuẩn Awwwards).
  - Bổ sung khoảng đệm an toàn `padding-bottom: 96px` cho `#screen-setup` để không che khuất bất kỳ tùy chọn nào ở cuối trang.

### ⚖️ 8. Loại Bỏ Hình Phạt (-3đ) Lật Kèo Cho Phe Dân & Loại Bỏ (+2đ/lần) Lừa Dân Cho Imposter
- **Xóa bỏ hình phạt `-3 điểm` cho Dân**: Khi Imposter đoán trúng từ khóa ở cơ hội Lật Kèo, phe Dân chỉ chịu phạt thua trận (`-5 điểm`), không còn bị trừ thêm `-3 điểm` vì lý do làm lộ từ khóa.
- **Xóa bỏ thưởng `+2đ / lần lừa Dân vote oan` cho Imposter**: Khi Kẻ Giả Mạo sống sót thắng ván, điểm số được cố định chuẩn mực là `+15 điểm`, không còn cộng dồn thưởng lừa Dân vote nhầm.
- **Đồng bộ hóa 100%**: Cập nhật logic tính điểm `calculateRoundScores` và dòng ghi chú diễn biến ván trong `app.js`, định nghĩa vai trò trong `data_roles.js`, và bảng điểm thưởng/phạt trong Modal Luật Chơi (`index.html`).

### 🎯 9. Thưởng +5 Điểm Khi Đoán Trúng Phe Giả Mạo & Trung Lập (Lũy Kế Nếu Có Nhiều Kẻ)
- **Quy tắc mới**: Phe Dân còn sống (`!p.isEliminated`) khi bỏ phiếu trục xuất thành công người chơi thuộc **Phe Giả Mạo / Phe Ác** (`team: 'evil'` như Kẻ Giả Mạo, Gián Điệp, Kẻ Phản Bội, Kẻ Gây Rối, Tắc Kè Hoa) hoặc **Phe Trung Lập** (`team: 'neutral'` như Kẻ Ngu, Phù Thủy, Điệp Viên Hai Mang) sẽ nhận ngay **+5 điểm / kẻ**.
- **Cơ chế Lũy kế (Cumulative Scaling)**:
  - Bắt 1 kẻ: nhận **+5 điểm**.
  - Bắt 2 kẻ: nhận **+10 điểm** (5đ × 2).
  - Bắt 3 kẻ: nhận **+15 điểm** (5đ × 3).
- **Áp dụng toàn diện trong mọi kịch bản kết thúc ván**:
  - Khi Phe Dân thắng: Dân còn sống nhận `+10đ` thắng ván cộng thêm `+5đ / kẻ` (tổng từ `+15đ` đến `+25đ...`).
  - Khi Phe Ác thắng hoặc Kẻ Ngu thắng: Dân còn sống vẫn được bảo toàn phần thưởng lũy kế `+5đ / kẻ` cho những kẻ mà họ đã sáng suốt vote loại trước đó.
- **Đồng bộ giao diện & dữ liệu**:
  - Cập nhật dòng quy tắc tại Modal Luật Chơi Chi Tiết (`#modal-deep-rules`): `"🎯 Phe Dân còn sống vote đúng Kẻ Giả Mạo & Trung Lập: +5 điểm / kẻ (Lũy kế nếu có nhiều kẻ)"`.
  - Cập nhật Box gợi ý hệ thống điểm Party Leaderboard (`#modal-cumulative-leaderboard`): `"• Bắt Kẻ Giả Mạo & Trung Lập: +5đ/kẻ (Lũy kế)"`.
  - Cập nhật mô tả kỹ năng (`ability_vi`) và điều kiện thắng (`win_vi`) của tất cả các vai trò phe Dân trong `data_roles.js`.
  - Bổ sung xử lý khi người chơi phe Trung Lập (Phù Thủy, Điệp Viên...) bị trục xuất: không bị áp đặt phạt nhầm Dân làng vô tội (`p.penalty`), hiển thị thông báo vạch mặt chuẩn xác và chuyển vòng kế tiếp nếu còn Imposter.

### 🛡️ 10. Chống Lộ Vai Trò Khi Lật Thẻ & Bổ Sung Timer 30s Viền Chạy Quanh Thẻ
- **Khắc phục triệt để lỗi lộ vai trò khi người chơi chỉ úp lại thẻ**:
  - Trước đây: nếu người chơi không ấn "Đã nhớ, giấu vai trò" mà chỉ chạm để úp thẻ lại, hệ thống vẫn giữ nguyên thẻ của người đó ở mặt úp; khi người kế tiếp nhận máy chạm mở thẻ sẽ bị nhìn thấy vai trò của người trước.
  - Cải tiến: khi thẻ đang mở xem vai trò, **bất kể người chơi ấn nút "Đã nhớ, giấu vai trò" HOẶC chạm bất kỳ đâu vào thẻ để úp lại**, hệ thống đều lập tức giấu vai trò và kích hoạt hiệu ứng úp thẻ, sau đó **tự động chuyển sang Màn Che Quyền Riêng Tư** ("Chuyền điện thoại cho: [Người tiếp theo]"). Người sau bắt buộc phải xác nhận "Tôi đã cầm máy, lật thẻ" mới thấy thẻ của chính mình, đảm bảo tuyệt đối không bao giờ bị lộ vai trò.
- **Thời gian cố định 30 giây xem vai trò (Fixed 30s Timer)**:
  - Khi mở thẻ xem vai trò, bộ đếm thời gian 30s lập tức kích hoạt.
  - **Hoạt ảnh đường viền chạy quanh chu vi thẻ (`stroke-dashoffset`)**: Đường viền neon ánh sáng (theo màu phe/vai trò) chạy mượt mà bao quanh toàn bộ 4 cạnh và 4 góc bo tròn của thẻ, rút ngắn dần theo thời gian thực từ 100% về 0%.
  - Khi còn 5 giây cuối, viền và huy hiệu đếm ngược tự động chuyển sang chế độ cảnh báo nhấp nháy đỏ (`warning pulse`).
  - Khi hết 30 giây: hệ thống tự động phát âm thanh úp thẻ và chuyển sang màn che của người chơi kế tiếp, không bao giờ để mở thẻ quá lâu trên bàn chơi.
- **Huy hiệu đếm ngược trực quan**: Bổ sung `⏱️ 30s` (giảm dần từng giây) ngay tại thanh tiêu đề đầu thẻ lật.

### 🕵️ 11. Chuẩn Hóa Cơ Chế Gián Điệp: Không Có Khả Năng Đoán Từ Khi Bị Bắt, Chỉ Cố Gắng Sống Sót Đến Cuối
- **Quy tắc cốt lõi của Gián Điệp (`spy`)**:
  - **Không có quyền đoán từ lật kèo**: Khác với Imposter thường có 30 giây lật kèo đoán từ khi bị bỏ phiếu loại, Gián Điệp **hoàn toàn không có khả năng đoán từ** khi bị phát hiện. Nếu bị bỏ phiếu loại, Gián Điệp bị xử phạt `-10 điểm` ngay lập tức và bị loại khỏi ván đấu.
  - **Mục tiêu duy nhất**: Cố gắng sống sót đến cuối ván cùng Kẻ Giả Mạo để nhận trọn vẹn `+25 điểm` chiến thắng (nếu phe Ác thắng).
  - **Khi bị trục xuất**:
    - Nếu Kẻ Giả Mạo vẫn còn sống: Hệ thống hiển thị thông báo vạch mặt Gián Điệp và chuyển ván chơi sang vòng tiếp theo để phe Dân tiếp tục truy lùng Kẻ Giả Mạo còn lại.
    - Nếu Kẻ Giả Mạo đã bị loại trước đó: Vì Gián Điệp không có quyền đoán từ, phe Dân lập tức giành chiến thắng chung cuộc.
- **Đồng bộ hóa 100%**:
  - `data_roles.js`: Cập nhật `desc_vi`, `ability_vi`, và `win_vi` của vai trò Gián Điệp.
  - `index.html`: Cập nhật bảng luật chơi chi tiết (`#modal-deep-rules`).
  - `app.js`: Cập nhật thẻ lật vai trò (`showRevealStep`) và thông báo vạch mặt trục xuất trong `confirmEliminationVote`.

---

## [2026-10-16] - Cải Tổ Cấu Trúc Toàn Diện: 100% Thuần Việt Hóa Ứng Dụng (Loại Bỏ Song Ngữ)

### 🇻🇳 1. Xóa Bỏ Hoàn Toàn 100% Tính Năng & Mã Nguồn Song Ngữ (English)
- **Cải tổ cấu trúc mã nguồn `app.js`**:
  - Loại bỏ hoàn toàn hơn 210 biểu thức điều kiện song ngữ `this.lang === 'vi' ? ... : ...` trên toàn bộ controller `app.js`.
  - Loại bỏ biến `this.lang`, thay thế bằng các chuỗi văn bản Tiếng Việt chuẩn mực, gãy gọn, trực tiếp.
  - Xóa bỏ các trường tiếng Anh thừa (`name_en`, `desc_en`, `ability_en`, `win_en`) trong logic tạo vai trò custom và danh mục từ khóa.
  - Loại bỏ biến nháp `textEn` và thống nhất đơn vị điểm số hiển thị sang `đ` hoặc `điểm` (thay thế hoàn toàn `pts`).
  - Xóa bỏ các icon/ký tự thừa trong từ điển `I18N` (`section_scoreboard`, `btn_custom_role`, `btn_auto_balance`), khắc phục triệt để lỗi trùng lặp 2 icon cạnh nhau (`🏆 🏆`, `+ +`, `⚡ ⚡`).
- **Giao diện HTML (`index.html`)**:
  - Dịch và chuẩn hóa 100% tiêu đề, nhãn phụ, menu, bộ lọc:
    - Tiêu đề app: `<title>Kẻ Giả Mạo - Game Suy Luận Party</title>`
    - Hero Badge: `Game Suy Luận Party`, `Kẻ Giả Mạo`
    - Tùy chọn chế độ chơi: `Chuyền Máy (Offline)`, `Chơi Online (Phòng)` kèm badge `Sắp ra mắt!`
    - Bộ lọc vai trò: `Tất cả`, `Cố định`, `Phe Dân`, `Phe Ác`, `Trung Lập`, `Tự tạo`
    - Thẻ lật danh tính: `Phe Dân`, `Phe Ác`, `Trung Lập`
    - Cài đặt hệ thống: `Chế độ Tối`, `Chế độ Sáng`
- **Khắc phục lỗi cú pháp `data_categories.js`**:
  - Bổ sung dấu `},` bị thiếu tại dòng 53 (`bánh rán` - `bánh xèo`).
  - Xóa bỏ dấu ngoặc mở `{` dư thừa tại dòng 114, đảm bảo danh mục tải trơn tru, không có lỗi console.
- **Tên người chơi mặc định**:
  - Chuẩn hóa tên người chơi mặc định thành `Người chơi 1`, `Người chơi 2`, ..., `Người chơi 6` (thay vì `Player 1`).

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
  - Chuẩn hóa cơ chế tính điểm: Nâng sàn tối thiểu lên `15đ` (từ 15đ đến 25đ: `+2.5đ x số Dân`, chạm sàn ghi rõ `sàn tối thiểu 15đ`); Dân làng bị trừ `-8đ` (-5đ thua ván + -3đ làm lộ từ khóa).
  - Bổ sung ghi nhận chi tiết cơ hội lật kèo vào Nhật ký diễn biến trận đấu (`#match-timeline-log`) để bảng điểm cuối ván minh bạch, rõ ràng.

### 📱 4. Xóa Bỏ Hộp Thoại Alert Trình Duyệt & Xây Dựng Hệ Thống Thông Báo Chuyên Biệt Cho Mobile
- **Vấn đề trên điện thoại**:
  - Khi chơi chuyền máy trên trình duyệt di động (Vercel, Safari, Chrome điện thoại), các hành động ban đêm (Thám Tử soi, Bà Đồng gọi hồn, Tin Tặc hack dữ liệu, Bác Sĩ bảo vệ, Phù Thủy...) sử dụng hàm `alert()` mặc định của trình duyệt.
  - Hộp thoại `alert()` dễ bị trình duyệt chặn, bấm nhầm nút đóng nhanh và ngay khi đóng thì nội dung thẻ hành động bị xóa sạch (chỉ hiện thông báo chung chung "Đã hoàn tất hành động"), khiến người chơi mất hoàn toàn thông tin vừa soi được.
- **Giải pháp Đột Phá (Dual-Layer Action Results)**:
  - **Hệ Thống Modal Thông Báo In-App (`#modal-action-notice`)**: Thay thế toàn bộ `alert()` bằng giao diện Bottom Sheet Obsidian Arcade cực nét, có icon động, huy hiệu tên mục tiêu, banner phân loại màu sắc sắc nét (`good` xanh lá cho phe Dân / `evil` đỏ rực cho phe Ác / `info` xanh tím) cùng âm thanh hiệu ứng tương ứng.
  - **Khung Kết Quả Thường Trực Trên Thẻ Đêm (`.night-action-result-box`)**: Sau khi đóng modal, kết quả hành động vẫn được găm cố định ngay trên thẻ màn hình của người chơi. Người cầm máy có thể xem và ghi nhớ kỹ càng trước khi bấm *"🙈 Nhắm mắt & Chuyền cho người kế tiếp"*.
  - **Làm Sạch Toàn Bộ `alert()` Hệ Thống**: Chuyển đổi các cảnh báo trong Hộp công cụ Quản trò (Toolbox), kết quả bảo vệ/cứu mạng/phủ quyết khi Bỏ phiếu (Voting) và giới hạn slot vai trò ở màn Cài đặt sang `showActionNotice` và thông báo trôi `showToast()` mượt mà.

### ⏱️ 5. Tái Cấu Trúc Cơ Chế Lật Kèo Imposter (30s Suy Nghĩ, Phạt Đoán Sai & Đồng Bộ Điểm Toàn Bộ Vai Trò)
- **Cơ chế Lật Kèo của Kẻ Giả Mạo khi bị bắt**:
  - **Bộ đếm thời gian suy nghĩ 30 giây (`30s`)**: Tích hợp visual countdown timer neon đỏ (`#comeback-countdown-box`, `#comeback-timer-display`) trên `#screen-comeback`. Tự động đếm ngược 30s với hiệu ứng âm thanh cảnh báo 5 giây cuối. Khi hết 30s, hệ thống tự động tính là **Không đoán từ** (chấp nhận thua, không bị phạt đoán sai).
  - **Quyền lựa chọn đoán hoặc không đoán**:
    - **Nút Xác nhận đoán từ**: Yêu cầu nhập từ khóa suy luận được trước khi xác nhận. Nếu đoán đúng: **+20 điểm** (cướp chiến thắng ván, miễn trừ 100% hình phạt bị bắt hay lộ vòng 1; phe Dân bị phạt -8đ gồm -5đ thua ván + -3đ làm lộ từ khóa). Nếu đoán sai: **phạt thêm -10 điểm** (tổng phạt `-20đ` nếu bị bắt vòng 2+; `-25đ` nếu bị bắt ngay Vòng 1).
    - **Nút Không đoán từ**: Imposter chủ động bảo toàn điểm số, không bị phạt khoản đoán sai (chỉ chịu mức phạt cố định khi bị bắt: `-10đ` nếu vòng 2+; `-15đ` nếu vòng 1).
  - **Hình phạt lộ quá sớm ở Vòng 1**: Bị bắt ở Vòng 1 luôn bị giảm thêm `-5 điểm`.
- **Đồng bộ hóa 100% thông tin vai trò logic với luật chơi & mã tính điểm**:
  - **Bảng Điểm Thưởng & Phạt Toàn Diện (`#modal-deep-rules`)**: Tái cấu trúc Section 3 thành 3 nhóm bảng chi tiết, minh bạch:
    1. *Kẻ Giả Mạo & Lật Kèo*: Thắng sống sót (+15đ, lừa Dân +2đ/lần), Lật kèo đúng (+20đ), Bị bắt cố định (-10đ), Bị bắt Vòng 1 (-5đ giảm thêm), Đoán sai (-10đ phạt thêm), Không đoán (0đ phạt thêm).
    2. *Phe Dân Làng*: Thắng sống sót (+10đ), Thắng khi đã bị loại (+5đ), Bắt Imposter (+5đ), Thua Imposter (-5đ), Để lộ từ khóa (-3đ), Vote nhầm Dân (-5đ).
    3. *Toàn Bộ Vai Trò Đặc Biệt*: Thám Tử soi trúng (+5đ), Bác Sĩ cứu sống (+10đ), Vệ Sĩ hy sinh (+10đ), Thẩm Phán phủ quyết (+5đ), Kẻ Hề bị vote loại (+30đ Jackpot / người khác -5đ), Kẻ Hề không bị loại (-5đ), Kẻ Sống Sót (+15đ / -5đ), Phù Thủy (+15đ / -5đ), Điệp Viên Hai Mang (+15đ / -5đ), Phe Ác thắng (+15đ / thua -10đ).
  - **Thẻ vai trò (`data_roles.js`)**: Cập nhật toàn bộ trường `ability_vi` và `win_vi` của cả 20 vai trò mặc định để ghi rõ từng mốc điểm thưởng (+) và điểm phạt (-).
  - **Mã nguồn tính điểm (`app.js`)**: Tinh chỉnh `calculateScores` trong `showResultsScreen`, đồng bộ `this.playerCount = names.length` trong `startMatchSession` và ưu tiên kiểm tra nhánh phe Ác trước phe Dân để đảm bảo tính điểm chính xác tuyệt đối.

### 🏷️ 6. Loại Bỏ Tính Năng Tạo Tên Ngẫu Nhiên & Cố Định Tên Ban Đầu Mặc Định (Player + Số Thứ Tự)
- **Yêu cầu & Mục tiêu**:
  - Xóa bỏ hoàn toàn tính năng và danh sách tên ngẫu nhiên hiện tại để tránh việc tự động gán các tên không mong muốn.
  - Thiết lập tên mặc định cố định ban đầu theo cú pháp chuẩn: `Player + số thứ tự tạo` (`Player 1`, `Player 2`, `Player 3`, ...).
- **Các thay đổi chi tiết**:
  - **`data_categories.js`**: Xóa bỏ hoàn toàn mảng `RANDOM_NAMES_VI` chứa danh sách tên cũ ("Bảo Long", "Minh Anh", "Thỏ Ngọc", ...) và loại bỏ `window.RANDOM_NAMES_VI`.
  - **`index.html`**:
    - Xóa nút "🎲 Tên ngẫu nhiên" (`#btn-random-names`) trên thanh công cụ của màn hình Quản lý Người chơi (`#screen-players`).
    - Thay thế toàn bộ các placeholder tên người chơi mẫu tĩnh cũ ("Bảo Long") trong thẻ che màn hình (`#curtain-player-name`), thẻ lật (`#flip-front-player-name`), vòng quay may mắn (`#roulette-winner-name`), ban đêm (`#night-curtain-player-name`, `#night-player-name`) và thanh phát biểu (`#speaker-active-name`) thành `Player 1`.
  - **`app.js`**:
    - Xóa nút xúc xắc đơn lẻ (`.btn-random-single-name`) cạnh từng dòng input nhập tên người chơi, giúp thanh nhập tên mở rộng gọn gàng và thẩm mỹ hơn.
    - Xóa hoàn toàn phương thức `randomizeSinglePlayer(index)` và trình lắng nghe sự kiện `#btn-random-names`.
    - Cập nhật hàm `loadSavedPlayerNames()`: Tự động phát hiện và dọn dẹp các tên cũ thuộc danh sách random trước đây trong `localStorage`, khởi tạo danh sách mặc định cố định từ `Player 1` đến `Player N`.
    - Cập nhật `generatePlayerInputs()` & `addPlayer()`: Khi tạo thêm người chơi bằng nút "➕ Thêm người chơi", tên mới tự động được đặt cố định là `Player ${this.playerNames.length + 1}` (ví dụ: `Player 7`, `Player 8`, ...).
    - Cập nhật hàm xem trước `ensureSamplePlayersForReview()` để sử dụng danh sách chuẩn `['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6']`.

### ⚖️ 7. Chuẩn Hóa Điểm Dân Thường Thắng (+10đ), Dân Còn Sống Vote Đúng (+5đ), Vote Sai (-5đ Không Tính Dân Đã Chết) & Kẻ Hề (+30đ, Tất Cả -5đ)
- **Yêu cầu & Quy tắc cập nhật**:
  1. **Phe Dân Thường thắng**: Tất cả người chơi phe Dân (dù còn sống hay đã bị loại) đều nhận **+10 điểm**.
  2. **Phe Dân còn sống vote đúng bắt Imposter**: Toàn bộ Dân CÒN SỐNG nhận thêm **+5 điểm** (Tổng: 10 + 5 = **+15 điểm**). Dân đã chết không nhận thêm khoản này (vẫn bảo toàn **+10 điểm**).
  3. **Phe Dân vote sai**: Tất cả Dân CÒN SỐNG bị trừ **-5 điểm** (không tính dân đã chết; nạn nhân vô tội vừa bị vote loại cũng không bị phạt).
  4. **Kẻ Hề (Jester) thắng**: Kẻ Hề nhận trọn vẹn **+30 điểm** Jackpot, và **TẤT CẢ** người chơi khác trong phòng (kể cả phe Dân, phe Ác hay vai trò đặc biệt) đều bị trừ **-5 điểm**; không ai nhận thêm bất kỳ điểm thưởng nào khác.
- **Các thay đổi trong mã nguồn**:
  - **`app.js`**:
    - Trong `showResultsScreen()`: Cập nhật nhánh `this.winningTeam === 'good'` để cộng đồng đều `+10đ` cho toàn bộ phe Dân, và chỉ cộng thêm `+5đ` vote đúng cho Dân còn sống (`!p.isEliminated && hasCaughtImposter`).
    - Trong nhánh `this.winningTeam === 'jester'`: Cố định chính xác Kẻ Hề `delta = 30` và tất cả người khác `delta = -5`; đồng thời đóng gói toàn bộ Part 2 (các vai trò đặc biệt như Survivor, Witch...) không kích hoạt khi Kẻ Hề thắng để bảo đảm tất cả đều nhận đúng -5đ.
    - Trong cơ chế trừ điểm vote sai: Chỉ áp dụng trừ điểm cho người chơi còn sống (`!p.isEliminated && p.penalty > 0`).
  - **`index.html`**:
    - Cập nhật bảng điểm luật chơi (`#modal-deep-rules`): Hiển thị rõ ràng "Phe Dân Thường chiến thắng: Tất cả +10đ", "Phe Dân còn sống vote đúng Imposter: +5đ (Tổng +15đ)", và "Phe Dân vote nhầm Dân vô tội: Tất cả Dân còn sống bị phạt -5đ (không tính dân đã chết)".
  - **`data_roles.js`**:
    - Đồng bộ mô tả `ability_vi` và `win_vi` của Dân Thường và tất cả các vai trò phe Dân (Thám Tử, Bác Sĩ, Gián Điệp, Thị Trưởng, Kẻ Câm Lặng, Vệ Sĩ, Nhà Tiên Tri, Bà Đồng, Tin Tặc, Thẩm Phán).

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
