import { Stack } from "expo-router";
import { screenOptionsFactory } from "expo-router/build/useScreens";

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="tabs" options={{headerShown: false}}/>
      <Stack.Screen name="detalhes" options={{headerShown: true, title:'Pet'}} />

    </Stack>
  );
}
