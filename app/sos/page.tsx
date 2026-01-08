'use client';

import { useState } from 'react';
import { GUIDES, COMMON_STRUGGLES_LIST } from '@/data/guides';
import { useUserData } from '@/hooks/useUserData';
import BottomNav from '@/components/BottomNav';
import { X, ChevronRight } from 'lucide-react';

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
      setSelectedContext(null);
    }
  };

  const handleCheckInSubmit = () => {
    recordCheckIn(checkInRating);
    setShowCheckIn(false);
  };

  const contextQuestions: Record<string, string[]> = {
    Hitting: ['Getting their attention', 'Excited/overstimulated', 'Tired or frustrated', 'Testing boundaries'],
    Tantrums: ['Tired', 'Hungry', 'Overstimulated', 'Wants something specific'],
    Biting: ['Teething', 'Overstimulated', 'Tired', 'Wants attention'],
    Sharing: ["Won't share their toys", 'Wants what someone else has', 'Playing together', 'Sibling conflict'],
    Eating: ['Refusing to eat', 'Being picky', 'Eating too fast', 'Throwing food'],
    Sleep: ['Won\'t go to bed', 'Waking up at night', 'Early morning wake', 'Fighting naps'],
    Travel: ['Car rides', 'Flying', 'Restaurant/public', 'New places'],
    'Bath Time': ['Scared of water', 'Won\'t get in', 'Won\'t get out', 'Sensitive to temperature'],
  };

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-sos-600 text-white p-6 rounded-b-3xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">🆘</span>
          <h1 className="text-2xl font-black">SOS Mode</h1>
        </div>
        <p className="text-sos-100 text-sm">Performing Zone Support</p>
      </div>

      {/* Content */}
      <div className="p-6">
        {!selectedStruggle ? (
          // HOME VIEW
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

            {/* Quick Guides */}
            <div>
              <h3 className="font-bold text-gray-900 mb-3 uppercase text-xs tracking-wider">Quick Guides</h3>
              <div className="grid grid-cols-2 gap-3">
                {COMMON_STRUGGLES_LIST.map(({ emoji, label }) => (
                  <button
                    key={label}
                    onClick={() => setSelectedStruggle(label)}
                    className="flex items-center justify-between gap-3 p-4 bg-white border-2 border-gray-200 rounded-full hover:border-sos-300 hover:bg-sos-50 transition"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{emoji}</span>
                      <span className="font-semibold text-gray-900">{label}</span>
                    </div>
                    <ChevronRight size={18} className="text-gray-400" />
                  </button>
                ))}
              </div>
            </div>

            {/* Ask Heere */}
            <div>
              <h3 className="font-bold text-gray-900 mb-3 uppercase text-xs tracking-wider">Ask Heere</h3>
              <button className="w-full flex items-center justify-between gap-3 p-4 bg-white border-2 border-gray-200 rounded-2xl hover:border-sos-300 hover:bg-sos-50 transition">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🦜</span>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900">Community Insights</h4>
                    <p className="text-xs text-gray-600">See what's working for others</p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-gray-400" />
              </button>
            </div>
          </div>
        ) : selectedStrategyId && selectedStrategy ? (
          // STRATEGY VIEW
          <div className="space-y-4">
            <button
              onClick={() => setSelectedStrategyId(null)}
              className="text-sos-600 text-sm font-semibold hover:underline"
            >
              ← Back
            </button>

            <div className="bg-white rounded-3xl p-6 space-y-4">
              {/* Yellow warning box */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <p className="text-sm text-yellow-800">
                  <span className="font-semibold">Before you respond:</span> Take a deep breath. Regulate yourself first. Your calm is contagious.
                </p>
              </div>

              {/* Strategy header */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{guide?.emoji}</span>
                  <h2 className="text-xl font-black text-gray-900">{selectedStrategy.name}</h2>
                </div>
                <p className="text-sm text-teal-600 font-semibold">✨ Trying: {selectedStrategy.name}</p>
              </div>

              {/* Steps */}
              <div className="space-y-3">
                {selectedStrategy.steps.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-teal-600">{i + 1}</span>
                    </div>
                    <p className="text-sm text-gray-700 pt-1">{step}</p>
                  </div>
                ))}
              </div>

              {/* Why */}
              <div className="italic text-sm text-gray-600 bg-gray-50 p-3 rounded">
                "{selectedStrategy.why}"
              </div>

              {/* Buttons */}
              <div className="space-y-3 pt-2">
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleRateStrategy(1)}
                    className="py-3 px-4 border-2 border-gray-300 rounded-full font-semibold text-gray-700 hover:bg-gray-50 transition"
                  >
                    Didn't Work
                  </button>
                  <button
                    onClick={() => handleRateStrategy(5)}
                    className="py-3 px-4 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition"
                  >
                    It Worked!
                  </button>
                </div>
                <button className="w-full py-3 px-4 border-2 border-blue-300 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition">
                  📧 Email Me These Steps
                </button>
              </div>
            </div>
          </div>
        ) : selectedStruggle && guide ? (
          // CONTEXT MODAL
          <div className="fixed inset-0 bg-black/40 flex items-end z-50">
            <div className="bg-white rounded-t-3xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-4">
              <button
                onClick={() => setSelectedStruggle(null)}
                className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
              >
                <X size={24} />
              </button>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{guide.emoji}</span>
                <h2 className="text-2xl font-black text-gray-900">Tell me more</h2>
              </div>

              <p className="text-gray-700 font-semibold">What's the {guide.label.toLowerCase()} situation?</p>

              <div className="space-y-3">
                {contextQuestions[guide.label]?.map((question) => (
                  <button
                    key={question}
                    onClick={() => {
                      // For now, just show first strategy. In production, might filter based on context
                      setSelectedStrategyId(guide.strategies[0].id);
                    }}
                    className="w-full py-4 px-4 border-2 border-gray-200 rounded-xl text-gray-700 hover:border-sos-300 hover:bg-sos-50 transition font-medium"
                  >
                    {question}
                  </button>
                ))}
              </div>

              <button
                onClick={() => {
                  setSelectedStrategyId(guide.strategies[0].id);
                }}
                className="w-full py-4 px-4 bg-gray-300 text-gray-500 rounded-xl font-semibold cursor-not-allowed"
              >
                Get Support
              </button>
            </div>
          </div>
        ) : null}
      </div>

      <BottomNav />
    </div>
  );
}
