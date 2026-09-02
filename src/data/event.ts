import type { SledSpec, YEvent } from "@/lib/types";

// No date has been confirmed for the next Y NIGHT. Never invent one —
// the UI must read this as "date à venir" until ops fills it in.
export const currentEvent: YEvent = {
  id: "evt-2026-01",
  name: "Y NIGHT",
  location: "Espace Y, Québec",
  date: null,
  status: "draft",
  durationHours: 2,
  priceCad: 20,
  ageRangeLabel: "15–45",
  mealIncluded: true,
};

export const sledSpec: SledSpec = {
  distanceM: 20,
  loadLb: 90,
  referenceTimeS: 18.4,
};

export const partners = {
  venue: "Espace Y",
  host: "Dominique Soucy",
  dj: "DJ Ed Sound",
  food: "Restaurant Traiteur Éphèse",
};
