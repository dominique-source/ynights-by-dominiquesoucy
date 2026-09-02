"use client";

import { motion } from "framer-motion";
import { Minus, TrendingDown, TrendingUp } from "lucide-react";
import type { RankingEntry } from "@/lib/types";
import { rankMovement } from "@/lib/rankings";
import { initials } from "@/lib/utils";
import { AGE_CATEGORY_LABELS } from "@/lib/types";

interface AthleteRowProps {
  entry: RankingEntry;
  onSelect: (athleteId: string) => void;
}

export function AthleteRow({ entry, onSelect }: AthleteRowProps) {
  const movement = rankMovement(entry);

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(entry.athlete.id)}
      whileHover={{ x: 6 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      className="group flex w-full items-center gap-4 border-b border-line py-4 text-left last:border-b-0 sm:gap-6 sm:py-5"
    >
      <span className="w-7 shrink-0 font-display text-muted text-xl tnum sm:w-10 sm:text-2xl">
        {entry.rank}
      </span>

      <span className="flex w-5 shrink-0 justify-center" aria-hidden>
        {movement === "up" && <TrendingUp size={16} className="text-ok" />}
        {movement === "down" && (
          <TrendingDown size={16} className="text-accent-bright" />
        )}
        {movement === "same" && <Minus size={14} className="text-muted-2" />}
      </span>

      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-2 font-display text-white text-sm group-hover:bg-accent-deep sm:h-12 sm:w-12 sm:text-base">
        {initials(entry.athlete.firstName, entry.athlete.lastInitial)}
      </span>

      <span className="min-w-0 flex-1">
        <span className="flex flex-wrap items-baseline gap-x-2">
          <span className="font-display text-white text-base sm:text-lg">
            {entry.athlete.firstName} {entry.athlete.lastInitial}
          </span>
          {entry.isPersonalBest && (
            <span className="eyebrow rounded-sm bg-accent/15 px-1.5 py-0.5 text-[10px] text-accent-bright">
              Nouveau RP
            </span>
          )}
        </span>
        <span className="block truncate text-xs text-muted-2 sm:text-sm">
          {AGE_CATEGORY_LABELS[entry.athlete.ageCategory]} &middot;{" "}
          {entry.athlete.city}
        </span>
      </span>

      <span className="shrink-0 text-right">
        <span className="block font-display text-white text-lg tnum sm:text-xl">
          {entry.performanceLabel}
        </span>
        {entry.secondaryLabel && (
          <span className="block text-xs text-muted-2 tnum sm:text-sm">
            {entry.secondaryLabel}
          </span>
        )}
      </span>
    </motion.button>
  );
}
