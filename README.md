# Web Harmonium

A free online harmonium simulator built with Next.js, TypeScript, and Web Audio API.

## Features

- 🎹 Play harmonium with your computer keyboard
- 🎵 Transpose control (-11 to +11 semitones)
- 🎼 Multiple octaves (7 octaves)
- 🎚️ Volume control and reverb effects
- 🎶 Multiple reed simulation for richer sound
- 💾 Settings persistence using localStorage
- 📱 Mobile-friendly touch controls

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd harmonium-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.local.example .env.local
```

4. Add your Google AdSense client ID to `.env.local`:
```
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
harmonium-nextjs/
├── app/                      # Next.js App Router pages
│   ├── harmonium/           # Main harmonium player page
│   ├── tutorial/            # Tutorial page
│   ├── about/               # About page
│   ├── privacy/             # Privacy policy
│   ├── contact/             # Contact page
│   ├── layout.tsx           # Root layout with navigation
│   ├── page.tsx             # Home page
│   ├── sitemap.ts           # Dynamic sitemap generation
│   └── robots.ts            # Robots.txt configuration
├── components/
│   ├── harmonium/           # Harmonium UI components
│   ├── layout/              # Layout components (Header)
│   ├── seo/                 # SEO components (StructuredData)
│   └── ads/                 # AdSense components
├── lib/
│   ├── audio/               # Web Audio API engine
│   ├── hooks/               # React hooks
│   └── utils/               # Utility functions
└── public/
    └── audio/               # Audio sample files
```

## SEO Optimization

This project includes comprehensive SEO optimization:

- ✅ Dynamic sitemap generation (`/sitemap.xml`)
- ✅ Robots.txt configuration
- ✅ Structured data (Schema.org) for better search visibility
- ✅ Optimized meta tags on all pages
- ✅ Rich content pages (tutorial, about)
- ✅ Mobile-responsive design

## Google AdSense Integration

AdSense is integrated and ready to use:

1. Get your AdSense account approved at [Google AdSense](https://www.google.com/adsense/)
2. Add your client ID to `.env.local`
3. Replace ad slot IDs in `app/tutorial/page.tsx` with your actual slot IDs
4. Deploy to production - ads only show in production mode

Ad placements:
- Tutorial page: Top banner + mid-content rectangle
- Additional pages: Can add more ad units as needed

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variable `NEXT_PUBLIC_ADSENSE_CLIENT_ID`
4. Deploy

### Other Platforms

Build the production version:
```bash
npm run build
npm start
```

## Browser Compatibility

- Chrome/Edge (recommended)
- Firefox
- Safari
- Modern mobile browsers

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Web Audio API** - Audio synthesis and playback
- **Tailwind CSS** - Styling
- **Vercel** - Hosting and deployment

## License

[Add your license here]

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues or questions, please visit the [Contact page](https://webharmonium.com/contact).
