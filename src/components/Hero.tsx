"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { currentEvent, partners } from "@/data/event";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-bg grain"
    >
      <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
        {/* Blurred full-bleed backdrop — only needed at wide desktop
            viewports, where the portrait-shaped source photo can't cover
            the frame without losing the subject to an aggressive crop. */}
        <Image
          src="/images/ynight/hero.jpg"
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          className="hidden scale-110 object-cover object-[25%_15%] opacity-70 blur-3xl brightness-[0.5] lg:block"
        />

        {/* Subject layer — full-bleed cover on mobile/tablet (where the
            image's own aspect is close enough to the viewport's), letterboxed
            and weighted right on desktop so the athlete is never cropped out. */}
        <div className="absolute inset-0 lg:inset-y-0 lg:left-auto lg:right-0 lg:w-[58%]">
          {!videoFailed && (
            <video
              className="h-full w-full object-cover object-[22%_18%] lg:object-contain lg:object-right-bottom"
              autoPlay
              muted
              loop
              playsInline
              poster="/images/ynight/hero.jpg"
              onError={() => setVideoFailed(true)}
            >
              <source src="/videos/hero-loop.mp4" type="video/mp4" />
            </video>
          )}
          {videoFailed && (
            <Image
              src="/images/ynight/hero.jpg"
              alt="Athlète en plein rallye de squash à Espace Y devant une foule en délire"
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover object-[22%_18%] lg:object-contain lg:object-right-bottom"
            />
          )}
        </div>
      </motion.div>

      {/* Gradient overlay — dark left to right, text anchored left */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 w-full pb-16 pt-32 sm:pb-24"
      >
        <div className="yn-container-wide">
          <p className="eyebrow mb-4">Espace Y</p>

          <h1 className="font-display text-white text-[clamp(3.4rem,14vw,9.5rem)] leading-[0.86]">
            Y Night
          </h1>

          <p className="mt-3 max-w-xl text-[clamp(1.05rem,1rem+1vw,1.5rem)] font-semibold uppercase tracking-wide text-white">
            Sport. Food. Music. <span className="text-accent-bright">People.</span>
          </p>

          <p className="mt-5 max-w-lg text-pretty text-lg text-text/90 sm:text-xl">
            Venez découvrir le squash comme vous ne l&rsquo;avez jamais vu.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#signup"
              className="pi-cut inline-flex h-14 items-center bg-accent px-8 text-base font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-bright sm:h-16 sm:px-9 sm:text-lg"
            >
              Je veux en être
            </a>
            <a
              href="#y-board"
              className="inline-flex h-14 items-center gap-2 border border-white/40 px-7 text-base font-semibold uppercase tracking-wide text-white transition-colors hover:border-white hover:bg-white/5 sm:h-16 sm:text-lg"
            >
              Voir le classement
              <ChevronDown size={18} />
            </a>
          </div>

          <p className="mt-8 eyebrow text-white/70">
            {currentEvent.durationHours} heures &middot; {currentEvent.priceCad}&nbsp;$
            &middot; {currentEvent.mealIncluded ? "Repas compris" : ""}
          </p>

          <p className="mt-2 text-sm text-muted">
            By {partners.host} &middot; Avec {partners.dj} &middot; En
            partenariat avec {partners.food}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
