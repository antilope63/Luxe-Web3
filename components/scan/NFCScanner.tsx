import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef } from "react";
import { Animated, Easing, Text, View } from "react-native";

import { palette, typography } from "../../constants/theme";
import { GoldButton } from "../ui/GoldButton";

type NFCScannerProps = {
  demoLabel: string;
  isScanning: boolean;
  onScanPress: () => void;
};

export function NFCScanner({
  demoLabel,
  isScanning,
  onScanPress,
}: NFCScannerProps) {
  const pulse = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(0.28)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(pulse, {
            toValue: 1.08,
            duration: 1800,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(pulse, {
            toValue: 1,
            duration: 1800,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ]),
        Animated.sequence([
          Animated.timing(opacity, {
            toValue: 0.42,
            duration: 1800,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 0.18,
            duration: 1800,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ]),
      ]),
    );

    animation.start();
    return () => animation.stop();
  }, [opacity, pulse]);

  return (
    <View className="items-center gap-8">
      <View className="items-center gap-5">
        <Animated.View
          style={{ opacity, transform: [{ scale: pulse }] }}
          className="absolute mt-5 h-72 w-72 rounded-full border border-gold bg-gold/10"
        />
        <View className="mt-5 h-72 w-72 items-center justify-center rounded-full border border-gold/30 bg-surface">
          <View className="h-48 w-48 items-center justify-center rounded-full border border-gold/20 bg-background">
            <Ionicons
              color={palette.goldLight}
              name="scan-circle-outline"
              size={88}
            />
          </View>
        </View>
      </View>
      <View className="items-center gap-3">
        <Text
          className="text-center text-3xl text-text-primary"
          style={{ fontFamily: typography.titleFamily }}
        >
          {isScanning ? "Simulation en cours" : "Lancer la démo"}
        </Text>
        <Text
          className="max-w-[280px] text-center text-base leading-7 text-subtext"
          style={{ fontFamily: typography.bodyFamily }}
        >
          {isScanning
            ? "Le passeport se prépare automatiquement. Le flow reste instantané pour les tests du MVP."
            : "Le scan est simulé pour le MVP. Un tap suffit pour ouvrir le prochain passeport."}
        </Text>
        <View className="rounded-full border border-border bg-surface px-4 py-2">
          <Text
            className="text-[11px] uppercase tracking-[3px] text-gold"
            style={{ fontFamily: typography.bodyFamily }}
          >
            {demoLabel}
          </Text>
        </View>
      </View>
      <View className="w-full">
        <GoldButton
          disabled={isScanning}
          label={isScanning ? "Simulation en cours" : "Simuler le scan"}
          onPress={onScanPress}
        />
      </View>
    </View>
  );
}
