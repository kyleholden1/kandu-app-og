"use client";

import { useState } from "react";
import { Search, MessageCircle, ChevronRight } from "lucide-react";

const COMMON_STRUGGLES = [
  { emoji: "🦷", label: "Biting" },
  { emoji: "👊", label: "Hitting" },
  { emoji: "😡", label: "Tantrums" },
  { emoji: "🧸", label: "Sharing" },
  { emoji: "🥦", label: "Eating" },
  { emoji: "💤", label: "Sleep" },
  { emoji: "✈️", label: "Travel" },
  { emoji: "🛁", label: "Bath Time" },
];

export default function SOSPage() {
  const [input, setInput] = useState("");

  return (
    <div className="flex flex-col h-screen pb-24 bg-sos-soft/30">
      {/* Header */}
      <div className="p-6 pb-4">
        <h1 className="text-2xl font-bold text-gray-900">In the Moment Support</h1>
        <p className="text-gray-500 text-sm">Select a topic or ask Heere directly.</p>
      </div>

      {/* Quick Chips Grid */}
      <div className="px-6 grid grid-cols-2 gap-3 mb-6">
        {COMMON_STRUGGLES.map((item) => (
          <button 
            key={item.label}
            className="bg-white p-4 rounded-xl border border-sos/10 shadow-sm flex items-center justify-between hover:border-sos hover:shadow-md transition group"
          >
            <div className="flex items-center gap-3">
                <span className="text-xl">{item.emoji}</span>
                <span className="font-medium text-gray-700 group-hover:text-sos transition">{item.label}</span>
            </div>
            <ChevronRight size={16} className="text-gray-300 group-hover:text-sos" />
          </button>
        ))}
      </div>

      {/* Chat Area (Placeholder for now) */}
      <div className="flex-1 bg-white rounded-t-3xl shadow-lg flex flex-col overflow-hidden">
        <div className="flex-1 p-6 flex flex-col justify-center items-center text-center text-gray-400">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                <MessageCircle size={32} />
            </div>
            <p className="max-w-xs text-sm">Tap a topic above or type below for immediate, judgment-free guidance.</p>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-100">
            <div className="relative">
                <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type what's happening..."
                    className="w-full bg-gray-100 border-none rounded-full py-4 pl-6 pr-12 focus:ring-2 focus:ring-sos/50 outline-none text-gray-800"
                />
                <button className="absolute right-2 top-2 p-2 bg-sos text-white rounded-full shadow-sm hover:opacity-90">
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}
