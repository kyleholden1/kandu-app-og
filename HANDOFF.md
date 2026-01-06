# Kandu App - Development Handoff Summary

**Current Status:** MVP Complete, Phase 1 Deployed, Phase 2 Ready to Start  
**Last Updated:** December 1, 2025  
**Thread:** T-4b9c8adc-d934-44f2-8bb5-d9130bbe81d4

---

## What's Built

### Phase 1: Core Features ✅
- **Context Questions** - Users answer clarifying questions before getting SOS advice
- **Self-Regulation Reminders** - Top of every strategy reminds parents to regulate first
- **Email Button** - "Email Me These Steps" button in SOS modal
- **Fixed Navigation** - All 3 tabs working (Home, Stream, SOS)
- **Streaks on Home** - Orange flame card shows consecutive days
- **Ask Heere Modal** - Community insights overlay (not separate page)
- **Knowledge Base Tracking** - Every strategy rating improves recommendations
- **Community Effectiveness Badges** - Shows % success rate per strategy

### Phase 2: Ready to Build
- Chat mode in SOS modal (add more detail/context)
- Lessons system (Duolingo-style progression)
- Progression algorithm (unlocks next-level strategies)

---

## Project Structure

```
kandu-app/
├── app/
│   ├── page.tsx                 ← Home (Nest) with streaks
│   ├── sos/page.tsx            ← SOS Mode with modals
│   ├── stream/page.tsx         ← The Stream (rest & science)
│   ├── layout.tsx              ← Root layout with BottomNav
│   └── ask-heere/              ← (Deleted - now modal)
├── components/
│   ├── BottomNav.tsx           ← Navigation (3 tabs: Home, Stream, SOS)
│   ├── GuideModal.tsx          ← SOS strategy display
│   ├── AskHeereModal.tsx       ← Community insights modal
│   ├── Mascot.tsx              ← Heere the toucan
│   └── GuideModal.tsx          ← (Updated with self-reg + email)
├── hooks/
│   ├── useUserData.ts          ← User progress (practices, check-ins, streaks)
│   ├── useStreamData.ts        ← Stream content tracking
│   └── useStrategyAnalytics.ts ← Strategy ratings & effectiveness
├── data/
│   ├── guides.ts               ← 8 struggles × 2-3 strategies each
│   ├── contextQuestions.ts     ← Pre-advice context questions
│   ├── customKnowledge.ts      ← Your custom strategies (from knowledge base)
│   └── guides.ts               ← (Merged with custom via mergeCustomStrategies())
├── knowledge-base/             ← Your external knowledge folder
│   └── document for amp for parenting app.md  ← Your notes
└── DEPLOYMENT.md, README.md, etc.
```

---

## Key Files to Know

