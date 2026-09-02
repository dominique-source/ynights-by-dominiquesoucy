import type {
  AgeCategory,
  Athlete,
  Discipline,
  RankingEntry,
  Result,
} from "./types";

/**
 * Sort comparator per discipline. Returns negative if `a` should rank
 * ABOVE `b`. Lower time wins sprint/sled; higher distance wins baseball;
 * higher rating wins squash (MVP proxy for a future Elo system).
 */
export function compareResults(
  discipline: Discipline,
  a: Result,
  b: Result,
): number {
  switch (discipline) {
    case "sprint40":
    case "sled":
      return a.valuePrimary - b.valuePrimary;
    case "baseball": {
      const byDistance = b.valuePrimary - a.valuePrimary;
      if (byDistance !== 0) return byDistance;
      return (b.valueSecondary ?? 0) - (a.valueSecondary ?? 0);
    }
    case "squash":
      return b.valuePrimary - a.valuePrimary;
    default:
      return 0;
  }
}

export function formatPerformance(discipline: Discipline, result: Result): string {
  switch (discipline) {
    case "sprint40":
    case "sled":
      return `${result.valuePrimary.toFixed(2)} s`;
    case "baseball":
      return `${Math.round(result.valuePrimary)} pi`;
    case "squash":
      return `${Math.round(result.valuePrimary)} pts`;
    default:
      return String(result.valuePrimary);
  }
}

export function formatSecondary(
  discipline: Discipline,
  result: Result,
): string | undefined {
  if (discipline === "baseball" && result.valueSecondary) {
    return `${result.valueSecondary} mph sortie`;
  }
  if (discipline === "squash") {
    const wins = result.wins ?? 0;
    const losses = result.losses ?? 0;
    const streakLabel =
      result.streak && result.streak > 0 ? ` · ${result.streak}V de suite` : "";
    return `${wins}V–${losses}D${streakLabel}`;
  }
  return undefined;
}

/** Keeps each athlete's single best result per discipline. */
function bestPerAthlete(discipline: Discipline, results: Result[]): Result[] {
  const byAthlete = new Map<string, Result>();
  for (const r of results) {
    if (r.discipline !== discipline) continue;
    const current = byAthlete.get(r.athleteId);
    if (!current || compareResults(discipline, r, current) < 0) {
      byAthlete.set(r.athleteId, r);
    }
  }
  return [...byAthlete.values()];
}

export interface RankingFilters {
  ageCategory?: AgeCategory | "TOUS";
}

export function computeRankings(
  discipline: Discipline,
  results: Result[],
  athletes: Athlete[],
  filters: RankingFilters = {},
): RankingEntry[] {
  const athleteById = new Map(athletes.map((a) => [a.id, a]));
  let best = bestPerAthlete(discipline, results);

  if (filters.ageCategory && filters.ageCategory !== "TOUS") {
    best = best.filter(
      (r) => athleteById.get(r.athleteId)?.ageCategory === filters.ageCategory,
    );
  }

  best.sort((a, b) => compareResults(discipline, a, b));

  return best
    .map((result, index) => {
      const athlete = athleteById.get(result.athleteId);
      if (!athlete) return null;
      const entry: RankingEntry = {
        athlete,
        discipline,
        rank: index + 1,
        previousRank: result.previousRank,
        performanceLabel: formatPerformance(discipline, result),
        performanceValue: result.valuePrimary,
        secondaryLabel: formatSecondary(discipline, result),
        isPersonalBest: result.isPersonalBest,
        result,
      };
      return entry;
    })
    .filter((entry): entry is RankingEntry => entry !== null);
}

export function rankMovement(entry: RankingEntry): "up" | "down" | "same" | "new" {
  if (entry.previousRank === undefined) return "new";
  if (entry.previousRank > entry.rank) return "up";
  if (entry.previousRank < entry.rank) return "down";
  return "same";
}

export function overallRankForAthlete(
  athleteId: string,
  resultsByDiscipline: Record<Discipline, Result[]>,
  athletes: Athlete[],
): number | undefined {
  // Simple MVP overall score: average of each discipline's normalized rank
  // (lower is better) across disciplines the athlete has a result in.
  const ranksAcross: number[] = [];
  for (const discipline of Object.keys(resultsByDiscipline) as Discipline[]) {
    const entries = computeRankings(
      discipline,
      resultsByDiscipline[discipline],
      athletes,
    );
    const found = entries.find((e) => e.athlete.id === athleteId);
    if (found) ranksAcross.push(found.rank);
  }
  if (ranksAcross.length === 0) return undefined;
  const avg = ranksAcross.reduce((s, r) => s + r, 0) / ranksAcross.length;
  return Math.round(avg);
}

/**
 * Placeholder for a future proper Elo implementation for squash.
 * Kept isolated so swapping the rating model doesn't touch UI code.
 */
export function nextEloRating(
  currentRating: number,
  opponentRating: number,
  won: boolean,
  kFactor = 24,
): number {
  const expected = 1 / (1 + 10 ** ((opponentRating - currentRating) / 400));
  const actual = won ? 1 : 0;
  return Math.round(currentRating + kFactor * (actual - expected));
}
