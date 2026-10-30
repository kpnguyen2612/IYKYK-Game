# 🎭 Faker (Guess The Imposter)

Game suy luận tìm Kẻ Giả Mạo (Imposter) dành cho nhóm bạn, hỗ trợ chơi trên cùng một thiết bị (**Pass & Play**) với đồ họa **Obsidian Arcade**, âm thanh Web Audio và nhiều vai trò phong phú.

---

## 📌 Tài Liệu Dự Án (Documentation)
* 🗺️ **Bản đồ kiến trúc & Tra cứu code**: [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md)
* 🎨 **Nhận diện thương hiệu & Logo**: [`docs/BRANDKIT.md`](./docs/BRANDKIT.md)
* 📝 **Nhật ký cập nhật & Backnotes**: [`docs/CHANGELOG.md`](./docs/CHANGELOG.md)

---

## 🚀 Chạy Ứng Dụng Cục Bộ (Local Development)
Khởi chạy máy chủ cục bộ bằng PowerShell:
```powershell
.\server.ps1
```
Truy cập qua trình duyệt tại: `http://localhost:8080` (hoặc mở trực tiếp file `index.html`).

---

## 📱 Đóng Gói Ứng Dụng Android Cho CH Play
Chạy script tự động hóa 1-click để đồng bộ và mở Android Studio:
```powershell
.\build-android.ps1
```

---

## 📂 Cấu Trúc Thư Mục Chuẩn Hóa (Project Structure)
```
vuive/
├── index.html                   # Giao diện chính 11 màn hình & 14 modals
├── manifest.json                # Web App Manifest chuẩn Android PWA
├── sw.js                        # Offline Service Worker cache 100%
├── capacitor.config.json        # Cấu hình đóng gói Native Android / iOS
├── package.json                 # Danh mục thư viện Capacitor Native
├── build-android.ps1            # Kịch bản 1-click build Android Studio
├── server.ps1                   # Máy chủ kiểm thử HTTP nội bộ
├── README.md                    # Giới thiệu tổng quan dự án
│
├── css/
│   └── styles.css               # Design System Obsidian Arcade & Light Mode
│
├── js/
│   ├── app.js                   # Controller trung tâm, State Machine, Back Button
│   ├── audio.js                 # Bộ tổng hợp âm thanh Web Audio & Rung Haptic
│   ├── data_roles.js            # Dữ liệu 10 vai trò (7 cốt lõi + 3 dự bị)
│   └── data_categories.js       # 7 bộ từ vựng & bảng màu avatar
│
├── assets/
│   ├── icons/                   # Bộ icon ứng dụng đa kích thước (1024, 512, 192, 64)
│   │   ├── app_logo.png         # Logo chính thức 1024x1024 px
│   │   ├── icon-512.png         # Icon nộp Google Play Store
│   │   ├── icon-192.png         # Icon Android PWA Standalone
│   │   └── favicon.png          # Icon tab trình duyệt web
│   └── images/                  # Hình ảnh tài nguyên giao diện
│       ├── techcombank_logo.png # Logo ngân hàng Techcombank
│       └── vietqr_donate.png    # Mã QR Techcombank dự phòng
│
├── docs/                        # Trung tâm tài liệu dự án
│   ├── ARCHITECTURE.md          # Bản đồ kiến trúc & Tra cứu code toàn diện
│   ├── BRANDKIT.md              # Quy chuẩn nhận diện thương hiệu độc quyền
│   └── CHANGELOG.md             # Nhật ký cập nhật phiên bản
│
└── tools/                       # Bộ công cụ thiết kế & kịch bản trích xuất
    ├── stitch/                  # Kịch bản API Stitch
    └── stitch_exports/          # Tài nguyên thiết kế giao diện
```


## 🚀 Chạy Ứng Dụng Cục Bộ (Local Development)
Khởi chạy máy chủ cục bộ bằng PowerShell:
```powershell
.\server.ps1
```
Truy cập qua trình duyệt tại: `http://localhost:8080` (hoặc mở trực tiếp file `index.html`).

---

## 📱 Đóng Gói Ứng Dụng Android Cho CH Play
Chạy script tự động hóa 1-click để đồng bộ và mở Android Studio:
```powershell
.\build-android.ps1
```

---

## 📂 Cấu Trúc Thư Mục Chuẩn Hóa (Project Structure)
```
vuive/
├── index.html                   # Giao diện chính 11 màn hình & 14 modals
├── manifest.json                # Web App Manifest chuẩn Android PWA
├── sw.js                        # Offline Service Worker cache 100%
├── capacitor.config.json        # Cấu hình đóng gói Native Android / iOS
├── package.json                 # Danh mục thư viện Capacitor Native
├── build-android.ps1            # Kịch bản 1-click build Android Studio
├── server.ps1                   # Máy chủ kiểm thử HTTP nội bộ
├── README.md                    # Giới thiệu tổng quan dự án
│
├── css/
│   └── styles.css               # Design System Obsidian Arcade & Light Mode
│
├── js/
│   ├── app.js                   # Controller trung tâm, State Machine, Back Button
│   ├── audio.js                 # Bộ tổng hợp âm thanh Web Audio & Rung Haptic
│   ├── data_roles.js            # Dữ liệu 10 vai trò (7 cốt lõi + 3 dự bị)
│   └── data_categories.js       # 7 bộ từ vựng & bảng màu avatar
│
├── assets/
│   ├── icons/                   # Bộ icon ứng dụng đa kích thước (1024, 512, 192, 64)
│   │   ├── app_logo.png         # Logo chính thức 1024x1024 px
│   │   ├── icon-512.png         # Icon nộp Google Play Store
│   │   ├── icon-192.png         # Icon Android PWA Standalone
│   │   └── favicon.png          # Icon tab trình duyệt web
│   └── images/                  # Hình ảnh tài nguyên giao diện
│       ├── techcombank_logo.png # Logo ngân hàng Techcombank
│       └── vietqr_donate.png    # Mã QR Techcombank dự phòng
│
├── docs/                        # Trung tâm tài liệu dự án
│   ├── ARCHITECTURE.md          # Bản đồ kiến trúc & Tra cứu code toàn diện
│   ├── BRANDKIT.md              # Quy chuẩn nhận diện thương hiệu độc quyền
│   └── CHANGELOG.md             # Nhật ký cập nhật phiên bản
│
└── tools/                       # Bộ công cụ thiết kế & kịch bản trích xuất
    ├── stitch/                  # Kịch bản API Stitch
    └── stitch_exports/          # Tài nguyên thiết kế giao diện
```