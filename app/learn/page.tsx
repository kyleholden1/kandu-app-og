'use client';

import { useState } from 'react';
import { LESSONS, LESSON_CATEGORIES } from '@/data/lessons';
import BottomNav from '@/components/BottomNav';
import { ChevronDown, Clock, Share2, X } from 'lucide-react';

export default function LearnPage() {
  const [expandedLessonId, setExpandedLessonId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [shareMessage, setShareMessage] = useState<string | null>(null);

  const filteredLessons = selectedCategory
    ? LESSONS.filter((lesson) => lesson.category === selectedCategory)
    : LESSONS;

  const selectedLesson = LESSONS.find((l) => l.id === expandedLessonId);

  const handleShare = (lesson: (typeof LESSONS)[0]) => {
    const text = `Check out this parenting lesson from Kandu: "${lesson.title}"`;
    if (navigator.share) {
      navigator.share({
        title: lesson.title,
        text: text,
      });
    } else {
      navigator.clipboard.writeText(text);
      setShareMessage('Copied to clipboard!');
      setTimeout(() => setShareMessage(null), 2000);
    }
  };

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 rounded-b-2xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">📚</span>
          <h1 className="text-2xl font-black">Learn</h1>
        </div>
        <p className="text-blue-100 text-sm">Build your parenting foundation</p>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Category Filter */}
        <div className="space-y-3">
          <p className="text-xs font-bold text-gray-600 uppercase tracking-wide">Topics</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                selectedCategory === null
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              All ({LESSONS.length})
            </button>
            {Object.entries(LESSON_CATEGORIES).map(([key, { label }]) => {
              const count = LESSONS.filter((l) => l.category === key).length;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                    selectedCategory === key
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {label} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Lessons */}
        <div className="space-y-3">
          {filteredLessons.map((lesson) => {
            const category = LESSON_CATEGORIES[lesson.category];

            return (
              <button
                key={lesson.id}
                onClick={() => setExpandedLessonId(lesson.id)}
                className="w-full text-left transition-all hover:shadow-md"
              >
                <div className="border-2 border-gray-200 bg-white hover:border-gray-300 rounded-2xl p-4 space-y-2">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 flex-1">
                      <span className="text-2xl flex-shrink-0">{lesson.icon}</span>
                      <div className="flex-1">
                        <h3 className="font-black text-gray-900 leading-tight text-base">
                          {lesson.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{lesson.excerpt}</p>
                      </div>
                    </div>
                    <ChevronDown size={20} className="flex-shrink-0 text-gray-400" />
                  </div>

                  {/* Metadata */}
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-gray-50 rounded-full">
                      <Clock size={14} className="text-gray-600" />
                      <span className="text-xs text-gray-600 font-medium">{lesson.readTime} min</span>
                    </div>
                    <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                      {category.label}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lesson Modal Overlay */}
      {selectedLesson && (
        <div className="fixed inset-0 bg-black/40 flex items-end z-50">
          <div className="bg-white rounded-t-3xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-6">
            {/* Header */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3 flex-1">
                <span className="text-3xl">{selectedLesson.icon}</span>
                <div>
                  <h2 className="text-2xl font-black text-gray-900">{selectedLesson.title}</h2>
                  <p className="text-sm text-gray-600 mt-1">
                    {LESSON_CATEGORIES[selectedLesson.category].label} •{' '}
                    {selectedLesson.readTime} min read
                  </p>
                </div>
              </div>
              <button
                onClick={() => setExpandedLessonId(null)}
                className="p-2 hover:bg-gray-100 rounded-full flex-shrink-0"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-4">
              {selectedLesson.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  // Bold section header
                  return (
                    <h4 key={idx} className="font-bold text-gray-900 mt-4 mb-2 text-sm">
                      {paragraph.replace(/\*\*/g, '')}
                    </h4>
                  );
                }
                if (paragraph.startsWith('-')) {
                  // List items
                  return (
                    <ul key={idx} className="space-y-2 ml-4">
                      {paragraph.split('\n').map((item, i) => (
                        <li key={i} className="text-sm text-gray-700 list-disc">
                          {item.replace(/^-\s*/, '')}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={idx} className="text-sm text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Inspired by section */}
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
              <p className="text-xs text-gray-600">
                <span className="font-semibold">Inspired by:</span> {selectedLesson.inspiredBy}
              </p>
            </div>

            {/* Share button */}
            <button
              onClick={() => handleShare(selectedLesson)}
              className="w-full py-3 px-4 flex items-center justify-center gap-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
            >
              <Share2 size={20} />
              Share This Lesson
            </button>

            {shareMessage && (
              <div className="text-center text-sm text-green-600 font-medium">{shareMessage}</div>
            )}
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}
