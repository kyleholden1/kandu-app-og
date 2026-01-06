# Kandu 🦜

**Parenting Support App for Toddler Challenges**

Kandu is a mobile-first web app that provides evidence-based strategies for common toddler struggles like hitting, tantrums, biting, and more. It learns what works for your child and adapts its recommendations.

---

## Quick Start

### For Users
1. Visit: `your-netlify-url.netlify.app`
2. Go through each section: Nest → SOS → Stream → Profile
3. Check the **[User Guide](USER_GUIDE.md)** for feature walkthroughs

### For Developers
```bash
git clone [your-repo]
cd kandu-app
npm install
npm run dev
# Opens http://localhost:3000
```

---

## Features

### 🏠 The Nest (Home)
- Daily practice prompts
- Regulation check-in with slider
- Tracks your consistency
- Shows daily streak

### 🆘 SOS Mode
- 8 common toddler struggles (Hitting, Tantrums, Biting, Sharing, Eating, Sleep, Travel, Bath Time)
- 2-3 evidence-based strategies per struggle
- Adaptive recommendation system (learns which strategies work)
- Strategy ratings to help Kandu improve suggestions

### 📻 The Stream
- **Rest & Restore**: Guided meditations (5-15 min) with playback simulation
- **The Science**: Quick reads on parenting neuroscience
- Progress tracking & completion badges

### 👤 Profile
- Level progression system
- Weekly streak calendar
- Activity tracking
- Badges (coming soon)

---

## Tech Stack

- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Storage**: Browser localStorage (fully offline)
- **Deployment**: Netlify (static export)

---

## Documentation

- **[Quick Deploy Guide](QUICK_DEPLOY.txt)** ← Start here to launch
- **[Deployment Guide](DEPLOYMENT.md)** - Detailed deploy instructions
- **[User Guide](USER_GUIDE.md)** - Feature explanations for end users
- **[Development Summary](DEVELOPMENT_SUMMARY.md)** - Full technical overview

---

## File Structure

```
kandu-app/
├── app/                  # Next.js pages
│   ├── page.tsx         # Home/Nest
│   ├── sos/page.tsx     # SOS Mode
│   ├── stream/page.tsx  # The Stream
│   └── profile/page.tsx # Profile
├── components/          # Reusable React components
│   ├── BottomNav.tsx
│   ├── GuideModal.tsx
│   └── Mascot.tsx
├── hooks/              # Custom React hooks
│   ├── useUserData.ts  # User progress tracking
│   └── useStreamData.ts # Stream content tracking
├── data/               # Static data
│   └── guides.ts       # All strategies & guides
└── public/             # Static assets
    └── manifest.json   # PWA manifest
```

---

## Data

All user data is stored **locally in the browser** (localStorage). Nothing is sent to servers in this version.

**Stored Data:**
- Daily practices completed
- Check-in history with ratings
- SOS strategy ratings (app learns from these)
- Stream content completion status
- User's current streak

**Privacy:** Your data is yours. You can access it anytime via DevTools → Application → Local Storage.

---

## Development

### Available Scripts

```bash
npm run dev      # Start dev server
npm run build    # Build for production (creates /out folder)
npm run start    # Serve production build
npm run lint     # Run TypeScript & ESLint checks
```

### Project Structure

Each page is a client component (marked with `"use client"` because they use React hooks for state management).

**Key Hooks:**
- `useUserData()` - Manages user progress, streaks, check-ins
- `useStreamData()` - Manages content completion tracking
- `usePathname()` (Next.js) - Active route detection for BottomNav

---

## Deployment

### Fastest Way (Netlify Drag & Drop)
```bash
npm run build
# Drag the /out folder to https://app.netlify.com
```

### Via Git (Auto-deploys on push)
1. Connect your GitHub repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `out`

**See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.**

---

## Browser Support

- ✅ Chrome, Edge, Firefox, Safari (all modern versions)
- ✅ Mobile browsers (iOS Safari, Chrome Android)
- ⚠️ Requires JavaScript enabled
- ⚠️ Requires localStorage support

---

## Design System

- **Color Palette:**
  - Teal: Primary actions & The Nest
  - Rose: SOS Mode
  - Blue: The Stream
  - Amber: Profile
  - Gray: Neutral UI

- **Typography:**
  - Font: Nunito (Google Fonts)
  - Weight: 600 (semibold) for body, 900 (black) for headings

- **Spacing:**
  - Uses Tailwind's default scale (4px base unit)
  - Max container width: 28rem (448px) for mobile-first design

---

## Future Roadmap

- **Phase 5**: Ask Heere AI Chat (intelligent parenting assistant)
- **Phase 6**: Backend integration (multi-device sync, data persistence)
- **Phase 7**: Real audio/video meditation content
- **Phase 8**: Community insights (anonymous aggregated data)
- **Phase 9**: Parenting tips feed & notifications

---

## Contributing

This is an Amp-built project. For contributions or improvements, check the git history or contact the development team.

---

## License

MIT (or specify your license)

---

## Support

**User Questions:** See [USER_GUIDE.md](USER_GUIDE.md)
**Developer Questions:** See [DEVELOPMENT_SUMMARY.md](DEVELOPMENT_SUMMARY.md)
**Deployment Issues:** See [DEPLOYMENT.md](DEPLOYMENT.md)

---

## Credits

- **Built with**: Next.js, React, Tailwind CSS
- **Icons**: Lucide React
- **Hosted on**: Netlify
- **Development**: Amp AI

---

**Version**: 1.0.0 (MVP - Ready for deployment)
**Last Updated**: December 1, 2025

🦜 Happy parenting!
