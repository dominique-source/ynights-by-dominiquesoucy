import type { Result } from "@/lib/types";

// Fictional seed results for a single demo event. Every "previousRank" and
// "isPersonalBest" flag below is hand-seeded to give The Y Board a sense of
// movement without needing a full history table yet — swap for computed
// values once Supabase results start accumulating over multiple events.
const EVENT_ID = "evt-2026-01";

export const results: Result[] = [
  // ---- 40 YARDS (lower is better) ----
  r("r-sprint-a11", "a11", "sprint40", 4.87, "s", { previousRank: 1 }),
  r("r-sprint-a01", "a01", "sprint40", 4.91, "s", { previousRank: 4, isPersonalBest: true }),
  r("r-sprint-a17", "a17", "sprint40", 4.96, "s", { previousRank: 3, isPersonalBest: true }),
  r("r-sprint-a22", "a22", "sprint40", 5.01, "s", { previousRank: 5 }),
  r("r-sprint-a06", "a06", "sprint40", 5.03, "s", { previousRank: 6 }),
  r("r-sprint-a02", "a02", "sprint40", 5.12, "s", { previousRank: 5 }),
  r("r-sprint-a09", "a09", "sprint40", 5.18, "s", { previousRank: 8 }),
  r("r-sprint-a13", "a13", "sprint40", 5.21, "s", { previousRank: 9 }),
  r("r-sprint-a20", "a20", "sprint40", 5.24, "s", { previousRank: 10 }),
  r("r-sprint-a14", "a14", "sprint40", 5.31, "s", { previousRank: 11 }),
  r("r-sprint-a05", "a05", "sprint40", 5.36, "s", { previousRank: 12 }),
  r("r-sprint-a08", "a08", "sprint40", 5.44, "s", { previousRank: 13 }),
  r("r-sprint-a04", "a04", "sprint40", 5.52, "s", { previousRank: 13 }),

  // ---- SLED CHALLENGE (lower is better) ----
  r("r-sled-a07", "a07", "sled", 16.8, "s", { previousRank: 1 }),
  r("r-sled-a15", "a15", "sled", 17.1, "s", { previousRank: 2 }),
  r("r-sled-a21", "a21", "sled", 17.6, "s", { previousRank: 4, isPersonalBest: true }),
  r("r-sled-a01", "a01", "sled", 17.9, "s", { previousRank: 3 }),
  r("r-sled-a04", "a04", "sled", 18.4, "s", { previousRank: 6 }),
  r("r-sled-a13", "a13", "sled", 18.6, "s", { previousRank: 7 }),
  r("r-sled-a06", "a06", "sled", 18.9, "s", { previousRank: 8 }),
  r("r-sled-a09", "a09", "sled", 19.4, "s", { previousRank: 9 }),
  r("r-sled-a18", "a18", "sled", 19.8, "s", { previousRank: 10 }),
  r("r-sled-a12", "a12", "sled", 20.5, "s", { previousRank: 11 }),
  r("r-sled-a16", "a16", "sled", 21.2, "s", { previousRank: 12 }),
  r("r-sled-a19", "a19", "sled", 22.4, "s", { previousRank: 12 }),

  // ---- BASEBALL — LONGEST DRIVE (higher is better) ----
  r("r-bb-a03", "a03", "baseball", 287, "pi", { valueSecondary: 91, unitSecondary: "mph", previousRank: 2, isPersonalBest: true }),
  r("r-bb-a06", "a06", "baseball", 273, "pi", { valueSecondary: 89, unitSecondary: "mph", previousRank: 3 }),
  r("r-bb-a20", "a20", "baseball", 266, "pi", { valueSecondary: 90, unitSecondary: "mph", previousRank: 2 }),
  r("r-bb-a13", "a13", "baseball", 261, "pi", { valueSecondary: 87, unitSecondary: "mph", previousRank: 4 }),
  r("r-bb-a24", "a24", "baseball", 254, "pi", { valueSecondary: 86, unitSecondary: "mph", previousRank: 5 }),
  r("r-bb-a11", "a11", "baseball", 247, "pi", { valueSecondary: 88, unitSecondary: "mph", previousRank: 6 }),
  r("r-bb-a01", "a01", "baseball", 242, "pi", { valueSecondary: 84, unitSecondary: "mph", previousRank: 7 }),
  r("r-bb-a17", "a17", "baseball", 238, "pi", { valueSecondary: 85, unitSecondary: "mph", previousRank: 8 }),
  r("r-bb-a09", "a09", "baseball", 226, "pi", { valueSecondary: 82, unitSecondary: "mph", previousRank: 9 }),
  r("r-bb-a02", "a02", "baseball", 219, "pi", { valueSecondary: 81, unitSecondary: "mph", previousRank: 10 }),
  r("r-bb-a22", "a22", "baseball", 214, "pi", { valueSecondary: 83, unitSecondary: "mph", previousRank: 11 }),
  r("r-bb-a08", "a08", "baseball", 201, "pi", { valueSecondary: 78, unitSecondary: "mph", previousRank: 12 }),
  r("r-bb-a14", "a14", "baseball", 196, "pi", { valueSecondary: 77, unitSecondary: "mph", previousRank: 13 }),

  // ---- SQUASH (higher rating is better) ----
  r("r-sq-a01", "a01", "squash", 1620, "pts", { wins: 9, losses: 1, streak: 5, previousRank: 2, isPersonalBest: true }),
  r("r-sq-a10", "a10", "squash", 1580, "pts", { wins: 8, losses: 2, streak: 3, previousRank: 1 }),
  r("r-sq-a05", "a05", "squash", 1555, "pts", { wins: 7, losses: 2, streak: 2, previousRank: 4 }),
  r("r-sq-a17", "a17", "squash", 1540, "pts", { wins: 7, losses: 3, streak: 1, previousRank: 4 }),
  r("r-sq-a02", "a02", "squash", 1522, "pts", { wins: 6, losses: 3, streak: 0, previousRank: 5 }),
  r("r-sq-a15", "a15", "squash", 1505, "pts", { wins: 6, losses: 4, streak: 2, previousRank: 6 }),
  r("r-sq-a22", "a22", "squash", 1488, "pts", { wins: 5, losses: 4, streak: 1, previousRank: 7 }),
  r("r-sq-a07", "a07", "squash", 1470, "pts", { wins: 5, losses: 5, streak: 0, previousRank: 8 }),
  r("r-sq-a11", "a11", "squash", 1452, "pts", { wins: 4, losses: 5, streak: 0, previousRank: 9 }),
  r("r-sq-a14", "a14", "squash", 1430, "pts", { wins: 4, losses: 6, streak: 1, previousRank: 10 }),
  r("r-sq-a19", "a19", "squash", 1408, "pts", { wins: 3, losses: 6, streak: 0, previousRank: 11 }),
  r("r-sq-a09", "a09", "squash", 1385, "pts", { wins: 3, losses: 7, streak: 0, previousRank: 12 }),
  r("r-sq-a23", "a23", "squash", 1360, "pts", { wins: 2, losses: 7, streak: 0, previousRank: 13 }),
  r("r-sq-a16", "a16", "squash", 1330, "pts", { wins: 2, losses: 8, streak: 0, previousRank: 14 }),
];

function r(
  id: string,
  athleteId: string,
  discipline: Result["discipline"],
  valuePrimary: number,
  unitPrimary: string,
  extra: Partial<
    Pick<
      Result,
      | "valueSecondary"
      | "unitSecondary"
      | "wins"
      | "losses"
      | "streak"
      | "previousRank"
      | "isPersonalBest"
    >
  > = {},
): Result {
  return {
    id,
    athleteId,
    eventId: EVENT_ID,
    discipline,
    valuePrimary,
    unitPrimary,
    verified: true,
    createdAt: "2026-08-24",
    ...extra,
  };
}
