import Mascot from "@/components/Mascot";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="p-6 space-y-8">
      {/* Header / Greeting */}
      <div className="flex items-center gap-4 mt-4">
        <Mascot mood="happy" />
        <div className="bg-secondary/20 p-4 rounded-2xl rounded-tl-none">
          <p className="font-bold text-secondary-foreground">Good Morning!</p>
          <p className="text-sm text-secondary-foreground/80">Ready to grow together today?</p>
        </div>
      </div>

      {/* Daily Practice Card */}
      <div className="bg-white border-2 border-primary/20 rounded-3xl p-6 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-primary/20"></div>
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-bold tracking-wider text-primary uppercase">Daily Practice</span>
          <span className="text-xs text-gray-400">5 min</span>
        </div>
        <h2 className="text-xl font-bold mb-2 text-gray-800">The 10-Second Pause</h2>
        <p className="text-gray-600 mb-6 text-sm">Before correcting behavior today, take a deep breath and count to 10. Regulate yourself first.</p>
        
        <button className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-bold hover:opacity-90 transition flex items-center justify-center gap-2">
          I'll Try This <ArrowRight size={18} />
        </button>
      </div>

      {/* Quick Grade / Reflection */}
      <div className="space-y-4">
        <h3 className="font-bold text-gray-800">Quick Check-in</h3>
        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
            <p className="text-sm text-gray-500 mb-4">How are you handling big emotions today?</p>
            
            <div className="flex justify-between mb-2 text-xs font-medium text-gray-400">
                <span>Struggling</span>
                <span>Thriving</span>
            </div>
            <input 
                type="range" 
                min="0" 
                max="100" 
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" 
            />
            <div className="mt-4 text-center">
                <button className="text-sm text-primary font-medium">Add a note (optional)</button>
            </div>
        </div>
      </div>
    </div>
  );
}
