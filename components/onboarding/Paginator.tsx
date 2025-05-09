import { Animated, StyleSheet, useWindowDimensions, View } from 'react-native';
import Colors from '@/constants/Colors';
import slides from '@/constants/slides';

const Paginator = ({ scrollX }: { scrollX: Animated.Value }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {slides.map((_, index) => {
        const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 35, 10],
          extrapolate: 'clamp',
        });

        const dotBg = scrollX.interpolate({
          inputRange,
          outputRange: [Colors.lightGray, Colors.lightGreen, Colors.lightGray],
          extrapolate: 'clamp',
        });

        return <Animated.View style={[styles.dot, { width: dotWidth, backgroundColor: dotBg }]}></Animated.View>;
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 3,
  },

  dot: {
    backgroundColor: Colors.lightGray,
    borderRadius: 20,
    height: 7,
    width: 10,
  },
});
