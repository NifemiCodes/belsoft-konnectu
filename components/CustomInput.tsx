import { StyleSheet, TextInput } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';

interface CustomInput {
  placeholder: string;
}

const CustomInput = ({ placeholder }: CustomInput) => {
  return <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor={'#82868C'} />;
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#82868C',
    padding: 15,
    fontFamily: 'geist',
    fontWeight: 500,
    fontSize: 14,
    color: Colors.black,
  },
});
