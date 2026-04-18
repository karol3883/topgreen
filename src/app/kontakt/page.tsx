import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";
import JsonLd from "@/components/JsonLd";
import { fullAddress, siteConfig } from "@/data/site-config";
import { absoluteUrl, buildMetadata, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Kontakt | Ogrodzenia, bramy i furtki | GAPYS",
  description: `Skontaktuj się z GAPYS, aby omówić projekt, produkcję i montaż ogrodzenia, bramy lub furtki. Biuro: ${fullAddress}.`,
  path: "/kontakt",
  keywords: ["kontakt GAPYS", "ogrodzenia kontakt", "bramy kontakt", "furtki kontakt", "Warszawa"],
});

export default function Page() {
  return (
    <>
      <JsonLd
        id="contact-breadcrumbs"
        data={getBreadcrumbJsonLd([
          { name: "Strona główna", path: "/" },
          { name: "Kontakt", path: "/kontakt" },
        ])}
      />
      <JsonLd
        id="contact-page-data"
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Kontakt",
          url: absoluteUrl("/kontakt"),
          about: siteConfig.name,
        }}
      />
      <ContactPage />
    </>
  );
}
