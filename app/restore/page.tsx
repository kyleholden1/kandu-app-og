import { PlayCircle, PauseCircle, BookOpen } from "lucide-react";

const REST_CHANNELS = [
  { title: "The 5-Min Reset", color: "bg-teal-100 text-teal-800" },
  { title: "Deep Breathing", color: "bg-indigo-100 text-indigo-800" },
  { title: "Walking Meditation", color: "bg-green-100 text-green-800" },
  { title: "Sleep Prep", color: "bg-purple-100 text-purple-800" },
];

const SCIENCE_FACTS = [
    { title: "Why Toddlers Hit", desc: "It's often an impulse control issue, not malice." },
    { title: "The Power of 'Yet'", desc: "Growth mindset changes brain plasticity." },
    { title: "Mirror Neurons", desc: "Why your calm creates their calm." }
];

export default function RestorePage() {
  return (
    <div className="p-6 space-y-8 pb-24">
      <h1 className="text-2xl font-bold text-gray-900">Restore</h1>
      
      {/* Rest Channel */}
      <section>
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <span className="text-xl">🧘</span> Rest & Restore
            </h2>
            <span className="text-xs text-primary font-medium">View All</span>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
            {REST_CHANNELS.map((item, i) => (
                <div key={i} className={`min-w-[160px] h-40 rounded-2xl p-4 flex flex-col justify-between ${item.color} shrink-0`}>
                    <div className="flex justify-end">
                        <PlayCircle size={32} className="opacity-50" />
                    </div>
                    <span className="font-bold text-lg leading-tight">{item.title}</span>
                </div>
            ))}
        </div>
      </section>

      {/* Science Channel */}
      <section>
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <span className="text-xl">🧠</span> The Science
            </h2>
        </div>

        <div className="space-y-3">
            {SCIENCE_FACTS.map((item, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex gap-4 items-start">
                    <div className="p-2 bg-blue-50 text-blue-500 rounded-lg shrink-0">
                        <BookOpen size={20} />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
      </section>
    </div>
  );
}
