"use client";

import { useCallback, useEffect, useState } from "react";
import type { Athlete, Result } from "./types";

// Local-only persistence layer for the staff dashboard. Nothing here syncs
// to other devices or to the public site yet — it exists so the MVP staff
// tools are fully usable before Supabase is wired up. Swap read()/write()
// for Supabase calls and the components above don't need to change.
const ATHLETES_KEY = "yn_staff_athletes";
const RESULTS_KEY = "yn_staff_results";

function read<T>(key: string): T[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T[]) : [];
  } catch {
    return [];
  }
}

function write<T>(key: string, value: T[]) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function useStaffAthletes() {
  const [athletes, setAthletes] = useState<Athlete[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing from localStorage on mount
    setAthletes(read<Athlete>(ATHLETES_KEY));
  }, []);

  const addAthlete = useCallback((athlete: Athlete) => {
    setAthletes((prev) => {
      const next = [...prev, athlete];
      write(ATHLETES_KEY, next);
      return next;
    });
  }, []);

  return { athletes, addAthlete };
}

export function useStaffResults() {
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing from localStorage on mount
    setResults(read<Result>(RESULTS_KEY));
  }, []);

  const addResult = useCallback((result: Result) => {
    setResults((prev) => {
      const next = [...prev, result];
      write(RESULTS_KEY, next);
      return next;
    });
  }, []);

  return { results, addResult };
}
