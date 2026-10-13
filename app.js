// ==========================================================
// GUESS THE IMPOSTER - ALL-IN-ONE STANDALONE CONTROLLER
// Zero external dependencies, 100% offline & local file compatible
// ==========================================================

// ==========================================
// 1. ROLES & CATEGORIES DATA
// ==========================================
const DEFAULT_ROLES = [
  {
    id: "civilian",
    name_vi: "Dân Thường",
    name_en: "Civilian",
    icon: "👤",
    team: "good",
    color: "#10B981",
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
    color: "#EF4444",
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
    color: "#3B82F6",
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
    color: "#06B6D4",
    desc_vi: "Có khả năng chữa lành và bảo vệ một người khỏi bị loại.",
    desc_en: "Can protect one player from being eliminated.",
    ability_vi: "Chọn bảo vệ 1 người chơi trong vòng bỏ phiếu, cứu họ nếu họ bị đa số phiếu.",
    ability_en: "Shield 1 player during voting, saving them if they receive majority votes.",
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
    id: "spy",
    name_vi: "Gián Điệp",
    name_en: "Spy",
    icon: "🕵️",
    team: "good",
    color: "#8B5CF6",
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
    enabled: false,
    isDefault: true
  },
  {
    id: "sheriff",
    name_vi: "Cảnh Sát Trưởng",
    name_en: "Sheriff",
    icon: "⭐",
    team: "good",
    color: "#F59E0B",
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
    enabled: false,
    isDefault: true
  },
  {
    id: "jester",
    name_vi: "Kẻ Hề",
    name_en: "Jester",
    icon: "🃏",
    team: "neutral",
    color: "#EC4899",
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
    enabled: false,
    isDefault: true
  },
  {
    id: "bodyguard",
    name_vi: "Vệ Sĩ",
    name_en: "Bodyguard",
    icon: "🛡️",
    team: "good",
    color: "#14B8A6",
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
    enabled: false,
    isDefault: true
  },
  {
    id: "hacker",
    name_vi: "Hacker",
    name_en: "Hacker",
    icon: "💻",
    team: "good",
    color: "#10B981",
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
    enabled: false,
    isDefault: true
  },
  {
    id: "fortune_teller",
    name_vi: "Nhà Tiên Tri",
    name_en: "Fortune Teller",
    icon: "🔮",
    team: "good",
    color: "#6366F1",
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
    enabled: false,
    isDefault: true
  },
  {
    id: "shapeshifter",
    name_vi: "Kẻ Biến Hình",
    name_en: "Shapeshifter",
    icon: "🦎",
    team: "evil",
    color: "#DC2626",
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
    enabled: false,
    isDefault: true
  },
  {
    id: "trickster",
    name_vi: "Kẻ Đánh Lừa",
    name_en: "Trickster",
    icon: "🎭",
    team: "evil",
    color: "#B91C1C",
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
    enabled: false,
    isDefault: true
  },
  {
    id: "witness",
    name_vi: "Nhân Chứng",
    name_en: "Witness",
    icon: "👁️",
    team: "good",
    color: "#0284C7",
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
    enabled: false,
    isDefault: true
  },
  {
    id: "survivor",
    name_vi: "Người Sống Sót",
    name_en: "Survivor",
    icon: "🏕️",
    team: "neutral",
    color: "#EAB308",
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
    enabled: false,
    isDefault: true
  },
  {
    id: "secret_agent",
    name_vi: "Đặc Vụ Bí Mật",
    name_en: "Secret Agent",
    icon: "🕶️",
    team: "good",
    color: "#475569",
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
    enabled: false,
    isDefault: true
  },
  {
    id: "mayor",
    name_vi: "Thị Trưởng",
    name_en: "Mayor",
    icon: "🏛️",
    team: "good",
    color: "#F97316",
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
    enabled: false,
    isDefault: true
  },
  {
    id: "mimic",
    name_vi: "Kẻ Bắt Chước",
    name_en: "Mimic",
    icon: "🦜",
    team: "neutral",
    color: "#A855F7",
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
    enabled: false,
    isDefault: true
  },
  {
    id: "saboteur",
    name_vi: "Kẻ Phá Hoại",
    name_en: "Saboteur",
    icon: "💣",
    team: "evil",
    color: "#991B1B",
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
    enabled: false,
    isDefault: true
  },
  {
    id: "guardian",
    name_vi: "Người Bảo Hộ",
    name_en: "Guardian",
    icon: "✨",
    team: "good",
    color: "#38BDF8",
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
    enabled: false,
    isDefault: true
  },
  {
    id: "double_agent",
    name_vi: "Điệp Viên Hai Mang",
    name_en: "Double Agent",
    icon: "🎭",
    team: "neutral",
    color: "#64748B",
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
    enabled: false,
    isDefault: true
  }
];

const CATEGORIES = [
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
      { vi: "Jurassic Park (Khủng Long)", en: "Jurassic Park" },
      { vi: "Avengers: Endgame", en: "Avengers: Endgame" },
      { vi: "Batman (Kỵ Sĩ Bóng Đêm)", en: "The Dark Knight" },
      { vi: "Inception (Giấc Mơ)", en: "Inception" },
      { vi: "Sherlock Holmes", en: "Sherlock Holmes" },
      { vi: "Star Wars", en: "Star Wars" }
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

const RANDOM_NAMES_VI = [
  "Bảo Long", "Minh Anh", "Thỏ Ngọc", "Khánh Vy", "Gia Huy",
  "Tú Linh", "Đức Bo", "Trúc Mây", "Hoàng Nam", "Diệu Nhi",
  "Tuấn Kiệt", "Mai Phương", "Quang Hải", "Hà My", "Hải Đăng",
  "Thanh Hằng", "Duy Mạnh", "Bích Phương", "Tiến Dũng", "Ngọc Trinh"
];

const RANDOM_NAMES_EN = [
  "Alex Blaze", "Chloe Star", "Max Hunter", "Luna Sky", "Leo Vance",
  "Maya Reed", "Oliver Fox", "Sophie Chen", "Lucas Grey", "Emma Watson",
  "Ethan Cole", "Zoe Frost", "Noah Storm", "Ava Knight", "Liam Scott",
  "Mia Harper", "Jackson Ray", "Ella Brooks", "Aiden Cross", "Grace Miller"
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

// ==========================================
// 2. WEB AUDIO SYNTHESIZER
// ==========================================
class SoundManager {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  vibrate(pattern = 25) {
    if (navigator.vibrate) {
      try { navigator.vibrate(pattern); } catch (e) {}
    }
  }

  playClick() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    this.vibrate(15);
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.exponentialRampToValueAtTime(120, now + 0.05);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.05);
  }

  playToggle() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    this.vibrate(20);
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(680, now + 0.08);
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.08);
  }

  playFlipCard() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    this.vibrate(40);
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.18);
    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.3, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.22);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.22);
  }

  playTick() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    this.vibrate(20);
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(950, now);
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.04);
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.04);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.04);
  }

  playGong() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    this.vibrate([100, 50, 150]);
    const now = this.ctx.currentTime;
    [160, 240, 360].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.18 / (idx + 1), now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 1.2);
    });
  }

  playDramaticReveal() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    this.vibrate([80, 50, 120]);
    const now = this.ctx.currentTime;
    const notes = [261.63, 329.63, 392.00, 523.25];
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const startTime = now + idx * 0.08;
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);
      gain.gain.setValueAtTime(0.2, startTime);
      gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.4);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(startTime);
      osc.stop(startTime + 0.4);
    });
  }

  playVote() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    this.vibrate(30);
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.linearRampToValueAtTime(587.33, now + 0.1);
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.15);
  }

  playWinFanfare() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    this.vibrate([60, 40, 60, 40, 150]);
    const now = this.ctx.currentTime;
    const melody = [
      { f: 392, d: 0.12 },
      { f: 523.25, d: 0.12 },
      { f: 659.25, d: 0.15 },
      { f: 783.99, d: 0.35 }
    ];
    let t = now;
    melody.forEach((note) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(note.f, t);
      gain.gain.setValueAtTime(0.25, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + note.d);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + note.d);
      t += note.d * 0.9;
    });
  }
}

const sound = new SoundManager();

