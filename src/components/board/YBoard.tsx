"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { athletes } from "@/data/athletes";
import { results } from "@/data/results";
import { computeRankings } from "@/lib/rankings";
import {
  AGE_CATEGORIES,
  AGE_CATEGORY_LABELS,
  DISCIPLINE_LABELS,
  DISCIPLINES,
  type AgeCategory,
  type Discipline,
} from "@/lib/types";
import { cn } from "@/lib/utils";
import { Podium } from "./Podium";
import { AthleteRow } from "./AthleteRow";
import { AthleteProfileDrawer } from "./AthleteProfileDrawer";

const AGE_FILTERS: (AgeCategory | "TOUS")[] = ["TOUS", ...AGE_CATEGORIES];

export function YBoard() {
  const [discipline, setDiscipline] = useState<Discipline>("squash");
  const [ageFilter, setAgeFilter] = useState<AgeCategory | "TOUS">("TOUS");
  const [selectedAthleteId, setSelectedAthleteId] = useState<string | null>(
    null,
  );

  const entries = useMemo(
    () =>
      computeRankings(discipline, results, athletes, {
        ageCategory: ageFilter,
      }),
    [discipline, ageFilter],
  );

  const podiumEntries = entries.slice(0, 3);
  const restEntries = entries.slice(3);

  return (
    <section id="y-board" className="relative bg-bg-2 py-24 sm:py-32">
      <div className="yn-container">
        <p className="eyebrow mb-4">The Y Board</p>
        <h2 className="font-display text-white text-[clamp(2.4rem,1.9rem+3.2vw,5.5rem)] leading-[0.9]">
          Where do <span className="text-outline">you</span> rank?
        </h2>
        <p className="mt-4 max-w-md text-lg text-muted">
          Classement provincial Y NIGHT
        </p>

        {/* Discipline tabs */}
        <div className="mt-10 flex gap-2 overflow-x-auto pb-1 sm:mt-12">
          {DISCIPLINES.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDiscipline(d)}
              className={cn(
                "relative shrink-0 px-5 py-3 text-sm font-semibold uppercase tracking-wide transition-colors sm:text-base",
                discipline === d
                  ? "text-white"
                  : "text-muted hover:text-white",
              )}
            >
              {DISCIPLINE_LABELS[d]}
              {discipline === d && (
                <motion.span
                  layoutId="yboard-tab-underline"
                  className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-accent-bright"
                />
              )}
            </button>
          ))}
        </div>
        <div className="divider-line" />

        {/* Age filters */}
        <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
          {AGE_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setAgeFilter(f)}
              className={cn(
                "shrink-0 pi-cut-sm border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors",
                ageFilter === f
                  ? "border-accent bg-accent/15 text-accent-bright"
                  : "border-white/15 text-muted hover:border-white/40 hover:text-white",
              )}
            >
              {f === "TOUS" ? "Tous" : AGE_CATEGORY_LABELS[f]}
            </button>
          ))}
        </div>

        {/* Podium */}
        <div className="mt-12 sm:mt-16">
          <Podium entries={podiumEntries} onSelect={setSelectedAthleteId} />
        </div>

        {/* Rows 4+ */}
        <div className="mt-12">
          {restEntries.length === 0 ? (
            <p className="py-10 text-center text-muted">
              Aucun résultat pour ce filtre pour l&rsquo;instant.
            </p>
          ) : (
            restEntries.map((entry) => (
              <AthleteRow
                key={entry.athlete.id}
                entry={entry}
                onSelect={setSelectedAthleteId}
              />
            ))
          )}
        </div>
      </div>

      <AthleteProfileDrawer
        athleteId={selectedAthleteId}
        onClose={() => setSelectedAthleteId(null)}
      />
    </section>
  );
}
