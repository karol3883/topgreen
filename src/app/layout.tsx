import type { Metadata } from "next";
import { Playfair_Display, Sora } from "next/font/google";
import "./globals.css";
import ParallaxHero from "@/components/ParallaxHero";
import RevealInit from "@/components/RevealInit";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TopGreen — ogrodzenia stalowe i bramy",
  description:
    "TopGreen — projekt, produkcja i montaż stalowych ogrodzeń oraz bram. Styl antracyt, pełne wsparcie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${sora.variable} ${playfair.variable} antialiased`}>
        <RevealInit />
        <ParallaxHero />
        {children}
      </body>
    </html>
  );
}
