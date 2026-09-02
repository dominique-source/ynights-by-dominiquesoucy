import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function initials(firstName: string, lastInitial: string) {
  return `${firstName.charAt(0)}${lastInitial.charAt(0)}`.toUpperCase();
}
