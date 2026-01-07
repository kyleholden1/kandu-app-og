"use client";

import { useState } from "react";
import { MessageCircle, ChevronRight } from "lucide-react";

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
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Teal Header */}
      <div className="bg-gradient-to-br from-pink-500 to-rose-400 text-white px-6 py-8">
        <h1 className="text-2xl font-bold mb-1">In the Moment Support</h1>
        <p className="text-white/90 text-sm">We've got you.</p>
      </div>

      {/* Quick Chips Grid */}
      <div className="px-6 grid grid-cols-4 gap-2 mb-8 mt-6">
        {COMMON_STRUGGLES.map((item) => (
          <button 
            key={item.label}
            className="bg-white p-3 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-center justify-center gap-2 hover:border-primary hover:shadow-md transition group"
          >
            <span className="text-2xl">{item.emoji}</span>
            <span className="font-medium text-gray-700 group-hover:text-primary transition text-xs text-center leading-tight">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Chat Area */}
      <div className="flex-1 px-6 py-12 flex flex-col justify-center items-center text-center">
        <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-4">
          <MessageCircle size={32} className="text-rose-500" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">What's happening?</h2>
        <p className="text-gray-600 text-sm max-w-sm mb-8">Select a topic above or describe what's going on. We'll give you immediate, judgment-free support.</p>

        {/* Input Area */}
        <div className="w-full px-2 relative">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type what's happening..."
            className="w-full bg-white border-2 border-gray-200 rounded-full py-3 pl-5 pr-12 focus:ring-2 focus:ring-rose-300 focus:border-rose-400 outline-none text-gray-800 shadow-sm transition"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-rose-400 hover:bg-rose-500 text-white rounded-full shadow-md transition">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
