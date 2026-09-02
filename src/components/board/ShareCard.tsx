"use client";

import { useState } from "react";
import { Share2 } from "lucide-react";
import type { Athlete, RankingEntry } from "@/lib/types";
import { DISCIPLINE_LABELS } from "@/lib/types";
import { initials } from "@/lib/utils";

interface ShareCardProps {
  athlete: Athlete;
  entry: RankingEntry;
}

export function ShareCard({ athlete, entry }: ShareCardProps) {
  const [copied, setCopied] = useState(false);
  const isNew = entry.rank <= 3;

  async function handleShare() {
    const text = `${athlete.firstName} ${athlete.lastInitial} — #${entry.rank} ${DISCIPLINE_LABELS[entry.discipline]} (${entry.performanceLabel}) à Y NIGHT, Espace Y.`;
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ text, title: "Y NIGHT" });
        return;
      } catch {
        // user cancelled — fall through to clipboard
      }
    }
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="grain relative flex aspect-[9/16] w-full max-w-[280px] flex-col justify-between overflow-hidden bg-gradient-to-b from-surface to-bg p-6 pi-cut"
        style={{ boxShadow: "0 0 0 1px rgba(242,56,90,0.35), 0 24px 60px -20px rgba(242,56,90,0.35)" }}
      >
        <div className="flex items-center justify-between">
          <span className="eyebrow">
            {isNew ? `Nouveau #${entry.rank}` : `Rang #${entry.rank}`}
          </span>
          <span className="font-display text-white text-sm">YN</span>
        </div>

        <div>
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent font-display text-white text-2xl">
            {initials(athlete.firstName, athlete.lastInitial)}
          </div>
          <p className="font-display text-white text-3xl leading-[0.9]">
            {athlete.firstName} {athlete.lastInitial}
          </p>
          <p className="mt-2 eyebrow text-accent-bright">
            {DISCIPLINE_LABELS[entry.discipline]}
          </p>
          <p className="mt-3 font-display text-white text-5xl tnum leading-none">
            {entry.performanceLabel}
          </p>
        </div>

        <div>
          <div className="divider-x mb-3" />
          <p className="font-display text-white text-lg leading-tight">
            Y Night
          </p>
          <p className="text-xs text-muted-2">Espace Y</p>
          <p className="mt-3 eyebrow text-white/70">À qui le tour?</p>
        </div>
      </div>

      <button
        type="button"
        onClick={handleShare}
        className="pi-cut-sm inline-flex h-12 items-center gap-2 bg-white px-6 text-sm font-semibold uppercase tracking-wide text-bg transition-colors hover:bg-text"
      >
        <Share2 size={16} />
        {copied ? "Copié !" : "Partager le résultat"}
      </button>
    </div>
  );
}
