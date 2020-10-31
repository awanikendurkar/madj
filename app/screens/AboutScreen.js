import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  TouchableHighlight,
  ScrollView,
  FlatList,
} from 'react-native';
import { Avatar, Accessory, ListItem, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class AboutUs extends React.Component {
  onclickChinmay = () => {
    console.log("Redirecting to Chinmay's LinkedIn");
    Linking.openURL('https://www.linkedin.com/in/chinmay-nrusingh-choudhury');
  };
  onclickAwani = () => {
    console.log("Redirecting to Awani's LinkedIn");
    Linking.openURL('https://www.linkedin.com/in/awanikendurkar');
  };
  onclickGithub = () => {
    console.log('Redirecting to Github repository');
    Linking.openURL('https://github.com/awanikendurkar/madj');
  };
  onclickAPI = () => {
    console.log('Redirecting to API webpage');
    Linking.openURL('https://api.covid19india.org/');
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.title}>About the app</Text>
        </View>
        <View>
          <Text style={styles.text}>
            COVID-19 Dashboard is a mobile application based on hybrid app
            development. This app is an intuitive user interface that provides
            data pertaining to the pandemic.
          </Text>
          <Text style={styles.text}>
            The aim is to provide a platform that displays the number of active
            cases of the coronavirus disease, along with the number of recovered
            patients and the death toll. This data can be viewed in various
            forms: state-wise, time period wise or according to daily changes.
          </Text>
          <Text style={styles.text}>
            The app is built using React Native, an open-source mobile
            application framework created and maintained by Facebook. It is used
            to create native apps for Android and iOS by enabling developers to
            use React along with native platform capabilities. The relevant data
            has been retrieved using an API provided by a volunteer-driven,
            crowd-sourced database for COVID-19 stats.
          </Text>
        </View>
        <View>
          <Text style={styles.title}>Developers</Text>
        </View>
        <View>
          <ListItem bottomDivider onPress={this.onclickAwani}>
            <Image
              style={{
                width: 51,
                height: 51,
                resizeMode: 'contain',
              }}
              source={require('../assets/Awani.jpeg')}
            />
            <ListItem.Content>
              <ListItem.Title style={styles.name}>
                Awani Kendurkar
              </ListItem.Title>
              <ListItem.Subtitle style={styles.nameText}>
                React Native Developer
              </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          <ListItem bottomDivider onPress={this.onclickChinmay}>
            <Image
              style={{
                width: 51,
                height: 51,
                resizeMode: 'contain',
              }}
              source={require('../assets/Chinmay.jpg')}
            />
            <ListItem.Content>
              <ListItem.Title style={styles.name}>
                Chinmay Nrusingh Choudhury
              </ListItem.Title>
              <ListItem.Subtitle style={styles.nameText}>
                React Native Developer
              </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </View>

        <View style={{ margin: 20 }}>
          <Button
            icon={
              <Icon
                name='github'
                size={23}
                color='#2B88DD'
                style={styles.icon}
              />
            }
            style={styles.button}
            title='Visit Repository'
            type='outline'
            onPress={this.onclickGithub}
          />
          <Button
            icon={
              <Icon
                name='database'
                size={20}
                color='#2B88DD'
                style={styles.icon}
              />
            }
            style={styles.button}
            title='Visit API Webpage'
            type='outline'
            onPress={this.onclickAPI}
          />
        </View>
        <View style={styles.blank}></View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    flex: 1,
    //alignItems: 'center',
    padding: 25,
    paddingBottom: 100,
    //paddingLeft: 25,
  },
  name: {
    fontFamily: 'nunito-bold',
    fontSize: 16,
  },
  nameText: {
    fontFamily: 'nunito-regular',
    fontSize: 16,
  },
  text: {
    fontFamily: 'nunito-regular',
    fontSize: 16,
    textAlign: 'justify',
    paddingTop: 15,
  },
  title: {
    fontFamily: 'nunito-bold',
    fontSize: 30,
    paddingTop: 20,
  },
  image: {
    height: 5,
    width: 5,
    backgroundColor: '#fff',
    flex: 1,
    aspectRatio: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  blank: {
    height: 80,
  },
  button: {
    margin: 5,
  },
  icon: {
    margin: 8,
  },
});
