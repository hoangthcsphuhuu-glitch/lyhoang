import React from 'react';
import {
  Award,
  BookOpenCheck,
  Briefcase,
  CheckCircle2,
  GraduationCap,
  Lightbulb,
  MapPin,
  ShieldCheck,
  Sparkles,
  Target
} from 'lucide-react';
import {
  EXPERIENCE_TIMELINE,
  TEACHING_METHODS,
  TeacherProfile
} from '../data/teacherData';

interface AboutTimelineSectionProps {
  profile: TeacherProfile;
}

export const AboutTimelineSection: React.FC<AboutTimelineSectionProps> = ({ profile }) => {
  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'education':
        return <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'award':
        return <Award className="w-5 h-5 text-amber-500" />;
      case 'innovation':
        return <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      default:
        return <Briefcase className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  return (
    <section className="py-12 sm:py-16 space-y-16">
      {/* Part 1: Teacher Personal Story & Core Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Hồ Sơ Năng Lực & Triết Lý Giáo Dục</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white">
            Hành Trình {profile.experienceYears}+ Năm Truyền Lửa Tình Yêu Toán Học
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Mỗi học sinh đều có tiềm năng chinh phục Toán học nếu được dẫn dắt đúng phương pháp, hiểu từ gốc rễ và rèn luyện sự tự tin qua từng bài toán.
          </p>
        </div>

        {/* 3 Core Identity Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/80 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Chuyên Môn Sư Phạm Vững Vàng
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {profile.degree}. Nghiên cứu chuyên sâu về phương pháp phát triển năng lực tư duy logic, giải quyết bài toán thực tiễn theo Chương trình GDPT 2018.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/80 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Thực Chiến Tuyển Sinh 10 & THPT QG
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Biên soạn hệ thống chuyên đề chuẩn cấu trúc mới: Tự luận trình bày điểm 10 cho lớp 9 và bộ 3 dạng thức Trắc nghiệm mới (4 lựa chọn, Đúng/Sai, Trả lời ngắn) cho lớp 12.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              Ứng Dụng Công Nghệ & Theo Sát Cá Nhân
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Kết hợp giảng dạy trực tiếp với hệ thống Web App & APK luyện đề thông minh, thống kê lỗi sai từng học sinh và cập nhật tình hình học tập định kỳ cho Phụ huynh.
            </p>
          </div>
        </div>
      </div>

      {/* Part 2: 4-Step Exclusive Teaching Methodology */}
      <div className="bg-slate-100/80 dark:bg-slate-900/50 py-12 border-y border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
                <BookOpenCheck className="w-4 h-4" />
                <span>Phương Pháp Sư Phạm Độc Quyền</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Lộ Trình 4 Bước Chuyển Hóa Tư Duy Toán Học
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span>{profile.workplace}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {TEACHING_METHODS.map((method, idx) => (
              <div
                key={idx}
                className="relative flex flex-col justify-between p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-extrabold bg-blue-600 text-white">
                      {method.step}
                    </span>
                    <span className="text-2xl font-black text-slate-200 dark:text-slate-800">
                      0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                    {method.title}
                  </h4>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3">
                    {method.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {method.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
                  {method.outcomes.map((outcome, oIdx) => (
                    <div key={oIdx} className="flex items-start gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Part 3: Career & Achievement Timeline */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Dấu Ấn Kinh Nghiệm & Thành Tích Giảng Dạy
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Những cột mốc tiêu biểu trên hành trình giảng dạy và bồi dưỡng các thế hệ học sinh
          </p>
        </div>

        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:via-indigo-500 before:to-slate-200 dark:before:to-slate-800">
          {EXPERIENCE_TIMELINE.map((item, idx) => (
            <div
              key={idx}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Timeline Icon Node */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-950 bg-slate-100 dark:bg-slate-800 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                {getCategoryIcon(item.category)}
              </div>

              {/* Timeline Content Card */}
              <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:border-blue-400 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                    {item.year}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {item.organization}
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  {item.description}
                </p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200/70 dark:border-amber-800/60 text-amber-800 dark:text-amber-300 text-xs font-semibold">
                  <Award className="w-3.5 h-3.5 shrink-0 text-amber-500" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
