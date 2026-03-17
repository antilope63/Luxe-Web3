import { ActivityIndicator, Text, View } from "react-native";

import { palette, typography } from "../../constants/theme";

type LoadingStateProps = {
  label?: string;
};

export function LoadingState({ label = "Préparation du passeport…" }: LoadingStateProps) {
  return (
    <View className="flex-1 items-center justify-center gap-5">
      <ActivityIndicator color={palette.gold} size="small" />
      <Text className="text-xs uppercase tracking-[4px] text-subtext" style={{ fontFamily: typography.bodyFamily }}>
        {label}
      </Text>
    </View>
  );
}
