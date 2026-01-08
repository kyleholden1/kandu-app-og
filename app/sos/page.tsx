'use client';

import { useState } from 'react';
import { GUIDES, COMMON_STRUGGLES_LIST } from '@/data/guides';
import { useUserData } from '@/hooks/useUserData';
import BottomNav from '@/components/BottomNav';

export default function SOSPage() {
  const [selectedStruggle, setSelectedStruggle] = useState<string | null>(null);
  const [selectedStrategyId, setSelectedStrategyId] = useState<string | null>(null);
  const [checkInRating, setCheckInRating] = useState(3);
  const [showCheckIn, setShowCheckIn] = useState(false);
  const { rateStrategy, userData, recordCheckIn } = useUserData();

  const guide = selectedStruggle ? GUIDES[selectedStruggle] : null;
  const selectedStrategy = guide?.strategies.find((s) => s.id === selectedStrategyId);

  const handleRateStrategy = (rating: number) => {
    if (selectedStrategyId) {
      rateStrategy(selectedStrategyId, rating);
      setSelectedStrategyId(null);
      setSelectedStruggle(null);
    }
  };

  const handleCheckInSubmit = () => {
    recordCheckIn(checkInRating);
    setShowCheckIn(false);
  };

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-sos-600 text-white p-6 rounded-b-2xl">
        <h1 className="text-2xl font-black mb-2">🆘 SOS Mode</h1>
        <p className="text-sos-100 text-sm">Immediate support when challenges happen</p>
      </div>

      {/* Content */}
      <div className="p-6">
        {!selectedStruggle ? (
          // Home view: Streak, Check-in, and Struggles
          <div className="space-y-6">
            {/* Current Streak */}
            <div className="bg-sos-50 border-2 border-sos-200 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-600">Current Streak</div>
                  <div className="text-3xl font-black text-sos-600">{userData.streak}</div>
                  <div className="text-xs text-gray-500 mt-1">days in a row</div>
                </div>
                <div className="text-4xl">🔥</div>
              </div>
            </div>

            {/* Check-in */}
            <div className="space-y-2">
              <h2 className="font-bold text-gray-900">How's It Going?</h2>
              <p className="text-sm text-gray-600">Rate your regulation level</p>

              {!showCheckIn ? (
                <button
                  onClick={() => setShowCheckIn(true)}
                  className="w-full py-3 px-4 bg-sos-100 border-2 border-sos-300 rounded-lg font-semibold text-sos-700 hover:bg-sos-200 transition"
                >
                  Start Check-in
                </button>
              ) : (
                <div className="space-y-3 bg-sos-50 p-4 rounded-lg">
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
                    className="w-full py-2 bg-sos-600 text-white rounded-lg font-semibold hover:bg-sos-700 transition"
                  >
                    Submit Check-in
                  </button>
                </div>
              )}
            </div>

            {/* Struggles */}
            <div>
              <h3 className="font-bold text-gray-900 mb-3">What's happening?</h3>
              <div className="grid grid-cols-2 gap-3">
            {COMMON_STRUGGLES_LIST.map(({ emoji, label }) => (
              <button
                key={label}
                onClick={() => setSelectedStruggle(label)}
                className="flex flex-col items-center gap-2 p-4 bg-gray-50 hover:bg-sos-50 border-2 border-gray-200 hover:border-sos-300 rounded-lg transition"
              >
                <span className="text-3xl">{emoji}</span>
                <span className="text-sm font-semibold text-gray-900">{label}</span>
              </button>
            ))}
             </div>
            </div>
            </div>
            ) : guide ? (
          // Strategies for selected struggle
          <div className="space-y-4">
            <button
              onClick={() => setSelectedStruggle(null)}
              className="text-sos-600 text-sm font-semibold hover:underline"
            >
              ← Back
            </button>

            <h2 className="text-xl font-black text-gray-900">{guide.emoji} {guide.label}</h2>

            {!selectedStrategyId ? (
              <div className="space-y-3">
                {guide.strategies.map((strategy) => (
                  <button
                    key={strategy.id}
                    onClick={() => setSelectedStrategyId(strategy.id)}
                    className="w-full p-4 text-left bg-sos-50 border-2 border-sos-200 rounded-lg hover:bg-sos-100 transition"
                  >
                    <h3 className="font-bold text-gray-900 mb-1">{strategy.name}</h3>
                    <p className="text-sm text-gray-600">{strategy.why}</p>
                  </button>
                ))}
              </div>
            ) : selectedStrategy ? (
              // Strategy details
              <div className="space-y-4 bg-sos-50 p-4 rounded-lg border-2 border-sos-200">
                <h3 className="text-lg font-bold text-gray-900">{selectedStrategy.name}</h3>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Steps:</h4>
                  <ol className="space-y-2">
                    {selectedStrategy.steps.map((step, i) => (
                      <li key={i} className="flex gap-3 text-sm text-gray-700">
                        <span className="font-bold text-sos-600">{i + 1}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="bg-white p-3 rounded-lg border border-sos-200">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Why: </span>
                    {selectedStrategy.why}
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-900">Did this work?</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleRateStrategy(5)}
                      className="flex-1 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
                    >
                      ✓ It Worked!
                    </button>
                    <button
                      onClick={() => handleRateStrategy(1)}
                      className="flex-1 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition"
                    >
                      ✗ Didn't Work
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedStrategyId(null)}
                  className="w-full py-2 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition"
                >
                  Try Another
                </button>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>

      <BottomNav />
    </div>
  );
}
