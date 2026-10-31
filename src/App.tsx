import React, { useState } from 'react';

interface ProjectDetail {
  badge: string;
  title: string;
  goal: string;
  heading: string;
  bullets: string[];
}

interface ResourceItem {
  id: number;
  category: 'toan6' | 'toan7' | 'toan89' | 'tinhoc' | 'stem' | 'deon';
  tag: string;
  title: string;
  desc: string;
  format: string;
}

interface TopicItem {
  name: string;
  rule: string;
  example: string;
  tip: string;
}

interface QuizItem {
  q: string;
  options: string[];
  correct: number;
  explain: string;
}

type DemoGradeKey = '6' | '7' | '8' | '9' | 'tin';

const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  chatbot: {
    badge: 'Dự án AI & Tự động hóa • 17 Năm Kinh Nghiệm',
    title: "Chatbot tương tác 'Toán & Tin của Thầy Em'",
    goal: 'Hỗ trợ học sinh Khối 6, 7, 8, 9 ôn tập kiến thức Toán THCS (thế mạnh mũi nhọn) và Tin học mọi lúc mọi nơi với sự dẫn dắt từng bước như có Thầy Lý Hoàng Em kèm cặp trực tiếp.',
    heading: 'Các tính năng cốt lõi:',
    bullets: [
      'Giải thích cặn kẽ các chủ đề Toán 6, 7, 8, 9: Số nguyên, Phân số, Tỉ lệ thức, Hằng đẳng thức, Phân thức, Phương trình bậc hai Vi-ét và Hình học phẳng.',
      'Hỗ trợ ôn tập Tin học 6, 7, 8, 9: Hàm bảng tính Excel, Sơ đồ tư duy và Thuật toán lập trình Scratch / Python.',
      'Tự động tạo bộ câu hỏi trắc nghiệm theo mức độ Nhận biết - Thông hiểu - Vận dụng và ghi nhận điểm số vào Google Sheets của giáo viên.'
    ]
  },
  googmath: {
    badge: 'Nền tảng Web App & Android APK Giáo dục',
    title: 'Hệ thống Web App & APK Học Toán Tương Tác (GoogMath)',
    goal: 'Chuyển hóa các con số, biểu thức đại số và hình vẽ trên bảng đen thành các mô hình tương tác trực quan ngay trên trình duyệt web và ứng dụng điện thoại Android APK.',
    heading: 'Điểm nổi bật:',
    bullets: [
      'Trực quan hóa trục số nguyên, phép tính phân số (Toán 6, 7), đồ thị hàm số và tam giác đồng dạng, đường tròn (Toán 8, 9).',
      'Chế độ thi đấu tính điểm nhanh giúp giờ luyện tập Toán & Tin học trên lớp tại Trường THCS và THPT Vĩnh Lộc hào hứng hơn.',
      'Phát triển năng lực số toàn diện cho học sinh THCS theo đúng định hướng Chương trình GDPT 2018.'
    ]
  },
  skkn: {
    badge: 'Sáng kiến Kinh nghiệm • Trường THCS và THPT Vĩnh Lộc',
    title: 'Ứng dụng AI & Công nghệ số nâng cao hiệu quả dạy học Toán & Tin học THCS',
    goal: 'Đúc kết từ 17 năm kinh nghiệm giảng dạy trực tiếp hai môn Toán và Tin học khối 6, 7, 8, 9 tại Trường THCS và THPT Vĩnh Lộc.',
    heading: 'Giá trị thực tiễn của đề tài:',
    bullets: [
      'Xây dựng quy trình chuẩn thiết kế Kế hoạch bài dạy 5512 tích hợp năng lực số cho môn Toán và Tin học khối 6, 7, 8, 9.',
      'Kết hợp linh hoạt giữa lợi thế chuyên môn Toán THCS và kỹ năng lập trình CNTT để tạo học liệu số sinh động.',
      'Giúp giảm tải thời gian chấm chữa thủ công và nâng cao rõ rệt tỷ lệ học sinh khá, giỏi môn Toán và Tin học.'
    ]
  }
};

const RESOURCES_DATA: ResourceItem[] = [
  {
    id: 1,
    category: 'toan6',
    tag: 'Toán Lớp 6 • CV 5512',
    title: 'KHBD Toán 6: Phép cộng và phép trừ số nguyên (Tích hợp Năng lực số)',
    desc: 'Kế hoạch bài dạy thiết kế đủ 4 bước theo Công văn 5512, tích hợp trò chơi trục số tương tác và phiếu học tập.',
    format: 'Word + PPT'
  },
  {
    id: 2,
    category: 'toan6',
    tag: 'Toán Lớp 6 • Hình học',
    title: 'Bài giảng tương tác: Hình có trục đối xứng & Hình có tâm đối xứng',
    desc: 'Kết hợp mô phỏng trực quan và hoạt động nhận diện đối xứng trong tự nhiên, kiến trúc dành cho học sinh lớp 6.',
    format: 'Slide + Web App'
  },
  {
    id: 3,
    category: 'toan7',
    tag: 'Toán Lớp 7 • Đại số',
    title: 'KHBD Toán 7: Tỉ lệ thức và Tính chất dãy tỉ số bằng nhau',
    desc: 'Bao gồm hệ thống bài toán thực tế chia tỉ lệ và phiếu học tập phân hóa năng lực học sinh khối 7.',
    format: 'Word (.docx)'
  },
  {
    id: 4,
    category: 'toan7',
    tag: 'Toán Lớp 7 • Hình học',
    title: 'Chuyên đề: Các trường hợp bằng nhau của hai tam giác (c.c.c, c.g.c, g.c.g)',
    desc: 'Bộ học liệu kèm hình vẽ động hướng dẫn học sinh lớp 7 cách trình bày chứng minh hình học chặt chẽ.',
    format: 'PDF + GeoGebra'
  },
  {
    id: 5,
    category: 'toan89',
    tag: 'Toán Lớp 8 • Thế mạnh THCS',
    title: 'Chuyên đề Toán 8: 7 Hằng đẳng thức đáng nhớ, Phân thức & Định lý Thales',
    desc: 'Hệ thống phương pháp phân tích đa thức thành nhân tử, rút gọn phân thức và sơ đồ chứng minh tam giác đồng dạng.',
    format: 'Word + PDF'
  },
  {
    id: 6,
    category: 'toan89',
    tag: 'Toán Lớp 9 • Ôn thi vào 10',
    title: 'Bộ Chuyên đề Toán 9: Rút gọn Căn thức, Hệ thức Vi-ét & Hình học Đường tròn',
    desc: 'Tài liệu mũi nhọn do Thầy Lý Hoàng Em biên soạn giúp học sinh lớp 9 nắm chắc phương pháp giải và trình bày điểm 10.',
    format: 'Bộ Đề + Giải chi tiết'
  },
  {
    id: 7,
    category: 'tinhoc',
    tag: 'Tin học 6•7•8•9 • GDPT 2018',
    title: 'Học liệu Tin học THCS (6, 7, 8, 9): Bảng tính Excel & Lập trình Scratch / Python',
    desc: 'Bài giảng và bài tập thực hành máy tính: Sơ đồ tư duy (Tin 6), Hàm bảng tính (Tin 7), Lập trình thuật toán giải Toán (Tin 8, 9).',
    format: 'Slide + Code mẫu'
  },
  {
    id: 8,
    category: 'stem',
    tag: 'Chuyên đề STEM',
    title: 'Dự án STEM: Chế tạo Thước đo góc & Ứng dụng tỉ số lượng giác đo chiều cao',
    desc: 'Học sinh vận dụng kiến thức góc, tam giác đồng dạng và tỉ số lượng giác để đo đạc thực tế tại sân trường Vĩnh Lộc.',
    format: 'Bộ Hồ sơ STEM'
  },
  {
    id: 9,
    category: 'deon',
    tag: 'Đề ôn tập • Kèm Ma trận',
    title: 'Bộ đề Kiểm tra Giữa kỳ & Cuối kỳ Toán & Tin học Khối 6, 7, 8, 9',
    desc: 'Đầy đủ ma trận, bảng đặc tả và đáp án chi tiết theo cấu trúc đánh giá mới của Bộ GD&ĐT.',
    format: 'PDF + Word'
  }
];

