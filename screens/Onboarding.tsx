import { SafeAreaView } from 'react-native-safe-area-context';
import { Animated, FlatList, StyleSheet, useAnimatedValue } from 'react-native';
import Colors from '@/constants/Colors';
import OnboardingSlide from '@/components/onboarding/OnboardingSlide';
import { useRef } from 'react';
import slides from '@/constants/slides';
import { router } from 'expo-router';

const Onboarding = () => {
  const scrollx = useAnimatedValue(0);
  const flatlist = useRef<FlatList>(null);

  const handleNext = (index: number) => {
    index < slides.length - 1
      ? flatlist.current?.scrollToIndex({ index: index + 1 })
      : router.replace('/auth/register');
  };

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        ref={flatlist}
        horizontal
        pagingEnabled
        bounces={false}
        data={slides}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <OnboardingSlide slide={item} scrollx={scrollx} handleNext={() => handleNext(index)} />
        )}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollx } } }], { useNativeDriver: false })}
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
