import { athletes, getAthlete } from "@/data/athletes";
import { results } from "@/data/results";
import { computeRankings, overallRankForAthlete } from "@/lib/rankings";
import { DISCIPLINES, type Discipline, type RankingEntry } from "@/lib/types";

export interface AthleteProfile {
  athlete: NonNullable<ReturnType<typeof getAthlete>>;
  overallRank?: number;
  entries: Partial<Record<Discipline, RankingEntry>>;
}

export function getAthleteProfile(athleteId: string): AthleteProfile | undefined {
  const athlete = getAthlete(athleteId);
  if (!athlete) return undefined;

  const entries: Partial<Record<Discipline, RankingEntry>> = {};
  const resultsByDiscipline = {} as Record<Discipline, typeof results>;

  for (const discipline of DISCIPLINES) {
    resultsByDiscipline[discipline] = results.filter(
      (r) => r.discipline === discipline,
    );
    const ranked = computeRankings(discipline, results, athletes);
    const mine = ranked.find((e) => e.athlete.id === athleteId);
    if (mine) entries[discipline] = mine;
  }

  return {
    athlete,
    overallRank: overallRankForAthlete(athleteId, resultsByDiscipline, athletes),
    entries,
  };
}

export interface NextTarget {
  disciplineLabel: string;
  currentLabel: string;
  targetLabel: string;
}

/** Simple "next target" heuristic: chase the next whole-second threshold. */
export function nextTarget(profile: AthleteProfile): NextTarget | undefined {
  const timed = (["sprint40", "sled"] as Discipline[])
    .map((d) => profile.entries[d])
    .filter((e): e is RankingEntry => !!e)
    .sort((a, b) => a.performanceValue - b.performanceValue);

  const entry = timed[0];
  if (!entry) return undefined;

  const floor = Math.floor(entry.performanceValue);
  const target = entry.performanceValue % 1 === 0 ? floor - 1 : floor;

  return {
    disciplineLabel: entry.discipline === "sprint40" ? "40 Yards" : "Sled",
    currentLabel: entry.performanceValue.toFixed(2),
    targetLabel: `SOUS ${target}.00`,
  };
}
