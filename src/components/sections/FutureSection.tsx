const ITEMS = ["DJ", "Lumières", "Squash", "Baseball", "Défis", "Bouffe", "Amis"];

export function FutureSection() {
  return (
    <section className="relative bg-bg-2 py-24 sm:py-32">
      <div className="yn-container text-center">
        <span className="eyebrow inline-block border border-accent/50 px-3 py-1.5">
          À venir
        </span>

        <h2 className="mt-6 font-display text-muted-2 text-[clamp(1.6rem,1.3rem+1.6vw,3rem)] leading-none">
          La suite?
        </h2>
        <p className="mt-3 font-display text-white text-[clamp(2.6rem,2rem+4.5vw,6.5rem)] leading-[0.9]">
          Y Night
          <br />
          <span className="text-accent-bright">Disco ado &amp; sport</span>
        </p>

        <p className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-2 gap-y-1 text-lg text-text/90 sm:text-xl">
          {ITEMS.map((item) => (
            <span key={item}>
              {item}
              <span className="text-muted-2">.</span>
            </span>
          ))}
        </p>

        <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
          Une alternative sportive et sociale aux sorties traditionnelles.
        </p>
      </div>
    </section>
  );
}
