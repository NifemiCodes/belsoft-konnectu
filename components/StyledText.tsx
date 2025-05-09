import Colors from '@/constants/Colors';
import { PropsWithChildren } from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';

interface StyledTextProps {
  addStyles?: TextStyle;
}

export const BodyText = (props: PropsWithChildren & StyledTextProps) => {
  return <Text style={[styles.bodyText, props.addStyles]}>{props.children}</Text>;
};

export const TitleText = (props: PropsWithChildren & StyledTextProps) => {
  return <Text style={[styles.titleText, props.addStyles]}>{props.children}</Text>;
};

export const ButtonText = (props: PropsWithChildren & StyledTextProps) => {
  return <Text style={[styles.buttonText, props.addStyles]}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  bodyText: {
    fontFamily: 'geist',
    color: Colors.white,
    fontSize: 14,
  },

  titleText: {
    fontFamily: 'geist',
    color: Colors.white,
    fontSize: 24,
    fontWeight: 500,
  },

  buttonText: {
    fontFamily: 'geist',
    color: Colors.white,
    fontSize: 12,
    fontWeight: 600,
  },
});
