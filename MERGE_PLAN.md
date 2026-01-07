# Kandu Enhanced - Merge Plan

## Overview
Combining the best features from:
1. **C:/Projects/kandu-app** - Original MVP (Next.js, proven features, great content)
2. **kanduapp (Replit)** - Enhanced build (Radix UI, better components, production-ready architecture)

## What We're Taking From Each

### From C:/Projects/kandu-app
✅ **Content & Data**
- All guides, strategies, and SOS content
- Daily practice prompts
- Stream content (meditations, science articles)
- Evidence-based parenting approach

✅ **Features**
- The Nest (home with daily practices)
- SOS Mode (immediate support)
- The Stream (educational content)
- Profile & progression system
- Adaptive strategy recommendations

### From kanduapp (Replit)
✅ **Architecture**
- Radix UI component system (production-ready)
- Better form handling with React Hook Form
- Advanced styling with class-variance-authority
- Toast notifications
- Command palette/search
- Modal & dialog patterns
- Accordion components
- Tab navigation

✅ **Code Quality**
- TypeScript best practices
- Modular component structure
- Proper hook patterns
- Responsive design system
- Animation library (Framer Motion)

## Tech Stack for kandu-enhanced
- **Framework**: Next.js 14 (App Router)
- **UI Components**: Radix UI (from Replit build)
- **Styling**: Tailwind CSS 3.4 + CSS animations
- **Forms**: React Hook Form + Zod validation
- **Charts**: Recharts (for progress tracking)
- **State**: React hooks + React Query (optional)
- **Deployment**: Static export (Netlify/Vercel)
- **Language**: TypeScript

## Directory Structure
```
kandu-enhanced/
├── app/
│   ├── page.tsx          # The Nest (home)
│   ├── sos/page.tsx      # SOS Mode
│   ├── stream/page.tsx   # The Stream
│   ├── profile/page.tsx  # Profile
│   └── layout.tsx
├── components/
│   ├── ui/              # Radix UI wrapped components
│   ├── BottomNav.tsx
│   ├── Mascot.tsx
│   ├── GuideModal.tsx
│   └── ...
├── hooks/
│   ├── useUserData.ts
│   ├── useStreamData.ts
│   └── useLocalStorage.ts
├── lib/
│   ├── utils.ts
│   └── types.ts
├── data/
│   ├── guides.ts        # All SOS strategies
│   ├── practices.ts     # Daily prompts
│   └── content.ts       # Stream content
└── public/
```

## Phased Rollout
1. **Phase 1**: Core structure + data files (in progress)
2. **Phase 2**: UI components from Radix
3. **Phase 3**: Hook systems (localStorage, user data)
4. **Phase 4**: The Nest page
5. **Phase 5**: SOS Mode
6. **Phase 6**: The Stream
7. **Phase 7**: Profile page
8. **Phase 8**: Styling & animations
9. **Phase 9**: Testing & deployment

## What Makes This Better
- ✨ Modern Radix UI components
- 🎨 Consistent design system
- 📱 Mobile-first responsive design
- ♿ Accessibility built-in
- 🚀 Production-ready
- 🎯 All original parenting content preserved
- 🔄 Same proven user experience
