import { Text, View } from "react-native";
import { useRouter } from "expo-router";

import { GoldButton } from "../components/ui/GoldButton";
import { ScreenContainer } from "../components/ui/ScreenContainer";
import { SectionHeader } from "../components/ui/SectionHeader";
import { typography } from "../constants/theme";

export default function EntryScreen() {
  const router = useRouter();

  return (
    <ScreenContainer contentClassName="flex-1 justify-between py-8">
      <View className="gap-10 pt-10">
        <SectionHeader
          description="Approchez une montre et laissez l’application faire le reste. L’expérience reste calme, nette et immédiate."
          eyebrow="Accès"
          title="Le passeport digital le plus simple à ouvrir."
        />
        <View className="rounded-[32px] border border-border bg-surface p-6">
          <View className="rounded-[26px] border border-gold/10 bg-background p-6">
            <Text className="text-xs uppercase tracking-[4px] text-gold" style={{ fontFamily: typography.bodyFamily }}>
              Expérience premium
            </Text>
            <Text className="mt-4 text-lg leading-8 text-text-primary" style={{ fontFamily: typography.bodyFamily }}>
              Pas de jargon. Pas de friction. Seulement les informations qui comptent, au bon moment.
            </Text>
          </View>
        </View>
      </View>
      <GoldButton label="Continuer" onPress={() => router.replace("/home")} />
    </ScreenContainer>
  );
}
