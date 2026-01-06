"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, MessageCircle, ChevronRight, Zap, Sparkles, ChevronLeft } from "lucide-react";
import { COMMON_STRUGGLES_LIST, GUIDES } from "@/data/guides";
import { CONTEXT_QUESTIONS } from "@/data/contextQuestions";
import { mergeCustomStrategies } from "@/data/customKnowledge";
import GuideModal from "@/components/GuideModal";
import AskHeereModal from "@/components/AskHeereModal";

export default function SOSPage() {
  const mergedGuides = useMemo(() => mergeCustomStrategies(GUIDES), []);
  const [input, setInput] = useState("");
  const [selectedGuideId, setSelectedGuideId] = useState<string | null>(null);
  const [showContextQuestions, setShowContextQuestions] = useState(false);
  const [contextAnswers, setContextAnswers] = useState<Record<string, string>>({});
  const [showAskHeere, setShowAskHeere] = useState(false);

  const handleGuideClick = (label: string) => {
    // Check if we have full data for this guide
    if (mergedGuides[label]) {
      setSelectedGuideId(label);
      setShowContextQuestions(true);
      setContextAnswers({});
    } else {
      alert("Guide content coming soon!");
    }
  };

  const handleContextAnswer = (questionId: string, answer: string) => {
    setContextAnswers({ ...contextAnswers, [questionId]: answer });
  };

  const contextQuestions = selectedGuideId ? CONTEXT_QUESTIONS[selectedGuideId] || [] : [];

  return (
    <div className="flex flex-col h-screen bg-rose-50/50 pb-20">
      {/* Header */}
      <div className="pt-12 px-6 pb-6 bg-white shadow-sm rounded-b-3xl z-10">
        <div className="flex items-center gap-3 mb-2">
            <div className="bg-rose-100 p-2 rounded-full">
                <Zap className="text-rose-500 fill-rose-500" size={20} />
            </div>
            <h1 className="text-2xl font-black text-gray-900">SOS Mode</h1>
        </div>
        <p className="text-gray-500 font-medium">Performing Zone Support</p>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Quick Chips Grid */}
        <div className="p-6">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Quick Guides</h2>
            <div className="grid grid-cols-2 gap-3">
                {COMMON_STRUGGLES_LIST.map((item) => (
                <button 
                    key={item.label}
                    className="bg-white p-4 rounded-2xl shadow-sm border border-rose-100 flex items-center justify-between active:scale-95 active:bg-rose-50 transition-all duration-200"
                    onClick={() => handleGuideClick(item.label)}
                >
                    <div className="flex items-center gap-3">
                        <span className="text-2xl">{item.emoji}</span>
                        <span className="font-bold text-gray-700">{item.label}</span>
                    </div>
                    <ChevronRight size={16} className="text-rose-200" />
                </button>
                ))}
            </div>
        </div>

        {/* Ask Heere Button */}
        <div className="px-6 pb-6">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Ask Heere</h2>
            <button 
                onClick={() => setShowAskHeere(true)}
                className="bg-white p-4 rounded-2xl shadow-lg border border-rose-100 flex items-center gap-3 active:scale-95 transition-transform w-full"
            >
                <div className="p-3 bg-rose-100 rounded-full shrink-0">
                    <Sparkles size={20} className="text-rose-500" />
                </div>
                <div className="flex-1 text-left">
                    <p className="font-bold text-gray-900">Community Insights</p>
                    <p className="text-xs text-gray-500">See what's working for others</p>
                </div>
                <ChevronRight size={20} className="text-rose-300 shrink-0" />
            </button>
        </div>
      </div>

      {/* Context Questions Modal */}
      {selectedGuideId && showContextQuestions && contextQuestions.length > 0 && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center pointer-events-none pb-20 sm:pb-0">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto" onClick={() => setShowContextQuestions(false)} />
          
          <div className="bg-white w-full max-w-md rounded-t-[2.5rem] sm:rounded-[2.5rem] p-8 shadow-2xl pointer-events-auto relative overflow-hidden overflow-y-auto max-h-[85vh]">
            <button 
              onClick={() => setShowContextQuestions(false)}
              className="absolute top-6 left-6 p-2 hover:bg-gray-100 rounded-full"
            >
              <ChevronLeft size={24} className="text-gray-600" />
            </button>

            <h2 className="text-2xl font-black text-gray-900 mb-6 text-center">
              Tell me more
            </h2>

            <div className="space-y-6">
              {contextQuestions.map((q) => (
                <div key={q.id}>
                  <p className="font-bold text-gray-800 mb-3">{q.question}</p>
                  {q.help && (
                    <p className="text-xs text-gray-500 mb-3 italic">{q.help}</p>
                  )}
                  <div className="space-y-2">
                    {q.options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleContextAnswer(q.id, option)}
                        className={`w-full p-3 rounded-xl border-2 transition text-left font-medium ${
                          contextAnswers[q.id] === option
                            ? 'bg-rose-100 border-rose-400 text-rose-900'
                            : 'bg-white border-gray-200 text-gray-800 hover:border-gray-300'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowContextQuestions(false)}
              disabled={contextQuestions.some((q) => !contextAnswers[q.id])}
              className="w-full mt-8 bg-rose-500 text-white py-4 rounded-xl font-bold disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-rose-600 transition"
            >
              Get Support
            </button>
          </div>
        </div>
      )}

      {/* Guide Modal */}
      {selectedGuideId && !showContextQuestions && mergedGuides[selectedGuideId] && (
        <GuideModal 
            guide={mergedGuides[selectedGuideId]} 
            onClose={() => {
              setSelectedGuideId(null);
              setContextAnswers({});
            }} 
        />
      )}

      {/* Ask Heere Modal */}
      {showAskHeere && <AskHeereModal onClose={() => setShowAskHeere(false)} />}
    </div>
  );
}