### Data Files (Where Content Lives)
- **`data/guides.ts`** - Default 21 strategies (don't edit, use customKnowledge instead)
- **`data/customKnowledge.ts`** - YOUR strategies extracted from your notes
  - 12 custom strategies already integrated
  - `mergeCustomStrategies()` function combines with defaults
- **`data/contextQuestions.ts`** - Questions asked before SOS advice
- **`c:/Users/kyleh/OneDrive/Documents/Amp/knowledge-base/`** - Your external notes folder

### Component Files (What Users See)
- **`components/GuideModal.tsx`** - Displays strategies with self-reg reminder + email button
- **`components/AskHeereModal.tsx`** - Community insights (opened from SOS)
- **`app/sos/page.tsx`** - Loads merged guides, handles context questions

### Hook Files (How Data Flows)
- **`hooks/useUserData.ts`** - Tracks practices, check-ins, streaks
- **`hooks/useStrategyAnalytics.ts`** - Records ratings, calculates effectiveness %

---

## How to Add Your Knowledge

### Process
1. **Update your Google Doc** with new strategies/notes
2. **Export as Markdown** (File → Download → Markdown)
3. **Save to** `c:/Users/kyleh/OneDrive/Documents/Amp/knowledge-base/document for amp for parenting app.md`
4. **Tell me in next thread:** "Updated knowledge base"
5. **I convert** your notes to strategy format
6. **I add to** `data/customKnowledge.ts`
7. **You rebuild & deploy**

### Knowledge Base Location
```
c:/Users/kyleh/OneDrive/Documents/Amp/knowledge-base/
└── document for amp for parenting app.md
```

### Strategy Format (for reference)
```typescript
{
  id: "unique_id",
  name: "Strategy Name",
  steps: [
    "Step 1...",
    "Step 2...",
    "Step 3..."
  ],
  why: "Why this works..."
}
```

---

## Data Storage (All Local/Browser)

- **`kandu_user_data`** - User's practices, check-ins, streaks
- **`kandu_stream_data`** - Content completion
- **`kandu_guide_[struggle]`** - Strategy ratings per struggle
- **`kandu_strategy_ratings`** - Analytics for effectiveness %

---

## Build & Deploy

### Local Build
```bash
cd C:\Projects\kandu-app
npm run build
```

### Deploy to Netlify
**Option 1 (Easiest):**
- Drag `out/` folder to https://app.netlify.com

**Option 2 (Git):**
- Push to GitHub
- Connect repo to Netlify
- Auto-deploys on push

### Important Commands
```bash
npm run dev      # Local development
npm run build    # Production build
npm run start    # Serve build locally
npm run lint     # Type check
```

---

## Current Struggles & Strategies

**Hitting** (5 strategies):
- The Firm Boundary
- Connection First
- The Reset
- Pause & Regulate Yourself
- Acknowledge Feelings
- Yes-Based Language

**Tantrums** (5 strategies):
- Calm Presence
- The Hug
- Check Your Own Emotions
- Validate All Reactions
- Watch for Distress Signals

**Biting** (4 strategies):
- The Mouth Guard
- Use Your Words
- The Need Behind It
- Yes-Based Language

**Sharing** (4 strategies):
- The Timer Strategy
- Parallel, Not Shared
- Special Toys Stay Safe
- Yes-Based Language

**Eating** (4 strategies):
- Division of Responsibility
- No Pressure, Lots of Exposure
- Food Play (Not Waste)
- Yes-Based Language

**Sleep** (5 strategies):
- The Consistent Routine
- The Boring Response
- Catch the Window
- Prepare & Preview
- Boundaries with Choice

**Travel** (4 strategies):
- Set Expectations Early
- Built-In Movement Breaks
- Lower Your Expectations
- Regulate Yourself

**Bath Time** (4 strategies):
- Respect Water Fear
- Bath = Play, Not Cleaning
- Give Control Back
- Boundaries with Choice

---

## Next Steps (Phase 2)

### High Priority
1. **Chat Mode in SOS** - Let parents add more context/detail in modal
2. **Lessons System** - Duolingo-style progression (foundational → advanced)
3. **Progression Algorithm** - Unlock lessons as strategies work well

### Medium Priority
4. Optional authentication (for saving progress across devices)
5. Real email/SMS backend
6. Feedback system with templates

### Nice to Have
7. Real audio/video content for Stream
8. Multi-device sync
9. Community features

---

## Known Limitations

- No backend (all data is local to browser)
- No real email sending (uses browser mailto)
- Ask Heere shows community insights but not AI-generated advice (yet)
- Profile page removed (streaks on home for now)
- No actual audio/video playback (simulated)

---

## Testing Checklist

Before deploying any changes:
- [ ] Home page: streak shows, practice button works, check-in saves
- [ ] SOS page: all 8 struggles have strategies, context questions work
- [ ] Strategy modal: self-reg reminder visible, email button works, ratings save
- [ ] Ask Heere: opens modal, shows community insights
- [ ] Stream: cards mark as complete, progress counters update
- [ ] Navigation: all 3 tabs work from any page
- [ ] Browser DevTools → Local Storage: verify data saves

---

## Useful Links

- **Live App:** (Updated URL from latest Netlify deploy)
- **Knowledge Base:** `c:/Users/kyleh/OneDrive/Documents/Amp/knowledge-base/`
- **Deployment Guide:** `DEPLOYMENT.md`
- **User Guide:** `USER_GUIDE.md`
- **Full Dev Summary:** `DEVELOPMENT_SUMMARY.md`

---

## Last Actions Taken

1. Created `customKnowledge.ts` with 12 strategies from your knowledge base
2. Integrated custom strategies into SOS page via `mergeCustomStrategies()`
3. Fixed navigation z-index issues (nav now always clickable)
4. Moved BottomNav outside main element for better pointer events
5. Added streaks card to Home page
6. Converted Ask Heere from page to modal
7. Removed Profile page (streaks now on home)

---

## Tech Stack
- **Next.js** 14.1.0
- **React** 18
- **TypeScript** (strict)
- **Tailwind CSS** 3.4.18
- **Lucide React** icons
- **No backend** (fully client-side MVP)

---

## Questions for Next Thread

When you start a new thread:
- What Phase 2 feature do you want to tackle first?
- Any new strategies from your knowledge base to add?
- Want to modify any existing strategies?
- Any bugs or issues to fix?

---

**Ready to handoff. Start new thread with this summary pasted at top, and continue from here.**
