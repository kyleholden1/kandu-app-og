"use client";

import { ChevronLeft, Zap, TrendingUp, Lightbulb, BookOpen } from "lucide-react";
import Link from "next/link";
import { useStrategyAnalytics } from "@/hooks/useStrategyAnalytics";
import { GUIDES, COMMON_STRUGGLES_LIST } from "@/data/guides";
import { useEffect, useState } from "react";

export default function AskHeereGuide() {
  const { isLoaded, getTopStrategies, getCommonStruggles, getMostEffectiveStrategy } = useStrategyAnalytics();
  const [topStrategies, setTopStrategies] = useState<any[]>([]);
  const [commonStruggles, setCommonStruggles] = useState<any[]>([]);
  const [selectedStruggle, setSelectedStruggle] = useState<string | null>(null);
  const [effectiveStrategy, setEffectiveStrategy] = useState<any>(null);

  useEffect(() => {
    if (!isLoaded) return;

    setTopStrategies(getTopStrategies(3));
    const struggles = getCommonStruggles();
    setCommonStruggles(struggles);
  }, [isLoaded, getTopStrategies, getCommonStruggles]);

  useEffect(() => {
    if (!selectedStruggle || !isLoaded) return;
    const strategy = getMostEffectiveStrategy(selectedStruggle);
    setEffectiveStrategy(strategy);
  }, [selectedStruggle, isLoaded, getMostEffectiveStrategy]);

  const selectedGuide = selectedStruggle ? GUIDES[selectedStruggle] : null;

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-white pt-4 pb-6 px-6 rounded-b-[2.5rem] shadow-sm mb-6 flex items-center gap-3">
        <Link
          href="/sos"
          className="p-2 hover:bg-gray-100 rounded-full transition"
        >
          <ChevronLeft size={24} className="text-gray-400" />
        </Link>
        <div>
          <h1 className="text-2xl font-black text-gray-900">Ask Heere</h1>
          <p className="text-gray-400 font-bold text-xs uppercase tracking-wider">
            Community-Powered Insights
          </p>
        </div>
      </div>

      <div className="px-6 space-y-8">
        {/* Top Tip Section */}
        {topStrategies.length > 0 && (
          <section>
            <h2 className="text-lg font-extrabold text-gray-800 mb-4 flex items-center gap-2">
              <TrendingUp size={20} className="text-teal-600" />
              What's Working for Others
            </h2>
            <div className="space-y-3">
              {topStrategies.map((stat) => {
                const guide = GUIDES[stat.guideId];
                return (
                  <div
                    key={`${stat.guideId}_${stat.strategyId}`}
                    className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-4 border border-teal-100"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">{guide?.emoji}</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900">{stat.strategyName}</h3>
                        <p className="text-sm text-gray-600 mt-1">For {guide?.label}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-teal-600 h-2 rounded-full transition-all"
                              style={{ width: `${stat.effectivenessPercent}%` }}
                            />
                          </div>
                          <span className="text-xs font-bold text-teal-700">
                            {stat.effectivenessPercent}%
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {stat.successRatings} of {stat.totalRatings} parents found it helpful
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Most Common Struggles */}
        {commonStruggles.length > 0 && (
          <section>
            <h2 className="text-lg font-extrabold text-gray-800 mb-4 flex items-center gap-2">
              <Zap size={20} className="text-rose-600" />
              Most Common Challenges
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {commonStruggles.slice(0, 6).map(({ guideId, count }) => {
                const guide = GUIDES[guideId];
                return (
                  <button
                    key={guideId}
                    onClick={() => setSelectedStruggle(guideId)}
                    className={`p-4 rounded-2xl border-2 transition-all ${
                      selectedStruggle === guideId
                        ? "bg-rose-100 border-rose-400"
                        : "bg-white border-gray-100 hover:border-gray-200"
                    }`}
                  >
                    <div className="text-2xl mb-2">{guide?.emoji}</div>
                    <p className="font-bold text-gray-900 text-sm">{guide?.label}</p>
                    <p className="text-xs text-gray-500">{count} feedback</p>
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {/* Selected Struggle Details */}
        {selectedGuide && effectiveStrategy && (
          <section className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm">
            <h2 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
              <Lightbulb size={24} className="text-blue-600" />
              Best Strategy for {selectedGuide.label}
            </h2>

            <div className="bg-blue-50 rounded-xl p-4 mb-4">
              <p className="text-sm font-bold text-blue-900 mb-1">
                {effectiveStrategy.strategyName}
              </p>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-blue-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all"
                    style={{ width: `${effectiveStrategy.effectivenessPercent}%` }}
                  />
                </div>
                <span className="text-xs font-bold text-blue-700">
                  {effectiveStrategy.effectivenessPercent}%
                </span>
              </div>
              <p className="text-xs text-blue-700 mt-2">
                {effectiveStrategy.successRatings} of {effectiveStrategy.totalRatings} parents had
                success with this
              </p>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              Based on feedback from {effectiveStrategy.totalRatings} parents who tried this strategy,
              it has a <strong>{effectiveStrategy.effectivenessPercent}% success rate.</strong>
            </p>

            <Link
              href="/sos"
              className="w-full bg-teal-500 text-white py-3 rounded-xl font-bold text-center hover:bg-teal-600 transition"
            >
              Try This Strategy in SOS
            </Link>
          </section>
        )}

        {/* Info Section */}
        {isLoaded && topStrategies.length === 0 && (
          <section className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
            <div className="flex items-start gap-3">
              <BookOpen size={24} className="text-amber-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-amber-900 mb-2">Building Knowledge Base</h3>
                <p className="text-sm text-amber-800">
                  As parents use SOS strategies and rate what works, Heere learns the most effective approaches.
                  The more feedback, the smarter these recommendations become.
                </p>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
