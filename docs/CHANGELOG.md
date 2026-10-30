# 📝 NHẬT KÝ THAY ĐỔI & PHIÊN BẢN (CHANGELOG)

Tất cả các thay đổi đáng chú ý của dự án **Faker: Kẻ Giả Mạo** sẽ được ghi chép trong tài liệu này theo định dạng chuẩn [Keep a Changelog](https://keepachangelog.com/vi/1.0.0/).

---

## [1.0.0] - 2026-10-30

### 🚀 Phát Hành Chính Thức (Official Production Release)

#### 🎭 Trải Nghiệm Cốt Lõi & Lối Chơi (Game Core)
* **Chuyền Máy Bí Mật (Pass & Play)**: Vận hành 100% Offline trên cùng một thiết bị di động, không phụ thuộc vào kết nối Internet hay server ngoài.
* **Lật Thẻ 3D & Chống Nhìn Trộm**: Thẻ bài 3D tương tác lật mở danh tính, tích hợp đồng hồ đếm ngược tự động ẩn vai trò sau 5 giây để bảo mật lượt chuyền tay.
* **Cơ Chế Lật Kèo Cuối Ván (Comeback Stage)**: Cho phép Kẻ Giả Mạo bị trục xuất cơ hội đoán từ khóa bí mật của phe Dân để đảo ngược thế cờ (+20đ).
* **Hệ Thống 10 Vai Trò Đa Dạng**:
  * **Phe Dân (Good)**: Dân Thường, Thám Tử (soi danh tính), Bác Sĩ (bảo vệ khỏi vote oan), Phù Thủy (cứu/đầu độc).
  * **Phe Ác (Evil)**: Kẻ Giả Mạo (Imposter), Kẻ Phản Bội.
  * **Phe Trung Lập (Neutral)**: Kẻ Ngu (Jester - thắng độc lập nếu bị vote), Gián Điệp (Undercover), Kẻ Say Rượu (Drunkard - ngỡ mình là dân).

#### 📱 Tích Hợp Phần Cứng Android & Đóng Gói Native
* **Xử Lý Nút Back Cứng & Cử Chỉ Vuốt Cạnh (Hardware Back Navigation)**:
  * Đóng các Modal / Bottom Sheet đang mở thay vì thoát app.
  * Lùi an toàn từ màn hình cấu hình về màn hình cài đặt chính.
  * Hiện hộp thoại xác nhận bảo vệ ván chơi đang diễn ra, tránh mất dữ liệu trận đấu.
  * Cơ chế chuẩn UX Android: **Double-tap Back to exit** tại màn hình chính ("Nhấn Back lần nữa để thoát game").
* **Rung Haptic Phần Cứng (Haptic Engine)**: Tích hợp Capacitor Native Haptics (`ImpactStyle.LIGHT`, `MEDIUM`, `vibrate`) kết hợp fallback `navigator.vibrate`.
* **Cấu Hình Xuất Xưởng CH Play & App Store**:
  * Tích hợp Capacitor Native Wrapper (`appId: "com.vuive.faker"`).
  * Cung cấp kịch bản 1-click tự động hóa dựng Android Studio: [`build-android.ps1`](./build-android.ps1).
  * Service Worker ([`sw.js`](./sw.js)) và Web App Manifest ([`manifest.json`](./manifest.json)) hỗ trợ cài đặt PWA Standalone.

#### 🎨 Giao Diện Obsidian Arcade & Chế Độ Sáng
* **Design System Obsidian Arcade**: Giao diện tối màu cao cấp với quầng sáng Neon Glow rực rỡ, tối ưu hóa cho màn hình OLED di động và Safe Area.
* **Chuẩn Hóa Chữ Đen Nền Sáng (High-Contrast Light Theme)**:
  * Khắc phục triệt để lỗi chữ trắng trên nền sáng tại thanh tiêu đề vòng đấu và các thành phần UI.
  * Áp dụng màu chữ đen đậm (`#0f172a !important`) chuẩn tương phản cao trên nền hồng nhạt `#fee2e2`.
* **Cụm Điều Khiển Trận Đấu Trong Cài Đặt**:
  * Nút **🔄 Chơi lại ván**: Bắt đầu ván mới ngay lập tức với cùng danh sách người chơi, dọn dẹp các timer đếm ngược.
  * Nút **🏠 Về trang chủ**: Hủy ván đấu dở dang và quay về màn hình ban đầu.

#### 🛡️ Bộ Nhận Diện Thương Hiệu (Brand Kit)
* **Logo Chính Thức**: Mặt nạ Cyan lương thiện đối lập với chiếc mũ Fedora bóng tối và mắt đỏ thẫm của Imposter bên trong chiếc khiên Obsidian viền Neon lửa.
* **Bộ Icon Xuất Bản Đa Nền Tảng**: Đầy đủ kích thước chuẩn 1024x1024, 512x512, 192x192 và 64x64 px.
* **Tài Liệu Chi Tiết**: Đặc tả toàn diện tại [`docs/BRANDKIT.md`](./docs/BRANDKIT.md).
