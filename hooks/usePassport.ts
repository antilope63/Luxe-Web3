import { useEffect, useState } from "react";

import type { PassportRecord } from "../types/domain";
import { fetchPassportByNfcId } from "../lib/passport-service";

export function usePassport(nfcId: string) {
  const [passport, setPassport] = useState<PassportRecord | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadPassport() {
      setIsLoading(true);
      setError(null);

      const result = await fetchPassportByNfcId(nfcId);
      if (!isMounted) {
        return;
      }

      if (!result) {
        setPassport(null);
        setError("Aucun passeport trouvé pour cette montre.");
        setIsLoading(false);
        return;
      }

      setPassport(result);
      setIsLoading(false);
    }

    loadPassport();

    return () => {
      isMounted = false;
    };
  }, [nfcId]);

  return { passport, isLoading, error };
}
