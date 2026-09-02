"use client";

import { useState, type FormEvent } from "react";
import { Field, SelectField } from "@/components/ui/Field";
import { AGE_CATEGORIES, AGE_CATEGORY_LABELS, type Athlete } from "@/lib/types";
import { useStaffAthletes } from "@/lib/staffStore";

const SPORTS = ["Basketball", "Soccer", "Football", "Hockey", "Volleyball", "Baseball", "Squash"];

export function AthleteForm() {
  const { athletes, addAthlete } = useStaffAthletes();
  const [confirmation, setConfirmation] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const firstName = String(form.get("firstName") ?? "").trim();
    const lastInitial = String(form.get("lastInitial") ?? "").trim();
    if (!firstName || !lastInitial) return;

    const athlete: Athlete = {
      id: `staff-${Date.now()}`,
      firstName,
      lastInitial: lastInitial.endsWith(".") ? lastInitial : `${lastInitial}.`,
      birthYear: Number(form.get("birthYear")) || new Date().getFullYear() - 15,
      ageCategory: (form.get("ageCategory") as Athlete["ageCategory"]) || "U16",
      mainSport: String(form.get("mainSport") ?? "Basketball"),
      city: String(form.get("city") ?? "Québec"),
      avatarUrl: String(form.get("avatarUrl") ?? "") || undefined,
      consentPhoto: form.get("consentPhoto") === "on",
      createdAt: new Date().toISOString(),
    };

    addAthlete(athlete);
    setConfirmation(`${athlete.firstName} ${athlete.lastInitial} ajouté·e.`);
    e.currentTarget.reset();
  }

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <h3 className="font-display text-white text-2xl">Ajouter un athlète</h3>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Prénom" name="firstName" required />
          <Field label="Initiale (nom)" name="lastInitial" required maxLength={2} placeholder="B" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Année de naissance" name="birthYear" type="number" min={1970} max={2020} />
          <SelectField
            label="Catégorie d'âge"
            name="ageCategory"
            options={AGE_CATEGORIES.map((c) => ({ value: c, label: AGE_CATEGORY_LABELS[c] }))}
            defaultValue="U16"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <SelectField label="Sport principal" name="mainSport" options={SPORTS} />
          <Field label="Ville" name="city" defaultValue="Québec" />
        </div>

        <Field label="Photo (URL)" name="avatarUrl" optional placeholder="https://..." />

        <label className="flex items-center gap-2 text-sm text-text/90">
          <input type="checkbox" name="consentPhoto" className="h-4 w-4 accent-[var(--yn-accent-bright)]" />
          Consentement photo obtenu
        </label>

        <button
          type="submit"
          className="pi-cut-sm mt-2 h-12 bg-accent text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-bright"
        >
          Ajouter l&rsquo;athlète
        </button>

        {confirmation && (
          <p className="text-sm text-ok">{confirmation}</p>
        )}
      </form>

      <div>
        <h3 className="font-display text-white text-2xl">
          Ajoutés cette session ({athletes.length})
        </h3>
        <ul className="mt-4 divide-y divide-line border border-line">
          {athletes.length === 0 && (
            <li className="p-4 text-sm text-muted-2">Aucun athlète ajouté pour l&rsquo;instant.</li>
          )}
          {athletes.map((a) => (
            <li key={a.id} className="p-4 text-sm text-text/90">
              {a.firstName} {a.lastInitial} &middot; {a.mainSport} &middot; {a.city}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
