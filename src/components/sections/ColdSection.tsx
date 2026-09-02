import { SectionMedia } from "@/components/ui/SectionMedia";

export function ColdSection() {
  return (
    <section id="cold" className="relative bg-bg py-24 sm:py-32">
      <div className="yn-container-wide grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="relative aspect-[4/3] w-full overflow-hidden pi-cut">
          <SectionMedia
            imageSrc="/images/ynight/cold.jpg"
            imageAlt="Athlète qui respire profondément, la tête renversée, immergé dans un bain glacé"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        <div>
          <p className="eyebrow mb-4">Récupération</p>
          <h2 className="font-display text-white text-[clamp(2.6rem,2rem+4vw,6rem)] leading-[0.85]">
            Froid.
            <br />
            <span className="text-accent-bright">Très froid.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg text-muted sm:text-xl">
            Parce qu&rsquo;une Y NIGHT sans bain glacé serait beaucoup trop
            raisonnable.
          </p>
        </div>
      </div>
    </section>
  );
}
