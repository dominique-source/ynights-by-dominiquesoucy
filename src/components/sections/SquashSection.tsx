import { SectionMedia } from "@/components/ui/SectionMedia";

const FORMATS = [
  "Initiation rapide",
  "Mini matchs",
  "Tournoi amical",
  "Démo semi-pro",
];

export function SquashSection() {
  return (
    <section id="squash" className="relative bg-bg py-24 sm:py-32">
      <div className="yn-container-wide grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
        <div className="relative aspect-[4/5] w-full overflow-hidden pi-cut lg:aspect-auto lg:h-full lg:min-h-[560px]">
          <SectionMedia
            imageSrc="/images/ynight/squash.jpg"
            imageAlt="Joueur de squash en pleine action dans un court vitré à Espace Y, foule en arrière-plan"
            videoSrc="/videos/squash-demo.mp4"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <span className="absolute bottom-5 left-5 eyebrow text-white">
            Sport signature
          </span>
        </div>

        <div className="flex flex-col justify-center">
          <p className="eyebrow mb-4">Le sport de la soirée</p>
          <h2 className="font-display text-white text-[clamp(2.2rem,1.8rem+2.8vw,4.5rem)] leading-[0.92]">
            Le squash
            <br />
            comme tu ne
            <br />
            l&rsquo;as <span className="text-accent-bright">jamais vu.</span>
          </h2>

          <p className="mt-7 text-xl text-white">
            Tu n&rsquo;as jamais joué? Parfait.
          </p>
          <p className="mt-2 text-lg text-muted">
            Y NIGHT est justement pensé pour ça.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3">
            {FORMATS.map((f) => (
              <li
                key={f}
                className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-text/90 sm:text-base"
              >
                <span className="h-1.5 w-1.5 shrink-0 bg-accent-bright" />
                {f}
              </li>
            ))}
          </ul>

          <p className="mt-10 font-display text-white text-lg sm:text-xl">
            Fast hands. Quick feet.{" "}
            <span className="text-accent-bright">Smart decisions.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
