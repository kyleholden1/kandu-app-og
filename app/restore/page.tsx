'use client';

import { useState } from 'react';
import { useUserData } from '@/hooks/useUserData';
import BottomNav from '@/components/BottomNav';

const STREAM_CONTENT = [
  {
    id: 'meditation-1',
    title: 'The 5-Min Reset',
    category: 'meditation',
    duration: 300,
    description: 'Quick grounding technique',
    content: 'Find a quiet spot. Take 5 deep breaths. Notice 5 things you can see.',
    color: 'stream',
  },
  {
    id: 'meditation-2',
    title: 'Deep Breathing',
    category: 'meditation',
    duration: 180,
    description: 'Calm your nervous system',
    content: 'Breathe in for 4 counts, hold for 4, out for 4. Repeat 10 times.',
    color: 'stream',
  },
  {
    id: 'science-1',
    title: 'Why Toddlers Hit',
    category: 'science',
    description: 'Understand the brain behind the behavior',
    content:
      'Hitting isn\'t meanness. It\'s impulse control developing. Their prefrontal cortex won\'t be mature until age 25.',
    color: 'stream',
  },
  {
    id: 'science-2',
    title: 'The Power of "Yet"',
    category: 'science',
    description: 'Growth mindset changes brains',
    content:
      'Instead of "You can\'t do it," say "You can\'t do it yet." This simple word shifts their brain toward learning.',
    color: 'stream',
  },
];

export default function StreamPage() {
  const { userData, markStreamContentCompleted } = useUserData();
  const [selectedContent, setSelectedContent] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const selected = STREAM_CONTENT.find((c) => c.id === selectedContent);
  const isCompleted = selectedContent && userData.streamContentCompleted[selectedContent];

  const handlePlay = () => {
    if (selected?.duration) {
      setIsPlaying(true);
      // Simulate playback completion
      const timer = setTimeout(() => {
        setIsPlaying(false);
        markStreamContentCompleted(selected.id);
      }, selected.duration * 10); // Speed up for demo
      return () => clearTimeout(timer);
    }
  };

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-stream-600 text-white p-6 rounded-b-2xl">
        <h1 className="text-2xl font-black mb-2">📻 The Stream</h1>
        <p className="text-stream-100 text-sm">Learn & relax between challenges</p>
      </div>

      {/* Content */}
      <div className="p-6">
        {!selectedContent ? (
          <div className="space-y-4">
            {/* Rest & Restore */}
            <div>
              <h2 className="font-bold text-gray-900 mb-2">🧘 Rest & Restore</h2>
              <div className="space-y-2">
                {STREAM_CONTENT.filter((c) => c.category === 'meditation').map((content) => (
                  <button
                    key={content.id}
                    onClick={() => setSelectedContent(content.id)}
                    className="w-full text-left p-4 bg-stream-50 border-2 border-stream-200 rounded-lg hover:bg-stream-100 transition"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-gray-900">{content.title}</h3>
                        <p className="text-xs text-gray-600">{content.description}</p>
                      </div>
                      {userData.streamContentCompleted[content.id] && <span className="text-lg">✓</span>}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* The Science */}
            <div>
              <h2 className="font-bold text-gray-900 mb-2">🧠 The Science</h2>
              <div className="space-y-2">
                {STREAM_CONTENT.filter((c) => c.category === 'science').map((content) => (
                  <button
                    key={content.id}
                    onClick={() => setSelectedContent(content.id)}
                    className="w-full text-left p-4 bg-stream-50 border-2 border-stream-200 rounded-lg hover:bg-stream-100 transition"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-gray-900">{content.title}</h3>
                        <p className="text-xs text-gray-600">{content.description}</p>
                      </div>
                      {userData.streamContentCompleted[content.id] && <span className="text-lg">✓</span>}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : selected ? (
          // Content detail view
          <div className="space-y-4">
            <button
              onClick={() => setSelectedContent(null)}
              className="text-stream-600 text-sm font-semibold hover:underline"
            >
              ← Back
            </button>

            <div className="bg-stream-50 border-2 border-stream-200 rounded-lg p-6 space-y-4">
              <h2 className="text-xl font-black text-gray-900">{selected.title}</h2>
              <p className="text-sm text-gray-600">{selected.description}</p>

              {selected.duration && (
                <div className="text-center">
                  <div className="text-xs text-gray-600 mb-1">Duration</div>
                  <div className="text-2xl font-black text-gray-900">{Math.round(selected.duration / 60)} min</div>
                </div>
              )}

              <div className="bg-white p-4 rounded-lg border border-stream-200">
                <p className="text-sm text-gray-700">{selected.content}</p>
              </div>

              {isCompleted ? (
                <div className="py-3 text-center bg-green-100 text-green-700 rounded-lg font-semibold">
                  ✓ Completed
                </div>
              ) : (
                <button
                  onClick={handlePlay}
                  disabled={isPlaying}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition ${
                    isPlaying
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-stream-600 text-white hover:bg-stream-700'
                  }`}
                >
                  {isPlaying ? 'Playing...' : selected.duration ? '▶ Play' : 'Mark as Read'}
                </button>
              )}
            </div>
          </div>
        ) : null}
      </div>

      <BottomNav />
    </div>
  );
}
