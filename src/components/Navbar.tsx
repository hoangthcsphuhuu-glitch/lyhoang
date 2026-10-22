import React from 'react';
import {
  GraduationCap,
  BookOpen,
  Calculator,
  Award,
  FileText,
  UserCheck,
  Smartphone,
  Monitor,
  Sun,
  Moon,
  Settings,
  Download,
  Sparkles,
  Home
} from 'lucide-react';
import { TeacherProfile } from '../data/teacherData';

export type NavSection = 'home' | 'about' | 'courses' | 'mathlab' | 'materials' | 'halloffame' | 'register';

interface NavbarProps {
  profile: TeacherProfile;
  activeSection: NavSection;
  onSelectSection: (section: NavSection) => void;
  darkMode: boolean;
  onToggleDark: () => void;
  isMobilePreview: boolean;
  onToggleMobilePreview: () => void;
  onOpenCustomizer: () => void;
  onOpenApkModal: () => void;
}

export const NAV_ITEMS: { id: NavSection; label: string; shortLabel: string; icon: React.FC<{ className?: string }> }[] = [
  { id: 'home', label: 'Trang chủ', shortLabel: 'Trang chủ', icon: Home },
  { id: 'about', label: 'Hồ sơ & Kinh nghiệm', shortLabel: 'Hồ sơ', icon: GraduationCap },
  { id: 'courses', label: 'Khóa học', shortLabel: 'Khóa học', icon: BookOpen },
  { id: 'mathlab', label: 'Phòng Luyện Toán', shortLabel: 'Luyện Toán', icon: Calculator },
  { id: 'materials', label: 'Tài liệu & Đề thi', shortLabel: 'Tài liệu', icon: FileText },
  { id: 'halloffame', label: 'Bảng vàng & Chia sẻ', shortLabel: 'Bảng vàng', icon: Award },
  { id: 'register', label: 'Đăng ký học thử', shortLabel: 'Đăng ký', icon: UserCheck }
];

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  activeSection,
  onSelectSection,
  darkMode,
  onToggleDark,
  isMobilePreview,
  onToggleMobilePreview,
  onOpenCustomizer,
  onOpenApkModal
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-2">
          {/* Brand Logo */}
          <button
            onClick={() => onSelectSection('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-blue-600/25 group-hover:scale-105 transition-transform shrink-0">
              <span className="font-serif font-bold text-lg tracking-tight">∑π</span>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base truncate">
                  {profile.fullName}
                </span>
                <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
                  Toán & Tin 6–9
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-[200px] sm:max-w-[280px]">
                {profile.workplace} • 17 Năm Kinh Nghiệm
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links (hidden when in Mobile Preview mode) */}
          {!isMobilePreview && (
            <nav className="hidden xl:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onSelectSection(item.id)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/80 dark:text-blue-300 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          )}

          {/* Action Toolbar */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Toggle Mobile App APK Simulator */}
            <button
              onClick={onToggleMobilePreview}
              title={isMobilePreview ? 'Chuyển về giao diện Web toàn màn hình' : 'Xem thử giao diện App Điện thoại (APK)'}
              className={`hidden md:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                isMobilePreview
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700'
              }`}
            >
              {isMobilePreview ? (
                <>
                  <Monitor className="w-3.5 h-3.5" />
                  <span>Xem bản Web</span>
                </>
              ) : (
                <>
                  <Smartphone className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span>Xem dạng App APK</span>
                </>
              )}
            </button>

            {/* Customize Teacher Profile */}
            <button
              onClick={onOpenCustomizer}
              title="Tùy chỉnh thông tin cá nhân của Thầy/Cô"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200/80 dark:bg-amber-950/50 dark:hover:bg-amber-900/60 dark:text-amber-300 dark:border-amber-800/60 transition-colors"
            >
              <Settings className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Sửa Hồ Sơ</span>
            </button>

            {/* APK Download / App Install Modal */}
            <button
              onClick={onOpenApkModal}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-sm shadow-blue-500/20 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>App APK</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleDark}
              aria-label="Chế độ Sáng/Tối"
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export const BottomMobileNav: React.FC<{
  activeSection: NavSection;
  onSelectSection: (section: NavSection) => void;
}> = ({ activeSection, onSelectSection }) => {
  const mobileItems: { id: NavSection; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'home', label: 'Trang chủ', icon: Home },
    { id: 'about', label: 'Hồ sơ', icon: GraduationCap },
    { id: 'courses', label: 'Khóa học', icon: BookOpen },
    { id: 'mathlab', label: 'Luyện Toán', icon: Calculator },
    { id: 'materials', label: 'Tài liệu', icon: FileText },
    { id: 'register', label: 'Đăng ký', icon: Sparkles }
  ];

  return (
    <nav className="sticky bottom-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-1 py-1.5">
      <div className="grid grid-cols-6 gap-0.5 max-w-md mx-auto">
        {mobileItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectSection(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all ${
                isActive
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/60 font-bold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 font-medium'
              }`}
            >
              <Icon className={`w-4 h-4 mb-0.5 ${isActive ? 'scale-110' : ''} transition-transform`} />
              <span className="text-[10px] leading-tight truncate max-w-full">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
