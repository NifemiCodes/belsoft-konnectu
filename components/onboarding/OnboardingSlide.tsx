import { Animated, StyleSheet, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Colors from '@/constants/Colors';
import CustomButton from '../CustomButton';
import Paginator from './Paginator';
import { Slide } from '@/constants/slides';
import { BodyText } from '../StyledText';
import { router } from 'expo-router';

interface OnboardingSlide {
  slide: Slide;
  scrollx: Animated.Value;
  handleNext: () => void;
}

const OnboardingSlide = ({ slide, scrollx, handleNext }: OnboardingSlide) => {
  const { width } = useWindowDimensions();

  return (
    <View style={{ width, flex: 1 }}>
      <TouchableOpacity style={styles.button} hitSlop={7} onPress={() => router.replace('/auth/register')}>
        <BodyText addStyles={{ color: Colors.darkGray }}>Skip</BodyText>
      </TouchableOpacity>

      {slide.image}

      <View style={styles.modal}>
        {slide.modalText}

        <Paginator scrollX={scrollx} />

        <CustomButton onPress={handleNext} text="Get Started" />
      </View>
    </View>
  );
};

export default OnboardingSlide;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    zIndex: 1,
    top: 20,
    right: 20,
  },

  modal: {
    flex: 1,
    backgroundColor: Colors.deepGreen,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    justifyContent: 'space-between',
  },
});
