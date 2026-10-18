// ==========================================================
// GUESS THE IMPOSTER - DANH SÁCH VAI TRÒ (ROLES DATA)
// Định nghĩa 7 vai trò cốt lõi, kỹ năng, điều kiện thắng & thông số
// Thuần Tiếng Việt
// ==========================================================

const DEFAULT_ROLES = [
  {
    id: "civilian",
    name_vi: "Dân Thường",
    icon: "👤",
    team: "good",
    color: "#10B981",
    desc_vi: "Người dân bình thường không có năng lực đặc biệt.",
    ability_vi: "Biết từ khóa bí mật. Phe Dân thắng: tất cả +10đ. Dân còn sống vote đúng Kẻ Giả Mạo & Trung Lập: +5đ/kẻ (lũy kế nếu có nhiều kẻ).",
    win_vi: "Phe Dân thắng: tất cả +10đ (còn sống vote đúng +5đ/kẻ lũy kế). Vote sai: tất cả dân còn sống -5đ (không tính dân đã chết). Thua ván: -5đ.",
    knowsKeyword: true,
    getsHint: false,
    maxCount: 15,
    defaultCount: 3,
    enabled: true,
    isDefault: true
  },
  {
    id: "imposter",
    name_vi: "Kẻ Giả Mạo",
    icon: "🎭",
    team: "evil",
    color: "#EF4444",
    desc_vi: "Kẻ trà trộn luôn biết chủ đề nhưng không biết từ khóa bí mật của phe Dân.",
    ability_vi: "Đóng vai Dân thường và lừa cả làng. Nếu bị bắt: có 30s suy nghĩ để đoán từ bí mật (đúng +20đ, sai -10đ, bỏ qua 0đ). Bị bắt vòng 1 phạt thêm -5đ.",
    win_vi: "Sống sót thắng ván (+20đ) HOẶC Lật Kèo đoán đúng (+20đ, không bị phạt). Bị bắt: -10đ (vòng 1: -15đ).",
    knowsKeyword: false,
    getsHint: true,
    maxCount: 5,
    defaultCount: 1,
    enabled: true,
    isDefault: true
  },
  {
    id: "spy",
    name_vi: "Gián Điệp",
    icon: "🕵️",
    team: "neutral",
    color: "#8B5CF6",
    desc_vi: "Phe Trung Lập chỉ biết từ đồng nghĩa trong cặp từ, phải khéo léo hòa nhập để sống sót.",
    ability_vi: "Nhận từ đồng nghĩa trong cặp từ (khác từ của phe Dân). Không biết ai là Imposter. Khéo léo mô tả để hòa nhập và sống sót đến cuối ván. Bỏ phiếu đúng hay sai đều 0đ.",
    win_vi: "Thắng độc lập khi SỐNG SÓT đến cuối ván (+20đ). Bị phát hiện/vote loại: -10đ. Vote đúng/sai đều 0đ.",
    knowsKeyword: false,
    getsHint: true,
    maxCount: 2,
    defaultCount: 1,
    enabled: true,
    isDefault: true
  },
  {
    id: "jester",
    name_vi: "Kẻ Ngu",
    icon: "🤪",
    team: "neutral",
    color: "#EC4899",
    desc_vi: "Phe Trung Lập biết từ khóa bí mật, mục tiêu là bị cả làng bỏ phiếu loại.",
    ability_vi: "Biết từ khóa bí mật. Thắng ván nhận +30đ CHỈ KHI bị cả làng vote loại (tất cả người khác không bị trừ điểm). Nếu không bị vote đến cuối ván vẫn không bị trừ điểm (0đ).",
    win_vi: "Bị vote loại: Thắng độc lập +30đ (tất cả người khác 0đ, không bị phạt). Không bị vote đến cuối ván: 0đ (không bị trừ điểm). Vote đúng/sai đều 0đ.",
    knowsKeyword: true,
    getsHint: false,
    maxCount: 2,
    defaultCount: 1,
    enabled: true,
    isDefault: true
  },
  {
    id: "traitor",
    name_vi: "Kẻ Phản Bội",
    icon: "🗡️",
    team: "evil",
    color: "#DC2626",
    desc_vi: "Phe Ác nhưng BIẾT từ khóa bí mật để ngầm phá hoại.",
    ability_vi: "Biết từ khóa bí mật nhưng theo phe Kẻ Giả Mạo, có nhiệm vụ tung hỏa mù dẫn dắt Dân nghi ngờ lẫn nhau.",
    win_vi: "Phe Kẻ Giả Mạo chiến thắng (+15đ). Bị bắt hoặc phe Ác thua: -10đ.",
    knowsKeyword: true,
    getsHint: false,
    maxCount: 1,
    defaultCount: 1,
    enabled: true,
    isDefault: true
  },
  {
    id: "drunkard",
    name_vi: "Kẻ Say Rượu",
    icon: "🍺",
    team: "good",
    color: "#059669",
    desc_vi: "Thuộc Phe Dân nhưng nhận từ của Gián Điệp (từ đồng nghĩa). Bị vote không bị phạt và miễn trừ phạt oan cho làng.",
    ability_vi: "Thuộc Phe Dân nhưng nhận từ đồng nghĩa của Gián Điệp. Bị vote loại không sao (0đ và làng không bị trừ điểm). Vote đúng hay sai đều 0đ.",
    win_vi: "Dân thắng & sống sót: +20đ (bị loại trước đó: +10đ). Gián Điệp sống sót: bị phạt -10đ. Imposter thắng: 0đ (không bị trừ). Vote đúng/sai đều 0đ.",
    knowsKeyword: false,
    getsHint: true,
    maxCount: 1,
    defaultCount: 1,
    enabled: true,
    isDefault: true
  },
  {
    id: "double_agent",
    name_vi: "Điệp Viên Hai Mang",
    icon: "🎭",
    team: "neutral",
    color: "#64748B",
    desc_vi: "Có điều kiện thắng riêng biệt, đổi phe theo thời cuộc.",
    ability_vi: "Biết từ khóa và biết ai là Kẻ Giả Mạo. Thắng nếu giúp Kẻ Giả Mạo sống sót mà không bị nghi ngờ.",
    win_vi: "Phe Ác thắng HOẶC là người cuối cùng sống sót (+15đ). Bị loại / thất bại: -5đ.",
    knowsKeyword: true,
    getsHint: true,
    maxCount: 1,
    defaultCount: 1,
    enabled: true,
    isDefault: true
  }
];

