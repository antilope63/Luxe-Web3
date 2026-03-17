import { useEffect, useRef } from "react";
import { Animated, Text, View } from "react-native";
import { useRouter } from "expo-router";

import { ScreenContainer } from "../components/ui/ScreenContainer";
import { typography } from "../constants/theme";

export default function SplashScreen() {
  const router = useRouter();
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(12)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, { toValue: 1, duration: 700, useNativeDriver: true }),
      Animated.timing(translateY, { toValue: 0, duration: 700, useNativeDriver: true }),
    ]).start();

    const timeout = setTimeout(() => {
      router.replace("/onboarding");
    }, 1600);

    return () => clearTimeout(timeout);
  }, [opacity, router, translateY]);

  return (
    <ScreenContainer contentClassName="flex-1 items-center justify-center">
      <Animated.View className="items-center gap-6" style={{ opacity, transform: [{ translateY }] }}>
        <View className="h-28 w-28 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
          <View className="h-16 w-16 rounded-full border border-gold/50 bg-background" />
        </View>
        <View className="items-center gap-2">
          <Text className="text-[11px] uppercase tracking-[5px] text-gold" style={{ fontFamily: typography.bodyFamily }}>
            Luxe Passport
          </Text>
          <Text className="text-4xl text-text-primary" style={{ fontFamily: typography.titleFamily }}>
            Quiet luxury for provenance.
          </Text>
        </View>
      </Animated.View>
    </ScreenContainer>
  );
}
