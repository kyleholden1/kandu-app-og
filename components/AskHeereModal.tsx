"use client";

import { X, Zap, TrendingUp, Lightbulb, BookOpen, ChevronLeft } from "lucide-react";
import { useStrategyAnalytics } from "@/hooks/useStrategyAnalytics";
import { GUIDES } from "@/data/guides";
import { useEffect, useState } from "react";

interface AskHeereModalProps {
  onClose: () => void;
}

export default function AskHeereModal({ onClose }: AskHeereModalProps) {
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
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center pointer-events-none pb-20 sm:pb-0">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto" onClick={onClose} />

      <div className="bg-white w-full max-w-md rounded-t-[2.5rem] sm:rounded-[2.5rem] p-8 shadow-2xl pointer-events-auto relative overflow-hidden overflow-y-auto max-h-[85vh]">
        <button
          onClick={onClose}
          className="absolute top-6 left-6 p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronLeft size={24} className="text-gray-600" />
        </button>

        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full hover:bg-gray-200"
        >
          <X size={20} className="text-gray-500" />
        </button>

        <h1 className="text-2xl font-black text-gray-900 mb-8 text-center pt-4">
          Ask Heere
        </h1>

        {/* Top Tip Section */}
        {topStrategies.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-extrabold text-gray-800 mb-4 flex items-center gap-2">
              <TrendingUp size={20} className="text-teal-600" />
              What's Working
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
                        <h3 className="font-bold text-gray-900 text-sm">{stat.strategyName}</h3>
                        <p className="text-xs text-gray-600 mt-1">For {guide?.label}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-teal-600 h-2 rounded-full"
                              style={{ width: `${stat.effectivenessPercent}%` }}
                            />
                          </div>
                          <span className="text-xs font-bold text-teal-700">
                            {stat.effectivenessPercent}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Most Common Struggles */}
        {commonStruggles.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-extrabold text-gray-800 mb-4 flex items-center gap-2">
              <Zap size={20} className="text-rose-600" />
              Most Common
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {commonStruggles.slice(0, 4).map(({ guideId, count }) => {
                const guide = GUIDES[guideId];
                return (
                  <button
                    key={guideId}
                    onClick={() => setSelectedStruggle(guideId)}
                    className={`p-3 rounded-xl border-2 transition-all text-sm ${
                      selectedStruggle === guideId
                        ? "bg-rose-100 border-rose-400"
                        : "bg-white border-gray-100 hover:border-gray-200"
                    }`}
                  >
                    <div className="text-xl mb-1">{guide?.emoji}</div>
                    <p className="font-bold text-gray-900 text-xs">{guide?.label}</p>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Selected Struggle Details */}
        {selectedGuide && effectiveStrategy && (
          <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <h3 className="text-sm font-bold text-blue-900 mb-3 flex items-center gap-2">
              <Lightbulb size={16} className="text-blue-600" />
              Best for {selectedGuide.label}
            </h3>
            <p className="text-xs font-bold text-blue-900 mb-2">
              {effectiveStrategy.strategyName}
            </p>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex-1 bg-blue-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${effectiveStrategy.effectivenessPercent}%` }}
                />
              </div>
              <span className="text-xs font-bold text-blue-700">
                {effectiveStrategy.effectivenessPercent}%
              </span>
            </div>
            <p className="text-xs text-blue-700">
              {effectiveStrategy.successRatings}/{effectiveStrategy.totalRatings} parents found success
            </p>
          </div>
        )}

        {isLoaded && topStrategies.length === 0 && (
          <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200">
            <div className="flex items-start gap-3">
              <BookOpen size={20} className="text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-amber-900 mb-1">Building Knowledge</p>
                <p className="text-xs text-amber-800">
                  As parents rate strategies, smarter recommendations appear here.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
