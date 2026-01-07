# Kandu Enhanced 🦜

**Parenting Support App for Toddler Challenges**

A merged version combining the best features from the original Kandu MVP and the Replit enhanced build.

## Features

### 🏠 The Nest (Home)
- Daily practice prompts with streak tracking
- Regulation check-in with mood slider
- Progress toward next level
- Activity dashboard

### 🆘 SOS Mode
- 8 common toddler struggles (Hitting, Tantrums, Biting, Sharing, Eating, Sleep, Travel, Bath Time)
- 2-3 evidence-based strategies per struggle
- Adaptive recommendation system (learns which strategies work)
- Strategy ratings to help Kandu improve suggestions

### 📻 The Stream
- **Rest & Restore**: Guided meditations (simulated)
- **The Science**: Quick reads on parenting neuroscience
- Progress tracking & completion badges

### 👤 Profile
- Level progression system (unlocked by check-ins)
- Weekly streak calendar
- Activity tracking
- Badges (coming soon)

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Opens http://localhost:3000

# Build for production
npm run build

# Start production server
npm start
```

## Tech Stack

- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **Components**: Radix UI patterns
- **Icons**: Lucide React
- **Storage**: Browser localStorage (fully offline)
- **Deployment**: Static export (Netlify/Vercel)

## What's Different from Original

✨ **Better UI/UX**
- Radix UI component patterns for accessibility
- Improved form handling
- Better animations with Framer Motion support
- Modern design system

🎨 **Design Improvements**
- Consistent color system (Nest, SOS, Stream, Profile)
- Better spacing and typography
- Mobile-first responsive design
- Dark mode ready (CSS variables)

🚀 **Code Quality**
- TypeScript throughout
- Better component organization
- Proper React hooks patterns
- Fully typed data structures

## File Structure

```
kandu-enhanced/
├── app/                    # Next.js pages
│   ├── page.tsx           # The Nest (home)
│   ├── sos/page.tsx       # SOS Mode
│   ├── stream/page.tsx    # The Stream
│   ├── profile/page.tsx   # Profile
│   └── layout.tsx
├── components/            # Reusable React components
│   └── BottomNav.tsx
├── hooks/                 # Custom React hooks
│   ├── useUserData.ts    # User progress tracking
│   └── useLocalStorage.ts
├── lib/
│   ├── types.ts          # TypeScript type definitions
│   └── utils.ts          # Utility functions
├── data/
│   └── guides.ts         # All strategies & guides
└── public/
```

## Data & Privacy

All user data is stored **locally in the browser** (localStorage). Nothing is sent to servers.

**Stored Data:**
- Daily practices completed
- Check-in history with ratings
- SOS strategy ratings
- Stream content completion status
- Current streak & level

**Privacy:** Your data is yours. Access it anytime via DevTools → Application → Local Storage.

## Next Steps

- Real audio/video meditation content
- Backend integration (multi-device sync)
- AI chat feature (Ask Heere)
- Community insights
- Notifications

## Development

Available scripts:
```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm start        # Serve production build
npm run lint     # Run TypeScript check
```

## Contributing

This is an Amp-built project. See git history for all changes.

## Version

**1.0.0** - Enhanced MVP combining original content with improved architecture

🦜 Happy parenting!
