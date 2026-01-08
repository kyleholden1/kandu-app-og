export interface Lesson {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'regulation' | 'boundaries' | 'play' | 'gifts' | 'mindset';
  readTime: number;
  icon: string;
}

export const LESSONS: Lesson[] = [
  {
    id: 'knows-better',
    title: 'Why Your Child "Knows Better" But Still Does It',
    excerpt: 'Understanding the difference between knowing a rule and having the capacity to follow it when dysregulated.',
    content: `Your child can probably recite the rule back to you. They *know* not to hit, they *know* to use gentle hands. So why do they keep doing the thing?

Here's the key distinction: there's a difference between ability and capacity. Your child likely knows the rule or skill you've talked about before. But knowing something and having the capacity to use it in the moment are two entirely different things.

When kids are tired, hungry, overstimulated, or emotionally flooded, access to what they've learned goes offline. Knowing and doing—and having the capacity to do it—have little correlation when a child is dysregulated. It's not defiance. It's not manipulation. It's a brain that's maxed out.

Think about yourself: you know you shouldn't snap at your partner when you're stressed, but sometimes you do anyway. Same mechanism. The skill exists, but the capacity to access it doesn't.

This means the response "You know better than that" misses the point entirely. They probably do know better—they just couldn't access it in that moment.

**How to help:** Always assume skill, not will. Instead of assuming they're choosing to misbehave, assume the skill is there but capacity isn't. Say something like "Looks like this is still hard when you're excited—let me help." Practice the skill during calm moments, when they actually have the capacity to learn. And connect before you correct: "I know you're excited to tell me. Try again after I finish this thought."

**Try this:** Next time they break a rule they clearly know, pause before reacting. Ask yourself: is this a skill problem or a capacity problem? Respond to whichever it actually is.`,
    category: 'regulation',
    readTime: 4,
    icon: '🧠',
  },
  {
    id: 'talking-meltdown',
    title: 'Why Talking During a Meltdown Backfires',
    excerpt: 'Your words during a dysregulated moment may actually make their feelings bigger, not smaller.',
    content: `Your instinct might be to explain, label feelings, or reason with your child mid-tantrum. But here's the science: it usually makes things worse. In fact, labeling and empathizing during a dysregulated moment may actually make their feelings *bigger*, not smaller.

Here's what's happening in their brain:

First, when children are upset, executive function is impaired. The part of the brain responsible for remembering and applying ideas is essentially behind a closed door. Your words aren't getting through the way you think they are.

Second, talking requires effort to process and respond. When you ask questions or offer reflections, you're asking their brain to do work—and that pulls energy away from the process of cooling down.

Third, if they can't express what they're feeling and sense that you want them to, they may feel patronized or pressured. Not understanding how to express their feelings, combined with feeling like they should be able to, can increase frustration rather than relieve it.

Fourth, at meltdown stage, it's not about using the right words—it's all just noise. You're adding to the sensory overload, not cutting through it.

During a meltdown, *less is more*. Save the labeling and empathizing for after their brain comes back online and they're actually able to learn.

**Try this:** During the next meltdown, try sitting nearby with calm body language and say almost nothing. A simple "I'm here" or just your quiet presence. See what happens when you stop trying to talk them through it.`,
    category: 'regulation',
    readTime: 5,
    icon: '🤐',
  },
  {
    id: 'no-creates-resistance',
    title: 'Why "No" Creates More Resistance',
    excerpt: 'Young children process positives more easily than negatives. Learn to redirect instead of restrict.',
    content: `When a child is throwing toys during cleanup, the instinct is to say "No throwing toys!" But here's the problem: their brain now has a vivid image of exactly what you don't want.

Young children process positives more easily than negatives. "Don't throw" requires them to: hear the instruction, imagine throwing, then mentally delete that image and figure out what to do instead. That's a lot of steps for a developing brain.

Telling them what they *can* do gives them a clear path forward.

**Try this:** Swap "no throwing toys" for "You can place the toys on this shelf or in this basket." Watch how differently they respond when they have a clear "yes."`,
    category: 'boundaries',
    readTime: 3,
    icon: '✅',
  },
  {
    id: 'find-yes',
    title: 'Find the Yes Inside the No',
    excerpt: 'Redirect impulses rather than block them. Honor the need while holding the boundary.',
    content: `Your toddler is climbing on the kitchen table. Again. You say "no climbing on the table" for the fortieth time and nothing changes.

Here's a reframe: the impulse to climb isn't bad—it's developmentally appropriate. They're not trying to break rules; they're trying to use their body. The problem isn't the climbing, it's the location.

When you can find a "yes" buried inside the "no," you stop fighting the impulse and redirect it instead.

**Try this:** Next time they're climbing somewhere off-limits, try "You want to climb! You can climb on the couch or on your Pikler." You've honored the need while holding the boundary.`,
    category: 'boundaries',
    readTime: 3,
    icon: '🧗',
  },
  {
    id: 'what-vs-how',
    title: 'The What vs. The How',
    excerpt: 'Power struggles happen when kids feel they have zero control. Learn how to give autonomy within boundaries.',
    content: `Power struggles often happen when kids feel like they have zero control. But here's a framework that helps: boundaries distinguish the *what* from the *how*. The parent decides the what, and the child chooses the how.

The non-negotiable (getting dressed, leaving for school, brushing teeth) stays firm—that's the "what" and it's not up for debate. But within that boundary, you offer them agency over how it happens. This gives them a sense of control without undermining the limit.

This isn't permissive parenting—the boundary absolutely holds. You're not asking *if* they want to get dressed. You're giving them dignity and autonomy within the limit you've set.

**Examples:**
- What: "We are going to school so we need to get ready." How: "Will you be putting on your shoes, or will I?"
- What: "We have five more minutes of this game, then we're done." How: "When we're done, I can carry you or you can walk."
- What: "I'm going to start a timer. When it's empty, I will help you put your clothes on if you don't finish."

Notice the structure: the non-negotiable is stated clearly, then the choice is offered within it. The child has agency, but the outcome is certain.

**Try this:** Next time you're heading into a potential power struggle, identify the "what" (the non-negotiable) and offer a "how" (a choice within it). See how differently they respond when they have some control.`,
    category: 'boundaries',
    readTime: 5,
    icon: '🎯',
  },
  {
    id: 'independent-play',
    title: 'Be the Observer, Not the Director',
    excerpt: 'Step back and support independent play by observing rather than directing.',
    content: `To support independent play, parents need to shift from leading to observing. Your role isn't to run the show—it's to reflect what you see and let your child take the lead.

Step back and notice what they're already drawn to, whether it's a shadow on the wall or a toy they keep returning to. Reflect without interrupting: "Oh, you noticed how that rolls?" You want them to feel like the star of their own play.

Think of yourself as an extra supporting the lead actor. This helps them build skills so you can gradually step back even more.

**Try this:** During your child's next play session, try not to direct or suggest. Just observe and occasionally mirror what you see: "You're stacking those really high." Let them lead.`,
    category: 'play',
    readTime: 3,
    icon: '👀',
  },
  {
    id: 'play-pockets',
    title: 'Create "Play Pockets" Around Your Home',
    excerpt: 'Strategic toy placement removes barriers to independent play throughout your day.',
    content: `A "play pocket" is a small, intentional collection of simple toys placed in spots where you need your child to play independently—near where life happens.

The bathroom cabinet can hold small cars and figurines for when you're bathing another child. A kitchen drawer can have safe, simple toys for play at your feet while you cook. A laundry room shelf might have books, magnetic tiles, or even rags for "folding alongside you."

The idea is to remove barriers. If toys are locked away or hard to reach, independent play is harder to start. Making materials accessible and visible changes everything.

**Try this:** Identify one spot in your home where you often need your child to be independent. Stock it with a few simple, rotating toys. See if it changes your daily flow.`,
    category: 'play',
    readTime: 4,
    icon: '🏠',
  },
  {
    id: 'schedule-downtime',
    title: 'Schedule Downtime Like It Matters',
    excerpt: 'Unscheduled time is where play and learning actually happen.',
    content: `We schedule soccer practice and piano lessons with intention. But downtime? That often gets treated as leftover space—whatever's left after the "real" activities.

Here's the thing: unscheduled time is where play happens. It's where children learn to be comfortable in their own skin, to tolerate boredom, to generate their own ideas. These are skills that over-scheduling actually prevents.

Schedule downtime with the same fierceness you would any enrichment activity. Protect it. It's not wasted time—it's essential.

**Try this:** Look at your family's week. Is there protected time with nothing scheduled? If not, block some out intentionally. Treat it as non-negotiable.`,
    category: 'play',
    readTime: 3,
    icon: '⏰',
  },
  {
    id: 'materialism-research',
    title: 'What Actually "Spoils" a Child',
    excerpt: 'Research on overindulgence shows relational and behavioral overindulgence matter more than material giving.',
    content: `Many parents worry that giving too many gifts will spoil their children. But research tells a more nuanced—and reassuring—story.

Researchers have identified three distinct types of overindulgence:

**Material overindulgence** is giving excessive toys, gifts, treats, electronics, clothing, or luxury items. This is what most parents worry about, especially around holidays.

**Relational overindulgence** is being overprotective or over-involved—solving problems for children, prioritizing their needs over everything else, or treating them like a peer rather than a child you're guiding.

**Behavioral overindulgence** is having low expectations and demands, lacking consequences or discipline, having few rules or limits, or shielding children from the results of their behavior.

Here's what research consistently finds: relational and behavioral overindulgence are linked to worse outcomes than material overindulgence. In fact, research does not consistently find that material overindulgence alone leads to negative outcomes.

One study found that material overindulgence from mothers was actually linked to *less* stress and depression in children—while behavioral indulgence was linked to *more* anxiety and depression.

**Try this:** Instead of stressing about how many presents are under the tree, focus your energy on the behavioral piece: maintaining consistent limits, expectations, and consequences—even during special occasions.`,
    category: 'gifts',
    readTime: 5,
    icon: '🎁',
  },
];

export const LESSON_CATEGORIES = {
  regulation: { label: 'Regulation', color: 'bg-amber-50', borderColor: 'border-amber-200' },
  boundaries: { label: 'Boundaries', color: 'bg-pink-50', borderColor: 'border-pink-200' },
  play: { label: 'Play & Boredom', color: 'bg-blue-50', borderColor: 'border-blue-200' },
  gifts: { label: 'Gifts & Generosity', color: 'bg-purple-50', borderColor: 'border-purple-200' },
  mindset: { label: 'Mindset', color: 'bg-teal-50', borderColor: 'border-teal-200' },
};
