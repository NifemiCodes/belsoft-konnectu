import { StyleSheet, TouchableOpacity } from 'react-native';
import Google from '@/assets/images/google.svg';
import { BodyText } from './StyledText';
import Colors from '@/constants/Colors';

const SignInOption = ({ text }: { text: string }) => {
  return (
    <TouchableOpacity style={styles.button} hitSlop={7}>
      <Google />
      <BodyText addStyles={{ color: Colors.black, fontFamily: 'geist-bold' }}>{text}</BodyText>
    </TouchableOpacity>
  );
};

export default SignInOption;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: '#82868C',
    borderRadius: 8,
    paddingVertical: 17,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 8,
  },
});
