// ==========================================
// GUESS THE IMPOSTER - ROLES & CATEGORIES DATA
// ==========================================

export const DEFAULT_ROLES = [
  {
    id: "civilian",
    name_vi: "Dân Thường",
    name_en: "Civilian",
    icon: "👤",
    team: "good", // good | evil | neutral
    color: "#10B981", // Emerald
    desc_vi: "Người dân bình thường không có năng lực đặc biệt.",
    desc_en: "Ordinary citizen with no special abilities.",
    ability_vi: "Biết từ khóa bí mật. Hãy thảo luận để tìm ra Kẻ Giả Mạo.",
    ability_en: "Knows the secret keyword. Discuss and identify the Imposter.",
    win_vi: "Phe Dân Làng bỏ phiếu loại bỏ toàn bộ Kẻ Giả Mạo.",
    win_en: "Civilians eliminate all Imposters through voting.",
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
    name_en: "Imposter",
    icon: "🎭",
    team: "evil",
    color: "#EF4444", // Crimson
    desc_vi: "Kẻ trà trộn không biết từ khóa bí mật.",
    desc_en: "Infiltrator who doesn't know the secret keyword.",
    ability_vi: "Không biết từ khóa. Hãy hòa nhập, lắng nghe manh mối và đoán từ khóa.",
    ability_en: "Does not know the keyword. Blend in, gather clues, and guess the keyword.",
    win_vi: "Không bị loại khi bỏ phiếu HOẶC đoán đúng từ khóa bí mật khi bị lộ.",
    win_en: "Survive voting OR correctly guess the secret word when unmasked.",
    knowsKeyword: false,
    getsHint: true,
    maxCount: 5,
    defaultCount: 1,
    enabled: true,
    isDefault: true
  },
  {
    id: "detective",
    name_vi: "Thám Tử",
    name_en: "Detective",
    icon: "🔍",
    team: "good",
    color: "#3B82F6", // Blue
    desc_vi: "Có khả năng điều tra hành tung của một người chơi.",
    desc_en: "Can investigate the identity of one player.",
    ability_vi: "Trong giai đoạn thảo luận, có thể kiểm tra xem 1 người chơi có thuộc phe Ác hay không.",
    ability_en: "During discussion, can inspect if 1 player belongs to the Evil team.",
    win_vi: "Phe Dân Làng chiến thắng.",
    win_en: "Civilian team wins.",
    knowsKeyword: true,
    getsHint: false,
    maxCount: 2,
    defaultCount: 1,
    enabled: true,
    isDefault: true
  },
  {
    id: "doctor",
    name_vi: "Bác Sĩ",
    name_en: "Doctor",
    icon: "💉",
    team: "good",
    color: "#06B6D4", // Cyan
    desc_vi: "Có khả năng chữa lành và bảo vệ một người khỏi bị loại.",
    desc_en: "Can protect one player from being eliminated.",
    ability_vi: "Chọn bảo vệ 1 người chơi trong vòng bỏ phiếu, cứu họ nếu họ bị đa số phiếu.",
    ability_en: "Shield 1 player during voting, saving them if they receive majority votes.",
    win_vi: "Phe Dân Làng chiến thắng.",
    win_en: "Civilian team wins.",
    knowsKeyword: true,
    getsHint: false,
    maxCount: 2,
    defaultCount: 0,
    enabled: true,
    isDefault: true
  },
  {
    id: "spy",
    name_vi: "Gián Điệp",
    name_en: "Spy",
    icon: "🕵️",
    team: "good",
    color: "#8B5CF6", // Purple
    desc_vi: "Nằm gai nếm mật, nhận được một gợi ý mở rộng về từ khóa.",
    desc_en: "Undercover agent who receives an expanded clue about the secret word.",
    ability_vi: "Nhận được chữ cái đầu tiên hoặc gợi ý chi tiết về từ khóa bí mật.",
    ability_en: "Receives the first letter or an advanced clue about the secret word.",
    win_vi: "Phe Dân Làng chiến thắng.",
    win_en: "Civilian team wins.",
    knowsKeyword: true,
    getsHint: true,
    maxCount: 2,
    defaultCount: 0,
    enabled: true,
    isDefault: true
  },
  {
    id: "sheriff",
    name_vi: "Cảnh Sát Trưởng",
    name_en: "Sheriff",
    icon: "⭐",
    team: "good",
    color: "#F59E0B", // Amber
    desc_vi: "Có quyền loại bỏ trực tiếp 1 người chơi nghi vấn.",
    desc_en: "Has authority to directly eliminate a suspected player.",
    ability_vi: "Có quyền bắn 1 người bị nghi ngờ. Nếu bắn nhầm Dân thường, Cảnh sát trưởng sẽ tự bị loại!",
    ability_en: "Can eliminate 1 suspected player. If they target an innocent, the Sheriff is eliminated!",
    win_vi: "Phe Dân Làng chiến thắng.",
    win_en: "Civilian team wins.",
    knowsKeyword: true,
    getsHint: false,
    maxCount: 1,
    defaultCount: 0,
    enabled: true,
    isDefault: true
  },
  {
    id: "jester",
    name_vi: "Kẻ Hề",
    name_en: "Jester",
    icon: "🃏",
    team: "neutral",
    color: "#EC4899", // Pink
    desc_vi: "Kẻ lập dị muốn bị mọi người nghi ngờ và bỏ phiếu loại.",
    desc_en: "Chaos maker who wins only if voted out by the other players.",
    ability_vi: "Không biết từ khóa nhưng phải hành xử đáng ngờ để bị bỏ phiếu trục xuất.",
    ability_en: "Does not know the word. Act suspiciously to get voted out.",
    win_vi: "Chiến thắng ĐỘC LẬP nếu bị đa số người chơi bỏ phiếu loại!",
    win_en: "Wins SOLO if voted out by the majority in any round!",
    knowsKeyword: false,
    getsHint: true,
    maxCount: 1,
    defaultCount: 0,
    enabled: true,
    isDefault: true
  },
  {
    id: "bodyguard",
    name_vi: "Vệ Sĩ",
    name_en: "Bodyguard",
    icon: "🛡️",
    team: "good",
    color: "#14B8A6", // Teal
    desc_vi: "Bảo vệ một người chơi được chỉ định.",
    desc_en: "Protects a designated player from harm.",
    ability_vi: "Được chỉ định bảo vệ bí mật 1 người chơi. Nếu người đó bị nghi ngờ, Vệ Sĩ có thể đỡ phiếu.",
    ability_en: "Designated to protect 1 player secretly. Can intercept votes against their client.",
    win_vi: "Phe Dân Làng thắng và Thân chủ còn sống sót.",
    win_en: "Civilians win and their VIP survives.",
    knowsKeyword: true,
    getsHint: false,
    maxCount: 2,
    defaultCount: 0,
    enabled: true,
    isDefault: true
  },
  {
    id: "hacker",
    name_vi: "Hacker",
    name_en: "Hacker",
    icon: "💻",
    team: "good",
    color: "#10B981", // Emerald Neon
    desc_vi: "Xâm nhập hệ thống, biết được thông tin ẩn của ván đấu.",
    desc_en: "Infiltrates the system to obtain hidden match telemetry.",
    ability_vi: "Thấy được số lượng kẻ xấu còn lại hoặc số lượng phiếu đã bầu trước khi công bố.",
    ability_en: "Sees remaining evil roles or anonymous tally counts prior to final reveal.",
    win_vi: "Phe Dân Làng chiến thắng.",
    win_en: "Civilian team wins.",
    knowsKeyword: true,
    getsHint: true,
    maxCount: 1,
    defaultCount: 0,
    enabled: true,
    isDefault: true
  },
  {
    id: "fortune_teller",
    name_vi: "Nhà Tiên Tri",
    name_en: "Fortune Teller",
    icon: "🔮",
    team: "good",
    color: "#6366F1", // Indigo
    desc_vi: "Nhìn thấu tương lai, nhận được một manh mối giới hạn.",
    desc_en: "Sees into the future, receiving a restricted match clue.",
    ability_vi: "Biết được 2 vai trò đang có mặt trong ván đấu (nhưng không biết thuộc về ai).",
    ability_en: "Learns 2 active roles currently in play (without knowing player assignments).",
    win_vi: "Phe Dân Làng chiến thắng.",
    win_en: "Civilian team wins.",
    knowsKeyword: true,
    getsHint: false,
    maxCount: 1,
    defaultCount: 0,
    enabled: true,
    isDefault: true
  },
  {
    id: "shapeshifter",
    name_vi: "Kẻ Biến Hình",
    name_en: "Shapeshifter",
    icon: "🦎",
    team: "evil",
    color: "#DC2626", // Red-600
    desc_vi: "Kẻ giả mạo bậc cao có khả năng bắt chước vai trò khác.",
    desc_en: "Advanced imposter capable of mimicking innocent roles.",
    ability_vi: "Biết chủ đề nhưng không biết từ khóa. Khi bị điều tra sẽ hiển thị như Dân Thường.",
    ability_en: "Knows category but not keyword. Appears innocent if investigated by Detective.",
    win_vi: "Phe Kẻ Giả Mạo chiến thắng.",
    win_en: "Evil team wins.",
    knowsKeyword: false,
    getsHint: true,
    maxCount: 1,
    defaultCount: 0,
    enabled: true,
    isDefault: true
  },
  {
    id: "trickster",
    name_vi: "Kẻ Đánh Lừa",
    name_en: "Trickster",
    icon: "🎭",
    team: "evil",
    color: "#B91C1C", // Red-700
    desc_vi: "Gây rối loạn thông tin, có thể làm sai lệch một gợi ý.",
    desc_en: "Spreads misinformation, can distort one clue.",
    ability_vi: "Nhận được một từ khóa GIẢ gần giống để tung hỏa mù trong phòng thảo luận.",
    ability_en: "Given a near-identical FALSE keyword to mislead discussion.",
    win_vi: "Phe Kẻ Giả Mạo chiến thắng.",
    win_en: "Evil team wins.",
    knowsKeyword: false,
    getsHint: true,
    maxCount: 1,
    defaultCount: 0,
    enabled: true,
    isDefault: true
  },
  {
    id: "witness",
    name_vi: "Nhân Chứng",
    name_en: "Witness",
    icon: "👁️",
    team: "good",
    color: "#0284C7", // Sky
    desc_vi: "Tình cờ biết được một phần thông tin về sự kiện.",
    desc_en: "Accidentally knows partial intel about the match.",
    ability_vi: "Biết chắc chắn 1 người chơi KHÔNG PHẢI là Kẻ Giả Mạo ngay từ đầu ván.",
    ability_en: "Guaranteed to know 1 player who is DEFINITELY NOT the Imposter.",
    win_vi: "Phe Dân Làng chiến thắng.",
    win_en: "Civilian team wins.",
    knowsKeyword: true,
    getsHint: false,
    maxCount: 2,
    defaultCount: 0,
    enabled: true,
    isDefault: true
  },
  {
    id: "survivor",
    name_vi: "Người Sống Sót",
    name_en: "Survivor",
    icon: "🏕️",
    team: "neutral",
    color: "#EAB308", // Yellow
    desc_vi: "Chỉ quan tâm đến việc sống sót đến cuối ván đấu.",
    desc_en: "Neutral entity whose sole objective is survival until the end.",
    ability_vi: "Biết từ khóa. Không thuộc phe Dân hay Ác. Miễn không bị loại là thắng.",
    ability_en: "Knows keyword. Belongs to neither team. Wins as long as not voted out.",
    win_vi: "Sống sót đến khi ván đấu kết thúc.",
    win_en: "Survive until the match ends.",
    knowsKeyword: true,
    getsHint: false,
    maxCount: 2,
    defaultCount: 0,
    enabled: true,
    isDefault: true
  },
  {
    id: "secret_agent",
    name_vi: "Đặc Vụ Bí Mật",
    name_en: "Secret Agent",
    icon: "🕶️",
    team: "good",
    color: "#475569", // Slate
    desc_vi: "Đặc vụ có nhiệm vụ phụ cài cắm từ bí mật.",
    desc_en: "Undercover agent with a covert secondary keyword mission.",
    ability_vi: "Nhận một từ phụ. Nếu nói được từ này trong thảo luận mà không bị nghi ngờ, nhận thêm điểm.",
    ability_en: "Receives a secret sub-word. Earn bonus MVP score by saying it undetected.",
    win_vi: "Phe Dân Làng chiến thắng.",
    win_en: "Civilian team wins.",
    knowsKeyword: true,
    getsHint: true,
    maxCount: 2,
    defaultCount: 0,
    enabled: true,
    isDefault: true
  },
  {
    id: "mayor",
    name_vi: "Thị Trưởng",
    name_en: "Mayor",
    icon: "🏛️",
    team: "good",
    color: "#F97316", // Orange
    desc_vi: "Người đứng đầu thị trấn, phiếu bầu có trọng số cao hơn.",
    desc_en: "Town leader whose vote carries double weight.",
    ability_vi: "Phiếu bầu của Thị Trưởng tính gấp đôi (2 phiếu) trong mọi vòng bỏ phiếu.",
    ability_en: "The Mayor's vote counts as 2 votes in all voting rounds.",
    win_vi: "Phe Dân Làng chiến thắng.",
    win_en: "Civilian team wins.",
    knowsKeyword: true,
    getsHint: false,
    maxCount: 1,
    defaultCount: 0,
    enabled: true,
    isDefault: true
  },
  {
    id: "mimic",
    name_vi: "Kẻ Bắt Chước",
    name_en: "Mimic",
    icon: "🦜",
    team: "neutral",
    color: "#A855F7", // Purple
    desc_vi: "Sao chép năng lực của vai trò đầu tiên bị loại.",
    desc_en: "Copies the ability and team of the first eliminated player.",
    ability_vi: "Ban đầu là Dân thường, sau khi người đầu tiên bị loại sẽ kế thừa vai trò của họ.",
    ability_en: "Starts as neutral citizen, assumes the identity of the first player exiled.",
    win_vi: "Thắng theo điều kiện của vai trò vừa sao chép.",
    win_en: "Wins according to the conditions of the copied role.",
    knowsKeyword: true,
    getsHint: false,
    maxCount: 1,
    defaultCount: 0,
    enabled: true,
    isDefault: true
  },
  {
    id: "saboteur",
    name_vi: "Kẻ Phá Hoại",
    name_en: "Saboteur",
    icon: "💣",
    team: "evil",
    color: "#991B1B", // Dark red
    desc_vi: "Gây nhiễu và làm rút ngắn thời gian thảo luận.",
    desc_en: "Creates chaos and cuts discussion time short.",
    ability_vi: "Có thể kích hoạt sự kiện rút ngắn thời gian thảo luận đi 30 giây trong ván.",
    ability_en: "Can secretly trigger a sabotage that reduces discussion timer by 30 seconds.",
    win_vi: "Phe Kẻ Giả Mạo chiến thắng.",
    win_en: "Evil team wins.",
    knowsKeyword: false,
    getsHint: true,
    maxCount: 1,
    defaultCount: 0,
    enabled: true,
    isDefault: true
  },
  {
    id: "guardian",
    name_vi: "Người Bảo Hộ",
    name_en: "Guardian",
    icon: "✨",
    team: "good",
    color: "#38BDF8", // Light Blue
    desc_vi: "Ngăn một người bị loại trong một lượt bỏ phiếu gay cấn.",
    desc_en: "Prevents a player from being exiled in a close vote.",
    ability_vi: "Có quyền hủy bỏ kết quả bỏ phiếu của 1 vòng nếu nghi ngờ phe Dân đang bị dắt mũi.",
    ability_en: "Can veto one voting round outcome if suspected innocent is targeted.",
    win_vi: "Phe Dân Làng chiến thắng.",
    win_en: "Civilian team wins.",
    knowsKeyword: true,
    getsHint: false,
    maxCount: 1,
    defaultCount: 0,
    enabled: true,
    isDefault: true
  },
  {
    id: "double_agent",
    name_vi: "Điệp Viên Hai Mang",
    name_en: "Double Agent",
    icon: "🎭",
    team: "neutral",
    color: "#64748B", // Slate
    desc_vi: "Có điều kiện thắng riêng biệt, đổi phe theo thời cuộc.",
    desc_en: "Has independent victory condition, toggling alliances.",
    ability_vi: "Biết từ khóa nhưng cũng biết ai là Kẻ Giả Mạo. Thắng nếu giúp Imposter sống sót mà không bị nghi ngờ.",
    ability_en: "Knows keyword AND who the Imposter is. Wins by keeping Imposter alive undercover.",
    win_vi: "Chiến thắng nếu Imposter không bị loại HOẶC là người cuối cùng sống sót.",
    win_en: "Wins if the Imposter survives OR if they are the final survivor.",
    knowsKeyword: true,
    getsHint: true,
    maxCount: 1,
    defaultCount: 0,
    enabled: true,
    isDefault: true
  }
];

