import { useState } from "react";
import { Text, View } from "react-native";
import { useRouter } from "expo-router";

import { GoldButton } from "../components/ui/GoldButton";
import { ScreenContainer } from "../components/ui/ScreenContainer";
import { SectionHeader } from "../components/ui/SectionHeader";
import { onboardingSlides } from "../constants/onboarding";
import { typography } from "../constants/theme";

export default function OnboardingScreen() {
  const router = useRouter();
  const [index, setIndex] = useState(0);

  const slide = onboardingSlides[index];
  const isLast = index === onboardingSlides.length - 1;

  const handlePress = () => {
    if (isLast) {
      router.replace("/entry");
      return;
    }

    setIndex((current) => current + 1);
  };

  return (
    <ScreenContainer contentClassName="flex-1 justify-between py-6">
      <View className="gap-10">
        <View className="flex-row gap-2 pt-2">
          {onboardingSlides.map((item, itemIndex) => (
            <View
              key={item.id}
              className={`h-1.5 rounded-full ${itemIndex === index ? "w-12 bg-gold" : "w-6 bg-border"}`}
            />
          ))}
        </View>
        <SectionHeader description={slide.description} eyebrow={slide.eyebrow} title={slide.title} />
        <View className="rounded-[34px] border border-border bg-surface px-6 py-8">
          <View className="rounded-[28px] border border-gold/15 bg-background px-5 py-12">
            <View className="mb-8 h-32 rounded-[24px] border border-gold/15 bg-gold/10" />
            <Text className="text-xs uppercase tracking-[4px] text-gold" style={{ fontFamily: typography.bodyFamily }}>
              {slide.accent}
            </Text>
            <Text className="mt-4 text-lg leading-8 text-text-primary" style={{ fontFamily: typography.bodyFamily }}>
              Une interface légère, peu chargée, centrée sur la montre et l’essentiel.
            </Text>
          </View>
        </View>
      </View>
      <GoldButton label={isLast ? "Entrer" : "Continuer"} onPress={handlePress} />
    </ScreenContainer>
  );
}
