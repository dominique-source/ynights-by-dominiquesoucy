import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://ynight.espacey.ca";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Y NIGHT | Squash, défis, DJ et bouffe à Espace Y",
    template: "%s | Y NIGHT",
  },
  description:
    "Découvre Y NIGHT à Espace Y : squash, cages de baseball, 40 verges, sled challenge, DJ, pizza, sous-marins libanais et classement provincial pour jeunes athlètes.",
  keywords: [
    "squash Québec",
    "activité ado Québec",
    "sport ado Québec",
    "Espace Y",
    "squash jeune",
    "baseball intérieur Québec",
    "soirée sportive Québec",
    "activités jeunes sportifs Québec",
  ],
  authors: [{ name: "Dominique Soucy" }],
  openGraph: {
    title: "Y NIGHT | Squash, défis, DJ et bouffe à Espace Y",
    description:
      "Sport. Food. Music. People. Une soirée sportive sociale de 2 heures à Espace Y — squash, cages de baseball, 40 verges, sled challenge, DJ Ed Sound et classement provincial.",
    url: siteUrl,
    siteName: "Y NIGHT",
    locale: "fr_CA",
    type: "website",
    images: [
      {
        url: "/images/ynight/hero.jpg",
        width: 820,
        height: 1092,
        alt: "Y NIGHT à Espace Y",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Y NIGHT | Squash, défis, DJ et bouffe à Espace Y",
    description:
      "Sport. Food. Music. People. Découvre Y NIGHT à Espace Y et le classement provincial.",
    images: ["/images/ynight/hero.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr-CA"
      className={`${anton.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        {children}
      </body>
    </html>
  );
}
