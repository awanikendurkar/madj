import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

export default function LandingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}> COVID-19 Dashboard </Text>
      <Image source={require('../assets/covid.png')} style={styles.covidImg} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.googleButton}
          onPress={() => console.log('Sign in with Google tapped')}
          title='Sign in with Google'
          color='#ee6565'
        >
          <Text style={styles.buttonText}>Sign in with Google</Text>
        </TouchableOpacity>

        <View style={{ flex: 0.02 }}></View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('Continue without signing in tapped')}
          title='Continue without signing in'
          color='#ee6565'
        >
          <Text style={styles.buttonText}>Continue without signing in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    elevation: 8,
    backgroundColor: '#EE6565',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: {
    textAlign: 'center',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    fontSize: 14,
    color: '#FFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  covidImg: {
    width: 300,
    height: 330,
  },
  googleButton: {
    elevation: 8,
    backgroundColor: '#EE6565',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
});

// #F6BFBF light
// #EE6565 dark
// #D6D6D6 grey
