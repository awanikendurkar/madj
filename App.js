import React, { useState } from 'react';
import * as Font from 'expo-font';
import LandingPage from './app/screens/LandingScreen';
import Home from './app/screens/HomeScreen';
import { AppLoading } from 'expo';
import AboutUs from './app/screens/AboutScreen';
import Navigator from './app/routes/drawer';
import Statewise from './app/screens/StateScreen';

const getFonts = () => {
  return Font.loadAsync({
    'nunito-italic': require('./app/assets/fonts/Nunito-ExtraLightItalic.ttf'),
    'cursive-custom': require('./app/assets/fonts/Cursive-Font.ttf'),
    'nunito-regular': require('./app/assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./app/assets/fonts/Nunito-Bold.ttf'),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <Navigator />;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
