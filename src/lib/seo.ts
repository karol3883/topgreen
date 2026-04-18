import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  noIndex?: boolean;
};

const metadataBase = new URL(siteConfig.siteUrl);

function normalizePath(path: string) {
  if (path === "/") return "/";
  return path.startsWith("/") ? path : `/${path}`;
}

export function absoluteUrl(path: string) {
  return new URL(normalizePath(path), metadataBase).toString();
}

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  type = "website",
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const canonicalPath = normalizePath(path);
  const uniqueKeywords = Array.from(new Set(keywords.filter(Boolean)));
  const robots = noIndex
    ? { index: false, follow: false }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large" as const,
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      };

  return {
    metadataBase,
    title,
    description,
    keywords: uniqueKeywords,
    alternates: {
      canonical: canonicalPath,
    },
    robots,
    openGraph: {
      title,
      description,
      url: canonicalPath,
      siteName: siteConfig.name,
      locale: "pl_PL",
      type,
      images: [
        {
          url: siteConfig.ogImage.path,
          width: siteConfig.ogImage.width,
          height: siteConfig.ogImage.height,
          alt: siteConfig.ogImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage.path],
    },
  };
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    inLanguage: "pl-PL",
  };
}

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.siteUrl,
    logo: absoluteUrl("/logo-optimized.webp"),
    email: siteConfig.email,
    telephone: siteConfig.phoneDisplay,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: siteConfig.phoneDisplay,
        email: siteConfig.email,
        areaServed: "PL",
        availableLanguage: ["pl-PL"],
      },
    ],
    ...(siteConfig.socialLinks.length ? { sameAs: siteConfig.socialLinks.map((item) => item.href) } : {}),
  };
}

export function getAreaServedJsonLd() {
  return [
    ...siteConfig.serviceRegions.map((region) => ({
      "@type": "AdministrativeArea",
      name: region,
    })),
    ...siteConfig.serviceAreas.map((city) => ({
      "@type": "City",
      name: city,
    })),
  ];
}

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.legalName,
    image: absoluteUrl(siteConfig.ogImage.path),
    url: siteConfig.siteUrl,
    email: siteConfig.email,
    telephone: siteConfig.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    openingHoursSpecification: siteConfig.openingHours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${hours.dayOfWeek}`,
      opens: hours.opens,
      closes: hours.closes,
    })),
    areaServed: getAreaServedJsonLd(),
    description: siteConfig.description,
  };
}

export function getBreadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function getItemListJsonLd({
  name,
  items,
}: {
  name: string;
  items: Array<{ name: string; path: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}
