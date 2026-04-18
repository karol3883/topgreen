export const siteConfig = {
  name: "GAPYS",
  legalName: "GAPYS",
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://gapys.pl").replace(/\/+$/, ""),
  defaultTitle: "Ogrodzenia, bramy i furtki na wymiar",
  description:
    "GAPYS projektuje, produkuje i montuje nowoczesne ogrodzenia, bramy oraz furtki dla inwestycji prywatnych i komercyjnych.",
  ogImage: {
    path: "/img.png",
    width: 1320,
    height: 447,
    alt: "GAPYS - ogrodzenia, bramy i furtki na wymiar",
  },
  phoneDisplay: "(+48) 511 201 919",
  phoneHref: "tel:+48511201919",
  email: "gapys.biuro@gmail.com",
  emailHref: "mailto:gapys.biuro@gmail.com",
  address: {
    street: "Brudzewice 9",
    postalCode: "26-315",
    city: "Poświętne",
    region: "łódzkie",
    country: "PL",
  },
  openingHours: [
    { dayOfWeek: "Monday", opens: "08:00", closes: "17:00" },
    { dayOfWeek: "Tuesday", opens: "08:00", closes: "17:00" },
    { dayOfWeek: "Wednesday", opens: "08:00", closes: "17:00" },
    { dayOfWeek: "Thursday", opens: "08:00", closes: "17:00" },
    { dayOfWeek: "Friday", opens: "08:00", closes: "17:00" },
  ],
  serviceAreas: ["Warszawa", "Łódź", "Lublin", "Kielce", "Piaseczno", "Radom"],
  socialLinks: [] as Array<{ label: string; href: string }>,
} as const;

export const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city}`;

export const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&z=13&output=embed`;
