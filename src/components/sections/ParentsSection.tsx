import { SectionMedia } from "@/components/ui/SectionMedia";

export function ParentsSection() {
  return (
    <section id="parents" className="relative bg-bg-2 py-24 sm:py-32">
      <div className="yn-container-wide grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="relative order-2 aspect-[4/3] w-full overflow-hidden pi-cut lg:order-1">
          <SectionMedia
            imageSrc="/images/ynight/parents.jpg"
            imageAlt="Un parent et un jeune athlète se félicitent sur un court de squash"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        <div className="order-1 lg:order-2">
          <p className="eyebrow mb-4">Les 30 dernières minutes</p>
          <h2 className="font-display text-white text-[clamp(2.4rem,1.9rem+3.2vw,5.5rem)] leading-[0.88]">
            Parents.
            <br />
            30 minutes.
            <br />
            <span className="text-accent-bright">Your turn.</span>
          </h2>

          <p className="mt-7 text-lg text-muted sm:text-xl">
            Les 30 dernières minutes sont aussi pour vous.
          </p>

          <ul className="mt-5 space-y-2 text-lg text-text/90">
            <li>Essayez le squash.</li>
            <li>Entrez dans les cages de baseball.</li>
            <li>Défiez votre jeune.</li>
            <li>Découvrez Espace Y.</li>
          </ul>

          <a
            href="#signup"
            className="pi-cut-sm mt-9 inline-flex h-14 items-center bg-accent px-8 text-base font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-bright"
          >
            J&rsquo;arrive plus tôt
          </a>
        </div>
      </div>
    </section>
  );
}
