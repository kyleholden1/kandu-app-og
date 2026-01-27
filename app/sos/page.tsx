'use client';

import { useState } from 'react';
import { GUIDES, COMMON_STRUGGLES_LIST } from '@/data/guides';
import { useUserData } from '@/hooks/useUserData';
import BottomNav from '@/components/BottomNav';
import { X, ChevronRight, RotateCcw, ThumbsUp, ArrowLeft, Zap, Lightbulb } from 'lucide-react';

export default function SOSPage() {
    const [selectedStruggle, setSelectedStruggle] = useState<string | null>(null);
    const [selectedStrategyId, setSelectedStrategyId] = useState<string | null>(null);
    const [checkInRating, setCheckInRating] = useState(3);
    const [showCheckIn, setShowCheckIn] = useState(false);
    const [ratingResult, setRatingResult] = useState<'success' | 'failed' | null>(null);
    const [showCommunityInsights, setShowCommunityInsights] = useState(false);
    const [communityInsightsStruggle, setCommunityInsightsStruggle] = useState<string | null>(null);
    const { rateStrategy, userData, recordCheckIn } = useUserData();

    const guide = selectedStruggle ? GUIDES[selectedStruggle] : null;
    const selectedStrategy = guide?.strategies.find((s) => s.id === selectedStrategyId);

    const handleRateStrategy = (rating: number) => {
        if (selectedStrategyId) {
            rateStrategy(selectedStrategyId, rating);
            if (rating === 5) {
                setRatingResult('success');
            } else {
                setRatingResult('failed');
            }
        }
    };

    const handleCheckInSubmit = () => {
        recordCheckIn(checkInRating);
        setShowCheckIn(false);
    };

    const contextQuestions: Record<string, string[]> = {
        Hitting: ['Getting their attention', 'Excited/overstimulated', 'Tired or frustrated', 'Testing boundaries', 'I\'m not sure'],
        Tantrums: ['Tired', 'Hungry', 'Overstimulated', 'Wants something specific', 'I\'m not sure'],
        Biting: ['Teething', 'Overstimulated', 'Tired', 'Wants attention', 'I\'m not sure'],
        Sharing: ["Won't share their toys", 'Wants what someone else has', 'Playing together', 'Sibling conflict', 'I\'m not sure'],
        Eating: ['Refusing to eat', 'Being picky', 'Eating too fast', 'Throwing food', 'I\'m not sure'],
        Sleep: ['Won\'t go to bed', 'Waking up at night', 'Early morning wake', 'Fighting naps', 'I\'m not sure'],
        Travel: ['Car rides', 'Flying', 'Restaurant/public', 'New places', 'I\'m not sure'],
        'Bath Time': ['Scared of water', 'Won\'t get in', 'Won\'t get out', 'Sensitive to temperature', 'I\'m not sure'],
        'Repeating Questions': ['Seeking reassurance about something', 'Processing anxiety or worry', 'Testing boundaries or seeking attention', 'Self-soothing through repetition', 'I\'m not sure'],
    };

    return (
        <div className="pb-20">
            {/* Header */}
            <div className="bg-sos-600 text-white p-6 rounded-b-3xl">
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🆘</span>
                    <h1 className="text-2xl font-black">SOS Mode</h1>
                </div>
                <p className="text-sos-100 text-sm">Performing Zone Support</p>
            </div>

            {/* Content */}
            <div className="p-6">
                {!selectedStruggle ? (
                    // HOME VIEW
                    <div className="space-y-6">
                        {/* Current Streak */}
                        <div className="bg-sos-50 border-2 border-sos-200 rounded-xl p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-sm text-gray-600">Current Streak</div>
                                    <div className="text-3xl font-black text-sos-600">{userData.streak}</div>
                                    <div className="text-xs text-gray-500 mt-1">days in a row</div>
                                </div>
                                <div className="text-4xl">🔥</div>
                            </div>
                        </div>

                        {/* Check-in */}
                        <div className="space-y-2">
                            <h2 className="font-bold text-gray-900">How's It Going?</h2>
                            <p className="text-sm text-gray-600">Rate your regulation level</p>

                            {!showCheckIn ? (
                                <button
                                    onClick={() => setShowCheckIn(true)}
                                    className="w-full py-3 px-4 bg-sos-100 border-2 border-sos-300 rounded-lg font-semibold text-sos-700 hover:bg-sos-200 transition"
                                >
                                    Start Check-in
                                </button>
                            ) : (
                                <div className="space-y-3 bg-sos-50 p-4 rounded-lg">
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span>😤 Struggling</span>
                                            <span>😌 Thriving</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="1"
                                            max="5"
                                            value={checkInRating}
                                            onChange={(e) => setCheckInRating(Number(e.target.value))}
                                            className="w-full"
                                        />
                                        <div className="text-center text-2xl">{['😤', '😐', '😊', '😄', '😌'][checkInRating - 1]}</div>
                                    </div>
                                    <button
                                        onClick={handleCheckInSubmit}
                                        className="w-full py-2 bg-sos-600 text-white rounded-lg font-semibold hover:bg-sos-700 transition"
                                    >
                                        Submit Check-in
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Quick Guides */}
                        <div>
                            <h3 className="font-bold text-gray-900 mb-3 uppercase text-xs tracking-wider">Quick Guides</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {COMMON_STRUGGLES_LIST.map(({ emoji, label }) => (
                                    <button
                                        key={label}
                                        onClick={() => setSelectedStruggle(label)}
                                        className="flex items-center justify-between gap-3 p-4 bg-white border-2 border-gray-200 rounded-full hover:border-sos-300 hover:bg-sos-50 transition"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">{emoji}</span>
                                            <span className="font-semibold text-gray-900">{label}</span>
                                        </div>
                                        <ChevronRight size={18} className="text-gray-400" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Ask Heere */}
                        <div>
                            <h3 className="font-bold text-gray-900 mb-3 uppercase text-xs tracking-wider">Ask Heere</h3>
                            <button
                                onClick={() => setShowCommunityInsights(true)}
                                className="w-full flex items-center justify-between gap-3 p-4 bg-white border-2 border-gray-200 rounded-2xl hover:border-sos-300 hover:bg-sos-50 transition">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">🦜</span>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-gray-900">Community Insights</h4>
                                        <p className="text-xs text-gray-600">See what's working for others</p>
                                    </div>
                                </div>
                                <ChevronRight size={18} className="text-gray-400" />
                            </button>
                        </div>
                    </div>
                ) : selectedStrategyId && selectedStrategy ? (
                    // STRATEGY VIEW - AS MODAL OVERLAY
                    <div className="fixed inset-0 bg-black/40 flex items-end z-50">
                        <div className="bg-white rounded-t-3xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-4">
                            <button
                                onClick={() => setSelectedStrategyId(null)}
                                className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
                            >
                                <X size={24} />
                            </button>

                            {/* Yellow warning box */}
                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                                <p className="text-sm text-yellow-800">
                                    <span className="font-semibold">Before you respond:</span> Take a deep breath. Regulate yourself first. Your calm is contagious.
                                </p>
                            </div>

                            {/* Strategy header */}
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-2xl">{guide?.emoji}</span>
                                    <h2 className="text-xl font-black text-gray-900">{selectedStrategy.name}</h2>
                                </div>
                                <p className="text-sm text-teal-600 font-semibold">✨ Trying: {selectedStrategy.name}</p>
                            </div>

                            {/* Steps */}
                            <div className="space-y-3">
                                {selectedStrategy.steps.map((step, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                                            <span className="text-sm font-bold text-teal-600">{i + 1}</span>
                                        </div>
                                        <p className="text-sm text-gray-700 pt-1">{step}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Why */}
                            <div className="italic text-sm text-gray-600 bg-gray-50 p-3 rounded">
                                "{selectedStrategy.why}"
                            </div>

                            {/* Buttons */}
                            <div className="space-y-3 pt-2">
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={() => handleRateStrategy(1)}
                                        className="py-3 px-4 border-2 border-gray-300 rounded-full font-semibold text-gray-700 hover:bg-gray-50 transition"
                                    >
                                        Didn't Work
                                    </button>
                                    <button
                                        onClick={() => handleRateStrategy(5)}
                                        className="py-3 px-4 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition"
                                    >
                                        It Worked!
                                    </button>
                                </div>
                                <button className="w-full py-3 px-4 border-2 border-blue-300 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition">
                                    📧 Email Me These Steps
                                </button>
                            </div>
                        </div>
                    </div>
                ) : selectedStruggle && guide ? (
                    // CONTEXT MODAL
                    <div className="fixed inset-0 bg-black/40 flex items-end z-50">
                        <div className="bg-white rounded-t-3xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-4">
                            <button
                                onClick={() => setSelectedStruggle(null)}
                                className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
                            >
                                <X size={24} />
                            </button>

                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-2xl">{guide.emoji}</span>
                                <h2 className="text-2xl font-black text-gray-900">Tell me more</h2>
                            </div>

                            <p className="text-gray-700 font-semibold">What's the {guide.label.toLowerCase()} situation?</p>

                            <div className="space-y-3">
                                {contextQuestions[guide.label]?.map((question) => (
                                    <button
                                        key={question}
                                        onClick={() => {
                                            // For now, just show first strategy. In production, might filter based on context
                                            setSelectedStrategyId(guide.strategies[0].id);
                                        }}
                                        className="w-full py-4 px-4 border-2 border-gray-200 rounded-xl text-gray-700 hover:border-sos-300 hover:bg-sos-50 transition font-medium"
                                    >
                                        {question}
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={() => {
                                    setSelectedStrategyId(guide.strategies[0].id);
                                }}
                                className="w-full py-4 px-4 bg-gray-300 text-gray-500 rounded-xl font-semibold cursor-not-allowed"
                            >
                                Get Support
                            </button>
                        </div>
                    </div>
                ) : null}
            </div>

            {/* Didn't Work Modal */}
            {ratingResult === 'failed' && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-3xl p-8 max-w-sm w-full space-y-6 text-center relative">
                        <button
                            onClick={() => setRatingResult(null)}
                            className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
                        >
                            <X size={24} />
                        </button>

                        {/* Icon */}
                        <div className="flex justify-center">
                            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
                                <RotateCcw size={40} className="text-orange-500" />
                            </div>
                        </div>

                        {/* Title and description */}
                        <div className="space-y-2">
                            <h3 className="text-2xl font-black text-gray-900">That's okay.</h3>
                            <p className="text-gray-600">Every situation is different. Next time, we'll suggest a different approach.</p>
                        </div>

                        {/* Buttons */}
                        <div className="space-y-3">
                            <button
                                onClick={() => {
                                    setRatingResult(null);
                                    setSelectedStrategyId(null);
                                    // Show next strategy or context again
                                    const nextStrategyIndex = (guide?.strategies.findIndex((s) => s.id === selectedStrategyId) ?? -1) + 1;
                                    if (guide && nextStrategyIndex < guide.strategies.length) {
                                        setSelectedStrategyId(guide.strategies[nextStrategyIndex].id);
                                    } else {
                                        setSelectedStruggle(null);
                                    }
                                }}
                                className="w-full py-3 px-4 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition"
                            >
                                See Alternative Now
                            </button>
                            <button
                                onClick={() => {
                                    setRatingResult(null);
                                    setSelectedStrategyId(null);
                                    setSelectedStruggle(null);
                                }}
                                className="w-full py-3 px-4 text-gray-400 font-semibold hover:text-gray-600 transition"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* It Worked Modal */}
            {ratingResult === 'success' && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-3xl p-8 max-w-sm w-full space-y-6 text-center relative">
                        <button
                            onClick={() => setRatingResult(null)}
                            className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
                        >
                            <X size={24} />
                        </button>

                        {/* Icon */}
                        <div className="flex justify-center">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                                <ThumbsUp size={40} className="text-green-500" fill="currentColor" />
                            </div>
                        </div>

                        {/* Title and description */}
                        <div className="space-y-2">
                            <h3 className="text-2xl font-black text-gray-900">Great job!</h3>
                            <p className="text-gray-600">We'll remember that this strategy works for {guide?.label}.</p>
                        </div>

                        {/* Button */}
                        <button
                            onClick={() => {
                                setRatingResult(null);
                                setSelectedStrategyId(null);
                                setSelectedStruggle(null);
                            }}
                            className="w-full py-3 px-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Community Insights Modal */}
            {showCommunityInsights && !communityInsightsStruggle && (
                <div className="fixed inset-0 bg-black/40 flex items-end z-50">
                    <div className="bg-white rounded-t-3xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-black text-gray-900">Ask Heere</h2>
                            <button
                                onClick={() => setShowCommunityInsights(false)}
                                className="p-2 hover:bg-gray-100 rounded-full"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Most Common */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Zap size={20} className="text-red-500" fill="currentColor" />
                                <h3 className="font-black text-gray-900">Most Common</h3>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                {COMMON_STRUGGLES_LIST.map(({ emoji, label }) => (
                                    <button
                                        key={label}
                                        onClick={() => setCommunityInsightsStruggle(label)}
                                        className="flex flex-col items-center gap-2 p-4 bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 rounded-2xl transition"
                                    >
                                        <span className="text-3xl">{emoji}</span>
                                        <span className="text-sm font-semibold text-gray-900">{label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Building Knowledge */}
                        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-4 space-y-2">
                            <div className="flex items-start gap-2">
                                <Lightbulb size={20} className="text-yellow-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-yellow-900">Building Knowledge</h4>
                                    <p className="text-sm text-yellow-700">As parents rate strategies, smarter recommendations appear here.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Community Insights - Struggle Detail Modal */}
            {showCommunityInsights && communityInsightsStruggle && (
                <div className="fixed inset-0 bg-black/40 flex items-end z-50">
                    <div className="bg-white rounded-t-3xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-6">
                        <div className="flex items-center justify-between">
                            <button
                                onClick={() => setCommunityInsightsStruggle(null)}
                                className="p-2 hover:bg-gray-100 rounded-full"
                            >
                                <ArrowLeft size={24} />
                            </button>
                            <h2 className="text-2xl font-black text-gray-900">Ask Heere</h2>
                            <button
                                onClick={() => {
                                    setShowCommunityInsights(false);
                                    setCommunityInsightsStruggle(null);
                                }}
                                className="p-2 hover:bg-gray-100 rounded-full"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Most Common */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Zap size={20} className="text-red-500" fill="currentColor" />
                                <h3 className="font-black text-gray-900">Most Common</h3>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                {COMMON_STRUGGLES_LIST.map(({ emoji, label }) => (
                                    <button
                                        key={label}
                                        onClick={() => setCommunityInsightsStruggle(label)}
                                        className={`flex flex-col items-center gap-2 p-4 border-2 rounded-2xl transition ${label === communityInsightsStruggle
                                                ? 'bg-pink-100 border-pink-300'
                                                : 'bg-gray-50 hover:bg-gray-100 border-gray-200'
                                            }`}
                                    >
                                        <span className="text-3xl">{emoji}</span>
                                        <span className="text-sm font-semibold text-gray-900">{label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Best for Selected Struggle */}
                        {GUIDES[communityInsightsStruggle] && (
                            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 space-y-3">
                                <div className="flex items-center gap-2">
                                    <Lightbulb size={20} className="text-blue-600" />
                                    <h4 className="font-bold text-blue-900">Best for {communityInsightsStruggle}</h4>
                                </div>
                                <div className="space-y-2">
                                    {GUIDES[communityInsightsStruggle].strategies.slice(0, 1).map((strategy) => (
                                        <div key={strategy.id}>
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="font-semibold text-gray-900">Your Job, Their Job</span>
                                                <span className="font-bold text-blue-600">100%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                                            </div>
                                            <p className="text-xs text-gray-600 mt-1">1/1 parents found success</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Building Knowledge */}
                        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-4 space-y-2">
                            <div className="flex items-start gap-2">
                                <Lightbulb size={20} className="text-yellow-600 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-yellow-900">Building Knowledge</h4>
                                    <p className="text-sm text-yellow-700">As parents rate strategies, smarter recommendations appear here.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <BottomNav />
        </div>
    );
}
