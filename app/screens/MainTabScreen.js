import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './HomeScreen';
import Statewise from './StateScreen';
import Contact from './NewsScreen';
import About from './AboutScreen';

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName='Home' activeColor='#fff'>
    <Tab.Screen
      name='Home'
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name='ios-home' color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name='Statewise'
      component={Statewise}
      options={{
        tabBarLabel: 'Statewise',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({ color }) => (
          <Icon name='ios-notifications' color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name='Contact'
      component={Contact}
      options={{
        tabBarLabel: 'Contact Us',
        tabBarColor: '#694fad',
        tabBarIcon: ({ color }) => (
          <Icon name='ios-person' color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name='About'
      component={About}
      options={{
        tabBarLabel: 'About Us',
        tabBarColor: '#d02860',
        tabBarIcon: ({ color }) => (
          <Icon name='ios-aperture' color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;
