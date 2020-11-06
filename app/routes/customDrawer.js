import React, { Component } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import {
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';
import { DrawerItems } from 'react-navigation-drawer';

export default class CustomDrawer extends Component {
  render() {
    //const ripple = TouchableNativeFeedback.Ripple('#adacac', false);

    return (
      <View>
        <ScrollView>
          <SafeAreaView
            style={styles.container}
            forceInset={{ top: 'always', horizontal: 'never' }}
          >
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Avatar
                size='large'
                rounded
                icon={{ name: 'user-circle-o', type: 'font-awesome', size: 80 }}
              />
              <Text
                style={{
                  color: '#f9f9f9',
                  marginTop: '3%',
                  fontFamily: 'nunito-bold',
                }}
              >
                Corona Virus
              </Text>
              <Text style={{ color: '#f9f9f9', fontFamily: 'nunito-bold' }}>
                COVID-19 Dashboard
              </Text>
            </View>
            <DrawerItems {...this.props} />
          </SafeAreaView>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet;
