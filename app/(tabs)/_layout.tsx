import { Tabs } from "expo-router";

import { AppNavBar } from "../../components/ui/AppNavBar";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        animation: "shift",
        headerShown: false,
        lazy: false,
        sceneStyle: {
          backgroundColor: "#0A0A0A",
        },
      }}
      tabBar={(props) => <AppNavBar {...props} />}
    >
      <Tabs.Screen name="home" options={{ title: "Accueil" }} />
      <Tabs.Screen name="scan" options={{ title: "Scan" }} />
      <Tabs.Screen name="collection" options={{ title: "Collection" }} />
    </Tabs>
  );
}
