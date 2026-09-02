import type { Athlete } from "@/lib/types";

// Fictional seed athletes only — no real people. Public identity for minors
// is limited to first name + last initial + age category + main sport +
// city, per the privacy rule in the project brief.
export const athletes: Athlete[] = [
  { id: "a01", firstName: "Malik", lastInitial: "B.", birthYear: 2010, ageCategory: "U16", mainSport: "Basketball", city: "Québec", consentPhoto: true, createdAt: "2026-05-02" },
  { id: "a02", firstName: "Éloi", lastInitial: "S.", birthYear: 2009, ageCategory: "U18", mainSport: "Football", city: "Lévis", consentPhoto: true, createdAt: "2026-05-02" },
  { id: "a03", firstName: "Noah", lastInitial: "T.", birthYear: 2011, ageCategory: "U16", mainSport: "Baseball", city: "Charlesbourg", consentPhoto: true, createdAt: "2026-05-03" },
  { id: "a04", firstName: "Léa", lastInitial: "G.", birthYear: 2012, ageCategory: "U14", mainSport: "Soccer", city: "Sainte-Foy", consentPhoto: true, createdAt: "2026-05-03" },
  { id: "a05", firstName: "Amélie", lastInitial: "R.", birthYear: 2010, ageCategory: "U16", mainSport: "Volleyball", city: "Beauport", consentPhoto: true, createdAt: "2026-05-04" },
  { id: "a06", firstName: "Jayden", lastInitial: "M.", birthYear: 2009, ageCategory: "U18", mainSport: "Baseball", city: "Québec", consentPhoto: true, createdAt: "2026-05-04" },
  { id: "a07", firstName: "Zachary", lastInitial: "D.", birthYear: 2008, ageCategory: "college", mainSport: "Hockey", city: "Lévis", consentPhoto: true, createdAt: "2026-05-05" },
  { id: "a08", firstName: "Camille", lastInitial: "P.", birthYear: 2011, ageCategory: "U16", mainSport: "Soccer", city: "Val-Bélair", consentPhoto: true, createdAt: "2026-05-05" },
  { id: "a09", firstName: "Xavier", lastInitial: "L.", birthYear: 2013, ageCategory: "U14", mainSport: "Hockey", city: "Charlesbourg", consentPhoto: true, createdAt: "2026-05-06" },
  { id: "a10", firstName: "Alicia", lastInitial: "N.", birthYear: 2010, ageCategory: "U16", mainSport: "Basketball", city: "Québec", consentPhoto: true, createdAt: "2026-05-06" },
  { id: "a11", firstName: "Émile", lastInitial: "F.", birthYear: 2008, ageCategory: "college", mainSport: "Football", city: "Sainte-Foy", consentPhoto: true, createdAt: "2026-05-07" },
  { id: "a12", firstName: "Sarah", lastInitial: "V.", birthYear: 2012, ageCategory: "U14", mainSport: "Volleyball", city: "Beauport", consentPhoto: true, createdAt: "2026-05-07" },
  { id: "a13", firstName: "Gabriel", lastInitial: "C.", birthYear: 2009, ageCategory: "U18", mainSport: "Baseball", city: "Lévis", consentPhoto: true, createdAt: "2026-05-08" },
  { id: "a14", firstName: "Mia", lastInitial: "A.", birthYear: 2011, ageCategory: "U16", mainSport: "Soccer", city: "Québec", consentPhoto: true, createdAt: "2026-05-08" },
  { id: "a15", firstName: "Thomas", lastInitial: "H.", birthYear: 2007, ageCategory: "college", mainSport: "Hockey", city: "L'Ancienne-Lorette", consentPhoto: true, createdAt: "2026-05-09" },
  { id: "a16", firstName: "Rosalie", lastInitial: "B.", birthYear: 2013, ageCategory: "U14", mainSport: "Basketball", city: "Charlesbourg", consentPhoto: true, createdAt: "2026-05-09" },
  { id: "a17", firstName: "Nathan", lastInitial: "K.", birthYear: 2010, ageCategory: "U16", mainSport: "Football", city: "Québec", consentPhoto: true, createdAt: "2026-05-10" },
  { id: "a18", firstName: "Charlie", lastInitial: "E.", birthYear: 2009, ageCategory: "U18", mainSport: "Volleyball", city: "Beauport", consentPhoto: true, createdAt: "2026-05-10" },
  { id: "a19", firstName: "Béatrice", lastInitial: "M.", birthYear: 2012, ageCategory: "U14", mainSport: "Soccer", city: "Loretteville", consentPhoto: true, createdAt: "2026-05-11" },
  { id: "a20", firstName: "Olivier", lastInitial: "J.", birthYear: 2008, ageCategory: "college", mainSport: "Baseball", city: "Lévis", consentPhoto: true, createdAt: "2026-05-11" },
  { id: "a21", firstName: "Florence", lastInitial: "O.", birthYear: 2011, ageCategory: "U16", mainSport: "Hockey", city: "Sainte-Foy", consentPhoto: true, createdAt: "2026-05-12" },
  { id: "a22", firstName: "Samuel", lastInitial: "W.", birthYear: 2009, ageCategory: "U18", mainSport: "Basketball", city: "Québec", consentPhoto: true, createdAt: "2026-05-12" },
  { id: "a23", firstName: "Juliette", lastInitial: "Y.", birthYear: 2013, ageCategory: "U14", mainSport: "Volleyball", city: "Charlesbourg", consentPhoto: true, createdAt: "2026-05-13" },
  { id: "a24", firstName: "Antoine", lastInitial: "R.", birthYear: 2007, ageCategory: "college", mainSport: "Football", city: "Québec", consentPhoto: true, createdAt: "2026-05-13" },
];

export function getAthlete(id: string): Athlete | undefined {
  return athletes.find((a) => a.id === id);
}
