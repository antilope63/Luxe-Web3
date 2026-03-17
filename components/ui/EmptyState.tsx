import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

import { palette, typography } from "../../constants/theme";

type EmptyStateProps = {
  title: string;
  description: string;
  actionLabel?: string;
  onActionPress?: () => void;
};

export function EmptyState({ title, description, actionLabel, onActionPress }: EmptyStateProps) {
  return (
    <View className="rounded-[28px] border border-border bg-surface px-6 py-8">
      <View className="mb-5 h-14 w-14 items-center justify-center rounded-full border border-gold/20 bg-gold/10">
        <Ionicons color={palette.gold} name="sparkles-outline" size={22} />
      </View>
      <Text className="text-2xl text-text-primary" style={{ fontFamily: typography.titleFamily }}>
        {title}
      </Text>
      <Text className="mt-3 text-base leading-7 text-subtext" style={{ fontFamily: typography.bodyFamily }}>
        {description}
      </Text>
      {actionLabel && onActionPress ? (
        <Pressable className="mt-6 self-start" onPress={onActionPress} style={({ pressed }) => [{ opacity: pressed ? 0.75 : 1 }]}>
          <Text className="text-xs uppercase tracking-[3px] text-gold" style={{ fontFamily: typography.bodyFamily }}>
            {actionLabel}
          </Text>
        </Pressable>
      ) : null}
    </View>
  );
}
