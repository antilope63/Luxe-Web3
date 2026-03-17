import { useRouter } from "expo-router";

import { EmptyState } from "../components/ui/EmptyState";
import { ScreenContainer } from "../components/ui/ScreenContainer";

export default function NotFoundScreen() {
  const router = useRouter();

  return (
    <ScreenContainer contentClassName="flex-1 items-center justify-center">
      <EmptyState
        title="Cette page n’existe pas"
        description="Revenez à l’accueil pour retrouver l’expérience principale, sans détour inutile."
        actionLabel="Retour à l’accueil"
        onActionPress={() => router.replace("/home")}
      />
    </ScreenContainer>
  );
}
