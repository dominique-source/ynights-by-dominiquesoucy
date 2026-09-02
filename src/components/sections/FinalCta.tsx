import { currentEvent, partners } from "@/data/event";

export function FinalCta() {
  return (
    <section className="relative bg-black py-28 text-center sm:py-36">
      <div className="yn-container">
        <p className="font-display text-white text-[clamp(1.6rem,1.3rem+2vw,3.25rem)] leading-[1.05]">
          You don&rsquo;t have to play squash.
        </p>
        <p className="font-display text-accent-bright text-[clamp(1.6rem,1.3rem+2vw,3.25rem)] leading-[1.05]">
          You just have to try it once.
        </p>

        <a
          href="#signup"
          className="pi-cut mt-12 inline-flex h-16 items-center bg-accent px-10 text-lg font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-bright sm:h-20 sm:px-14 sm:text-xl"
        >
          Je veux en être
        </a>

        <p className="mt-8 eyebrow text-muted-2">
          {currentEvent.durationHours} heures &middot; {currentEvent.priceCad}
          &nbsp;$ &middot; Repas compris
        </p>

        <div className="mx-auto mt-14 h-px w-24 bg-line" />

        <p className="mt-8 text-xs uppercase tracking-[0.2em] text-muted-2">
          {partners.venue} &middot; By {partners.host} &middot; {partners.dj}{" "}
          &middot; {partners.food}
        </p>
      </div>
    </section>
  );
}