// ==========================================
// CATEGORIES & WORD DICTIONARIES (VI / EN)
// ==========================================
export const CATEGORIES = [
  {
    id: "food_drink",
    name_vi: "Ẩm Thực & Đồ Uống",
    name_en: "Food & Drinks",
    icon: "🍜",
    words: [
      { vi: "Phở Bò Hà Nội", en: "Beef Pho" },
      { vi: "Bánh Mì Pa-tê", en: "Vietnamese Banh Mi" },
      { vi: "Trà Sữa Trân Châu", en: "Boba Milk Tea" },
      { vi: "Cà Phê Trứng", en: "Egg Coffee" },
      { vi: "Bún Bò Huế", en: "Hue Spicy Beef Noodle" },
      { vi: "Pizza Phô Mai", en: "Cheese Pizza" },
      { vi: "Sushi Cá Hồi", en: "Salmon Sushi" },
      { vi: "Gà Rán Giòn Cay", en: "Crispy Fried Chicken" },
      { vi: "Kem Bơ Đà Lạt", en: "Avocado Ice Cream" },
      { vi: "Lẩu Thái Hải Sản", en: "Thai Seafood Hotpot" }
    ]
  },
  {
    id: "animals",
    name_vi: "Thế Giới Động Vật",
    name_en: "Wild Animals",
    icon: "🦁",
    words: [
      { vi: "Hổ Bengal", en: "Bengal Tiger" },
      { vi: "Cá Heo Đại Dương", en: "Ocean Dolphin" },
      { vi: "Chim Cánh Cụt Hoàng Đế", en: "Emperor Penguin" },
      { vi: "Gấu Trúc Khổng Lồ", en: "Giant Panda" },
      { vi: "Tắc Kè Hoa", en: "Chameleon" },
      { vi: "Sư Tử Châu Phi", en: "African Lion" },
      { vi: "Đại Bàng Đầu Trắng", en: "Bald Eagle" },
      { vi: "Bạch Tuộc Khổng Lồ", en: "Giant Octopus" },
      { vi: "Sói Xám Bắc Cực", en: "Arctic Wolf" },
      { vi: "Hươu Cao Cổ", en: "Giraffe" }
    ]
  },
  {
    id: "movies_culture",
    name_vi: "Điện Ảnh & Phim Truyện",
    name_en: "Cinema & Movies",
    icon: "🎬",
    words: [
      { vi: "Titanic (Tàu Chìm)", en: "Titanic" },
      { vi: "Harry Potter & Phù Thủy", en: "Harry Potter" },
      { vi: "Avatar (Hành Tinh Xanh)", en: "Avatar" },
      { vi: "Spider-Man (Người Nhện)", en: "Spider-Man" },
      { vi: "Jurassic Park (Công Viên Khủng Long)", en: "Jurassic Park" },
      { vi: "Avengers: Endgame", en: "Avengers: Endgame" },
      { vi: "Batman (Kỵ Sĩ Bóng Đêm)", en: "The Dark Knight" },
      { vi: "Inception (Kẻ Đánh Cắp Giấc Mơ)", en: "Inception" },
      { vi: "Sherlock Holmes", en: "Sherlock Holmes" },
      { vi: "Star Wars (Chiến Tranh Giữa Các Vì Sao)", en: "Star Wars" }
    ]
  },
  {
    id: "vietnam_culture",
    name_vi: "Văn Hóa & Địa Danh Việt Nam",
    name_en: "Vietnam Culture & Landmarks",
    icon: "🇻🇳",
    words: [
      { vi: "Vịnh Hạ Long", en: "Ha Long Bay" },
      { vi: "Hồ Gươm & Tháp Rùa", en: "Sword Lake & Turtle Tower" },
      { vi: "Phố Cổ Hội An", en: "Hoi An Ancient Town" },
      { vi: "Chợ Bến Thành", en: "Ben Thanh Market" },
      { vi: "Đỉnh Fansipan", en: "Fansipan Peak" },
      { vi: "Áo Dài Truyền Thống", en: "Traditional Ao Dai" },
      { vi: "Nón Lá Bài Thơ", en: "Conical Hat" },
      { vi: "Trống Đồng Đông Sơn", en: "Dong Son Bronze Drum" },
      { vi: "Cố Đô Huế", en: "Hue Imperial Citadel" },
      { vi: "Động Phong Nha", en: "Phong Nha Cave" }
    ]
  },
  {
    id: "daily_life",
    name_vi: "Đời Sống Hàng Ngày",
    name_en: "Everyday Objects",
    icon: "🎒",
    words: [
      { vi: "Điện Thoại Thông Minh", en: "Smartphone" },
      { vi: "Bàn Chải Đánh Răng", en: "Toothbrush" },
      { vi: "Tai Nghe Không Dây", en: "Wireless Earbuds" },
      { vi: "Đồng Hồ Báo Thức", en: "Alarm Clock" },
      { vi: "Kính Râm Chống Nắng", en: "Sunglasses" },
      { vi: "Xe Máy Tay Ga", en: "Motorcycle Scooter" },
      { vi: "Nồi Cơm Điện", en: "Rice Cooker" },
      { vi: "Thẻ Tín Dụng", en: "Credit Card" },
      { vi: "Cây Dù Che Mưa", en: "Rain Umbrella" },
      { vi: "Ví Cầm Tay", en: "Wallet" }
    ]
  },
  {
    id: "sci_fi_tech",
    name_vi: "Công Nghệ & Khoa Học Vũ Trụ",
    name_en: "Sci-Fi & Space Tech",
    icon: "🚀",
    words: [
      { vi: "Trí Tuệ Nhân Tạo (AI)", en: "Artificial Intelligence (AI)" },
      { vi: "Tàu Vũ Trụ Mars Rover", en: "Mars Rover" },
      { vi: "Kính Viễn Vọng James Webb", en: "James Webb Telescope" },
      { vi: "Du Hành Thời Gian", en: "Time Travel" },
      { vi: "Trạm Vũ Trụ Quốc Tế (ISS)", en: "International Space Station" },
      { vi: "Lỗ Đen Vũ Trụ (Black Hole)", en: "Supermassive Black Hole" },
      { vi: "Robot Hình Người", en: "Humanoid Robot" },
      { vi: "Thực Tế Ảo (VR Glass)", en: "Virtual Reality" },
      { vi: "Xe Ô Tô Bay", en: "Flying Car" },
      { vi: "Máy Tính Lượng Tử", en: "Quantum Computer" }
    ]
  }
];

// ==========================================
// FUN RANDOM PLAYER NAMES
// ==========================================
export const RANDOM_NAMES_VI = [
  "Bảo Long", "Minh Anh", "Thỏ Ngọc", "Khánh Vy", "Gia Huy",
  "Tú Linh", "Đức Bo", "Trúc Mây", "Hoàng Nam", "Diệu Nhi",
  "Tuấn Kiệt", "Mai Phương", "Quang Hải", "Hà My", "Hải Đăng",
  "Thanh Hằng", "Duy Mạnh", "Bích Phương", "Tiến Dũng", "Ngọc Trinh"
];

export const RANDOM_NAMES_EN = [
  "Alex Blaze", "Chloe Star", "Max Hunter", "Luna Sky", "Leo Vance",
  "Maya Reed", "Oliver Fox", "Sophie Chen", "Lucas Grey", "Emma Watson",
  "Ethan Cole", "Zoe Frost", "Noah Storm", "Ava Knight", "Liam Scott",
  "Mia Harper", "Jackson Ray", "Ella Brooks", "Aiden Cross", "Grace Miller"
];

export const AVATAR_PALETTES = [
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
