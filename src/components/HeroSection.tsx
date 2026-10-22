import React from 'react';
import {
  Award,
  BookOpen,
  Calculator,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  PhoneCall,
  Sparkles,
  Star,
  TrendingUp,
  Users
} from 'lucide-react';
import { TeacherProfile } from '../data/teacherData';
import { NavSection } from './Navbar';
import { MathTex } from './MathTex';

interface HeroSectionProps {
  profile: TeacherProfile;
  onNavigate: (section: NavSection) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile, onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-math-grid pt-6 pb-14 sm:py-16 border-b border-slate-200/70 dark:border-slate-800/80">
      {/* Decorative Background Glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Teacher Brand & Value Proposition */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/90 dark:bg-blue-950/90 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Thương Hiệu Giáo Dục Toán Học Uy Tín • THCS & THPT</span>
            </div>

            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {profile.degree}
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                {profile.fullName}
              </h1>
              <p className="text-base sm:text-lg font-semibold text-slate-700 dark:text-slate-200">
                {profile.title}
              </p>
            </div>

            {/* Philosophy Quote Box */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50/90 via-indigo-50/70 to-white dark:from-slate-900 dark:via-blue-950/40 dark:to-slate-900 border-l-4 border-blue-600 shadow-sm">
              <p className="text-sm sm:text-base italic text-slate-700 dark:text-slate-200 leading-relaxed">
                {profile.philosophyQuote}
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {profile.bio}
            </p>

            {/* Highlight Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {profile.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 shadow-sm"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  {badge}
                </span>
              ))}
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('register')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all"
              >
                <span>Đăng Ký Học Thử Miễn Phí</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('mathlab')}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-bold text-sm bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-md shadow-amber-500/20 transition-all"
              >
                <Calculator className="w-4 h-4" />
                <span>Vào Phòng Luyện Toán</span>
              </button>

              <button
                onClick={() => onNavigate('courses')}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm bg-white hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all"
              >
                <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Xem Lộ Trình Học</span>
              </button>
            </div>
          </div>

          {/* Right Column: Teacher Portrait & Mathematical Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Main Teacher Identity Card */}
              <div className="relative rounded-3xl bg-gradient-to-b from-blue-900 via-indigo-900 to-slate-900 text-white p-6 sm:p-7 shadow-2xl border border-blue-400/20 overflow-hidden">
                {/* Floating Math Formulas Watermark */}
                <div className="pointer-events-none absolute top-3 right-4 opacity-15 text-xs font-serif select-none">
                  <MathTex tex="\int_{a}^{b} f(x)\,dx = F(b) - F(a)" />
                </div>
                <div className="pointer-events-none absolute bottom-16 left-4 opacity-15 text-xs font-serif select-none">
                  <MathTex tex="x_{1,2} = \frac{-b \pm \sqrt{\Delta}}{2a}" />
                </div>

                {/* Avatar & Identity Header */}
                <div className="flex items-center gap-4">
                  {profile.avatarUrl ? (
                    <img
                      src={profile.avatarUrl}
                      alt={profile.fullName}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-amber-400 shadow-lg shrink-0"
                    />
                  ) : (
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 p-0.5 shadow-lg shrink-0">
                      <div className="w-full h-full rounded-[14px] bg-slate-900 flex flex-col items-center justify-center">
                        <GraduationCap className="w-9 h-9 text-amber-400" />
                        <span className="text-[11px] font-extrabold text-amber-300 tracking-wider mt-0.5">
                          MATH PRO
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="min-w-0">
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[11px] font-bold mb-1">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>Giáo Viên Chuyên Toán</span>
                    </div>
                    <h2 className="text-xl font-extrabold text-white truncate">{profile.fullName}</h2>
                    <p className="text-xs text-blue-200 line-clamp-2 mt-0.5">{profile.workplace}</p>
                  </div>
                </div>

                {/* Interactive Formula Motto Box */}
                <div className="mt-5 p-3.5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15">
                  <div className="text-[11px] uppercase tracking-wider text-blue-200 font-semibold mb-1">
                    Công thức Thành công Độc quyền
                  </div>
                  <div className="text-sm sm:text-base font-bold text-amber-300">
                    <MathTex tex="\text{Điểm } 9+ = \text{Bản chất} \times \text{Phản xạ} + \text{Kỷ luật}" />
                  </div>
                </div>

                {/* Key Metrics Grid inside Card */}
                <div className="grid grid-cols-2 gap-3 mt-5">
                  <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-white/10">
                    <div className="flex items-center gap-2 text-blue-300 text-xs font-medium">
                      <Award className="w-4 h-4 text-amber-400" />
                      <span>Kinh nghiệm</span>
                    </div>
                    <div className="text-2xl font-extrabold text-white mt-1">
                      {profile.experienceYears}+ Năm
                    </div>
                    <div className="text-[11px] text-slate-300">Chuyên luyện thi 10 & ĐH</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-white/10">
                    <div className="flex items-center gap-2 text-blue-300 text-xs font-medium">
                      <Users className="w-4 h-4 text-emerald-400" />
                      <span>Học sinh</span>
                    </div>
                    <div className="text-2xl font-extrabold text-white mt-1">
                      {profile.totalStudents}
                    </div>
                    <div className="text-[11px] text-slate-300">Đã đồng hành & bứt phá</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-white/10">
                    <div className="flex items-center gap-2 text-blue-300 text-xs font-medium">
                      <TrendingUp className="w-4 h-4 text-sky-400" />
                      <span>Đỗ NV1 vào 10</span>
                    </div>
                    <div className="text-2xl font-extrabold text-amber-400 mt-1">
                      {profile.passRateGrade10}
                    </div>
                    <div className="text-[11px] text-slate-300">THPT Công lập & Chuyên</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-white/10">
                    <div className="flex items-center gap-2 text-blue-300 text-xs font-medium">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      <span>Điểm 9.0+ THPT</span>
                    </div>
                    <div className="text-2xl font-extrabold text-emerald-400 mt-1">
                      {profile.highScoreCountTHPT}
                    </div>
                    <div className="text-[11px] text-slate-300">Học sinh đạt 9.0 – 10</div>
                  </div>
                </div>

                {/* Direct Contact Bar */}
                <div className="mt-5 pt-4 border-t border-white/15 flex items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2 text-blue-100">
                    <PhoneCall className="w-4 h-4 text-emerald-400" />
                    <span>Hotline / Zalo:</span>
                    <strong className="text-white font-bold">{profile.phone}</strong>
                  </div>
                  <button
                    onClick={() => onNavigate('halloffame')}
                    className="text-amber-300 hover:text-amber-200 font-bold underline underline-offset-4"
                  >
                    Bảng vàng →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
