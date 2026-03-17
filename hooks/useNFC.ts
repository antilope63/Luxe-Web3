import { useCallback, useState } from "react";
import { startMockNfcScan } from "../lib/nfc/mock";

export function useNFC() {
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startScan = useCallback(async () => {
    setIsScanning(true);
    setError(null);

    try {
      return await startMockNfcScan();
    } catch {
      const message = "Impossible de lire la montre pour le moment.";
      setError(message);
      throw new Error(message);
    } finally {
      setIsScanning(false);
    }
  }, []);

  return {
    demoLabel: "Démo MVP",
    error,
    isScanning,
    startScan,
  };
}
