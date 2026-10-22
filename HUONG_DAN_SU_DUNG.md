# Hướng Dẫn Sử Dụng Web App & Android APK Thương Hiệu Cá Nhân: Thầy Lý Hoàng Em

Dự án được xây dựng tại `d:\web_ca_nhan` dành riêng cho **Thầy Lý Hoàng Em** (`lyhoang2908@gmail.com`) — **Trường THCS-THPT Vĩnh Lộc** (17 năm kinh nghiệm giảng dạy Toán & Tin học khối 6, 7, 8, 9; thế mạnh mũi nhọn môn Toán THCS).

---

## 1. Các Đường Dẫn Trực Tuyến (GitHub & Tên Miền `lyhoang`)

- **Trang Web App Chính Thức**: [https://hoangthcsphuhuu-glitch.github.io/lyhoang/](https://hoangthcsphuhuu-glitch.github.io/lyhoang/)
- **Tải trực tiếp File Cài Đặt Android (`.APK`)**: [https://hoangthcsphuhuu-glitch.github.io/lyhoang/ToanThayLyHoang.apk](https://hoangthcsphuhuu-glitch.github.io/lyhoang/ToanThayLyHoang.apk)
- **Kho chứa mã nguồn GitHub**: [https://github.com/hoangthcsphuhuu-glitch/lyhoang](https://github.com/hoangthcsphuhuu-glitch/lyhoang)

---

## 2. Cách Chạy & Cập Nhật Dự Án Trên Máy Tính (`d:\web_ca_nhan`)

1. **Chạy Web App trên máy tính**:
   - Nhấp đúp chuột vào file [`chay-web-app.bat`](file:///d:/web_ca_nhan/chay-web-app.bat) (hoặc mở địa chỉ `http://localhost:5173`).
2. **Chỉnh sửa thông tin cá nhân, khóa học, đề thi Toán & Tin 6–9**:
   - **Cách 1**: Bấm nút **"Sửa Hồ Sơ"** ngay trên thanh công cụ của Web App.
   - **Cách 2**: Chỉnh sửa trực tiếp trong file [`src/data/teacherData.ts`](file:///d:/web_ca_nhan/src/data/teacherData.ts).
3. **Đóng gói lại file cài đặt Android (`ToanThayLyHoang.apk`)**:
   - Chạy lệnh `npm run build` và `python build_apk.py` (hoặc chạy [`build-apk.bat`](file:///d:/web_ca_nhan/build-apk.bat)).
4. **Đồng bộ bản cập nhật mới lên GitHub (`lyhoang`)**:
   - Nhấp đúp chuột vào file [`Day_Len_GitHub.bat`](file:///d:/web_ca_nhan/Day_Len_GitHub.bat) (hoặc chạy `python upload_to_github.py`).
