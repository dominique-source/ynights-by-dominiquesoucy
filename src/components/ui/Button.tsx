"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "md" | "lg" | "xl";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: ReactNode;
}

interface ButtonAsButton extends BaseProps {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
}

interface ButtonAsLink extends BaseProps {
  href: string;
  onClick?: () => void;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const sizeClasses: Record<Size, string> = {
  md: "h-11 px-5 text-sm gap-2",
  lg: "h-14 px-7 text-base gap-2.5",
  xl: "h-16 px-9 text-lg gap-3",
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-bright active:bg-accent-deep shadow-[0_0_0_1px_rgba(242,56,90,0.4)]",
  secondary:
    "bg-white text-bg hover:bg-text",
  outline:
    "bg-transparent text-white border border-white/35 hover:border-white hover:bg-white/5",
  ghost: "bg-transparent text-white hover:bg-white/10",
};

export function Button({
  children,
  variant = "primary",
  size = "lg",
  className,
  icon,
  href,
  onClick,
  ...rest
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-body font-semibold uppercase tracking-wide pi-cut-sm transition-all duration-[var(--yn-dur-fast)] ease-out whitespace-nowrap select-none",
    sizeClasses[size],
    variantClasses[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  const { type = "button" } = rest as ButtonAsButton;

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {icon}
    </button>
  );
}
