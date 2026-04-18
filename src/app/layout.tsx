import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/data/site-config";
import { buildMetadata, getLocalBusinessJsonLd, getOrganizationJsonLd, getWebsiteJsonLd } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  ...buildMetadata({
    title: `${siteConfig.name} | ${siteConfig.defaultTitle}`,
    description: siteConfig.description,
    path: "/",
    keywords: [
      "ogrodzenia premium",
      "bramy przesuwne",
      "bramy skrzydłowe",
      "furtki wejściowe",
      "ogrodzenia Warszawa",
    ],
  }),
  applicationName: siteConfig.name,
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
        <JsonLd
          id="site-structured-data"
          data={[getWebsiteJsonLd(), getOrganizationJsonLd(), getLocalBusinessJsonLd()]}
        />
        {children}
      </body>
    </html>
  );
}
