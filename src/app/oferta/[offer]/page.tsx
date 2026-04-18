import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import OfferDetail from "@/components/OfferDetail";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { siteConfig } from "@/data/site-config";
import { offerPages } from "@/data/offer-pages";
import { absoluteUrl, buildMetadata, getBreadcrumbJsonLd } from "@/lib/seo";

type PageProps = {
  params: Promise<{ offer: string }>;
};

function getOfferPage(slug: string) {
  return offerPages[slug];
}

export function generateStaticParams() {
  return Object.keys(offerPages).map((offer) => ({ offer }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { offer } = await params;
  const page = getOfferPage(offer);

  if (!page) {
    return {};
  }

  return buildMetadata({
    title: page.seoTitle,
    description: page.description,
    path: `/oferta/${offer}`,
    keywords: [page.hero, page.offer, page.category, "GAPYS", "ogrodzenia", "bramy", "furtki"],
  });
}

export default async function OfferPage({ params }: PageProps) {
  const { offer } = await params;
  const page = getOfferPage(offer);

  if (!page) {
    notFound();
  }

  return (
    <>
      <JsonLd
        id={`offer-breadcrumbs-${offer}`}
        data={getBreadcrumbJsonLd([
          { name: "Strona główna", path: "/" },
          { name: "Oferta", path: "/oferta" },
          { name: page.hero, path: `/oferta/${offer}` },
        ])}
      />
      <JsonLd
        id={`offer-service-${offer}`}
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: page.hero,
          serviceType: page.offer,
          provider: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.siteUrl,
          },
          areaServed: siteConfig.serviceAreas.map((city) => ({
            "@type": "City",
            name: city,
          })),
          description: page.description,
          url: absoluteUrl(`/oferta/${offer}`),
        }}
      />
      <SiteHeader activeHref="/oferta" />

      <main>
        <PageHero
          eyebrow={page.category}
          title={page.hero}
          description={page.intro}
          fineprint={page.offer}
          titleId="offer-page-title"
          actions={
            <>
              <a className="btn btn-primary" href="#projekty">
                Zobacz galerie
              </a>
              <a className="btn btn-secondary" href="#opis-oferty">
                Przejdz do opisu
              </a>
            </>
          }
        />

        <div id="opis-oferty">
          <OfferDetail page={page} />
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
