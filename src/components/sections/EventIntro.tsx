import { currentEvent } from "@/data/event";

const STATS = [
  { value: `${currentEvent.durationHours} H`, label: "de soirée" },
  { value: `${currentEvent.priceCad} $`, label: "tout inclus" },
  { value: currentEvent.ageRangeLabel, label: "ans" },
  { value: "Repas", label: "compris" },
];

export function EventIntro() {
  return (
    <section className="relative bg-bg py-24 sm:py-32">
      <div className="yn-container">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <p className="eyebrow mb-5">L&rsquo;idée</p>
            <h2 className="font-display text-white text-[clamp(2.2rem,1.8rem+3vw,4.5rem)] leading-[0.95]">
              Pas un entraînement.
              <br />
              Pas une clinique.
              <br />
              <span className="text-accent-bright">Une soirée.</span>
            </h2>
          </div>

          <div className="flex flex-col justify-center gap-6">
            <p className="text-lg text-text/90 sm:text-xl">
              Y NIGHT est une soirée sportive sociale de 2 heures pensée pour
              faire découvrir le squash et Espace Y à une nouvelle génération.
            </p>
            <p className="text-lg text-muted sm:text-xl">
              On vient pour les amis, la musique, les défis et la bouffe.
              Puis on découvre le squash.
            </p>
          </div>
        </div>

        <div className="mt-16 divider-line" />

        <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:mt-16 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-white text-[clamp(2.6rem,2rem+3vw,4.75rem)] leading-none tnum">
                {stat.value}
              </dd>
              <dd className="mt-2 eyebrow text-muted-2">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
