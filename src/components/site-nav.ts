export const offerNavItem = {
  href: "/oferta",
  label: "Oferta",
  children: [
    { href: "/oferta/brama-przesuwna", label: "Bramy" },
    { href: "/oferta/furtki-wejsciowe", label: "Furtki" },
    { href: "/oferta/ogrodzenia-palisadowe", label: "Ogrodzenia" },
  ],
};

export const serviceAreasNavItem = {
  href: "/obszar-dzialania",
  label: "Obszar działania",
  children: [
    { href: "/obszar-dzialania/lodzkie", label: "Łódzkie" },
    { href: "/obszar-dzialania/mazowieckie", label: "Mazowieckie" },
    { href: "/obszar-dzialania/swietokrzyskie", label: "Świętokrzyskie" },
  ],
};

export const siteNavItems = [
  { href: "/", label: "Strona główna" },
  offerNavItem,
  serviceAreasNavItem,
  { href: "/galeria", label: "Galeria" },
  { href: "/kontakt", label: "Kontakt" },
];
