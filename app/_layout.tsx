import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          animation: "none",
          contentStyle: { backgroundColor: "#0A0A0A" },
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="entry" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="passport/[id]" />
      </Stack>
    </SafeAreaProvider>
  );
}
