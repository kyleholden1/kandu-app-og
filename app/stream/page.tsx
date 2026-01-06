"use client";

import { PlayCircle, BookOpen, Check, Pause } from "lucide-react";
import { useStreamData } from "@/hooks/useStreamData";
import { useState, useEffect } from "react";

const SCIENCE_DESCRIPTIONS: Record<string, string> = {
  "Why Toddlers Hit": "It's often an impulse control issue, not malice.",
  "The Power of 'Yet'": "Growth mindset changes brain plasticity.",
  "Mirror Neurons": "Why your calm creates their calm.",
};

const COLOR_MAP: Record<string, string> = {
  "The 5-Min Reset": "bg-teal-100 text-teal-800",
  "Deep Breathing": "bg-indigo-100 text-indigo-800",
  "Walking Meditation": "bg-emerald-100 text-emerald-800",
  "Sleep Prep": "bg-purple-100 text-purple-800",
};

export default function StreamPage() {
  const { items, isLoaded, markComplete, getCompletedCount } = useStreamData();
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [restCompleted, setRestCompleted] = useState(0);
  const [scienceCompleted, setScienceCompleted] = useState(0);

  useEffect(() => {
    if (!isLoaded) return;
    setRestCompleted(getCompletedCount("rest"));
    setScienceCompleted(getCompletedCount("science"));
  }, [isLoaded, items, getCompletedCount]);

  const handlePlayClick = (id: string, duration?: number) => {
    if (playingId === id) {
      setPlayingId(null);
    } else {
      setPlayingId(id);
      // Auto-mark complete after duration + 1 second
      if (duration) {
        setTimeout(() => {
          markComplete(id);
          setPlayingId(null);
          setRestCompleted((prev) => prev + 1);
        }, (duration + 1) * 1000);
      }
    }
  };

  const handleScienceClick = (id: string) => {
    markComplete(id);
    setScienceCompleted((prev) => prev + 1);
  };

  const restItems = items.filter((i) => i.category === "rest");
  const scienceItems = items.filter((i) => i.category === "science");

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-white pt-12 pb-6 px-6 rounded-b-[2.5rem] shadow-sm mb-6">
        <h1 className="text-2xl font-black text-gray-900 mb-1">The Stream</h1>
        <p className="text-gray-400 font-bold text-xs uppercase tracking-wider">Learning Zone Content</p>
      </div>

      <div className="space-y-8">
        {/* Rest Channel */}
        <section>
          <div className="flex items-center justify-between mb-4 px-6">
            <h2 className="text-lg font-extrabold text-gray-800 flex items-center gap-2">
              <span className="text-xl">🧘</span> Rest & Restore
              <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full font-bold">
                {restCompleted}/{restItems.length}
              </span>
            </h2>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="flex gap-4 overflow-x-auto pb-8 -mx-6 px-6 scrollbar-hide">
            {restItems.map((item) => {
              const colorClass = COLOR_MAP[item.title] || "bg-teal-100 text-teal-800";
              const isPlaying = playingId === item.id;
              const isCompleted = item.completed;

              return (
                <button
                  key={item.id}
                  onClick={() => handlePlayClick(item.id, item.duration)}
                  className={`min-w-[160px] h-48 rounded-3xl p-5 flex flex-col justify-between shrink-0 shadow-sm relative overflow-hidden transition-all duration-200 active:scale-95 ${
                    colorClass
                  } ${isPlaying ? "ring-2 ring-offset-2 ring-current" : ""} ${
                    isCompleted ? "opacity-60" : ""
                  }`}
                >
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>

                  <div className="flex justify-end relative z-10">
                    <div className="bg-white/30 p-2 rounded-full backdrop-blur-sm">
                      {isCompleted ? (
                        <Check size={24} className="opacity-80" />
                      ) : isPlaying ? (
                        <Pause size={24} className="opacity-80 animate-pulse" />
                      ) : (
                        <PlayCircle size={24} className="opacity-80" />
                      )}
                    </div>
                  </div>
                  <div className="relative z-10">
                    <span className="font-extrabold text-xl leading-tight block">{item.title}</span>
                    {item.duration && (
                      <span className="text-xs font-bold opacity-70 mt-1">
                        {Math.floor(item.duration / 60)}:{(item.duration % 60).toString().padStart(2, "0")}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Science Channel */}
        <section className="px-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-extrabold text-gray-800 flex items-center gap-2">
              <span className="text-xl">🧠</span> The Science
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-bold">
                {scienceCompleted}/{scienceItems.length}
              </span>
            </h2>
          </div>

          <div className="space-y-3">
            {scienceItems.map((item) => {
              const isCompleted = item.completed;
              return (
                <button
                  key={item.id}
                  onClick={() => handleScienceClick(item.id)}
                  className={`bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex gap-4 items-start active:scale-95 transition-all duration-200 w-full text-left ${
                    isCompleted ? "opacity-50 bg-gray-50" : ""
                  }`}
                >
                  <div
                    className={`p-3 rounded-xl shrink-0 transition-colors ${
                      isCompleted
                        ? "bg-gray-100 text-gray-400"
                        : "bg-blue-50 text-blue-500"
                    }`}
                  >
                    {isCompleted ? (
                      <Check size={24} />
                    ) : (
                      <BookOpen size={24} />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed font-medium">
                      {SCIENCE_DESCRIPTIONS[item.title] || "Interesting parenting science."}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
