import { partners } from "@/data/event";
import { SectionMedia } from "@/components/ui/SectionMedia";
import { Waveform } from "@/components/ui/Waveform";

export function MusicSection() {
  return (
    <section id="music" className="relative overflow-hidden bg-black py-24 sm:py-32">
      <div className="absolute inset-0">
        <SectionMedia
          imageSrc="/images/ynight/music.jpg"
          imageAlt="DJ Ed Sound derrière ses platines devant une foule éclairée en magenta"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />
      </div>

      <div className="yn-container-wide relative">
        <p className="eyebrow mb-4">La trame sonore</p>
        <h2 className="font-display text-white text-[clamp(2.4rem,1.9rem+3.2vw,5.5rem)] leading-[0.88]">
          Le son de
          <br />
          <span className="text-accent-bright">Y Night.</span>
        </h2>
        <p className="mt-6 text-2xl font-semibold uppercase tracking-wide text-white sm:text-3xl">
          {partners.dj}
        </p>

        <div className="mt-10 max-w-xs">
          <Waveform />
        </div>
      </div>
    </section>
  );
}
