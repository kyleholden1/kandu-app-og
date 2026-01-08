'use client';

import { useState } from 'react';
import { LESSONS, LESSON_CATEGORIES } from '@/data/lessons';
import BottomNav from '@/components/BottomNav';
import { ChevronDown, Clock } from 'lucide-react';

export default function LearnPage() {
    const [expandedLesson, setExpandedLesson] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const filteredLessons = selectedCategory
        ? LESSONS.filter((lesson) => lesson.category === selectedCategory)
        : LESSONS;

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
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${selectedCategory === null
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
                                    className={`px-4 py-2 rounded-full text-sm font-semibold transition ${selectedCategory === key
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
                        const isExpanded = expandedLesson === lesson.id;

                        return (
                            <button
                                key={lesson.id}
                                onClick={() => setExpandedLesson(isExpanded ? null : lesson.id)}
                                className={`w-full text-left transition-all ${isExpanded ? '' : 'hover:shadow-md'}`}
                            >
                                <div
                                    className={`border-2 rounded-2xl p-4 space-y-2 ${isExpanded
                                        ? `${category.color} ${category.borderColor} border-2`
                                        : 'bg-white border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    {/* Header */}
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="flex items-start gap-3 flex-1">
                                            <span className="text-2xl flex-shrink-0">{lesson.icon}</span>
                                            <div className="flex-1">
                                                <h3 className="font-black text-gray-900 leading-tight text-base">
                                                    {lesson.title}
                                                </h3>
                                                {!isExpanded && (
                                                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{lesson.excerpt}</p>
                                                )}
                                            </div>
                                        </div>
                                        <ChevronDown
                                            size={20}
                                            className={`flex-shrink-0 text-gray-600 transition-transform ${isExpanded ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </div>

                                    {/* Metadata */}
                                    <div className="flex items-center gap-4">
                                        <div className="inline-flex items-center gap-1 px-3 py-1 bg-white/50 rounded-full">
                                            <Clock size={14} className="text-gray-600" />
                                            <span className="text-xs text-gray-600 font-medium">{lesson.readTime} min</span>
                                        </div>
                                        <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                                            {category.label}
                                        </span>
                                    </div>

                                    {/* Expanded Content */}
                                    {isExpanded && (
                                        <div className="pt-4 border-t-2 border-gray-200/50 space-y-3">
                                            <div className="prose prose-sm max-w-none">
                                                {lesson.content.split('\n\n').map((paragraph, idx) => {
                                                    if (paragraph.startsWith('**')) {
                                                        // Bold sections
                                                        return (
                                                            <p key={idx} className="text-sm text-gray-700 font-semibold">
                                                                {paragraph.replace(/\*\*/g, '')}
                                                            </p>
                                                        );
                                                    }
                                                    if (paragraph.startsWith('-')) {
                                                        // List items
                                                        return (
                                                            <div key={idx} className="text-sm text-gray-700 ml-3">
                                                                {paragraph.split('\n').map((item, i) => (
                                                                    <p key={i} className="mb-1">
                                                                        {item}
                                                                    </p>
                                                                ))}
                                                            </div>
                                                        );
                                                    }
                                                    return (
                                                        <p key={idx} className="text-sm text-gray-700 leading-relaxed">
                                                            {paragraph}
                                                        </p>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            <BottomNav />
        </div>
    );
}
