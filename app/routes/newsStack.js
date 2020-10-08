import { createStackNavigator } from 'react-navigation-stack';
import NewsScreen from '../screens/NewsScreen';

const screens = {
  State: {
    screen: NewsScreen,
    navigationOptions: {
      title: 'News',
    },
  },
};

const NewsStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {
      backgroundColor: '#eee',
      height: 80,
    },
  },
});

export default NewsStack;
