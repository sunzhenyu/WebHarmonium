# 🎹 Web Harmonium

A free, open-source online harmonium simulator built with modern web technologies. Play authentic harmonium sounds directly in your browser with no downloads or installations required.

**🌐 Live Demo:** [https://web-harmonium.net](https://web-harmonium.net)

![Web Harmonium Screenshot](https://web-harmonium.net/icon.svg)

---

## ✨ Features

### 🎵 Core Functionality
- **Computer Keyboard Control** - Play using QWERTY keyboard (` q w e r t y u i o p [ ] \)
- **Virtual Keyboard** - Click or tap on-screen keys for mobile/tablet support
- **Authentic Sound** - High-quality harmonium samples with natural sustain and release
- **Polyphonic** - Play multiple notes simultaneously (chords supported)

### 🎛️ Advanced Controls
- **Transpose** - Shift pitch ±11 semitones to match any vocal range
- **Octave Selector** - 7 octaves available (0-6)
- **Reed Layers** - Stack 1-4 reeds for richer, fuller sound
- **Reverb Effect** - Toggle concert hall reverb for depth
- **Volume Control** - Precise 1-100% volume adjustment

### ⌨️ Keyboard Shortcuts
- `Ctrl+Alt+←/→` - Adjust transpose
- `Ctrl+Alt+↑/↓` - Change octave
- Quick access without touching the mouse

### 📚 Learning Resources
- **Interactive Tutorial** - Step-by-step guide for beginners
- **Song Library** - 8+ popular songs with notation (Bollywood, Western, Bhajans)
- **Raga Guide** - 8 common Indian classical ragas with scale patterns
- **Sargam Labels** - Indian notation (Sa Re Ga Ma) displayed on keys

### 🌍 Accessibility
- **Mobile Responsive** - Works on phones, tablets, and desktops
- **No Installation** - Runs entirely in browser
- **Offline Ready** - Settings persist locally
- **Cross-Browser** - Chrome, Firefox, Safari, Edge

---

## 🚀 Quick Start

Visit [https://web-harmonium.net](https://web-harmonium.net) and click "Load Module" to start playing immediately.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Audio:** Web Audio API
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

---

## 📦 Local Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/sunzhenyu/WebHarmonium.git
cd WebHarmonium

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
webharmonium/
├── app/                    # Next.js pages
│   ├── harmonium/         # Main player interface
│   ├── tutorial/          # Learning resources
│   ├── faq/              # Frequently asked questions
│   ├── about/            # About page
│   └── layout.tsx        # Root layout
├── components/
│   ├── harmonium/        # Player UI components
│   ├── layout/           # Header, navigation
│   └── seo/              # SEO components
├── lib/
│   ├── audio/            # Audio engine (Web Audio API)
│   ├── hooks/            # React hooks
│   └── utils/            # Utilities
└── public/
    └── audio/            # Audio samples
```

---

## 🎯 Key Improvements Over Traditional Tools

✅ **No Installation** - Instant access from any device
✅ **Cross-Platform** - Works on Windows, Mac, Linux, iOS, Android
✅ **Authentic Sound** - Real harmonium samples, not MIDI synthesis
✅ **Modern UX** - Clean interface with keyboard shortcuts
✅ **Educational** - Built-in tutorials and song library
✅ **Free Forever** - No subscriptions, no paywalls

---

## 🌐 Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome/Edge | ✅ Recommended |
| Firefox | ✅ Full support |
| Safari | ✅ Full support |
| Mobile browsers | ✅ Touch optimized |

---

## 📖 Documentation

- **Tutorial:** [web-harmonium.net/tutorial](https://web-harmonium.net/tutorial)
- **FAQ:** [web-harmonium.net/faq](https://web-harmonium.net/faq)
- **About:** [web-harmonium.net/about](https://web-harmonium.net/about)

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs via [GitHub Issues](https://github.com/sunzhenyu/WebHarmonium/issues)
- Submit feature requests
- Create pull requests

---

## 📧 Contact

For questions or feedback, visit [web-harmonium.net/contact](https://web-harmonium.net/contact)

---

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

---

## 🙏 Acknowledgments

- Original harmonium sample: Kannan's harmonium recording
- Inspired by traditional Indian harmonium instruments
- Built with modern web standards (Web Audio API, ES6+)

---

**Made with ❤️ for musicians and learners worldwide**
