import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

import { palette, typography } from "../../constants/theme";

type BackButtonProps = {
  label?: string;
  onPress: () => void;
};

export function BackButton({ label = "Retour", onPress }: BackButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      className="self-start rounded-full border border-border bg-surface/90 px-4 py-3"
      onPress={onPress}
      style={({ pressed }) => [{ opacity: pressed ? 0.82 : 1 }]}
    >
      <View className="flex-row items-center gap-2">
        <Ionicons color={palette.textPrimary} name="chevron-back" size={16} />
        <Text className="text-xs uppercase tracking-[3px] text-text-primary" style={{ fontFamily: typography.bodyFamily }}>
          {label}
        </Text>
      </View>
    </Pressable>
  );
}
