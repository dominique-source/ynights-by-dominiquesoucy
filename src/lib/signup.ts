import type { SignupSubmission } from "./types";

/**
 * Mock submit endpoint. Swap the body for a Supabase insert or a Formspree
 * POST once credentials exist — the calling form doesn't need to change.
 */
export async function submitSignup(data: SignupSubmission): Promise<{ ok: true }> {
  await new Promise((resolve) => setTimeout(resolve, 700));
  if (typeof window !== "undefined") {
    console.info("[Y NIGHT] signup submission (mock)", data);
  }
  return { ok: true };
}
