import { athletes } from "@/data/athletes";
import { results } from "@/data/results";
import { computeRankings } from "@/lib/rankings";
import { SectionMedia } from "@/components/ui/SectionMedia";

export function BaseballSection() {
  const leader = computeRankings("baseball", results, athletes)[0];

  return (
    <section id="baseball" className="relative bg-bg-2 py-24 sm:py-32">
      <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[21/9]">
        <SectionMedia
          imageSrc="/images/ynight/baseball.jpg"
          imageAlt="Joueur qui frappe dans une cage de baseball intérieure, écran affichant la distance de la frappe"
          objectPositionClassName="object-[60%_30%] sm:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-12">
          <div className="yn-container-wide !px-0">
            <p className="eyebrow mb-3">Cage de frappe baseball</p>
            <h2 className="font-display text-white text-[clamp(2.2rem,1.8rem+3vw,5rem)] leading-[0.9]">
              Jusqu&rsquo;où peux-tu
              <br />
              la frapper?
            </h2>
          </div>
        </div>
      </div>

      <div className="yn-container-wide mt-12 grid gap-8 sm:grid-cols-3">
        <p className="text-lg text-muted sm:col-span-2 sm:text-xl">
          Quelques frappes. Même cage. Même défi.{" "}
          <span className="text-text">Classement provincial.</span>
        </p>

        {leader && (
          <div className="border border-line bg-surface p-6 pi-cut-sm">
            <p className="eyebrow text-muted-2">Plus longue frappe</p>
            <p className="mt-2 font-display text-accent-bright text-5xl tnum leading-none">
              {leader.performanceLabel}
            </p>
            {leader.secondaryLabel && (
              <p className="mt-2 text-sm text-muted tnum">
                {leader.secondaryLabel.replace("mph sortie", "mph vitesse de sortie")}
              </p>
            )}
            <p className="mt-3 text-sm text-white">
              {leader.athlete.firstName} {leader.athlete.lastInitial} &middot;{" "}
              {leader.athlete.city}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
