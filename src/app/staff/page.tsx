import type { Metadata } from "next";
import { isStaffAuthenticated } from "./actions";
import { StaffLogin } from "@/components/staff/StaffLogin";
import { StaffDashboard } from "@/components/staff/StaffDashboard";

export const metadata: Metadata = {
  title: "Équipe",
  robots: { index: false, follow: false },
};

export default async function StaffPage() {
  const authed = await isStaffAuthenticated();
  return authed ? <StaffDashboard /> : <StaffLogin />;
}
