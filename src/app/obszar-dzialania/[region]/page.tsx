import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { siteConfig } from "@/data/site-config";
import { serviceRegions, serviceRegionsMap } from "@/data/service-areas";
import { absoluteUrl, buildMetadata, getBreadcrumbJsonLd, getItemListJsonLd } from "@/lib/seo";

type PageProps = {
  params: Promise<{ region: string }>;
};

const offerLinks = [
  { href: "/oferta/ogrodzenia-palisadowe", label: "Ogrodzenia palisadowe" },
  { href: "/oferta/brama-przesuwna", label: "Bramy przesuwne" },
  { href: "/oferta/furtki-wejsciowe", label: "Furtki wejściowe" },
];

function getRegionPage(slug: string) {
  return serviceRegionsMap[slug];
}

export function generateStaticParams() {
  return serviceRegions.map((region) => ({ region: region.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { region } = await params;
  const page = getRegionPage(region);

  if (!page) {
    return {};
  }

  return buildMetadata({
    title: page.seoTitle,
    description: page.seoDescription,
    path: `/obszar-dzialania/${region}`,
    keywords: [page.name, ...page.cities, "ogrodzenia", "bramy", "furtki", "GAPYS"],
  });
}

export default async function ServiceRegionPage({ params }: PageProps) {
  const { region } = await params;
  const page = getRegionPage(region);

  if (!page) {
    notFound();
  }

  return (
    <>
      <JsonLd
        id={`service-region-breadcrumbs-${region}`}
        data={[
          getBreadcrumbJsonLd([
            { name: "Strona główna", path: "/" },
            { name: "Obszar działania", path: "/obszar-dzialania" },
            { name: page.name, path: `/obszar-dzialania/${region}` },
          ]),
          getItemListJsonLd({
            name: `${page.name} - obsługiwane miasta`,
            items: page.cities.map((city) => ({
              name: city,
              path: `/obszar-dzialania/${region}`,
            })),
          }),
        ]}
      />
      <JsonLd
        id={`service-region-jsonld-${region}`}
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Obsługa inwestycji w województwie ${page.name}`,
          provider: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.siteUrl,
          },
          areaServed: [
            { "@type": "AdministrativeArea", name: page.name },
            ...page.cities.map((city) => ({ "@type": "City", name: city })),
          ],
          description: page.seoDescription,
          url: absoluteUrl(`/obszar-dzialania/${region}`),
        }}
      />

      <SiteHeader activeHref="/obszar-dzialania" />

      <main>
        <PageHero
          eyebrow="Województwo"
          title={page.detailTitle}
          description={page.detailDescription}
          fineprint={page.cities.join(" / ")}
          titleId="service-region-title"
          actions={
            <>
              <a className="btn btn-primary" href="#miasta">
                Zobacz miasta
              </a>
              <Link className="btn btn-secondary" href="/kontakt">
                Poproś o wycenę
              </Link>
            </>
          }
        />

        <section className="section section-divider" id="miasta">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Obsługiwane miasta</span>
                <h2>{page.processTitle}</h2>
              </div>
              <p>{page.processDescription}</p>
            </div>

            <div className="usp-grid service-area-grid">
              {page.cities.map((city) => (
                <article key={city} className="usp-card service-area-card">
                  <span className="pill">{page.name}</span>
                  <h3>{city}</h3>
                  <p>
                    Obsługujemy klientów z {city} w zakresie ogrodzeń, bram, furtek i automatyki, prowadząc cały
                    proces w jednym standardzie wykonania.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-divider">
          <div className="container story-grid">
            <article className="luxury-panel">
              <span className="eyebrow">Zakres usług</span>
              <h2>Najczęściej wybierane rozwiązania w tym regionie.</h2>
              <p>
                Klienci z tego województwa najczęściej łączą nowoczesne ogrodzenie frontowe z dopasowaną bramą,
                furtką i automatyką. Dzięki temu cały układ wejścia oraz wjazdu pozostaje spójny wizualnie i wygodny
                w codziennym użytkowaniu.
              </p>
              <div className="service-area-links">
                {offerLinks.map((offer) => (
                  <Link key={offer.href} className="offer-link" href={offer.href}>
                    {offer.label} <span aria-hidden="true">→</span>
                  </Link>
                ))}
              </div>
            </article>

            <aside className="stats-panel">
              <article className="stat-card">
                <span className="pill">Województwo</span>
                <strong>{page.name}</strong>
                <span>Osobna podstrona porządkuje lokalne SEO i pozwala jasno pokazać aktualny zakres obsługi.</span>
              </article>
              <article className="stat-card">
                <span className="pill">Miasta</span>
                <strong>{page.cities.length}</strong>
                <span>{page.cities.join(", ")}</span>
              </article>
              <article className="stat-card stat-card--wide">
                <span className="pill">Kontakt</span>
                <strong>{page.ctaTitle}</strong>
                <span>{page.ctaDescription}</span>
              </article>
            </aside>
          </div>
        </section>
      </main>

      <SiteFooter
        navLinks={[
          { href: "/", label: "Strona główna" },
          { href: "/oferta", label: "Oferta" },
          { href: "/obszar-dzialania", label: "Obszar działania" },
          { href: "/kontakt", label: "Kontakt" },
        ]}
      />
    </>
  );
}
