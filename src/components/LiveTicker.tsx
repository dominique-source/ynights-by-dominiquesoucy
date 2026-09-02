import { athletes } from "@/data/athletes";
import { results } from "@/data/results";
import { computeRankings } from "@/lib/rankings";
import { DISCIPLINE_LABELS, type Discipline } from "@/lib/types";

const DISCIPLINE_ORDER: Discipline[] = ["squash", "sprint40", "baseball", "sled"];

function buildTickerItems() {
  const items: { label: string }[] = [];
  for (const discipline of DISCIPLINE_ORDER) {
    const ranked = computeRankings(discipline, results, athletes).slice(0, 3);
    for (const entry of ranked) {
      items.push({
        label: `${entry.athlete.firstName} ${entry.athlete.lastInitial} · ${DISCIPLINE_LABELS[discipline]} · ${entry.rank === 1 ? "#1" : entry.performanceLabel}`,
      });
    }
  }
  return items;
}

export function LiveTicker() {
  const items = buildTickerItems();
  const track = [...items, ...items];

  return (
    <section className="border-y border-line bg-bg-2 py-8" aria-label="Classement provincial en direct">
      <div className="yn-container-wide mb-6 flex flex-wrap items-center justify-between gap-4">
        <h2 className="font-display text-white text-[clamp(1.8rem,1.4rem+2.5vw,3.5rem)] leading-none">
          Québec is playing.
        </h2>
        <span className="inline-flex items-center gap-2 border border-accent/50 px-3 py-1.5">
          <span className="h-2 w-2 rounded-full bg-live animate-pulse-live" aria-hidden />
          <span className="eyebrow">Classement provincial live</span>
        </span>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg-2 to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg-2 to-transparent sm:w-32" />
        <div className="flex w-max animate-marquee">
          {track.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 whitespace-nowrap px-6 text-lg font-semibold text-text sm:text-2xl"
            >
              <span className="tnum">{item.label}</span>
              <span className="text-accent" aria-hidden>
                &bull;
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