const DEMO_CONTENT: Record<
  DemoGradeKey,
  { label: string; badgeLabel: string; topics: TopicItem[]; quizzes: QuizItem[] }
> = {
  '6': {
    label: 'Toán Lớp 6',
    badgeLabel: 'Đang chọn: Chương trình Toán Lớp 6 (Số học & Hình trực quan)',
    topics: [
      {
        name: 'Cộng hai số nguyên âm',
        rule: 'Muốn cộng hai số nguyên âm, ta cộng hai giá trị tuyệt đối của chúng rồi đặt dấu trừ (-) trước kết quả.',
        example: 'Ví dụ: (-12) + (-8) = -(12 + 8) = -20.',
        tip: "Mẹo nhớ của Thầy Em: 'Nợ thêm nợ thì khoản nợ tăng lên!'"
      },
      {
        name: 'Quy tắc rút gọn Phân số & ƯCLN',
        rule: 'Chia cả tử và mẫu của phân số cho Ước chung lớn nhất (ƯCLN) của chúng để thu được phân số tối giản.',
        example: 'Ví dụ: Rút gọn -15/25 bằng cách chia cả tử và mẫu cho 5, ta được -3/5.',
        tip: 'Mẹo nhớ: Tìm ƯCLN của tử và mẫu để rút gọn nhanh chỉ trong một bước duy nhất!'
      },
      {
        name: 'Hình có trục đối xứng & Tâm đối xứng',
        rule: 'Đường thẳng d là trục đối xứng của hình H nếu khi gấp hình theo d, hai phần chồng khít lên nhau.',
        example: 'Ví dụ: Tam giác đều có 3 trục đối xứng; Hình vuông có 4 trục đối xứng; Hình bình hành có tâm đối xứng.',
        tip: 'Ứng dụng STEM: Cắt giấy thủ công đối xứng trang trí lớp học.'
      }
    ],
    quizzes: [
      {
        q: 'Câu 1 (Toán 6): Kết quả của phép tính (-15) + (+7) bằng bao nhiêu?',
        options: ['-22', '-8', '+8', '+22'],
        correct: 1,
        explain:
          'Hai số nguyên khác dấu: Ta lấy số lớn hơn trừ số nhỏ hơn (15 - 7 = 8) rồi mang dấu của số có giá trị tuyệt đối lớn hơn là dấu (-), kết quả là -8.'
      },
      {
        q: 'Câu 2 (Toán 6): Trong các hình sau, hình nào có tâm đối xứng?',
        options: ['Tam giác đều', 'Hình thang cân', 'Hình bình hành', 'Tam giác cân'],
        correct: 2,
        explain: 'Hình bình hành nhận giao điểm của hai đường chéo làm tâm đối xứng.'
      }
    ]
  },
  '7': {
    label: 'Toán Lớp 7',
    badgeLabel: 'Đang chọn: Chương trình Toán Lớp 7 (Tỉ lệ thức & Tam giác bằng nhau)',
    topics: [
      {
        name: 'Tỉ lệ thức & Dãy tỉ số bằng nhau',
        rule: 'Nếu a/b = c/d thì a.d = b.c (Tích ngoại tỉ bằng tích trung tỉ). Tính chất dãy tỉ số bằng nhau: a/b = c/d = (a + c)/(b + d).',
        example: 'Ví dụ: Tìm x, y biết x/3 = y/5 và x + y = 24 ⇒ x/3 = y/5 = 24/8 = 3 ⇒ x = 9, y = 15.',
        tip: 'Mẹo nhớ của Thầy Em: Nhân chéo hai số đã biết rồi chia cho số đối diện với ẩn x!'
      },
      {
        name: 'Tổng ba góc của một tam giác',
        rule: 'Tổng số đo ba góc trong một tam giác bất kỳ luôn bằng 180°.',
        example: 'Ví dụ: Tam giác ABC có góc A = 60°, góc B = 50° thì góc C = 180° - (60° + 50°) = 70°.',
        tip: 'Lưu ý: Trong tam giác vuông, hai góc nhọn phụ nhau (có tổng bằng 90°).'
      },
      {
        name: 'Hai tam giác bằng nhau (c.c.c, c.g.c, g.c.g)',
        rule: 'Nếu hai cạnh và góc xen giữa của tam giác này bằng hai cạnh và góc xen giữa của tam giác kia thì hai tam giác đó bằng nhau (c.g.c).',
        example: "Kiểm tra kỹ góc bằng nhau phải nằm đúng vị trí 'xen giữa' hai cạnh tương ứng.",
        tip: 'Vẽ ký hiệu lên hình trước khi viết lời chứng minh để tránh nhầm thứ tự đỉnh tương ứng.'
      }
    ],
    quizzes: [
      {
        q: 'Câu 1 (Toán 7): Cho tỉ lệ thức x/8 = 3/4. Giá trị của x là:',
        options: ['x = 6', 'x = 5', 'x = 12', 'x = 24'],
        correct: 0,
        explain: 'Áp dụng tính chất tỉ lệ thức: x = (8 × 3) : 4 = 24 : 4 = 6.'
      },
      {
        q: 'Câu 2 (Toán 7): Cho ∆ABC có góc A = 70°, góc B = 60°. Số đo góc C là:',
        options: ['40°', '50°', '60°', '70°'],
        correct: 1,
        explain: 'Theo định lý tổng ba góc trong một tam giác: Góc C = 180° - (70° + 60°) = 50°.'
      }
    ]
  },
  '8': {
    label: 'Toán Lớp 8',
    badgeLabel: 'Đang chọn: Chương trình Toán Lớp 8 (Hằng đẳng thức & Tam giác đồng dạng)',
    topics: [
      {
        name: '7 Hằng đẳng thức đáng nhớ',
        rule: 'Bình phương một tổng/hiệu: (A ± B)² = A² ± 2AB + B². Hiệu hai bình phương: A² - B² = (A - B)(A + B).',
        example: 'Ví dụ: Tính nhanh 101² - 1 = (101 - 1)(101 + 1) = 100 × 102 = 10200.',
        tip: 'Mẹo của Thầy Em: Dùng hằng đẳng thức để phân tích đa thức thành nhân tử và rút gọn phân thức cực nhanh!'
      },
      {
        name: 'Định lý Thales trong tam giác',
        rule: 'Nếu một đường thẳng song song với một cạnh của tam giác và cắt hai cạnh còn lại thì nó định ra trên hai cạnh đó những đoạn thẳng tương ứng tỉ lệ.',
        example: 'Ví dụ: Trong ∆ABC, nếu DE // BC (D ∈ AB, E ∈ AC) thì AD/AB = AE/AC = DE/BC.',
        tip: 'Lưu ý: Khi cần tính độ dài đoạn thẳng song song DE, hãy dùng tỉ số đồng dạng DE/BC = AD/AB.'
      },
      {
        name: 'Ba trường hợp đồng dạng của tam giác',
        rule: 'Hai tam giác đồng dạng theo 3 trường hợp: cạnh-cạnh-cạnh (c.c.c), cạnh-góc-cạnh (c.g.c) và góc-góc (g.g).',
        example: 'Trường hợp hay gặp nhất trong đề thi: Chứng minh 2 góc tương ứng bằng nhau ⇒ ∆ABC ∽ ∆DEF (g.g).',
        tip: 'Viết đúng thứ tự các đỉnh tương ứng sẽ giúp lập tỉ số cạnh và suy ra đẳng thức tích chính xác 100%.'
      }
    ],
    quizzes: [
      {
        q: 'Câu 1 (Toán 8): Khai triển hằng đẳng thức (x - 3)² ta được kết quả nào?',
        options: ['x² - 9', 'x² - 6x + 9', 'x² + 6x + 9', 'x² - 3x + 9'],
        correct: 1,
        explain: 'Áp dụng bình phương của một hiệu: (x - 3)² = x² - 2.x.3 + 3² = x² - 6x + 9.'
      },
      {
        q: 'Câu 2 (Toán 8): Cho ∆ABC có DE // BC (D thuộc AB, E thuộc AC). Biết AD = 3cm, DB = 6cm, AE = 4cm. Độ dài EC là:',
        options: ['6cm', '8cm', '12cm', '9cm'],
        correct: 1,
        explain: 'Theo định lý Thales: AD/DB = AE/EC ⇒ 3/6 = 4/EC ⇒ EC = (6 × 4) / 3 = 8cm.'
      }
    ]
  },
  '9': {
    label: 'Toán Lớp 9',
    badgeLabel: 'Đang chọn: Chương trình Toán Lớp 9 & Ôn thi vào 10 (Thế mạnh mũi nhọn)',
    topics: [
      {
        name: 'Căn bậc hai & Hằng đẳng thức √(A²) = |A|',
        rule: 'Với mọi biểu thức đại số A, ta luôn có √(A²) = |A|. Nếu A ≥ 0 thì |A| = A; nếu A < 0 thì |A| = -A.',
        example: 'Ví dụ: √((√3 - 2)²) = |√3 - 2| = 2 - √3 (vì √3 < √4 = 2).',
        tip: 'Mẹo của Thầy Em: Luôn ghi điều kiện xác định (ĐKXĐ) trước khi rút gọn biểu thức chứa căn!'
      },
      {
        name: 'Phương trình bậc hai & Hệ thức Vi-ét',
        rule: 'Nếu ax² + bx + c = 0 (a ≠ 0) có Δ = b² - 4ac ≥ 0 thì tổng và tích hai nghiệm là: S = x₁ + x₂ = -b/a và P = x₁.x₂ = c/a.',
        example: 'Biến đổi thường gặp: x₁² + x₂² = (x₁ + x₂)² - 2x₁x₂ = S² - 2P.',
        tip: 'Bắt buộc phải chứng minh phương trình có nghiệm (Δ ≥ 0) trước khi áp dụng hệ thức Vi-ét.'
      },
      {
        name: 'Tứ giác nội tiếp đường tròn',
        rule: 'Tứ giác có tổng hai góc đối diện bằng 180° hoặc có hai đỉnh kề nhau cùng nhìn một cạnh dưới hai góc bằng nhau thì nội tiếp được đường tròn.',
        example: 'Ví dụ: Tứ giác MAOB có góc MAO = 90° và góc MBO = 90° ⇒ ∠MAO + ∠MBO = 180° ⇒ MAOB nội tiếp.',
        tip: 'Đây là ý lấy điểm chắc chắn trong câu Hình học đề thi tuyển sinh vào lớp 10.'
      }
    ],
    quizzes: [
      {
        q: 'Câu 1 (Toán 9): Phương trình x² - 5x + 6 = 0 có tổng hai nghiệm x₁ + x₂ và tích hai nghiệm x₁.x₂ lần lượt là:',
        options: ['S = -5; P = 6', 'S = 5; P = 6', 'S = 5; P = -6', 'S = 6; P = 5'],
        correct: 1,
        explain: 'Theo hệ thức Vi-ét với a = 1, b = -5, c = 6: Tổng S = -b/a = 5 và Tích P = c/a = 6.'
      },
      {
        q: 'Câu 2 (Toán 9): Cho ∆ABC vuông tại A, đường cao AH. Biết BH = 4cm, CH = 9cm. Độ dài đường cao AH bằng:',
        options: ['6cm', '13cm', '36cm', '5cm'],
        correct: 0,
        explain: 'Áp dụng hệ thức lượng trong tam giác vuông: AH² = BH . CH = 4 × 9 = 36 ⇒ AH = 6cm.'
      }
    ]
  },
  tin: {
    label: 'Tin Học 6–9',
    badgeLabel: 'Đang chọn: Chương trình Tin học THCS Khối 6, 7, 8, 9 (Bảng tính & Lập trình)',
    topics: [
      {
        name: 'Các hàm cơ bản trong Bảng tính Excel (Tin 7, 8)',
        rule: 'Hàm SUM tính tổng, AVERAGE tính trung bình cộng, MAX tìm giá trị lớn nhất, MIN tìm giá trị nhỏ nhất, COUNT đếm số ô chứa số.',
        example: 'Ví dụ: =AVERAGE(B2:B6) tính điểm trung bình của các ô từ B2 đến B6.',
        tip: 'Mẹo của Thầy Em: Mọi công thức trong bảng tính Excel đều phải bắt đầu bằng dấu bằng (=)!'
      },
      {
        name: 'Cấu trúc rẽ nhánh và Vòng lặp (Tin 8, 9)',
        rule: 'Cấu trúc rẽ nhánh (Nếu... thì...) dùng để kiểm tra điều kiện; cấu trúc lặp dùng để thực hiện lặp đi lặp lại một khối lệnh.',
        example: 'Ứng dụng: Viết chương trình Scratch/Python giải phương trình bậc nhất ax + b = 0 hoặc tính tổng S = 1 + 2 + ... + n.',
        tip: 'Tư duy Toán học vững sẽ giúp em thiết kế thuật toán Tin học ngắn gọn và không bị lỗi vô hạn.'
      },
      {
        name: 'Thuật toán Tìm kiếm tuần tự & Tìm kiếm nhị phân (Tin 7)',
        rule: 'Tìm kiếm nhị phân chia đôi phạm vi tìm kiếm ở mỗi bước, nhanh hơn rất nhiều so với tìm kiếm tuần tự nhưng yêu cầu danh sách đã được sắp xếp.',
        example: 'Ví dụ: Tra từ điển tiếng Anh hoặc tìm tên học sinh trong danh sách lớp đã xếp theo bảng chữ cái A-Z.',
        tip: 'Nhớ từ khóa quan trọng: Tìm kiếm nhị phân = Danh sách ĐÃ SẮP XẾP + Chia đôi.'
      }
    ],
    quizzes: [
      {
        q: 'Câu 1 (Tin học 7): Giả sử các ô A1, A2, A3 lần lượt chứa các số 6, 8, 10. Công thức =AVERAGE(A1:A3) cho kết quả là:',
        options: ['24', '8', '10', '6'],
        correct: 1,
        explain: 'Hàm AVERAGE tính trung bình cộng: (6 + 8 + 10) : 3 = 24 : 3 = 8.'
      },
      {
        q: 'Câu 2 (Tin học 8 & 9): Trong lập trình thuật toán, biến S ban đầu bằng 0. Sau khi lặp i từ 1 đến 4 với lệnh S = S + i, giá trị của S là:',
        options: ['S = 4', 'S = 10', 'S = 6', 'S = 12'],
        correct: 1,
        explain: 'Vòng lặp cộng dồn các số từ 1 đến 4: S = 1 + 2 + 3 + 4 = 10.'
      }
    ]
  }
};

