/**
 * ============================================================================
 * FILE CẤU HÌNH THƯƠNG HIỆU CÁ NHÂN: THẦY LÝ HOÀNG EM
 * Trường THCS-THPT Vĩnh Lộc • 17 Năm Kinh Nghiệm Toán & Tin Học THCS (6, 7, 8, 9)
 * ============================================================================
 */

export interface TeacherProfile {
  fullName: string;
  shortName: string;
  title: string;
  degree: string;
  tagline: string;
  philosophyQuote: string;
  bio: string;
  workplace: string;
  location: string;
  experienceYears: number;
  totalStudents: string;
  passRateGrade10: string;
  highScoreCountTHPT: string;
  phone: string;
  zalo: string;
  email: string;
  facebookUrl: string;
  youtubeUrl: string;
  avatarUrl: string;
  badges: string[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  organization: string;
  description: string;
  highlight: string;
  category: 'education' | 'career' | 'award' | 'innovation';
}

export interface TeachingMethod {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
}

export interface CourseItem {
  id: string;
  title: string;
  gradeCategory: 'TOAN_9_VAO_10' | 'TOAN_8' | 'TOAN_6_7' | 'TIN_HOC_THCS' | 'HSG_TOAN_TIN';
  gradeLabel: string;
  level: string;
  schedule: string;
  duration: string;
  classSize: string;
  tuition: string;
  badge?: string;
  targetScore: string;
  description: string;
  topics: string[];
  Commitment: string;
}

export interface QuizQuestion {
  id: string;
  category: 'TOAN_8_9' | 'TOAN_6_7' | 'TIN_HOC_6_9';
  topic: string;
  difficulty: 'Cơ bản' | 'Thông hiểu' | 'Vận dụng' | 'Vận dụng cao';
  question: string; // Supports $...$ LaTeX
  options: string[]; // 4 options supporting $...$ LaTeX
  correctIndex: number;
  explanation: string; // Step-by-step LaTeX explanation
}

export interface MathFormula {
  id: string;
  category: 'DAI_SO_8_9' | 'HINH_HOC_8_9' | 'TOAN_6_7' | 'TIN_HOC_THUAT_TOAN';
  categoryLabel: string;
  title: string;
  formulaTex: string;
  note: string;
  exampleTex: string;
}

export interface StudyMaterial {
  id: string;
  title: string;
  category: 'Toán 9 & Thi vào 10' | 'Toán 8 Trọng tâm' | 'Toán 6 & Toán 7' | 'Tin học 6-7-8-9' | 'Sổ tay công thức';
  grade: string;
  pages: number;
  downloads: number;
  updatedAt: string;
  hasDetailedSolution: boolean;
  summary: string;
  previewQuestions: string[];
}

export interface StudentAchievement {
  id: string;
  studentName: string;
  school: string;
  examName: string;
  score: string;
  achievementTitle: string;
  year: string;
  quote: string;
  avatarBg: string;
}

export interface Testimonial {
  id: string;
  authorName: string;
  role: string;
  studentResult: string;
  content: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  keyTakeaways: string[];
  fullContent: string;
}

export const DEFAULT_TEACHER_PROFILE: TeacherProfile = {
  fullName: 'Thầy Lý Hoàng Em',
  shortName: 'Thầy Hoàng Em',
  title: 'Giáo viên Toán & Tin học THCS (Khối 6, 7, 8, 9) • Thế mạnh Chuyên sâu Toán THCS & Ôn thi vào 10',
  degree: 'Trường THCS-THPT Vĩnh Lộc • 17 Năm Kinh Nghiệm Giảng Dạy & Bồi Dưỡng Học Sinh',
  tagline: 'Vững gốc Toán THCS – Làm chủ Tư duy Thuật toán & Công nghệ số',
  philosophyQuote:
    '“Môn Toán rèn luyện tư duy suy luận chặt chẽ, môn Tin học chắp cánh khả năng giải quyết vấn đề bằng công nghệ. Khi học sinh hiểu rõ bản chất từ lớp 6 đến lớp 9, mọi kỳ thi đều trở nên nhẹ nhàng.”',
  bio: 'Tôi là Lý Hoàng Em, giáo viên công tác tại Trường THCS-THPT Vĩnh Lộc với 17 năm kinh nghiệm trực tiếp giảng dạy hai bộ môn Toán và Tin học khối 6, 7, 8, 9. Thế mạnh mũi nhọn của tôi là giảng dạy chuyên sâu môn Toán cấp THCS (lấy gốc học sinh yếu, bồi dưỡng học sinh khá giỏi khối 6–7–8–9 và luyện thi tuyển sinh vào lớp 10), đồng thời kết hợp tư duy lập trình – Tin học hiện đại và công nghệ AI để giúp học sinh học tập trực quan, hứng thú và đạt điểm số bứt phá.',
  workplace: 'Trường THCS-THPT Vĩnh Lộc',
  location: 'Trường THCS-THPT Vĩnh Lộc (An Phú, An Giang) & Hệ thống Học trực tuyến',
  experienceYears: 17,
  totalStudents: '4.500+',
  passRateGrade10: '98.2%',
  highScoreCountTHPT: '650+',
  phone: '0912.345.678',
  zalo: '0912345678',
  email: 'lyhoang2908@gmail.com',
  facebookUrl: 'https://facebook.com',
  youtubeUrl: 'https://youtube.com',
  avatarUrl: '',
  badges: [
    '17 Năm Kinh Nghiệm Sư Phạm',
    'Trường THCS-THPT Vĩnh Lộc',
    'Thế Mạnh Mũi Nhọn: Toán THCS 6•7•8•9',
    'Giảng Dạy Song Hành Toán & Tin Học 6•7•8•9'
  ]
};

export const EXPERIENCE_TIMELINE: TimelineEvent[] = [
  {
    year: '2022 – Nay',
    title: 'Tiên phong Chuyển đổi số & Giảng dạy Toán – Tin Chương trình GDPT 2018',
    organization: 'Trường THCS-THPT Vĩnh Lộc',
    description:
      'Xây dựng hệ sinh thái phần mềm giáo dục, ứng dụng Web App, Android APK và Trợ lý AI hỗ trợ học sinh khối 6, 7, 8, 9 tự học Toán và thực hành Tin học trực quan theo bộ sách giáo khoa mới.',
    highlight: '17 năm gắn bó với sự nghiệp trồng người, phát triển nhiều phần mềm học tập thiết thực',
    category: 'innovation'
  },
  {
    year: '2017 – 2022',
    title: 'Giáo viên Nòng cốt Toán THCS (6, 7, 8, 9) & Bồi dưỡng Tuyển sinh vào Lớp 10',
    organization: 'Trường THCS-THPT Vĩnh Lộc',
    description:
      'Trực tiếp phụ trách giảng dạy Toán THCS trọng tâm, ôn luyện học sinh lớp 9 thi tuyển sinh vào lớp 10 và bồi dưỡng đội tuyển Học sinh giỏi Toán – Tin học trẻ cấp Huyện, cấp Tỉnh.',
    highlight: 'Trên 98% học sinh lớp 9 nắm vững kiến thức trọng tâm và đỗ vào lớp 10',
    category: 'award'
  },
  {
    year: '2013 – 2017',
    title: 'Chuyên sâu Phương pháp Lấy gốc Toán Hình & Đại số THCS kết hợp Tin học ứng dụng',
    organization: 'Trường THCS-THPT Vĩnh Lộc',
    description:
      'Biên soạn hệ thống chuyên đề phân hóa năng lực Toán 6, 7, 8, 9 (Số học, Hằng đẳng thức, Tam giác đồng dạng, Đường tròn) và ứng dụng phần mềm vẽ hình động giúp học sinh hết sợ môn Hình học.',
    highlight: 'Nhiều năm liền đạt danh hiệu Giáo viên dạy giỏi & Lao động tiên tiến',
    category: 'career'
  },
  {
    year: '2009 – 2013',
    title: 'Khởi đầu Hành trình 17 Năm Giảng dạy Toán & Tin học THCS',
    organization: 'Ngành Giáo dục & Đào tạo An Giang',
    description:
      'Đặt nền móng phương pháp giảng dạy kết hợp giữa tư duy logic Toán học và tư duy thuật toán Tin học cho học sinh khối 6, 7, 8, 9, luôn tận tâm kèm cặp từng học sinh.',
    highlight: 'Đồng hành cùng hơn 4.500 lượt học sinh qua 17 khóa học',
    category: 'education'
  }
];

export const TEACHING_METHODS: TeachingMethod[] = [
  {
    step: 'Bước 01',
    title: 'Chuẩn Hóa Gốc Toán THCS Từ Lớp 6 Đến Lớp 9',
    subtitle: 'Xóa bỏ nỗi sợ phân số, biến đổi đại số và chứng minh hình học',
    description:
      'Kiểm tra đánh giá chính xác năng lực hiện tại của học sinh ở từng khối 6, 7, 8, 9. Lấp đầy lỗ hổng tính toán số nguyên, phân số, hằng đẳng thức và các định lý hình học cốt lõi.',
    outcomes: [
      'Nắm chắc kiến thức nền tảng SGK chương trình GDPT 2018 mới',
      'Tự tin giải quyết các bài toán cơ bản và thông hiểu trên lớp'
    ]
  },
  {
    step: 'Bước 02',
    title: 'Trực Quan Hóa Toán Học Bằng Công Nghệ & Sơ Đồ Tư Duy',
    subtitle: 'Phát huy lợi thế kép của Giáo viên dạy cả Toán và Tin học',
    description:
      'Ứng dụng công nghệ đồ thị tương tác, hình học động và sơ đồ tư duy (Mindmap) để biến những định lý khô khan của Toán 6, 7, 8, 9 thành hình ảnh dễ hiểu, dễ nhớ.',
    outcomes: [
      'Nhìn hình ra ngay hướng chứng minh (Tam giác bằng nhau, Đồng dạng, Nội tiếp)',
      'Ghi nhớ hệ thống công thức lâu dài, không học vẹt'
    ]
  },
  {
    step: 'Bước 03',
    title: 'Rèn Tư Duy Thuật Toán & Trình Bày Tự Luận Chuẩn Điểm 10',
    subtitle: 'Tư duy từng bước rõ ràng như một thuật toán mạch lạc',
    description:
      'Hướng dẫn học sinh phân tích bài toán theo từng bước logic (Giả thiết -> Hướng suy luận -> Trình bày), tránh tuyệt đối các lỗi mất điểm điều kiện xác định hay kết luận.',
    outcomes: [
      'Trình bày bài kiểm tra giữa kỳ, cuối kỳ và thi vào 10 chặt chẽ, sạch đẹp',
      'Phát triển đồng thời tư duy giải Toán và lập trình Tin học (Scratch/Python)'
    ]
  },
  {
    step: 'Bước 04',
    title: 'Luyện Đề Thực Chiến Trên Web App & APK Cá Nhân',
    subtitle: 'Đồng hành sát sao cùng học sinh và Phụ huynh mọi lúc mọi nơi',
    description:
      'Học sinh được ôn tập công thức, làm bài trắc nghiệm có lời giải chi tiết ngay trên Web App và ứng dụng Android APK của Thầy Lý Hoàng Em.',
    outcomes: [
      'Bứt phá điểm 8+, 9+, 10 trong các kỳ thi học kỳ và tuyển sinh vào lớp 10',
      'Phụ huynh dễ dàng nắm bắt tiến độ và sự tiến bộ của con'
    ]
  }
];

export const COURSES_LIST: CourseItem[] = [
  {
    id: 'toan-9-luyen-thi-vao-10',
    title: 'Toán 9 Trọng Tâm & Luyện Thi Tuyển Sinh Vào Lớp 10 (Thế Mạnh Mũi Nhọn)',
    gradeCategory: 'TOAN_9_VAO_10',
    gradeLabel: 'Toán Lớp 9 • Ôn Thi Vào 10',
    level: 'Cơ bản đến Nâng cao (Mục tiêu 8.0 – 9.5+)',
    schedule: '2 – 3 buổi/tuần • Kèm sát từng học sinh',
    duration: 'Xuyên suốt năm học Lớp 9 & Giai đoạn nước rút',
    classSize: 'Nhóm chất lượng cao – Theo sát từng em',
    tuition: 'Kiểm tra năng lực & Học thử miễn phí',
    badge: 'Thế mạnh mũi nhọn',
    targetScore: '8.5 – 9.5+ điểm Toán thi vào 10',
    description:
      'Khóa học thế mạnh của Thầy Lý Hoàng Em giúp học sinh lớp 9 làm chủ hoàn toàn kiến thức Đại số & Hình học 9, rèn kỹ năng trình bày tự luận chuẩn thang điểm và chinh phục kỳ thi vào lớp 10.',
    topics: [
      'Chuyên đề 1: Căn thức bậc hai, căn bậc ba & Bài toán rút gọn biểu thức chứa căn',
      'Chuyên đề 2: Phương trình quy về bậc nhất, Hệ phương trình bậc nhất hai ẩn & Giải toán bằng cách lập HPT',
      'Chuyên đề 3: Hàm số $y = ax^2$, Phương trình bậc hai một ẩn & Hệ thức Vi-ét ứng dụng',
      'Chuyên đề 4: Hệ thức lượng trong tam giác vuông, Tỉ số lượng giác & Ứng dụng thực tế',
      'Chuyên đề 5: Đường tròn, Tiếp tuyến, Góc với đường tròn, Tứ giác nội tiếp & Hình trụ - Hình nón - Hình cầu',
      'Chuyên đề 6: Xác suất thống kê chương trình mới & Luyện bộ đề thi thử vào 10 chuẩn cấu trúc'
    ],
    Commitment: 'Chấm chữa chi tiết từng dòng trình bày tự luận, đảm bảo học sinh hiểu sâu bản chất.'
  },
  {
    id: 'toan-8-but-pha',
    title: 'Toán Lớp 8 Chuyên Sâu – Làm Chủ Hằng Đẳng Thức, Hàm Số & Hình Học Đồng Dạng',
    gradeCategory: 'TOAN_8',
    gradeLabel: 'Toán Lớp 8',
    level: 'Bám sát SGK mới & Nâng cao',
    schedule: '2 buổi/tuần',
    duration: 'Học kỳ I, Học kỳ II & Khóa hè lên lớp 9',
    classSize: 'Lớp tiêu chuẩn kèm sát',
    tuition: 'Học thử trải nghiệm miễn phí',
    badge: 'Nền tảng vàng lên lớp 9',
    targetScore: 'Đạt Giỏi 8.5 – 9.5+ Toán 8',
    description:
      'Lớp 8 là năm học bản lề quan trọng nhất của cấp THCS. Khóa học giúp học sinh nắm chắc biến đổi đại số và tư duy chứng minh hình học trước khi bước vào lớp 9.',
    topics: [
      'Chuyên đề 1: Đa thức nhiều biến & 7 Hằng đẳng thức đáng nhớ, Phân tích đa thức thành nhân tử',
      'Chuyên đề 2: Phân thức đại số, cộng trừ nhân chia và rút gọn phân thức',
      'Chuyên đề 3: Hàm số bậc nhất $y = ax + b$, đồ thị và phương trình bậc nhất một ẩn',
      'Chuyên đề 4: Tứ giác (Hình thang cân, Hình bình hành, Hình chữ nhật, Hình thoi, Hình vuông)',
      'Chuyên đề 5: Định lý Thales, Đường trung bình, Tính chất phân giác & Ba trường hợp đồng dạng của tam giác',
      'Chuyên đề 6: Định lý Pythagore, Hình chóp tam giác đều & Hình chóp tứ giác đều'
    ],
    Commitment: 'Rèn kỹ năng phân tích đa thức và vẽ hình, chứng minh tam giác đồng dạng mạch lạc.'
  },
  {
    id: 'toan-6-7-nen-tang',
    title: 'Toán Lớp 6 & Lớp 7 – Xây Dựng Gốc Số Học, Đại Số & Hình Học Vững Chắc',
    gradeCategory: 'TOAN_6_7',
    gradeLabel: 'Toán Lớp 6 • Lớp 7',
    level: 'Vững cơ bản – Phát triển tư duy Khá Giỏi',
    schedule: '2 buổi/tuần theo từng khối lớp riêng',
    duration: 'Xuyên suốt năm học',
    classSize: 'Kèm sát từng học sinh',
    tuition: 'Tặng bộ tài liệu tóm tắt công thức',
    badge: 'Vững gốc đầu cấp THCS',
    targetScore: 'Đạt 8.5 – 9.8+ kiểm tra định kỳ',
    description:
      'Giúp học sinh khối 6, 7 vượt qua bỡ ngỡ đầu cấp THCS, rèn kỹ năng tính toán nhanh, chính xác và bắt đầu làm quen với lập luận chứng minh hình học.',
    topics: [
      'Toán 6: Tập hợp số tự nhiên, Tính chia hết, ƯCLN - BCNN, Số nguyên, Phân số, Số thập phân & Hình học trực quan',
      'Toán 7: Số hữu tỉ, Số thực, Tỉ lệ thức & Dãy tỉ số bằng nhau, Biểu thức đại số & Đa thức một biến',
      'Hình học 7: Góc và đường thẳng song song, Tổng ba góc của tam giác, Các trường hợp bằng nhau của hai tam giác & Các đường đồng quy trong tam giác'
    ],
    Commitment: 'Rèn tính cẩn thận trong từng phép tính dấu âm/dương, phân số và lũy thừa.'
  },
  {
    id: 'tin-hoc-thcs-6-7-8-9',
    title: 'Tin Học THCS (Khối 6, 7, 8, 9) – Kỹ Năng Số, Bảng Tính & Lập Trình Thuật Toán',
    gradeCategory: 'TIN_HOC_THCS',
    gradeLabel: 'Tin Học 6 • 7 • 8 • 9',
    level: 'Bám sát Chương trình GDPT 2018 & Thực hành máy tính',
    schedule: 'Linh hoạt theo khối lớp & Chuyên đề',
    duration: 'Xuyên suốt năm học',
    classSize: 'Thực hành trực quan',
    tuition: 'Tích hợp bài giảng số tương tác',
    badge: 'Toán - Tin Song Hành',
    targetScore: 'Làm chủ Tin học THCS & Tư duy lập trình',
    description:
      'Phát huy năng lực Công nghệ thông tin cho học sinh từ lớp 6 đến lớp 9: Sử dụng máy tính an toàn, Soạn thảo văn bản, Bảng tính Excel, Trình chiếu, Sơ đồ tư duy và Lập trình thuật toán.',
    topics: [
      'Tin học 6: Máy tính và mạng Internet, Tổ chức lưu trữ thông tin, Soạn thảo văn bản & Sơ đồ tư duy, Thuật toán cơ bản',
      'Tin học 7: Phần mềm bảng tính (Công thức, hàm SUM, AVERAGE, MAX, MIN, IF), Thuật toán tìm kiếm & sắp xếp',
      'Tin học 8: Lập trình trực quan (Scratch/Python cơ bản: Biến, Rẽ nhánh, Vòng lặp), Đạo đức số & Xử lý dữ liệu bảng tính nâng cao',
      'Tin học 9: Giải quyết vấn đề với sự trợ giúp của máy tính, Bài toán tin học thực tế, Đa phương tiện & Định hướng nghề nghiệp CNTT'
    ],
    Commitment: 'Học đi đôi với thực hành, ứng dụng ngay tư duy Toán học vào giải bài toán Tin học.'
  },
  {
    id: 'boi-duong-hsg-toan-tin',
    title: 'Bồi Dưỡng Học Sinh Giỏi Toán THCS & Ôn Thi Tin Học Trẻ (Lập Trình Thuật Toán)',
    gradeCategory: 'HSG_TOAN_TIN',
    gradeLabel: 'Đội Tuyển HSG 6•7•8•9',
    level: 'Vận dụng cao & Chuyên sâu',
    schedule: 'Lịch bồi dưỡng chuyên biệt',
    duration: 'Theo kế hoạch năm học',
    classSize: 'Nhóm mũi nhọn',
    tuition: 'Tuyển chọn theo năng lực',
    badge: 'Bồi dưỡng Mũi nhọn',
    targetScore: 'Đạt giải HSG Toán & Tin học trẻ',
    description:
      'Dành cho học sinh yêu thích khám phá Toán nâng cao (Số học, Bất đẳng thức, Hình học phẳng nâng cao) và Lập trình giải toán trên máy tính (Scratch, Python).',
    topics: [
      'Số học nâng cao: Chia hết, Đồng dư thức, Số nguyên tố, Phương trình nghiệm nguyên',
      'Đại số nâng cao: Phân tích đa thức nâng cao, Bất đẳng thức Cauchy - Bunyakovsky & Cực trị đại số',
      'Thuật toán & Lập trình: Xử lý số học, Mảng/Danh sách, Xâu ký tự, Vẽ hình học bằng lệnh lập trình'
    ],
    Commitment: 'Truyền lửa đam mê nghiên cứu khoa học, Toán học và Công nghệ cho học sinh giỏi.'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q89-1',
    category: 'TOAN_8_9',
    topic: 'Toán 9 – Rút gọn biểu thức chứa căn',
    difficulty: 'Cơ bản',
    question:
      'Cho biểu thức $P = \\left(\\frac{1}{\\sqrt{x}-1} + \\frac{1}{\\sqrt{x}+1}\\right) \\cdot \\frac{x-1}{2\\sqrt{x}}$ với $x > 0, x \\neq 1$. Kết quả rút gọn của $P$ là:',
    options: ['$P = 1$', '$P = \\sqrt{x}$', '$P = \\frac{1}{\\sqrt{x}}$', '$P = \\frac{\\sqrt{x}+1}{\\sqrt{x}}$'],
    correctIndex: 0,
    explanation:
      'Quy đồng trong ngoặc với mẫu chung $(\\sqrt{x}-1)(\\sqrt{x}+1) = x - 1$:\n$$P = \\frac{(\\sqrt{x}+1) + (\\sqrt{x}-1)}{x-1} \\cdot \\frac{x-1}{2\\sqrt{x}} = \\frac{2\\sqrt{x}}{x-1} \\cdot \\frac{x-1}{2\\sqrt{x}} = 1$$'
  },
  {
    id: 'q89-2',
    category: 'TOAN_8_9',
    topic: 'Toán 9 – Phương trình bậc hai & Định lý Vi-ét',
    difficulty: 'Thông hiểu',
    question:
      'Cho phương trình $x^2 - 2(m+1)x + m^2 + 2 = 0$ ($m$ là tham số). Tìm giá trị của $m$ để phương trình có hai nghiệm phân biệt $x_1, x_2$ thỏa mãn $x_1^2 + x_2^2 = 10$.',
    options: ['$m = 1$', '$m = 2$', '$m = 1$ hoặc $m = -5$', '$m = -1$'],
    correctIndex: 0,
    explanation:
      'Ta có $\\Delta\' = (m+1)^2 - (m^2 + 2) = 2m - 1$. Phương trình có hai nghiệm phân biệt $\\Leftrightarrow \\Delta\' > 0 \\Leftrightarrow m > \\frac{1}{2}$.\nTheo định lý Vi-ét: $x_1 + x_2 = 2(m+1)$ và $x_1 x_2 = m^2 + 2$.\nKhi đó: $x_1^2 + x_2^2 = (x_1+x_2)^2 - 2x_1x_2 = 4(m+1)^2 - 2(m^2+2) = 2m^2 + 8m = 10 \\Leftrightarrow m^2 + 4m - 5 = 0 \\Leftrightarrow m = 1$ (nhận vì $1 > \\frac{1}{2}$) hoặc $m = -5$ (loại). Vậy $m = 1$.'
  },
  {
    id: 'q89-3',
    category: 'TOAN_8_9',
    topic: 'Toán 8 – Hằng đẳng thức đáng nhớ & Phân tích đa thức',
    difficulty: 'Thông hiểu',
    question:
      'Cho hai số $x, y$ thỏa mãn $x + y = 5$ và $xy = 6$. Giá trị của biểu thức $A = x^3 + y^3$ bằng:',
    options: ['$A = 35$', '$A = 125$', '$A = 19$', '$A = 95$'],
    correctIndex: 0,
    explanation:
      'Áp dụng hằng đẳng thức lập phương của một tổng biến đổi:\n$$x^3 + y^3 = (x + y)^3 - 3xy(x + y)$$\nThay $x + y = 5$ và $xy = 6$ vào biểu thức ta được:\n$$A = 5^3 - 3 \\cdot 6 \\cdot 5 = 125 - 90 = 35$$'
  },
  {
    id: 'q89-4',
    category: 'TOAN_8_9',
    topic: 'Hình học 8 & 9 – Định lý Thales & Đường tròn',
    difficulty: 'Vận dụng',
    question:
      'Từ điểm $M$ nằm ngoài đường tròn $(O; R)$ với $OM = 2R$, kẻ hai tiếp tuyến $MA, MB$ đến đường tròn ($A, B$ là hai tiếp điểm). Số đo góc $\\widehat{AMB}$ và độ dài dây cung $AB$ theo $R$ là:',
    options: [
      '$\\widehat{AMB} = 60^\\circ$ và $AB = R\\sqrt{3}$',
      '$\\widehat{AMB} = 60^\\circ$ và $AB = R\\sqrt{2}$',
      '$\\widehat{AMB} = 30^\\circ$ và $AB = R\\sqrt{3}$',
      '$\\widehat{AMB} = 120^\\circ$ và $AB = R\\sqrt{3}$'
    ],
    correctIndex: 0,
    explanation:
      'Xét $\\triangle OAM$ vuông tại $A$ (do $MA$ là tiếp tuyến):\n$\\sin \\widehat{AMO} = \\frac{OA}{OM} = \\frac{R}{2R} = \\frac{1}{2} \\Rightarrow \\widehat{AMO} = 30^\\circ$.\nTheo tính chất hai tiếp tuyến cắt nhau, $MO$ là phân giác của $\\widehat{AMB} \\Rightarrow \\widehat{AMB} = 60^\\circ$.\nLại có $MA = MB = R\\sqrt{3}$ và $\\widehat{AMB} = 60^\\circ$ nên $\\triangle MAB$ đều $\\Rightarrow AB = R\\sqrt{3}$.'
  },
  {
    id: 'q67-1',
    category: 'TOAN_6_7',
    topic: 'Toán 6 – Ước chung lớn nhất & Bội chung nhỏ nhất',
    difficulty: 'Thông hiểu',
    question:
      'Học sinh khối 6 của trường khi xếp hàng $12$, hàng $15$, hàng $18$ đều vừa đủ hàng. Biết số học sinh trong khoảng từ $150$ đến $200$ em. Số học sinh khối 6 là:',
    options: ['$180$ học sinh', '$160$ học sinh', '$195$ học sinh', '$150$ học sinh'],
    correctIndex: 0,
    explanation:
      'Gọi số học sinh khối 6 là $x$ ($x \\in \\mathbb{N}^*, 150 \\le x \\le 200$).\nVì xếp hàng $12, 15, 18$ đều vừa đủ nên $x \\in \\text{BC}(12, 15, 18)$.\nTa có: $12 = 2^2 \\cdot 3$; $15 = 3 \\cdot 5$; $18 = 2 \\cdot 3^2 \\Rightarrow \\text{BCNN}(12, 15, 18) = 2^2 \\cdot 3^2 \\cdot 5 = 180$.\nDo $150 \\le x \\le 200$ nên $x = 180$ (học sinh).'
  },
  {
    id: 'q67-2',
    category: 'TOAN_6_7',
    topic: 'Toán 7 – Tỉ lệ thức & Dãy tỉ số bằng nhau',
    difficulty: 'Thông hiểu',
    question:
      'Tìm hai số $x, y$ biết $\\frac{x}{3} = \\frac{y}{5}$ và $x + y = -32$. Kết quả đúng là:',
    options: [
      '$x = -12;\\ y = -20$',
      '$x = 12;\\ y = 20$',
      '$x = -15;\\ y = -17$',
      '$x = -9;\\ y = -23$'
    ],
    correctIndex: 0,
    explanation:
      'Áp dụng tính chất của dãy tỉ số bằng nhau, ta có:\n$$\\frac{x}{3} = \\frac{y}{5} = \\frac{x + y}{3 + 5} = \\frac{-32}{8} = -4$$\nSuy ra: $x = 3 \\cdot (-4) = -12$ và $y = 5 \\cdot (-4) = -20$.'
  },
  {
    id: 'q67-3',
    category: 'TOAN_6_7',
    topic: 'Hình học 7 – Tam giác bằng nhau & Góc trong tam giác',
    difficulty: 'Cơ bản',
    question:
      'Cho $\\triangle ABC$ cân tại $A$ có $\\widehat{A} = 50^\\circ$. Số đo góc ở đáy $\\widehat{B}$ và $\\widehat{C}$ của tam giác đó là:',
    options: [
      '$\\widehat{B} = \\widehat{C} = 65^\\circ$',
      '$\\widehat{B} = \\widehat{C} = 50^\\circ$',
      '$\\widehat{B} = \\widehat{C} = 80^\\circ$',
      '$\\widehat{B} = \\widehat{C} = 70^\\circ$'
    ],
    correctIndex: 0,
    explanation:
      'Vì $\\triangle ABC$ cân tại $A$ nên $\\widehat{B} = \\widehat{C}$.\nTheo định lý tổng ba góc trong một tam giác:\n$$\\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ \\Rightarrow \\widehat{B} = \\widehat{C} = \\frac{180^\\circ - 50^\\circ}{2} = 65^\\circ$$'
  },
  {
    id: 'qtin-1',
    category: 'TIN_HOC_6_9',
    topic: 'Tin học 7 – Hàm trong Phần mềm Bảng tính (Excel)',
    difficulty: 'Cơ bản',
    question:
      'Trong phần mềm bảng tính Excel, giả sử các ô từ `A1` đến `A5` lần lượt chứa các số: $4, 8, 6, 10, 2$. Công thức `=AVERAGE(A1:A5)` cho kết quả là bao nhiêu?',
    options: ['$6$', '$30$', '$10$', '$5$'],
    correctIndex: 0,
    explanation:
      'Hàm `AVERAGE(A1:A5)` dùng để tính trung bình cộng của các số trong vùng từ `A1` đến `A5`:\n$$\\text{Kết quả} = \\frac{4 + 8 + 6 + 10 + 2}{5} = \\frac{30}{5} = 6$$'
  },
  {
    id: 'qtin-2',
    category: 'TIN_HOC_6_9',
    topic: 'Tin học 8 & 9 – Tư duy Thuật toán & Vòng lặp',
    difficulty: 'Thông hiểu',
    question:
      'Cho thuật toán tính tổng: Ban đầu gán biến $S = 0$. Cho biến $i$ chạy lần lượt từ $1$ đến $5$, ở mỗi bước thực hiện lệnh $S \\leftarrow S + 2 \\cdot i$. Sau khi kết thúc vòng lặp, giá trị của $S$ bằng bao nhiêu?',
    options: ['$S = 30$', '$S = 15$', '$S = 20$', '$S = 10$'],
    correctIndex: 0,
    explanation:
      'Vòng lặp cộng dồn giá trị $2 \\cdot i$ với $i \\in \\{1, 2, 3, 4, 5\\}$:\n$$S = 2 \\cdot 1 + 2 \\cdot 2 + 2 \\cdot 3 + 2 \\cdot 4 + 2 \\cdot 5 = 2(1 + 2 + 3 + 4 + 5) = 2 \\cdot 15 = 30$$'
  },
  {
    id: 'qtin-3',
    category: 'TIN_HOC_6_9',
    topic: 'Tin học 6 & 7 – Thuật toán Tìm kiếm nhị phân',
    difficulty: 'Vận dụng',
    question:
      'Để áp dụng được thuật toán **Tìm kiếm nhị phân (Binary Search)** trên một danh sách dữ liệu, điều kiện bắt buộc của danh sách đó là gì?',
    options: [
      'Danh sách phải được sắp xếp theo thứ tự (tăng dần hoặc giảm dần)',
      'Danh sách phải có số lượng phần tử là số chẵn',
      'Danh sách chỉ được chứa các số nguyên dương',
      'Danh sách không cần sắp xếp theo thứ tự nào'
    ],
    correctIndex: 0,
    explanation:
      'Thuật toán Tìm kiếm nhị phân hoạt động bằng cách so sánh giá trị cần tìm với phần tử ở vị trí giữa để loại bỏ một nửa phạm vi tìm kiếm sau mỗi bước, do đó **danh sách bắt buộc phải được sắp xếp trước**.'
  }
];

export const MATH_FORMULAS: MathFormula[] = [
  {
    id: 'f-1',
    category: 'DAI_SO_8_9',
    categoryLabel: 'Đại số 8 & 9 (Trọng tâm)',
    title: '7 Hằng đẳng thức đáng nhớ & Biến đổi mở rộng',
    formulaTex: '(A \\pm B)^2 = A^2 \\pm 2AB + B^2, \\qquad A^2 - B^2 = (A - B)(A + B)',
    note: 'Nền tảng quan trọng bậc nhất xuyên suốt Toán 8 (Phân thức) và Toán 9 (Rút gọn căn thức, Vi-ét).',
    exampleTex: 'A^3 + B^3 = (A+B)(A^2 - AB + B^2) = (A+B)^3 - 3AB(A+B)'
  },
  {
    id: 'f-2',
    category: 'DAI_SO_8_9',
    categoryLabel: 'Đại số 8 & 9 (Trọng tâm)',
    title: 'Công thức Nghiệm Phương trình bậc hai & Hệ thức Vi-ét (Toán 9)',
    formulaTex: '\\Delta = b^2 - 4ac \\ge 0 \\implies \\begin{cases} S = x_1 + x_2 = -\\frac{b}{a} \\\\ P = x_1 x_2 = \\frac{c}{a} \\end{cases}',
    note: 'Luôn kiểm tra điều kiện có nghiệm $\\Delta \\ge 0$ (hoặc $\\Delta\' \\ge 0$) trước khi áp dụng hệ thức Vi-ét.',
    exampleTex: 'x_1^2 + x_2^2 = S^2 - 2P, \\quad x_1^3 + x_2^3 = S^3 - 3SP, \\quad |x_1 - x_2| = \\sqrt{S^2 - 4P}'
  },
  {
    id: 'f-3',
    category: 'DAI_SO_8_9',
    categoryLabel: 'Đại số 8 & 9 (Trọng tâm)',
    title: 'Hằng đẳng thức Căn bậc hai & Trục căn thức ở mẫu (Toán 9)',
    formulaTex: '\\sqrt{A^2} = |A| = \\begin{cases} A & \\text{nếu } A \\ge 0 \\\\ -A & \\text{nếu } A < 0 \\end{cases}',
    note: 'Khi khử căn hoặc đưa thừa số ra ngoài dấu căn, tuyệt đối không quên dấu giá trị tuyệt đối $|A|$.',
    exampleTex: '\\frac{m}{\\sqrt{A} \\pm \\sqrt{B}} = \\frac{m(\\sqrt{A} \\mp \\sqrt{B})}{A - B} \\quad (A \\ge 0, B \\ge 0, A \\neq B)'
  },
  {
    id: 'f-4',
    category: 'HINH_HOC_8_9',
    categoryLabel: 'Hình học 8 & 9',
    title: 'Định lý Thales & Tính chất đường phân giác của tam giác (Toán 8)',
    formulaTex: 'DE \\parallel BC \\implies \\frac{AD}{AB} = \\frac{AE}{AC} = \\frac{DE}{BC}',
    note: 'Nếu $AD$ là tia phân giác góc $\\widehat{BAC}$ ($D \\in BC$) thì tỉ số hai đoạn trên cạnh đáy bằng tỉ số hai cạnh bên.',
    exampleTex: '\\text{Phân giác } AD: \\quad \\frac{DB}{DC} = \\frac{AB}{AC}'
  },
  {
    id: 'f-5',
    category: 'HINH_HOC_8_9',
    categoryLabel: 'Hình học 8 & 9',
    title: 'Hệ thức lượng trong tam giác vuông & Tỉ số lượng giác (Toán 9)',
    formulaTex: 'AB^2 = BH \\cdot BC, \\quad AH^2 = BH \\cdot HC, \\quad \\sin \\alpha = \\frac{\\text{Đối}}{\\text{Huyền}}, \\quad \\tan \\alpha = \\frac{\\text{Đối}}{\\text{Kề}}',
    note: 'Áp dụng cho tam giác $ABC$ vuông tại $A$ có đường cao $AH \\perp BC$.',
    exampleTex: '\\sin^2 \\alpha + \\cos^2 \\alpha = 1, \\qquad \\tan \\alpha \\cdot \\cot \\alpha = 1'
  },
  {
    id: 'f-6',
    category: 'TOAN_6_7',
    categoryLabel: 'Toán 6 & Toán 7',
    title: 'Luỹ thừa với số mũ tự nhiên & Tính chất dãy tỉ số bằng nhau',
    formulaTex: 'a^m \\cdot a^n = a^{m+n}, \\quad a^m : a^n = a^{m-n}, \\quad (a^m)^n = a^{m \\cdot n}',
    note: 'Trọng tâm đại số lớp 7: Từ tỉ lệ thức suy ra dãy tỉ số bằng nhau để giải bài toán chia tỉ lệ.',
    exampleTex: '\\frac{x}{a} = \\frac{y}{b} = \\frac{z}{c} = \\frac{x + y + z}{a + b + c} = \\frac{x - y + z}{a - b + c}'
  },
  {
    id: 'f-7',
    category: 'TIN_HOC_THUAT_TOAN',
    categoryLabel: 'Tin học THCS (6•7•8•9)',
    title: 'Các Hàm Bảng Tính Cơ Bản & Công Thức Tổng Dãy Số Trong Thuật Toán',
    formulaTex: '\\text{SUM},\\ \\text{AVERAGE},\\ \\text{MAX},\\ \\text{MIN},\\ \\text{COUNT},\\ \\text{IF}(\\text{điều\\_kiện}, \\text{gt\\_đúng}, \\text{gt\\_sai})',
    note: 'Trong lập trình Scratch/Python (Tin 8, 9), bài toán tính tổng từ $1$ đến $n$ có thể dùng vòng lặp hoặc công thức Gauss:',
    exampleTex: 'S = 1 + 2 + 3 + \\dots + n = \\frac{n(n + 1)}{2}'
  }
];

export const STUDY_MATERIALS: StudyMaterial[] = [
  {
    id: 'doc-1',
    title: 'Bộ Chuyên Đề & 20 Đề Thi Thử Toán 9 Ôn Thi Vào Lớp 10 (Thầy Lý Hoàng Em Biên Soạn)',
    category: 'Toán 9 & Thi vào 10',
    grade: 'Lớp 9',
    pages: 136,
    downloads: 4850,
    updatedAt: 'Trường THCS-THPT Vĩnh Lộc',
    hasDetailedSolution: true,
    summary:
      'Tổng hợp các dạng toán trọng tâm lớp 9 (Rút gọn căn thức, Hệ phương trình, Hàm số Parabol & Vi-ét, Toán thực tế, Hình học Đường tròn) kèm 20 đề thi thử có lời giải từng bước.',
    previewQuestions: [
      'Câu 1 (2.0 điểm): Rút gọn biểu thức $P = \\left(\\frac{\\sqrt{x}}{\\sqrt{x}-2} + \\frac{4}{2-\\sqrt{x}}\\right) : \\frac{\\sqrt{x}+2}{x-4}$ với $x \\ge 0, x \\neq 4$.',
      'Câu 2 (2.0 điểm): Giải hệ phương trình bậc nhất hai ẩn và giải bài toán thực tế bằng cách lập phương trình.',
      'Câu 3 (2.0 điểm): Cho Parabol $(P): y = x^2$ và đường thẳng $(d): y = 2mx - m^2 + 4$. Tìm $m$ để $(d)$ cắt $(P)$ tại hai điểm phân biệt thỏa mãn hệ thức Vi-ét.',
      'Câu 4 (3.5 điểm): Bài toán Hình học Đường tròn, chứng minh tứ giác nội tiếp và đẳng thức hình học.'
    ]
  },
  {
    id: 'doc-2',
    title: 'Cẩm Nang Chuyên Đề Toán 8: Hằng Đẳng Thức, Phân Thức & Tam Giác Đồng Dạng',
    category: 'Toán 8 Trọng tâm',
    grade: 'Lớp 8',
    pages: 92,
    downloads: 3620,
    updatedAt: 'Chuẩn Chương trình mới',
    hasDetailedSolution: true,
    summary:
      'Tài liệu giúp học sinh lớp 8 nắm chắc 7 hằng đẳng thức đáng nhớ, các phương pháp phân tích đa thức thành nhân tử, định lý Thales và chứng minh hai tam giác đồng dạng.',
    previewQuestions: [
      'Chuyên đề 1: 5 phương pháp phân tích đa thức thành nhân tử và bài toán tìm $x$.',
      'Chuyên đề 2: Rút gọn phân thức đại số và tìm giá trị nguyên của biến để phân thức nhận giá trị nguyên.',
      'Chuyên đề 3: Sơ đồ tư duy chứng minh hai tam giác đồng dạng và hệ thức $AB^2 = BD \\cdot BC$.'
    ]
  },
  {
    id: 'doc-3',
    title: 'Tài Liệu Bồi Dưỡng Nền Tảng & Nâng Cao Toán 6 – Toán 7 (Số Học, Đại Số & Hình Học)',
    category: 'Toán 6 & Toán 7',
    grade: 'Lớp 6 & Lớp 7',
    pages: 88,
    downloads: 3190,
    updatedAt: 'Bám sát SGK mới',
    hasDetailedSolution: true,
    summary:
      'Hệ thống bài tập phân dạng từ cơ bản đến nâng cao cho học sinh khối 6, 7: Tính nhanh phân số, lũy thừa, ƯCLN - BCNN, tỉ lệ thức và các trường hợp bằng nhau của tam giác.',
    previewQuestions: [
      'Phần Toán 6: Các bài toán thực tế vận dụng Ước chung lớn nhất (ƯCLN) và Bội chung nhỏ nhất (BCNN).',
      'Phần Đại số 7: Áp dụng tính chất dãy tỉ số bằng nhau giải bài toán chia tỉ lệ thực tiễn.',
      'Phần Hình học 7: Phương pháp chứng minh hai tam giác bằng nhau (c.c.c, c.g.c, g.c.g) và hai đường thẳng vuông góc, song song.'
    ]
  },
  {
    id: 'doc-4',
    title: 'Cẩm Nang Thực Hành Tin Học THCS (Khối 6, 7, 8, 9) & Lập Trình Thuật Toán Scratch / Python',
    category: 'Tin học 6-7-8-9',
    grade: 'Khối 6 • 7 • 8 • 9',
    pages: 76,
    downloads: 2940,
    updatedAt: 'Toán - Tin Tích Hợp',
    hasDetailedSolution: true,
    summary:
      'Tóm tắt lý thuyết trọng tâm, câu hỏi trắc nghiệm ôn tập học kỳ môn Tin học 6, 7, 8, 9 cùng các bài toán lập trình thuật toán giải Toán trên máy tính.',
    previewQuestions: [
      'Chủ đề 1 (Tin 6 & 7): Hệ thống hàm bảng tính Excel cơ bản và thuật toán tìm kiếm tuần tự, tìm kiếm nhị phân.',
      'Chủ đề 2 (Tin 8 & 9): Cấu trúc rẽ nhánh, cấu trúc lặp trong lập trình Scratch & Python giải các bài toán Số học THCS (Kiểm tra số nguyên tố, tìm ƯCLN, vẽ hình đa giác đều).'
    ]
  }
];

export const HALL_OF_FAME: StudentAchievement[] = [
  {
    id: 'st-1',
    studentName: 'Nguyễn Minh Khôi',
    school: 'Trường THCS-THPT Vĩnh Lộc',
    examName: 'Kỳ thi Tuyển sinh vào Lớp 10 & HSG Toán 9',
    score: '9.5 Điểm Toán',
    achievementTitle: 'Điểm Xuất Sắc Môn Toán Vào 10',
    year: 'Học sinh tiêu biểu',
    quote:
      'Nhờ thầy Lý Hoàng Em tận tình chỉ dạy từng bước biến đổi căn thức và cách suy luận ngược bài hình học đường tròn, em làm bài thi vào 10 rất tự tin và đạt 9.5 điểm.',
    avatarBg: 'from-blue-600 to-indigo-700'
  },
  {
    id: 'st-2',
    studentName: 'Trần Ngọc Thảo Vy',
    school: 'Trường THCS-THPT Vĩnh Lộc',
    examName: 'Kiểm tra Học kỳ & Bồi dưỡng Toán 8',
    score: '9.8 Điểm Toán • 10 Tin Học',
    achievementTitle: 'Học Sinh Xuất Sắc Toàn Diện Toán - Tin',
    year: 'Khối 8',
    quote:
      'Thầy Hoàng Em giảng bài rất dễ hiểu, kết hợp cả hình vẽ trên máy tính nên phần tam giác đồng dạng và lập trình thuật toán em đều nắm rất chắc ngay trên lớp.',
    avatarBg: 'from-amber-500 to-orange-600'
  },
  {
    id: 'st-3',
    studentName: 'Lê Hoàng Gia Bảo',
    school: 'Trường THCS-THPT Vĩnh Lộc',
    examName: 'Hội thi Tin học trẻ & Toán 9',
    score: '9.25 Toán • Giải Tin Học',
    achievementTitle: 'Bứt Phá Tư Duy Toán & Lập Trình',
    year: 'Khối 9',
    quote:
      'Được học cả môn Toán và môn Tin học với thầy Hoàng Em giúp em biết cách áp dụng tư duy Toán học vào viết thuật toán nhanh và chính xác hơn rất nhiều.',
    avatarBg: 'from-emerald-600 to-teal-700'
  },
  {
    id: 'st-4',
    studentName: 'Phạm Bảo Ngọc',
    school: 'Trường THCS-THPT Vĩnh Lộc',
    examName: 'Tổng kết Môn Toán Lớp 7',
    score: '9.6 Điểm Toán',
    achievementTitle: 'Tăng 2.8 Điểm Sau 1 Học Kỳ',
    year: 'Khối 7',
    quote:
      'Đầu năm lớp 7 em rất lúng túng phần tỉ lệ thức và chứng minh hai tam giác bằng nhau. Nhờ sơ đồ tư duy của thầy mà em đã đạt 9.6 điểm thi cuối kỳ.',
    avatarBg: 'from-purple-600 to-indigo-700'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'tm-1',
    authorName: 'Phụ huynh em Minh Khôi (Lớp 9)',
    role: 'Phụ huynh học sinh Trường THCS-THPT Vĩnh Lộc',
    studentResult: 'Đạt 9.5 điểm Toán kỳ thi vào 10',
    content:
      'Gia đình vô cùng biết ơn thầy Lý Hoàng Em. Với 17 năm kinh nghiệm, thầy nắm rất rõ tâm lý và những lỗi học sinh THCS hay mắc phải. Cháu học thầy từ lớp 7 đến lớp 9 ngày càng tự giác và yêu thích môn Toán.',
    rating: 5
  },
  {
    id: 'tm-2',
    authorName: 'Phụ huynh em Thảo Vy (Lớp 8)',
    role: 'Phụ huynh học sinh Khối 8',
    studentResult: 'Tổng kết Toán 9.5 & Tin học 9.8',
    content:
      'Thầy Hoàng Em không chỉ giỏi chuyên môn Toán THCS mà còn rất tâm huyết trong việc ứng dụng công nghệ thông tin. Con về nhà có thể mở ngay ứng dụng điện thoại APK của thầy để ôn lại công thức và làm bài tập trắc nghiệm.',
    rating: 5
  },
  {
    id: 'tm-3',
    authorName: 'Em Nguyễn Quốc Huy',
    role: 'Học sinh học Toán & Tin học THCS',
    studentResult: 'Đạt điểm Giỏi suốt 4 năm cấp 2',
    content:
      'Những tiết học Toán và Tin của thầy Lý Hoàng Em luôn sinh động, dễ hiểu. Thầy luôn kiên nhẫn giảng giải cho đến khi từng bạn trong lớp hiểu rõ bản chất mới thôi.',
    rating: 5
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Bí quyết nắm vững Hình học THCS (Lớp 7, 8, 9): Từ Tam giác bằng nhau đến Đường tròn',
    category: 'Thế mạnh Toán THCS',
    readTime: '5 phút đọc',
    date: 'Chia sẻ từ Thầy Lý Hoàng Em',
    excerpt:
      'Qua 17 năm giảng dạy Toán THCS tại Trường THCS-THPT Vĩnh Lộc, tôi nhận thấy học sinh sẽ hết sợ Hình học khi nắm được sợi dây liên kết từ lớp 7 lên lớp 9.',
    keyTakeaways: [
      'Lớp 7: Nắm thật chắc 3 trường hợp bằng nhau của tam giác để suy ra các cạnh bằng nhau, góc bằng nhau.',
      'Lớp 8: Chuyển từ "bằng nhau" sang "tỉ lệ & đồng dạng" thông qua Định lý Thales và 3 trường hợp đồng dạng.',
      'Lớp 9: Kết hợp tam giác vuông (Hệ thức lượng) và Đường tròn (Góc nội tiếp, Tứ giác nội tiếp).'
    ],
    fullContent: `Nhiều em học sinh lớp 8, lớp 9 tâm sự rằng mình rất sợ bài toán Hình học. Thực tế, Hình học cấp THCS là một chuỗi kiến thức nối tiếp chặt chẽ:\n\n1. **Gốc rễ ở Lớp 7**: Mọi phép chứng minh hình học đều bắt đầu từ việc nhận diện các cặp góc bằng nhau (so le trong, đồng vị, đối đỉnh) và chứng minh hai tam giác bằng nhau.\n\n2. **Bước ngoặt ở Lớp 8**: Khi học Định lý Thales và Tam giác đồng dạng, hãy rèn thói quen **viết đúng thứ tự đỉnh tương ứng** ($\\triangle ABC \\sim \\triangle DEF$) để lập tỉ số cạnh chính xác 100%.\n\n3. **Đỉnh cao ở Lớp 9**: Hãy dùng phương pháp **Suy luận ngược từ kết luận**: Muốn chứng minh đẳng thức $MA^2 = MB \\cdot MC$, ta đưa về tỉ số $\\frac{MA}{MC} = \\frac{MB}{MA}$ rồi chứng minh hai tam giác đồng dạng.`
  },
  {
    id: 'blog-2',
    title: '5 Lỗi trình bày Tự luận khiến học sinh lớp 8, 9 mất điểm đáng tiếc trong bài thi Toán',
    category: 'Kinh nghiệm Phòng thi',
    readTime: '6 phút đọc',
    date: 'Cẩm nang Toán THCS',
    excerpt:
      'Làm ra đáp số đúng nhưng vẫn bị trừ 0.5 – 1.0 điểm? Hãy kiểm tra ngay 5 lỗi trình bày phổ biến dưới đây trước mỗi kỳ thi.',
    keyTakeaways: [
      'Quên tìm hoặc quên đối chiếu Điều kiện xác định (ĐKXĐ) của phân thức (Toán 8) và căn thức (Toán 9).',
      'Áp dụng định lý Vi-ét nhưng chưa chứng minh phương trình bậc hai có nghiệm ($\\Delta \\ge 0$).',
      'Giải bài toán bằng cách lập phương trình thiếu đơn vị và điều kiện của ẩn $x$.',
      'Vẽ hình thiếu ký hiệu vuông góc, thiếu tên điểm hoặc vẽ tam giác nhọn thành tam giác cân.'
    ],
    fullContent: `Trong chấm thi môn Toán cấp THCS và thi tuyển sinh vào lớp 10, thang điểm tự luận được chia nhỏ đến từng $0.25$ điểm:\n\n- **Lỗi 1: Quên đối chiếu ĐKXĐ**: Khi giải phương trình chứa ẩn ở mẫu (Lớp 8, 9) hoặc tìm $x$ trong bài toán rút gọn căn thức, sau khi tìm ra $x$, bắt buộc phải ghi rõ *(Thỏa mãn ĐKXĐ)* hoặc *(Không thỏa mãn ĐKXĐ)*.\n- **Lỗi 2: Thiếu điều kiện $\\Delta \\ge 0$**: Trước khi dùng $x_1 + x_2 = -\\frac{b}{a}$ và $x_1x_2 = \\frac{c}{a}$, học sinh phải chỉ rõ phương trình đã có nghiệm.\n- **Lỗi 3: Khai phương thiếu giá trị tuyệt đối**: Nhớ kỹ hằng đẳng thức $\\sqrt{A^2} = |A|$ chứ không phải $\\sqrt{A^2} = A$ khi chưa biết dấu của $A$.`
  },
  {
    id: 'blog-3',
    title: 'Sự kết hợp tuyệt vời giữa Tư duy Toán học và Lập trình Tin học ở cấp THCS (Lớp 6, 7, 8, 9)',
    category: 'Toán & Tin Học THCS',
    readTime: '4 phút đọc',
    date: 'Góc Công nghệ Giáo dục',
    excerpt:
      'Học tốt Toán giúp lập trình giỏi hơn, và ngược lại, tư duy thuật toán trong môn Tin học giúp học sinh giải Toán mạch lạc, khoa học hơn.',
    keyTakeaways: [
      'Mỗi bài giải Toán chính là một Thuật toán: có Đầu vào (Giả thiết), các Bước xử lý (Biến đổi/Chứng minh) và Đầu ra (Kết luận).',
      'Các bài toán Số học lớp 6 (ƯCLN, BCNN, Số nguyên tố) và Đại số lớp 8, 9 là chất liệu tuyệt vời để thực hành lập trình Scratch & Python.',
      'Kỹ năng sử dụng bảng tính Excel (Tin học 7, 8) giúp học sinh kiểm tra nhanh các bài toán Thống kê & Xác suất.'
    ],
    fullContent: `Là giáo viên trực tiếp giảng dạy cả hai môn **Toán và Tin học khối 6, 7, 8, 9** tại Trường THCS-THPT Vĩnh Lộc, tôi luôn khuyến khích các em học sinh kết hợp sức mạnh của hai bộ môn này:\n\n- Khi giải một bài toán khó, hãy chia nhỏ bài toán thành từng bước tuần tự giống như thiết kế sơ đồ khối thuật toán trong môn Tin học.\n- Khi học lập trình Scratch hoặc Python ở lớp 8, lớp 9, việc hiểu vững kiến thức chia hết, hệ trục tọa độ và góc quay trong môn Toán sẽ giúp các em viết chương trình ngắn gọn và thông minh hơn gấp nhiều lần.`
  }
];
