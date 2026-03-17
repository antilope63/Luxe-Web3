import { Platform } from "react-native";

export const palette = {
  background: "#0A0A0A",
  surface: "#141414",
  gold: "#C9A84C",
  goldLight: "#E8C96A",
  textPrimary: "#F5F5F0",
  subtext: "#6B6B6B",
  border: "#1E1E1E",
  success: "#52A052",
  error: "#E05252",
} as const;

export const gradients = {
  screen: ["#0A0A0A", "#050505"] as const,
  watchCard: ["#1C1811", "#111111"] as const,
  passportHero: ["#211A0A", "#0F0F0F"] as const,
  goldHalo: ["rgba(201, 168, 76, 0.20)", "rgba(201, 168, 76, 0)"] as const,
} as const;

export const typography = {
  titleFamily: Platform.select({ ios: "Times New Roman", android: "serif", default: "Georgia" }),
  bodyFamily: Platform.select({ ios: "System", android: "sans-serif", default: "System" }),
};
