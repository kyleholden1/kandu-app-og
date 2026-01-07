"use client";

import { useState } from "react";
import { Search, MessageCircle, ChevronRight } from "lucide-react";
import Mascot from "@/components/Mascot";

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
    <div className="flex flex-col h-screen pb-24 bg-gray-50">
      {/* Teal Header with Mascot */}
      <div className="bg-gradient-to-br from-primary to-primary/80 text-white px-6 py-8 rounded-b-3xl shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <Mascot mood="calm" />
          <div>
            <h1 className="text-xl font-bold">In the Moment Support</h1>
            <p className="text-primary-foreground/80 text-sm">We've got you.</p>
          </div>
        </div>
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

      {/* Chat Area (Placeholder for now) */}
      <div className="flex-1 px-6 pb-6 flex flex-col justify-center items-center text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mb-4">
          <MessageCircle size={40} className="text-primary" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">What's happening?</h2>
        <p className="text-gray-600 text-sm max-w-xs mb-8">Select a topic above or describe what's going on. We'll give you immediate, judgment-free support.</p>

        {/* Input Area */}
        <div className="w-full relative">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type what's happening..."
            className="w-full bg-white border-2 border-gray-200 rounded-full py-4 pl-6 pr-14 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none text-gray-800 shadow-sm transition"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-gradient-to-r from-primary to-primary/80 text-white rounded-full shadow-md hover:opacity-90 transition">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
