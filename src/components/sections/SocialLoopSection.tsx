"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

const LOOP = ["Venir", "Jouer", "Être filmé", "Être classé", "Partager", "Taguer un ami", "Revenir"];

export function SocialLoopSection() {
  return (
    <section id="social" className="relative overflow-hidden bg-bg py-24 sm:py-32">
      <div className="yn-container-wide">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow mb-4">Le cercle Y NIGHT</p>
            <h2 className="font-display text-white text-[clamp(2.4rem,1.9rem+3.2vw,5.5rem)] leading-[0.88]">
              Get ranked.
              <br />
              <span className="text-accent-bright">Get called out.</span>
            </h2>
          </div>

          <div className="hidden gap-3 sm:flex">
            <div className="relative h-28 w-28 overflow-hidden pi-cut-sm">
              <Image
                src="/images/ynight/social-face.jpg"
                alt="Athlète qui célèbre, poing levé, après une performance à Y NIGHT"
                fill
                sizes="112px"
                className="object-cover"
              />
            </div>
            <div className="relative h-28 w-28 overflow-hidden pi-cut-sm">
              <Image
                src="/images/ynight/social-friends.jpg"
                alt="Groupe d'amis qui rient en regardant un résultat sur un téléphone"
                fill
                sizes="112px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start gap-1 sm:mt-20 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
          {LOOP.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center gap-3"
            >
              <span className="pi-cut-sm border border-line bg-surface px-4 py-2.5 text-sm font-semibold uppercase tracking-wide text-white sm:px-5 sm:py-3 sm:text-base">
                {step}
              </span>
              {i < LOOP.length - 1 ? (
                <>
                  <ArrowDown size={18} className="text-accent-bright sm:hidden" />
                  <ArrowRight
                    size={18}
                    className="hidden text-accent-bright sm:block"
                  />
                </>
              ) : (
                <ArrowRight
                  size={18}
                  className="hidden text-accent-bright/60 sm:block"
                  aria-hidden
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
