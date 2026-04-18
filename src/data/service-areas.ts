export type ServiceRegion = {
  slug: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  lead: string;
  description: string;
  detailTitle: string;
  detailDescription: string;
  processTitle: string;
  processDescription: string;
  ctaTitle: string;
  ctaDescription: string;
  cities: string[];
};

export const serviceRegions: ServiceRegion[] = [
  {
    slug: "lodzkie",
    name: "Łódzkie",
    seoTitle: "Ogrodzenia Łódzkie | Bramy, furtki i montaż | GAPYS",
    seoDescription:
      "GAPYS obsługuje inwestycje w województwie łódzkim. Projekt, produkcja i montaż ogrodzeń, bram oraz furtek dla klientów indywidualnych i firm.",
    lead: "Jeden z głównych regionów obsługi GAPYS.",
    description:
      "W tym regionie realizujemy pomiary, wyceny i montaż dla klientów indywidualnych oraz firm. To dobry wybór dla inwestorów, którzy chcą połączyć nowoczesny projekt z jedną odpowiedzialnością za cały proces.",
    detailTitle: "Ogrodzenia, bramy i furtki w województwie łódzkim.",
    detailDescription:
      "W łódzkim prowadzimy inwestycje od pierwszego kontaktu po finalny montaż. Klienci z tego regionu trafiają do nas najczęściej po nowoczesne ogrodzenia frontowe, bramy przesuwne, furtki wejściowe i spójną automatykę.",
    processTitle: "Jak prowadzimy inwestycje w łódzkim",
    processDescription:
      "Stawiamy na jeden standard współpracy: konsultacja, pomiar, dobór rozwiązania, produkcja i montaż. Dzięki temu klient nie musi rozdzielać projektu, wykonania i uruchomienia między kilka firm.",
    ctaTitle: "Planujesz inwestycję w łódzkim?",
    ctaDescription:
      "Napisz do nas, jeśli szukasz wykonawcy, który poprowadzi ogrodzenie, bramę i furtkę jako jeden dopracowany system.",
    cities: ["Drzewica", "Opoczno", "Tomaszów Mazowiecki"],
  },
  {
    slug: "mazowieckie",
    name: "Mazowieckie",
    seoTitle: "Ogrodzenia Mazowieckie | Bramy, furtki i montaż | GAPYS",
    seoDescription:
      "GAPYS obsługuje wybrane inwestycje w województwie mazowieckim. Nowoczesne ogrodzenia, bramy i furtki z projektem, produkcją i montażem.",
    lead: "Obsługujemy inwestycje prywatne i komercyjne również po stronie mazowieckiej.",
    description:
      "To obszar dla inwestorów, którzy szukają jednego wykonawcy od projektu po montaż oraz spójnego standardu dla ogrodzenia, bramy i furtki.",
    detailTitle: "Ogrodzenia, bramy i furtki w województwie mazowieckim.",
    detailDescription:
      "W mazowieckim realizujemy inwestycje dla klientów, którzy oczekują nowoczesnego wzornictwa i pełnej odpowiedzialności za efekt końcowy. Pracujemy zarówno przy domach jednorodzinnych, jak i przy bardziej rozbudowanych frontach posesji.",
    processTitle: "Kompleksowa obsługa inwestycji w mazowieckim",
    processDescription:
      "Łączymy estetykę z praktyką użytkowania: dobieramy układ frontu, rodzaj bramy, furtki i automatykę tak, żeby cały system był spójny i wygodny na co dzień.",
    ctaTitle: "Szukasz wykonawcy w mazowieckim?",
    ctaDescription:
      "Przygotujemy kierunek realizacji dopasowany do inwestycji i zakresu prac, bez przypadkowych decyzji na etapie projektu i montażu.",
    cities: ["Nowe Miasto nad Pilicą", "Przysucha", "Białobrzegi"],
  },
  {
    slug: "swietokrzyskie",
    name: "Świętokrzyskie",
    seoTitle: "Ogrodzenia Świętokrzyskie | Bramy, furtki i montaż | GAPYS",
    seoDescription:
      "GAPYS obsługuje wybrane miasta województwa świętokrzyskiego. Projekt, produkcja i montaż ogrodzeń, bram oraz furtek w jednym standardzie.",
    lead: "Realizujemy również inwestycje w wybranych miastach województwa świętokrzyskiego.",
    description:
      "W tym regionie oferujemy ten sam standard obsługi: konsultację, pomiar, produkcję i montaż dopasowany do charakteru inwestycji.",
    detailTitle: "Ogrodzenia, bramy i furtki w województwie świętokrzyskim.",
    detailDescription:
      "W świętokrzyskim prowadzimy inwestycje z naciskiem na trwałość, spójny detal i dopasowanie ogrodzenia do architektury domu albo obiektu. Każdy etap zamykamy w jednym procesie po stronie GAPYS.",
    processTitle: "Jedna odpowiedzialność za cały proces",
    processDescription:
      "Klient dostaje jeden punkt kontaktu i jeden standard wykonania. To upraszcza współpracę i pozwala lepiej kontrolować efekt wizualny oraz techniczny całego wejścia i wjazdu.",
    ctaTitle: "Planujesz ogrodzenie w świętokrzyskim?",
    ctaDescription:
      "Skontaktuj się z nami, jeśli zależy Ci na nowoczesnym systemie ogrodzenia z dobrze dobraną bramą, furtką i automatyką.",
    cities: ["Końskie", "Stąporków", "Skarżysko-Kamienna"],
  },
];

export const serviceRegionsMap = Object.fromEntries(serviceRegions.map((region) => [region.slug, region]));
export const serviceRegionNames = serviceRegions.map((region) => region.name);
export const serviceCityNames = serviceRegions.flatMap((region) => region.cities);
