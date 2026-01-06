"use client";

import { useState, useEffect } from "react";
import { X, ThumbsUp, ThumbsDown, ChevronRight, RotateCcw, Sparkles, Zap } from "lucide-react";
import { Guide, Strategy } from "@/data/guides";
import { useStrategyAnalytics } from "@/hooks/useStrategyAnalytics";

interface GuideModalProps {
  guide: Guide;
  onClose: () => void;
}

export default function GuideModal({ guide, onClose }: GuideModalProps) {
  const { recordRating, getStrategyStats } = useStrategyAnalytics();
  const [currentStrategyIndex, setCurrentStrategyIndex] = useState(0);
  const [step, setStep] = useState<"guide" | "feedback">("guide");
  const [rating, setRating] = useState<number | null>(null);
  const [stats, setStats] = useState<any>(null);

  // Load history on mount
  useEffect(() => {
    const history = localStorage.getItem(`kandu_guide_${guide.id}`);
    if (history) {
      const data = JSON.parse(history);
      // If last rating was bad (< 3), try the next strategy
      // If last rating was good (>= 3), stick with what worked
      if (data.lastRating && data.lastRating < 3) {
        const nextIndex = (data.lastStrategyIndex + 1) % guide.strategies.length;
        setCurrentStrategyIndex(nextIndex);
      } else {
        setCurrentStrategyIndex(data.lastStrategyIndex || 0);
      }
    }
  }, [guide.id, guide.strategies.length]);

  const strategy = guide.strategies[currentStrategyIndex];

  useEffect(() => {
    const strategyStats = getStrategyStats(strategy.id, guide.id);
    setStats(strategyStats);
  }, [currentStrategyIndex, strategy.id, guide.id, getStrategyStats]);

  const handleRate = (score: number) => {
    setRating(score);
    
    // Record in analytics
    recordRating(strategy.id, strategy.name, guide.id, guide.label, score);
    
    // Save to memory
    const historyData = {
      lastStrategyIndex: currentStrategyIndex,
      lastRating: score,
      timestamp: Date.now()
    };
    localStorage.setItem(`kandu_guide_${guide.id}`, JSON.stringify(historyData));
    
    setStep("feedback");
  };

  const nextStrategy = () => {
    const nextIndex = (currentStrategyIndex + 1) % guide.strategies.length;
    setCurrentStrategyIndex(nextIndex);
    setStep("guide");
  };

  if (!strategy) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center pointer-events-none pb-20 sm:pb-0">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto" onClick={onClose} />
      
      {/* Modal Card */}
      <div className="bg-white w-full max-w-md rounded-t-[2.5rem] sm:rounded-[2.5rem] p-8 shadow-2xl pointer-events-auto relative overflow-hidden overflow-y-auto max-h-[85vh] animate-in slide-in-from-bottom-10 duration-300">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-6 right-6 p-2 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-500">
            <X size={20} />
        </button>

        {step === "guide" ? (
            <>
                {/* Self-Regulation Reminder */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 flex gap-3">
                    <div className="text-2xl shrink-0">🧘</div>
                    <div>
                        <p className="font-bold text-amber-900 text-sm">Before you respond:</p>
                        <p className="text-xs text-amber-800 mt-1">Take a deep breath. Regulate yourself first. Your calm is contagious.</p>
                    </div>
                </div>

                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="text-4xl">{guide.emoji}</span>
                        <div className="flex-1">
                            <h2 className="text-2xl font-black text-gray-900">{guide.label}</h2>
                            <div className="flex items-center gap-2 text-teal-600 text-sm font-bold">
                                <Sparkles size={14} />
                                <span>Trying: {strategy.name}</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Community Effectiveness Badge */}
                    {stats && stats.totalRatings >= 2 && (
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 flex items-center gap-2">
                            <Zap size={16} className="text-blue-600" />
                            <div className="flex-1">
                                <p className="text-xs font-bold text-blue-900">
                                    {stats.effectivenessPercent}% effectiveness
                                </p>
                                <p className="text-xs text-blue-700">
                                    {stats.successRatings} of {stats.totalRatings} parents found this helpful
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Steps */}
                <div className="space-y-4 mb-8">
                    {strategy.steps.map((text, i) => (
                        <div key={i} className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 font-bold flex items-center justify-center shrink-0 mt-1">
                                {i + 1}
                            </div>
                            <p className="text-lg font-medium text-gray-800 leading-relaxed">{text}</p>
                        </div>
                    ))}
                </div>

                {/* Why Section (Collapsible-ish) */}
                <div className="bg-gray-50 p-4 rounded-2xl mb-8 border border-gray-100">
                    <p className="text-sm text-gray-500 italic">"{strategy.why}"</p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                        <button 
                            onClick={() => handleRate(1)}
                            className="py-4 rounded-2xl border-2 border-gray-200 font-bold text-gray-400 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-500 transition-colors"
                        >
                            Didn't Work
                        </button>
                        <button 
                            onClick={() => handleRate(5)}
                            className="py-4 rounded-2xl bg-teal-500 text-white font-bold shadow-lg shadow-teal-200 active:scale-95 transition-transform"
                        >
                            It Worked!
                        </button>
                    </div>
                    
                    <button 
                        onClick={() => {
                            const subject = `Learn More: ${strategy.name} for ${guide.label}`;
                            const body = `I'd like to learn more about this strategy and why it might work. Please send me: ${strategy.name}\n\nWhy: ${strategy.why}`;
                            window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                        }}
                        className="w-full py-3 rounded-xl border-2 border-blue-200 bg-blue-50 text-blue-700 font-bold hover:bg-blue-100 transition text-sm"
                    >
                        📧 Email Me These Steps
                    </button>
                </div>
            </>
        ) : (
            <div className="text-center py-8">
                {rating && rating > 3 ? (
                    <>
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <ThumbsUp size={40} />
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 mb-2">Great job!</h3>
                        <p className="text-gray-500 mb-8">We'll remember that this strategy works for {guide.label}.</p>
                        <button onClick={onClose} className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold">
                            Close
                        </button>
                    </>
                ) : (
                    <>
                        <div className="w-20 h-20 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <RotateCcw size={40} />
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 mb-2">That's okay.</h3>
                        <p className="text-gray-500 mb-8">Every situation is different. Next time, we'll suggest a different approach.</p>
                        <div className="space-y-3">
                            <button onClick={nextStrategy} className="w-full py-4 bg-teal-500 text-white rounded-2xl font-bold shadow-lg shadow-teal-200">
                                See Alternative Now
                            </button>
                            <button onClick={onClose} className="w-full py-4 text-gray-400 font-bold">
                                Close
                            </button>
                        </div>
                    </>
                )}
            </div>
        )}
      </div>
    </div>
  );
}
