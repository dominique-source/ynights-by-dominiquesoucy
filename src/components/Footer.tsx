export function Footer() {
  return (
    <footer className="border-t border-line bg-bg py-10">
      <div className="yn-container-wide flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="font-display text-white text-xl">
          Y<span className="text-accent-bright">NIGHT</span>
        </p>
        <p className="text-sm text-muted-2">Espace Y &middot; Québec</p>
        <a
          href="/staff"
          className="text-xs uppercase tracking-widest text-muted-2/60 hover:text-muted-2"
        >
          Accès staff
        </a>
      </div>
    </footer>
  );
}
