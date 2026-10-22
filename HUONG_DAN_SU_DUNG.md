# Hướng Dẫn Sử Dụng Web App & Android APK Thương Hiệu Cá Nhân Giáo Viên Toán

Dự án được xây dựng tại `d:\web_ca_nhan` tích hợp đồng thời **Web App Giáo Dục (PWA)** và **Dự Án Android Native (Capacitor APK)** từ chung một mã nguồn.

---

## 1. Cách Chạy Trang Web App Trên Máy Tính

- **Cách nhanh nhất**: Nhấp đúp chuột vào file [`chay-web-app.bat`](file:///d:/web_ca_nhan/chay-web-app.bat).
- **Hoặc chạy qua Terminal**:
  ```bash
  npm run dev
  ```
  Sau đó truy cập địa chỉ: `http://localhost:5173`

---

## 2. Cách Chỉnh Sửa Thông Tin Cá Nhân (Tên, Ảnh, Kinh Nghiệm, Thành Tích)

Bạn có **2 cách** cực kỳ tiện lợi:

1. **Chỉnh sửa trực tiếp trên giao diện Web/App**:
   - Bấm nút **"Sửa Hồ Sơ"** ở góc trên bên phải thanh điều hướng.
   - Nhập Họ tên, Học vị, Đơn vị công tác, Số năm kinh nghiệm, Số điện thoại/Zalo, Link ảnh chân dung... rồi bấm **"Lưu Thay Đổi Hồ Sơ"**.
2. **Chỉnh sửa trong file cấu hình gốc**:
   - Mở file [`src/data/teacherData.ts`](file:///d:/web_ca_nhan/src/data/teacherData.ts).
   - Tại đây có đầy đủ dữ liệu mẫu kèm chú thích tiếng Việt rõ ràng cho:
     - `DEFAULT_TEACHER_PROFILE`: Thông tin cá nhân, liên hệ, thống kê.
     - `EXPERIENCE_TIMELINE`: Cột mốc sự nghiệp & giải thưởng.
     - `COURSES_LIST`: Danh sách các khóa học Toán THCS, Luyện thi vào 10, Toán THPT & Luyện thi Tốt nghiệp THPT.
     - `QUIZ_QUESTIONS`: Ngân hàng câu hỏi trắc nghiệm Toán có công thức LaTeX (`$...$`) và lời giải chi tiết.
     - `MATH_FORMULAS`: Sổ tay công thức Toán trọng tâm.
     - `STUDY_MATERIALS`: Kho đề thi và chuyên đề tải về.
     - `HALL_OF_FAME` & `TESTIMONIALS`: Bảng vàng học sinh điểm cao và cảm nhận phụ huynh.

---

## 3. Cách Xem Thử Giao Diện Điện Thoại & Xuất File Cài Đặt `.APK`

### A. Xem thử giao diện App APK ngay trên máy tính
- Trên thanh menu trên cùng của Web, bấm nút **"Xem dạng App APK"**.
- Giao diện sẽ chuyển sang khung điện thoại Android kèm thanh điều hướng đáy (Bottom Navigation Bar).

### B. Cài đặt trực tiếp lên điện thoại qua PWA (Không cần cáp, dùng được cả Android & iPhone)
- Khi triển khai web lên mạng (Vercel / Netlify / GitHub Pages) hoặc mở qua mạng LAN, mở trình duyệt trên điện thoại và chọn **"Thêm vào màn hình chính" (Add to Home Screen)**.

### C. Xuất file `.APK` từ thư mục `android/`
Toàn bộ project Android đã được tạo sẵn tại [`android/`](file:///d:/web_ca_nhan/android):
- **Cách 1 (Tự động trên đám mây với GitHub Actions - Không cần cài đặt gì thêm)**:
  - Đẩy mã nguồn lên GitHub, workflow [`.github/workflows/build-apk.yml`](file:///d:/web_ca_nhan/.github/workflows/build-apk.yml) sẽ tự động biên dịch và xuất file `app-debug.apk` trong mục **Actions -> Artifacts**.
- **Cách 2 (Biên dịch trực tiếp trên máy tính)**:
  - Chạy file [`build-apk.bat`](file:///d:/web_ca_nhan/build-apk.bat) (yêu cầu máy có cài Java JDK 17+ và Android SDK / Android Studio).
  - File APK xuất ra nằm tại: `android/app/build/outputs/apk/debug/app-debug.apk`.
