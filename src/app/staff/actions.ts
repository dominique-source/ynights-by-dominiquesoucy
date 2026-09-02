"use server";

import { cookies } from "next/headers";

const STAFF_COOKIE = "yn_staff_auth";
// Fallback only so the demo works before Vercel env vars are configured —
// set STAFF_PASSWORD in the environment for anything beyond local preview.
const FALLBACK_PASSWORD = "ynight2026";

export interface StaffLoginState {
  error?: string;
}

export async function staffLogin(
  _prevState: StaffLoginState,
  formData: FormData,
): Promise<StaffLoginState> {
  const password = String(formData.get("password") ?? "");
  const expected = process.env.STAFF_PASSWORD || FALLBACK_PASSWORD;

  if (password !== expected) {
    return { error: "Mot de passe incorrect." };
  }

  const store = await cookies();
  store.set(STAFF_COOKIE, "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return {};
}

export async function staffLogout() {
  const store = await cookies();
  store.delete(STAFF_COOKIE);
}

export async function isStaffAuthenticated() {
  const store = await cookies();
  return store.get(STAFF_COOKIE)?.value === "1";
}
