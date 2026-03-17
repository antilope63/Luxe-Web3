import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { EmptyState } from "../../components/ui/EmptyState";
import { ScreenContainer } from "../../components/ui/ScreenContainer";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { WatchCard } from "../../components/watch/WatchCard";
import { typography } from "../../constants/theme";
import { getCollection } from "../../lib/passport-service";

export default function CollectionScreen() {
  const router = useRouter();
  const collection = getCollection();

  return (
    <ScreenContainer
      ambient="collection"
      includeBottomInset={false}
      scroll
      contentClassName="gap-5 py-6 pb-8"
    >
      <View className="gap-5">
        <SectionHeader
          description="Touchez une montre pour ouvrir son passeport."
          eyebrow="Collection"
          title="Toutes vos pièces"
        />
        <Text
          className="text-[11px] uppercase tracking-[3px] text-subtext"
          style={{ fontFamily: typography.bodyFamily }}
        >
          {collection.length} montres
        </Text>
        <View className="gap-4">
          {collection.length ? (
            collection.map((watch) => (
              <WatchCard
                key={watch.id}
                watch={watch}
                onPress={() =>
                  router.push({
                    pathname: "/passport/[id]",
                    params: { id: watch.nfcId },
                  })
                }
              />
            ))
          ) : (
            <EmptyState
              title="Aucune montre pour le moment"
              description="Scannez votre première pièce pour commencer une collection élégante et facile à parcourir."
              actionLabel="Scanner"
              onActionPress={() => router.push("/scan")}
            />
          )}
        </View>
      </View>
    </ScreenContainer>
  );
}