// ==========================================================
// VAI TRÒ DỰ BỊ / CHƯA PUBLIC LÊN APP (UPCOMING ROLES)
// Đã xây dựng hoàn thiện cấu trúc dữ liệu, kỹ năng & thông số
// Sẵn sàng kích hoạt vào DEFAULT_ROLES bất kỳ khi nào muốn public!
// ==========================================================
const UPCOMING_ROLES = [
  {
    id: "detective",
    name_vi: "Thám Tử",
    icon: "🔍",
    team: "good",
    color: "#3B82F6",
    desc_vi: "Có khả năng điều tra hành tung bí mật của người chơi khác.",
    ability_vi: "Mỗi vòng dùng Hộp Công Cụ để soi danh tính 1 người chơi. Soi trúng Kẻ Giả Mạo / phe Ác được thưởng ngay +5 điểm!",
    win_vi: "Phe Dân Làng chiến thắng (+10đ; còn sống vote đúng +5đ/kẻ lũy kế). Soi trúng phe Ác: +5đ/lần. Thua ván: -5đ.",
    knowsKeyword: true,
    getsHint: false,
    maxCount: 2,
    defaultCount: 1,
    enabled: false,
    isPublic: false
  },
  {
    id: "doctor",
    name_vi: "Bác Sĩ",
    icon: "💉",
    team: "good",
    color: "#06B6D4",
    desc_vi: "Có khả năng che chở và bảo vệ người chơi khỏi bị trục xuất.",
    ability_vi: "Mỗi vòng dùng Hộp Công Cụ đặt Khiên Bảo Vệ cho 1 người (kể cả bản thân). Nếu người đó bị cả làng vote loại, án tử sẽ được hóa giải và Bác Sĩ nhận thưởng ngay +10 điểm!",
    win_vi: "Phe Dân Làng chiến thắng (+10đ; còn sống vote đúng +5đ/kẻ lũy kế). Cứu sống thành công: +10đ/lần. Thua ván: -5đ.",
    knowsKeyword: true,
    getsHint: false,
    maxCount: 2,
    defaultCount: 1,
    enabled: false,
    isPublic: false
  },
  {
    id: "mayor",
    name_vi: "Thị Trưởng",
    icon: "👑",
    team: "good",
    color: "#F59E0B",
    desc_vi: "Nhà lãnh đạo có lá phiếu mang trọng lượng gấp đôi.",
    ability_vi: "Lá phiếu biểu quyết có giá trị x2 khi bỏ phiếu trục xuất nghi phạm.",
    win_vi: "Phe Dân Làng chiến thắng (+10đ; còn sống vote đúng +5đ/kẻ lũy kế). Thua ván: -5đ.",
    knowsKeyword: true,
    getsHint: false,
    maxCount: 1,
    defaultCount: 1,
    enabled: false,
    isPublic: false
  }
];

if (typeof window !== "undefined") {
  window.DEFAULT_ROLES = DEFAULT_ROLES;
  window.UPCOMING_ROLES = UPCOMING_ROLES;
}
