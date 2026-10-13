// ==========================================================
// GUESS THE IMPOSTER - DANH MỤC CẶP TỪ VỰNG THUẦN TIẾNG VIỆT
// Dành riêng cho game Kẻ Giả Mạo / Undercover Party Game
// Mỗi mục là một Cặp Từ: Từ của Dân Làng ⟷ Từ của Kẻ Giả Mạo
// ==========================================================

const CATEGORIES = [
  {
    id: "food_drink",
    name_vi: "Ẩm Thực & Đồ Uống",
    icon: "🍜",
    words: [
      { civilian: "Phở Bò Hà Nội", imposter: "Bún Bò Huế" },
      { civilian: "Trà Sữa Trân Châu", imposter: "Cà Phê Sữa Đá" },
      { civilian: "Bánh Mì Pa-tê", imposter: "Hamburger Bò" },
      { civilian: "Pizza Phô Mai", imposter: "Bánh Xèo Giòn" },
      { civilian: "Sushi Cá Hồi", imposter: "Kimbap Hàn Quốc" },
      { civilian: "Gà Rán Giòn Cay", imposter: "Vịt Quay Bắc Kinh" },
      { civilian: "Kem Bơ Đà Lạt", imposter: "Chè Sầu Riêng" },
      { civilian: "Lẩu Thái Hải Sản", imposter: "Canh Chua Cá" },
      { civilian: "Bún Chả Hà Nội", imposter: "Bún Đậu Mắm Tôm" },
      { civilian: "Bánh Cuốn Nóng", imposter: "Bánh Ướt Lòng Gà" }
    ]
  },
  {
    id: "animals",
    name_vi: "Thế Giới Động Vật",
    icon: "🦁",
    words: [
      { civilian: "Cá Heo Đại Dương", imposter: "Cá Voi Xanh" },
      { civilian: "Hổ Bengal", imposter: "Sư Tử Châu Phi" },
      { civilian: "Chim Cánh Cụt Hoàng Đế", imposter: "Gấu Bắc Cực" },
      { civilian: "Gấu Trúc Khổng Lồ", imposter: "Gấu Koala Úc" },
      { civilian: "Tắc Kè Hoa", imposter: "Kỳ Nhông Cát" },
      { civilian: "Đại Bàng Đầu Trắng", imposter: "Chim Ưng Săn Mồi" },
      { civilian: "Bạch Tuộc Khổng Lồ", imposter: "Mực Ống Đại Dương" },
      { civilian: "Sói Xám Bắc Cực", imposter: "Chó Husky Ngáo" },
      { civilian: "Hươu Cao Cổ", imposter: "Ngựa Vằn Đồng Cỏ" },
      { civilian: "Cá Sấu Sông Nile", imposter: "Thằn Lằn Khổng Lồ" }
    ]
  },
  {
    id: "daily_life",
    name_vi: "Đời Sống Hàng Ngày",
    icon: "🎒",
    words: [
      { civilian: "Kính Râm Chống Nắng", imposter: "Kính Cận Thị" },
      { civilian: "Điện Thoại iPhone", imposter: "Điện Thoại Samsung" },
      { civilian: "Bàn Chải Đánh Răng", imposter: "Máy Tăm Nước" },
      { civilian: "Đồng Hồ Báo Thức", imposter: "Đồng Hồ Đeo Tay Smartwatch" },
      { civilian: "Cây Dù Che Mưa", imposter: "Áo Mưa Cánh Dơi" },
      { civilian: "Xe Máy Tay Ga", imposter: "Xe Đạp Điện" },
      { civilian: "Nồi Cơm Điện", imposter: "Nồi Chiên Không Dầu" },
      { civilian: "Thẻ Tín Dụng ATM", imposter: "Ví Tiền Mặt" },
      { civilian: "Tai Nghe Không Dây AirPods", imposter: "Loa Bluetooth" },
      { civilian: "Balo Đi Học", imposter: "Vali Du Lịch" }
    ]
  },
  {
    id: "social_tech",
    name_vi: "Công Nghệ & Mạng Xã Hội",
    icon: "🚀",
    words: [
      { civilian: "Facebook", imposter: "TikTok" },
      { civilian: "YouTube", imposter: "Netflix" },
      { civilian: "Trí Tuệ Nhân Tạo (ChatGPT)", imposter: "Google Tìm Kiếm" },
      { civilian: "Kính Thực Tế Ảo VR", imposter: "Màn Hình Chiếu Rạp 3D" },
      { civilian: "Robot Hình Người", imposter: "Người Ngoài Hành Tinh" },
      { civilian: "Xe Ô Tô Điện Tesla", imposter: "Tàu Cao Tốc Shinkansen" },
      { civilian: "Máy Bay Không Người Lái (Drone)", imposter: "Trực Thăng Cứu Hộ" },
      { civilian: "Thẻ Nhớ USB", imposter: "Ổ Cứng Di Động" }
    ]
  },
  {
    id: "movies_culture",
    name_vi: "Điện Ảnh & Nhân Vật",
    icon: "🎬",
    words: [
      { civilian: "Harry Potter", imposter: "Chúa Tể Những Chiếc Nhẫn" },
      { civilian: "Spider-Man (Người Nhện)", imposter: "Batman (Người Dơi)" },
      { civilian: "Titanic (Tàu Chìm)", imposter: "Cướp Biển Vùng Caribbean" },
      { civilian: "Avengers (Biệt Đội Siêu Anh Hùng)", imposter: "Justice League (Liên Minh Công Lý)" },
      { civilian: "Avatar (Hành Tinh Xanh Pandora)", imposter: "Star Wars (Chiến Tranh Giữa Các Vì Sao)" },
      { civilian: "Công Chúa Elsa (Nữ Hoàng Băng Giá)", imposter: "Bạch Tuyết & 7 Chú Lùn" },
      { civilian: "Sherlock Holmes", imposter: "Thám Tử Lừng Danh Conan" }
    ]
  },
  {
    id: "vietnam_culture",
    name_vi: "Văn Hóa & Địa Danh Việt Nam",
    icon: "🇻🇳",
    words: [
      { civilian: "Phố Cổ Hội An", imposter: "Cố Đô Huế" },
      { civilian: "Vịnh Hạ Long", imposter: "Tràng An Ninh Bình" },
      { civilian: "Hồ Gươm Tháp Rùa", imposter: "Hồ Tây Hà Nội" },
      { civilian: "Chợ Bến Thành", imposter: "Chợ Nổi Cái Răng" },
      { civilian: "Áo Dài Truyền Thống", imposter: "Áo Bà Ba Nam Bộ" },
      { civilian: "Nón Lá Bài Thơ", imposter: "Khăn Rằn Nam Bộ" },
      { civilian: "Đỉnh Fansipan Sapa", imposter: "Bà Nà Hills Đà Nẵng" },
      { civilian: "Trống Đồng Đông Sơn", imposter: "Đàn Bầu Việt Nam" }
    ]
  }
];

