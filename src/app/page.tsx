import type { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "GAPYS | Ogrodzenia, bramy i furtki",
  description:
    "GAPYS tworzy ogrodzenia, bramy i furtki dla nowoczesnych inwestycji. Projekt, produkcja i montaż w jednym standardzie.",
};

export default function Page() {
  return <HomePage />;
}
