import { createStackNavigator } from 'react-navigation-stack';
import Statewise from '../screens/StateScreen';

const screens = {
  State: {
    screen: Statewise,
    navigationOptions: {
      title: 'Statewise Data',
    },
  },
};

const StateStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {
      backgroundColor: '#fff',
      height: 80,
    },
  },
});

export default StateStack;
