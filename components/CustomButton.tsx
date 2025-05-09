import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';
import { ButtonText } from './StyledText';

const CustomButton = ({ onPress, text }: { onPress: () => void; text: string }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <ButtonText>{text}</ButtonText>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.purple,
    paddingVertical: 18,
    borderRadius: 4,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
