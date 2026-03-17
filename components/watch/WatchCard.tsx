import { LinearGradient } from "expo-linear-gradient";
import { Image, Pressable, Text, View } from "react-native";

import { typography } from "../../constants/theme";
import type { WatchSummary } from "../../types/domain";

type WatchCardProps = {
  watch: WatchSummary;
  onPress: () => void;
};

export function WatchCard({ watch, onPress }: WatchCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      className="overflow-hidden rounded-[28px] border border-border bg-surface"
      onPress={onPress}
      style={({ pressed }) => [{ opacity: pressed ? 0.9 : 1 }]}
    >
      <LinearGradient
        className="absolute inset-0"
        colors={["rgba(201,168,76,0.10)", "rgba(20,20,20,0)"]}
      />
      <View className="gap-4 p-5">
        <View className="overflow-hidden rounded-[24px] border border-gold/10 bg-background">
          <Image
            className="h-40 w-full"
            resizeMode="cover"
            source={watch.image}
          />
        </View>
        <View className="flex-row items-start justify-between gap-4">
          <View className="flex-1 gap-1.5">
            <Text
              className="text-xs uppercase tracking-[4px] text-subtext"
              style={{ fontFamily: typography.bodyFamily }}
            >
              {watch.brand}
            </Text>
            <Text
              className="text-2xl text-text-primary"
              style={{ fontFamily: typography.titleFamily }}
            >
              {watch.model}
            </Text>
          </View>
          <View className="rounded-full border border-gold/20 bg-gold/10 px-3 py-2">
            <Text
              className="text-[11px] uppercase tracking-[3px] text-gold"
              style={{ fontFamily: typography.bodyFamily }}
            >
              {watch.accent}
            </Text>
          </View>
        </View>
        <View className="flex-row items-center justify-between border-t border-border/80 pt-4">
          <Text
            className="text-sm text-subtext"
            style={{ fontFamily: typography.bodyFamily }}
          >
            Réf. {watch.reference}
          </Text>
          <Text
            className="text-sm text-text-primary"
            style={{ fontFamily: typography.bodyFamily, fontWeight: "600" }}
          >
            {watch.year}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
