import React, { useState, useMemo } from 'react';
import {
  Bookmark,
  BookOpen,
  Calculator,
  CheckCircle2,
  HelpCircle,
  LineChart,
  Play,
  RefreshCw,
  Search,
  Sparkles,
  Trophy,
  XCircle
} from 'lucide-react';
import { MATH_FORMULAS, QUIZ_QUESTIONS } from '../data/teacherData';
import { MathTex } from './MathTex';

export const MathLabSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'quiz' | 'formulas' | 'graph'>('quiz');

  // --- QUIZ STATE ---
  const [quizCategory, setQuizCategory] = useState<'TOAN_9_VAO_10' | 'TOAN_12_THPT_QG'>('TOAN_9_VAO_10');
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [submittedQuiz, setSubmittedQuiz] = useState<boolean>(false);

  const currentQuestions = useMemo(
    () => QUIZ_QUESTIONS.filter((q) => q.category === quizCategory),
    [quizCategory]
  );

  const quizScore = useMemo(() => {
    let correct = 0;
    currentQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) correct += 1;
    });
    return correct;
  }, [currentQuestions, selectedAnswers]);

  const handleSelectOption = (qId: string, optIdx: number) => {
    if (submittedQuiz) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  };

  const handleResetQuiz = (newCat?: 'TOAN_9_VAO_10' | 'TOAN_12_THPT_QG') => {
    if (newCat) setQuizCategory(newCat);
    setSelectedAnswers({});
    setSubmittedQuiz(false);
  };

  // --- FORMULAS STATE ---
  const [formulaCategory, setFormulaCategory] = useState<string>('ALL');
  const [formulaSearch, setFormulaSearch] = useState<string>('');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(['f-1', 'f-4']);

  const filteredFormulas = useMemo(() => {
    return MATH_FORMULAS.filter((f) => {
      const matchCat =
        formulaCategory === 'ALL' ||
        (formulaCategory === 'BOOKMARKED' ? bookmarkedIds.includes(f.id) : f.category === formulaCategory);
      const q = formulaSearch.trim().toLowerCase();
      const matchSearch =
        !q ||
        f.title.toLowerCase().includes(q) ||
        f.categoryLabel.toLowerCase().includes(q) ||
        f.note.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [formulaCategory, formulaSearch, bookmarkedIds]);

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  // --- VISUAL GRAPH & VIETA SOLVER STATE ---
  const [coefA, setCoefA] = useState<number>(1);
  const [coefB, setCoefB] = useState<number>(-2);
  const [coefC, setCoefC] = useState<number>(-3);

  const quadAnalysis = useMemo(() => {
    const a = coefA === 0 ? 1 : coefA;
    const b = coefB;
    const c = coefC;
    const delta = b * b - 4 * a * c;
    const vertexX = -b / (2 * a);
    const vertexY = -delta / (4 * a);
    const sumS = -b / a;
    const prodP = c / a;

    let rootsText = '';
    let roots: number[] = [];
    if (delta < 0) {
      rootsText = 'Phương trình vô nghiệm thực (Đồ thị không cắt trục hoành Ox)';
    } else if (Math.abs(delta) < 1e-9) {
      const x0 = -b / (2 * a);
      roots = [x0];
      rootsText = `Nghiệm kép x₁ = x₂ = ${Number(x0.toFixed(2))}`;
    } else {
      const x1 = (-b - Math.sqrt(delta)) / (2 * a);
      const x2 = (-b + Math.sqrt(delta)) / (2 * a);
      roots = [x1, x2].sort((m, n) => m - n);
      rootsText = `Hai nghiệm phân biệt: x₁ = ${Number(roots[0].toFixed(2))} ; x₂ = ${Number(roots[1].toFixed(2))}`;
    }

    // Generate SVG polyline points for x in [-6, 6]
    const svgWidth = 360;
    const svgHeight = 260;
    const scale = 22; // 1 unit = 22px
    const originX = svgWidth / 2;
    const originY = svgHeight / 2;

    const points: string[] = [];
    for (let x = -7; x <= 7; x += 0.15) {
      const y = a * x * x + b * x + c;
      const px = originX + x * scale;
      const py = originY - y * scale;
      if (py >= -60 && py <= svgHeight + 60) {
        points.push(`${px.toFixed(1)},${py.toFixed(1)}`);
      }
    }

    return {
      a,
      b,
      c,
      delta,
      vertexX,
      vertexY,
      sumS,
      prodP,
      roots,
      rootsText,
      svgPoints: points.join(' '),
      originX,
      originY,
      scale
    };
  }, [coefA, coefB, coefC]);

  return (
    <section className="py-12 sm:py-16 bg-slate-100/70 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            <span>Phòng Học & Luyện Toán Tương Tác (Math Lab)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white">
            Trải Nghiệm Học Toán Thông Minh Ngay Trên Web & APK
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Tích hợp bộ đề kiểm tra nhanh có lời giải chi tiết bằng công thức chuẩn <MathTex tex="\LaTeX" />, sổ tay công thức trọng tâm và công cụ vẽ đồ thị trực quan.
          </p>
        </div>

        {/* Lab Mode Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          <button
            onClick={() => setActiveTab('quiz')}
            className={`inline-flex items-center gap-2 px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'quiz'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800'
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span>1. Thi Thử Trắc Nghiệm Có Giải Chi Tiết</span>
          </button>

          <button
            onClick={() => setActiveTab('formulas')}
            className={`inline-flex items-center gap-2 px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'formulas'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>2. Sổ Tay Công Thức Toán Trọng Tâm</span>
          </button>

          <button
            onClick={() => setActiveTab('graph')}
            className={`inline-flex items-center gap-2 px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'graph'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800'
            }`}
          >
            <LineChart className="w-4 h-4" />
            <span>3. Khảo Sát Hàm Số & Vẽ Đồ Thị Parabol</span>
          </button>
        </div>

        {/* TAB 1: INTERACTIVE QUIZ */}
        {activeTab === 'quiz' && (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-8 shadow-sm space-y-6">
            {/* Quiz Level Selector */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleResetQuiz('TOAN_9_VAO_10')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    quizCategory === 'TOAN_9_VAO_10'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  Đề Mini Toán 9 – Ôn Thi Vào 10
                </button>
                <button
                  onClick={() => handleResetQuiz('TOAN_12_THPT_QG')}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    quizCategory === 'TOAN_12_THPT_QG'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  Đề Mini Toán 12 – Ôn THPT Quốc Gia
                </button>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Đã chọn: <strong>{Object.keys(selectedAnswers).length}/{currentQuestions.length}</strong> câu
                </span>
                <button
                  onClick={() => handleResetQuiz()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Làm lại</span>
                </button>
              </div>
            </div>

            {/* Score Banner when submitted */}
            {submittedQuiz && (
              <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-300">
                    <Sparkles className="w-4 h-4" />
                    <span>Kết quả bài kiểm tra nhanh</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-extrabold">
                    Bạn đạt {quizScore}/{currentQuestions.length} câu đúng ({Math.round((quizScore / currentQuestions.length) * 100)}%)
                  </h4>
                  <p className="text-xs sm:text-sm text-blue-100">
                    Xem lời giải phân tích chi tiết của Thầy ở bên dưới từng câu hỏi.
                  </p>
                </div>
                <button
                  onClick={() => handleResetQuiz()}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold bg-white text-blue-700 hover:bg-blue-50 shadow-sm shrink-0"
                >
                  Thử sức lại
                </button>
              </div>
            )}

            {/* Questions List */}
            <div className="space-y-6">
              {currentQuestions.map((q, qIndex) => {
                const userSelected = selectedAnswers[q.id];
                const isCorrect = userSelected === q.correctIndex;

                return (
                  <div
                    key={q.id}
                    className="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 space-y-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-lg bg-blue-600 text-white text-xs font-extrabold">
                          Câu {qIndex + 1}
                        </span>
                        <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                          {q.topic}
                        </span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300">
                        Mức độ: {q.difficulty}
                      </span>
                    </div>

                    {/* Question Stem */}
                    <div className="text-sm sm:text-base font-medium text-slate-900 dark:text-slate-100 leading-relaxed">
                      <MathTex tex={q.question} />
                    </div>

                    {/* 4 Options */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {q.options.map((opt, optIdx) => {
                        const isThisSelected = userSelected === optIdx;
                        const isThisCorrectOption = q.correctIndex === optIdx;

                        let btnStyle =
                          'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-blue-400';

                        if (!submittedQuiz && isThisSelected) {
                          btnStyle =
                            'bg-blue-50 dark:bg-blue-950/80 border-blue-600 text-blue-800 dark:text-blue-200 ring-2 ring-blue-500/20';
                        } else if (submittedQuiz) {
                          if (isThisCorrectOption) {
                            btnStyle =
                              'bg-emerald-50 dark:bg-emerald-950/70 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold';
                          } else if (isThisSelected && !isThisCorrectOption) {
                            btnStyle =
                              'bg-rose-50 dark:bg-rose-950/70 border-rose-500 text-rose-900 dark:text-rose-200';
                          }
                        }

                        const optionLabels = ['A', 'B', 'C', 'D'];

                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleSelectOption(q.id, optIdx)}
                            className={`flex items-center justify-between gap-3 p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all ${btnStyle}`}
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <span
                                className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-extrabold shrink-0 ${
                                  isThisSelected
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                                }`}
                              >
                                {optionLabels[optIdx]}
                              </span>
                              <MathTex tex={opt} />
                            </div>
                            {submittedQuiz && isThisCorrectOption && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            )}
                            {submittedQuiz && isThisSelected && !isThisCorrectOption && (
                              <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Step-by-step Explanation after Submit */}
                    {submittedQuiz && (
                      <div className="p-4 rounded-xl bg-blue-50/80 dark:bg-slate-900 border border-blue-200/80 dark:border-blue-900/60 space-y-1.5 text-xs sm:text-sm">
                        <div className="flex items-center gap-2 font-bold text-blue-800 dark:text-blue-300">
                          <HelpCircle className="w-4 h-4 shrink-0" />
                          <span>
                            Lời giải chi tiết của Thầy ({isCorrect ? 'Bạn làm đúng câu này!' : 'Hãy lưu ý phương pháp giải'}):
                          </span>
                        </div>
                        <div className="text-slate-700 dark:text-slate-300 leading-relaxed">
                          <MathTex tex={q.explanation} />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Submit Quiz Button */}
            {!submittedQuiz && (
              <div className="flex justify-center pt-2">
                <button
                  onClick={() => setSubmittedQuiz(true)}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-extrabold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-600/25 transition-all"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Nộp Bài & Xem Lời Giải Chi Tiết</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: FORMULA REFERENCE HANDBOOK */}
        {activeTab === 'formulas' && (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-8 shadow-sm space-y-6">
            {/* Search and Filter Bar */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={formulaSearch}
                  onChange={(e) => setFormulaSearch(e.target.value)}
                  placeholder="Tìm kiếm công thức (VD: Vi-ét, Tích phân, Oxyz, Bayes, Cauchy...)"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                {[
                  { id: 'ALL', label: 'Tất cả' },
                  { id: 'DAI_SO_9', label: 'Đại số 9' },
                  { id: 'HINH_HOC_9', label: 'Hình học 9' },
                  { id: 'GIAI_TICH_12', label: 'Giải tích 12' },
                  { id: 'HINH_KHONG_GIAN', label: 'Hình Oxyz' },
                  { id: 'XAC_SUAT', label: 'Xác suất mới' },
                  { id: 'BOOKMARKED', label: `Đã lưu (${bookmarkedIds.length})` }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setFormulaCategory(cat.id)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                      formulaCategory === cat.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Formulas List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredFormulas.map((item) => {
                const isSaved = bookmarkedIds.includes(item.id);
                return (
                  <div
                    key={item.id}
                    className="p-5 rounded-2xl bg-slate-50/90 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between space-y-3"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                          {item.categoryLabel}
                        </span>
                        <button
                          onClick={() => toggleBookmark(item.id)}
                          title="Lưu công thức trọng tâm"
                          className={`p-1.5 rounded-lg transition-colors ${
                            isSaved
                              ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/60'
                              : 'text-slate-400 hover:text-slate-600'
                          }`}
                        >
                          <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-400' : ''}`} />
                        </button>
                      </div>

                      <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                        {item.title}
                      </h4>

                      {/* Main Formula Box */}
                      <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-blue-200/70 dark:border-slate-700 text-center overflow-x-auto">
                        <MathTex tex={item.formulaTex} block />
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        <strong className="text-amber-600 dark:text-amber-400">Lưu ý của Thầy: </strong>
                        <MathTex tex={item.note} />
                      </p>
                      <div className="p-2.5 rounded-lg bg-slate-200/50 dark:bg-slate-900/90 text-xs text-slate-700 dark:text-slate-300 overflow-x-auto">
                        <span className="font-semibold">Mở rộng / Hệ quả: </span>
                        <MathTex tex={`$${item.exampleTex}$`} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: VISUAL QUADRATIC GRAPH & VIETA EXPLORER */}
        {activeTab === 'graph' && (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-5 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Parameter Sliders & Automated Math Analysis */}
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                    Trực quan hóa Hàm số & Phương trình bậc hai
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-2">
                    Khảo Sát Parabol <MathTex tex="y = ax^2 + bx + c" /> & Hệ Thức Vi-ét
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                    Kéo thanh trượt để thay đổi hệ số <MathTex tex="a, b, c" /> và quan sát sự thay đổi của đỉnh Parabol, số giao điểm với trục hoành <MathTex tex="Ox" />.
                  </p>
                </div>

                {/* Sliders */}
                <div className="space-y-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span>Hệ số a (a ≠ 0):</span>
                      <span className="text-blue-600 dark:text-blue-400">{quadAnalysis.a}</span>
                    </div>
                    <input
                      type="range"
                      min={-3}
                      max={3}
                      step={0.5}
                      value={coefA}
                      onChange={(e) => {
                        const val = parseFloat(e.target.value);
                        setCoefA(val === 0 ? 0.5 : val);
                      }}
                      className="w-full accent-blue-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span>Hệ số b:</span>
                      <span className="text-blue-600 dark:text-blue-400">{quadAnalysis.b}</span>
                    </div>
                    <input
                      type="range"
                      min={-6}
                      max={6}
                      step={1}
                      value={coefB}
                      onChange={(e) => setCoefB(parseFloat(e.target.value))}
                      className="w-full accent-blue-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span>Hệ số tự do c (Tung độ giao điểm Oy):</span>
                      <span className="text-blue-600 dark:text-blue-400">{quadAnalysis.c}</span>
                    </div>
                    <input
                      type="range"
                      min={-5}
                      max={5}
                      step={1}
                      value={coefC}
                      onChange={(e) => setCoefC(parseFloat(e.target.value))}
                      className="w-full accent-blue-600"
                    />
                  </div>
                </div>

                {/* Computed Analysis Results */}
                <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900">
                    <div className="text-slate-500 dark:text-slate-400 text-xs">Biệt thức Δ = b² - 4ac</div>
                    <div className="text-base font-extrabold text-blue-700 dark:text-blue-300 mt-0.5">
                      Δ = {Number(quadAnalysis.delta.toFixed(2))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900">
                    <div className="text-slate-500 dark:text-slate-400 text-xs">Tọa độ Đỉnh Parabol I</div>
                    <div className="text-base font-extrabold text-amber-800 dark:text-amber-300 mt-0.5">
                      I({Number(quadAnalysis.vertexX.toFixed(2))}; {Number(quadAnalysis.vertexY.toFixed(2))})
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-900">
                    <div className="text-slate-500 dark:text-slate-400 text-xs">Tổng Vi-ét (x₁ + x₂ = -b/a)</div>
                    <div className="text-base font-extrabold text-emerald-700 dark:text-emerald-300 mt-0.5">
                      S = {Number(quadAnalysis.sumS.toFixed(2))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-200/60 dark:border-purple-900">
                    <div className="text-slate-500 dark:text-slate-400 text-xs">Tích Vi-ét (x₁·x₂ = c/a)</div>
                    <div className="text-base font-extrabold text-purple-700 dark:text-purple-300 mt-0.5">
                      P = {Number(quadAnalysis.prodP.toFixed(2))}
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Kết luận nghiệm: <span className="text-blue-600 dark:text-blue-400">{quadAnalysis.rootsText}</span>
                </div>
              </div>

              {/* Right Column: Live Interactive SVG Coordinate Plane */}
              <div className="lg:col-span-6 flex flex-col items-center">
                <div className="w-full max-w-[380px] rounded-2xl bg-slate-950 p-4 border border-slate-800 shadow-xl">
                  <div className="flex items-center justify-between text-xs text-slate-300 mb-2">
                    <span className="font-bold text-amber-400">
                      Đồ thị (P): y = {quadAnalysis.a}x² {quadAnalysis.b >= 0 ? `+ ${quadAnalysis.b}` : quadAnalysis.b}x{' '}
                      {quadAnalysis.c >= 0 ? `+ ${quadAnalysis.c}` : quadAnalysis.c}
                    </span>
                    <span className="text-[11px] text-slate-400">Hệ trục Oxy</span>
                  </div>

                  <svg
                    viewBox="0 0 360 260"
                    className="w-full h-auto bg-slate-900 rounded-xl border border-slate-800 overflow-hidden"
                  >
                    {/* Grid lines */}
                    {[-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6].map((unit) => (
                      <React.Fragment key={unit}>
                        <line
                          x1={quadAnalysis.originX + unit * quadAnalysis.scale}
                          y1={0}
                          x2={quadAnalysis.originX + unit * quadAnalysis.scale}
                          y2={260}
                          stroke="rgba(148,163,184,0.12)"
                          strokeWidth="1"
                        />
                        <line
                          x1={0}
                          y1={quadAnalysis.originY - unit * quadAnalysis.scale}
                          x2={360}
                          y2={quadAnalysis.originY - unit * quadAnalysis.scale}
                          stroke="rgba(148,163,184,0.12)"
                          strokeWidth="1"
                        />
                      </React.Fragment>
                    ))}

                    {/* Axes Ox & Oy */}
                    <line
                      x1={0}
                      y1={quadAnalysis.originY}
                      x2={360}
                      y2={quadAnalysis.originY}
                      stroke="#94a3b8"
                      strokeWidth="1.5"
                    />
                    <line
                      x1={quadAnalysis.originX}
                      y1={0}
                      x2={quadAnalysis.originX}
                      y2={260}
                      stroke="#94a3b8"
                      strokeWidth="1.5"
                    />
                    <text x={345} y={quadAnalysis.originY - 6} fill="#cbd5e1" fontSize="11" fontWeight="bold">
                      x
                    </text>
                    <text x={quadAnalysis.originX + 6} y={14} fill="#cbd5e1" fontSize="11" fontWeight="bold">
                      y
                    </text>
                    <text x={quadAnalysis.originX - 12} y={quadAnalysis.originY + 14} fill="#94a3b8" fontSize="10">
                      O
                    </text>

                    {/* Axis of Symmetry */}
                    <line
                      x1={quadAnalysis.originX + quadAnalysis.vertexX * quadAnalysis.scale}
                      y1={0}
                      x2={quadAnalysis.originX + quadAnalysis.vertexX * quadAnalysis.scale}
                      y2={260}
                      stroke="#f59e0b"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />

                    {/* Parabola Curve */}
                    <polyline
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      points={quadAnalysis.svgPoints}
                    />

                    {/* Vertex Point I */}
                    <circle
                      cx={quadAnalysis.originX + quadAnalysis.vertexX * quadAnalysis.scale}
                      cy={quadAnalysis.originY - quadAnalysis.vertexY * quadAnalysis.scale}
                      r="5"
                      fill="#f59e0b"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />

                    {/* Real Roots on Ox */}
                    {quadAnalysis.roots.map((r, idx) => (
                      <circle
                        key={idx}
                        cx={quadAnalysis.originX + r * quadAnalysis.scale}
                        cy={quadAnalysis.originY}
                        r="4.5"
                        fill="#10b981"
                        stroke="#fff"
                        strokeWidth="1.5"
                      />
                    ))}
                  </svg>

                  <div className="flex items-center justify-center gap-4 mt-3 text-[11px] text-slate-300">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                      Đồ thị (P)
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      Đỉnh I
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      Nghiệm trên Ox
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
