import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { fullAddress, siteConfig } from "@/data/site-config";
import { serviceRegions } from "@/data/service-areas";
import { buildMetadata, getBreadcrumbJsonLd, getItemListJsonLd } from "@/lib/seo";

const regionKeywords = serviceRegions.flatMap((region) => [region.name, ...region.cities]);

export const metadata: Metadata = buildMetadata({
  title: "Obszar działania | Ogrodzenia, bramy i furtki | GAPYS",
  description: `GAPYS obsługuje inwestycje w województwie łódzkim, mazowieckim i świętokrzyskim. Baza firmy: ${fullAddress}.`,
  path: "/obszar-dzialania",
  keywords: [
    "obszar działania GAPYS",
    "ogrodzenia łódzkie",
    "ogrodzenia mazowieckie",
    "ogrodzenia świętokrzyskie",
    ...regionKeywords,
  ],
});

export default function Page() {
  return (
    <>
      <JsonLd
        id="service-areas-structured-data"
        data={[
          getBreadcrumbJsonLd([
            { name: "Strona główna", path: "/" },
            { name: "Obszar działania", path: "/obszar-dzialania" },
          ]),
          getItemListJsonLd({
            name: "Obszar działania GAPYS",
            items: serviceRegions.map((region) => ({
              name: `${region.name}: ${region.cities.join(", ")}`,
              path: `/obszar-dzialania/${region.slug}`,
            })),
          }),
        ]}
      />

      <SiteHeader activeHref="/obszar-dzialania" />

      <main>
        <PageHero
          eyebrow="Obszar działania"
          title="Obsługujemy inwestycje w łódzkim, mazowieckim i świętokrzyskim."
          description="Prowadzimy pomiary, wyceny, produkcję i montaż dla klientów z wybranych miast centralnej Polski. Poniżej pokazujemy aktualny obszar działania GAPYS."
          fineprint="Łódzkie / Mazowieckie / Świętokrzyskie"
          titleId="service-areas-title"
          actions={
            <>
              <a className="btn btn-primary" href="#wojewodztwa">
                Zobacz miasta
              </a>
              <Link className="btn btn-secondary" href="/kontakt">
                Poproś o wycenę
              </Link>
            </>
          }
        />

        <section className="section section-divider" id="wojewodztwa">
          <div className="container">
            <div className="section-head">
              <div>
                <span className="eyebrow">Województwa i miasta</span>
                <h2>Wybrane województwa i miasta, które obecnie obsługujemy.</h2>
              </div>
              <p>
                Pokazujemy uporządkowany obszar działania GAPYS, żeby łatwo sprawdzić, gdzie aktualnie prowadzimy
                inwestycje w zakresie ogrodzeń, bram, furtek i automatyki.
              </p>
            </div>

            <div className="usp-grid service-area-grid">
              {serviceRegions.map((region) => (
                <article key={region.slug} id={region.slug} className="usp-card service-area-card">
                  <span className="pill">{region.name}</span>
                  <h3>{region.lead}</h3>
                  <p>{region.description}</p>
                  <div className="badges service-area-badges">
                    {region.cities.map((city) => (
                      <span key={city} className="badge">
                        {city}
                      </span>
                    ))}
                  </div>
                  <div className="service-area-links">
                    <Link className="offer-link" href={`/obszar-dzialania/${region.slug}`}>
                      Zobacz województwo <span aria-hidden="true">→</span>
                    </Link>
                    <Link className="offer-link" href="/kontakt">
                      Poproś o wycenę <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-divider">
          <div className="container story-grid">
            <article className="luxury-panel">
              <span className="eyebrow">Punkt bazowy</span>
              <h2>Brudzewice to siedziba GAPYS i punkt organizacyjny dla całego procesu realizacji.</h2>
              <p>
                To tutaj koordynujemy kontakt z klientem, pomiar, produkcję i montaż. Jeśli Twojej miejscowości nie ma
                jeszcze na liście, nadal warto się odezwać. Często rozszerzamy obsługę o kolejne lokalizacje, jeśli
                zakres inwestycji pasuje do naszej oferty.
              </p>
              <div className="hero-actions service-area-actions">
                <Link className="btn btn-primary" href="/kontakt">
                  Skontaktuj się z nami
                </Link>
                <a className="btn btn-secondary" href={siteConfig.phoneHref}>
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <p className="service-area-note">
                Adres bazowy firmy: <strong>{fullAddress}</strong>
              </p>
            </article>

            <aside className="stats-panel">
              <article className="stat-card">
                <span className="pill">Baza firmy</span>
                <strong>{siteConfig.address.city}</strong>
                <span>To siedziba GAPYS i punkt organizacyjny dla inwestycji prowadzonych w wybranych regionach.</span>
              </article>
              <article className="stat-card">
                <span className="pill">Model pracy</span>
                <strong>Pomiar, produkcja i montaż</strong>
                <span>
                  Jeden zespół odpowiada za inwestycję od pierwszego kontaktu do finalnego ustawienia bramy i furtki.
                </span>
              </article>
              <article className="stat-card stat-card--wide">
                <span className="pill">Na ten moment</span>
                <strong>3 województwa i 9 miast w aktualnym obszarze obsługi</strong>
                <span>
                  To roboczy, uporządkowany zakres pod local SEO i codzienną organizację pracy. Listę będziemy
                  rozszerzać wtedy, gdy pojawią się realne zapytania i sensowna treść lokalna.
                </span>
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
