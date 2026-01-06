# Kandu App - Deployment Guide

## Pre-Deployment Checklist

### ✅ Features Implemented
- [x] Home (Nest): Daily practice tracking + regulation check-in
- [x] SOS Mode: 8 struggles with 2-3 strategies each, adaptive UI
- [x] The Stream: Rest content with playback simulation + Science articles
- [x] Profile: Real-time streak tracking & level progression
- [x] Bottom Navigation: Full routing between all pages
- [x] Data Persistence: localStorage-based user data
- [x] Responsive Design: Mobile-first, max-width container

### ✅ Technical Setup
- [x] Static export configured (`output: "export"`)
- [x] Trailing slashes enabled (`trailingSlash: true`)
- [x] Images unoptimized for static export
- [x] TypeScript configured
- [x] Tailwind CSS with custom config
- [x] All "use client" directives in place
- [x] Environment ready for Netlify

---

## Build Steps

### Local Build (if Node.js available)
```bash
npm run build
```
This generates the `out/` folder with all static files.

### Without Local Node.js
If npm isn't available locally, you can deploy directly to Netlify and it will build in the cloud.

---

## Netlify Deployment

### Option 1: Drag & Drop (Simplest)
1. Go to https://app.netlify.com
2. Log in to your account
3. Drag the `out/` folder into the Netlify drop zone
4. Your app goes live instantly

**Note:** If `out/` folder doesn't exist, build locally first or use Option 2.

### Option 2: Git Integration (Recommended)
1. Push your code to GitHub/GitLab/Bitbucket
2. In Netlify: Click "New site from Git"
3. Connect your repo
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
5. Deploy

### Option 3: Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=out
```

---

## Testing Checklist (Before Deploy)

### Home Page
- [ ] "Start Practice" button saves completion (grays out after click)
- [ ] Check-in slider captures values 0-100
- [ ] "Submit Check-in" button saves rating & grays out
- [ ] Both reset daily at midnight

### SOS Page
- [ ] All 8 struggle buttons work (no "coming soon" alerts)
- [ ] Modal opens with strategy
- [ ] "Didn't Work" shows rotation screen
- [ ] "It Worked!" shows success screen
- [ ] Ratings save to localStorage
- [ ] Next visit suggests different strategy if last rating was low

### The Stream
- [ ] Rest items show play/pause/check icons
- [ ] Clicking play triggers animation & auto-completes after duration
- [ ] Science items show checkmark on click
- [ ] Progress counters update (X/7 for rest, X/3 for science)
- [ ] Data persists on page reload

### Profile
- [ ] Weekly streak shows actual activity (checkmarks for active days)
- [ ] Level increments correctly (1 per 5 check-ins)
- [ ] Streak counter shows correct number of consecutive days

### Navigation
- [ ] Bottom nav highlights active page
- [ ] All page links work
- [ ] No broken routes

---

## Post-Deployment

### Verify Live Site
1. Visit your deployed URL
2. Go through all pages
3. Use browser DevTools → Application → Local Storage to verify data saves
4. Test on mobile device

### Share & Monitor
- Share the live URL with users
- Monitor Netlify analytics
- Check browser console for any errors

---

## Common Issues & Fixes

### "Build failed" in Netlify
- Check that Node.js version is set (Settings → Build & Deploy → Environment)
- Ensure `package.json` exists and is valid
- Clear Netlify cache and retry build

### Static export issues
- Verify `output: "export"` in `next.config.js`
- Remove any server-side features (API routes, getServerSideProps, etc.)
- All pages must be static or use `"use client"`

### Data not persisting
- Check that localStorage is enabled in browser
- Open DevTools → Application → Local Storage to verify keys:
  - `kandu_user_data`
  - `kandu_stream_data`
  - `kandu_guide_*` (for each struggle)

### Routing issues
- Ensure trailing slashes are enabled in `next.config.js`
- Check that `BottomNav.tsx` uses `usePathname()` correctly
- Verify all route links use `href="/page/"` with trailing slash

---

## Version Info
- Next.js: 14.1.0
- React: ^18
- Tailwind CSS: 3.4.18
- Lucide React: 0.344.0

---

## Next Steps After Launch
1. Gather user feedback
2. Phase 2: Add AI chat for "Ask Heere" feature
3. Phase 3: Backend integration for multi-device sync
4. Phase 4: Audio/video hosting for Stream content
