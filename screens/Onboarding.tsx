import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, StyleSheet, Text } from 'react-native';
import Colors from '@/constants/Colors';
import OnboardingSlide from '@/components/OnboardingSlide';

const slides = ['1', '2', '3', '4'];

const Onboarding = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        horizontal
        pagingEnabled
        bounces={false}
        data={slides}
        renderItem={({ index }) => <OnboardingSlide />}
      />
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.white,
    flex: 1,
  },
});