export const App: React.FC = () => {
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mobile APK Phone Frame Simulator
  const [isMobilePreview, setIsMobilePreview] = useState(false);

  // Toast Notification state
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Universal Modal state
  const [modalData, setModalData] = useState<{
    badge: string;
    title: string;
    body: React.ReactNode;
  } | null>(null);

  // Resource Hub filter & search state
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  // Interactive AI Demo & Quiz state
  const [currentGrade, setCurrentGrade] = useState<DemoGradeKey>('6');
  const [selectedTopicIdx, setSelectedTopicIdx] = useState<number>(0);
  const [currentQuizIdx, setCurrentQuizIdx] = useState<number>(0);
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);

  // Contact form state
  const [senderName, setSenderName] = useState('');
  const [senderRole, setSenderRole] = useState('Học sinh');
  const [senderContact, setSenderContact] = useState('');
  const [senderMessage, setSenderMessage] = useState('');

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg((prev) => (prev === msg ? null : prev));
    }, 3600);
  };

  const openProjectModal = (key: string) => {
    const item = PROJECT_DETAILS[key];
    if (!item) return;
    setModalData({
      badge: item.badge,
      title: item.title,
      body: (
        <div className="space-y-3">
          <p>
            <strong>Mục tiêu:</strong> {item.goal}
          </p>
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
            <div className="font-bold text-slate-800">{item.heading}</div>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              {item.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      )
    });
  };

  const previewResource = (res: ResourceItem) => {
    setModalData({
      badge: res.tag,
      title: res.title,
      body: (
        <div className="space-y-3">
          <p>{res.desc}</p>
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div className="font-bold text-slate-800 mb-1">Cấu trúc hồ sơ học liệu bao gồm:</div>
            <ul className="list-disc pl-5 text-xs space-y-1 text-slate-600">
              <li>Mục tiêu bài học: Phẩm chất, năng lực toán học / tin học & tích hợp năng lực số.</li>
              <li>Chuỗi 4 hoạt động dạy học chuẩn Công văn 5512 (Mở đầu - Hình thành kiến thức - Luyện tập - Vận dụng).</li>
              <li>Phiếu học tập cá nhân/nhóm và câu hỏi củng cố tương tác của Thầy Lý Hoàng Em.</li>
            </ul>
          </div>
        </div>
      )
    });
  };

  const downloadResource = (res: ResourceItem) => {
    showToast(`Đang tải học liệu: "${res.title}"`);
    const content = [
      `===================================================================`,
      `HỌC LIỆU SỐ THẦY LÝ HOÀNG EM - TRƯỜNG THCS VÀ THPT VĨNH LỘC`,
      `17 NĂM KINH NGHIỆM GIẢNG DẠY TOÁN & TIN HỌC KHỐI 6, 7, 8, 9`,
      `Email liên hệ nhận file gốc: lyhoang2908@gmail.com`,
      `===================================================================`,
      `Tên học liệu: ${res.title}`,
      `Phân loại: ${res.tag} (${res.format})`,
      ``,
      `Mô tả nội dung:`,
      res.desc,
      ``,
      `Cấu trúc chuẩn Công văn 5512:`,
      `1. Hoạt động 1: Mở đầu (Khởi động gắn với thực tiễn / trò chơi số)`,
      `2. Hoạt động 2: Hình thành kiến thức mới (Trực quan hóa Toán - Tin)`,
      `3. Hoạt động 3: Luyện tập (Phiếu học tập phân hóa năng lực)`,
      `4. Hoạt động 4: Vận dụng & Mở rộng STEM / Năng lực số`
    ].join('\n');

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `HocLieu_ThayLyHoangEm_${res.id}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const filteredResources = RESOURCES_DATA.filter((item) => {
    const matchCat = activeCategory === 'all' || item.category === activeCategory;
    const kw = searchKeyword.trim().toLowerCase();
    const matchText =
      !kw ||
      item.title.toLowerCase().includes(kw) ||
      item.desc.toLowerCase().includes(kw) ||
      item.tag.toLowerCase().includes(kw);
    return matchCat && matchText;
  });

  const handleSwitchDemoGrade = (grade: DemoGradeKey) => {
    setCurrentGrade(grade);
    setSelectedTopicIdx(0);
    setCurrentQuizIdx(0);
    setSelectedQuizOption(null);
  };

  const handleNextQuizQuestion = () => {
    const quizzes = DEMO_CONTENT[currentGrade].quizzes;
    setCurrentQuizIdx((prev) => (prev + 1) % quizzes.length);
    setSelectedQuizOption(null);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast(`Cảm ơn ${senderRole} ${senderName.trim()}! Lời nhắn đã được gửi đến Thầy Lý Hoàng Em (lyhoang2908@gmail.com).`);
    setSenderName('');
    setSenderContact('');
    setSenderMessage('');
  };

  const activeDemo = DEMO_CONTENT[currentGrade];
  const activeTopic = activeDemo.topics[selectedTopicIdx] || activeDemo.topics[0];
  const activeQuiz = activeDemo.quizzes[currentQuizIdx] || activeDemo.quizzes[0];

  const pageBody = (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-800 antialiased selection:bg-sky-500 selection:text-white">
      {/* Top Notification Toast */}
      {toastMsg && (
        <div className="fixed bottom-5 right-5 z-50 animate-fadeIn">
          <div className="bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-sky-500/40 flex items-center gap-3">
            <i className="fa-solid fa-circle-check text-teal-400 text-xl"></i>
            <span className="text-sm font-medium">{toastMsg}</span>
          </div>
        </div>
      )}

      {/* Sticky Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-600 to-teal-500 flex items-center justify-center text-white font-extrabold text-xl shadow-md shadow-sky-500/20 group-hover:scale-105 transition shrink-0">
              <i className="fa-solid fa-square-root-variable"></i>
            </div>
            <div>
              <span className="block font-extrabold text-slate-900 text-lg leading-none">Thầy Lý Hoàng Em</span>
              <span className="text-xs font-medium text-sky-600">
                THCS & THPT Vĩnh Lộc • 17 Năm KN • Toán & Tin 6–9
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600">
            <a href="#about" className="hover:text-sky-600 transition">
              Phương pháp
            </a>
            <a href="#projects" className="hover:text-sky-600 transition">
              Dự án Công nghệ
            </a>
            <a href="#resources" className="hover:text-sky-600 transition">
              Kho Học liệu
            </a>
            <a href="#ai-assistant" className="hover:text-sky-600 transition flex items-center gap-1.5 text-teal-600">
              <i className="fa-solid fa-robot"></i> Trợ lý Toán - Tin AI
            </a>
            <button
              onClick={() => setIsMobilePreview((m) => !m)}
              className="px-3.5 py-2 rounded-xl bg-sky-50 text-sky-700 hover:bg-sky-100 border border-sky-200 text-xs font-bold transition flex items-center gap-1.5"
              title="Xem thử giao diện App Điện thoại APK"
            >
              <i className="fa-solid fa-mobile-screen-button"></i>
              <span>{isMobilePreview ? 'Bản Web' : 'Xem dạng APK'}</span>
            </button>
            <a
              href="./ToanThayLyHoang.apk"
              download="ToanThayLyHoang.apk"
              className="px-3.5 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition shadow-sm flex items-center gap-1.5"
            >
              <i className="fa-brands fa-android text-sm"></i>
              <span>Tải App APK</span>
            </a>
            <a
              href="#contact"
              className="px-4 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-sky-600 transition shadow-sm"
            >
              Kết nối ngay
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="./ToanThayLyHoang.apk"
              download="ToanThayLyHoang.apk"
              className="px-3 py-2 rounded-xl bg-teal-600 text-white text-xs font-bold flex items-center gap-1"
            >
              <i className="fa-brands fa-android"></i>
              <span>APK</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen((o) => !o)}
              className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Mở menu"
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-5 space-y-2">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-600"
            >
              Phương pháp giảng dạy (17 năm KN)
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-600"
            >
              Dự án Công nghệ & SKKN
            </a>
            <a
              href="#resources"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-600"
            >
              Kho Học liệu Toán & Tin 6, 7, 8, 9
            </a>
            <a
              href="#ai-assistant"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl font-semibold text-teal-600 bg-teal-50/70"
            >
              Trải nghiệm Toán & Tin của Thầy Em
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center mt-2 py-2.5 rounded-xl font-semibold bg-slate-900 text-white"
            >
              Liên hệ & Trao đổi (lyhoang2908@gmail.com)
            </a>
          </div>
        )}
      </header>

      {/* 1. HERO SECTION */}
      <section id="home" className="math-bg text-white relative overflow-hidden py-16 md:py-24">
        {/* Decorative Math Symbols */}
        <div className="hidden lg:block absolute top-14 left-12 text-sky-400/20 text-6xl font-bold select-none floating-symbol">
          ∑
        </div>
        <div className="hidden lg:block absolute bottom-16 left-1/3 text-teal-400/20 text-5xl font-bold select-none floating-symbol-delayed">
          π
        </div>
        <div className="hidden lg:block absolute top-20 right-16 text-sky-400/20 text-6xl font-bold select-none floating-symbol">
          ∆
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs sm:text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
                Trường THCS và THPT Vĩnh Lộc • 17 Năm Kinh Nghiệm Sư Phạm
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Thầy{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-300">
                  Lý Hoàng Em
                </span>
                <span className="block text-xl sm:text-3xl lg:text-4xl font-bold text-slate-200 mt-2">
                  Giáo viên Toán & Tin học THCS (Khối 6, 7, 8, 9)
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Với <strong className="text-white">17 năm kinh nghiệm</strong> giảng dạy tại{' '}
                <strong className="text-white">Trường THCS và THPT Vĩnh Lộc</strong>, thế mạnh mũi nhọn là môn{' '}
                <strong className="text-sky-300">Toán THCS (Lớp 6, 7, 8, 9)</strong> kết hợp giảng dạy môn{' '}
                <strong className="text-teal-300">Tin học 6, 7, 8, 9</strong>. Tiên phong ứng dụng{' '}
                <strong className="text-white">Trí tuệ nhân tạo (AI)</strong>,{' '}
                <strong className="text-white">Công nghệ số</strong> và <strong className="text-white">STEM</strong>{' '}
                giúp học sinh phát triển tư duy logic và năng lực số toàn diện.
              </p>

              {/* Quick Stats Badges */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2 max-w-xl">
                <div className="glass-card p-3.5 rounded-2xl">
                  <div className="text-sky-400 font-extrabold text-xl sm:text-2xl">17 Năm</div>
                  <div className="text-xs text-slate-300 mt-0.5">Kinh nghiệm giảng dạy</div>
                </div>
                <div className="glass-card p-3.5 rounded-2xl">
                  <div className="text-teal-400 font-extrabold text-xl sm:text-2xl">Toán 6•7•8•9</div>
                  <div className="text-xs text-slate-300 mt-0.5">Thế mạnh mũi nhọn THCS</div>
                </div>
                <div className="glass-card p-3.5 rounded-2xl">
                  <div className="text-amber-400 font-extrabold text-xl sm:text-2xl">Tin 6•7•8•9</div>
                  <div className="text-xs text-slate-300 mt-0.5">STEM, AI & Năng lực số</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <a
                  href="#resources"
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white font-bold shadow-lg shadow-sky-500/25 flex items-center gap-2.5 transition transform hover:-translate-y-0.5"
                >
                  <i className="fa-solid fa-folder-open"></i>
                  Khám phá Học liệu
                </a>
                <a
                  href="#ai-assistant"
                  className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold flex items-center gap-2.5 transition"
                >
                  <i className="fa-solid fa-wand-magic-sparkles text-teal-300"></i>
                  Trải nghiệm Trợ lý Toán - Tin AI
                </a>
                <a
                  href="./ToanThayLyHoang.apk"
                  download="ToanThayLyHoang.apk"
                  className="px-5 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold flex items-center gap-2 transition shadow-lg"
                >
                  <i className="fa-brands fa-android text-lg"></i>
                  Tải App Android (.APK)
                </a>
              </div>
            </div>

            {/* Right Column: Teacher Profile & Interactive Dashboard Card */}
            <div className="lg:col-span-5">
              <div className="glass-card rounded-3xl p-6 sm:p-8 relative shadow-2xl">
                <div className="flex items-center gap-4 pb-6 border-b border-white/10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-500 to-teal-400 flex items-center justify-center text-2xl font-extrabold text-slate-950 shadow-lg shrink-0">
                    LHE
                  </div>
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30">
                      17 Năm Kinh Nghiệm • Giáo viên dạy giỏi
                    </span>
                    <h2 className="text-xl font-bold text-white mt-1">Thầy Lý Hoàng Em</h2>
                    <p className="text-xs text-slate-300">Tổ Toán - Tin • Trường THCS & THPT Vĩnh Lộc</p>
                    <p className="text-xs text-sky-300 mt-0.5">
                      <i className="fa-regular fa-envelope mr-1"></i>lyhoang2908@gmail.com
                    </p>
                  </div>
                </div>

                {/* Highlights inside Hero Card */}
                <div className="space-y-4 my-6">
                  <div className="flex items-start gap-3.5 bg-white/5 p-3.5 rounded-2xl border border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-300 flex items-center justify-center shrink-0 mt-0.5">
                      <i className="fa-solid fa-square-root-variable"></i>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">Thế mạnh chuyên sâu: Toán THCS (6, 7, 8, 9)</h3>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Hệ thống hóa kiến thức Đại số & Hình học từ lớp 6 đến lớp 9, bồi dưỡng học sinh giỏi và ôn thi tuyển sinh vào lớp 10.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 bg-white/5 p-3.5 rounded-2xl border border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 mt-0.5">
                      <i className="fa-solid fa-laptop-code"></i>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">Giảng dạy Tin học 6, 7, 8, 9 & Web App GoogMath</h3>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Kết hợp kỹ năng bảng tính, lập trình thuật toán (Scratch/Python) và trực quan hóa Hình học phẳng, Đại số trên trình duyệt.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 bg-white/5 p-3.5 rounded-2xl border border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 mt-0.5">
                      <i className="fa-solid fa-robot"></i>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">Chatbot "Toán của Thầy Em" & Quản lý Đám mây</h3>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Hỗ trợ giải đáp Toán & Tin 24/7, tạo đề ôn tập cá nhân hóa, chấm điểm tự động và kết nối phụ huynh.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-300 pt-2">
                  <span>
                    <i className="fa-solid fa-location-dot text-sky-400 mr-1"></i> Trường THCS-THPT Vĩnh Lộc, An Giang
                  </span>
                  <a href="#projects" className="text-teal-300 hover:underline font-semibold">
                    Xem chi tiết hồ sơ →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GIỚI THIỆU & PHƯƠNG PHÁP GIẢNG DẠY */}
      <section id="about" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-100 px-3.5 py-1.5 rounded-full">
            Triết lý & Phương pháp • 17 Năm Kinh Nghiệm
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Đổi mới phương pháp dạy học Toán & Tin học kỷ nguyên số
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Phát huy lợi thế kép của giáo viên dạy cả hai môn <strong>Toán và Tin học khối 6, 7, 8, 9</strong> (thế mạnh mũi nhọn là Toán THCS), giúp mỗi tiết học trở nên sinh động, dễ hiểu và gắn liền thực tiễn.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1 */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200/80 hover:shadow-xl hover:-translate-y-1 transition duration-300">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center text-xl mb-5">
              <i className="fa-solid fa-file-signature"></i>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Thế mạnh Toán THCS (6, 7, 8, 9)</h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              17 năm kinh nghiệm giảng dạy Toán 6, 7, 8, 9 và ôn thi vào 10. Kế hoạch bài dạy chuẩn Công văn 5512 giúp học sinh nắm chắc gốc Đại số và Hình học.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200/80 hover:shadow-xl hover:-translate-y-1 transition duration-300">
            <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center text-xl mb-5">
              <i className="fa-solid fa-laptop-code"></i>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Toán & Tin học 6–9 Song hành</h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Giảng dạy đồng thời môn Tin học 6, 7, 8, 9; lồng ghép trên 20% nội dung kỹ năng số, bảng tính Excel, phần mềm hình học động và lập trình thuật toán.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200/80 hover:shadow-xl hover:-translate-y-1 transition duration-300">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center text-xl mb-5">
              <i className="fa-solid fa-cubes"></i>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Học tập qua dự án STEM</h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Gắn kết kiến thức Hình học trực quan, Tam giác đồng dạng, Thống kê và Xác suất với các sản phẩm thực hành STEM gần gũi đời sống của học sinh.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200/80 hover:shadow-xl hover:-translate-y-1 transition duration-300">
            <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-xl mb-5">
              <i className="fa-solid fa-database"></i>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Tự động hóa Đám mây & APK</h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Ứng dụng Google Apps Script, Google Sheets, Web App & Android APK giúp theo dõi sát sao năng lực từng học sinh và phản hồi tức thời.
            </p>
          </div>
        </div>
      </section>

      {/* 3. DỰ ÁN CÔNG NGHỆ & SÁNG KIẾN (FEATURED TECH PROJECTS) */}
      <section id="projects" className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 border border-teal-500/30 px-3.5 py-1.5 rounded-full">
                Sản phẩm Số & SKKN
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold mt-3">Dự án Công nghệ & Sáng kiến nổi bật</h2>
            </div>
            <p className="text-slate-400 text-sm max-w-md">
              Nhấn vào từng dự án để xem mô tả quy trình vận hành, công nghệ cốt lõi và hiệu quả thực nghiệm tại Trường THCS và THPT Vĩnh Lộc.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 flex flex-col justify-between hover:border-sky-500/60 transition group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-300">
                    AI & Apps Script
                  </span>
                  <i className="fa-solid fa-robot text-2xl text-sky-400 group-hover:scale-110 transition"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Chatbot "Toán của Thầy Em"</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Trợ lý ảo thông minh hỗ trợ giải đáp kiến thức Toán & Tin học khối 6, 7, 8, 9, tự động sinh câu hỏi trắc nghiệm ôn tập và đồng bộ điểm số về hệ thống quản lý của giáo viên.
                </p>
                <ul className="text-xs text-slate-400 space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-teal-400"></i> Hướng dẫn giải từng bước thay vì chỉ chép đáp án
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-teal-400"></i> Tự động lưu lịch sử làm bài vào Google Sheets
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-teal-400"></i> Ngân hàng câu hỏi Toán 6, 7, 8, 9 & Tin học THCS
                  </li>
                </ul>
              </div>
              <button
                onClick={() => openProjectModal('chatbot')}
                className="w-full py-3 rounded-2xl bg-sky-500/20 hover:bg-sky-500 text-sky-300 hover:text-white font-semibold text-sm transition flex items-center justify-center gap-2"
              >
                <span>Xem chi tiết dự án</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
              </button>
            </div>

            {/* Project 2 */}
            <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 flex flex-col justify-between hover:border-teal-500/60 transition group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300">
                    Web App & Android APK
                  </span>
                  <i className="fa-solid fa-shapes text-2xl text-teal-400 group-hover:scale-110 transition"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Hệ thống Web App GoogMath</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Nền tảng luyện tập Toán học trực quan kết hợp trò chơi hóa (Gamification), giúp học sinh tương tác trực tiếp với trục số, đồ thị, hình học phẳng và đại số 6, 7, 8, 9.
                </p>
                <ul className="text-xs text-slate-400 space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-teal-400"></i> Chạy mượt trên cả trình duyệt Web và App Android APK
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-teal-400"></i> Phản hồi đúng/sai kèm giải thích công thức chi tiết
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-teal-400"></i> Bảng xếp hạng thi đua theo tuần cho các lớp
                  </li>
                </ul>
              </div>
              <button
                onClick={() => openProjectModal('googmath')}
                className="w-full py-3 rounded-2xl bg-teal-500/20 hover:bg-teal-500 text-teal-300 hover:text-white font-semibold text-sm transition flex items-center justify-center gap-2"
              >
                <span>Xem chi tiết dự án</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
              </button>
            </div>

            {/* Project 3 */}
            <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 flex flex-col justify-between hover:border-amber-500/60 transition group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300">
                    Sáng kiến Kinh nghiệm
                  </span>
                  <i className="fa-solid fa-award text-2xl text-amber-400 group-hover:scale-110 transition"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">SKKN Dạy học Toán & Chuyển đổi số</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Đề tài ứng dụng Trí tuệ nhân tạo (AI) và học liệu số nhằm nâng cao hứng thú, năng lực tự học và kết quả học tập môn Toán & Tin học tại Trường THCS và THPT Vĩnh Lộc.
                </p>
                <ul className="text-xs text-slate-400 space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-teal-400"></i> Quy trình thiết kế học liệu số nhanh gọn, chuẩn xác
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-teal-400"></i> Đúc kết từ 17 năm kinh nghiệm thực tiễn đứng lớp
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-teal-400"></i> Bám sát định hướng chuyển đổi số ngành Giáo dục
                  </li>
                </ul>
              </div>
              <button
                onClick={() => openProjectModal('skkn')}
                className="w-full py-3 rounded-2xl bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-slate-950 font-semibold text-sm transition flex items-center justify-center gap-2"
              >
                <span>Xem chi tiết đề tài</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. KHO HỌC LIỆU SỐ & BÀI GIẢNG (RESOURCE HUB) */}
      <section id="resources" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-100 px-3.5 py-1.5 rounded-full">
              Chia sẻ Cộng đồng • Toán & Tin 6, 7, 8, 9
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3">Kho Học Liệu Số & Bài Giảng</h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Tổng hợp Kế hoạch bài dạy chuẩn 5512, chuyên đề Toán THCS (6, 7, 8, 9), Tin học THCS, chuyên đề STEM và đề ôn tập.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
            <input
              type="text"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              placeholder="Tìm bài giảng, số nguyên, tỉ lệ thức, Vi-ét, Tin học..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm focus:outline-none focus:border-sky-500 shadow-sm"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: 'all', label: 'Tất cả' },
            { id: 'toan6', label: 'Toán Lớp 6' },
            { id: 'toan7', label: 'Toán Lớp 7' },
            { id: 'toan89', label: 'Toán Lớp 8 & 9 (Thế mạnh)' },
            { id: 'tinhoc', label: 'Tin học 6•7•8•9' },
            { id: 'stem', label: 'Chuyên đề STEM' },
            { id: 'deon', label: 'Đề ôn tập' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={
                activeCategory === tab.id
                  ? 'px-4 py-2.5 rounded-xl text-sm font-bold bg-slate-900 text-white transition'
                  : 'px-4 py-2.5 rounded-xl text-sm font-semibold bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 transition'
              }
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Resource Cards Grid */}
        {filteredResources.length === 0 ? (
          <div className="bg-white rounded-3xl p-10 text-center border border-slate-200">
            <i className="fa-solid fa-folder-open text-3xl text-slate-300 mb-2"></i>
            <p className="font-bold text-slate-700">Không tìm thấy học liệu phù hợp với từ khóa.</p>
            <p className="text-xs text-slate-500 mt-1">Hãy thử từ khóa khác hoặc chọn mục "Tất cả".</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-lg transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200/60">
                      {item.tag}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      <i className="fa-regular fa-file-lines mr-1"></i>
                      {item.format}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base leading-snug mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-5">{item.desc}</p>
                </div>
                <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                  <button
                    onClick={() => previewResource(item)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition"
                  >
                    <i className="fa-regular fa-eye mr-1"></i> Xem cấu trúc
                  </button>
                  <button
                    onClick={() => downloadResource(item)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs transition"
                  >
                    <i className="fa-solid fa-cloud-arrow-down mr-1"></i> Tải học liệu
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 5. GÓC TRẢI NGHIỆM NHANH "TOÁN & TIN CỦA THẦY EM" (MINI INTERACTIVE DEMO WIDGET) */}
      <section
        id="ai-assistant"
        className="py-16 md:py-24 bg-gradient-to-b from-slate-100 to-sky-50/60 border-y border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100 px-3.5 py-1.5 rounded-full">
              <i className="fa-solid fa-bolt mr-1"></i> Tương tác trực tiếp trên trang
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-3">
              Góc Trải Nghiệm "Toán & Tin của Thầy Em"
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Chọn khối lớp (Toán 6, 7, 8, 9 hoặc Tin học 6–9) để ôn nhanh kiến thức trọng tâm với trợ lý ảo hoặc thử sức với câu hỏi trắc nghiệm có giải thích từng bước.
            </p>
          </div>

          {/* Grade Switcher */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex flex-wrap justify-center gap-1.5 p-1.5 rounded-2xl bg-white shadow-sm border border-slate-200">
              {(
                [
                  { key: '6', icon: 'fa-graduation-cap', label: 'Toán Lớp 6' },
                  { key: '7', icon: 'fa-compass-drafting', label: 'Toán Lớp 7' },
                  { key: '8', icon: 'fa-shapes', label: 'Toán Lớp 8' },
                  { key: '9', icon: 'fa-square-root-variable', label: 'Toán Lớp 9 (Ôn thi 10)' },
                  { key: 'tin', icon: 'fa-laptop-code', label: 'Tin Học 6–9' }
                ] as { key: DemoGradeKey; icon: string; label: string }[]
              ).map((g) => (
                <button
                  key={g.key}
                  onClick={() => handleSwitchDemoGrade(g.key)}
                  className={
                    currentGrade === g.key
                      ? 'px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-sky-600 text-white shadow transition'
                      : 'px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-900 transition'
                  }
                >
                  <i className={`fa-solid ${g.icon} mr-1.5`}></i> {g.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Interactive Concept Explorer (Chat Simulator) */}
            <div className="lg:col-span-6 bg-white rounded-3xl shadow-md border border-slate-200 overflow-hidden">
              <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-500 flex items-center justify-center text-slate-950 font-bold">
                    <i className="fa-solid fa-robot"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">Trợ lý AI - Toán & Tin của Thầy Em</h3>
                    <p className="text-xs text-teal-300">{activeDemo.badgeLabel}</p>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300">Sẵn sàng</span>
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Chọn nhanh chủ đề bạn muốn Thầy Lý Hoàng Em giải thích:
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeDemo.topics.map((t, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedTopicIdx(idx)}
                      className={
                        selectedTopicIdx === idx
                          ? 'px-3.5 py-2 rounded-xl text-xs font-bold bg-teal-600 text-white border border-teal-600 shadow-sm transition'
                          : 'px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 transition'
                      }
                    >
                      {t.name}
                    </button>
                  ))}
                </div>

                {/* AI Response Box */}
                <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 min-h-[210px] flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-teal-700 font-bold text-sm">
                      <i className="fa-solid fa-lightbulb"></i>
                      <span>{activeTopic.name}</span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <strong>Kiến thức cốt lõi:</strong> {activeTopic.rule}
                    </p>
                    <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 font-medium">
                      <i className="fa-solid fa-calculator text-sky-600 mr-1.5"></i> {activeTopic.example}
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200/80 text-xs text-sky-700 font-semibold">
                    <i className="fa-solid fa-star text-amber-500 mr-1"></i> {activeTopic.tip}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Quick Step-by-Step Interactive Quiz */}
            <div className="lg:col-span-6 bg-white rounded-3xl shadow-md border border-slate-200 overflow-hidden">
              <div className="bg-gradient-to-r from-sky-600 to-teal-600 text-white px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <i className="fa-solid fa-pen-ruler text-lg"></i>
                  <h3 className="font-bold text-sm">Thử thách Nhanh & Giải thích từng bước</h3>
                </div>
                <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full">
                  Câu {currentQuizIdx + 1}/{activeDemo.quizzes.length}
                </span>
              </div>

              <div className="p-6">
                <div className="font-bold text-slate-900 text-base sm:text-lg mb-4">{activeQuiz.q}</div>

                <div className="space-y-2.5 mb-5">
                  {activeQuiz.options.map((opt, idx) => {
                    let btnClass =
                      'w-full text-left px-4 py-3 rounded-2xl border border-slate-200 hover:border-sky-500 bg-slate-50/70 hover:bg-sky-50/50 text-sm font-semibold text-slate-800 transition flex items-center justify-between';
                    let iconClass = 'fa-regular fa-circle text-slate-400';

                    if (selectedQuizOption !== null) {
                      if (idx === activeQuiz.correct) {
                        btnClass =
                          'w-full text-left px-4 py-3 rounded-2xl border-2 border-emerald-500 bg-emerald-50 text-sm font-bold text-emerald-900 flex items-center justify-between';
                        iconClass = 'fa-solid fa-circle-check text-emerald-600';
                      } else if (idx === selectedQuizOption) {
                        btnClass =
                          'w-full text-left px-4 py-3 rounded-2xl border-2 border-rose-400 bg-rose-50 text-sm font-semibold text-rose-900 flex items-center justify-between';
                        iconClass = 'fa-solid fa-circle-xmark text-rose-500';
                      }
                    }

                    return (
                      <button key={idx} onClick={() => setSelectedQuizOption(idx)} className={btnClass}>
                        <span>
                          {String.fromCharCode(65 + idx)}. {opt}
                        </span>
                        <i className={iconClass}></i>
                      </button>
                    );
                  })}
                </div>

                {/* Step-by-step Feedback Area */}
                {selectedQuizOption !== null && (
                  <div
                    className={
                      selectedQuizOption === activeQuiz.correct
                        ? 'rounded-2xl p-4 text-xs sm:text-sm mb-4 bg-emerald-50 border border-emerald-200 text-emerald-900'
                        : 'rounded-2xl p-4 text-xs sm:text-sm mb-4 bg-amber-50 border border-amber-200 text-amber-900'
                    }
                  >
                    <div className="font-bold mb-1">
                      {selectedQuizOption === activeQuiz.correct
                        ? '🎉 Chính xác! Em nắm bài rất vững.'
                        : '💡 Chưa chính xác, cùng xem hướng dẫn của Thầy Em nhé:'}
                    </div>
                    <div>{activeQuiz.explain}</div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <span className="text-xs text-slate-500">Nhấn vào đáp án để xem lời giải chi tiết</span>
                  <button
                    onClick={handleNextQuizQuestion}
                    className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-sky-600 text-white text-xs font-bold transition flex items-center gap-1.5"
                  >
                    Câu tiếp theo <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LIÊN HỆ & KẾT NỐI (CONTACT & FOOTER) */}
      <section id="contact" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          {/* Info Column */}
          <div className="lg:col-span-5 math-bg text-white p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-500/20 px-3 py-1 rounded-full">
                Liên hệ & Hợp tác chuyên môn
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mt-4">Kết nối cùng Thầy Lý Hoàng Em</h2>
              <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                Học sinh, quý phụ huynh hoặc quý thầy cô đồng nghiệp cần trao đổi chuyên môn Toán & Tin học (6, 7, 8, 9), nhận file học liệu gốc (Word/PPT/Code) vui lòng gửi lời nhắn.
              </p>

              <div className="space-y-4 mt-8 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-sky-400 shrink-0">
                    <i className="fa-solid fa-school"></i>
                  </div>
                  <div>
                    <div className="font-bold text-white">Đơn vị công tác (17 năm kinh nghiệm)</div>
                    <div className="text-slate-300">Trường THCS và THPT Vĩnh Lộc</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-teal-400 shrink-0">
                    <i className="fa-solid fa-chalkboard-user"></i>
                  </div>
                  <div>
                    <div className="font-bold text-white">Chuyên môn phụ trách</div>
                    <div className="text-slate-300">
                      Giáo viên Toán & Tin học 6, 7, 8, 9 (Thế mạnh Toán THCS) • Ứng dụng AI & STEM
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-400 shrink-0">
                    <i className="fa-solid fa-envelope-open-text"></i>
                  </div>
                  <div>
                    <div className="font-bold text-white">Địa chỉ Email chính thức</div>
                    <a href="mailto:lyhoang2908@gmail.com" className="text-sky-300 hover:underline font-medium">
                      lyhoang2908@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 mt-8 flex items-center justify-between text-xs text-slate-400">
              <span>© Thầy Lý Hoàng Em</span>
              <span>Vĩnh Lộc • An Giang</span>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 p-8 sm:p-10">
            <h3 className="text-xl font-extrabold text-slate-900 mb-2">Gửi câu hỏi hoặc yêu cầu học liệu</h3>
            <p className="text-sm text-slate-500 mb-6">
              Điền thông tin bên dưới, hệ thống sẽ ghi nhận và phản hồi sớm nhất qua Email <strong>lyhoang2908@gmail.com</strong> hoặc Zalo.
            </p>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Họ và tên *</label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Nhập họ và tên của bạn"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">Bạn là *</label>
                  <select
                    value={senderRole}
                    onChange={(e) => setSenderRole(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-sky-500 bg-white"
                  >
                    <option value="Học sinh">Học sinh</option>
                    <option value="Giáo viên đồng nghiệp">Giáo viên đồng nghiệp</option>
                    <option value="Phụ huynh học sinh">Phụ huynh học sinh</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                  Email hoặc Số điện thoại (Zalo) *
                </label>
                <input
                  type="text"
                  required
                  value={senderContact}
                  onChange={(e) => setSenderContact(e.target.value)}
                  placeholder="Ví dụ: 09xx xxx xxx hoặc email@gmail.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                  Nội dung trao đổi / Tài liệu cần nhận *
                </label>
                <textarea
                  rows={4}
                  required
                  value={senderMessage}
                  onChange={(e) => setSenderMessage(e.target.value)}
                  placeholder="Nhập câu hỏi Toán/Tin học (6, 7, 8, 9) hoặc tên giáo án 5512, chuyên đề STEM bạn muốn nhận..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 text-white font-bold text-sm shadow-lg shadow-sky-500/20 transition flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-paper-plane"></i>
                  Gửi tin nhắn cho Thầy Em
                </button>
                <a
                  href="./ToanThayLyHoang.apk"
                  download="ToanThayLyHoang.apk"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition flex items-center justify-center gap-2"
                >
                  <i className="fa-brands fa-android text-teal-400"></i>
                  Tải App Android (.APK)
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 border-t border-slate-800 text-center text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            Trang thông tin cá nhân & Học liệu số của <strong className="text-white">Thầy Lý Hoàng Em</strong> — Trường
            THCS và THPT Vĩnh Lộc (<span className="text-sky-400">lyhoang2908@gmail.com</span>).
          </p>
          <a href="#home" className="text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1">
            Lên đầu trang <i className="fa-solid fa-arrow-up"></i>
          </a>
        </div>
      </footer>

      {/* UNIVERSAL INTERACTIVE MODAL */}
      {modalData && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-fadeIn">
            <button
              onClick={() => setModalData(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center"
              aria-label="Đóng"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-700 mb-3">
              {modalData.badge}
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">{modalData.title}</h3>
            <div className="text-sm text-slate-600 space-y-3 leading-relaxed">{modalData.body}</div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap justify-end gap-3">
              <button
                onClick={() => setModalData(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold"
              >
                Đóng
              </button>
              <a
                href="#contact"
                onClick={() => setModalData(null)}
                className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-sm font-bold flex items-center gap-2"
              >
                <i className="fa-solid fa-download"></i> Đăng ký nhận học liệu / Mã nguồn
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return isMobilePreview ? (
    <div className="min-h-screen bg-slate-900 py-6 px-4 flex flex-col items-center justify-center">
      <div className="mb-4 flex flex-wrap items-center justify-center gap-3 px-4 py-2 rounded-2xl bg-slate-800 border border-slate-700 text-white text-xs">
        <span className="inline-flex items-center gap-1.5 font-bold text-teal-400">
          <i className="fa-solid fa-mobile-screen-button"></i>
          Chế độ Xem Thử Giao Diện Android APK (Thầy Lý Hoàng Em)
        </span>
        <button
          onClick={() => setIsMobilePreview(false)}
          className="px-3 py-1 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-bold"
        >
          Thoát về giao diện Web toàn màn hình
        </button>
      </div>
      <div className="w-full max-w-[420px] h-[840px] rounded-[42px] border-[10px] border-slate-800 bg-slate-950 shadow-2xl overflow-hidden flex flex-col relative">
        <div className="bg-slate-950 text-white px-6 py-1.5 flex items-center justify-between text-[11px] font-semibold shrink-0 border-b border-slate-800">
          <span>09:41 • Thầy Lý Hoàng Em</span>
          <div className="flex items-center gap-2">
            <span>5G</span>
            <span>100% 🔋</span>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto overflow-x-hidden relative">{pageBody}</div>
      </div>
    </div>
  ) : (
    pageBody
  );
};

export default App;
