"use client";

const BAR_COUNT = 28;
// Deterministic pseudo-random heights so server/client markup matches.
const HEIGHTS = Array.from({ length: BAR_COUNT }, (_, i) =>
  20 + Math.round(60 * Math.abs(Math.sin(i * 12.9898))),
);

export function Waveform() {
  return (
    <div
      className="flex h-16 items-end gap-1 sm:h-20"
      role="img"
      aria-label="Visualisation animée du son de DJ Ed Sound"
    >
      {HEIGHTS.map((h, i) => (
        <span
          key={i}
          className="w-1.5 shrink-0 rounded-sm bg-accent-bright/80 sm:w-2"
          style={{
            height: `${h}%`,
            animation: `yn-wave 1.1s ease-in-out ${(i % 7) * 0.09}s infinite alternate`,
          }}
        />
      ))}
      <style>{`
        @keyframes yn-wave {
          from { transform: scaleY(0.35); opacity: 0.6; }
          to { transform: scaleY(1); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          span { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
