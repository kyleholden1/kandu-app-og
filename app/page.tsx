"use client";

import Mascot from "@/components/Mascot";
import { ArrowRight, Sparkles, Check, Flame } from "lucide-react";
import { useUserData } from "@/hooks/useUserData";
import { useState, useEffect } from "react";

export default function Home() {
  const { userData, isLoaded, completePractice, submitCheckIn, getStreakDays } = useUserData();
  const [sliderValue, setSliderValue] = useState(50);
  const [practiceCompleted, setPracticeCompleted] = useState(false);
  const [checkInSubmitted, setCheckInSubmitted] = useState(false);

  useEffect(() => {
    if (!isLoaded) return;
    
    const today = new Date().toISOString().split("T")[0];
    
    // Check if practice already completed today
    if (userData.practicesCompleted.includes(today)) {
      setPracticeCompleted(true);
    }
    
    // Check if check-in already done today
    if (userData.lastCheckInDate === today) {
      setCheckInSubmitted(true);
    }
  }, [isLoaded, userData]);

  const handleStartPractice = () => {
    completePractice();
    setPracticeCompleted(true);
  };

  const handleSubmitCheckIn = () => {
    const rating = Math.round((sliderValue / 100) * 5);
    submitCheckIn(rating);
    setCheckInSubmitted(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-teal-600 pt-12 pb-24 px-6 rounded-b-[2.5rem] relative shadow-md">
        <div className="flex items-center gap-4">
            <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border-2 border-white/30">
                <Mascot mood="happy" className="scale-75" />
            </div>
            <div>
                <h1 className="text-2xl font-extrabold text-white">Hi, Dad!</h1>
                <div className="flex items-center gap-1 text-teal-100 text-sm font-medium bg-teal-700/50 px-3 py-1 rounded-full w-fit mt-1">
                    <Sparkles size={12} />
                    <span>Learning Zone</span>
                </div>
            </div>
        </div>
      </div>

      <div className="px-6 -mt-16 space-y-6">
        {/* Streak Counter */}
        <div className="bg-white rounded-2xl p-4 shadow-md border border-orange-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Flame className="text-orange-500 fill-orange-500" size={24} />
            <div>
              <p className="font-bold text-gray-800">Streak</p>
              <p className="text-xs text-gray-500">{Math.max(0, getStreakDays())} days</p>
            </div>
          </div>
          <p className="text-2xl font-black text-orange-500">{Math.max(0, getStreakDays())}</p>
        </div>
        {/* Daily Practice Card - Floating */}
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-teal-50 relative overflow-hidden group active:scale-95 transition-all duration-200">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <Sparkles size={100} />
            </div>
            
            <div className="flex justify-between items-start mb-4 relative z-10">
                <span className="bg-teal-100 text-teal-700 text-[10px] font-extrabold px-3 py-1 rounded-full tracking-wide uppercase">Daily Practice</span>
                <span className="text-xs text-gray-400 font-semibold">5 min</span>
            </div>
            
            <h2 className="text-2xl font-black text-gray-800 mb-2 leading-tight">The 10-Second Pause</h2>
            <p className="text-gray-500 mb-6 text-sm leading-relaxed">Before correcting behavior today, take a deep breath and count to 10. Regulate yourself first.</p>
            
            <button 
              onClick={handleStartPractice}
              disabled={practiceCompleted}
              className={`w-full py-4 rounded-2xl font-bold shadow-lg flex items-center justify-center gap-2 transition ${
                practiceCompleted 
                  ? 'bg-gray-200 text-gray-600 cursor-not-allowed shadow-gray-200' 
                  : 'bg-teal-500 text-white hover:bg-teal-600 shadow-teal-200'
              }`}
            >
              {practiceCompleted ? (
                <>
                  <Check size={20} /> Done Today
                </>
              ) : (
                <>
                  Start Practice <ArrowRight size={20} />
                </>
              )}
            </button>
        </div>

        {/* Quick Check-in */}
        <div>
            <h3 className="font-bold text-gray-800 mb-3 ml-2">How's it going?</h3>
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                <p className="text-sm text-gray-500 mb-6 text-center font-medium">Rate your regulation level</p>
                
                <div className="relative h-12 flex items-center justify-center mb-2">
                     <input 
                        type="range" 
                        min="0" 
                        max="100"
                        value={sliderValue}
                        onChange={(e) => setSliderValue(Number(e.target.value))}
                        disabled={checkInSubmitted}
                        className={`w-full h-4 bg-gray-100 rounded-full appearance-none cursor-pointer accent-teal-500 ${checkInSubmitted ? 'opacity-50 cursor-not-allowed' : ''}`}
                    />
                </div>
                <div className="flex justify-between text-xs font-bold text-gray-400 px-1 mb-6">
                    <span>😤 Struggling</span>
                    <span>😌 Thriving</span>
                </div>
                
                <button 
                  onClick={handleSubmitCheckIn}
                  disabled={checkInSubmitted}
                  className={`w-full py-4 rounded-2xl font-bold transition ${
                    checkInSubmitted
                      ? 'bg-gray-200 text-gray-600 cursor-not-allowed'
                      : 'bg-teal-500 text-white hover:bg-teal-600'
                  }`}
                >
                  {checkInSubmitted ? 'Check-in Done' : 'Submit Check-in'}
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}
