import React from 'react';
import {
  CheckCircle2,
  Code2,
  Download,
  Smartphone,
  Sparkles,
  Terminal,
  X
} from 'lucide-react';
import { TeacherProfile } from '../data/teacherData';

interface ApkInstallModalProps {
  profile: TeacherProfile;
  onClose: () => void;
  onEnableMobilePreview: () => void;
}

export const ApkInstallModal: React.FC<ApkInstallModalProps> = ({
  profile,
  onClose,
  onEnableMobilePreview
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl space-y-5">
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center shadow-md">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                Tải Ứng Dụng Android APK & Web App ({profile.fullName})
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Hệ sinh thái học Toán cá nhân • Tên miền: lyhoang
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Direct Download Signed Android APK Card */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[11px] font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Đã đóng gói & ký số chuẩn Android (API 34)</span>
            </div>
            <h4 className="text-base sm:text-lg font-extrabold">
              Tải Trực Tiếp File Cài Đặt: ToanThayLyHoang.apk
            </h4>
            <p className="text-xs text-blue-100">
              Cài đặt trực tiếp lên điện thoại Android, chạy mượt toàn màn hình (Offline & Online).
            </p>
          </div>
          <a
            href="./ToanThayLyHoang.apk"
            download="ToanThayLyHoang.apk"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold bg-amber-400 hover:bg-amber-300 text-slate-950 shrink-0 shadow-md transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Tải File .APK Ngay</span>
          </a>
        </div>

        {/* Option 1: Preview Mobile App UI right here */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/50 dark:to-blue-950/40 border border-indigo-200 dark:border-indigo-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 dark:text-indigo-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Trải nghiệm trực tiếp trên máy tính</span>
            </div>
            <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">
              Xem giao diện mô phỏng Điện thoại Android APK
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Chuyển sang khung hình điện thoại với thanh điều hướng đáy (Bottom Navigation) đúng như khi mở file APK trên Android.
            </p>
          </div>
          <button
            onClick={() => {
              onEnableMobilePreview();
              onClose();
            }}
            className="px-4 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shrink-0 shadow-sm"
          >
            Bật khung App Điện thoại
          </button>
        </div>

        {/* Option 2: Other Installation Methods */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <Download className="w-4 h-4" />
            <span>Các Phương Thức Cài Đặt Khác</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 space-y-2">
            <div className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Cài đặt nhanh qua trình duyệt (PWA cho cả iPhone & Android)</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-6">
              Khi mở trang web trên điện thoại bằng trình duyệt Chrome (Android) hoặc Safari (iOS), chỉ cần bấm <strong>"Thêm vào màn hình chính" (Add to Home Screen / Install App)</strong>.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 space-y-2">
            <div className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white">
              <Terminal className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Đóng gói lại APK bất cứ lúc nào bằng 1 cú nhấp chuột</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-6">
              Chạy file <code>build-apk.bat</code> (hoặc <code>python build_apk.py</code>) trong thư mục dự án để tự động biên dịch lại file <code>ToanThayLyHoang.apk</code> sau khi bạn chỉnh sửa nội dung.
            </p>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
