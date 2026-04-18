import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "GAPYS | Ogrodzenia, bramy i furtki premium",
  description:
    "GAPYS projektuje, produkuje i montuje nowoczesne ogrodzenia, bramy oraz furtki dla inwestycji prywatnych i komercyjnych.",
  path: "/",
  keywords: [
    "ogrodzenia",
    "bramy",
    "furtki",
    "ogrodzenia premium",
    "bramy przesuwne",
    "bramy skrzydłowe",
  ],
});

export default function Page() {
  return <HomePage />;
}
