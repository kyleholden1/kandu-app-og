export type Strategy = {
    id: string;
    name: string;
    steps: string[];
    why: string;
};
  
export type Guide = {
    id: string;
    label: string;
    emoji: string;
    strategies: Strategy[];
};
  
export const GUIDES: Record<string, Guide> = {
    "Hitting": {
      id: "Hitting",
      label: "Hitting",
      emoji: "👊",
      strategies: [
        {
          id: "firm_boundary",
          name: "The Firm Boundary",
          steps: [
            "Block the hit gently but firmly.",
            "Say: \"I won't let you hit. Hitting hurts.\"",
            "Move them away from the person they hit."
          ],
          why: "Safety comes first. You are showing you can keep everyone safe."
        },
        {
            id: "connection",
            name: "Connection First",
            steps: [
              "Get below their eye level.",
              "Say: \"You look really mad. You wanted that toy?\"",
              "Hold their hands gently if they try to swing again."
            ],
            why: "They might be hitting because they feel unheard. Validate the feeling, stop the action."
        },
        {
            id: "environment",
            name: "The Reset",
            steps: [
              "Say nothing.",
              "Pick them up calmly.",
              "Move to a completely different room/outside."
            ],
            why: "Their brain is overloaded. They need a change of scene to reset."
        }
      ]
    },
    "Tantrums": {
        id: "Tantrums",
        label: "Tantrums",
        emoji: "😡",
        strategies: [
          {
            id: "presence",
            name: "Calm Presence",
            steps: [
              "Sit nearby on the floor.",
              "Say: \"I'm here. You're safe. Let it out.\"",
              "Wait. Do not fix it."
            ],
            why: "They need to offload the emotion. Your calm keeps them safe."
          },
          {
              id: "comfort",
              name: "The Hug",
              steps: [
                "Open your arms wide.",
                "Say: \"Do you need a hug?\"",
                "Squeeze tight/deep pressure if they accept."
              ],
              why: "Deep pressure can calm the nervous system quickly."
          }
        ]
      },
    "Biting": {
      id: "Biting",
      label: "Biting",
      emoji: "🦷",
      strategies: [
        {
          id: "prevent_mouth",
          name: "The Mouth Guard",
          steps: [
            "Watch for the buildup (clenched jaw, intense focus).",
            "Gently guide their hand to your arm instead: \"Bite me, not them.\"",
            "Praise immediately: \"Good choice, gentle teeth.\""
          ],
          why: "Redirection is easier than correction. They want to bite—help them do it safely."
        },
        {
          id: "teach_words",
          name: "Use Your Words",
          steps: [
            "After they calm down, say: \"Biting means 'NO.' Let's use words.\"",
            "Teach them: \"Say 'NO!' or 'MINE!' instead.\"",
            "Practice the words together multiple times."
          ],
          why: "Biting is often how they say 'no' or 'get away.' Give them better tools."
        },
        {
          id: "understand_need",
          name: "The Need Behind It",
          steps: [
            "Observe: Are they teething? Overstimulated? Tired?",
            "Address the root: Give a teething ring, reduce stimulation, or offer rest.",
            "Say: \"Your body needed something. Let's find what.\""
          ],
          why: "Biting often signals an unmet physical or sensory need."
        }
      ]
    },
    "Sharing": {
      id: "Sharing",
      label: "Sharing",
      emoji: "🧸",
      strategies: [
        {
          id: "rotation",
          name: "The Timer Strategy",
          steps: [
            "Set a timer for 5 minutes.",
            "Say: \"Your turn now. When the timer goes, it's their turn.\"",
            "When it beeps: \"Timer says it's [name]'s turn now.\"",
            "Praise both kids."
          ],
          why: "Toddlers can't share on command. A timer makes it concrete and fair."
        },
        {
          id: "parallel_play",
          name: "Parallel, Not Shared",
          steps: [
            "Get a second toy (same or similar).",
            "Set them up side by side.",
            "Say: \"You both have a truck. You can play next to each other.\""
          ],
          why: "Before age 3, 'sharing' is unrealistic. Parallel play is the bridge."
        },
        {
          id: "special_toys",
          name: "Special Toys Stay Safe",
          steps: [
            "Let them pick 1-2 toys that don't have to be shared.",
            "Put those in a special box or shelf.",
            "Everything else is 'community toys' that rotate.",
            "Say: \"This is [toy]. It takes turns with everyone.\""
          ],
          why: "Giving them control over some toys makes sharing feel less like losing."
        }
      ]
    },
    "Eating": {
      id: "Eating",
      label: "Eating",
      emoji: "🥦",
      strategies: [
        {
          id: "division_responsibility",
          name: "Your Job, Their Job",
          steps: [
            "You decide: what, when, where.",
            "They decide: whether, how much.",
            "Put food on the table. Don't comment on what they eat.",
            "Say: \"I make sure there's good food. You decide what you want.\""
          ],
          why: "When you control eating, they learn to ignore hunger. Let them be in charge of their body."
        },
        {
          id: "food_exposure",
          name: "No Pressure, Lots of Exposure",
          steps: [
            "Serve one 'safe' food they always eat.",
            "Add 2-3 new foods on the side, no pressure.",
            "Don't comment. Let them watch you eat happily.",
            "Accept licks, nibbles, or no touching for months."
          ],
          why: "Kids need 10-15 exposures to new foods before they try. Pressure backfires."
        },
        {
          id: "sensory_play",
          name: "Food Play (Not Waste)",
          steps: [
            "Let them touch, squish, smell, lick foods before eating.",
            "Make 'food art' with approved foods.",
            "Let them use their hands, get messy.",
            "Say: \"You're learning about this food.\""
          ],
          why: "Sensory exploration is how toddlers learn to accept new foods."
        }
      ]
    },
    "Sleep": {
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
            "Dimmed lights 30 min before bed."
          ],
          why: "Toddler brains thrive on predictability. The routine = sleep cue."
        },
        {
          id: "limit_protest",
          name: "The Boring Response",
          steps: [
            "Child: \"I want water!\" / \"One more book!\"",
            "You: \"It's sleep time.\" (emotionless, flat voice)",
            "Return them to bed. No talking. No eye contact.",
            "Repeat as needed, same response every time."
          ],
          why: "Drama (yelling, reasoning) is a reward. Boring removes the payoff."
        },
        {
          id: "sleepy_signs",
          name: "Catch the Window",
          steps: [
            "Watch for: yawning, rubbing eyes, getting clumsy.",
            "Start routine right away. Don't wait until they're wired.",
            "An overtired toddler fights sleep for 2+ hours.",
            "Aim for bedtime when they're drowsy, not asleep."
          ],
          why: "There's a 20-minute 'sweet spot.' Miss it, and sleep becomes a battle."
        }
      ]
    },
    "Travel": {
      id: "Travel",
      label: "Travel",
      emoji: "✈️",
      strategies: [
        {
          id: "prep_expectations",
          name: "Set Expectations Early",
          steps: [
            "Days before: \"We're going on a car/plane. You'll sit in your seat.\"",
            "Look at pictures: \"This is the airport.\" \"This is the car ride.\"",
            "Role-play: Act out buckling up, sitting still.",
            "Say: \"It might feel long, and that's okay.\""
          ],
          why: "Surprises freak out toddlers. Preparation = calm."
        },
        {
          id: "movement_breaks",
          name: "Built-In Movement Breaks",
          steps: [
            "For long drives: Pull over every 45-60 min. Let them run.",
            "For planes: Walk the aisles, use the bathroom, stretch.",
            "For waiting: Find an empty hallway, let them climb/move.",
            "Pack activities for sitting time (stickers, snacks, new toys)."
          ],
          why: "Toddlers have limited sitting capacity. Movement breaks prevent meltdown."
        },
        {
          id: "minimal_rules",
          name: "Lower Your Expectations",
          steps: [
            "Forget good manners. Focus on safe.",
            "Safe = Stays in seat/with you, doesn't hurt people, doesn't destroy property.",
            "Everything else is allowed (messy eating, loud, toys everywhere).",
            "Say: \"Travel is survival mode. We're doing great.\""
          ],
          why: "You can't control toddler behavior on a 6-hour flight. You can only accept it."
        }
      ]
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
            "Use a washcloth or spray bottle instead of pouring from above."
          ],
          why: "Water over the face feels like drowning to a toddler. Go slow."
        },
        {
          id: "play_first",
          name: "Bath = Play, Not Cleaning",
          steps: [
            "Fill tub. Let them play for 10 min before any washing.",
            "Cups, funnels, toys, splashing—whatever they want.",
            "Then gently wash during the fun (they're distracted).",
            "Say: \"Play time first, wash time second.\""
          ],
          why: "A happy tub experience > a clean kid. Hygiene can happen later."
        },
        {
          id: "control_options",
          name: "Give Control Back",
          steps: [
            "\"Should we use the blue cup or red cup?\"",
            "\"Do you wash your arms, or should I?\"",
            "Let them pour water (even if inefficient).",
            "Praise their choices: \"You decided that!\""
          ],
          why: "Loss of control triggers fight. Offering choices = cooperation."
        }
      ]
    }
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
  ];
