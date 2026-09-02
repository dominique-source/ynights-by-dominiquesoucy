"use client";

import { useState, type FormEvent } from "react";
import { athletes as seedAthletes } from "@/data/athletes";
import { currentEvent } from "@/data/event";
import { Field, SelectField } from "@/components/ui/Field";
import {
  DISCIPLINE_LABELS,
  DISCIPLINES,
  type Discipline,
  type Result,
} from "@/lib/types";
import { useStaffAthletes, useStaffResults } from "@/lib/staffStore";

export function ResultForm() {
  const { athletes: staffAthletes } = useStaffAthletes();
  const { results, addResult } = useStaffResults();
  const [discipline, setDiscipline] = useState<Discipline>("squash");
  const [confirmation, setConfirmation] = useState<string | null>(null);

  const allAthletes = [...seedAthletes, ...staffAthletes];

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const athleteId = String(form.get("athleteId") ?? "");
    if (!athleteId) return;

    let valuePrimary = 0;
    let unitPrimary = "";
    let valueSecondary: number | undefined;
    let unitSecondary: string | undefined;
    let wins: number | undefined;
    let losses: number | undefined;
    let streak: number | undefined;

    if (discipline === "squash") {
      wins = Number(form.get("wins")) || 0;
      losses = Number(form.get("losses")) || 0;
      streak = Number(form.get("streak")) || 0;
      valuePrimary = Number(form.get("rating")) || 1400;
      unitPrimary = "pts";
    } else if (discipline === "sprint40" || discipline === "sled") {
      valuePrimary = Number(form.get("time")) || 0;
      unitPrimary = "s";
    } else if (discipline === "baseball") {
      valuePrimary = Number(form.get("distance")) || 0;
      unitPrimary = "pi";
      const velo = Number(form.get("exitVelocity"));
      if (velo) {
        valueSecondary = velo;
        unitSecondary = "mph";
      }
    }

    const result: Result = {
      id: `staff-r-${Date.now()}`,
      athleteId,
      eventId: currentEvent.id,
      discipline,
      valuePrimary,
      unitPrimary,
      valueSecondary,
      unitSecondary,
      wins,
      losses,
      streak,
      verified: true,
      createdAt: new Date().toISOString(),
    };

    addResult(result);
    const athlete = allAthletes.find((a) => a.id === athleteId);
    setConfirmation(
      `Résultat publié pour ${athlete?.firstName ?? "l'athlète"} — ${DISCIPLINE_LABELS[discipline]}.`,
    );
    e.currentTarget.reset();
  }

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <h3 className="font-display text-white text-2xl">Ajouter un résultat</h3>

        <SelectField
          label="Athlète"
          name="athleteId"
          options={allAthletes.map((a) => ({
            value: a.id,
            label: `${a.firstName} ${a.lastInitial} — ${a.city}`,
          }))}
        />

        <Field label="Événement" value={currentEvent.name} disabled readOnly />

        <SelectField
          label="Discipline"
          name="discipline"
          value={discipline}
          onChange={(e) => setDiscipline(e.target.value as Discipline)}
          options={DISCIPLINES.map((d) => ({ value: d, label: DISCIPLINE_LABELS[d] }))}
        />

        {discipline === "squash" && (
          <div className="grid grid-cols-3 gap-4">
            <Field label="Rating" name="rating" type="number" defaultValue={1400} />
            <Field label="Victoires" name="wins" type="number" defaultValue={0} />
            <Field label="Défaites" name="losses" type="number" defaultValue={0} />
          </div>
        )}

        {(discipline === "sprint40" || discipline === "sled") && (
          <Field label="Temps (secondes)" name="time" type="number" step="0.01" required />
        )}

        {discipline === "baseball" && (
          <div className="grid grid-cols-2 gap-4">
            <Field label="Distance (pi)" name="distance" type="number" required />
            <Field label="Vitesse de sortie (mph)" name="exitVelocity" type="number" optional />
          </div>
        )}

        <button
          type="submit"
          className="pi-cut-sm mt-2 h-12 bg-accent text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-bright"
        >
          Publier le résultat
        </button>

        {confirmation && <p className="text-sm text-ok">{confirmation}</p>}
      </form>

      <div>
        <h3 className="font-display text-white text-2xl">
          Résultats publiés cette session ({results.length})
        </h3>
        <ul className="mt-4 divide-y divide-line border border-line">
          {results.length === 0 && (
            <li className="p-4 text-sm text-muted-2">Aucun résultat publié pour l&rsquo;instant.</li>
          )}
          {results.map((r) => {
            const athlete = allAthletes.find((a) => a.id === r.athleteId);
            return (
              <li key={r.id} className="p-4 text-sm text-text/90">
                {athlete?.firstName ?? "?"} {athlete?.lastInitial ?? ""} &middot;{" "}
                {DISCIPLINE_LABELS[r.discipline]} &middot; {r.valuePrimary}{" "}
                {r.unitPrimary}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
