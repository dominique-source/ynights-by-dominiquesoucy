import { partners } from "@/data/event";
import { SectionMedia } from "@/components/ui/SectionMedia";

export function FoodSection() {
  return (
    <section id="food" className="relative bg-bg py-24 sm:py-32">
      <div className="yn-container-wide grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="eyebrow mb-4">On mange bien</p>
          <h2 className="font-display text-white text-[clamp(2.4rem,1.9rem+3.2vw,5.5rem)] leading-[0.88]">
            Joue fort.
            <br />
            <span className="text-accent-bright">Mange bien.</span>
          </h2>
          <p className="mt-7 text-xl text-white">
            Pizza + sous-marins libanais
          </p>
          <p className="mt-2 text-lg text-muted">{partners.food}</p>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden pi-cut">
          <SectionMedia
            imageSrc="/images/ynight/food.jpg"
            imageAlt="Table vue du dessus couverte de pizza et de mets libanais partagés entre amis"
          />
        </div>
      </div>
    </section>
  );
}
