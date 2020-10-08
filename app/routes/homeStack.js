import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/HomeScreen';
import Statewise from '../screens/StateScreen';
import NewsScreen from '../screens/NewsScreen';
import AboutUs from '../screens/AboutScreen';
import Header from '../shared/header';
import React from 'react';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} />,
      };
    },
  },
  State: {
    screen: Statewise,
    navigationOptions: {
      title: 'Statewise Data',
    },
  },
  News: {
    screen: NewsScreen,
  },
  About: {
    screen: AboutUs,
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {
      backgroundColor: '#eee',
      height: 80,
    },
  },
});

export default HomeStack;
