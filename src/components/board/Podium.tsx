"use client";

import { motion } from "framer-motion";
import { Crown } from "lucide-react";
import type { RankingEntry } from "@/lib/types";
import { initials } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface PodiumProps {
  entries: RankingEntry[];
  onSelect: (athleteId: string) => void;
}

const ORDER = [1, 0, 2]; // display #2, #1, #3 — classic podium arrangement
const HEIGHTS = ["h-40 sm:h-48", "h-52 sm:h-64", "h-32 sm:h-40"];

export function Podium({ entries, onSelect }: PodiumProps) {
  const top3 = entries.slice(0, 3);
  if (top3.length === 0) return null;

  return (
    <div className="grid grid-cols-3 items-end gap-3 sm:gap-5">
      {ORDER.map((idx, slot) => {
        const entry = top3[idx];
        if (!entry) return <div key={slot} />;
        const isFirst = entry.rank === 1;

        return (
          <motion.button
            key={entry.athlete.id}
            type="button"
            onClick={() => onSelect(entry.athlete.id)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: slot * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="group flex flex-col items-center text-left"
          >
            <div className="relative mb-3">
              {isFirst && (
                <Crown
                  size={22}
                  className="absolute -top-6 left-1/2 -translate-x-1/2 text-accent-bright"
                  fill="currentColor"
                />
              )}
              <div
                className={cn(
                  "flex items-center justify-center rounded-full font-display text-white transition-colors",
                  isFirst
                    ? "h-20 w-20 bg-accent text-3xl sm:h-24 sm:w-24 sm:text-4xl"
                    : "h-16 w-16 bg-surface-2 text-2xl sm:h-20 sm:w-20 sm:text-3xl group-hover:bg-accent-deep",
                )}
              >
                {initials(entry.athlete.firstName, entry.athlete.lastInitial)}
              </div>
            </div>

            <p className="font-display text-white text-lg leading-tight sm:text-xl">
              {entry.athlete.firstName} {entry.athlete.lastInitial}
            </p>
            <p className="mt-0.5 text-center text-xs text-muted-2 sm:text-sm">
              {entry.athlete.city}
            </p>
            <p className="mt-2 eyebrow tnum text-accent-bright">
              {entry.performanceLabel}
            </p>

            <div
              className={cn(
                "mt-4 flex w-full items-start justify-center bg-surface pi-cut-sm",
                HEIGHTS[slot],
              )}
            >
              <span className="mt-3 font-display text-white/25 text-4xl sm:text-6xl">
                {entry.rank}
              </span>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}
