@echo off
chcp 65001 >nul
title Tải Mã Nguồn Lên GitHub & Đặt Tên Miền lyhoang
cd /d "%~dp0"
python "%~dp0upload_to_github.py"
pause
