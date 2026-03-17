import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { palette, typography } from "../../constants/theme";

type VerifiedBadgeProps = {
  label?: string;
};

export function VerifiedBadge({ label = "Authentifiée" }: VerifiedBadgeProps) {
  return (
    <View className="self-start flex-row items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2">
      <Ionicons color={palette.goldLight} name="checkmark-circle" size={16} />
      <Text className="text-xs uppercase tracking-[3px] text-gold-light" style={{ fontFamily: typography.bodyFamily }}>
        {label}
      </Text>
    </View>
  );
}
