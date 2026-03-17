import * as Haptics from "expo-haptics";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

import { NFCScanner } from "../../components/scan/NFCScanner";
import { ScreenContainer } from "../../components/ui/ScreenContainer";
import { typography } from "../../constants/theme";
import { useNFC } from "../../hooks/useNFC";

export default function ScanScreen() {
  const router = useRouter();
  const { demoLabel, error, isScanning, startScan } = useNFC();

  const handleScan = async () => {
    await Haptics.selectionAsync();
    const nfcId = await startScan();
    await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    router.push({ pathname: "/passport/[id]", params: { id: nfcId } });
  };

  return (
    <ScreenContainer
      ambient="scan"
      includeBottomInset={false}
      scroll
      contentClassName="py-6 pb-8"
    >
      <View className="gap-10">
        <View className="gap-4">
          <Text
            className="text-[11px] uppercase tracking-[4px] text-gold"
            style={{ fontFamily: typography.bodyFamily }}
          >
            Scan
          </Text>
          <Text
            className="text-4xl leading-[44px] text-text-primary"
            style={{ fontFamily: typography.titleFamily }}
          >
            Une seule action, rien de plus.
          </Text>
          <Text
            className="max-w-[300px] text-base leading-7 text-subtext"
            style={{ fontFamily: typography.bodyFamily }}
          >
            Le mode démo ouvre un passeport instantanément. La barre du bas
            garde le parcours simple.
          </Text>
        </View>
        <View className="items-center pt-2">
          <NFCScanner
            demoLabel={demoLabel}
            isScanning={isScanning}
            onScanPress={handleScan}
          />
          {error ? (
            <Text
              className="mt-6 text-center text-sm leading-6 text-error"
              style={{ fontFamily: typography.bodyFamily }}
            >
              {error}
            </Text>
          ) : null}
        </View>
      </View>
    </ScreenContainer>
  );
}