// ==========================================
// 3. I18N DICTIONARY
// ==========================================
const I18N = {
  vi: {
    party_game: "Party Deduction Game",
    hero_subtitle: "Ai là Kẻ Giả Mạo đang ẩn nấp?",
    mode_pass: "Chuyền Máy (Offline)",
    mode_online: "Chơi Online (Room)",
    room_code: "Mã phòng:",
    online_desc: "Các thiết bị khác truy cập cùng mạng Wi-Fi hoặc nhập mã phòng để tham gia.",
    instruction_text: "Mỗi người chơi bí mật xem vai trò của mình. Hãy thảo luận, tìm manh mối và đoán xem ai là kẻ giả mạo.",
    section_match_settings: "Cài đặt ván chơi",
    setting_players: "Số người chơi",
    setting_players_desc: "Từ 3 đến 20 người",
    setting_imposters: "Kẻ Giả Mạo",
    setting_imposters_desc: "Số lượng Imposter trong ván",
    setting_roles: "Vai trò (Roles)",
    setting_roles_desc: "20 vai trò mặc định & tự tạo",
    setting_category: "Chủ đề từ khóa",
    setting_hints: "Gợi ý cho Imposter",
    setting_hints_desc: "Cung cấp manh mối cho kẻ giả mạo",
    setting_timelimit: "Giới hạn thời gian",
    setting_difficulty: "Độ khó",
    setting_difficulty_desc: "Dễ, Bình thường, Khó, Tùy chỉnh",
    btn_start_game: "Bắt đầu thiết lập người chơi",
    btn_back: "Quay lại",
    title_choose_roles: "Quản lý vai trò",
    btn_custom_role: "+ Tạo vai trò",
    balance_label: "Tỷ lệ cân bằng vai trò:",
    btn_auto_balance: "⚡ Tự động cân bằng (Auto Balance)",
    filter_all: "Tất cả",
    filter_good: "Phe Dân (Good)",
    filter_evil: "Phe Ác (Evil)",
    filter_neutral: "Trung lập (Neutral)",
    filter_custom: "Tự tạo (Custom)",
    btn_save_roles: "Lưu cấu hình vai trò",
    title_players: "Tên người chơi",
    btn_random_names: "Tên ngẫu nhiên",
    players_instruction: "Nhập tên của từng người chơi theo thứ tự ngồi chuyền điện thoại theo vòng tròn.",
    btn_deal_roles: "Phân vai & Chuyền điện thoại",
    pass_phone_to: "Chuyền điện thoại cho:",
    curtain_warning: "Đảm bảo những người xung quanh không nhìn thấy màn hình trước khi bấm lật thẻ!",
    btn_curtain_ready: "Tôi đã cầm máy, lật thẻ",
    tap_to_flip: "Chạm để mở thẻ bí mật",
    secret_keyword_label: "Từ khóa bí mật:",
    btn_hide_role: "Đã nhớ, giấu vai trò",
    phase_discussion: "Vòng thảo luận",
    toolbox_btn: "Năng lực bí mật",
    timer_caption: "Thời gian còn lại",
    hint_available: "Gợi ý sẵn sàng",
    discussion_tip: "Lần lượt từng người đưa ra 1 câu mô tả về từ khóa mà không được nói thẳng tên từ. Kẻ giả mạo hãy cố gắng bắt chước!",
    btn_pause: "Tạm dừng",
    btn_resume: "Tiếp tục",
    btn_add_time: "+30 Giây",
    btn_vote_now: "Bỏ phiếu loại Kẻ Giả Mạo",
    title_voting: "Bỏ phiếu loại",
    voting_instruction: "Chọn người chơi mà cả nhóm nghi ngờ là Kẻ Giả Mạo nhiều nhất. Người có nhiều phiếu nhất sẽ bị vạch mặt!",
    suspect_chosen: "Nghi phạm được chọn:",
    btn_confirm_elimination: "Vạch mặt & Công bố kết quả",
    imposter_was: "Kẻ Giả Mạo thực sự là:",
    secret_word_was: "Từ khóa bí mật là:",
    comeback_title: "Cơ hội lật kèo của Imposter!",
    comeback_desc: "Nếu Imposter bị bỏ phiếu loại nhưng đoán đúng từ khóa bí mật, Imposter sẽ LẬT KÈO CHIẾN THẮNG!",
    btn_guess: "Đoán từ",
    section_roster: "Danh tính toàn bộ người chơi",
    section_timeline: "Diễn biến ván đấu",
    btn_play_again: "Chơi lại ván mới",
    btn_change_roles: "Thay đổi vai trò",
    btn_back_home: "Về trang chủ",
    title_history: "Lịch sử ván chơi",
    btn_clear: "Xóa lịch sử",
    modal_custom_role_title: "Tạo vai trò mới",
    form_role_name: "Tên vai trò",
    form_role_icon: "Icon / Emoji",
    form_role_color: "Màu nhận diện",
    form_role_team: "Phe (Team)",
    form_role_desc: "Mô tả ngắn",
    form_role_ability: "Kỹ năng đặc biệt",
    form_role_win: "Điều kiện chiến thắng",
    form_knows_keyword: "Biết từ khóa",
    form_gets_hint: "Nhận gợi ý",
    btn_save_role: "Lưu vai trò (Save Role)",
    modal_categories_title: "Chọn chủ đề từ khóa",
    toolbox_title: "Hộp công cụ vai trò bí mật"
  },
  en: {
    party_game: "Party Deduction Game",
    hero_subtitle: "Who is the hidden Imposter?",
    mode_pass: "Pass the Phone",
    mode_online: "Play Online",
    room_code: "Room Code:",
    online_desc: "Other devices connect on the same Wi-Fi or enter room code to join.",
    instruction_text: "Each player secretly views their role. Discuss, search for clues, and deduce who the imposter is.",
    section_match_settings: "Game Setup",
    setting_players: "Players",
    setting_players_desc: "From 3 to 20 players",
    setting_imposters: "Imposters",
    setting_imposters_desc: "Number of imposters in match",
    setting_roles: "Choose Roles",
    setting_roles_desc: "20 default & custom roles",
    setting_category: "Keyword Topic",
    setting_hints: "Hints for Imposter",
    setting_hints_desc: "Provide clues for the imposter",
    setting_timelimit: "Time Limit",
    setting_difficulty: "Difficulty",
    setting_difficulty_desc: "Easy, Normal, Hard, Custom",
    btn_start_game: "Start Player Setup",
    btn_back: "Back",
    title_choose_roles: "Choose Roles",
    btn_custom_role: "+ Custom Role",
    balance_label: "Role balance ratio:",
    btn_auto_balance: "⚡ Auto Balance Roles",
    filter_all: "All",
    filter_good: "Good",
    filter_evil: "Evil",
    filter_neutral: "Neutral",
    filter_custom: "Custom",
    btn_save_roles: "Save Roles Setup",
    title_players: "Player Names",
    btn_random_names: "Random Names",
    players_instruction: "Enter each player's name according to circle seating order.",
    btn_deal_roles: "Deal Roles & Pass Phone",
    pass_phone_to: "Pass the phone to:",
    curtain_warning: "Ensure nobody around you is peeking before tapping reveal!",
    btn_curtain_ready: "I'm ready, reveal role",
    tap_to_flip: "Tap to reveal secret card",
    secret_keyword_label: "Secret Keyword:",
    btn_hide_role: "Memorized, hide role",
    phase_discussion: "Discussion Round",
    toolbox_btn: "Secret Toolkit",
    timer_caption: "Time remaining",
    hint_available: "Hints available",
    discussion_tip: "Take turns giving 1 clue describing the secret word without saying it directly. Imposter must blend in!",
    btn_pause: "Pause",
    btn_resume: "Resume",
    btn_add_time: "+30 Sec",
    btn_vote_now: "Vote for Imposter",
    title_voting: "Voting Phase",
    voting_instruction: "Select the player most suspected to be the Imposter. The player with the most votes is unmasked!",
    suspect_chosen: "Suspect chosen:",
    btn_confirm_elimination: "Unmask & Reveal Results",
    imposter_was: "The real Imposter was:",
    secret_word_was: "Secret keyword was:",
    comeback_title: "Imposter Comeback Shot!",
    comeback_desc: "If unmasked, the Imposter can steal the victory by guessing the secret keyword!",
    btn_guess: "Guess Word",
    section_roster: "All Players Roles Breakdown",
    section_timeline: "Match Event Timeline",
    btn_play_again: "Play Again",
    btn_change_roles: "Change Roles",
    btn_back_home: "Back to Home",
    title_history: "Match History",
    btn_clear: "Clear History",
    modal_custom_role_title: "Create Custom Role",
    form_role_name: "Role Name",
    form_role_icon: "Icon / Emoji",
    form_role_color: "Identity Color",
    form_role_team: "Team",
    form_role_desc: "Short Description",
    form_role_ability: "Special Ability",
    form_role_win: "Win Condition",
    form_knows_keyword: "Knows Keyword",
    form_gets_hint: "Receives Clues",
    btn_save_role: "Save Role",
    modal_categories_title: "Select Keyword Topic",
    toolbox_title: "Secret Role Toolkit"
  }
};

