import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import StateStack from './stateStack';
import NewsStack from './newsStack';

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  State: {
    screen: StateStack,
  },
  News: {
    screen: NewsStack,
  },
  About: {
    screen: AboutStack,
  },
});

export default createAppContainer(RootDrawerNavigator);
