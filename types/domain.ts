import type { ImageSourcePropType } from "react-native";

export type WatchSummary = {
  id: string;
  nfcId: string;
  brand: string;
  model: string;
  image: ImageSourcePropType;
  collectionLabel: string;
  reference: string;
  year: string;
  material: string;
  accent: string;
};

export type PassportRecord = WatchSummary & {
  authenticityLabel: string;
  ownerExperience: string;
  origin: string;
  lastServiceDate: string;
  story: string;
  careNote: string;
  status: "verified";
  heroColors: readonly [string, string];
};
