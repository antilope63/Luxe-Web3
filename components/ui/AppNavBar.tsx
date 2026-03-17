import { Ionicons } from "@expo/vector-icons";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { palette, typography } from "../../constants/theme";

const items = {
  home: { icon: "home-outline", iconActive: "home", label: "Accueil" },
  scan: {
    icon: "scan-circle-outline",
    iconActive: "scan-circle",
    label: "Scan",
  },
  collection: {
    icon: "albums-outline",
    iconActive: "albums",
    label: "Collection",
  },
} as const;

export function AppNavBar({ state, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="bg-transparent px-5 pt-3"
      style={{ paddingBottom: Math.max(insets.bottom, 16) }}
    >
      <View className="rounded-[28px] border border-gold/10 bg-surface px-2 py-2">
        <View className="flex-row items-center justify-between gap-2">
          {state.routes.map((route, index) => {
            const item = items[route.name as keyof typeof items];

            if (!item) {
              return null;
            }

            const isActive = state.index === index;

            return (
              <Pressable
                key={route.key}
                accessibilityRole="button"
                className={`flex-1 rounded-[22px] px-3 py-3 ${isActive ? "bg-gold/10" : "bg-transparent"}`}
                onPress={() => {
                  const event = navigation.emit({
                    type: "tabPress",
                    target: route.key,
                    canPreventDefault: true,
                  });

                  if (!isActive && !event.defaultPrevented) {
                    navigation.navigate(route.name);
                  }
                }}
                style={({ pressed }) => [{ opacity: pressed ? 0.78 : 1 }]}
              >
                <View className="items-center gap-1.5">
                  <Ionicons
                    color={isActive ? palette.goldLight : palette.subtext}
                    name={isActive ? item.iconActive : item.icon}
                    size={20}
                  />
                  <Text
                    className={`text-[11px] ${isActive ? "text-gold-light" : "text-subtext"}`}
                    style={{
                      fontFamily: typography.bodyFamily,
                      letterSpacing: 0.8,
                    }}
                  >
                    {item.label}
                  </Text>
                </View>
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
}
