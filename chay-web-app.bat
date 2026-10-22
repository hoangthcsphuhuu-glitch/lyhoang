@echo off
chcp 65001 >nul
echo =====================================================================
echo   KHỞI ĐỘNG WEB APP THƯƠNG HIỆU CÁ NHÂN GIÁO VIÊN TOÁN
echo =====================================================================
cd /d "%~dp0"
echo Đang mở trình duyệt tại http://localhost:5173 ...
start http://localhost:5173
npm run dev
pause
