import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { EmptyState } from "../../components/ui/EmptyState";
import { ScreenContainer } from "../../components/ui/ScreenContainer";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { WatchCard } from "../../components/watch/WatchCard";
import { typography } from "../../constants/theme";
import { getCollection, getFeaturedWatch } from "../../lib/passport-service";

export default function HomeScreen() {
  const router = useRouter();
  const collection = getCollection();
  const featuredWatch = getFeaturedWatch();

  return (
    <ScreenContainer
      ambient="home"
      includeBottomInset={false}
      scroll
      contentClassName="gap-6 py-6 pb-8"
    >
      <View className="gap-6">
        <View className="gap-3">
          <Text
            className="text-[11px] uppercase tracking-[4px] text-gold"
            style={{ fontFamily: typography.bodyFamily }}
          >
            Luxe Passport
          </Text>
          <SectionHeader
            description="Touchez une pièce ou passez par l’onglet scan."
            title="Votre collection en un regard."
          />
        </View>

        <View className="flex-row items-center justify-between rounded-full border border-border bg-surface px-4 py-3">
          <Text
            className="text-[11px] uppercase tracking-[3px] text-subtext"
            style={{ fontFamily: typography.bodyFamily }}
          >
            {collection.length} pièces disponibles
          </Text>
          <Text
            className="text-[11px] uppercase tracking-[3px] text-gold"
            style={{ fontFamily: typography.bodyFamily }}
          >
            MVP démo
          </Text>
        </View>

        <View className="gap-4">
          {featuredWatch ? (
            <WatchCard
              watch={featuredWatch}
              onPress={() =>
                router.push({
                  pathname: "/passport/[id]",
                  params: { id: featuredWatch.nfcId },
                })
              }
            />
          ) : (
            <EmptyState
              title="Votre collection est encore vide"
              description="Ajoutez une première montre pour commencer à construire un passeport sobre et rassurant."
              actionLabel="Scanner maintenant"
              onActionPress={() => router.push("/scan")}
            />
          )}
        </View>
      </View>
    </ScreenContainer>
  );
}
