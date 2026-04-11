import type { Metadata } from "next";
import { notFound } from "next/navigation";
import OfferDetail from "@/components/OfferDetail";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { offerPages } from "@/data/offer-pages";

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

  return {
    title: `${page.hero} | GAPYS`,
    description: page.description,
  };
}

export default async function OfferPage({ params }: PageProps) {
  const { offer } = await params;
  const page = getOfferPage(offer);

  if (!page) {
    notFound();
  }

  return (
    <>
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
