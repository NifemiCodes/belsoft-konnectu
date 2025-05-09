import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    'geist': require('@/assets/fonts/Geist-VariableFont_wght.ttf'),
  });

  if (!loaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  return <Stack />;
}
