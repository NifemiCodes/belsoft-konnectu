import { Animated, StyleSheet, useWindowDimensions, View } from 'react-native';
import Colors from '@/constants/Colors';
import CustomButton from './CustomButton';
import Paginator from './Paginator';
import { Slide } from '@/constants/slides';

interface OnboardingSlide {
  slide: Slide;
  scrollx: Animated.Value;
  handleNext: () => void;
}

const OnboardingSlide = ({ slide, scrollx, handleNext }: OnboardingSlide) => {
  const { width } = useWindowDimensions();

  return (
    <View style={{ width, flex: 1 }}>
      {slide.image}

      <View style={styles.modal}>
        {slide.modalText}

        <Paginator scrollX={scrollx} />

        <CustomButton onPress={handleNext} />
      </View>
    </View>
  );
};

export default OnboardingSlide;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: Colors.deepGreen,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    justifyContent: 'space-between',
  },
});
