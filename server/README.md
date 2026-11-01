# Faker / IYKYK Party Game - Backend Server

Backend REST API bảo mật cho game Faker (Guess The Imposter), đảm bảo kho từ khóa không bị lộ trên client hoặc GitHub.

## 🚀 Tính năng
- **Bảo mật từ khóa:** Người chơi chỉ nhận 1 cặp từ duy nhất của ván hiện tại.
- **Xác thực Lật kèo (Comeback Validation):** So sánh câu đoán trên server, không trả lời từ đúng nếu đoán sai.
- **Không phụ thuộc DB ngoài:** Sử dụng cấu trúc dữ liệu JSON tối ưu trong RAM, khởi động tức thì.
- **CORS mở rộng:** Kết nối mượt mà từ Android App (Capacitor), iOS App và Web PWA.

---

## ☁️ Hướng dẫn Deploy Miễn Phí lên Cloud (2 phút)

### Cách 1: Render.com (Miễn phí 100%)
1. Đăng ký tài khoản miễn phí tại [render.com](https://render.com).
2. Chọn **New +** ➔ **Web Service**.
3. Kết nối với GitHub repository của bạn (`IYKYK-Game` hoặc `faker`).
4. Cấu hình:
   - **Root Directory:** `server`
   - **Runtime:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Bấm **Create Web Service**. Sau 1 phút bạn sẽ có link API dạng: `https://faker-backend.onrender.com`.

### Cách 2: Railway.app (Miễn phí 100%)
1. Vào [railway.app](https://railway.app), bấm **New Project** ➔ **Deploy from GitHub repo**.
2. Chọn repo của bạn, chọn thư mục `server`.
3. Railway tự động nhận diện `Dockerfile` hoặc `package.json` và cấp link domain HTTPS tự động.

---

## 📡 Danh sách API Endpoints

| Phương thức | Đường dẫn | Chức năng |
| :--- | :--- | :--- |
| `GET` | `/api/v1/health` | Kiểm tra tình trạng server |
| `GET` | `/api/v1/categories` | Lấy danh sách chủ đề (không chứa từ) |
| `POST` | `/api/v1/match/start` | Khởi tạo ván chơi & nhận 1 cặp từ bảo mật |
| `POST` | `/api/v1/match/verify-guess` | Xác thực từ đoán của Kẻ Giả Mạo |
