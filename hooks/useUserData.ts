"use client";

import { useState, useEffect } from "react";

export interface UserData {
  lastCheckInDate: string | null;
  checkInHistory: Array<{ date: string; rating: number }>;
  practicesCompleted: string[]; // dates of completed practices
  streakDays: number;
}

const DEFAULT_USER_DATA: UserData = {
  lastCheckInDate: null,
  checkInHistory: [],
  practicesCompleted: [],
  streakDays: 0,
};

const STORAGE_KEY = "kandu_user_data";

export function useUserData() {
  const [userData, setUserData] = useState<UserData>(DEFAULT_USER_DATA);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setUserData(JSON.parse(stored));
      } catch {
        setUserData(DEFAULT_USER_DATA);
      }
    }
    setIsLoaded(true);
  }, []);

  const saveUserData = (newData: UserData) => {
    setUserData(newData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
  };

  const submitCheckIn = (rating: number) => {
    const today = new Date().toISOString().split("T")[0];
    
    const updatedData = { ...userData };
    updatedData.checkInHistory = [
      ...updatedData.checkInHistory,
      { date: today, rating }
    ];
    updatedData.lastCheckInDate = today;

    // Update streak
    updatedData.streakDays = calculateStreak([
      ...updatedData.practicesCompleted,
      today
    ]);

    saveUserData(updatedData);
  };

  const completePractice = () => {
    const today = new Date().toISOString().split("T")[0];
    
    const updatedData = { ...userData };
    if (!updatedData.practicesCompleted.includes(today)) {
      updatedData.practicesCompleted.push(today);
      updatedData.streakDays = calculateStreak(updatedData.practicesCompleted);
    }

    saveUserData(updatedData);
  };

  const getStreakDays = () => {
    const allActiveDates = [
      ...new Set([
        ...userData.practicesCompleted,
        ...userData.checkInHistory.map((c) => c.date),
      ]),
    ].sort();

    return calculateStreak(allActiveDates);
  };

  return {
    userData,
    isLoaded,
    submitCheckIn,
    completePractice,
    getStreakDays,
  };
}

function calculateStreak(dates: string[]): number {
  if (dates.length === 0) return 0;

  const sorted = [...new Set(dates)].sort().reverse();
  const today = new Date().toISOString().split("T")[0];
  const yesterday = new Date(Date.now() - 86400000)
    .toISOString()
    .split("T")[0];

  let streak = 0;
  let currentDate = today;

  for (const date of sorted) {
    if (date === currentDate) {
      streak++;
      currentDate = new Date(new Date(currentDate).getTime() - 86400000)
        .toISOString()
        .split("T")[0];
    } else {
      break;
    }
  }

  return streak;
}
