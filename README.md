# 🎭 Faker (Guess The Imposter)

Game suy luận tìm Kẻ Giả Mạo (Imposter) dành cho nhóm bạn, hỗ trợ trải nghiệm party game với đồ họa **Obsidian Arcade**, hiệu ứng âm thanh Web Audio và cơ chế phân vai đa dạng.

---

## 📌 Tài Liệu Dự Án (Documentation)
* 🎨 **Nhận diện thương hiệu & Logo**: [`docs/BRANDKIT.md`](./docs/BRANDKIT.md)
* 🗺️ **Bản đồ kiến trúc & Tra cứu code**: [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md)
* 📝 **Nhật ký cập nhật phiên bản**: [`docs/CHANGELOG.md`](./docs/CHANGELOG.md)

---

## 📂 Cấu Trúc Dự Án (Project Structure)
```
vuive/
├── index.html                   # Giao diện chính ứng dụng
├── manifest.json                # Web App Manifest PWA
├── sw.js                        # Service Worker hỗ trợ ngoại tuyến
├── capacitor.config.json        # Cấu hình đa nền tảng
├── package.json                 # Danh mục gói phụ thuộc
│
├── css/
│   └── styles.css               # Hệ thống giao diện Obsidian Arcade
│
├── js/
│   ├── app.js                   # Bộ điều khiển trung tâm và trạng thái game
│   ├── api_client.js            # Module kết nối dịch vụ
│   ├── audio.js                 # Bộ xử lý âm thanh Web Audio & Rung phản hồi
│   ├── data_roles.js            # Dữ liệu danh mục các vai trò
│   └── data_categories.js       # Dữ liệu chủ đề và danh mục ngoại tuyến
│
├── server/
│   ├── server.js                # Dịch vụ backend API
│   ├── package.json             # Cấu hình dịch vụ
│   └── data/                    # Dữ liệu hệ thống
│
├── assets/
│   ├── icons/                   # Bộ biểu tượng ứng dụng đa kích thước
│   └── images/                  # Tài nguyên hình ảnh giao diện
│
└── docs/                        # Tài liệu lưu trữ dự án
    ├── ARCHITECTURE.md          # Bản đồ kiến trúc hệ thống
    ├── BRANDKIT.md              # Quy chuẩn nhận diện thương hiệu
    └── CHANGELOG.md             # Lịch sử cập nhật
```
