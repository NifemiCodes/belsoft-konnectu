import { View, Text } from 'react-native';
import { BodyText, TitleText } from '@/components/StyledText';
import Image1 from '@/assets/images/image_1.svg';
import Image2 from '@/assets/images/image_2.svg';
import Image3 from '@/assets/images/image_3.svg';
import Tick from '@/assets/images/tick.svg';
import Colors from './Colors';

export type Slide = {
  image: React.JSX.Element;
  modalText: React.JSX.Element;
};

const RowText = ({ text }: { text: string }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 5 }}>
      <Tick />
      <BodyText>{text}</BodyText>
    </View>
  );
};

const slides: Slide[] = [
  {
    image: <Image1 width={'100%'} />,
    modalText: (
      <View style={{ rowGap: 16 }}>
        <TitleText>
          Help with Everyday <Text style={{ color: Colors.yellow }}>tasks</Text> at your fingertips
        </TitleText>

        <BodyText>
          Manage daily tasks, connect with trusted professionals,and take control of your life with our app
        </BodyText>
      </View>
    ),
  },

  {
    image: <Image2 height={500} />,
    modalText: (
      <View style={{ rowGap: 16 }}>
        <RowText text="Select the perfect Tasker for your job  by reviews, skills, and price" />
        <RowText text="Find handyman close to you" />
        <RowText text="Chat with Taskers in real-time Secure payment processing" />
      </View>
    ),
  },

  {
    image: <Image3 width={'100%'} />,
    modalText: (
      <View style={{ rowGap: 16 }}>
        <TitleText>One App, INFINITE SOLUTIONS</TitleText>

        <BodyText>we've got you covered.</BodyText>
      </View>
    ),
  },
];

export default slides;
