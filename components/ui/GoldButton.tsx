import { Pressable, Text, View } from "react-native";

import { typography } from "../../constants/theme";

type GoldButtonProps = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: "solid" | "ghost";
};

export function GoldButton({ label, onPress, disabled = false, variant = "solid" }: GoldButtonProps) {
  const isGhost = variant === "ghost";

  return (
    <Pressable
      accessibilityRole="button"
      className={`overflow-hidden rounded-full border px-6 py-4 ${
        isGhost ? "border-border bg-surface" : "border-gold bg-gold"
      } ${disabled ? "opacity-50" : "opacity-100"}`}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.985 : 1 }] }]}
    >
      <View className="items-center justify-center">
        <Text
          className={`text-sm uppercase tracking-[3px] ${isGhost ? "text-text-primary" : "text-background"}`}
          style={{ fontFamily: typography.bodyFamily, fontWeight: "600" }}
        >
          {label}
        </Text>
      </View>
    </Pressable>
  );
}