// ==========================================
// 4. MAIN GAME ENGINE
// ==========================================
class ImposterGame {
  constructor() {
    this.lang = localStorage.getItem('gti_lang') || 'vi';
    this.theme = localStorage.getItem('gti_theme') || 'dark';
    this.frameMode = localStorage.getItem('gti_frame') !== 'false';

    // Match Configuration
    this.playerCount = 6;
    this.imposterCount = 1;
    this.selectedCategoryId = 'food_drink';
    this.hintsEnabled = true;
    this.durationSeconds = 180;
    this.difficulty = 'Normal';
    this.gameMode = 'pass';

    // Active Roles
    this.customRoles = JSON.parse(localStorage.getItem('gti_custom_roles') || '[]');
    this.roles = this.buildInitialRoles();

    // Match State
    this.players = [];
    this.secretWord = null;
    this.categoryData = null;
    this.currentRevealIndex = 0;
    this.isCardFlipped = false;

    // Timer State
    this.timerInterval = null;
    this.timerRemaining = 180;
    this.timerTotal = 180;
    this.isPaused = false;
    this.roundNumber = 1;

    // Voting State
    this.selectedSuspectId = null;

    // Results State
    this.winningTeam = null;
    this.history = JSON.parse(localStorage.getItem('gti_history') || '[]');

    this.init();
  }

  buildInitialRoles() {
    const cloned = DEFAULT_ROLES.map(r => ({ ...r, count: r.defaultCount }));
    this.customRoles.forEach(cr => {
      cloned.push({ ...cr, count: cr.defaultCount || 0 });
    });
    return cloned;
  }

  init() {
    this.applyTheme();
    this.applyLanguage();
    this.applyFrameMode();
    this.bindEvents();
    this.updateClock();
    setInterval(() => this.updateClock(), 10000);

    this.autoBalanceRoles(this.playerCount);
    this.renderSettingsValues();
  }

