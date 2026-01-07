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

export type UserData = {
  level: number;
  totalCheckIns: number;
  streak: number;
  lastActiveDate: string;
  lastCheckInRating?: number;
  practicesCompleted: Record<string, string>; // date -> practice id
  strategyRatings: Record<string, number>; // strategyId -> rating (1-5, 0 = not rated)
  streamContentCompleted: Record<string, boolean>; // contentId -> completed
};

export type StreamContent = {
  id: string;
  title: string;
  category: "meditation" | "science" | "activity";
  duration?: number; // seconds
  description: string;
  content: string;
  color: string;
};

export type DailyPractice = {
  id: string;
  title: string;
  description: string;
  category: string;
};
