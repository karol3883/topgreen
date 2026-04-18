import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { cityPages } from "@/data/city-realizations";
import { buildMetadata, getBreadcrumbJsonLd, getItemListJsonLd } from "@/lib/seo";

const cityOrder = ["warszawa", "lodz", "lublin", "kielce"] as const;

export const metadata: Metadata = buildMetadata({
  title: "Realizacje ogrodzeń i bram | GAPYS",
  description:
    "Przegląd realizacji GAPYS w wybranych miastach. Zobacz przykłady nowoczesnych ogrodzeń, bram i furtek dopasowanych do architektury inwestycji.",
  path: "/realizacje",
  keywords: ["realizacje ogrodzeń", "realizacje bram", "ogrodzenia Warszawa", "bramy Łódź", "GAPYS"],
});

export default function Page() {
  const items = cityOrder.map((slug) => ({
    slug,
    ...cityPages[slug],
  }));

  return (
    <>
      <JsonLd
        id="realizations-index-structured-data"
        data={[
          getBreadcrumbJsonLd([
            { name: "Strona główna", path: "/" },
            { name: "Realizacje", path: "/realizacje" },
          ]),
          getItemListJsonLd({
            name: "Realizacje GAPYS",
            items: items.map((item) => ({
              name: `${item.city} - ${item.title}`,
              path: `/realizacje/${item.slug}`,
            })),
          }),
        ]}
      />

      <SiteHeader activeHref="/realizacje" />

      <main>
        <PageHero
          eyebrow="Realizacje"
          title="Wybrane realizacje w miastach, w których pracowaliśmy."
          description="Każda realizacja pokazuje inny układ frontu posesji, inne proporcje i inny punkt nacisku: wygodę użytkowania, detal, spójność kompozycji albo reprezentacyjny efekt wejścia."
          fineprint="Bramy / ogrodzenia / furtki / automatyka"
          titleId="realizations-index-title"
        />

        <section className="section section-divider">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Miasta</span>
                <h2>Każda podstrona pokazuje przykładowy kierunek realizacji.</h2>
              </div>
              <p>
                To ważny punkt dla local SEO i dla użytkownika, który chce zobaczyć przykłady podobnych inwestycji w
                konkretnym regionie.
              </p>
            </div>

            <div className="usp-grid">
              {items.map((item) => (
                <article key={item.slug} className="usp-card">
                  <span className="pill">{item.region}</span>
                  <h3>{item.city}</h3>
                  <p>{item.description}</p>
                  <Link className="offer-link" href={`/realizacje/${item.slug}`}>
                    Zobacz realizację <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter
        navLinks={[
          { href: "/", label: "Strona główna" },
          { href: "/oferta", label: "Oferta" },
          { href: "/realizacje", label: "Realizacje" },
          { href: "/kontakt", label: "Kontakt" },
        ]}
      />
    </>
  );
}
