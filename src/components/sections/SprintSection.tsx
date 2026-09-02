import { athletes } from "@/data/athletes";
import { results } from "@/data/results";
import { computeRankings } from "@/lib/rankings";
import { SectionMedia } from "@/components/ui/SectionMedia";
import { CountUp } from "@/components/ui/CountUp";

export function SprintSection() {
  const leader = computeRankings("sprint40", results, athletes)[0];

  return (
    <section id="sprint" className="relative bg-bg py-24 sm:py-32">
      <div className="yn-container-wide grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="eyebrow mb-4">40 verges</p>
          <h2 className="font-display text-white text-[clamp(3rem,2.4rem+4vw,7rem)] leading-[0.85]">
            The 40
          </h2>
          <p className="mt-5 text-lg text-muted sm:text-xl">
            40 verges. Deux essais.{" "}
            <span className="text-text">Un chrono.</span>
          </p>

          {leader && (
            <div className="mt-10 inline-flex flex-col border-l-2 border-accent-bright pl-5">
              <span className="eyebrow text-muted-2">Meneur actuel</span>
              <span className="font-display text-white text-6xl tnum leading-none sm:text-7xl">
                <CountUp to={leader.performanceValue} decimals={2} suffix=" sec" />
              </span>
              <span className="mt-2 text-sm text-white">
                {leader.athlete.firstName} {leader.athlete.lastInitial} &middot;{" "}
                Personal best
              </span>
            </div>
          )}
        </div>

        <div className="relative order-1 aspect-[4/3] w-full overflow-hidden pi-cut lg:order-2 lg:aspect-[5/4]">
          <SectionMedia
            imageSrc="/images/ynight/sprint.jpg"
            imageAlt="Athlète explosant au départ d'un sprint de 40 verges, coéquipiers qui regardent en arrière-plan"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <span className="absolute bottom-5 left-5 font-display text-white text-2xl">
            No excuses. <span className="text-accent-bright">Just the clock.</span>
          </span>
        </div>
      </div>
    </section>
  );
}
