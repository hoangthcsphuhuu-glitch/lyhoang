import React, { useState } from 'react';
import {
  CheckCircle2,
  Download,
  Eye,
  FileText,
  FolderOpen,
  Search,
  Sparkles,
  X
} from 'lucide-react';
import { STUDY_MATERIALS, StudyMaterial } from '../data/teacherData';
import { MathTex } from './MathTex';

export const MaterialsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [previewDoc, setPreviewDoc] = useState<StudyMaterial | null>(null);
  const [downloadedIds, setDownloadedIds] = useState<string[]>([]);

  const categories = ['ALL', 'Toán 9 & Thi vào 10', 'Toán 8 Trọng tâm', 'Toán 6 & Toán 7', 'Tin học 6-7-8-9'];

  const filteredDocs = STUDY_MATERIALS.filter((doc) => {
    const matchCat = selectedCategory === 'ALL' || doc.category === selectedCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchSearch =
      !q ||
      doc.title.toLowerCase().includes(q) ||
      doc.summary.toLowerCase().includes(q) ||
      doc.grade.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const handleDownloadSample = (doc: StudyMaterial) => {
    if (!downloadedIds.includes(doc.id)) {
      setDownloadedIds((prev) => [...prev, doc.id]);
    }
    // Generate a clean text/markdown study sheet so the user gets an actual file download!
    const content = [
      `===================================================================`,
      `TÀI LIỆU HỌC TẬP & LUYỆN THI TOÁN - THẦY MINH KHOA`,
      `===================================================================`,
      `Tên tài liệu: ${doc.title}`,
      `Phân loại: ${doc.category} (${doc.grade})`,
      `Số trang bản đầy đủ: ${doc.pages} trang`,
      ``,
      `TÓM TẮT NỘI DUNG:`,
      doc.summary,
      ``,
      `TRÍCH DẪN CẤU TRÚC & CÂU HỎI TIÊU BIỂU:`,
      ...doc.previewQuestions.map((q, idx) => `${idx + 1}. ${q}`),
      ``,
      `-------------------------------------------------------------------`,
      `Liên hệ đăng ký nhận trọn bộ PDF & Lời giải chi tiết tại mục Đăng ký Học thử!`
    ].join('\n');

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${doc.id}-tom-tat-tai-lieu.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
          <FolderOpen className="w-4 h-4" />
          <span>Kho Học Liệu & Đề Thi Thực Chiến</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white">
          Tài Liệu Toán, Chuyên Đề & Bộ Đề Thi Thử Biên Soạn Riêng
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
          Hệ thống chuyên đề và đề thi thử được cập nhật sát nhất với cấu trúc đề thi tuyển sinh vào lớp 10 và Tốt nghiệp THPT mới.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm đề thi vào 10, đề THPT QG, chuyên đề hình học..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat === 'ALL' ? 'Tất cả tài liệu' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Document Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredDocs.map((doc) => {
          const isDownloaded = downloadedIds.includes(doc.id);
          return (
            <div
              key={doc.id}
              className="flex flex-col justify-between p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                    {doc.category} • {doc.grade}
                  </span>
                  {doc.hasDetailedSolution && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300">
                      <Sparkles className="w-3 h-3" />
                      Có giải chi tiết
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-2 leading-snug">
                  {doc.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {doc.summary}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-4">
                  <span className="inline-flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-blue-600" />
                    <strong>{doc.pages}</strong> trang
                  </span>
                  <span>•</span>
                  <span>
                    <strong>{(doc.downloads + (isDownloaded ? 1 : 0)).toLocaleString('vi-VN')}</strong> lượt tải
                  </span>
                  <span>•</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{doc.updatedAt}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <button
                  onClick={() => setPreviewDoc(doc)}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span>Xem trước đề</span>
                </button>

                <button
                  onClick={() => handleDownloadSample(doc)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all"
                >
                  {isDownloaded ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Đã tải đề cương mẫu</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Tải đề cương mẫu</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Preview Modal */}
      {previewDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 shadow-2xl space-y-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                  {previewDoc.category} • {previewDoc.pages} trang
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mt-2">
                  {previewDoc.title}
                </h3>
              </div>
              <button
                onClick={() => setPreviewDoc(null)}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Trích dẫn cấu trúc & câu hỏi tiêu biểu trong tài liệu:
              </div>
              {previewDoc.previewQuestions.map((q, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed"
                >
                  <MathTex tex={q} />
                </div>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setPreviewDoc(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                Đóng
              </button>
              <button
                onClick={() => handleDownloadSample(previewDoc)}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Download className="w-4 h-4" />
                <span>Tải bản tóm tắt về máy</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
