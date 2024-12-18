import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="branches" />
      <Stack.Screen name="mainmenu" />
    </Stack>
  );
}
