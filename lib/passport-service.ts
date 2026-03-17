import { mockCollection, mockPassports } from "../constants/mock-data";
import type { PassportRecord, WatchSummary } from "../types/domain";
import { wait } from "./utils";

export async function fetchPassportByNfcId(nfcId: string): Promise<PassportRecord | null> {
  await wait(900);
  return mockPassports.find((passport) => passport.nfcId === nfcId) ?? null;
}

export function getCollection(): WatchSummary[] {
  return mockCollection;
}

export function getFeaturedWatch(): WatchSummary | null {
  return mockCollection[0] ?? null;
}
