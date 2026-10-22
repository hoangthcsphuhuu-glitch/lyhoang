import React, { useState } from 'react';
import {
  Award,
  BookOpen,
  CheckCircle2,
  MessageSquareQuote,
  Sparkles,
  Star,
  Trophy,
  X
} from 'lucide-react';
import {
  BLOG_POSTS,
  BlogPost,
  HALL_OF_FAME,
  TESTIMONIALS
} from '../data/teacherData';
import { MathTex } from './MathTex';

export const HallOfFameSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  return (
    <section className="py-12 sm:py-16 bg-slate-100/70 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800 space-y-16">
      {/* Part 1: Student Honor Roll (Bảng Vàng Vinh Danh) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span>Bảng Vàng Vinh Danh Học Sinh Xuất Sắc</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white">
            Tự Hào Những Chiến Binh Chinh Phục 9.5+ Điểm Toán
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Thành quả ngọt ngào từ sự nỗ lực bền bỉ của các em học sinh cùng lộ trình ôn luyện chuẩn xác.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {HALL_OF_FAME.map((student) => (
            <div
              key={student.id}
              className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top Banner */}
                <div className={`p-5 bg-gradient-to-r ${student.avatarBg} text-white relative`}>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-[11px] font-bold">
                      {student.year}
                    </span>
                    <Award className="w-5 h-5 text-amber-300" />
                  </div>
                  <div className="text-2xl font-black tracking-tight text-amber-300">
                    {student.score}
                  </div>
                  <div className="text-xs font-bold text-white/95 mt-0.5">
                    {student.achievementTitle}
                  </div>
                </div>

                {/* Student Info & Quote */}
                <div className="p-5 space-y-2.5">
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                      {student.studentName}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                      {student.school}
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      {student.examName}
                    </p>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 italic leading-relaxed">
                    “{student.quote}”
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Part 2: Parent & Student Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 justify-center text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
          <MessageSquareQuote className="w-4 h-4" />
          <span>Cảm Nhận Từ Phụ Huynh & Học Sinh</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-center text-slate-900 dark:text-white mb-8">
          Niềm Tin Của Gia Đình Là Động Lực Lớn Nhất
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                    {item.studentResult}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  “{item.content}”
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                <div className="font-bold text-sm text-slate-900 dark:text-white">
                  {item.authorName}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Part 3: Educational Blog & Methodology Articles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">
              <BookOpen className="w-4 h-4" />
              <span>Góc Chia Sẻ Phương Pháp Học Toán</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Cẩm Nang Ôn Thi & Kinh Nghiệm Phòng Thi
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>

                <h4 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white mb-2 leading-snug">
                  {post.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="space-y-1.5 mb-4">
                  {post.keyTakeaways.slice(0, 2).map((point, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <MathTex tex={point} />
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setActiveArticle(post)}
                className="w-full py-2.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-blue-600 hover:text-white dark:bg-slate-800 dark:hover:bg-blue-600 text-slate-700 dark:text-slate-200 transition-colors"
              >
                Đọc chi tiết bài viết →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 shadow-2xl space-y-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                  {activeArticle.category} • {activeArticle.readTime}
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-2">
                  {activeArticle.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-amber-800 dark:text-amber-300">
                <Sparkles className="w-4 h-4" />
                <span>Điểm cốt lõi cần nhớ:</span>
              </div>
              {activeArticle.keyTakeaways.map((kt, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <MathTex tex={kt} />
                </div>
              ))}
            </div>

            <div className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-3">
              <MathTex tex={activeArticle.fullContent} />
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-blue-600 text-white"
              >
                Đóng bài viết
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
