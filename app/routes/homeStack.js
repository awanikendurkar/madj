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
  Contact: {
    screen: NewsScreen,
    navigationOptions: {
      title: 'Contact Us',
    },
  },
  About: {
    screen: AboutUs,
    navigationOptions: {
      title: 'About Us',
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {
      backgroundColor: '#fff',
      height: 80,
    },
  },
});

export default HomeStack;
