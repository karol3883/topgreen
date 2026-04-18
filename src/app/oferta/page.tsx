import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { offerPages } from "@/data/offer-pages";
import { buildMetadata, getBreadcrumbJsonLd, getItemListJsonLd } from "@/lib/seo";

const offerOrder = [
  "ogrodzenia-palisadowe",
  "ogrodzenia-panelowe",
  "brama-przesuwna",
  "brama-skrzydlowa",
  "furtki-wejsciowe",
  "automatyka-i-kontrola",
] as const;

const visualClasses = ["offer-card--fence", "offer-card--gate", "offer-card--wicket"] as const;

export const metadata: Metadata = buildMetadata({
  title: "Oferta ogrodzeń, bram i furtek na wymiar | GAPYS",
  description:
    "Poznaj ofertę GAPYS: ogrodzenia palisadowe, systemy panelowe, bramy przesuwne i skrzydłowe, furtki oraz automatykę.",
  path: "/oferta",
  keywords: ["oferta ogrodzeń", "oferta bram", "furtki wejściowe", "automatyka bram", "GAPYS"],
});

export default function Page() {
  const items = offerOrder.map((slug) => ({
    slug,
    ...offerPages[slug],
  }));

  return (
    <>
      <JsonLd
        id="offer-index-structured-data"
        data={[
          getBreadcrumbJsonLd([
            { name: "Strona główna", path: "/" },
            { name: "Oferta", path: "/oferta" },
          ]),
          getItemListJsonLd({
            name: "Oferta GAPYS",
            items: items.map((item) => ({
              name: item.hero,
              path: `/oferta/${item.slug}`,
            })),
          }),
        ]}
      />

      <SiteHeader activeHref="/oferta" />

      <main>
        <PageHero
          eyebrow="Oferta"
          title="Ogrodzenia, bramy i furtki w jednym standardzie wykonania."
          description="Każdą usługę projektujemy tak, aby pasowała do architektury, dobrze działała na co dzień i tworzyła spójną całość z pozostałymi elementami frontu posesji."
          fineprint="Projekt / produkcja / montaż / automatyka"
          titleId="offer-index-title"
        />

        <section className="section section-divider">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Zakres usług</span>
                <h2>Wybierz usługę i przejdź do szczegółowego opisu.</h2>
              </div>
              <p>
                Każda podstrona oferty rozwija zakres prac, przykładowe zastosowania oraz elementy, które warto omówić
                przed realizacją.
              </p>
            </div>

            <div className="offers-grid">
              {items.map((item, index) => (
                <article key={item.slug} className={`offer-card ${visualClasses[index % visualClasses.length]}`}>
                  <div className="offer-visual" aria-hidden="true"></div>
                  <div>
                    <span className="pill">{item.category}</span>
                    <h3>{item.hero}</h3>
                    <p>{item.intro}</p>
                    <Link className="offer-link" href={`/oferta/${item.slug}`}>
                      Zobacz szczegóły <span aria-hidden="true">→</span>
                    </Link>
                  </div>
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
