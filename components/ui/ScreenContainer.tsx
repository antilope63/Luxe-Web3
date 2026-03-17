import { LinearGradient } from "expo-linear-gradient";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { Animated, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { gradients } from "../../constants/theme";

type AmbientMode = "home" | "scan" | "collection" | "passport" | "default";

type ScreenContainerProps = {
  children: ReactNode;
  scroll?: boolean;
  className?: string;
  contentClassName?: string;
  footer?: ReactNode;
  ambient?: AmbientMode;
  includeBottomInset?: boolean;
};

export function ScreenContainer({
  children,
  scroll = false,
  className = "",
  contentClassName = "",
  footer,
  ambient = "default",
  includeBottomInset = true,
}: ScreenContainerProps) {
  const ambientConfig = getAmbientConfig(ambient);
  const orbOneX = useRef(
    new Animated.Value(ambientConfig.orbOne.fromX),
  ).current;
  const orbOneY = useRef(
    new Animated.Value(ambientConfig.orbOne.fromY),
  ).current;
  const orbTwoX = useRef(
    new Animated.Value(ambientConfig.orbTwo.fromX),
  ).current;
  const orbTwoY = useRef(
    new Animated.Value(ambientConfig.orbTwo.fromY),
  ).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(orbOneX, {
        toValue: ambientConfig.orbOne.toX,
        damping: 20,
        stiffness: 90,
        mass: 0.9,
        useNativeDriver: true,
      }),
      Animated.spring(orbOneY, {
        toValue: ambientConfig.orbOne.toY,
        damping: 20,
        stiffness: 90,
        mass: 0.9,
        useNativeDriver: true,
      }),
      Animated.spring(orbTwoX, {
        toValue: ambientConfig.orbTwo.toX,
        damping: 20,
        stiffness: 90,
        mass: 0.9,
        useNativeDriver: true,
      }),
      Animated.spring(orbTwoY, {
        toValue: ambientConfig.orbTwo.toY,
        damping: 20,
        stiffness: 90,
        mass: 0.9,
        useNativeDriver: true,
      }),
    ]).start();
  }, [ambientConfig, orbOneX, orbOneY, orbTwoX, orbTwoY]);

  return (
    <SafeAreaView
      className={`flex-1 bg-background ${className}`}
      edges={
        includeBottomInset
          ? ["top", "right", "bottom", "left"]
          : ["top", "right", "left"]
      }
    >
      <LinearGradient className="absolute inset-0" colors={gradients.screen} />
      <View className="absolute inset-0 overflow-hidden">
        <Animated.View
          className="absolute right-0 top-0 h-56 w-56 rounded-full bg-gold/10"
          style={{
            transform: [{ translateX: orbOneX }, { translateY: orbOneY }],
          }}
        />
        <Animated.View
          className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-gold/5"
          style={{
            transform: [{ translateX: orbTwoX }, { translateY: orbTwoY }],
          }}
        />
      </View>
      {scroll ? (
        <ScrollView
          className="flex-1"
          contentContainerClassName={`px-6 ${footer ? "pb-6" : "pb-12"} ${contentClassName}`}
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      ) : (
        <View className={`flex-1 px-6 ${contentClassName}`}>{children}</View>
      )}
      {footer ? <View className="px-5 pb-4 pt-3">{footer}</View> : null}
    </SafeAreaView>
  );
}

function getAmbientConfig(mode: AmbientMode) {
  switch (mode) {
    case "home":
      return {
        orbOne: { fromX: 90, fromY: -40, toX: 32, toY: -24 },
        orbTwo: { fromX: -90, fromY: 80, toX: -24, toY: 30 },
      };
    case "scan":
      return {
        orbOne: { fromX: 180, fromY: 10, toX: 82, toY: 36 },
        orbTwo: { fromX: -160, fromY: 140, toX: -60, toY: 96 },
      };
    case "collection":
      return {
        orbOne: { fromX: 40, fromY: -120, toX: -12, toY: -60 },
        orbTwo: { fromX: -140, fromY: 60, toX: 24, toY: 10 },
      };
    case "passport":
      return {
        orbOne: { fromX: 120, fromY: -120, toX: 46, toY: -48 },
        orbTwo: { fromX: -120, fromY: 180, toX: -16, toY: 86 },
      };
    case "default":
    default:
      return {
        orbOne: { fromX: 80, fromY: -40, toX: 24, toY: -20 },
        orbTwo: { fromX: -80, fromY: 100, toX: -20, toY: 36 },
      };
  }
}
