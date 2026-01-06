export type ContextQuestion = {
  id: string;
  guideId: string;
  question: string;
  options: string[];
  help?: string;
};

export const CONTEXT_QUESTIONS: Record<string, ContextQuestion[]> = {
  Hitting: [
    {
      id: "target",
      guideId: "Hitting",
      question: "Who are they hitting?",
      options: ["Me (the parent)", "A sibling", "Another adult", "A friend/peer", "Themselves"],
      help: "Context helps us suggest the best approach. Each situation calls for slightly different handling.",
    },
    {
      id: "trigger",
      guideId: "Hitting",
      question: "What triggered it?",
      options: [
        "Frustration or anger",
        "Not getting what they want",
        "Playing/roughhousing",
        "Overstimulated",
        "Not sure",
      ],
    },
  ],
  Tantrums: [
    {
      id: "location",
      guideId: "Tantrums",
      question: "Where is this happening?",
      options: ["At home", "In public", "During a transition", "Before bed", "During meals"],
    },
    {
      id: "trigger",
      guideId: "Tantrums",
      question: "What seems to trigger it?",
      options: [
        "Saying 'no'",
        "Transitions/changes",
        "Tired/hungry",
        "Not getting attention",
        "Unknown",
      ],
    },
  ],
  Biting: [
    {
      id: "target",
      guideId: "Biting",
      question: "Who or what are they biting?",
      options: ["Another child", "An adult", "Toys/objects", "Themselves", "Animals"],
    },
  ],
  Sharing: [
    {
      id: "situation",
      guideId: "Sharing",
      question: "What's the sharing situation?",
      options: [
        "Won't share their toys",
        "Wants what someone else has",
        "Playing together",
        "Structured playdate",
        "Sibling conflict",
      ],
    },
  ],
  Eating: [
    {
      id: "issue",
      guideId: "Eating",
      question: "What's the eating challenge?",
      options: [
        "Picky eater",
        "Won't try new foods",
        "Refuses entire meals",
        "Too slow",
        "Wants junk food only",
      ],
    },
  ],
  Sleep: [
    {
      id: "issue",
      guideId: "Sleep",
      question: "What's the sleep struggle?",
      options: [
        "Won't fall asleep",
        "Keeps getting out of bed",
        "Too late bedtime",
        "Wakes up at night",
        "Refuses naps",
      ],
    },
  ],
  Travel: [
    {
      id: "type",
      guideId: "Travel",
      question: "What kind of travel?",
      options: ["Car ride", "Airplane", "Waiting (airport/restaurant)", "Hotel stay", "New place"],
    },
  ],
  "Bath Time": [
    {
      id: "issue",
      guideId: "Bath Time",
      question: "What's the bath time challenge?",
      options: [
        "Refuses to get in",
        "Won't get out",
        "Afraid of water/hair wash",
        "Splashes/messy",
        "Fights getting cleaned",
      ],
    },
  ],
};
