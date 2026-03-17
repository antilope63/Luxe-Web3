import type { PassportRecord, WatchSummary } from "../types/domain";

export const mockPassports: PassportRecord[] = [
  {
    id: "passport-royal-oak",
    nfcId: "nfc-ro-15202",
    brand: "Audemars Piguet",
    model: "Royal Oak Jumbo Extra-Thin",
    image: require("../assets/watches/watch-black-wrist.jpg"),
    collectionLabel: "Royal Oak",
    reference: "15202ST",
    year: "2022",
    material: "Acier brossé",
    accent: "Bleu fumé",
    authenticityLabel: "Authenticité confirmée",
    ownerExperience:
      "Passeport actif et prêt à être partagé en boutique ou en conciergerie.",
    origin: "Le Brassus, Suisse",
    lastServiceDate: "Mai 2025",
    story:
      "Une pièce iconique, pensée pour une lecture pure et une présence discrètement magistrale.",
    careNote:
      "Conservez la montre à l’abri des champs magnétiques puissants et nettoyez-la avec un tissu doux.",
    status: "verified",
    heroColors: ["#2A261C", "#0F1012"],
  },
  {
    id: "passport-daytona",
    nfcId: "nfc-daytona-126508",
    brand: "Rolex",
    model: "Cosmograph Daytona",
    image: require("../assets/watches/watch-gold-closeup.jpg"),
    collectionLabel: "Daytona",
    reference: "126508",
    year: "2024",
    material: "Or jaune 18 ct",
    accent: "Champagne soleil",
    authenticityLabel: "Authenticité confirmée",
    ownerExperience:
      "Les informations essentielles restent visibles en un regard, sans exposition technique.",
    origin: "Genève, Suisse",
    lastServiceDate: "Janvier 2026",
    story:
      "Une lecture lumineuse, calibrée pour mettre en avant la montre avant tout le reste.",
    careNote:
      "Évitez les chocs et les variations thermiques prolongées pour préserver la précision.",
    status: "verified",
    heroColors: ["#3A2C09", "#130F08"],
  },
  {
    id: "passport-nautilus",
    nfcId: "nfc-nautilus-5711",
    brand: "Patek Philippe",
    model: "Nautilus",
    image: require("../assets/watches/watch-silver-dark.jpg"),
    collectionLabel: "Nautilus",
    reference: "5711/1A",
    year: "2021",
    material: "Acier poli et satiné",
    accent: "Gris graphite",
    authenticityLabel: "Authenticité confirmée",
    ownerExperience:
      "Une présentation calme, pensée pour renforcer la sensation de rareté et de maîtrise.",
    origin: "Plan-les-Ouates, Suisse",
    lastServiceDate: "Octobre 2025",
    story:
      "Le passeport valorise la provenance et la sérénité d’usage plutôt que la technicité brute.",
    careNote:
      "Rangez la pièce sur coussin lorsque vous ne la portez pas pour préserver le bracelet.",
    status: "verified",
    heroColors: ["#252525", "#0E0E0E"],
  },
];

export const mockCollection: WatchSummary[] = mockPassports.map(
  ({
    authenticityLabel: _authenticityLabel,
    ownerExperience: _ownerExperience,
    origin: _origin,
    lastServiceDate: _lastServiceDate,
    story: _story,
    careNote: _careNote,
    status: _status,
    heroColors: _heroColors,
    ...watch
  }) => watch,
);
