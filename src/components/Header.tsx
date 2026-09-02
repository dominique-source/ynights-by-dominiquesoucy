"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#y-board", label: "Classement" },
  { href: "#squash", label: "Expérience" },
  { href: "#signup", label: "Je veux en être" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "bg-bg/90 backdrop-blur-md border-b border-line"
          : "bg-gradient-to-b from-black/60 to-transparent border-b border-transparent",
      )}
    >
      <div className="yn-container-wide flex h-16 items-center justify-between sm:h-20">
        <a
          href="#top"
          className="font-display text-2xl tracking-tight text-white sm:text-3xl"
        >
          Y<span className="text-accent-bright">NIGHT</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.slice(0, 2).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="eyebrow text-white/85 hover:text-accent-bright transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#signup"
            className="pi-cut-sm inline-flex h-11 items-center bg-accent px-5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-bright"
          >
            Je veux en être
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center text-white md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-bg px-4 pb-8 pt-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex h-14 items-center border-b border-line text-lg text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
