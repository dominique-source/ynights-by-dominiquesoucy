"use client";

import { useActionState } from "react";
import { Lock } from "lucide-react";
import { staffLogin, type StaffLoginState } from "@/app/staff/actions";

const initialState: StaffLoginState = {};

export function StaffLogin() {
  const [state, formAction, pending] = useActionState(staffLogin, initialState);

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-4">
      <form
        action={formAction}
        className="w-full max-w-sm border border-line bg-surface p-8 pi-cut"
      >
        <Lock className="text-accent-bright" size={28} />
        <h1 className="mt-4 font-display text-white text-3xl">Staff mode</h1>
        <p className="mt-2 text-sm text-muted">
          Accès réservé à l&rsquo;équipe Y NIGHT.
        </p>

        <label htmlFor="staff-password" className="mt-8 block text-sm font-semibold text-text/90">
          Mot de passe
        </label>
        <input
          id="staff-password"
          name="password"
          type="password"
          required
          autoFocus
          className="mt-2 h-12 w-full border border-line bg-bg px-4 text-white outline-none focus:border-accent-bright"
        />

        {state.error && (
          <p className="mt-3 text-sm text-accent-bright">{state.error}</p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="pi-cut-sm mt-6 h-12 w-full bg-accent text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-bright disabled:opacity-60"
        >
          {pending ? "Vérification..." : "Entrer"}
        </button>
      </form>
    </div>
  );
}
