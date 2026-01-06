import { Guide, Strategy } from "./guides";

export const CUSTOM_STRATEGIES: Record<string, Strategy[]> = {
  Hitting: [
    {
      id: "pause_regulate_self",
      name: "Pause & Regulate Yourself First",
      steps: [
        "The moment you feel frustration rising, pause",
        "Take 3-5 deep breaths or count to 20 slowly",
        "Step away briefly if needed: 'I need a moment'",
        "Now respond, don't react"
      ],
      why: "Your calm is contagious. Children absorb our emotions like sponges. When you regulate first, you model emotional control and teach them it's possible."
    },
    {
      id: "acknowledge_feelings",
      name: "Acknowledge the Feeling Behind It",
      steps: [
        "Before jumping to correction, validate their emotion",
        "Say: 'I see you're really frustrated. That makes sense because [reason]'",
        "Wait for them to feel heard",
        "Now address the behavior"
      ],
      why: "Kids hit when they feel unheard or overwhelmed. Validating the feeling first makes them more receptive to guidance."
    },
    {
      id: "yes_based_language",
      name: "Yes-Based Language",
      steps: [
        "Instead of: 'Stop hitting!' say 'You can use your words or come get me when you need help'",
        "Instead of: 'Don't be rough!' say 'I see you want to play hard—let's use soft hands or go jump outside'",
        "Give clear direction of what they CAN do",
        "Praise when they do it"
      ],
      why: "Telling kids what NOT to do doesn't teach them what TO do. Yes-based language gives them a clear alternative behavior."
    }
  ],
  Tantrums: [
    {
      id: "check_own_emotions",
      name: "Check Your Own Emotions First",
      steps: [
        "Before responding to a tantrum, notice your own feelings",
        "If you're angry or anxious, your child will absorb it",
        "Take a few deep breaths or step away briefly",
        "Come back when you feel grounded and calm"
      ],
      why: "Your emotional state sets the tone for the entire interaction. Children need you to be their calm anchor, not another source of worry."
    },
    {
      id: "validate_all_reactions",
      name: "Validate All Reactions",
      steps: [
        "Some kids cry and ask questions → Answer honestly and simply",
        "Some kids joke or seem distracted → Normal defense mechanism",
        "Some kids go quiet → Their way of coping",
        "Say: 'All your feelings are okay. I'm here'"
      ],
      why: "Not all children process emotions the same way. Your job is to stay present and available, not to fix their feelings."
    },
    {
      id: "distress_signals",
      name: "Watch for Distress Signals",
      steps: [
        "Watch for: red face, vomiting, trembling, sobbing uncontrollably",
        "When you see these, pause everything else",
        "First: calm their nervous system (hold them, move to quiet space)",
        "Then: address the situation once they're regulated"
      ],
      why: "Some tantrums are signs of serious overwhelm. You need to co-regulate their nervous system first, then teach."
    }
  ],
  Biting: [
    {
      id: "yes_based_language",
      name: "Yes-Based Language for Biting",
      steps: [
        "Instead of: 'Don't bite!' say 'You can bite the teething ring or this washcloth'",
        "Offer immediate alternatives when you see the urge",
        "Praise: 'Good choice! You bit the ring instead'",
        "Keep safe chew toys nearby"
      ],
      why: "Kids bite for sensory reasons. Redirecting to appropriate outlets works faster than punishment."
    }
  ],
  Sleep: [
    {
      id: "prepare_preview",
      name: "Prepare & Preview the Routine",
      steps: [
        "Days before any routine change, let them know what's coming",
        "Walk through it step-by-step: 'Bath, then pajamas, then book, then bed'",
        "Repetition helps them adjust to what's coming",
        "Say: 'Being nervous is okay. We'll do this together'"
      ],
      why: "Surprises and uncertainty trigger resistance. Preview reduces anxiety and increases cooperation."
    },
    {
      id: "boundaries_with_choice",
      name: "Boundaries with Choice",
      steps: [
        "State the boundary: 'We're going to sleep now'",
        "Offer choice within it: 'Will you walk to bed, or should I carry you?'",
        "Or: 'Do you want the blue blanket or the red one?'",
        "Or: 'Should we read 1 book or 2?'"
      ],
      why: "Kids resist boundaries they don't choose. Offering choice within limits gives them autonomy and reduces power struggles."
    }
  ],
  Sharing: [
    {
      id: "yes_based_language",
      name: "Yes-Based Language for Sharing",
      steps: [
        "Instead of: 'You have to share!' say 'You can use it now, then [friend] gets a turn'",
        "Set a timer so it's concrete",
        "When timer goes: 'Timer says it's [friend]'s turn now'",
        "Praise both kids for rotating"
      ],
      why: "Young kids can't share on command. A timer makes it concrete, fair, and not a character judgment."
    }
  ],
  Eating: [
    {
      id: "yes_based_language",
      name: "Yes-Based Language for Eating",
      steps: [
        "Instead of: 'You have to eat your vegetables!' try 'You can eat the carrots or the broccoli'",
        "Give choices within the meal",
        "Don't comment on what they eat (good/bad)",
        "Model enjoying the food yourself"
      ],
      why: "When you control what/how much they eat, they learn to ignore hunger. Offering choice within healthy options teaches them to listen to their body."
    }
  ],
  Travel: [
    {
      id: "pause_regulate_self",
      name: "Regulate Yourself First",
      steps: [
        "Travel with kids is stressful. Expect chaos.",
        "Take deep breaths when you feel your patience wearing thin",
        "Remember: 'Travel is survival mode. We're doing great'",
        "Your calm keeps them calmer"
      ],
      why: "Kids feed off your stress. If you can stay grounded, they'll be less reactive to the travel experience."
    }
  ],
  "Bath Time": [
    {
      id: "boundaries_with_choice",
      name: "Boundaries with Choice in Bath",
      steps: [
        "Boundary: 'It's bath time now'",
        "Choice: 'Do you want to walk to the tub or should I carry you?'",
        "Or: 'Blue cup or yellow cup?'",
        "Or: 'Do you want to wash your arms, or should I?'"
      ],
      why: "Loss of control triggers fight. Offering meaningful choices increases cooperation and teaches decision-making."
    }
  ]
};

/**
 * Merge custom strategies with existing guides
 * This function is used by the SOS page to combine defaults + custom knowledge
 */
export function mergeCustomStrategies(defaultGuides: Record<string, Guide>): Record<string, Guide> {
  const merged = { ...defaultGuides };

  Object.entries(CUSTOM_STRATEGIES).forEach(([guideName, customStrategies]) => {
    if (merged[guideName]) {
      // Add custom strategies to existing guide
      merged[guideName].strategies = [
        ...merged[guideName].strategies,
        ...customStrategies
      ];
    }
  });

  return merged;
}
