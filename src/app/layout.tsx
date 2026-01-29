import type { Metadata } from "next";
import { Bricolage_Grotesque, Fraunces } from "next/font/google";
import "./globals.css";
import RevealInit from "@/components/RevealInit";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TopGreen — ogrodzenia i bramy",
  description:
    "TopGreen — nowoczesne ogrodzenia, bramy i systemy posesyjne. Projekt, produkcja i montaż.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${bricolage.variable} ${fraunces.variable} antialiased`}>
        <RevealInit />
        {children}
      </body>
    </html>
  );
}
