import { useLocalSearchParams, useRouter } from "expo-router";

import { PassportCard } from "../../components/passport/PassportCard";
import { BackButton } from "../../components/ui/BackButton";
import { EmptyState } from "../../components/ui/EmptyState";
import { GoldButton } from "../../components/ui/GoldButton";
import { LoadingState } from "../../components/ui/LoadingState";
import { ScreenContainer } from "../../components/ui/ScreenContainer";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { usePassport } from "../../hooks/usePassport";

export default function PassportScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ id?: string | string[] }>();
  const nfcId = typeof params.id === "string" ? params.id : "";
  const { passport, isLoading, error } = usePassport(nfcId);

  return (
    <ScreenContainer ambient="passport" scroll contentClassName="gap-6 py-6">
      <BackButton label="Fermer" onPress={() => router.back()} />
      <SectionHeader eyebrow="Passeport" title="Identité digitale" />

      {isLoading ? <LoadingState /> : null}

      {!isLoading && error ? (
        <EmptyState
          title="Passeport indisponible"
          description={error}
          actionLabel="Relancer un scan"
          onActionPress={() => router.replace("/scan")}
        />
      ) : null}

      {!isLoading && passport ? (
        <>
          <PassportCard passport={passport} />
          <GoldButton
            label="Scanner une autre montre"
            onPress={() => router.push("/scan")}
          />
        </>
      ) : null}
    </ScreenContainer>
  );
}
