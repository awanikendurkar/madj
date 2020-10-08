import { createStackNavigator } from 'react-navigation-stack';
import AboutUs from '../screens/AboutScreen';

const screens = {
  About: {
    screen: AboutUs,
    navigationOptions: {
      title: 'About',
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {
      backgroundColor: '#eee',
      height: 80,
    },
  },
});

export default AboutStack;
