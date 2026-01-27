import { Guide } from "@/lib/types";

export const GUIDES: Record<string, Guide> = {
  Hitting: {
    id: "Hitting",
    label: "Hitting",
    emoji: "👊",
    strategies: [
      {
        id: "firm_boundary",
        name: "The Firm Boundary",
        steps: [
          "Safety: Block the hit gently but firmly. Say: \"I won't let you hit. Hitting hurts.\"",
          "Connection: Get down to their level and acknowledge the feeling: \"You're really upset.\"",
          "Problem-solving: Move them away from the situation and offer an alternative: \"Let's use our words\" or \"Let's go outside to get the wiggles out.\"",
        ],
        why: "Safety comes first, then connection, then problem-solving. This approach keeps everyone safe while honoring their emotions.",
      },
      {
        id: "connection",
        name: "Connection First",
        steps: [
          "Safety: Step in between them if needed to prevent harm.",
          "Connection: Get below their eye level and validate: \"You look really mad. You wanted that toy?\"",
          "Problem-solving: Help them problem-solve: \"You want it. They have it. What could we do?\"",
        ],
        why: "They might be hitting because they feel unheard. This approach validates their need while stopping the action.",
      },
      {
        id: "environment",
        name: "The Reset",
        steps: [
          "Safety: Calmly remove them from the situation.",
          "Connection: Say little; let your calm presence comfort them.",
          "Problem-solving: Once calm, talk about what happened and what they could do differently next time.",
        ],
        why: "Their brain is overloaded. A change of scene resets their nervous system. Talk when they can listen.",
      },
    ],
  },
  Tantrums: {
    id: "Tantrums",
    label: "Tantrums",
    emoji: "😡",
    strategies: [
      {
        id: "presence",
        name: "Calm Presence",
        steps: [
          "Safety: Ensure they can't hurt themselves or others. Sit nearby on the floor.",
          "Connection: Say little: \"I'm here. You're safe. I'm staying with you.\"",
          "Problem-solving: Wait. Do not fix it, explain, or reason. Let them offload the emotion first.",
        ],
        why: "They need to offload the emotion. Your calm keeps them safe while honoring their big feelings.",
      },
      {
        id: "comfort",
        name: "The Hug",
        steps: [
          "Safety: Make sure you're in a safe space where flailing arms won't hurt anyone.",
          "Connection: Open your arms wide and ask: \"Do you need a hug?\"",
          "Problem-solving: Offer deep pressure if they accept. Use a firm squeeze rather than a loose hug.",
        ],
        why: "Deep pressure activates the calming response. Connection through touch can reset their nervous system.",
      },
    ],
  },
  Biting: {
    id: "Biting",
    label: "Biting",
    emoji: "🦷",
    strategies: [
      {
        id: "prevent_mouth",
        name: "The Mouth Guard",
        steps: [
          "Safety: Watch for the buildup (clenched jaw, intense focus). Intervene before the bite happens.",
          "Connection: Gently guide their hand to your arm instead: \"You need to bite. Bite me, not them.\"",
          "Problem-solving: Praise immediately: \"Good choice. You used a safe mouth.\"",
        ],
        why: "Redirection is easier than correction. You're keeping everyone safe while honoring their need to bite.",
      },
      {
        id: "teach_words",
        name: "Use Your Words",
        steps: [
          "Safety: If they bite, calmly separate them and prevent further biting.",
          "Connection: Once calm, say: \"Biting means you need something. Let's find out what.\"",
          "Problem-solving: Teach them: \"You can say 'NO!' or 'MINE!' instead. Practice with me.\" Practice the words together multiple times.",
        ],
        why: "Biting is often how they say 'no' or 'get away.' Give them better tools during calm moments.",
      },
      {
        id: "understand_need",
        name: "The Need Behind It",
        steps: [
          "Safety: Prevent harm first. Separate and soothe any victim.",
          "Connection: Notice patterns. Are they teething? Overstimulated? Tired? Seeking attention?",
          "Problem-solving: Address the root: Give a teething ring, reduce stimulation, offer rest, or schedule more one-on-one time.",
        ],
        why: "Biting signals an unmet physical or sensory need. Solving the root prevents the behavior.",
      },
    ],
  },
  Sharing: {
    id: "Sharing",
    label: "Sharing",
    emoji: "🧸",
    strategies: [
      {
        id: "rotation",
        name: "The Timer Strategy",
        steps: [
          "Safety: Prevent fighting by setting clear expectations. Set a timer for 5 minutes.",
          "Connection: Say: \"Your turn now. When the timer goes, it's their turn. We both get a turn.\"",
          "Problem-solving: When it beeps, calmly pass the toy: \"Timer says it's [name]'s turn now.\" Praise both kids for cooperating.",
        ],
        why: "Toddlers can't share on command. A timer makes fairness concrete. You're keeping peace while teaching turn-taking.",
      },
      {
        id: "parallel_play",
        name: "Parallel, Not Shared",
        steps: [
          "Safety: Prevent conflict before it starts by getting a second toy.",
          "Connection: Set them up side by side and narrate: \"You both want a truck. You can each play.\"",
          "Problem-solving: Let them play independently. No sharing required yet.",
        ],
        why: "Before age 3, true sharing is unrealistic. Parallel play is the development bridge to sharing.",
      },
      {
        id: "special_toys",
        name: "Special Toys Stay Safe",
        steps: [
          "Safety: Let them pick 1-2 toys that don't have to be shared and stay off-limits.",
          "Connection: Put those in a special box or shelf and acknowledge: \"This is YOUR toy. It's safe here.\"",
          "Problem-solving: Everything else is 'community toys' that rotate. This gives them control while teaching generosity.",
        ],
        why: "Giving them control over some toys makes sharing feel less like losing everything. They learn generosity from a place of security.",
      },
    ],
  },
  Eating: {
    id: "Eating",
    label: "Eating",
    emoji: "🥦",
    strategies: [
      {
        id: "division_responsibility",
        name: "Your Job, Their Job",
        steps: [
          "Safety: You decide what, when, and where food is served. This keeps nutrition in your control.",
          "Connection: Trust their body. They decide whether to eat, how much, and what.",
          "Problem-solving: Put food on the table without commentary. Say: \"I make sure there's good food. You decide what you want.\" Let them lead.",
        ],
        why: "When you control eating, they learn to ignore hunger and fullness cues. Trusting their body builds healthy eating patterns.",
      },
      {
        id: "food_exposure",
        name: "No Pressure, Lots of Exposure",
        steps: [
          "Safety: Ensure there's always one 'safe' food they eat. No one goes hungry.",
          "Connection: Add 2-3 new foods on the side with zero pressure. Let them watch you eat happily and enjoy it.",
          "Problem-solving: Accept licks, nibbles, or no touching for months. Kids need 10-15 exposures before they try.",
        ],
        why: "Pressure backfires. Exposure + zero expectation = eventual acceptance. Your calm enjoyment teaches them food is safe.",
      },
      {
        id: "sensory_play",
        name: "Food Play (Not Waste)",
        steps: [
          "Safety: Set boundaries: What's okay to touch vs. what isn't.",
          "Connection: Let them explore: touch, squish, smell, lick. This is learning, not waste.",
          "Problem-solving: Make 'food art' and let them get messy. Say: \"You're learning about this food.\" This builds familiarity and acceptance.",
        ],
        why: "Sensory exploration is how toddlers learn to accept new foods. Play precedes eating.",
      },
    ],
  },
  Sleep: {
    id: "Sleep",
    label: "Sleep",
    emoji: "💤",
    strategies: [
      {
        id: "routine_anchor",
        name: "The Consistent Routine",
        steps: [
          "Same time every night (within 15 min).",
          "Same 4-5 steps in the same order: bath → pajamas → book → song → bed.",
          "No variation. No negotiations.",
          "Dimmed lights 30 min before bed.",
        ],
        why: "Toddler brains thrive on predictability. The routine = sleep cue.",
      },
      {
        id: "limit_protest",
        name: "The Boring Response",
        steps: [
          'Child: "I want water!" / "One more book!"',
          'You: "It\'s sleep time." (emotionless, flat voice)',
          "Return them to bed. No talking. No eye contact.",
          "Repeat as needed, same response every time.",
        ],
        why: "Drama (yelling, reasoning) is a reward. Boring removes the payoff.",
      },
      {
        id: "sleepy_signs",
        name: "Catch the Window",
        steps: [
          "Watch for: yawning, rubbing eyes, getting clumsy.",
          "Start routine right away. Don't wait until they're wired.",
          "An overtired toddler fights sleep for 2+ hours.",
          "Aim for bedtime when they're drowsy, not asleep.",
        ],
        why: "There's a 20-minute 'sweet spot.' Miss it, and sleep becomes a battle.",
      },
    ],
  },
  Travel: {
    id: "Travel",
    label: "Travel",
    emoji: "✈️",
    strategies: [
      {
        id: "prep_expectations",
        name: "Set Expectations Early",
        steps: [
          'Days before: "We\'re going on a car/plane. You\'ll sit in your seat."',
          'Look at pictures: "This is the airport." "This is the car ride."',
          "Role-play: Act out buckling up, sitting still.",
          'Say: "It might feel long, and that\'s okay."',
        ],
        why: "Surprises freak out toddlers. Preparation = calm.",
      },
      {
        id: "movement_breaks",
        name: "Built-In Movement Breaks",
        steps: [
          "For long drives: Pull over every 45-60 min. Let them run.",
          "For planes: Walk the aisles, use the bathroom, stretch.",
          "For waiting: Find an empty hallway, let them climb/move.",
          "Pack activities for sitting time (stickers, snacks, new toys).",
        ],
        why: "Toddlers have limited sitting capacity. Movement breaks prevent meltdown.",
      },
      {
        id: "minimal_rules",
        name: "Lower Your Expectations",
        steps: [
          "Forget good manners. Focus on safe.",
          "Safe = Stays in seat/with you, doesn't hurt people, doesn't destroy property.",
          "Everything else is allowed (messy eating, loud, toys everywhere).",
          'Say: "Travel is survival mode. We\'re doing great."',
        ],
        why: "You can't control toddler behavior on a 6-hour flight. You can only accept it.",
      },
    ],
  },
  "Bath Time": {
    id: "Bath Time",
    label: "Bath Time",
    emoji: "🛁",
    strategies: [
      {
        id: "water_anxiety",
        name: "Respect Water Fear",
        steps: [
          "Start shallow (2 inches). No pressure to go deeper.",
          "Let them pour water on themselves (control).",
          "Skip the face/head wash for a few weeks if needed.",
          "Use a washcloth or spray bottle instead of pouring from above.",
        ],
        why: "Water over the face feels like drowning to a toddler. Go slow.",
      },
      {
        id: "play_first",
        name: "Bath = Play, Not Cleaning",
        steps: [
          "Fill tub. Let them play for 10 min before any washing.",
          "Cups, funnels, toys, splashing—whatever they want.",
          "Then gently wash during the fun (they're distracted).",
          'Say: "Play time first, wash time second."',
        ],
        why: "A happy tub experience > a clean kid. Hygiene can happen later.",
      },
      {
        id: "control_options",
        name: "Give Control Back",
        steps: [
          'Say: "Should we use the blue cup or red cup?"',
          'Say: "Do you wash your arms, or should I?"',
          "Let them pour water (even if inefficient).",
          'Praise their choices: "You decided that!"',
        ],
        why: "Loss of control triggers fight. Offering choices = cooperation.",
      },
    ],
  },
  "Repeating Questions": {
    id: "Repeating Questions",
    label: "Repeating Questions",
    emoji: "🔁",
    strategies: [
      {
        id: "connection_seeking",
        name: "Recognize She's Seeking Connection",
        steps: [
          "When she repeats a question, pause and consider: Is she actually needing information, or seeking reassurance/connection?",
          "Notice patterns: Does she ask more when tired, anxious, or during transitions?",
          'Name what you observe: "You\'ve asked me that a few times. I think maybe you\'re feeling worried/excited/uncertain about [specific thing]. Want to talk about that?"',
          "Shift focus from answering the question to addressing the underlying emotion.",
          "Offer connection: a hug, cuddle time, or focused attention to meet what she really needs.",
        ],
        why: "Repetitive questions are usually a bid for connection or processing anxiety, not a real information gap. Addressing the root need stops the loop.",
      },
      {
        id: "reset_boundary",
        name: "The Reset Boundary",
        steps: [
          "Answer the question the first time warmly and fully.",
          'If it comes again, answer with: "I\'ve already answered that one. I\'m going to answer one more time, then we\'re done with that question for today."',
          "Answer it the second time exactly the same way.",
          'If asked a third time, kindly but firmly: "That\'s our limit for today. I know it\'s hard to let it go. Want to talk about why you keep thinking about it?"',
          "Hold the boundary with empathy—don't re-answer, but do validate her feelings.",
        ],
        why: "Clear limits prevent endless loops. Three-strike rule teaches that repetition doesn't change answers, but it also signals you're listening to her worry.",
      },
      {
        id: "self_soothing_ritual",
        name: "Redirect the Self-Soothing Ritual",
        steps: [
          "Recognize that repeating familiar questions can be a self-soothing ritual (like a comfort behavior).",
          "Don't shame it—she's managing her own anxiety the only way she knows how.",
          "Offer alternative rituals: deep breaths, squeezing a stress ball, counting something, or drawing.",
          'Try: "I see you need to calm down right now. Let\'s do [breathing/movement/sensory activity] instead."',
          'Over time, help her build awareness: "Your body asks questions when you\'re nervous. What does your body need instead?"',
        ],
        why: "Repetitive questions are anxiety management. Offering healthier self-soothing tools addresses the real need without fighting the symptom.",
      },
      {
        id: "question_the_question",
        name: "Question the Question",
        steps: [
          "When she repeats a question, get curious instead of just answering.",
          'Ask: "I\'ve told you this before. What made you think about it again just now?"',
          "Listen for the real worry underneath: Is it about fairness, control, safety, timing, or something changing?",
          'Once you name it, address that: "It sounds like you\'re worried [real concern]. Let\'s talk about that."',
          "Answer the actual concern, not just the surface question.",
        ],
        why: "Repetitive questions hide real concerns. Investigating the 'why' prevents endless circular answering and solves the actual problem.",
      },
      {
        id: "self_regulate_first",
        name: "Regulate Your Own Frustration First",
        steps: [
          "Notice when her repetition triggers your frustration or annoyance.",
          'Before responding, take a breath and regulate: "I\'m noticing I\'m getting impatient. That\'s about me, not her."',
          "Respond from calm, not reactivity—she'll feel your impatience and repeat more.",
          "Remember: She's not trying to bug you. Her brain is stuck on worry.",
          "Model what calm repetition looks like: answer the same way, same tone, same patience each time.",
        ],
        why: "Kids amplify parental frustration. Your regulated response teaches her nervous system it's safe to let go of the question.",
      },
    ],
  },
};

export const COMMON_STRUGGLES_LIST = [
  { emoji: "👊", label: "Hitting" },
  { emoji: "😡", label: "Tantrums" },
  { emoji: "🦷", label: "Biting" },
  { emoji: "🧸", label: "Sharing" },
  { emoji: "🥦", label: "Eating" },
  { emoji: "💤", label: "Sleep" },
  { emoji: "✈️", label: "Travel" },
  { emoji: "🛁", label: "Bath Time" },
  { emoji: "🔁", label: "Repeating Questions" },
];
