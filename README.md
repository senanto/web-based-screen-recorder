# Web Based Screen Recorder v2

**Web based screen/window recorder** with a modern dark UI, microphone support, and recording history.

![Screenshot](https://i.ibb.co/ym0QnZbd/image.png)

## 🌐 Demo

Try it live: [https://screenrecorderonline.vercel.app/](https://screenrecorderonline.vercel.app/)

---

## ✨ Features

- **Screen/Window Recording** – capture any tab, window, or entire screen (with optional system audio).
- **Microphone Toggle** – enable/disable mic during recording (icon changes state).
- **Live Preview** – see your screen in real‑time while recording.
- **Recording Timer** – shows elapsed time.
- **History Panel** – stores all recordings with file size, duration, and resolution.
  - Download any recording with one click.
  - Delete individual recordings or clear all history.
- **Settings Modal** – adjust video quality (720p / 1080p / 4K) and audio source (system+mic, mic only, or no audio).
- **Dark & Modern UI** – orange accents, fully responsive sidebar layout.
- **No external libraries** – pure HTML/CSS/JavaScript using the MediaRecorder API.

---

## 🚀 How to Use

1. Click the **Start Recording** button (orange circle).  
   - Your browser will ask you to choose a screen/window to share.
   - If you have enabled the microphone (MIC button), it will also capture your voice.
2. While recording, you can **mute/unmute** the mic by clicking the microphone icon.
3. Click **Stop** (red circle) to finish recording.
4. The recording will automatically appear in the **Recent recordings** list below.
5. From the history, you can:
   - **Download** the video (`.webm` format).
   - **Delete** a single recording.
   - **Clear all** recordings.
6. Open **Settings** (gear icon in sidebar) to change quality or audio preferences.

---

## 🛠️ Technologies

- **HTML5** – structure
- **CSS3** – custom styling (flexbox, grid, transitions, dark theme)
- **JavaScript (ES6)** – logic, MediaRecorder API, stream management
- **Font Awesome** – icons
- **Inter** – system font stack

---

## 📦 Installation

No installation required – it runs entirely in the browser.  
Just open the `index.html` file in any modern browser (Chrome, Edge, Firefox, or Opera).

To run locally:

```bash
git clone https://github.com/senanto/web-based-screen-recorder.git
cd web-based-screen-recorder
# Open index.html in your browser
