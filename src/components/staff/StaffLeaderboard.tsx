"use client";

import { useState } from "react";
import { athletes as seedAthletes } from "@/data/athletes";
import { results as seedResults } from "@/data/results";
import { computeRankings } from "@/lib/rankings";
import { DISCIPLINE_LABELS, DISCIPLINES, type Discipline } from "@/lib/types";
import { useStaffAthletes, useStaffResults } from "@/lib/staffStore";
import { AthleteRow } from "@/components/board/AthleteRow";
import { cn } from "@/lib/utils";

export function StaffLeaderboard() {
  const [discipline, setDiscipline] = useState<Discipline>("squash");
  const { athletes: staffAthletes } = useStaffAthletes();
  const { results: staffResults } = useStaffResults();

  const allAthletes = [...seedAthletes, ...staffAthletes];
  const allResults = [...seedResults, ...staffResults];
  const entries = computeRankings(discipline, allResults, allAthletes);

  return (
    <div>
      <h3 className="font-display text-white text-2xl">Classement (aperçu staff)</h3>
      <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
        {DISCIPLINES.map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => setDiscipline(d)}
            className={cn(
              "shrink-0 pi-cut-sm border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors",
              discipline === d
                ? "border-accent bg-accent/15 text-accent-bright"
                : "border-white/15 text-muted hover:border-white/40 hover:text-white",
            )}
          >
            {DISCIPLINE_LABELS[d]}
          </button>
        ))}
      </div>

      <div className="mt-6 border border-line px-4">
        {entries.length === 0 ? (
          <p className="py-10 text-center text-muted">Aucun résultat pour l&rsquo;instant.</p>
        ) : (
          entries.map((entry) => (
            <AthleteRow key={entry.athlete.id} entry={entry} onSelect={() => {}} />
          ))
        )}
      </div>
    </div>
  );
}
