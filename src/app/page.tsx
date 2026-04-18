import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Ogrodzenia, bramy i furtki na wymiar | GAPYS",
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
