import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
  Send,
  Sparkles,
  UserCheck
} from 'lucide-react';
import { COURSES_LIST, TeacherProfile } from '../data/teacherData';

interface RegistrationSectionProps {
  profile: TeacherProfile;
  preselectedCourse: string;
}

interface RegistrationRecord {
  id: string;
  studentName: string;
  phone: string;
  grade: string;
  course: string;
  goal: string;
  createdAt: string;
}

export const RegistrationSection: React.FC<RegistrationSectionProps> = ({
  profile,
  preselectedCourse
}) => {
  const [studentName, setStudentName] = useState('');
  const [phone, setPhone] = useState('');
  const [grade, setGrade] = useState('Lớp 9 (Ôn thi vào 10)');
  const [course, setCourse] = useState(preselectedCourse || COURSES_LIST[0].title);
  const [goal, setGoal] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [savedList, setSavedList] = useState<RegistrationRecord[]>([]);

  useEffect(() => {
    if (preselectedCourse) {
      setCourse(preselectedCourse);
    }
  }, [preselectedCourse]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('mk_math_registrations');
      if (raw) setSavedList(JSON.parse(raw));
    } catch {
      // ignore
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !phone.trim()) return;

    const newRec: RegistrationRecord = {
      id: Date.now().toString(),
      studentName: studentName.trim(),
      phone: phone.trim(),
      grade,
      course,
      goal: goal.trim() || 'Mong muốn kiểm tra năng lực đầu vào và học thử 2 buổi.',
      createdAt: new Date().toLocaleString('vi-VN')
    };

    const next = [newRec, ...savedList];
    setSavedList(next);
    try {
      localStorage.setItem('mk_math_registrations', JSON.stringify(next));
    } catch {
      // ignore
    }
    setSubmitted(true);
  };

  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Teacher Direct Contact & Consultation Benefits */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
            <UserCheck className="w-4 h-4" />
            <span>Đăng Ký Học Thử & Tư Vấn Lộ Trình</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Đồng Hành Cùng {profile.shortName} Bứt Phá Điểm 9+ Môn Toán
          </h2>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Quý Phụ huynh và các em học sinh đăng ký thông tin bên cạnh để được xếp lịch làm bài đánh giá năng lực đầu vào miễn phí, nhận tài liệu ôn tập và tham gia 2 buổi học thử trải nghiệm phương pháp.
          </p>

          {/* Benefits List */}
          <div className="space-y-3 p-5 rounded-2xl bg-blue-50/70 dark:bg-slate-900 border border-blue-200/70 dark:border-slate-800">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
              Quyền lợi khi đăng ký hôm nay:
            </div>
            {[
              'Miễn phí 100% bài kiểm tra đánh giá lỗ hổng kiến thức đầu vào',
              'Học thử trải nghiệm 02 buổi hoàn toàn miễn phí',
              'Tặng bộ Sổ tay Công thức Toán & 20 Đề thi thử có giải chi tiết',
              'Tư vấn lộ trình cá nhân hóa phù hợp mục tiêu trường thi'
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Direct Contact Details */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3.5 shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Thông tin liên hệ trực tiếp:
            </div>

            <div className="flex items-center gap-3 text-xs sm:text-sm">
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                <PhoneCall className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-slate-500">Hotline / Zalo Tư vấn</div>
                <div className="font-bold text-slate-900 dark:text-white">{profile.phone}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs sm:text-sm">
              <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-slate-500">Email Giáo viên</div>
                <div className="font-bold text-slate-900 dark:text-white">{profile.email}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs sm:text-sm">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-slate-500">Địa điểm & Hình thức học</div>
                <div className="font-bold text-slate-900 dark:text-white">{profile.location}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Registration Form */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  Đăng Ký Thành Công!
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  Cảm ơn <strong>{studentName}</strong>! Thông tin đăng ký khóa học <strong>{course}</strong> đã được ghi nhận. {profile.shortName} sẽ liên hệ qua số điện thoại/Zalo <strong>{phone}</strong> sớm nhất.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                  <a
                    href={`https://zalo.me/${profile.zalo.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Nhắn Zalo Trực Tiếp Cho Thầy</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setStudentName('');
                      setPhone('');
                    }}
                    className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    Đăng ký thêm học sinh khác
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                      Phiếu Đăng Ký Học Thử & Nhận Tài Liệu
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Điền thông tin bên dưới chỉ trong 30 giây
                    </p>
                  </div>
                  <Sparkles className="w-6 h-6 text-amber-500 shrink-0" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Họ tên Học sinh / Phụ huynh *
                    </label>
                    <input
                      type="text"
                      required
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      placeholder="VD: Nguyễn Minh Anh"
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Số điện thoại / Zalo liên hệ *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="VD: 0912 345 678"
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Khối lớp hiện tại của học sinh
                    </label>
                    <select
                      value={grade}
                      onChange={(e) => setGrade(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-blue-500"
                    >
                      <option>Lớp 6 - 7 - 8 (Toán THCS)</option>
                      <option>Lớp 9 (Ôn thi vào 10 Công lập)</option>
                      <option>Lớp 9 (Ôn thi Chuyên Toán / HSG)</option>
                      <option>Lớp 10 - 11 (Toán THPT)</option>
                      <option>Lớp 12 (Luyện thi Tốt nghiệp THPT & ĐGNL)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Khóa học quan tâm
                    </label>
                    <select
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-blue-500"
                    >
                      {COURSES_LIST.map((c) => (
                        <option key={c.id} value={c.title}>
                          {c.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Học lực hiện tại & Mục tiêu mong muốn (Không bắt buộc)
                  </label>
                  <textarea
                    rows={3}
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    placeholder="VD: Em đang đạt khoảng 7.0 điểm Toán, còn yếu phần Hình học đường tròn, mục tiêu đạt 9.0+ thi vào 10..."
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl font-extrabold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-600/25 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Gửi Đăng Ký Học Thử Miễn Phí</span>
                </button>
              </form>
            )}

            {/* Saved Registrations List for Teacher Preview */}
            {savedList.length > 0 && (
              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
                <div className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">
                  Danh sách học sinh vừa đăng ký trên thiết bị ({savedList.length}):
                </div>
                <div className="space-y-2 max-h-36 overflow-y-auto">
                  {savedList.map((rec) => (
                    <div
                      key={rec.id}
                      className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-xs flex items-center justify-between gap-2"
                    >
                      <div>
                        <strong className="text-slate-900 dark:text-white">{rec.studentName}</strong> ({rec.grade}) •{' '}
                        <span className="text-blue-600 dark:text-blue-400">{rec.phone}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 shrink-0">{rec.createdAt}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
