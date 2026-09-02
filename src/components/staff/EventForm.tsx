"use client";

import { useEffect, useState, type FormEvent } from "react";
import { currentEvent, sledSpec } from "@/data/event";
import { Field } from "@/components/ui/Field";

const KEY = "yn_staff_event_overrides";

interface EventOverrides {
  date: string;
  priceCad: number;
  durationHours: number;
  sledDistanceM: number;
  sledLoadLb: number;
  sledReferenceTimeS: number;
}

function defaults(): EventOverrides {
  return {
    date: currentEvent.date ?? "",
    priceCad: currentEvent.priceCad,
    durationHours: currentEvent.durationHours,
    sledDistanceM: sledSpec.distanceM,
    sledLoadLb: sledSpec.loadLb,
    sledReferenceTimeS: sledSpec.referenceTimeS,
  };
}

export function EventForm() {
  const [saved, setSaved] = useState(false);
  const [values, setValues] = useState<EventOverrides>(defaults());

  useEffect(() => {
    const raw = window.localStorage.getItem(KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing from localStorage on mount
    if (raw) setValues(JSON.parse(raw));
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const next: EventOverrides = {
      date: String(form.get("date") ?? ""),
      priceCad: Number(form.get("priceCad")) || 0,
      durationHours: Number(form.get("durationHours")) || 0,
      sledDistanceM: Number(form.get("sledDistanceM")) || 0,
      sledLoadLb: Number(form.get("sledLoadLb")) || 0,
      sledReferenceTimeS: Number(form.get("sledReferenceTimeS")) || 0,
    };
    window.localStorage.setItem(KEY, JSON.stringify(next));
    setValues(next);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div>
      <h3 className="font-display text-white text-2xl">Gérer l&rsquo;événement</h3>
      <p className="mt-2 max-w-lg text-sm text-muted-2">
        Ces réglages sont sauvegardés localement pour prévisualisation équipe.
        Une fois Supabase branché, ils deviendront la source pour le site
        public en temps réel.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 grid max-w-xl gap-5 sm:grid-cols-2">
        <Field
          label="Date (laisser vide = à venir)"
          name="date"
          type="date"
          defaultValue={values.date}
        />
        <Field label="Prix (CAD)" name="priceCad" type="number" defaultValue={values.priceCad} />
        <Field label="Durée (heures)" name="durationHours" type="number" defaultValue={values.durationHours} />
        <div />
        <Field label="Sled — distance (m)" name="sledDistanceM" type="number" defaultValue={values.sledDistanceM} />
        <Field label="Sled — charge (lb)" name="sledLoadLb" type="number" defaultValue={values.sledLoadLb} />
        <Field
          label="Sled — temps référence (s)"
          name="sledReferenceTimeS"
          type="number"
          step="0.1"
          defaultValue={values.sledReferenceTimeS}
        />

        <button
          type="submit"
          className="pi-cut-sm sm:col-span-2 mt-2 h-12 bg-accent text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-bright"
        >
          Enregistrer
        </button>
        {saved && <p className="text-sm text-ok sm:col-span-2">Réglages enregistrés.</p>}
      </form>
    </div>
  );
}