const RANDOM_NAMES_VI = [
  "Bảo Long", "Minh Anh", "Thỏ Ngọc", "Khánh Vy", "Gia Huy",
  "Tú Linh", "Đức Bo", "Trúc Mây", "Hoàng Nam", "Diệu Nhi",
  "Tuấn Kiệt", "Mai Phương", "Quang Hải", "Hà My", "Hải Đăng",
  "Thanh Hằng", "Duy Mạnh", "Bích Phương", "Tiến Dũng", "Ngọc Trinh"
];

const AVATAR_PALETTES = [
  { bg: "#FEE2E2", text: "#DC2626", emoji: "🦊" },
  { bg: "#FEF3C7", text: "#D97706", emoji: "🦁" },
  { bg: "#D1FAE5", text: "#059669", emoji: "🐼" },
  { bg: "#CFFAFE", text: "#0891B2", emoji: "🐬" },
  { bg: "#E0E7FF", text: "#4F46E5", emoji: "🦉" },
  { bg: "#F3E8FF", text: "#9333EA", emoji: "🦄" },
  { bg: "#FCE7F3", text: "#DB2777", emoji: "🐱" },
  { bg: "#FFE4E6", text: "#E11D48", emoji: "🐯" },
  { bg: "#EDE9FE", text: "#7C3AED", emoji: "🦅" },
  { bg: "#CCFBF1", text: "#0D9488", emoji: "🐺" }
];

if (typeof window !== "undefined") {
  window.CATEGORIES = CATEGORIES;
  window.RANDOM_NAMES_VI = RANDOM_NAMES_VI;
  window.AVATAR_PALETTES = AVATAR_PALETTES;
}
