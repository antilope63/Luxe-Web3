import { mockPassports } from "../../constants/mock-data";
import { wait } from "../utils";

let cursor = 0;

export async function startMockNfcScan(): Promise<string> {
  await wait(1800);

  const nextPassport = mockPassports[cursor % mockPassports.length];
  cursor += 1;

  return nextPassport.nfcId;
}
