import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

function Tile({
  href,
  label,
  tag,
  image,
  className = "",
  objectPositionClassName = "object-center",
}: {
  href: string;
  label: string;
  tag: string;
  image: string;
  className?: string;
  objectPositionClassName?: string;
}) {
  return (
    <a
      href={href}
      className={`group relative block aspect-[4/3] overflow-hidden pi-cut-sm ${className}`}
    >
      <Image
        src={image}
        alt=""
        fill
        sizes="(min-width: 640px) 50vw, 100vw"
        className={`object-cover ${objectPositionClassName} transition-transform duration-[var(--yn-dur-slow)] ease-out group-hover:scale-[1.04]`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-6">
        <div>
          <p className="font-display text-white text-2xl sm:text-3xl">{label}</p>
          <p className="mt-1 text-sm text-muted-2">{tag}</p>
        </div>
        <ArrowUpRight
          className="text-white transition-transform duration-[var(--yn-dur-base)] group-hover:translate-x-1 group-hover:-translate-y-1"
          size={22}
        />
      </div>
    </a>
  );
}

export function ExperienceMosaic() {
  return (
    <section className="bg-bg-2 py-24 sm:py-32">
      <div className="yn-container-wide">
        <p className="eyebrow mb-4">L&rsquo;expérience</p>
        <h2 className="font-display text-white text-[clamp(2.2rem,1.8rem+2.8vw,4.5rem)] leading-[0.92]">
          Six zones. <span className="text-accent-bright">Une soirée.</span>
        </h2>

        <div className="mt-12 flex flex-col gap-4 sm:mt-16">
          <div className="flex flex-col gap-4 sm:flex-row">
            <Tile
              href="#squash"
              label="Squash"
              tag="Mains rapides. Pieds agiles."
              image="/images/ynight/squash.jpg"
              className="sm:aspect-auto sm:flex-[1.1]"
              objectPositionClassName="object-[50%_10%] sm:object-center"
            />
            <div className="flex flex-col gap-4 sm:flex-1">
              <Tile
                href="#baseball"
                label="Baseball"
                tag="Cage de frappe"
                image="/images/ynight/baseball.jpg"
                objectPositionClassName="object-[12%_50%] sm:object-center"
              />
              <Tile
                href="#sprint"
                label="40 Verges"
                tag="Un chrono. Aucune excuse."
                image="/images/ynight/sprint.jpg"
              />
            </div>
          </div>

          <Tile
            href="#sled"
            label="Traîneau"
            tag="Pousse. Fonce. Termine."
            image="/images/ynight/sled.jpg"
            className="sm:aspect-[21/6]"
          />
        </div>
      </div>
    </section>
  );
}
