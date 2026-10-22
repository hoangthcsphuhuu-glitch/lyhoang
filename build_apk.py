#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Trình biên dịch & ký số tự động ứng dụng Android APK: Toán Thầy Lý Hoàng (ToanThayLyHoang.apk)
Sử dụng bộ công cụ Android SDK Build-Tools 34 & JDK 17 tại %LOCALAPPDATA%\AndroidLite
"""

import os
import sys
import shutil
import subprocess
import zipfile
from PIL import Image, ImageDraw

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DIST_DIR = os.path.join(BASE_DIR, "dist")
PUBLIC_DIR = os.path.join(BASE_DIR, "public")
ANDROID_BUILD_ROOT = os.path.join(BASE_DIR, "android_apk_build")
BUILD_DIR = os.path.join(ANDROID_BUILD_ROOT, "build")
SRC_DIR = os.path.join(ANDROID_BUILD_ROOT, "src", "vn", "edu", "lyhoang", "math")
RES_DIR = os.path.join(ANDROID_BUILD_ROOT, "res")
ASSETS_DIR = os.path.join(ANDROID_BUILD_ROOT, "assets")

SDK_ROOT = os.path.expandvars(r"%LOCALAPPDATA%\AndroidLite")
BUILD_TOOLS = os.path.join(SDK_ROOT, "build-tools", "android-14")
ANDROID_JAR = os.path.join(SDK_ROOT, "platform", "android-34", "android.jar")
JDK_BIN = os.path.join(SDK_ROOT, "jdk", "jdk-17.0.20.1+1", "bin")

AAPT2 = os.path.join(BUILD_TOOLS, "aapt2.exe")
D8 = os.path.join(BUILD_TOOLS, "d8.bat")
ZIPALIGN = os.path.join(BUILD_TOOLS, "zipalign.exe")
APKSIGNER = os.path.join(BUILD_TOOLS, "apksigner.bat")
JAVAC = os.path.join(JDK_BIN, "javac.exe")
KEYTOOL = os.path.join(JDK_BIN, "keytool.exe")


def create_app_icon(path: str):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    size = 192
    img = Image.new("RGBA", (size, size), (15, 23, 42, 255))
    draw = ImageDraw.Draw(img)
    # Nền xanh dương hoàng gia (Royal Blue)
    draw.rounded_rectangle([(8, 8), (size - 8, size - 8)], radius=42, fill=(30, 58, 138, 255))
    draw.rounded_rectangle([(18, 18), (size - 18, size - 18)], radius=34, outline=(251, 191, 36, 180), width=4)
    # Vẽ biểu tượng Sigma (∑) màu vàng kim ở trung tâm
    pts = [
        (52, 46),
        (140, 46),
        (140, 62),
        (76, 62),
        (114, 96),
        (76, 130),
        (140, 130),
        (140, 146),
        (52, 146),
        (52, 132),
        (92, 96),
        (52, 60),
    ]
    draw.polygon(pts, fill=(251, 191, 36, 255))
    img.save(path, "PNG")


def prepare_project():
    if os.path.exists(ANDROID_BUILD_ROOT):
        shutil.rmtree(ANDROID_BUILD_ROOT)
    os.makedirs(SRC_DIR, exist_ok=True)
    os.makedirs(os.path.join(RES_DIR, "drawable"), exist_ok=True)
    os.makedirs(os.path.join(RES_DIR, "values"), exist_ok=True)
    os.makedirs(ASSETS_DIR, exist_ok=True)
    os.makedirs(BUILD_DIR, exist_ok=True)

    create_app_icon(os.path.join(RES_DIR, "drawable", "ic_launcher.png"))

    with open(os.path.join(RES_DIR, "values", "strings.xml"), "w", encoding="utf-8") as f:
        f.write('''<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name="app_name">Toán Thầy Lý Hoàng</string>
</resources>
''')

    with open(os.path.join(ANDROID_BUILD_ROOT, "AndroidManifest.xml"), "w", encoding="utf-8") as f:
        f.write('''<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="vn.edu.lyhoang.math"
    android:versionCode="1"
    android:versionName="1.0.0">

    <uses-sdk android:minSdkVersion="24" android:targetSdkVersion="34" />
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />

    <application
        android:label="@string/app_name"
        android:icon="@drawable/ic_launcher"
        android:usesCleartextTraffic="true"
        android:hardwareAccelerated="true"
        android:theme="@android:style/Theme.DeviceDefault.NoActionBar">

        <activity
            android:name=".MainActivity"
            android:exported="true"
            android:configChanges="orientation|screenSize|keyboardHidden">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>
''')

    with open(os.path.join(SRC_DIR, "MainActivity.java"), "w", encoding="utf-8") as f:
        f.write('''package vn.edu.lyhoang.math;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.DownloadListener;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends Activity {
    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Window window = getWindow();
        window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
        window.setStatusBarColor(Color.parseColor("#1E3A8A"));
        window.setNavigationBarColor(Color.parseColor("#0F172A"));

        webView = new WebView(this);
        setContentView(webView);

        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setAllowFileAccess(true);
        settings.setAllowContentAccess(true);
        settings.setAllowFileAccessFromFileURLs(true);
        settings.setAllowUniversalAccessFromFileURLs(true);
        settings.setCacheMode(WebSettings.LOAD_DEFAULT);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            settings.setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
        }

        webView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                if (url.startsWith("https://zalo.me") || url.startsWith("tel:") || url.startsWith("mailto:")) {
                    Intent i = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                    startActivity(i);
                    return true;
                }
                return false;
            }
        });
        webView.setWebChromeClient(new WebChromeClient());
        webView.setDownloadListener(new DownloadListener() {
            @Override
            public void onDownloadStart(String url, String userAgent, String contentDisposition, String mimetype, long contentLength) {
                if (url.startsWith("http://") || url.startsWith("https://")) {
                    Intent i = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                    startActivity(i);
                }
            }
        });

        webView.loadUrl("file:///android_asset/index.html");
    }

    @Override
    public void onBackPressed() {
        if (webView != null && webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }
}
''')

    # Copy toàn bộ bản build Web App (dist/) vào assets của APK
    for item in os.listdir(DIST_DIR):
        if item.endswith(".apk"):
            continue
        s = os.path.join(DIST_DIR, item)
        d = os.path.join(ASSETS_DIR, item)
        if os.path.isdir(s):
            shutil.copytree(s, d)
        else:
            shutil.copy2(s, d)


def build_apk():
    print("📦 Đang chuẩn bị tài nguyên Web App & Android Manifest...")
    prepare_project()
    env = os.environ.copy()
    env["JAVA_HOME"] = os.path.dirname(JDK_BIN)
    env["PATH"] = JDK_BIN + os.pathsep + BUILD_TOOLS + os.pathsep + env.get("PATH", "")

    compiled_res_zip = os.path.join(BUILD_DIR, "compiled_res.zip")
    subprocess.run([AAPT2, "compile", "--dir", RES_DIR, "-o", compiled_res_zip], check=True, env=env)

    unsigned_apk = os.path.join(BUILD_DIR, "unsigned.apk")
    java_gen_dir = os.path.join(BUILD_DIR, "gen")
    os.makedirs(java_gen_dir, exist_ok=True)

    subprocess.run(
        [
            AAPT2,
            "link",
            "-o",
            unsigned_apk,
            "-I",
            ANDROID_JAR,
            "--manifest",
            os.path.join(ANDROID_BUILD_ROOT, "AndroidManifest.xml"),
            "--java",
            java_gen_dir,
            "-A",
            ASSETS_DIR,
            compiled_res_zip,
        ],
        check=True,
        env=env,
    )

    classes_dir = os.path.join(BUILD_DIR, "classes")
    os.makedirs(classes_dir, exist_ok=True)
    r_java = os.path.join(java_gen_dir, "vn", "edu", "lyhoang", "math", "R.java")
    main_java = os.path.join(SRC_DIR, "MainActivity.java")

    print("⚙️ Đang biên dịch mã nguồn Java & DEX...")
    subprocess.run(
        [
            JAVAC,
            "-source",
            "11",
            "-target",
            "11",
            "-encoding",
            "UTF-8",
            "-cp",
            ANDROID_JAR,
            "-d",
            classes_dir,
            r_java,
            main_java,
        ],
        check=True,
        env=env,
    )

    class_files = []
    for root, _, files in os.walk(classes_dir):
        for file in files:
            if file.endswith(".class"):
                class_files.append(os.path.join(root, file))

    subprocess.run(
        [D8, "--lib", ANDROID_JAR, "--output", BUILD_DIR] + class_files,
        check=True,
        env=env,
    )

    dex_file = os.path.join(BUILD_DIR, "classes.dex")
    with zipfile.ZipFile(unsigned_apk, "a") as zf:
        zf.write(dex_file, "classes.dex")

    aligned_apk = os.path.join(BUILD_DIR, "aligned.apk")
    subprocess.run([ZIPALIGN, "-f", "4", unsigned_apk, aligned_apk], check=True, env=env)

    keystore_path = os.path.join(ANDROID_BUILD_ROOT, "lyhoang_release.keystore")
    if not os.path.exists(keystore_path):
        subprocess.run(
            [
                KEYTOOL,
                "-genkeypair",
                "-v",
                "-keystore",
                keystore_path,
                "-alias",
                "lyhoang_key",
                "-keyalg",
                "RSA",
                "-keysize",
                "2048",
                "-validity",
                "10000",
                "-storepass",
                "123456",
                "-keypass",
                "123456",
                "-dname",
                "CN=ThayLyHoang, OU=MathEducation, O=LyHoangMath, L=AnGiang, ST=AG, C=VN",
            ],
            check=True,
            env=env,
        )

    final_apk = os.path.join(BASE_DIR, "ToanThayLyHoang.apk")
    print("🔐 Đang ký số chứng chỉ Android (APK Signature v1/v2)...")
    subprocess.run(
        [
            APKSIGNER,
            "sign",
            "--ks",
            keystore_path,
            "--ks-pass",
            "pass:123456",
            "--key-pass",
            "pass:123456",
            "--out",
            final_apk,
            aligned_apk,
        ],
        check=True,
        env=env,
    )

    # Copy APK vào public/ và dist/ để người dùng tải trực tiếp từ giao diện Web
    shutil.copy2(final_apk, os.path.join(PUBLIC_DIR, "ToanThayLyHoang.apk"))
    shutil.copy2(final_apk, os.path.join(DIST_DIR, "ToanThayLyHoang.apk"))

    # Dọn thư mục tạm
    shutil.rmtree(ANDROID_BUILD_ROOT, ignore_errors=True)
    print(f"✅ ĐÃ XUẤT THÀNH CÔNG FILE APK: {final_apk}")


if __name__ == "__main__":
    build_apk()
