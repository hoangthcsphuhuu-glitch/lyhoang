/**
 * ============================================================================
 * FILE CẤU HÌNH THƯƠNG HIỆU CÁ NHÂN GIÁO VIÊN TOÁN (TEACHER BRAND CONFIG)
 * ============================================================================
 * Thầy/Cô có thể chỉnh sửa trực tiếp các thông tin tại đây hoặc bấm nút
 * "Tùy chỉnh Hồ sơ" ngay trên giao diện Web/App để cập nhật nhanh!
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
  gradeCategory: 'THCS' | 'LUYEN_THI_10' | 'THPT' | 'THPT_QG';
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
  category: 'TOAN_9_VAO_10' | 'TOAN_12_THPT_QG';
  topic: string;
  difficulty: 'Cơ bản' | 'Thông hiểu' | 'Vận dụng' | 'Vận dụng cao';
  question: string; // Supports $...$ LaTeX
  options: string[]; // 4 options supporting $...$ LaTeX
  correctIndex: number;
  explanation: string; // Step-by-step LaTeX explanation
}

export interface MathFormula {
  id: string;
  category: 'DAI_SO_9' | 'HINH_HOC_9' | 'GIAI_TICH_12' | 'HINH_KHONG_GIAN' | 'XAC_SUAT';
  categoryLabel: string;
  title: string;
  formulaTex: string;
  note: string;
  exampleTex: string;
}

export interface StudyMaterial {
  id: string;
  title: string;
  category: 'Đề thi vào 10' | 'Đề THPT Quốc gia' | 'Chuyên đề THCS' | 'Chuyên đề THPT' | 'Sổ tay công thức';
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
  fullName: 'Thầy Lý Hoàng',
  shortName: 'Thầy Lý Hoàng',
  title: 'Giáo viên Toán THCS & THPT • Chuyên Luyện Thi Vào 10 & Tốt Nghiệp THPT Quốc Gia',
  degree: 'Thạc sĩ Phương pháp Toán Sơ cấp • Cử nhân Sư phạm Toán loại Giỏi',
  tagline: 'Đánh thức tư duy Toán học – Chinh phục mục tiêu 9+ bằng bản chất và sự tự tin',
  philosophyQuote:
    '“Học Toán không phải là học thuộc lòng hàng trăm dạng bài mẫu, mà là rèn luyện đôi mắt nhìn thấu bản chất và tư duy phân tích mạch lạc trước mọi vấn đề mới.”',
  bio: 'Với hơn 12 năm kinh nghiệm giảng dạy Toán THCS & THPT, trực tiếp bồi dưỡng học sinh giỏi và luyện thi chuyển cấp vào lớp 10 (Công lập & Chuyên) cũng như kỳ thi Tốt nghiệp THPT Quốc gia theo chương trình GDPT 2018 mới. Tôi luôn kết hợp phương pháp Sơ đồ hóa tư duy (Mindmap), Trực quan hóa đồ thị và Công nghệ AI hỗ trợ cá nhân hóa lộ trình cho từng học sinh.',
  workplace: 'Hệ thống Giáo dục & Luyện thi Toán Chất lượng cao Thầy Lý Hoàng (lyhoang)',
  location: 'An Giang & Lớp Trực tuyến Tương tác Toàn quốc',
  experienceYears: 12,
  totalStudents: '3.200+',
  passRateGrade10: '97.5%',
  highScoreCountTHPT: '480+',
  phone: '0912.345.678',
  zalo: '0912345678',
  email: 'lhem_thcsphuhuuapu@vnedu.vn',
  facebookUrl: 'https://facebook.com',
  youtubeUrl: 'https://youtube.com',
  avatarUrl: '', // Nếu để trống sẽ hiển thị Avatar học thuật sang trọng kèm biểu tượng Toán học
  badges: [
    '12+ Năm Kinh Nghiệm Luyện Thi',
    'Giáo Viên Dạy Giỏi Cấp Tỉnh',
    'Tác Giả 15+ Chuyên Đề Toán Thực Chiến',
    'Chuyên Gia Đề Thi Chương Trình Mới 2018'
  ]
};

export const EXPERIENCE_TIMELINE: TimelineEvent[] = [
  {
    year: '2024 – Nay',
    title: 'Sáng lập Hệ sinh thái Học Toán Số & Luyện Thi Chương Trình GDPT 2018',
    organization: 'MK Math Education & Ứng dụng Học Toán Cá Nhân',
    description:
      'Xây dựng hệ thống Web App & Mobile APK tích hợp phòng luyện đề tương tác, bộ chuyên đề Trắc nghiệm Đúng/Sai và Trả lời ngắn chuẩn cấu trúc mới của Bộ GD&ĐT.',
    highlight: 'Hơn 480 học sinh đạt 9.0+ Toán THPT Quốc gia & Đánh giá năng lực',
    category: 'innovation'
  },
  {
    year: '2020 – 2024',
    title: 'Giáo viên Nòng cốt Bồi dưỡng Học sinh Giỏi & Luyện thi Chuyên Toán',
    organization: 'Trường THPT & Trung tâm Bồi dưỡng Kiến thức Chất lượng cao',
    description:
      'Chủ biên bộ tài liệu "Phân dạng & Giải chi tiết Hình học phẳng – Bất đẳng thức ôn thi vào 10 Chuyên" và "Chinh phục vận dụng cao Hàm số – Mũ Logarit – Hình Oxyz".',
    highlight: 'Đạt danh hiệu Giáo viên Dạy Giỏi & Chiến sĩ Thi đua cấp cơ sở nhiều năm liền',
    category: 'award'
  },
  {
    year: '2017 – 2020',
    title: 'Hoàn thành Chương trình Thạc sĩ Lý luận & Phương pháp Dạy học Bộ môn Toán',
    organization: 'Trường Đại học Sư phạm',
    description:
      'Bảo vệ xuất sắc luận văn Thạc sĩ về phát triển năng lực mô hình hóa Toán học và giải quyết vấn đề thực tiễn cho học sinh trung học.',
    highlight: 'Điểm bảo vệ luận văn xuất sắc 9.6/10',
    category: 'education'
  },
  {
    year: '2014 – 2017',
    title: 'Giáo viên Toán THCS & THPT – Khởi đầu Hành trình Truyền lửa',
    organization: 'Hệ thống Lớp Toán Chuyên sâu',
    description:
      'Trực tiếp giảng dạy và đồng hành cùng hàng trăm học sinh mất gốc lấy lại căn bản trong 8 tuần, bứt phá điểm 8+, 9+ trong các kỳ thi học kỳ và chuyển cấp.',
    highlight: '97.5% học sinh đỗ Nguyện vọng 1 vào các trường THPT công lập tốp đầu',
    category: 'career'
  }
];

export const TEACHING_METHODS: TeachingMethod[] = [
  {
    step: 'Bước 01',
    title: 'Chẩn đoán Năng lực & Chuẩn hóa Nền tảng',
    subtitle: 'Lấp đầy lỗ hổng kiến thức chỉ sau 4 – 6 buổi đầu tiên',
    description:
      'Mỗi học sinh đầu vào đều được làm bài đánh giá tư duy để xác định chính xác điểm mạnh, điểm yếu. Xây dựng gốc rễ Đại số & Hình học vững chắc trước khi nâng cao.',
    outcomes: [
      'Không còn sợ hình học hay biến đổi đại số phức tạp',
      'Lộ trình cá nhân hóa theo đúng lực học và mục tiêu trường thi'
    ]
  },
  {
    step: 'Bước 02',
    title: 'Học Bản Chất Qua Sơ Đồ Tư Duy & Trực Quan Đồ Thị',
    subtitle: 'Hiểu sâu "Tại sao làm vậy?" thay vì học vẹt công thức',
    description:
      'Mỗi chuyên đề được tóm gọn trên 1 trang Sơ đồ tư duy (Mindmap). Sử dụng công cụ vẽ đồ thị trực quan giúp học sinh nhìn thấy ngay bản chất hàm số và hình không gian.',
    outcomes: [
      'Ghi nhớ công thức lâu gấp 3 lần nhờ hiểu cơ chế hình thành',
      'Tự suy luận được hướng giải khi gặp bài toán lạ, bài toán thực tế'
    ]
  },
  {
    step: 'Bước 03',
    title: 'Kỹ Thuật Phản Xạ Giải Nhanh & Tối Ưu Hóa Trình Bày',
    subtitle: 'Kết hợp tư duy tự luận chặt chẽ và kỹ năng trắc nghiệm nhạy bén',
    description:
      'Rèn kỹ năng trình bày tự luận chuẩn thang điểm chấm thi vào 10 (không mất điểm trình bày, điều kiện) và kỹ thuật giải nhanh / kiểm tra đáp án bằng Casio cho THPT.',
    outcomes: [
      'Ăn trọn điểm tuyệt đối các câu cơ bản & thông hiểu',
      'Tiết kiệm 40% thời gian xử lý đề để tập trung câu phân loại 9+'
    ]
  },
  {
    step: 'Bước 04',
    title: 'Thực Chiến Phòng Thi & Chữa Lỗi Sai Cá Nhân',
    subtitle: 'Luyện đề chuẩn cấu trúc mới + Sổ tay "Bẫy thường gặp"',
    description:
      'Tổ chức thi thử định kỳ bấm giờ nghiêm túc. Mỗi học sinh có "Hồ sơ lỗi sai" để rà soát triệt để các lỗi chủ quan trước ngày thi chính thức.',
    outcomes: [
      'Tâm lý phòng thi vững vàng, phân bổ thời gian khoa học',
      'Tăng trung bình từ 1.8 – 3.2 điểm sau 1 lộ trình học tập'
    ]
  }
];

export const COURSES_LIST: CourseItem[] = [
  {
    id: 'luyen-thi-vao-10-toan-dien',
    title: 'Lộ Trình Toàn Diện Luyện Thi Vào Lớp 10 (Mục Tiêu 8.5 – 9.5+)',
    gradeCategory: 'LUYEN_THI_10',
    gradeLabel: 'Lớp 9 Ôn Thi Vào 10',
    level: 'Cơ bản đến Nâng cao',
    schedule: '2 buổi/tuần (Tối T3 - T6 hoặc T4 - CN)',
    duration: 'Lộ trình 3 giai đoạn: Nền tảng -> Tổng ôn -> Luyện đề',
    classSize: '12 – 18 học sinh/lớp (Kèm sát từng em)',
    tuition: 'Học thử 2 buổi miễn phí',
    badge: 'Khóa học tiêu biểu',
    targetScore: '8.5 – 9.5+ điểm Toán vào 10',
    description:
      'Làm chủ trọn vẹn cấu trúc đề thi tuyển sinh vào lớp 10 mới nhất: Rút gọn biểu thức, Hàm số Parabol & Đường thẳng, Định lý Vi-ét, Toán thực tế lập phương trình/hệ phương trình, Xác suất thống kê và Hình học đường tròn.',
    topics: [
      'Chuyên đề 1: Căn thức bậc hai & Bài toán rút gọn chuẩn điểm 10 trình bày',
      'Chuyên đề 2: Hệ phương trình, Phương trình bậc hai & Ứng dụng Định lý Vi-ét',
      'Chuyên đề 3: Giải bài toán bằng cách lập phương trình & Toán thực tế chương trình mới',
      'Chuyên đề 4: Hình học Đường tròn – Tứ giác nội tiếp – Tiếp tuyến & Bài toán cố định/cực trị',
      'Chuyên đề 5: Bất đẳng thức & Câu điểm 10 phân loại'
    ],
    Commitment: 'Cam kết nắm chắc từng bước trình bày tự luận, chấm chữa bài chi tiết hàng tuần.'
  },
  {
    id: 'luyen-thi-chuyen-toan-10',
    title: 'Lớp Bồi Dưỡng HSG Toán 9 & Luyện Thi Vào 10 Chuyên Toán / Chuyên Tin',
    gradeCategory: 'LUYEN_THI_10',
    gradeLabel: 'Lớp 9 Chuyên',
    level: 'Vận dụng cao & Chuyên sâu',
    schedule: '2 buổi/tuần + 1 buổi Chữa đề chuyên sâu',
    duration: 'Năm học Lớp 9',
    classSize: 'Tối đa 12 học sinh/lớp',
    tuition: 'Kiểm tra đầu vào miễn phí',
    badge: 'Lớp Mũi Nhọn',
    targetScore: 'Đỗ Chuyên Toán / Chuyên Tin / Giải HSG',
    description:
      'Dành cho học sinh có tố chất Toán học muốn chinh phục kỳ thi Học sinh giỏi cấp Quận/Tỉnh và thi vào các trường THPT Chuyên hàng đầu.',
    topics: [
      'Số học chuyên sâu: Chia hết, Đồng dư, Phương trình nghiệm nguyên (Diophantine)',
      'Đại số: Phương trình vô tỷ, Hệ phương trình đối xứng & Bất đẳng thức Cauchy, Bunyakovsky',
      'Hình học phẳng nâng cao: Hàng điểm điều hòa, Phép biến hình, Tâm tỉ cự',
      'Tổ hợp & Toán suy luận logic (Nguyên lý Dirichlet, Bất biến, Cực hạn)'
    ],
    Commitment: 'Cung cấp kho 100+ đề thi Chuyên chính thức các tỉnh thành có lời giải bình luận.'
  },
  {
    id: 'luyen-thi-thpt-qg-2025',
    title: 'Khóa Luyện Thi Tốt Nghiệp THPT Quốc Gia & ĐGNL (Chuẩn GDPT 2018)',
    gradeCategory: 'THPT_QG',
    gradeLabel: 'Lớp 12 & Luyện Thi ĐH',
    level: 'Mục tiêu 8.5 – 9.6+',
    schedule: '3 buổi/tuần (2 buổi Chuyên đề + 1 buổi Thực chiến đề)',
    duration: 'Lộ trình 3 giai đoạn (Sớm - Tổng ôn - Thực chiến)',
    classSize: '15 – 20 học sinh/lớp',
    tuition: 'Học thử 2 buổi miễn phí',
    badge: 'Chuẩn Cấu Trúc Mới',
    targetScore: '8.8 – 9.6+ Toán THPT QG',
    description:
      'Thiết kế đặc biệt theo định dạng đề thi mới của Bộ GD&ĐT (Trắc nghiệm 4 lựa chọn + Trắc nghiệm Đúng/Sai + Trả lời ngắn) và kỳ thi Đánh giá năng lực (HSA/APT).',
    topics: [
      'Khảo sát & Ứng dụng đạo hàm giải quyết bài toán tối ưu thực tế (Cực trị kinh tế, vật lý)',
      'Nguyên hàm – Tích phân và ứng dụng tính diện tích, thể tích thực tiễn',
      'Hình học không gian & Phương pháp tọa độ trong không gian Oxyz',
      'Xác suất có điều kiện, Công thức Bayes & Thống kê mẫu số liệu ghép nhóm',
      'Chiến thuật xử lý 4 mệnh đề Đúng/Sai và điền đáp số Trả lời ngắn chính xác tuyệt đối'
    ],
    Commitment: 'Tặng kèm tài khoản luyện đề trực tuyến và bộ Sổ tay Công thức Giải nhanh.'
  },
  {
    id: 'toan-thcs-6-7-8',
    title: 'Toán Tư Duy & Bứt Phá Điểm Số THCS (Khối Lớp 6, Lớp 7, Lớp 8)',
    gradeCategory: 'THCS',
    gradeLabel: 'Khối 6 • 7 • 8',
    level: 'Bám sát SGK mới (Kết nối, Chân trời, Cánh diều) & Nâng cao',
    schedule: '2 buổi/tuần theo từng khối lớp riêng biệt',
    duration: 'Xuyên suốt năm học & Khóa hè',
    classSize: '10 – 15 học sinh/lớp',
    tuition: 'Ưu đãi học phí theo học kỳ',
    targetScore: 'Tổng kết 8.5 – 9.8+ & Vững gốc lên lớp 9',
    description:
      'Xây dựng nền tảng tính toán, biến đổi đại số (hằng đẳng thức, phân thức) và tư duy chứng minh hình học ngay từ sớm để học sinh tự tin bứt phá.',
    topics: [
      'Toán 6: Số nguyên, Phân số, Số thập phân & Hình học trực quan',
      'Toán 7: Số hữu tỉ, Số thực, Đại lượng tỉ lệ & Chứng minh hai tam giác bằng nhau',
      'Toán 8: 7 Hằng đẳng thức đáng nhớ, Phân thức đại số, Hàm số bậc nhất & Định lý Thales, Tam giác đồng dạng'
    ],
    Commitment: 'Báo cáo kết quả học tập và nhận xét chi tiết gửi Phụ huynh sau mỗi tháng.'
  },
  {
    id: 'toan-thpt-10-11',
    title: 'Làm Chủ Toán THPT Lớp 10 & Lớp 11 – Nền Tảng Vững Vàng Cho Lớp 12',
    gradeCategory: 'THPT',
    gradeLabel: 'Khối 10 • 11',
    level: 'Cơ bản & Vận dụng cao',
    schedule: '2 buổi/tuần theo từng khối lớp',
    duration: 'Xuyên suốt năm học',
    classSize: '12 – 18 học sinh/lớp',
    tuition: 'Học thử miễn phí tuần đầu',
    targetScore: 'Đạt điểm Giỏi trên lớp & Nắm chắc nền tảng thi ĐH',
    description:
      'Giúp học sinh vượt qua cú sốc chuyển cấp lên THPT, làm chủ Vectơ, Hàm số bậc hai, Lượng giác, Dãy số, Giới hạn, Đạo hàm và Hình học không gian.',
    topics: [
      'Toán 10: Mệnh đề - Tập hợp, Hàm số bậc hai, Hệ thức lượng trong tam giác, Vectơ & Phương pháp tọa độ Oxy, Tổ hợp - Xác suất',
      'Toán 11: Hàm số lượng giác, Cấp số cộng & Cấp số nhân, Giới hạn - Đạo hàm, Hàm số Mũ - Logarit, Quan hệ vuông góc trong không gian'
    ],
    Commitment: 'Hỗ trợ giải đáp bài tập 24/7 qua nhóm học tập riêng của lớp.'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q9-1',
    category: 'TOAN_9_VAO_10',
    topic: 'Phương trình bậc hai & Định lý Vi-ét',
    difficulty: 'Thông hiểu',
    question:
      'Cho phương trình $x^2 - 2(m+1)x + m^2 + 2 = 0$ ($m$ là tham số). Tìm giá trị của $m$ để phương trình có hai nghiệm phân biệt $x_1, x_2$ thỏa mãn $x_1^2 + x_2^2 = 10$.',
    options: ['$m = 1$', '$m = 2$', '$m = 1$ hoặc $m = -3$', '$m = -1$'],
    correctIndex: 0,
    explanation:
      'Ta có $\\Delta\' = (m+1)^2 - (m^2 + 2) = 2m - 1$. Phương trình có hai nghiệm phân biệt $\\Leftrightarrow \\Delta\' > 0 \\Leftrightarrow m > \\frac{1}{2}$.\nTheo định lý Vi-ét: $x_1 + x_2 = 2(m+1)$ và $x_1 x_2 = m^2 + 2$.\nKhi đó: $x_1^2 + x_2^2 = (x_1+x_2)^2 - 2x_1x_2 = 4(m+1)^2 - 2(m^2+2) = 2m^2 + 8m = 10 \\Leftrightarrow m^2 + 4m - 5 = 0 \\Leftrightarrow m = 1$ (nhận vì $1 > \\frac{1}{2}$) hoặc $m = -5$ (loại). Vậy $m = 1$.'
  },
  {
    id: 'q9-2',
    category: 'TOAN_9_VAO_10',
    topic: 'Rút gọn biểu thức chứa căn',
    difficulty: 'Cơ bản',
    question:
      'Cho biểu thức $P = \\left(\\frac{1}{\\sqrt{x}-1} + \\frac{1}{\\sqrt{x}+1}\\right) \\cdot \\frac{x-1}{2\\sqrt{x}}$ với $x > 0, x \\neq 1$. Kết quả rút gọn của $P$ là:',
    options: ['$P = 1$', '$P = \\sqrt{x}$', '$P = \\frac{1}{\\sqrt{x}}$', '$P = \\frac{\\sqrt{x}+1}{\\sqrt{x}}$'],
    correctIndex: 0,
    explanation:
      'Quy đồng trong ngoặc với mẫu chung $(\\sqrt{x}-1)(\\sqrt{x}+1) = x - 1$:\n$$P = \\frac{(\\sqrt{x}+1) + (\\sqrt{x}-1)}{x-1} \\cdot \\frac{x-1}{2\\sqrt{x}} = \\frac{2\\sqrt{x}}{x-1} \\cdot \\frac{x-1}{2\\sqrt{x}} = 1$$'
  },
  {
    id: 'q9-3',
    category: 'TOAN_9_VAO_10',
    topic: 'Hình học Đường tròn',
    difficulty: 'Vận dụng',
    question:
      'Từ điểm $M$ nằm ngoài đường tròn $(O; R)$ với $OM = 2R$, kẻ hai tiếp tuyến $MA, MB$ đến đường tròn ($A, B$ là hai tiếp điểm). Số đo góc $\\widehat{AMB}$ và độ dài đoạn $AB$ theo $R$ lần lượt là:',
    options: [
      '$\\widehat{AMB} = 60^\\circ$ và $AB = R\\sqrt{3}$',
      '$\\widehat{AMB} = 60^\\circ$ và $AB = R\\sqrt{2}$',
      '$\\widehat{AMB} = 30^\\circ$ và $AB = R\\sqrt{3}$',
      '$\\widehat{AMB} = 120^\\circ$ và $AB = R\\sqrt{3}$'
    ],
    correctIndex: 0,
    explanation:
      'Xét $\\triangle OAM$ vuông tại $A$ (do $MA$ là tiếp tuyến):\n$\\sin \\widehat{AMO} = \\frac{OA}{OM} = \\frac{R}{2R} = \\frac{1}{2} \\Rightarrow \\widehat{AMO} = 30^\\circ$.\nTheo tính chất hai tiếp tuyến cắt nhau, $MO$ là tia phân giác của $\\widehat{AMB} \\Rightarrow \\widehat{AMB} = 2\\widehat{AMO} = 60^\\circ$.\nLại có $MA = OA \\cot 30^\\circ = R\\sqrt{3}$ và $MA = MB$ nên $\\triangle MAB$ đều $\\Rightarrow AB = MA = R\\sqrt{3}$.'
  },
  {
    id: 'q9-4',
    category: 'TOAN_9_VAO_10',
    topic: 'Toán thực tế & Hàm số Parabol',
    difficulty: 'Vận dụng',
    question:
      'Cổng vào của một công viên có dạng một parabol $y = ax^2$ ($a < 0$). Biết chiều rộng chân cổng là $8\\text{ m}$ và chiều cao lớn nhất của cổng là $8\\text{ m}$. Hệ số $a$ của parabol là:',
    options: ['$a = -\\frac{1}{2}$', '$a = -\\frac{1}{4}$', '$a = -2$', '$a = -\\frac{1}{8}$'],
    correctIndex: 0,
    explanation:
      'Chọn hệ trục tọa độ $Oxy$ sao cho đỉnh cổng trùng với gốc tọa độ $O(0;0)$. Khi đó hai chân cổng đối xứng qua trục $Oy$ và nằm ở độ sâu $y = -8\\text{ m}$, cách nhau $8\\text{ m}$ nên một chân cổng có tọa độ $(4; -8)$.\nThay $x = 4, y = -8$ vào $y = ax^2$ ta được: $-8 = a \\cdot 4^2 \\Rightarrow 16a = -8 \\Rightarrow a = -\\frac{1}{2}$.'
  },
  {
    id: 'q12-1',
    category: 'TOAN_12_THPT_QG',
    topic: 'Ứng dụng Đạo hàm & Cực trị hàm số',
    difficulty: 'Thông hiểu',
    question:
      'Cho hàm số $y = x^3 - 3x^2 - 9x + 5$. Giá trị cực đại $y_{\\text{CĐ}}$ của hàm số đã cho bằng:',
    options: ['$y_{\\text{CĐ}} = 10$', '$y_{\\text{CĐ}} = -22$', '$y_{\\text{CĐ}} = -1$', '$y_{\\text{CĐ}} = 3$'],
    correctIndex: 0,
    explanation:
      'Tập xác định $D = \\mathbb{R}$. Ta có đạo hàm:\n$$y\' = 3x^2 - 6x - 9 = 0 \\Leftrightarrow \\left[\\begin{aligned} x &= -1 \\\\ x &= 3 \\end{aligned}\\right.$$\nDo hệ số $a = 1 > 0$, hàm số đạt cực đại tại $x = -1$.\nThay $x = -1$ vào hàm số: $y_{\\text{CĐ}} = y(-1) = (-1)^3 - 3(-1)^2 - 9(-1) + 5 = 10$.'
  },
  {
    id: 'q12-2',
    category: 'TOAN_12_THPT_QG',
    topic: 'Nguyên hàm – Tích phân',
    difficulty: 'Vận dụng',
    question:
      'Biết $\\int_{0}^{1} (2x + 1)e^x \\,dx = a + b \\cdot e$ với $a, b \\in \\mathbb{Z}$. Tổng $S = a + b$ bằng:',
    options: ['$S = 2$', '$S = 3$', '$S = 1$', '$S = 0$'],
    correctIndex: 0,
    explanation:
      'Đặt $u = 2x + 1 \\Rightarrow du = 2\\,dx$ và $dv = e^x\\,dx \\Rightarrow v = e^x$.\nÁp dụng tích phân từng phần:\n$$I = \\left.(2x+1)e^x\\right|_0^1 - \\int_0^1 2e^x\\,dx = (3e - 1) - \\left.2e^x\\right|_0^1 = 3e - 1 - (2e - 2) = 1 + e$$\nSuy ra $a = 1, b = 1 \\Rightarrow S = a + b = 2$.'
  },
  {
    id: 'q12-3',
    category: 'TOAN_12_THPT_QG',
    topic: 'Hình học tọa độ Oxyz',
    difficulty: 'Thông hiểu',
    question:
      'Trong không gian $Oxyz$, cho mặt cầu $(S): x^2 + y^2 + z^2 - 2x + 4y - 6z - 2 = 0$. Tọa độ tâm $I$ và bán kính $R$ của mặt cầu $(S)$ là:',
    options: [
      '$I(1; -2; 3)$ và $R = 4$',
      '$I(-1; 2; -3)$ và $R = 4$',
      '$I(1; -2; 3)$ và $R = 16$',
      '$I(1; -2; 3)$ và $R = 2\\sqrt{3}$'
    ],
    correctIndex: 0,
    explanation:
      'Phương trình mặt cầu có dạng $x^2 + y^2 + z^2 - 2ax - 2by - 2cz + d = 0$ với $a = 1, b = -2, c = 3, d = -2$.\nTâm $I(1; -2; 3)$ và bán kính $R = \\sqrt{a^2 + b^2 + c^2 - d} = \\sqrt{1^2 + (-2)^2 + 3^2 - (-2)} = \\sqrt{16} = 4$.'
  },
  {
    id: 'q12-4',
    category: 'TOAN_12_THPT_QG',
    topic: 'Xác suất có điều kiện (Chương trình mới)',
    difficulty: 'Vận dụng',
    question:
      'Một hộp có $6$ viên bi trắng và $4$ viên bi đen. Lấy ngẫu nhiên lần lượt $2$ viên bi không hoàn lại. Biết rằng viên bi thứ nhất lấy ra là màu trắng, xác suất để viên bi thứ hai cũng là màu trắng bằng:',
    options: ['$\\frac{5}{9}$', '$\\frac{1}{3}$', '$\\frac{3}{5}$', '$\\frac{2}{3}$'],
    correctIndex: 0,
    explanation:
      'Gọi $A$ là biến cố "Viên thứ nhất màu trắng" và $B$ là biến cố "Viên thứ hai màu trắng".\nSau khi lấy 1 viên bi trắng ở lần đầu, trong hộp còn lại $9$ viên bi, trong đó có $5$ viên bi trắng.\nDo đó xác suất có điều kiện $P(B \\mid A) = \\frac{5}{9}$.'
  }
];

export const MATH_FORMULAS: MathFormula[] = [
  {
    id: 'f-1',
    category: 'DAI_SO_9',
    categoryLabel: 'Đại số 9 & Ôn vào 10',
    title: 'Hệ thức Vi-ét & Biến đổi đối xứng hai nghiệm',
    formulaTex: '\\begin{cases} S = x_1 + x_2 = -\\frac{b}{a} \\\\ P = x_1 x_2 = \\frac{c}{a} \\end{cases} \\quad (\\Delta \\ge 0)',
    note: 'Luôn kiểm tra điều kiện có nghiệm $\\Delta \\ge 0$ (hoặc $\\Delta\' \\ge 0$) trước khi áp dụng hệ thức Vi-ét.',
    exampleTex: 'x_1^2 + x_2^2 = S^2 - 2P, \\quad x_1^3 + x_2^3 = S^3 - 3SP, \\quad |x_1 - x_2| = \\sqrt{S^2 - 4P}'
  },
  {
    id: 'f-2',
    category: 'DAI_SO_9',
    categoryLabel: 'Đại số 9 & Ôn vào 10',
    title: 'Bất đẳng thức AM-GM (Cauchy) cho hai số không âm',
    formulaTex: 'a + b \\ge 2\\sqrt{ab} \\quad (\\forall a, b \\ge 0)',
    note: 'Dấu "$=$" xảy ra khi và chỉ khi $a = b$. Kỹ thuật chọn điểm rơi là chìa khóa của câu 0.5 điểm cuối đề thi vào 10.',
    exampleTex: '\\frac{a}{b} + \\frac{b}{a} \\ge 2, \\quad ab \\le \\frac{(a+b)^2}{4}, \\quad \\frac{1}{a} + \\frac{1}{b} \\ge \\frac{4}{a+b}'
  },
  {
    id: 'f-3',
    category: 'HINH_HOC_9',
    categoryLabel: 'Hình học 9 & Đường tròn',
    title: 'Hệ thức lượng trong tam giác vuông & Phương tích đường tròn',
    formulaTex: 'AB^2 = BH \\cdot BC, \\quad AH^2 = BH \\cdot HC, \\quad \\frac{1}{AH^2} = \\frac{1}{AB^2} + \\frac{1}{AC^2}',
    note: 'Kết hợp với phương tích từ điểm $M$ ngoài đường tròn: $MA^2 = MB \\cdot MC$ (với $MA$ là tiếp tuyến, $MBC$ là cát tuyến).',
    exampleTex: '\\triangle MAB \\sim \\triangle MCA \\ (\\text{g.g}) \\Rightarrow \\frac{MA}{MC} = \\frac{MB}{MA} \\Rightarrow MA^2 = MB \\cdot MC'
  },
  {
    id: 'f-4',
    category: 'GIAI_TICH_12',
    categoryLabel: 'Giải tích 12 & Hàm số',
    title: 'Phương trình tiếp tuyến & Điều kiện cực trị hàm bậc ba',
    formulaTex: 'y = ax^3 + bx^2 + cx + d \\implies y\' = 3ax^2 + 2bx + c',
    note: 'Hàm số bậc ba có 2 điểm cực trị khi và chỉ khi $\\Delta\'_{y\'} = b^2 - 3ac > 0$.',
    exampleTex: '\\text{Tiếp tuyến tại } M(x_0; y_0): \\quad y = f\'(x_0)(x - x_0) + y_0'
  },
  {
    id: 'f-5',
    category: 'GIAI_TICH_12',
    categoryLabel: 'Giải tích 12 & Hàm số',
    title: 'Ứng dụng Tích phân tính Diện tích & Thể tích khối tròn xoay',
    formulaTex: 'S = \\int_{a}^{b} |f(x) - g(x)|\\,dx, \\qquad V_{Ox} = \\pi \\int_{a}^{b} [f(x)]^2\\,dx',
    note: 'Chú ý công thức thể tích có nhân hệ số $\\pi$, còn công thức diện tích mặt phẳng không có $\\pi$.',
    exampleTex: 'V = \\int_{a}^{b} S(x)\\,dx \\text{ (với } S(x) \\text{ là diện tích thiết diện tại hoành độ } x\\text{)}'
  },
  {
    id: 'f-6',
    category: 'HINH_KHONG_GIAN',
    categoryLabel: 'Hình không gian & Oxyz',
    title: 'Khoảng cách từ điểm đến mặt phẳng & Góc trong không gian Oxyz',
    formulaTex: 'd(M_0, (P)) = \\frac{|Ax_0 + By_0 + Cz_0 + D|}{\\sqrt{A^2 + B^2 + C^2}}',
    note: 'Với góc giữa đường thẳng $d$ (VTCP $\\vec{u}$) và mặt phẳng $(P)$ (VTPT $\\vec{n}$), ta dùng $\\sin \\varphi$ thay vì $\\cos$.',
    exampleTex: '\\sin(d, (P)) = \\frac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}| \\cdot |\\vec{n}|}, \\qquad \\cos((P), (Q)) = \\frac{|\\vec{n}_P \\cdot \\vec{n}_Q|}{|\\vec{n}_P| \\cdot |\\vec{n}_Q|}'
  },
  {
    id: 'f-7',
    category: 'XAC_SUAT',
    categoryLabel: 'Xác suất chương trình mới',
    title: 'Công thức Xác suất Toàn phần & Công thức Bayes (Toán 12 mới)',
    formulaTex: 'P(A) = P(B)P(A\\mid B) + P(\\overline{B})P(A\\mid \\overline{B})',
    note: 'Trọng tâm mới trong đề thi Tốt nghiệp THPT từ 2025: Xác suất có điều kiện và Công thức Bayes.',
    exampleTex: 'P(B \\mid A) = \\frac{P(B) \\cdot P(A \\mid B)}{P(A)}'
  }
];

export const STUDY_MATERIALS: StudyMaterial[] = [
  {
    id: 'doc-1',
    title: 'Bộ 20 Đề Thi Thử Tuyển Sinh Vào Lớp 10 Môn Toán (Chuẩn Cấu Trúc Mới + Giải Chi Tiết)',
    category: 'Đề thi vào 10',
    grade: 'Lớp 9',
    pages: 145,
    downloads: 4280,
    updatedAt: 'Cập nhật mới nhất',
    hasDetailedSolution: true,
    summary:
      'Tuyển tập 20 đề thi thử sát cấu trúc đề chính thức kèm thang điểm chấm chi tiết từng dòng, lưu ý các lỗi mất điểm trình bày thường gặp.',
    previewQuestions: [
      'Câu 1 (2.0 điểm): Tính giá trị biểu thức $A$ và rút gọn biểu thức $B = \\left(\\frac{\\sqrt{x}}{\\sqrt{x}-2} + \\frac{4}{2-\\sqrt{x}}\\right) : \\frac{\\sqrt{x}+2}{x-4}$.',
      'Câu 2 (2.0 điểm): Giải bài toán thực tế bằng cách lập phương trình hoặc hệ phương trình & Bài toán hình học không gian thực tiễn (Hình trụ, Hình nón).',
      'Câu 3 (2.0 điểm): Hệ phương trình & Phương trình bậc hai chứa tham số $m$ vận dụng hệ thức Vi-ét.',
      'Câu 4 (3.5 điểm): Bài toán Hình học Đường tròn 3 ý từ cơ bản đến phân loại 9+.'
    ]
  },
  {
    id: 'doc-2',
    title: 'Chuyên Đề Chinh Phục Trắc Nghiệm Đúng/Sai & Trả Lời Ngắn Toán 12 (GDPT 2018)',
    category: 'Đề THPT Quốc gia',
    grade: 'Lớp 12',
    pages: 192,
    downloads: 5640,
    updatedAt: 'Cập nhật mới nhất',
    hasDetailedSolution: true,
    summary:
      'Phân tích chuyên sâu 150 câu hỏi Trắc nghiệm Đúng/Sai (4 mệnh đề) và 200 bài toán Trả lời ngắn thực tế thuộc các chủ đề Hàm số, Tích phân, Oxyz và Xác suất Bayes.',
    previewQuestions: [
      'Phần II (Trắc nghiệm Đúng/Sai): Cho hàm số $f(x) = x^3 - 3x + 2$ có đồ thị $(C)$. Xét tính đúng sai của 4 mệnh đề về cực trị, tiếp tuyến và diện tích hình phẳng.',
      'Phần III (Trả lời ngắn): Một doanh nghiệp sản xuất tối ưu chi phí vận hành theo hàm $C(x)$. Tìm mức sản lượng $x$ để lợi nhuận đạt giá trị lớn nhất.'
    ]
  },
  {
    id: 'doc-3',
    title: 'Cẩm Nang 50 Dạng Toán Hình Học Đường Tròn & Tứ Giác Nội Tiếp Ôn Thi Vào 10',
    category: 'Chuyên đề THCS',
    grade: 'Lớp 9',
    pages: 96,
    downloads: 3890,
    updatedAt: 'Bản PDF Chất lượng cao',
    hasDetailedSolution: true,
    summary:
      'Hệ thống hóa toàn bộ dấu hiệu chứng minh tứ giác nội tiếp, chứng minh đẳng thức hình học, ba điểm thẳng hàng, đường thẳng luôn đi qua điểm cố định.',
    previewQuestions: [
      'Dạng 1: 4 phương pháp kinh điển chứng minh Tứ giác nội tiếp đường tròn.',
      'Dạng 2: Kỹ thuật dùng tam giác đồng dạng chứng minh hệ thức $MA^2 = MB \\cdot MC$ và $IA \\cdot IB = IC \\cdot ID$.',
      'Dạng 3: Kỹ thuật Kẻ thêm đường phụ & Trực tâm tam giác trong câu hình cuối.'
    ]
  },
  {
    id: 'doc-4',
    title: 'Sổ Tay Tóm Tắt Toàn Bộ Công Thức Toán THCS & THPT (Bản In Màu Sơ Đồ Tư Duy)',
    category: 'Sổ tay công thức',
    grade: 'Lớp 9 - 12',
    pages: 64,
    downloads: 7120,
    updatedAt: 'Miễn phí cho học sinh',
    hasDetailedSolution: false,
    summary:
      'Tóm tắt súc tích toàn bộ công thức Đại số, Giải tích, Lượng giác, Hình học phẳng và Hình không gian dưới dạng sơ đồ tư duy dễ tra cứu trước kỳ thi.',
    previewQuestions: [
      'Phần 1: Bảng hằng đẳng thức mở rộng, Công thức căn thức & Hệ thức Vi-ét.',
      'Phần 2: Bảng đạo hàm, nguyên hàm cơ bản và mở rộng.',
      'Phần 3: Tóm tắt công thức tọa độ không gian $Oxyz$ và Xác suất thống kê.'
    ]
  }
];

export const HALL_OF_FAME: StudentAchievement[] = [
  {
    id: 'st-1',
    studentName: 'Trần Hoàng Minh',
    school: 'THPT Chuyên / ĐH Bách Khoa',
    examName: 'Kỳ thi Tốt nghiệp THPT Quốc gia',
    score: '9.8 Điểm Toán',
    achievementTitle: 'Á Khoa Khối A00 Cấp Trường',
    year: 'Khóa 2025',
    quote:
      'Nhờ phương pháp sơ đồ hóa hàm số và rèn phản xạ các câu vận dụng cao của thầy Khoa, em luôn làm chủ thời gian và không bị sai ngu ở phần Đúng/Sai.',
    avatarBg: 'from-blue-600 to-indigo-700'
  },
  {
    id: 'st-2',
    studentName: 'Nguyễn Ngọc Bảo Trân',
    school: 'Đỗ Chuyên Toán & NV1 THPT Tốp Đầu',
    examName: 'Kỳ thi Tuyển sinh vào Lớp 10',
    score: '9.75 Toán ĐK • 8.5 Toán Chuyên',
    achievementTitle: 'Thủ Khoa Đầu Vào Lớp 10',
    year: 'Khóa 2025',
    quote:
      'Trước khi học thầy, em rất sợ câu hình học ý c và câu bất đẳng thức cuối đề. Thầy dạy cách phân tích ngược từ kết luận giúp em nhìn ra hướng giải cực nhanh!',
    avatarBg: 'from-amber-500 to-orange-600'
  },
  {
    id: 'st-3',
    studentName: 'Lê Quốc Khánh',
    school: 'Đại học Kinh tế Quốc dân',
    examName: 'Kỳ thi Tốt nghiệp THPT & ĐGNL',
    score: '9.6 Điểm Toán',
    achievementTitle: 'Tăng 3.2 điểm sau 6 tháng',
    year: 'Khóa 2025',
    quote:
      'Đầu năm lớp 12 điểm thi thử của em chỉ được 6.4. Lộ trình lấy gốc và bộ đề thực chiến của thầy đã giúp em bứt phá lên 9.6 trong kỳ thi chính thức.',
    avatarBg: 'from-emerald-600 to-teal-700'
  },
  {
    id: 'st-4',
    studentName: 'Phạm Gia Huy',
    school: 'THPT Công lập Trọng điểm',
    examName: 'Kỳ thi Tuyển sinh vào Lớp 10',
    score: '9.5 Điểm Toán',
    achievementTitle: 'Top 5 Điểm Toán Cao Nhất Trường',
    year: 'Khóa 2025',
    quote:
      'Thầy chấm bài tự luận cực kỳ kỹ từng dấu tương đương và điều kiện xác định. Đi thi em trình bày tự tin và đạt trọn vẹn điểm các câu đại số và hình học.',
    avatarBg: 'from-purple-600 to-indigo-700'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'tm-1',
    authorName: 'Chị Nguyễn Thu Hà',
    role: 'Phụ huynh em Minh Quân (Đạt 9.25 điểm Toán thi vào 10)',
    studentResult: 'Đỗ Nguyện vọng 1 THPT Trọng điểm',
    content:
      'Gia đình rất yên tâm khi gửi gắm cháu cho thầy. Cuối mỗi tháng thầy đều gửi báo cáo chi tiết lực học, những lỗi cháu hay mắc và lộ trình khắc phục. Cháu từ một học sinh ngại học Hình đã trở nên yêu thích môn Toán.',
    rating: 5
  },
  {
    id: 'tm-2',
    authorName: 'Anh Trần Văn Dũng',
    role: 'Phụ huynh em Thảo Vy (Đạt 9.4 Toán THPT Quốc gia)',
    studentResult: 'Đỗ Đại học Ngoại Thương',
    content:
      'Điểm tôi ấn tượng nhất ở thầy Khoa là sự tận tâm và ứng dụng công nghệ rất bài bản. Ngoài giờ học trên lớp, con có thể lên Web App và App điện thoại của thầy để ôn lại công thức, làm đề kiểm tra có lời giải chi tiết bất cứ lúc nào.',
    rating: 5
  },
  {
    id: 'tm-3',
    authorName: 'Em Đặng Phương Anh',
    role: 'Cựu học sinh khóa Luyện thi vào 10 & THPT',
    studentResult: '9.5 Toán vào 10 & Giải Nhì HSG Cấp Tỉnh',
    content:
      'Học với thầy suốt 4 năm từ lớp 9 đến lớp 12, thầy không chỉ dạy kiến thức Toán mà còn rèn cho chúng em thói quen tư duy kỷ luật, cẩn thận và không bỏ cuộc trước bài khó.',
    rating: 5
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Chiến thuật làm chủ đề Toán cấu trúc mới (Trắc nghiệm Đúng/Sai & Trả lời ngắn)',
    category: 'Bí quyết phòng thi THPT',
    readTime: '5 phút đọc',
    date: 'Chuyên mục Phương pháp',
    excerpt:
      'Cấu trúc đề thi Tốt nghiệp THPT mới đòi hỏi học sinh hiểu sâu bản chất thay vì khoanh lụi. Khám phá quy tắc phân bổ 90 phút để tối đa hóa điểm số.',
    keyTakeaways: [
      'Phần I (12 câu - 3 điểm): Giải quyết gọn trong 15 - 18 phút, tuyệt đối không sai câu nhận biết.',
      'Phần II (4 câu Đúng/Sai - 4 điểm): Đọc kỹ từng mệnh đề a, b, c, d vì chỉ sai 1 ý ở câu 4 ý đã mất 0.5 điểm.',
      'Phần III (6 câu Trả lời ngắn - 3 điểm): Chú ý quy tắc làm tròn số thập phân theo đúng yêu cầu đề bài.'
    ],
    fullContent: `Đề thi Tốt nghiệp THPT môn Toán theo chương trình GDPT 2018 có sự thay đổi căn bản về cách đánh giá năng lực. Với 3 phần thi rõ rệt, học sinh cần chiến lược làm bài khoa học:\n\n1. **Làm chủ Phần II (Trắc nghiệm Đúng/Sai)**: Mỗi câu gồm 4 ý a), b), c), d) được sắp xếp theo mức độ từ Nhận biết -> Thông hiểu -> Vận dụng -> Vận dụng cao. Hãy kiểm chứng độc lập từng mệnh đề bằng đạo hàm, bảng biến thiên hoặc tọa độ hóa.\n\n2. **Chinh phục Phần III (Trả lời ngắn thực tế)**: Các bài toán tối ưu thực tiễn, xác suất có điều kiện (Bayes) thường xuất hiện ở phần này. Bí quyết là tóm tắt dữ kiện bằng sơ đồ cây xác suất hoặc mô hình hóa hàm số trước khi bấm máy.\n\n3. **Kiểm soát sai số làm tròn**: Chỉ làm tròn ở bước kết quả cuối cùng, giữ nguyên phân số hoặc căn thức ở các bước trung gian.`
  },
  {
    id: 'blog-2',
    title: '5 Lỗi trình bày Tự luận khiến học sinh mất từ 0.5 – 1.25 điểm oan trong kỳ thi vào 10',
    category: 'Kinh nghiệm thi vào 10',
    readTime: '6 phút đọc',
    date: 'Cẩm nang Lớp 9',
    excerpt:
      'Làm ra đáp số đúng nhưng khi báo điểm lại thấp hơn dự kiến? Đây là 5 lỗi trình bày tự luận phổ biến nhất mà giám khảo thường trừ điểm.',
    keyTakeaways: [
      'Quên đối chiếu Điều kiện xác định (ĐKXĐ) sau khi tìm ra $x$ hoặc $m$.',
      'Áp dụng định lý Vi-ét nhưng chưa chứng minh phương trình có nghiệm ($\\Delta \\ge 0$).',
      'Giải bài toán bằng cách lập phương trình thiếu đơn vị và điều kiện của ẩn.',
      'Chứng minh hình học dùng tính chất chưa được chứng minh ở ý trước.'
    ],
    fullContent: `Trong kỳ thi tuyển sinh vào lớp 10, môn Toán thi theo hình thức Tự luận 100% (hoặc kết hợp). Thang điểm chấm rất chi tiết đến từng $0.25$ điểm:\n\n- **Lỗi 1: Quên kết luận và đối chiếu ĐKXĐ**: Ở bài toán rút gọn và tìm $x$ để $P > \\frac{1}{2}$, nhiều em giải bất phương trình xong nhưng không kết hợp với $x \\ge 0, x \\neq 4$ ban đầu, dẫn đến mất $0.25$ điểm.\n- **Lỗi 2: Thiếu điều kiện $\\Delta \\ge 0$ trong bài toán Vi-ét**: Trước khi viết "Theo hệ thức Vi-ét ta có...", bắt buộc phải chỉ rõ phương trình đã có hai nghiệm với mọi $m$ hoặc tìm điều kiện của $m$ để $\\Delta \\ge 0$.\n- **Lỗi 3: Vẽ hình sai hoặc hình đặc biệt**: Khi đề bài cho $\\triangle ABC$ nhọn ($AB < AC$), tuyệt đối không vẽ tam giác cân vì rất dễ ngộ nhận tính chất hình học.`
  },
  {
    id: 'blog-3',
    title: 'Phương pháp "3 Vòng Lặp" giúp học sinh mất gốc Hình học lấy lại tự tin trong 4 tuần',
    category: 'Phương pháp học Toán',
    readTime: '4 phút đọc',
    date: 'Góc Chia Sẻ',
    excerpt:
      'Tại sao nhiều học sinh giỏi Đại số nhưng lại sợ Hình học? Bí quyết nằm ở phương pháp suy luận ngược từ kết luận về giả thiết.',
    keyTakeaways: [
      'Vòng 1: Đọc đề tới đâu, ký hiệu góc bằng nhau / đoạn thẳng bằng nhau lên hình tới đó.',
      'Vòng 2: Xây dựng "Sơ đồ suy luận ngược" (Muốn có A thì cần chứng minh B, muốn có B cần C...).',
      'Vòng 3: Tự trình bày lại lời giải hoàn chỉnh không nhìn tài liệu sau 24 giờ.'
    ],
    fullContent: `Hình học không khó nếu các em nắm được quy luật "Tư duy phân tích ngược":\n\nThay vì nhìn vào hình vẽ và tự hỏi *"Từ giả thiết suy ra được gì?"* (rất dễ đi vào ngõ cụt), hãy bắt đầu từ **Kết luận**:\n- Để chứng minh $MA^2 = MB \\cdot MC$, ta cần tỉ số $\\frac{MA}{MC} = \\frac{MB}{MA}$.\n- Để có tỉ số đó, ta cần $\\triangle MAB \\sim \\triangle MCA$ (g.g).\n- Hai tam giác này đã có chung góc $\\widehat{M}$, vậy chỉ cần chứng minh $\\widehat{MAB} = \\widehat{MCA}$ (góc tạo bởi tia tiếp tuyến và dây cung cùng chắn cung $AB$).\n\nChỉ với 3 dòng sơ đồ ngược, mọi bài toán hình học đều trở nên sáng tỏ!`
  }
];
