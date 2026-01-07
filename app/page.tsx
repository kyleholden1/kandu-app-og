'use client';

import { useState } from 'react';
import { useUserData } from '@/hooks/useUserData';
import BottomNav from '@/components/BottomNav';

export default function Home() {
  const { userData, recordCheckIn, recordPracticeCompleted, isPracticeCompletedToday, getLevel } = useUserData();
  const [checkInRating, setCheckInRating] = useState(3);
  const [showCheckIn, setShowCheckIn] = useState(false);

  const handleCheckInSubmit = () => {
    recordCheckIn(checkInRating);
    setShowCheckIn(false);
  };

  const handlePracticeStart = () => {
    recordPracticeCompleted('daily-practice');
  };

  const practiceCompleted = isPracticeCompletedToday('daily-practice');

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-nest-600 text-white p-6 rounded-b-2xl">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-black">🦜 The Nest</h1>
          <div className="text-right">
            <div className="text-sm opacity-75">Level</div>
            <div className="text-2xl font-black">{getLevel()}</div>
          </div>
        </div>
        <p className="text-nest-100 text-sm">Your daily hub for regulation and practice</p>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Daily Streak */}
        <div className="bg-nest-50 border-2 border-nest-200 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600">Current Streak</div>
              <div className="text-3xl font-black text-nest-600">{userData.streak}</div>
              <div className="text-xs text-gray-500 mt-1">days in a row</div>
            </div>
            <div className="text-4xl">🔥</div>
          </div>
        </div>

        {/* Daily Practice */}
        <div className="space-y-2">
          <h2 className="font-bold text-gray-900">Daily Practice</h2>
          <p className="text-sm text-gray-600">Today's focus: Grounding technique for calm mornings</p>
          <button
            onClick={handlePracticeStart}
            disabled={practiceCompleted}
            className={`w-full py-3 px-4 rounded-lg font-semibold transition ${
              practiceCompleted
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-nest-600 text-white hover:bg-nest-700'
            }`}
          >
            {practiceCompleted ? '✓ Completed Today' : 'Start Practice'}
          </button>
        </div>

        {/* Check-in */}
        <div className="space-y-2">
          <h2 className="font-bold text-gray-900">How's It Going?</h2>
          <p className="text-sm text-gray-600">Rate your regulation level</p>

          {!showCheckIn ? (
            <button
              onClick={() => setShowCheckIn(true)}
              className="w-full py-3 px-4 bg-nest-100 border-2 border-nest-300 rounded-lg font-semibold text-nest-700 hover:bg-nest-200 transition"
            >
              Start Check-in
            </button>
          ) : (
            <div className="space-y-3 bg-nest-50 p-4 rounded-lg">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>😤 Struggling</span>
                  <span>😌 Thriving</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={checkInRating}
                  onChange={(e) => setCheckInRating(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-center text-2xl">{['😤', '😐', '😊', '😄', '😌'][checkInRating - 1]}</div>
              </div>
              <button
                onClick={handleCheckInSubmit}
                className="w-full py-2 bg-nest-600 text-white rounded-lg font-semibold hover:bg-nest-700 transition"
              >
                Submit Check-in
              </button>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="text-xs text-gray-600 mb-1">Total Check-ins</div>
            <div className="text-2xl font-black text-gray-900">{userData.totalCheckIns}</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="text-xs text-gray-600 mb-1">Last Rating</div>
            <div className="text-2xl font-black text-gray-900">
              {userData.lastCheckInRating ? ['😤', '😐', '😊', '😄', '😌'][userData.lastCheckInRating - 1] : '—'}
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
