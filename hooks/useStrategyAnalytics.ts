"use client";

import { useState, useEffect } from "react";

export interface StrategyStats {
  strategyId: string;
  strategyName: string;
  guideId: string;
  guideName: string;
  totalRatings: number;
  successRatings: number; // ratings >= 3
  failureRatings: number; // ratings < 3
  effectivenessPercent: number; // 0-100
  averageRating: number; // 0-5
}

const STORAGE_KEY = "kandu_strategy_ratings";

export function useStrategyAnalytics() {
  const [stats, setStats] = useState<Map<string, StrategyStats>>(new Map());
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const data = JSON.parse(stored);
        const map = new Map(Object.entries(data));
        setStats(map as Map<string, StrategyStats>);
      } catch {
        setStats(new Map());
      }
    }
    setIsLoaded(true);
  }, []);

  const recordRating = (
    strategyId: string,
    strategyName: string,
    guideId: string,
    guideName: string,
    rating: number
  ) => {
    const key = `${guideId}_${strategyId}`;
    const existing = stats.get(key) || {
      strategyId,
      strategyName,
      guideId,
      guideName,
      totalRatings: 0,
      successRatings: 0,
      failureRatings: 0,
      effectivenessPercent: 0,
      averageRating: 0,
    };

    const newTotal = existing.totalRatings + 1;
    const newSuccesses = existing.successRatings + (rating >= 3 ? 1 : 0);
    const newFailures = existing.failureRatings + (rating < 3 ? 1 : 0);
    const effectiveness = Math.round((newSuccesses / newTotal) * 100);
    const avgRating =
      (existing.averageRating * existing.totalRatings + rating) / newTotal;

    const updated = {
      ...existing,
      totalRatings: newTotal,
      successRatings: newSuccesses,
      failureRatings: newFailures,
      effectivenessPercent: effectiveness,
      averageRating: parseFloat(avgRating.toFixed(2)),
    };

    const newStats = new Map(stats);
    newStats.set(key, updated);
    setStats(newStats);
    saveStats(newStats);
  };

  const saveStats = (statsMap: Map<string, StrategyStats>) => {
    const obj = Object.fromEntries(statsMap);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
  };

  const getStrategyStats = (
    strategyId: string,
    guideId: string
  ): StrategyStats | null => {
    const key = `${guideId}_${strategyId}`;
    return stats.get(key) || null;
  };

  const getGuideStats = (guideId: string): StrategyStats[] => {
    return Array.from(stats.values()).filter((s) => s.guideId === guideId);
  };

  const getMostEffectiveStrategy = (guideId: string): StrategyStats | null => {
    const guideStats = getGuideStats(guideId);
    if (guideStats.length === 0) return null;

    return guideStats.reduce((best, current) => {
      if (current.totalRatings < 2) return best; // Need at least 2 ratings
      if (best.totalRatings < 2) return current;
      return current.effectivenessPercent > best.effectivenessPercent
        ? current
        : best;
    });
  };

  const getCommonStruggles = (): Array<{ guideId: string; count: number }> => {
    const struggles = new Map<string, number>();

    stats.forEach((stat) => {
      struggles.set(
        stat.guideId,
        (struggles.get(stat.guideId) || 0) + stat.totalRatings
      );
    });

    return Array.from(struggles.entries())
      .map(([guideId, count]) => ({ guideId, count }))
      .sort((a, b) => b.count - a.count);
  };

  const getTopStrategies = (limit = 5): StrategyStats[] => {
    return Array.from(stats.values())
      .filter((s) => s.totalRatings >= 2) // Minimum 2 ratings for credibility
      .sort((a, b) => b.effectivenessPercent - a.effectivenessPercent)
      .slice(0, limit);
  };

  return {
    stats,
    isLoaded,
    recordRating,
    getStrategyStats,
    getGuideStats,
    getMostEffectiveStrategy,
    getCommonStruggles,
    getTopStrategies,
  };
}
