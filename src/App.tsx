import React, { useState, useEffect } from 'react';
import { DEFAULT_TEACHER_PROFILE, TeacherProfile } from './data/teacherData';
import { BottomMobileNav, Navbar, NavSection } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutTimelineSection } from './components/AboutTimelineSection';
import { CoursesSection } from './components/CoursesSection';
import { MathLabSection } from './components/MathLabSection';
import { MaterialsSection } from './components/MaterialsSection';
import { HallOfFameSection } from './components/HallOfFameSection';
import { RegistrationSection } from './components/RegistrationSection';
import { ProfileCustomizerModal } from './components/ProfileCustomizerModal';
import { ApkInstallModal } from './components/ApkInstallModal';
import { GraduationCap, PhoneCall, Smartphone } from 'lucide-react';

export const App: React.FC = () => {
  const [profile, setProfile] = useState<TeacherProfile>(() => {
    try {
      const saved = localStorage.getItem('lyhoangem_teacher_profile_v3');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return DEFAULT_TEACHER_PROFILE;
  });

  const [activeSection, setActiveSection] = useState<NavSection>('home');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isMobilePreview, setIsMobilePreview] = useState<boolean>(false);
  const [showCustomizer, setShowCustomizer] = useState<boolean>(false);
  const [showApkModal, setShowApkModal] = useState<boolean>(false);
  const [preselectedCourse, setPreselectedCourse] = useState<string>('');

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const handleSaveProfile = (updated: TeacherProfile) => {
    setProfile(updated);
    try {
      localStorage.setItem('lyhoangem_teacher_profile_v3', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleResetProfile = () => {
    setProfile(DEFAULT_TEACHER_PROFILE);
    try {
      localStorage.removeItem('lyhoangem_teacher_profile_v3');
    } catch {
      // ignore
    }
  };

  const scrollToSection = (section: NavSection) => {
    setActiveSection(section);
    const el = document.getElementById(`section-${section}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectCourseForRegister = (courseTitle: string) => {
    setPreselectedCourse(courseTitle);
    scrollToSection('register');
  };

  const mainContent = (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar
        profile={profile}
        activeSection={activeSection}
        onSelectSection={scrollToSection}
        darkMode={darkMode}
        onToggleDark={() => setDarkMode((d) => !d)}
        isMobilePreview={isMobilePreview}
        onToggleMobilePreview={() => setIsMobilePreview((m) => !m)}
        onOpenCustomizer={() => setShowCustomizer(true)}
        onOpenApkModal={() => setShowApkModal(true)}
      />

      <main className="flex-1">
        <div id="section-home">
          <HeroSection profile={profile} onNavigate={scrollToSection} />
        </div>

        <div id="section-about">
          <AboutTimelineSection profile={profile} />
        </div>

        <div id="section-courses">
          <CoursesSection onSelectCourseForRegister={handleSelectCourseForRegister} />
        </div>

        <div id="section-mathlab">
          <MathLabSection />
        </div>

        <div id="section-materials">
          <MaterialsSection />
        </div>

        <div id="section-halloffame">
          <HallOfFameSection />
        </div>

        <div id="section-register">
          <RegistrationSection profile={profile} preselectedCourse={preselectedCourse} />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-serif font-bold">
              ∑π
            </div>
            <div>
              <div className="font-bold text-white">{profile.fullName}</div>
              <div className="text-xs text-slate-400">{profile.workplace}</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
              <PhoneCall className="w-3.5 h-3.5" />
              Hotline / Zalo: {profile.phone}
            </span>
            <span>•</span>
            <button
              onClick={() => setShowCustomizer(true)}
              className="text-amber-400 hover:underline font-semibold"
            >
              Sửa thông tin cá nhân
            </button>
            <span>•</span>
            <button
              onClick={() => setShowApkModal(true)}
              className="text-blue-400 hover:underline font-semibold"
            >
              Hướng dẫn cài APK
            </button>
          </div>
        </div>
      </footer>

      {/* Mobile / APK Bottom Navigation Bar */}
      <div className={isMobilePreview ? 'block sticky bottom-0 z-40' : 'block xl:hidden sticky bottom-0 z-40'}>
        <BottomMobileNav activeSection={activeSection} onSelectSection={scrollToSection} />
      </div>
    </div>
  );

  return (
    <>
      {isMobilePreview ? (
        <div className="min-h-screen bg-slate-900 py-6 px-4 flex flex-col items-center justify-center">
          {/* Top Simulator Control Bar */}
          <div className="mb-4 flex flex-wrap items-center justify-center gap-3 px-4 py-2 rounded-2xl bg-slate-800 border border-slate-700 text-white text-xs">
            <span className="inline-flex items-center gap-1.5 font-bold text-amber-400">
              <Smartphone className="w-4 h-4" />
              Chế độ Xem Thử Giao Diện Android APK (Khung Điện Thoại)
            </span>
            <button
              onClick={() => setIsMobilePreview(false)}
              className="px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold"
            >
              Thoát về giao diện Web toàn màn hình
            </button>
          </div>

          {/* Phone Bezel Frame */}
          <div className="w-full max-w-[420px] h-[840px] rounded-[42px] border-[10px] border-slate-800 bg-slate-950 shadow-2xl overflow-hidden flex flex-col relative">
            {/* Android Status Bar Simulation */}
            <div className="bg-blue-950 text-white px-6 py-1.5 flex items-center justify-between text-[11px] font-semibold shrink-0">
              <span>09:41 • Toán {profile.shortName}</span>
              <div className="flex items-center gap-2">
                <span>5G</span>
                <span>100% 🔋</span>
              </div>
            </div>

            {/* Scrollable App Viewport */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden relative">
              {mainContent}
            </div>
          </div>
        </div>
      ) : (
        mainContent
      )}

      {showCustomizer && (
        <ProfileCustomizerModal
          profile={profile}
          onSaveProfile={handleSaveProfile}
          onResetProfile={handleResetProfile}
          onClose={() => setShowCustomizer(false)}
        />
      )}

      {showApkModal && (
        <ApkInstallModal
          profile={profile}
          onClose={() => setShowApkModal(false)}
          onEnableMobilePreview={() => setIsMobilePreview(true)}
        />
      )}
    </>
  );
};

export default App;
