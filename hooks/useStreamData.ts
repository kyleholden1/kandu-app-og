"use client";

import { useState, useEffect } from "react";

export interface StreamItem {
  id: string;
  title: string;
  category: "rest" | "science";
  duration?: number; // in seconds
  completed: boolean;
}

const STORAGE_KEY = "kandu_stream_data";

const DEFAULT_STREAM_ITEMS: StreamItem[] = [
  { id: "reset_5min", title: "The 5-Min Reset", category: "rest", duration: 300, completed: false },
  { id: "breathing", title: "Deep Breathing", category: "rest", duration: 180, completed: false },
  { id: "walking_med", title: "Walking Meditation", category: "rest", duration: 600, completed: false },
  { id: "sleep_prep", title: "Sleep Prep", category: "rest", duration: 900, completed: false },
  { id: "why_hitting", title: "Why Toddlers Hit", category: "science", completed: false },
  { id: "power_yet", title: "The Power of 'Yet'", category: "science", completed: false },
  { id: "mirror_neurons", title: "Mirror Neurons", category: "science", completed: false },
];

export function useStreamData() {
  const [items, setItems] = useState<StreamItem[]>(DEFAULT_STREAM_ITEMS);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const storedItems = JSON.parse(stored);
        // Merge stored data with defaults (in case new items were added)
        const merged = DEFAULT_STREAM_ITEMS.map((item) => {
          const stored = storedItems.find((s: StreamItem) => s.id === item.id);
          return stored || item;
        });
        setItems(merged);
      } catch {
        setItems(DEFAULT_STREAM_ITEMS);
      }
    }
    setIsLoaded(true);
  }, []);

  const saveStreamData = (newItems: StreamItem[]) => {
    setItems(newItems);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems));
  };

  const markComplete = (id: string) => {
    const updated = items.map((item) =>
      item.id === id ? { ...item, completed: true } : item
    );
    saveStreamData(updated);
  };

  const getCompletedCount = (category: "rest" | "science" | "all") => {
    if (category === "all") {
      return items.filter((i) => i.completed).length;
    }
    return items.filter((i) => i.category === category && i.completed).length;
  };

  return {
    items,
    isLoaded,
    markComplete,
    getCompletedCount,
  };
}
