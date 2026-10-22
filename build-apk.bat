@echo off
chcp 65001 >nul
echo =====================================================================
echo   ĐỒNG BỘ WEB APP SANG ANDROID CAPACITOR VÀ XUẤT FILE APK
echo =====================================================================
cd /d "%~dp0"

echo [1/3] Đang đóng gói giao diện Web App (npm run build)...
call npm run build

echo [2/3] Đang đồng bộ tài nguyên sang thư mục Android (npx cap sync android)...
call npx cap sync android

echo [3/3] Kiểm tra môi trường Java JDK để xuất file .APK...
where java >nul 2>nul
if %errorlevel% neq 0 (
    echo.
    echo [THÔNG BÁO] Máy tính hiện chưa cài Java JDK / Android SDK.
    echo Tuy nhiên toàn bộ mã nguồn Android đã được cập nhật sẵn sàng tại:
    echo   d:\web_ca_nhan\android
    echo.
    echo Bạn có 3 cách lấy file cài đặt cho điện thoại:
    echo   1. Mở Web trên điện thoại và chọn "Thêm vào màn hình chính" ^(PWA - dùng ngay lập tức^).
    echo   2. Đẩy thư mục này lên GitHub, file .github\workflows\build-apk.yml sẽ tự động xuất file APK.
    echo   3. Cài Android Studio / JDK 17+ rồi chạy lại file build-apk.bat này.
    pause
    exit /b 0
)

cd android
call gradlew.bat assembleDebug
echo.
echo [HOÀN TẤT] File APK đã được xuất tại:
echo   d:\web_ca_nhan\android\app\build\outputs\apk\debug\app-debug.apk
pause
