import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GAPYS | Ogrodzenia, bramy i furtki",
  description:
    "GAPYS tworzy ogrodzenia, bramy i furtki dla nowoczesnych inwestycji. Projekt, produkcja i montaż w jednym standardzie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
