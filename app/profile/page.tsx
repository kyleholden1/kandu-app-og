"use client";

import { Trophy, Star, Flame } from "lucide-react";
import { useUserData } from "@/hooks/useUserData";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const { userData, isLoaded, getStreakDays } = useUserData();
  const [streakDays, setStreakDays] = useState(0);
  const [weekDays, setWeekDays] = useState<boolean[]>([]);

  useEffect(() => {
    if (!isLoaded) return;

    const streak = getStreakDays();
    setStreakDays(streak);

    // Get last 7 days activity
    const today = new Date();
    const last7Days = [];
    const activeDates = new Set([
      ...userData.practicesCompleted,
      ...userData.checkInHistory.map((c) => c.date),
    ]);

    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split("T")[0];
      last7Days.push(activeDates.has(dateStr));
    }

    setWeekDays(last7Days);
  }, [isLoaded, userData, getStreakDays]);

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <div className="bg-amber-400 pt-12 pb-12 px-6 rounded-b-[2.5rem] shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-20">
            <Trophy size={120} className="text-amber-900" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center text-4xl mb-4 border-4 border-white shadow-md">
                🦜
            </div>
            <h1 className="text-2xl font-black text-amber-950">Parenting Apprentice</h1>
            <div className="flex items-center gap-2 mt-2 bg-amber-500/30 px-4 py-1 rounded-full border border-amber-500/20">
                <Star size={16} className="text-amber-900" fill="currentColor" />
                <p className="text-amber-900 font-bold text-sm">Level {Math.floor(userData.checkInHistory.length / 5) + 1} • Learning Zone</p>
            </div>
        </div>
      </div>

      <div className="px-6 -mt-8">
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-amber-50">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-800 flex items-center gap-2">
                    <Flame className="text-orange-500 fill-orange-500" size={20} />
                    Weekly Streak
                </h3>
                <span className="text-xs font-bold bg-orange-100 text-orange-600 px-2 py-1 rounded-md">{streakDays} Days!</span>
            </div>
            
            <div className="flex justify-between">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 group">
                         <span className="text-xs text-gray-400 font-bold group-hover:text-amber-500 transition">{day}</span>
                         <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${weekDays[i] ? 'bg-amber-400 text-amber-950 shadow-md scale-105' : 'bg-gray-100 text-gray-300'}`}>
                             {weekDays[i] ? '✓' : ''}
                         </div>
                     </div>
                ))}
            </div>
        </div>
      </div>

      <div className="px-6 mt-6">
        <h3 className="font-bold text-gray-800 mb-3 ml-2">Badges</h3>
        <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl p-4 aspect-square flex flex-col items-center justify-center gap-2 border border-gray-100 shadow-sm grayscale hover:grayscale-0 transition-all duration-500">
                    <Trophy size={32} className="text-teal-500" />
                    <span className="text-[10px] font-bold text-gray-400 text-center">Coming Soon</span>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
