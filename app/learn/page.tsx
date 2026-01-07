import { BookOpen, ArrowRight } from "lucide-react";

const LESSONS = [
  {
    title: "Why Your Child 'Knows Better' But Still Does It",
    category: "Foundations",
    duration: "5 min",
    color: "bg-emerald-50 border-emerald-200"
  },
  {
    title: "Why Talking During a Meltdown Backfires",
    category: "In the Moment",
    duration: "4 min",
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "Why 'No' Creates More Resistance",
    category: "Language",
    duration: "3 min",
    color: "bg-amber-50 border-amber-200"
  },
  {
    title: "Find the Yes Inside the No",
    category: "Language",
    duration: "4 min",
    color: "bg-purple-50 border-purple-200"
  },
  {
    title: "The What vs. The How",
    category: "Boundaries",
    duration: "6 min",
    color: "bg-rose-50 border-rose-200"
  },
  {
    title: "When You Have to Override Their 'No'",
    category: "Safety",
    duration: "5 min",
    color: "bg-red-50 border-red-200"
  }
];

export default function LearnPage() {
  return (
    <div className="p-6 space-y-6 pb-24">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Learn</h1>
        <p className="text-sm text-gray-500 mt-1">Build your parenting foundation, lesson by lesson</p>
      </div>

      {/* Lesson Grid */}
      <div className="space-y-3">
        {LESSONS.map((lesson, i) => (
          <button
            key={i}
            className={`w-full p-4 rounded-2xl border-2 text-left transition hover:shadow-md active:scale-95 ${lesson.color}`}
          >
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                {lesson.category}
              </span>
              <span className="text-xs text-gray-400">{lesson.duration}</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-3 leading-snug">{lesson.title}</h3>
            <div className="flex items-center justify-end text-primary text-sm font-medium">
              Read <ArrowRight size={16} className="ml-1" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
