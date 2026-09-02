// Core data model — shaped to map 1:1 onto future Supabase tables
// (athletes, events, results, event_disciplines). Everything here can be
// swapped for a live fetch without touching component code, as long as
// the shapes stay the same.

export type Discipline = "squash" | "sprint40" | "sled" | "baseball";

export type AgeCategory = "U14" | "U16" | "U18" | "college";

export const DISCIPLINES: Discipline[] = [
  "squash",
  "sprint40",
  "sled",
  "baseball",
];

export const DISCIPLINE_LABELS: Record<Discipline, string> = {
  squash: "Squash",
  sprint40: "40 Verges",
  sled: "Traîneau",
  baseball: "Baseball",
};

export const AGE_CATEGORIES: AgeCategory[] = ["U14", "U16", "U18", "college"];

export const AGE_CATEGORY_LABELS: Record<AgeCategory, string> = {
  U14: "U14",
  U16: "U16",
  U18: "U18",
  college: "Collégial",
};

export interface Athlete {
  id: string;
  firstName: string;
  /** Last name is never shown in full for minors — first initial only. */
  lastInitial: string;
  birthYear: number;
  ageCategory: AgeCategory;
  mainSport: string;
  city: string;
  avatarUrl?: string;
  consentPhoto: boolean;
  createdAt: string;
}

export interface Result {
  id: string;
  athleteId: string;
  eventId: string;
  discipline: Discipline;
  /** Time (s), distance (ft), or squash rating — meaning depends on discipline. */
  valuePrimary: number;
  /** Exit velocity (mph) for baseball, unused elsewhere. */
  valueSecondary?: number;
  unitPrimary: string;
  unitSecondary?: string;
  /** Squash-only record fields. */
  wins?: number;
  losses?: number;
  streak?: number;
  /** Seeded so the board can show movement arrows without a full history table. */
  previousRank?: number;
  isPersonalBest?: boolean;
  verified: boolean;
  createdAt: string;
}

export interface YEvent {
  id: string;
  name: string;
  location: string;
  /** null until a date is confirmed — never invent one. */
  date: string | null;
  status: "upcoming" | "past" | "draft";
  durationHours: number;
  priceCad: number;
  ageRangeLabel: string;
  mealIncluded: boolean;
}

/** Sled challenge event spec — configurable, never hardcode in components. */
export interface SledSpec {
  distanceM: number;
  loadLb: number;
  referenceTimeS: number;
}

export interface RankingEntry {
  athlete: Athlete;
  discipline: Discipline;
  rank: number;
  previousRank?: number;
  performanceLabel: string;
  performanceValue: number;
  secondaryLabel?: string;
  isPersonalBest?: boolean;
  result: Result;
}

export interface SignupSubmission {
  firstName: string;
  lastName: string;
  age: string;
  mainSport: string;
  email: string;
  phone?: string;
  school?: string;
  wantsNextEventInfo: boolean;
}
