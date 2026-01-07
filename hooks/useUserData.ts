'use client';

import { useLocalStorage } from './useLocalStorage';
import { UserData } from '@/lib/types';
import { getDateKey } from '@/lib/utils';

const DEFAULT_USER_DATA: UserData = {
  level: 1,
  totalCheckIns: 0,
  streak: 0,
  lastActiveDate: '',
  practicesCompleted: {},
  strategyRatings: {},
  streamContentCompleted: {},
};

export function useUserData() {
  const [userData, setUserData] = useLocalStorage<UserData>(
    'kandu_user_data',
    DEFAULT_USER_DATA
  );

  const updateLevel = () => {
    setUserData({
      ...userData,
      level: Math.floor(userData.totalCheckIns / 5) + 1,
    });
  };

  const recordCheckIn = (rating: number) => {
    const today = getDateKey();
    const lastDate = userData.lastActiveDate;
    const newStreak =
      lastDate === getPreviousDate(today)
        ? userData.streak + 1
        : lastDate === today
          ? userData.streak
          : 1;

    const updatedData = {
      ...userData,
      totalCheckIns: userData.totalCheckIns + 1,
      lastCheckInRating: rating,
      streak: newStreak,
      lastActiveDate: today,
    };

    setUserData(updatedData);
    updateLevel();
  };

  const recordPracticeCompleted = (practiceId: string) => {
    const today = getDateKey();
    setUserData({
      ...userData,
      practicesCompleted: {
        ...userData.practicesCompleted,
        [today]: practiceId,
      },
    });
  };

  const rateStrategy = (strategyId: string, rating: number) => {
    setUserData({
      ...userData,
      strategyRatings: {
        ...userData.strategyRatings,
        [strategyId]: rating,
      },
    });
  };

  const markStreamContentCompleted = (contentId: string) => {
    setUserData({
      ...userData,
      streamContentCompleted: {
        ...userData.streamContentCompleted,
        [contentId]: true,
      },
    });
  };

  const isPracticeCompletedToday = (practiceId: string) => {
    const today = getDateKey();
    return userData.practicesCompleted[today] === practiceId;
  };

  const getStreak = () => userData.streak;
  const getLevel = () => userData.level;

  return {
    userData,
    recordCheckIn,
    recordPracticeCompleted,
    rateStrategy,
    markStreamContentCompleted,
    isPracticeCompletedToday,
    getStreak,
    getLevel,
  };
}

function getPreviousDate(dateKey: string): string {
  const date = new Date(dateKey);
  date.setDate(date.getDate() - 1);
  return getDateKey(date);
}
