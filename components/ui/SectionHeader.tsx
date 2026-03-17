import { Text, View } from "react-native";

import { typography } from "../../constants/theme";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <View className="gap-3">
      {eyebrow ? (
        <Text className="text-[11px] uppercase tracking-[4px] text-gold" style={{ fontFamily: typography.bodyFamily }}>
          {eyebrow}
        </Text>
      ) : null}
      <Text className="text-4xl leading-[44px] text-text-primary" style={{ fontFamily: typography.titleFamily }}>
        {title}
      </Text>
      {description ? (
        <Text className="max-w-[340px] text-base leading-7 text-subtext" style={{ fontFamily: typography.bodyFamily }}>
          {description}
        </Text>
      ) : null}
    </View>
  );
}
