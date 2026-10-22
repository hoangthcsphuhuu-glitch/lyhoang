import React, { useState } from 'react';
import {
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Sparkles,
  Target,
  Users,
  X
} from 'lucide-react';
import { COURSES_LIST, CourseItem } from '../data/teacherData';

interface CoursesSectionProps {
  onSelectCourseForRegister: (courseTitle: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onSelectCourseForRegister }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');
  const [detailCourse, setDetailCourse] = useState<CourseItem | null>(null);

  const filterTabs = [
    { id: 'ALL', label: 'Tất cả khóa học' },
    { id: 'LUYEN_THI_10', label: 'Luyện thi vào 10 (Cơ bản & Chuyên)' },
    { id: 'THPT_QG', label: 'Luyện thi THPT Quốc gia & ĐGNL' },
    { id: 'THCS', label: 'Toán THCS (Lớp 6, 7, 8)' },
    { id: 'THPT', label: 'Toán THPT (Lớp 10, 11)' }
  ];

  const filteredCourses =
    selectedFilter === 'ALL'
      ? COURSES_LIST
      : COURSES_LIST.filter((c) => c.gradeCategory === selectedFilter);

  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-4 h-4" />
          <span>Hệ Thống Lớp Học & Lộ Trình Đào Tạo</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white">
          Các Khóa Học Toán THCS & THPT Chuyên Sâu
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
          Lộ trình được thiết kế bài bản từ lấy gốc, nắm vững bản chất đến luyện đề thực chiến chinh phục điểm 9, 10.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedFilter(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
              selectedFilter === tab.id
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 shadow-sm hover:shadow-xl hover:border-blue-400/70 transition-all"
          >
            <div>
              {/* Top Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                  {course.gradeLabel}
                </span>
                {course.badge && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300">
                    <Sparkles className="w-3 h-3" />
                    {course.badge}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2 leading-snug">
                {course.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {course.description}
              </p>

              {/* Metadata Grid */}
              <div className="grid grid-cols-2 gap-2.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 text-xs mb-4">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                  <Target className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span className="truncate">
                    <strong>Mục tiêu:</strong> {course.targetScore}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                  <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="truncate">{course.schedule}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                  <Users className="w-4 h-4 text-amber-500 shrink-0" />
                  <span className="truncate">{course.classSize}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                  <Clock className="w-4 h-4 text-purple-500 shrink-0" />
                  <span className="truncate font-semibold text-emerald-600 dark:text-emerald-400">
                    {course.tuition}
                  </span>
                </div>
              </div>

              {/* Key Syllabus Topics */}
              <div className="space-y-1.5 mb-5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Nội dung trọng tâm:
                </div>
                {course.topics.slice(0, 3).map((topic, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </div>
                ))}
                {course.topics.length > 3 && (
                  <button
                    onClick={() => setDetailCourse(course)}
                    className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline pl-6"
                  >
                    + Xem đầy đủ {course.topics.length} chuyên đề trong đề cương...
                  </button>
                )}
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
              <button
                onClick={() => setDetailCourse(course)}
                className="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
              >
                Xem đề cương
              </button>
              <button
                onClick={() => onSelectCourseForRegister(course.title)}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-600/20 transition-all"
              >
                <span>Đăng ký học thử khóa này</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Course Syllabus Detail Modal */}
      {detailCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full max-h-[88vh] overflow-y-auto p-6 shadow-2xl space-y-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                  {detailCourse.gradeLabel} • {detailCourse.level}
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-2">
                  {detailCourse.title}
                </h3>
              </div>
              <button
                onClick={() => setDetailCourse(null)}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {detailCourse.description}
            </p>

            <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/70 dark:border-blue-800/60 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                Đề cương chuyên đề chi tiết:
              </div>
              {detailCourse.topics.map((topic, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-800 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-1" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-xs sm:text-sm text-amber-900 dark:text-amber-200">
              <strong>Cam kết chất lượng:</strong> {detailCourse.Commitment}
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setDetailCourse(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                Đóng
              </button>
              <button
                onClick={() => {
                  const title = detailCourse.title;
                  setDetailCourse(null);
                  onSelectCourseForRegister(title);
                }}
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md"
              >
                Đăng ký học thử ngay
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
