import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function UserLocation() {
  state = {
    location: null,
    geocode: null,
    errorMessage: '',
  };

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest,
    });
    const { latitude, longitude } = location.coords;
    this.getGeocodeAsync({ latitude, longitude });
    this.setState({ location: { latitude, longitude } });
  };

  getGeocodeAsync = async (location) => {
    let geocode = await Location.reverseGeocodeAsync(location);
    this.setState({ geocode });
  };

  const { location, geocode, errorMessage } = this.state;
  return (
    <View>
      <Text style={styles.heading1}>
        {geocode ? `${geocode[0].city}, ${geocode[0].isoCountryCode}` : ''}
      </Text>
    </View>
  );

  // let postal = Location.reverseGeocodeAsync(location.coords);
  // let city = postal.city;
  // let region = postal.region;
  // let country = postal.country;

  // let address = 'Location detected: ' + city + ', ' + region + ', ' + country;

  // return (
  //   <View style={styles.container}>
  //     <Text>{text}</Text>
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