  applyTheme() {
    document.documentElement.setAttribute('data-theme', this.theme);
    const icon = document.getElementById('theme-icon');
    if (icon) icon.textContent = this.theme === 'dark' ? '🌙' : '☀️';
    localStorage.setItem('gti_theme', this.theme);
  }

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    sound.playToggle();
    this.applyTheme();
  }

  applyLanguage() {
    document.documentElement.lang = this.lang;
    const flag = document.getElementById('lang-flag');
    const text = document.getElementById('lang-text');
    if (flag) flag.textContent = this.lang === 'vi' ? '🇻🇳' : '🇬🇧';
    if (text) text.textContent = this.lang === 'vi' ? 'VI' : 'EN';
    localStorage.setItem('gti_lang', this.lang);

    const dict = I18N[this.lang] || I18N.vi;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    this.renderSettingsValues();
    this.renderRolesList();
  }

  toggleLanguage() {
    this.lang = this.lang === 'vi' ? 'en' : 'vi';
    sound.playToggle();
    this.applyLanguage();
  }

  applyFrameMode() {
    if (this.frameMode) {
      document.body.classList.add('frame-mode');
      document.body.classList.remove('fullscreen-mode');
      const icon = document.getElementById('frame-icon');
      if (icon) icon.textContent = '📱';
    } else {
      document.body.classList.remove('frame-mode');
      document.body.classList.add('fullscreen-mode');
      const icon = document.getElementById('frame-icon');
      if (icon) icon.textContent = '🖥️';
    }
    localStorage.setItem('gti_frame', this.frameMode);
  }

  toggleFrameMode() {
    this.frameMode = !this.frameMode;
    sound.playToggle();
    this.applyFrameMode();
  }

  updateClock() {
    const el = document.getElementById('phone-clock');
    if (el) {
      const d = new Date();
      const h = String(d.getHours()).padStart(2, '0');
      const m = String(d.getMinutes()).padStart(2, '0');
      el.textContent = `${h}:${m}`;
    }
  }

  switchScreen(screenId) {
    sound.playClick();
    document.querySelectorAll('.view-screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(screenId);
    if (target) {
      target.classList.add('active');
      target.scrollTop = 0;
    }
    const select = document.getElementById('screen-jump-select');
    if (select) select.value = screenId;

    if (screenId === 'screen-history') {
      this.renderHistoryScreen();
    }
  }

  autoBalanceRoles(players) {
    this.roles.forEach(r => {
      r.count = 0;
      r.enabled = false;
    });

    const imposterRole = this.roles.find(r => r.id === 'imposter');
    const civilianRole = this.roles.find(r => r.id === 'civilian');
    const detectiveRole = this.roles.find(r => r.id === 'detective');
    const doctorRole = this.roles.find(r => r.id === 'doctor');
    const spyRole = this.roles.find(r => r.id === 'spy');
    const jesterRole = this.roles.find(r => r.id === 'jester');
    const mayorRole = this.roles.find(r => r.id === 'mayor');
    const hackerRole = this.roles.find(r => r.id === 'hacker');
    const bodyguardRole = this.roles.find(r => r.id === 'bodyguard');
    const shapeshifterRole = this.roles.find(r => r.id === 'shapeshifter');
    const saboteurRole = this.roles.find(r => r.id === 'saboteur');

    let impCount = 1;
    if (players >= 8 && players <= 12) impCount = 2;
    else if (players >= 13 && players <= 16) impCount = 3;
    else if (players >= 17) impCount = 4;

    this.imposterCount = impCount;

    if (players <= 5) {
      imposterRole.count = 1; imposterRole.enabled = true;
      if (players >= 4 && detectiveRole) {
        detectiveRole.count = 1; detectiveRole.enabled = true;
      }
      const remain = players - imposterRole.count - (detectiveRole?.count || 0);
      civilianRole.count = Math.max(1, remain); civilianRole.enabled = true;
    } else if (players <= 9) {
      imposterRole.count = impCount; imposterRole.enabled = true;
      if (detectiveRole) { detectiveRole.count = 1; detectiveRole.enabled = true; }
      if (doctorRole) { doctorRole.count = 1; doctorRole.enabled = true; }
      if (players >= 7 && spyRole) { spyRole.count = 1; spyRole.enabled = true; }
      if (players >= 9 && jesterRole) { jesterRole.count = 1; jesterRole.enabled = true; }
      
      const assigned = this.getAssignedCount();
      civilianRole.count = Math.max(1, players - assigned);
      civilianRole.enabled = true;
    } else if (players <= 15) {
      imposterRole.count = impCount; imposterRole.enabled = true;
      if (detectiveRole) { detectiveRole.count = 1; detectiveRole.enabled = true; }
      if (doctorRole) { doctorRole.count = 1; doctorRole.enabled = true; }
      if (spyRole) { spyRole.count = 1; spyRole.enabled = true; }
      if (jesterRole) { jesterRole.count = 1; jesterRole.enabled = true; }
      if (mayorRole) { mayorRole.count = 1; mayorRole.enabled = true; }
      if (hackerRole) { hackerRole.count = 1; hackerRole.enabled = true; }
      if (bodyguardRole) { bodyguardRole.count = 1; bodyguardRole.enabled = true; }

      const assigned = this.getAssignedCount();
      civilianRole.count = Math.max(2, players - assigned);
      civilianRole.enabled = true;
    } else {
      imposterRole.count = impCount - 1; imposterRole.enabled = true;
      if (shapeshifterRole) { shapeshifterRole.count = 1; shapeshifterRole.enabled = true; }
      if (detectiveRole) { detectiveRole.count = 2; detectiveRole.enabled = true; }
      if (doctorRole) { doctorRole.count = 1; doctorRole.enabled = true; }
      if (spyRole) { spyRole.count = 1; spyRole.enabled = true; }
      if (jesterRole) { jesterRole.count = 1; jesterRole.enabled = true; }
      if (mayorRole) { mayorRole.count = 1; mayorRole.enabled = true; }
      if (hackerRole) { hackerRole.count = 1; hackerRole.enabled = true; }
      if (saboteurRole) { saboteurRole.count = 1; saboteurRole.enabled = true; }

      const assigned = this.getAssignedCount();
      civilianRole.count = Math.max(3, players - assigned);
      civilianRole.enabled = true;
    }

    this.updateBalanceMeter();
    this.renderSettingsValues();
  }

  getAssignedCount() {
    return this.roles.reduce((sum, r) => sum + (r.enabled ? (r.count || 0) : 0), 0);
  }

  updateBalanceMeter() {
    const total = this.getAssignedCount();
    const meterText = document.getElementById('role-balance-count-text');
    const warningMsg = document.getElementById('role-balance-warning-msg');
    const badgeCount = document.getElementById('badge-roles-count');

    if (badgeCount) badgeCount.textContent = `${total} / ${this.playerCount}`;

    let goodCount = 0, evilCount = 0, neutralCount = 0;
    this.roles.forEach(r => {
      if (r.enabled) {
        if (r.team === 'good') goodCount += r.count;
        else if (r.team === 'evil') evilCount += r.count;
        else neutralCount += r.count;
      }
    });

    const barGood = document.getElementById('bar-good');
    const barNeutral = document.getElementById('bar-neutral');
    const barEvil = document.getElementById('bar-evil');
    const pct = total > 0 ? 100 / total : 0;
    if (barGood) barGood.style.width = `${goodCount * pct}%`;
    if (barNeutral) barNeutral.style.width = `${neutralCount * pct}%`;
    if (barEvil) barEvil.style.width = `${evilCount * pct}%`;

    if (meterText) {
      meterText.textContent = `${total} / ${this.playerCount} ${this.lang === 'vi' ? 'Vai trò' : 'Roles'}`;
      if (total === this.playerCount) {
        meterText.className = 'balance-meter-text balanced';
        if (warningMsg) warningMsg.textContent = this.lang === 'vi' 
          ? `✓ Bộ vai trò đã khớp chính xác với ${this.playerCount} người chơi.`
          : `✓ Role count perfectly matches ${this.playerCount} players.`;
      } else if (total < this.playerCount) {
        meterText.className = 'balance-meter-text unbalanced';
        const diff = this.playerCount - total;
        if (warningMsg) warningMsg.textContent = this.lang === 'vi'
          ? `⚠️ Đang thiếu ${diff} vai trò. Nhấn Auto Balance hoặc tăng số Dân thường.`
          : `⚠️ Needs ${diff} more roles. Click Auto Balance or add Civilians.`;
      } else {
        meterText.className = 'balance-meter-text unbalanced';
        const diff = total - this.playerCount;
        if (warningMsg) warningMsg.textContent = this.lang === 'vi'
          ? `⚠️ Đang thừa ${diff} vai trò so với số lượng người chơi.`
          : `⚠️ Exceeds player count by ${diff} roles.`;
      }
    }
  }

  renderSettingsValues() {
    const valPlayers = document.getElementById('val-players');
    if (valPlayers) valPlayers.textContent = this.playerCount;

    const valImposters = document.getElementById('val-imposters');
    if (valImposters) valImposters.textContent = this.imposterCount;

    const cat = CATEGORIES.find(c => c.id === this.selectedCategoryId) || CATEGORIES[0];
    const catName = document.getElementById('label-category-name');
    if (catName) catName.textContent = this.lang === 'vi' ? cat.name_vi : cat.name_en;

    const timeVal = document.getElementById('val-time');
    if (timeVal) timeVal.textContent = `${Math.floor(this.durationSeconds / 60)}m`;

    const diffBadge = document.getElementById('badge-difficulty');
    if (diffBadge) diffBadge.textContent = this.difficulty;

    this.updateBalanceMeter();
  }

  renderRolesList(filter = 'all') {
    const container = document.getElementById('roles-container');
    if (!container) return;
    container.innerHTML = '';

    const filtered = this.roles.filter(r => {
      if (filter === 'all') return true;
      if (filter === 'custom') return !r.isDefault;
      return r.team === filter;
    });

    filtered.forEach(role => {
      const card = document.createElement('div');
      card.className = `role-card-item ${role.enabled ? 'enabled' : ''}`;
      card.style.setProperty('--role-color', role.color);

      const title = this.lang === 'vi' ? role.name_vi : role.name_en;
      const desc = this.lang === 'vi' ? role.desc_vi : role.desc_en;
      const ability = this.lang === 'vi' ? role.ability_vi : role.ability_en;
      const winCond = this.lang === 'vi' ? role.win_vi : role.win_en;
      const teamLabel = role.team === 'good' ? (this.lang === 'vi' ? 'Phe Dân' : 'Good')
                      : role.team === 'evil' ? (this.lang === 'vi' ? 'Phe Ác' : 'Evil')
                      : (this.lang === 'vi' ? 'Trung lập' : 'Neutral');

      card.innerHTML = `
        <div class="role-header-line">
          <div class="role-id-badge">
            <div class="role-emoji-icon" style="background: ${role.color}20; color: ${role.color};">
              ${role.icon}
            </div>
            <div class="role-title-team">
              <div style="display: flex; align-items: center; gap: 6px;">
                <h4>${title}</h4>
                <span class="team-tag ${role.team}">${teamLabel}</span>
              </div>
              <span style="font-size: 11px; color: var(--text-muted);">${winCond}</span>
            </div>
          </div>
          <label class="switch-control">
            <input type="checkbox" class="role-toggle-switch" data-role-id="${role.id}" ${role.enabled ? 'checked' : ''} />
            <span class="switch-slider"></span>
          </label>
        </div>
        <p class="role-desc-short">${desc}</p>
        <div class="role-ability-pill">⚡ <strong>${this.lang === 'vi' ? 'Kỹ năng:' : 'Ability:'}</strong> ${ability}</div>
        <div class="role-footer-controls">
          <span style="font-size: 11px; color: var(--text-muted);">
            ${this.lang === 'vi' ? 'Số lượng cho phép:' : 'Allowed quantity:'}
          </span>
          <div class="role-count-stepper">
            <button class="stepper-btn role-dec-btn" data-role-id="${role.id}">-</button>
            <span class="stepper-val" id="role-val-${role.id}">${role.count}</span>
            <button class="stepper-btn role-inc-btn" data-role-id="${role.id}">+</button>
          </div>
        </div>
      `;

      const toggle = card.querySelector('.role-toggle-switch');
      toggle.addEventListener('change', (e) => {
        sound.playToggle();
        role.enabled = e.target.checked;
        if (role.enabled && role.count === 0) role.count = 1;
        card.classList.toggle('enabled', role.enabled);
        card.querySelector(`#role-val-${role.id}`).textContent = role.count;
        this.updateBalanceMeter();
      });

      const decBtn = card.querySelector('.role-dec-btn');
      decBtn.addEventListener('click', () => {
        if (role.count > 0) {
          sound.playClick();
          role.count--;
          if (role.count === 0) {
            role.enabled = false;
            toggle.checked = false;
            card.classList.remove('enabled');
          }
          card.querySelector(`#role-val-${role.id}`).textContent = role.count;
          this.updateBalanceMeter();
        }
      });

      const incBtn = card.querySelector('.role-inc-btn');
      incBtn.addEventListener('click', () => {
        if (role.count < (role.maxCount || 10)) {
          sound.playClick();
          role.count++;
          role.enabled = true;
          toggle.checked = true;
          card.classList.add('enabled');
          card.querySelector(`#role-val-${role.id}`).textContent = role.count;
          this.updateBalanceMeter();
        }
      });

      container.appendChild(card);
    });
  }

  generatePlayerInputs() {
    const container = document.getElementById('player-inputs-container');
    if (!container) return;
    container.innerHTML = '';

    const randomPool = this.lang === 'vi' ? [...RANDOM_NAMES_VI] : [...RANDOM_NAMES_EN];
    this.shuffle(randomPool);

    for (let i = 0; i < this.playerCount; i++) {
      const palette = AVATAR_PALETTES[i % AVATAR_PALETTES.length];
      const defaultName = randomPool[i] || `Player ${i + 1}`;

      const row = document.createElement('div');
      row.className = 'setting-item-row';
      row.style.padding = '10px 14px';
      row.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px; width: 100%;">
          <div style="width: 40px; height: 40px; border-radius: 50%; background: ${palette.bg}; color: ${palette.text}; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;">
            ${palette.emoji}
          </div>
          <div style="flex: 1;">
            <span style="font-size: 11px; color: var(--text-muted); font-weight: 600;">
              ${this.lang === 'vi' ? 'Người chơi' : 'Player'} ${i + 1}
            </span>
            <input type="text" class="player-name-input form-input" data-index="${i}" value="${defaultName}" style="padding: 6px 10px; font-weight: 700; font-size: 14px; margin-top: 2px;" />
          </div>
        </div>
      `;
      container.appendChild(row);
    }
  }

  startMatchSession() {
    const inputs = document.querySelectorAll('.player-name-input');
    const names = [];
    inputs.forEach((inp, idx) => {
      names.push(inp.value.trim() || `Player ${idx + 1}`);
    });

    const deck = [];
    this.roles.forEach(r => {
      if (r.enabled && r.count > 0) {
        for (let i = 0; i < r.count; i++) {
          deck.push({ ...r });
        }
      }
    });

    while (deck.length < this.playerCount) {
      const civ = this.roles.find(r => r.id === 'civilian');
      deck.push({ ...civ });
    }
    deck.length = this.playerCount;
    this.shuffle(deck);

    const cat = CATEGORIES.find(c => c.id === this.selectedCategoryId) || CATEGORIES[0];
    this.categoryData = cat;
    const randomWordObj = cat.words[Math.floor(Math.random() * cat.words.length)];
    this.secretWord = this.lang === 'vi' ? randomWordObj.vi : randomWordObj.en;

    this.players = names.map((name, idx) => {
      const assignedRole = deck[idx];
      const palette = AVATAR_PALETTES[idx % AVATAR_PALETTES.length];
      return {
        id: `p_${idx + 1}`,
        name,
        avatar: palette.emoji,
        avatarBg: palette.bg,
        role: assignedRole,
        isImposter: assignedRole.team === 'evil',
        isEliminated: false,
        votesReceived: 0
      };
    });

    this.currentRevealIndex = 0;
    this.isCardFlipped = false;
    this.showRevealStep(this.currentRevealIndex);
    this.switchScreen('screen-reveal');
  }

  showRevealStep(index) {
    if (index >= this.players.length) {
      sound.playWinFanfare();
      this.startDiscussionStage();
      return;
    }

    const player = this.players[index];
    const curtainBox = document.getElementById('reveal-curtain-box');
    const cardViewport = document.getElementById('reveal-card-viewport');
    const innerCard = document.getElementById('flip-card-inner');
    const progressPill = document.getElementById('reveal-progress-pill');

    if (progressPill) {
      progressPill.textContent = `${this.lang === 'vi' ? 'Người chơi' : 'Player'} ${index + 1} / ${this.players.length}`;
    }

    curtainBox.style.display = 'flex';
    cardViewport.style.display = 'none';
    innerCard.classList.remove('flipped');
    this.isCardFlipped = false;

    document.getElementById('curtain-player-name').textContent = player.name;
    document.getElementById('flip-front-player-name').textContent = player.name;

    const backCard = document.getElementById('flip-card-back');
    backCard.style.setProperty('--role-color', player.role.color);

    const teamTag = document.getElementById('revealed-team-tag');
    teamTag.className = `team-tag ${player.role.team}`;
    teamTag.textContent = player.role.team === 'good' ? (this.lang === 'vi' ? 'Phe Dân (Good)' : 'Good Team')
                        : player.role.team === 'evil' ? (this.lang === 'vi' ? 'Phe Ác (Evil)' : 'Evil Team')
                        : (this.lang === 'vi' ? 'Trung Lập (Neutral)' : 'Neutral Team');

    document.getElementById('revealed-icon').textContent = player.role.icon;
    document.getElementById('revealed-name').textContent = this.lang === 'vi' ? player.role.name_vi : player.role.name_en;

    const keywordLabel = document.getElementById('keyword-label');
    const keywordText = document.getElementById('keyword-text');
    const keywordCat = document.getElementById('keyword-category');

    if (player.role.knowsKeyword) {
      keywordLabel.textContent = this.lang === 'vi' ? 'Từ khóa bí mật:' : 'Secret Keyword:';
      keywordText.className = 'secret-keyword-text';
      keywordText.textContent = this.secretWord;
      keywordCat.textContent = `${this.lang === 'vi' ? 'Chủ đề:' : 'Topic:'} ${this.lang === 'vi' ? this.categoryData.name_vi : this.categoryData.name_en}`;
    } else {
      keywordLabel.textContent = this.lang === 'vi' ? 'BẠN LÀ KẺ GIẢ MẠO!' : 'YOU ARE THE IMPOSTER!';
      keywordText.className = 'secret-keyword-text imposter';
      keywordText.textContent = this.hintsEnabled 
        ? (this.lang === 'vi' ? `Chủ đề: ${this.categoryData.name_vi}` : `Topic: ${this.categoryData.name_en}`)
        : (this.lang === 'vi' ? 'Không biết từ khóa!' : 'Unknown Keyword!');
      keywordCat.textContent = this.lang === 'vi' 
        ? 'Hãy hòa nhập, lắng nghe manh mối và lừa mọi người!'
        : 'Blend in, listen carefully and mislead the group!';
    }

    document.getElementById('revealed-ability').textContent = this.lang === 'vi' ? player.role.ability_vi : player.role.ability_en;
  }

  startDiscussionStage() {
    this.switchScreen('screen-discussion');
    this.timerRemaining = this.durationSeconds;
    this.timerTotal = this.durationSeconds;
    this.isPaused = false;
    this.roundNumber = 1;

    document.getElementById('hud-category-name').textContent = this.lang === 'vi' ? this.categoryData.name_vi : this.categoryData.name_en;
    document.getElementById('hud-players-count').textContent = `${this.players.length} ${this.lang === 'vi' ? 'Người sống sót' : 'Active Players'}`;

    this.runTimer();
  }

  runTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.updateTimerDisplay();

    this.timerInterval = setInterval(() => {
      if (!this.isPaused) {
        this.timerRemaining--;
        this.updateTimerDisplay();

        if (this.timerRemaining <= 10 && this.timerRemaining > 0) {
          sound.playTick();
        }

        if (this.timerRemaining <= 0) {
          clearInterval(this.timerInterval);
          sound.playGong();
          setTimeout(() => {
            this.startVotingStage();
          }, 1000);
        }
      }
    }, 1000);
  }

  updateTimerDisplay() {
    const mins = Math.floor(Math.max(0, this.timerRemaining) / 60);
    const secs = Math.max(0, this.timerRemaining) % 60;
    const str = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    
    const display = document.getElementById('timer-display');
    if (display) display.textContent = str;

    const wrapper = document.getElementById('timer-wrapper');
    if (wrapper) {
      if (this.timerRemaining <= 10) wrapper.classList.add('timer-critical');
      else wrapper.classList.remove('timer-critical');
    }

    const circle = document.getElementById('timer-progress');
    if (circle) {
      const circumference = 2 * Math.PI * 95;
      const ratio = this.timerRemaining / this.timerTotal;
      circle.style.strokeDashoffset = circumference * (1 - Math.max(0, ratio));
    }
  }

  startVotingStage() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.switchScreen('screen-voting');
    sound.playVote();

    this.selectedSuspectId = null;
    document.getElementById('suspect-name').textContent = '-';
    document.getElementById('voting-round-badge').textContent = `${this.lang === 'vi' ? 'Vòng' : 'Round'} ${this.roundNumber}`;

    const grid = document.getElementById('voting-cards-grid');
    grid.innerHTML = '';

    this.players.forEach(p => {
      if (p.isEliminated) return;

      const card = document.createElement('div');
      card.className = 'vote-player-card';
      card.dataset.playerId = p.id;
      card.innerHTML = `
        <div class="vote-player-avatar" style="background: ${p.avatarBg};">
          ${p.avatar}
        </div>
        <div class="vote-player-name">${p.name}</div>
        <div style="font-size: 11px; color: var(--text-muted);">${this.lang === 'vi' ? 'Nghi phạm' : 'Suspect'}</div>
      `;

      card.addEventListener('click', () => {
        sound.playClick();
        grid.querySelectorAll('.vote-player-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        this.selectedSuspectId = p.id;
        document.getElementById('suspect-name').textContent = p.name;
      });

      grid.appendChild(card);
    });
  }

  submitVotingOutcome() {
    if (!this.selectedSuspectId) {
      alert(this.lang === 'vi' ? 'Vui lòng chọn 1 người chơi bị nghi ngờ!' : 'Please select 1 suspected player!');
      return;
    }

    const suspect = this.players.find(p => p.id === this.selectedSuspectId);
    suspect.isEliminated = true;

    sound.playDramaticReveal();

    if (suspect.role.id === 'jester') {
      this.winningTeam = 'jester';
    } else if (suspect.isImposter) {
      const remainingImposters = this.players.filter(p => p.isImposter && !p.isEliminated);
      if (remainingImposters.length === 0) {
        this.winningTeam = 'good';
      } else {
        this.roundNumber++;
        this.startVotingStage();
        return;
      }
    } else {
      const activeInnocents = this.players.filter(p => !p.isImposter && !p.isEliminated);
      const activeImposters = this.players.filter(p => p.isImposter && !p.isEliminated);
      if (activeImposters.length >= activeInnocents.length) {
        this.winningTeam = 'evil';
      } else {
        this.winningTeam = 'evil';
      }
    }

    this.showResultsScreen(suspect);
  }

  showResultsScreen(eliminatedPlayer) {
    this.switchScreen('screen-results');

    if (typeof confetti === 'function') {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }

    const winnerBanner = document.getElementById('result-winner-banner');
    if (this.winningTeam === 'good') {
      winnerBanner.textContent = this.lang === 'vi' ? '🎉 PHE DÂN LÀNG CHIẾN THẮNG!' : '🎉 CIVILIANS WIN!';
      winnerBanner.style.background = 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)';
    } else if (this.winningTeam === 'jester') {
      winnerBanner.textContent = this.lang === 'vi' ? '🃏 KẺ HỀ CHIẾN THẮNG ĐỘC LẬP!' : '🃏 JESTER WINS SOLO!';
      winnerBanner.style.background = 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)';
    } else {
      winnerBanner.textContent = this.lang === 'vi' ? '💀 KẺ GIẢ MẠO CHIẾN THẮNG!' : '💀 IMPOSTERS WIN!';
      winnerBanner.style.background = 'var(--gradient-brand)';
    }

    const imposters = this.players.filter(p => p.isImposter).map(p => p.name).join(', ');
    document.getElementById('result-imposter-names').textContent = imposters || eliminatedPlayer.name;
    document.getElementById('result-keyword').textContent = this.secretWord;

    const comebackBox = document.getElementById('imposter-comeback-card');
    if (eliminatedPlayer.isImposter) {
      comebackBox.style.display = 'flex';
      document.getElementById('input-imposter-guess').value = '';
      document.getElementById('comeback-result-msg').style.display = 'none';
    } else {
      comebackBox.style.display = 'none';
    }

    const rosterList = document.getElementById('results-roster-list');
    rosterList.innerHTML = '';
    this.players.forEach(p => {
      const row = document.createElement('div');
      row.className = 'role-summary-row';
      const roleName = this.lang === 'vi' ? p.role.name_vi : p.role.name_en;
      row.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
          <div style="width: 32px; height: 32px; border-radius: 50%; background: ${p.avatarBg}; display: flex; align-items: center; justify-content: center; font-size: 16px;">
            ${p.avatar}
          </div>
          <div>
            <div style="font-family: var(--font-display); font-weight: 700; font-size: 14px;">${p.name}</div>
            <div style="font-size: 11px; color: ${p.role.color}; font-weight: 600;">${p.role.icon} ${roleName}</div>
          </div>
        </div>
        <div>
          ${p.isEliminated 
            ? `<span class="team-tag" style="background: rgba(239, 68, 68, 0.2); color: #ef4444;">${this.lang === 'vi' ? 'Bị loại' : 'Exiled'}</span>`
            : `<span class="team-tag" style="background: rgba(16, 185, 129, 0.2); color: #10b981;">${this.lang === 'vi' ? 'Sống sót' : 'Survived'}</span>`}
        </div>
      `;
      rosterList.appendChild(row);
    });

    const logBox = document.getElementById('match-timeline-log');
    logBox.innerHTML = `
      <div>• <strong>${this.lang === 'vi' ? 'Bắt đầu ván:' : 'Match start:'}</strong> ${this.players.length} ${this.lang === 'vi' ? 'người chơi tham gia' : 'players participated'}.</div>
      <div>• <strong>${this.lang === 'vi' ? 'Chủ đề từ khóa:' : 'Topic:'}</strong> ${this.categoryData.name_vi} (${this.secretWord}).</div>
      <div>• <strong>${this.lang === 'vi' ? 'Kết quả bỏ phiếu:' : 'Voting verdict:'}</strong> ${eliminatedPlayer.name} (${this.lang === 'vi' ? eliminatedPlayer.role.name_vi : eliminatedPlayer.role.name_en}) ${this.lang === 'vi' ? 'đã bị đa số trục xuất.' : 'was eliminated.'}</div>
    `;

    this.saveMatchToHistory();
  }

  checkImposterComebackGuess() {
    const input = document.getElementById('input-imposter-guess');
    const guess = input.value.trim().toLowerCase();
    const target = this.secretWord.toLowerCase();
    const msg = document.getElementById('comeback-result-msg');
    msg.style.display = 'block';

    if (guess && (target.includes(guess) || guess.includes(target))) {
      sound.playWinFanfare();
      msg.style.color = '#ef4444';
      msg.textContent = this.lang === 'vi' 
        ? '🔥 CHÍNH XÁC! Kẻ Giả Mạo đã đoán đúng từ khóa và LẬT KÈO CHIẾN THẮNG!' 
        : '🔥 CORRECT! The Imposter guessed the keyword and STOLE THE WIN!';
      const banner = document.getElementById('result-winner-banner');
      banner.textContent = this.lang === 'vi' ? '💀 KẺ GIẢ MẠO LẬT KÈO THẮNG!' : '💀 IMPOSTER COMEBACK WIN!';
      banner.style.background = 'var(--gradient-brand)';
    } else {
      sound.playClick();
      msg.style.color = '#71717a';
      msg.textContent = this.lang === 'vi'
        ? '❌ Đoán sai rồi! Dân Làng vẫn giữ vững chiến thắng.'
        : '❌ Incorrect guess! Civilians maintain victory.';
    }
  }

  saveMatchToHistory() {
    const record = {
      date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      category: this.lang === 'vi' ? this.categoryData.name_vi : this.categoryData.name_en,
      keyword: this.secretWord,
      winner: this.winningTeam,
      playersCount: this.players.length,
      imposters: this.players.filter(p => p.isImposter).map(p => p.name).join(', ')
    };
    this.history.unshift(record);
    if (this.history.length > 20) this.history.pop();
    localStorage.setItem('gti_history', JSON.stringify(this.history));
  }

  renderHistoryScreen() {
    const container = document.getElementById('history-items-container');
    if (!container) return;
    container.innerHTML = '';

    if (this.history.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; color: var(--text-muted); padding: 40px 0; font-size: 13px;">
          ${this.lang === 'vi' ? 'Chưa có lịch sử ván đấu nào.' : 'No match history recorded yet.'}
        </div>
      `;
      return;
    }

    this.history.forEach(item => {
      const row = document.createElement('div');
      row.className = 'setting-item-row';
      row.style.cursor = 'default';
      const winText = item.winner === 'good' ? (this.lang === 'vi' ? 'Phe Dân thắng' : 'Civilians won')
                    : item.winner === 'jester' ? (this.lang === 'vi' ? 'Kẻ Hề thắng' : 'Jester won')
                    : (this.lang === 'vi' ? 'Imposter thắng' : 'Imposter won');
      const winColor = item.winner === 'good' ? 'var(--team-good)' : 'var(--primary-red)';

      row.innerHTML = `
        <div>
          <div style="font-family: var(--font-display); font-weight: 700; font-size: 14px;">
            ${item.category} • <span style="color: ${winColor};">${winText}</span>
          </div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">
            ${item.date} • ${item.playersCount} ${this.lang === 'vi' ? 'người' : 'players'} • Imposter: ${item.imposters}
          </div>
        </div>
        <span class="setting-badge-val" style="color: #fff;">${item.keyword}</span>
      `;
      container.appendChild(row);
    });
  }

  openSpecialAbilityToolbox() {
    const modal = document.getElementById('modal-toolbox');
    const content = document.getElementById('toolbox-content');
    content.innerHTML = '';

    const activeRoles = new Set(this.players.filter(p => !p.isEliminated).map(p => p.role.id));

    if (activeRoles.has('detective')) {
      const item = document.createElement('div');
      item.className = 'setting-item-row';
      item.style.flexDirection = 'column';
      item.style.alignItems = 'flex-start';
      item.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px; width: 100%;">
          <span style="font-size: 24px;">🔍</span>
          <div>
            <strong>${this.lang === 'vi' ? 'Thám Tử - Soi Danh Tính' : 'Detective Inspection'}</strong>
            <p style="font-size: 11px; color: var(--text-muted);">${this.lang === 'vi' ? 'Chọn 1 người chơi để kiểm tra phe' : 'Inspect 1 player alignment'}</p>
          </div>
        </div>
        <div style="display: flex; gap: 8px; width: 100%; margin-top: 10px;">
          <select id="detective-target" class="form-select" style="flex: 1; padding: 6px 10px;">
            ${this.players.filter(p => !p.isEliminated && p.role.id !== 'detective').map(p => `<option value="${p.id}">${p.name}</option>`).join('')}
          </select>
          <button id="btn-detective-scan" class="ctrl-btn" style="background: var(--team-good); color: #fff;">
            ${this.lang === 'vi' ? 'Kiểm tra' : 'Inspect'}
          </button>
        </div>
        <div id="detective-result" style="font-size: 12px; font-weight: 700; margin-top: 6px; display: none;"></div>
      `;
      content.appendChild(item);

      item.querySelector('#btn-detective-scan').addEventListener('click', () => {
        sound.playDramaticReveal();
        const targetId = item.querySelector('#detective-target').value;
        const target = this.players.find(p => p.id === targetId);
        const resEl = item.querySelector('#detective-result');
        resEl.style.display = 'block';
        if (target.isImposter) {
          resEl.style.color = '#ef4444';
          resEl.textContent = this.lang === 'vi' 
            ? `⚠️ BÁO ĐỘNG: ${target.name} THUỘC PHE ÁC (IMPOSTER)!` 
            : `⚠️ ALERT: ${target.name} IS EVIL (IMPOSTER)!`;
        } else {
          resEl.style.color = '#10b981';
          resEl.textContent = this.lang === 'vi'
            ? `✓ BÌNH AN: ${target.name} là người vô tội (Phe Dân).`
            : `✓ CLEAR: ${target.name} is Innocent.`;
        }
      });
    }

    if (activeRoles.has('spy')) {
      const item = document.createElement('div');
      item.className = 'setting-item-row';
      const firstLetter = this.secretWord ? this.secretWord.charAt(0) : '?';
      item.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 24px;">🕵️</span>
          <div>
            <strong>${this.lang === 'vi' ? 'Gián Điệp - Manh Mối Ẩn' : 'Spy Intel'}</strong>
            <p style="font-size: 12px; color: var(--team-neutral);">
              ${this.lang === 'vi' ? `Chữ cái đầu của từ khóa: "${firstLetter}..."` : `First letter of keyword: "${firstLetter}..."`}
            </p>
          </div>
        </div>
      `;
      content.appendChild(item);
    }

    if (activeRoles.has('saboteur')) {
      const item = document.createElement('div');
      item.className = 'setting-item-row';
      item.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 24px;">💣</span>
            <div>
              <strong>${this.lang === 'vi' ? 'Kẻ Phá Hoại - Trừ Giờ' : 'Saboteur - Cut Time'}</strong>
              <p style="font-size: 11px; color: var(--text-muted);">${this.lang === 'vi' ? 'Rút ngắn 30s của phe Dân' : 'Subtract 30s'}</p>
            </div>
          </div>
          <button id="btn-sabotage-trigger" class="ctrl-btn" style="background: var(--primary-red); color: #fff;">
            -30s
          </button>
        </div>
      `;
      content.appendChild(item);

      item.querySelector('#btn-sabotage-trigger').addEventListener('click', () => {
        sound.playTick();
        this.timerRemaining = Math.max(5, this.timerRemaining - 30);
        this.updateTimerDisplay();
        alert(this.lang === 'vi' ? 'Đã kích hoạt phá hoại: Giảm 30 giây!' : 'Sabotage triggered: -30 seconds!');
      });
    }

    if (content.children.length === 0) {
      content.innerHTML = `
        <div style="text-align: center; color: var(--text-muted); padding: 20px 0; font-size: 13px;">
          ${this.lang === 'vi' ? 'Không có vai trò hành động đặc biệt nào đang kích hoạt trong ván.' : 'No active special role abilities available for this match.'}
        </div>
      `;
    }

    modal.classList.add('open');
  }

  bindEvents() {
    document.getElementById('btn-toggle-lang')?.addEventListener('click', () => this.toggleLanguage());
    document.getElementById('btn-toggle-theme')?.addEventListener('click', () => this.toggleTheme());
    document.getElementById('btn-toggle-frame')?.addEventListener('click', () => this.toggleFrameMode());
    document.getElementById('btn-toggle-sound')?.addEventListener('click', () => {
      sound.muted = !sound.muted;
      document.getElementById('sound-icon').textContent = sound.muted ? '🔇' : '🔊';
    });

    document.getElementById('screen-jump-select')?.addEventListener('change', (e) => {
      this.switchScreen(e.target.value);
    });

    document.getElementById('mode-tab-pass')?.addEventListener('click', () => {
      sound.playClick();
      this.gameMode = 'pass';
      document.getElementById('mode-tab-pass').classList.add('active');
      document.getElementById('mode-tab-online').classList.remove('active');
      document.getElementById('online-lobby-banner').style.display = 'none';
    });
    document.getElementById('mode-tab-online')?.addEventListener('click', () => {
      sound.playClick();
      this.gameMode = 'online';
      document.getElementById('mode-tab-online').classList.add('active');
      document.getElementById('mode-tab-pass').classList.remove('active');
      document.getElementById('online-lobby-banner').style.display = 'flex';
    });

    document.getElementById('btn-dec-players')?.addEventListener('click', () => {
      if (this.playerCount > 3) {
        sound.playClick();
        this.playerCount--;
        this.autoBalanceRoles(this.playerCount);
        this.renderSettingsValues();
      }
    });
    document.getElementById('btn-inc-players')?.addEventListener('click', () => {
      if (this.playerCount < 20) {
        sound.playClick();
        this.playerCount++;
        this.autoBalanceRoles(this.playerCount);
        this.renderSettingsValues();
      }
    });

    document.getElementById('btn-dec-imposters')?.addEventListener('click', () => {
      if (this.imposterCount > 1) {
        sound.playClick();
        this.imposterCount--;
        const imp = this.roles.find(r => r.id === 'imposter');
        if (imp) imp.count = this.imposterCount;
        this.updateBalanceMeter();
        this.renderSettingsValues();
      }
    });
    document.getElementById('btn-inc-imposters')?.addEventListener('click', () => {
      if (this.imposterCount < Math.floor(this.playerCount / 2)) {
        sound.playClick();
        this.imposterCount++;
        const imp = this.roles.find(r => r.id === 'imposter');
        if (imp) imp.count = this.imposterCount;
        this.updateBalanceMeter();
        this.renderSettingsValues();
      }
    });

    document.getElementById('btn-dec-time')?.addEventListener('click', () => {
      sound.playClick();
      const currentMin = Math.floor(this.durationSeconds / 60);
      if (currentMin > 1) {
        this.durationSeconds = (currentMin - 1) * 60;
        this.renderSettingsValues();
      }
    });
    document.getElementById('btn-inc-time')?.addEventListener('click', () => {
      sound.playClick();
      const currentMin = Math.floor(this.durationSeconds / 60);
      if (currentMin < 8) {
        this.durationSeconds = (currentMin + 1) * 60;
        this.renderSettingsValues();
      }
    });

    document.getElementById('btn-cycle-difficulty')?.addEventListener('click', () => {
      sound.playClick();
      const diffs = ['Easy', 'Normal', 'Hard', 'Custom'];
      const nextIdx = (diffs.indexOf(this.difficulty) + 1) % diffs.length;
      this.difficulty = diffs[nextIdx];
      this.renderSettingsValues();
    });

    document.getElementById('switch-hints')?.addEventListener('change', (e) => {
      sound.playToggle();
      this.hintsEnabled = e.target.checked;
    });

    document.getElementById('btn-start-game')?.addEventListener('click', () => {
      this.generatePlayerInputs();
      this.switchScreen('screen-players');
    });

    document.getElementById('btn-open-roles')?.addEventListener('click', () => {
      this.renderRolesList();
      this.switchScreen('screen-roles');
    });
    document.getElementById('btn-back-to-setup')?.addEventListener('click', () => {
      this.switchScreen('screen-setup');
    });
    document.getElementById('btn-save-roles-done')?.addEventListener('click', () => {
      this.renderSettingsValues();
      this.switchScreen('screen-setup');
    });

    document.getElementById('btn-auto-balance')?.addEventListener('click', () => {
      sound.playWinFanfare();
      this.autoBalanceRoles(this.playerCount);
      this.renderRolesList();
    });

    document.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        sound.playClick();
        document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.renderRolesList(chip.dataset.filter);
      });
    });

    document.getElementById('btn-back-from-players')?.addEventListener('click', () => {
      this.switchScreen('screen-setup');
    });
    document.getElementById('btn-random-names')?.addEventListener('click', () => {
      sound.playClick();
      this.generatePlayerInputs();
    });
    document.getElementById('btn-confirm-players')?.addEventListener('click', () => {
      sound.playClick();
      this.startMatchSession();
    });

    document.getElementById('btn-curtain-ready')?.addEventListener('click', () => {
      sound.playClick();
      document.getElementById('reveal-curtain-box').style.display = 'none';
      document.getElementById('reveal-card-viewport').style.display = 'block';
    });

    document.getElementById('flip-card-inner')?.addEventListener('click', () => {
      sound.playFlipCard();
      const card = document.getElementById('flip-card-inner');
      card.classList.toggle('flipped');
      this.isCardFlipped = card.classList.contains('flipped');
    });

    document.getElementById('btn-hide-role')?.addEventListener('click', (e) => {
      e.stopPropagation();
      sound.playFlipCard();
      this.currentRevealIndex++;
      this.showRevealStep(this.currentRevealIndex);
    });

    document.getElementById('btn-pause-resume')?.addEventListener('click', () => {
      sound.playClick();
      this.isPaused = !this.isPaused;
      const icon = document.getElementById('pause-icon');
      const text = document.getElementById('pause-text');
      if (this.isPaused) {
        icon.textContent = '▶️';
        text.textContent = this.lang === 'vi' ? 'Tiếp tục' : 'Resume';
      } else {
        icon.textContent = '⏸️';
        text.textContent = this.lang === 'vi' ? 'Tạm dừng' : 'Pause';
      }
    });

    document.getElementById('btn-add-30s')?.addEventListener('click', () => {
      sound.playClick();
      this.timerRemaining += 30;
      this.timerTotal += 30;
      this.updateTimerDisplay();
    });

    document.getElementById('btn-go-to-vote')?.addEventListener('click', () => {
      this.startVotingStage();
    });

    document.getElementById('btn-back-to-timer')?.addEventListener('click', () => {
      this.switchScreen('screen-discussion');
    });
    document.getElementById('btn-submit-vote')?.addEventListener('click', () => {
      this.submitVotingOutcome();
    });

    document.getElementById('btn-play-again')?.addEventListener('click', () => {
      sound.playClick();
      this.startMatchSession();
    });
    document.getElementById('btn-change-roles')?.addEventListener('click', () => {
      this.switchScreen('screen-roles');
    });
    document.getElementById('btn-back-to-home')?.addEventListener('click', () => {
      this.switchScreen('screen-setup');
    });
    document.getElementById('btn-check-guess')?.addEventListener('click', () => {
      this.checkImposterComebackGuess();
    });

    document.getElementById('btn-history-back')?.addEventListener('click', () => {
      this.switchScreen('screen-setup');
    });
    document.getElementById('btn-clear-history')?.addEventListener('click', () => {
      sound.playClick();
      this.history = [];
      localStorage.removeItem('gti_history');
      this.renderHistoryScreen();
    });

    document.getElementById('btn-open-categories')?.addEventListener('click', () => {
      sound.playClick();
      this.openCategoriesPicker();
    });
    document.getElementById('btn-close-categories')?.addEventListener('click', () => {
      document.getElementById('modal-categories').classList.remove('open');
    });

    document.getElementById('btn-open-custom-role')?.addEventListener('click', () => {
      sound.playClick();
      document.getElementById('modal-custom-role').classList.add('open');
    });
    document.getElementById('btn-close-custom-role')?.addEventListener('click', () => {
      document.getElementById('modal-custom-role').classList.remove('open');
    });
    document.getElementById('form-custom-role')?.addEventListener('submit', (e) => {
      e.preventDefault();
      this.saveCustomRole();
    });

    document.getElementById('btn-open-ability-toolbox')?.addEventListener('click', () => {
      sound.playClick();
      this.openSpecialAbilityToolbox();
    });
    document.getElementById('btn-close-toolbox')?.addEventListener('click', () => {
      document.getElementById('modal-toolbox').classList.remove('open');
    });
  }

  openCategoriesPicker() {
    const list = document.getElementById('categories-picker-list');
    list.innerHTML = '';

    CATEGORIES.forEach(cat => {
      const item = document.createElement('div');
      item.className = 'setting-item-row';
      const isSel = cat.id === this.selectedCategoryId;
      if (isSel) item.style.borderColor = 'var(--primary-red)';

      const name = this.lang === 'vi' ? cat.name_vi : cat.name_en;
      item.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="font-size: 26px;">${cat.icon}</span>
          <div>
            <h4 style="font-family: var(--font-display); font-weight: 700;">${name}</h4>
            <p style="font-size: 11px; color: var(--text-muted);">${cat.words.length} ${this.lang === 'vi' ? 'từ khóa phong phú' : 'rich keywords'}</p>
          </div>
        </div>
        ${isSel ? '<span style="color: var(--primary-red); font-size: 18px; font-weight: 800;">✓</span>' : ''}
      `;

      item.addEventListener('click', () => {
        sound.playClick();
        this.selectedCategoryId = cat.id;
        document.getElementById('label-category-name').textContent = name;
        document.getElementById('modal-categories').classList.remove('open');
      });

      list.appendChild(item);
    });

    document.getElementById('modal-categories').classList.add('open');
  }

  saveCustomRole() {
    const name = document.getElementById('cr-name').value.trim();
    const icon = document.getElementById('cr-icon').value.trim() || '🎭';
    const color = document.getElementById('cr-color').value;
    const team = document.getElementById('cr-team').value;
    const desc = document.getElementById('cr-desc').value.trim();
    const ability = document.getElementById('cr-ability').value.trim();
    const win = document.getElementById('cr-win').value.trim();
    const knows = document.getElementById('cr-knows-keyword').checked;
    const hints = document.getElementById('cr-gets-hint').checked;

    if (!name) return;

    sound.playWinFanfare();

    const newRole = {
      id: `custom_${Date.now()}`,
      name_vi: name,
      name_en: name,
      icon,
      team,
      color,
      desc_vi: desc,
      desc_en: desc,
      ability_vi: ability,
      ability_en: ability,
      win_vi: win,
      win_en: win,
      knowsKeyword: knows,
      getsHint: hints,
      maxCount: 5,
      defaultCount: 1,
      count: 1,
      enabled: true,
      isDefault: false
    };

    this.customRoles.push(newRole);
    this.roles.push(newRole);
    localStorage.setItem('gti_custom_roles', JSON.stringify(this.customRoles));

    document.getElementById('form-custom-role').reset();
    document.getElementById('modal-custom-role').classList.remove('open');

    this.renderRolesList();
    this.updateBalanceMeter();
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}

// Start Game Instance
window.addEventListener('DOMContentLoaded', () => {
  window.gameApp = new ImposterGame();
});
