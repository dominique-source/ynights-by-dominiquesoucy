import { sledSpec } from "@/data/event";
import { SectionMedia } from "@/components/ui/SectionMedia";

const SPECS = [
  { label: "Distance", value: `${sledSpec.distanceM} M` },
  { label: "Charge", value: `${sledSpec.loadLb} LB` },
  { label: "Temps référence", value: `${sledSpec.referenceTimeS.toFixed(1)} S` },
];

export function SledSection() {
  return (
    <section id="sled" className="relative bg-bg-2 py-24 sm:py-32">
      <div className="yn-container-wide">
        <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="eyebrow mb-3">Sled challenge</p>
            <h2 className="font-display text-white text-[clamp(3rem,2.4rem+4vw,7rem)] leading-[0.85]">
              Push.
            </h2>
          </div>
          <p className="text-lg text-muted sm:max-w-xs sm:text-right sm:text-xl">
            Push. Drive. <span className="text-text">Finish.</span>
          </p>
        </div>

        <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden pi-cut sm:aspect-[21/9]">
          <SectionMedia
            imageSrc="/images/ynight/sled.jpg"
            imageAlt="Athlète poussant un traîneau chargé sur un tapis de gazon synthétique, sous un logo Y lumineux"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-8">
          {SPECS.map((spec) => (
            <div key={spec.label} className="border-t-2 border-accent pt-4">
              <p className="font-display text-white text-3xl tnum sm:text-5xl">
                {spec.value}
              </p>
              <p className="mt-1 eyebrow text-muted-2">{spec.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
