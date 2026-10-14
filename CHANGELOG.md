# 📝 NHẬT KÝ CẬP NHẬT & BACKNOTES (CHANGELOG)

Tài liệu này lưu trữ toàn bộ các ghi chú thay đổi (backnotes) cho từng lần cập nhật và đẩy mã nguồn lên GitHub của dự án **Faker (Guess The Imposter)**.

---

## 📌 Quy Tắc Triển Khai (Deployment Policy)
- **Kiểm tra trước khi đẩy**: Mọi tính năng và thành phần (UI, State, Timers, Role logic, Console) phải được kiểm thử toàn diện trên trình duyệt trước khi push.
- **Không tự động push (No Auto-Push)**: Chỉ thực hiện `git push` khi người dùng yêu cầu trực tiếp.
- **Bắt buộc ghi Backnote**: Mỗi lần cập nhật đẩy lên GitHub đều phải ghi nhận chi tiết thay đổi vào tài liệu này và commit message.

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
