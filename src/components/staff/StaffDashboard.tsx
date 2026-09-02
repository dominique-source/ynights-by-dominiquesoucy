"use client";

import { useState } from "react";
import { LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { staffLogout } from "@/app/staff/actions";
import { AthleteForm } from "./AthleteForm";
import { ResultForm } from "./ResultForm";
import { EventForm } from "./EventForm";
import { StaffLeaderboard } from "./StaffLeaderboard";

const TABS = [
  { id: "athlete", label: "Add Athlete" },
  { id: "result", label: "Add Result" },
  { id: "event", label: "Manage Event" },
  { id: "rankings", label: "View Rankings" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function StaffDashboard() {
  const [tab, setTab] = useState<TabId>("athlete");

  return (
    <div className="min-h-screen bg-bg">
      <header className="border-b border-line">
        <div className="yn-container-wide flex h-16 items-center justify-between">
          <p className="font-display text-white text-xl">
            Y<span className="text-accent-bright">NIGHT</span>{" "}
            <span className="text-muted-2">/ Staff</span>
          </p>
          <form action={staffLogout}>
            <button
              type="submit"
              className="flex items-center gap-2 text-sm text-muted hover:text-white"
            >
              <LogOut size={16} />
              Déconnexion
            </button>
          </form>
        </div>
      </header>

      <div className="yn-container-wide py-10">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={cn(
                "shrink-0 pi-cut-sm border px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition-colors",
                tab === t.id
                  ? "border-accent bg-accent/15 text-accent-bright"
                  : "border-white/15 text-muted hover:border-white/40 hover:text-white",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-10">
          {tab === "athlete" && <AthleteForm />}
          {tab === "result" && <ResultForm />}
          {tab === "event" && <EventForm />}
          {tab === "rankings" && <StaffLeaderboard />}
        </div>
      </div>
    </div>
  );
}
