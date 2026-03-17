import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, View } from "react-native";

import { typography } from "../../constants/theme";
import type { PassportRecord } from "../../types/domain";
import { VerifiedBadge } from "../ui/VerifiedBadge";

type PassportCardProps = {
  passport: PassportRecord;
};

export function PassportCard({ passport }: PassportCardProps) {
  return (
    <View className="overflow-hidden rounded-[34px] border border-border bg-surface">
      <LinearGradient
        className="absolute inset-0"
        colors={passport.heroColors}
      />
      <View className="gap-5 p-6">
        <VerifiedBadge label={passport.authenticityLabel} />
        <View className="items-center rounded-[30px] border border-gold/15 bg-background/65 px-5 py-8">
          <Image
            className="h-64 w-full max-w-[280px] rounded-[26px]"
            resizeMode="cover"
            source={passport.image}
          />
        </View>
        <View className="gap-3">
          <Text
            className="text-xs uppercase tracking-[4px] text-subtext"
            style={{ fontFamily: typography.bodyFamily }}
          >
            {passport.brand}
          </Text>
          <Text
            className="text-4xl leading-[44px] text-text-primary"
            style={{ fontFamily: typography.titleFamily }}
          >
            {passport.model}
          </Text>
          <Text
            className="text-sm leading-6 text-subtext"
            style={{ fontFamily: typography.bodyFamily }}
          >
            {passport.material} • {passport.year}
          </Text>
        </View>
        <View className="flex-row flex-wrap gap-3">
          <InfoPill label="Référence" value={passport.reference} />
          <InfoPill label="Origine" value={passport.origin} />
          <InfoPill label="Dernier contrôle" value={passport.lastServiceDate} />
        </View>
      </View>
    </View>
  );
}

type InfoPillProps = {
  label: string;
  value: string;
};

function InfoPill({ label, value }: InfoPillProps) {
  return (
    <View className="min-w-[148px] flex-1 rounded-[22px] border border-border bg-background/70 px-4 py-4">
      <Text
        className="text-[11px] uppercase tracking-[3px] text-subtext"
        style={{ fontFamily: typography.bodyFamily }}
      >
        {label}
      </Text>
      <Text
        className="mt-2 text-sm leading-6 text-text-primary"
        style={{ fontFamily: typography.bodyFamily, fontWeight: "600" }}
      >
        {value}
      </Text>
    </View>
  );
}
