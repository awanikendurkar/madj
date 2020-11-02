import { createStackNavigator } from 'react-navigation-stack';
import NewsScreen from '../screens/NewsScreen';

const screens = {
  Contact: {
    screen: NewsScreen,
    navigationOptions: {
      title: 'Contact Us',
    },
  },
};

const NewsStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {
      backgroundColor: '#fff',
      height: 80,
    },
  },
});

export default NewsStack;
