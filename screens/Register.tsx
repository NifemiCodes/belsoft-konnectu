import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@/constants/Colors';
import TextLogo from '@/assets/images/text_logo.svg';
import CustomInput from '@/components/CustomInput';
import { BodyText } from '@/components/StyledText';
import CustomButton from '@/components/CustomButton';
import SignInOption from '@/components/SignInOption';

const Register = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 20, rowGap: 16 }}>
        <TextLogo style={{ alignSelf: 'center' }} />

        <View style={{ rowGap: 25 }}>
          <CustomInput placeholder="First Name:" />
          <CustomInput placeholder="Middle Name:(optional)" />
          <CustomInput placeholder="Last Name:" />
          <CustomInput placeholder="Email:" />
          <CustomInput placeholder="Phone Number:" />
          <CustomInput placeholder="Address:" />
        </View>

        <BodyText addStyles={{ color: Colors.black, alignSelf: 'center', fontFamily: 'geist-bold' }}>OR</BodyText>

        <SignInOption text="Sign Up with Google" />

        <CustomButton text="Continue" onPress={() => {}} />

        <BodyText addStyles={{ color: Colors.black, fontFamily: 'geist-bold', alignSelf: 'center' }}>
          Already have an account? <Text style={{ color: Colors.blue, textDecorationLine: 'underline' }}>Login</Text>
        </BodyText>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
