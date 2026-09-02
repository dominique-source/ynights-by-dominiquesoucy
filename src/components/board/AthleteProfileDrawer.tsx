"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Share2, Swords, X } from "lucide-react";
import { getAthleteProfile, nextTarget } from "@/lib/profile";
import {
  AGE_CATEGORY_LABELS,
  DISCIPLINE_LABELS,
  DISCIPLINES,
} from "@/lib/types";
import { initials } from "@/lib/utils";
import { ShareCard } from "./ShareCard";

interface AthleteProfileDrawerProps {
  athleteId: string | null;
  onClose: () => void;
}

export function AthleteProfileDrawer({
  athleteId,
  onClose,
}: AthleteProfileDrawerProps) {
  const [showShare, setShowShare] = useState(false);
  const profile = athleteId ? getAthleteProfile(athleteId) : undefined;

  useEffect(() => {
    if (!athleteId) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reset local UI state when the selected athlete changes
    setShowShare(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [athleteId, onClose]);

  return (
    <AnimatePresence>
      {profile && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`Profil de ${profile.athlete.firstName} ${profile.athlete.lastInitial}`}
          className="fixed inset-0 z-[100] flex justify-end"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grain relative flex h-full w-full flex-col overflow-y-auto bg-bg-2 sm:max-w-lg sm:border-l sm:border-line"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-bg-2/95 px-5 py-4 backdrop-blur">
              <span className="eyebrow">Profil athlète</span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Fermer le profil"
                className="flex h-10 w-10 items-center justify-center text-white hover:text-accent-bright"
              >
                <X size={22} />
              </button>
            </div>

            <div className="px-5 py-8 sm:px-8">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent font-display text-white text-3xl">
                {initials(profile.athlete.firstName, profile.athlete.lastInitial)}
              </div>

              <h2 className="font-display text-white text-4xl leading-[0.9] sm:text-5xl">
                {profile.athlete.firstName} {profile.athlete.lastInitial}
              </h2>
              <p className="mt-2 text-muted">
                {profile.athlete.mainSport} &middot;{" "}
                {AGE_CATEGORY_LABELS[profile.athlete.ageCategory]} &middot;{" "}
                {profile.athlete.city}
              </p>

              {profile.overallRank && (
                <div className="mt-8">
                  <p className="eyebrow text-muted-2">Classement Y global</p>
                  <p className="font-display text-accent-bright text-6xl tnum sm:text-7xl">
                    #{profile.overallRank}
                  </p>
                </div>
              )}

              <div className="mt-10 divider-line" />

              <div className="mt-8 grid grid-cols-2 gap-4">
                {DISCIPLINES.map((discipline) => {
                  const entry = profile.entries[discipline];
                  return (
                    <div
                      key={discipline}
                      className="bg-surface p-4 pi-cut-sm"
                    >
                      <p className="eyebrow text-muted-2">
                        {DISCIPLINE_LABELS[discipline]}
                      </p>
                      {entry ? (
                        <>
                          <p className="mt-1 font-display text-white text-2xl tnum">
                            #{entry.rank}
                          </p>
                          <p className="text-sm text-muted tnum">
                            {entry.performanceLabel}
                          </p>
                        </>
                      ) : (
                        <p className="mt-1 text-sm text-muted-2">
                          Pas encore essayé
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              {(() => {
                const target = nextTarget(profile);
                if (!target) return null;
                return (
                  <div className="mt-8 border border-accent/40 bg-accent/10 p-5 pi-cut-sm">
                    <p className="eyebrow text-accent-bright">Prochain objectif</p>
                    <p className="mt-2 font-display text-white text-xl">
                      {target.disciplineLabel}
                    </p>
                    <p className="mt-1 text-lg text-text tnum">
                      {target.currentLabel} &rarr;{" "}
                      <span className="text-accent-bright">
                        {target.targetLabel}
                      </span>
                    </p>
                  </div>
                );
              })()}

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#signup"
                  onClick={onClose}
                  className="pi-cut-sm inline-flex h-13 flex-1 items-center justify-center gap-2 bg-accent px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-bright"
                >
                  <Swords size={16} />
                  Défier {profile.athlete.firstName}
                </a>
                <button
                  type="button"
                  onClick={() => setShowShare((v) => !v)}
                  className="inline-flex h-13 flex-1 items-center justify-center gap-2 border border-white/30 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-white"
                >
                  <Share2 size={16} />
                  Partager le profil
                </button>
              </div>

              {showShare && (() => {
                const bestEntry = Object.values(profile.entries).sort(
                  (a, b) => (a?.rank ?? 999) - (b?.rank ?? 999),
                )[0];
                if (!bestEntry) return null;
                return (
                  <div className="mt-8">
                    <ShareCard athlete={profile.athlete} entry={bestEntry} />
                  </div>
                );
              })()}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
