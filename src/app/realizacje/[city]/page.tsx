import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CityRealizationDetail from "@/components/CityRealizationDetail";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { cityPages } from "@/data/city-realizations";

type PageProps = {
  params: Promise<{ city: string }>;
};

function getCityPage(slug: string) {
  return cityPages[slug];
}

export function generateStaticParams() {
  return Object.keys(cityPages).map((city) => ({ city }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const page = getCityPage(city);

  if (!page) {
    return {};
  }

  return {
    title: `${page.title} | ${page.city} | GAPYS`,
    description: `${page.city}: ${page.description}`,
  };
}

export default async function CityRealizationsPage({ params }: PageProps) {
  const { city } = await params;
  const page = getCityPage(city);

  if (!page) {
    notFound();
  }

  return (
    <>
      <SiteHeader activeHref="/realizacje" />

      <main>
        <PageHero
          eyebrow="Wybrana realizacja"
          title={page.city}
          description={page.title}
          fineprint={`${page.city} / ${page.region}`}
          titleId="city-realizations-title"
          actions={
            <>
              <a className="btn btn-primary" href="#projekty">
                Zobacz galerie
              </a>
              <a className="btn btn-secondary" href="#opis-realizacji">
                Przejdz do opisu
              </a>
            </>
          }
        />

        <div id="opis-realizacji">
          <CityRealizationDetail page={page} />
        </div>
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
