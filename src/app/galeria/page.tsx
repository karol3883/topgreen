import type { Metadata } from "next";
import GalleryPage from "@/components/GalleryPage";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Galeria realizacji ogrodzeń i bram premium | GAPYS",
  description:
    "Galeria realizacji GAPYS: nowoczesne bramy przesuwne, bramy skrzydłowe oraz ogrodzenia dla inwestycji prywatnych i komercyjnych.",
  path: "/galeria",
  keywords: ["galeria ogrodzeń", "galeria bram", "realizacje ogrodzeń", "realizacje bram", "GAPYS"],
});

export default function Page() {
  return (
    <>
      <JsonLd
        id="gallery-breadcrumbs"
        data={getBreadcrumbJsonLd([
          { name: "Strona główna", path: "/" },
          { name: "Galeria", path: "/galeria" },
        ])}
      />
      <GalleryPage />
    </>
  );
}
