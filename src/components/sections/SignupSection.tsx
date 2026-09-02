"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Field, SelectField } from "@/components/ui/Field";
import { submitSignup } from "@/lib/signup";

const SPORTS = [
  "Basketball",
  "Soccer",
  "Football",
  "Hockey",
  "Volleyball",
  "Baseball",
  "Squash",
  "Autre",
];

export function SignupSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    await submitSignup({
      firstName: String(form.get("firstName") ?? ""),
      lastName: String(form.get("lastName") ?? ""),
      age: String(form.get("age") ?? ""),
      mainSport: String(form.get("mainSport") ?? ""),
      email: String(form.get("email") ?? ""),
      phone: String(form.get("phone") ?? "") || undefined,
      school: String(form.get("school") ?? "") || undefined,
      wantsNextEventInfo: form.get("wantsNextEventInfo") === "on",
    });
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section id="signup" className="relative bg-bg-2 py-24 sm:py-32">
      <div className="yn-container-wide grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow mb-4">Prochaine étape</p>
          <h2 className="font-display text-white text-[clamp(2.4rem,1.9rem+3.2vw,5.5rem)] leading-[0.88]">
            Je veux
            <br />
            <span className="text-accent-bright">en être.</span>
          </h2>
          <p className="mt-7 max-w-md text-lg text-muted sm:text-xl">
            Laisse tes infos — on t&rsquo;écrit dès que la prochaine Y NIGHT
            est confirmée.
          </p>
          <p className="mt-5 max-w-md text-sm text-muted-2">
            Les détails de la prochaine soirée seront envoyés lorsque la date
            sera confirmée.
          </p>
        </div>

        <div>
          {submitted ? (
            <div className="flex flex-col items-start gap-4 border border-accent/40 bg-accent/10 p-8 pi-cut">
              <CheckCircle2 size={40} className="text-accent-bright" />
              <p className="font-display text-white text-2xl">C&rsquo;est noté.</p>
              <p className="text-muted">
                On te contacte dès que la date de la prochaine Y NIGHT est
                confirmée.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-5">
                <Field label="Prénom" name="firstName" required autoComplete="given-name" />
                <Field label="Nom" name="lastName" required autoComplete="family-name" />
              </div>
              <div className="grid grid-cols-2 gap-5">
                <Field label="Âge" name="age" type="number" min={10} max={80} required />
                <SelectField label="Sport principal" name="mainSport" options={SPORTS} defaultValue="Basketball" />
              </div>
              <Field label="Courriel" name="email" type="email" required autoComplete="email" />
              <div className="grid grid-cols-2 gap-5">
                <Field label="Téléphone" name="phone" type="tel" optional autoComplete="tel" />
                <Field label="École / équipe" name="school" optional />
              </div>

              <label className="mt-1 flex items-start gap-3 text-sm text-text/90">
                <input
                  type="checkbox"
                  name="wantsNextEventInfo"
                  defaultChecked
                  className="mt-1 h-4 w-4 shrink-0 accent-[var(--yn-accent-bright)]"
                />
                Je veux être informé&middot;e de la prochaine Y NIGHT.
              </label>

              <button
                type="submit"
                disabled={loading}
                className="pi-cut mt-3 inline-flex h-16 items-center justify-center bg-accent px-9 text-lg font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-bright disabled:opacity-60"
              >
                {loading ? "Envoi..." : "Je veux en être"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
