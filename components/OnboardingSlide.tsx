import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Image1 from '@/assets/images/image_1.svg';
import Colors from '@/constants/Colors';
import CustomButton from './CustomButton';
import { BodyText, TitleText } from './StyledText';

const OnboardingSlide = () => {
  const { width } = useWindowDimensions();

  return (
    <View style={{ width, flex: 1 }}>
      <Image1 style={{ width: '100%' }} />

      <View style={styles.modal}>
        <View style={{ rowGap: 16 }}>
          <TitleText>
            Help with Everyday <Text style={{ color: Colors.yellow }}>tasks</Text> at your fingertips
          </TitleText>

          <BodyText>
            Manage daily tasks, connect with trusted professionals,and take control of your life with our app
          </BodyText>
        </View>

        <CustomButton onPress={() => {}} />
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
