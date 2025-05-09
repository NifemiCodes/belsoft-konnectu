import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    'geist': require('@/assets/fonts/Geist-Regular.ttf'),
    'geist-semi': require('@/assets/fonts/Geist-SemiBold.ttf'),
    'geist-bold': require('@/assets/fonts/Geist-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
