import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Linking,
  TouchableHighlight,
} from 'react-native';

export default class AboutUs extends React.Component {
  onclickfun1 = () => {
    console.log('clicked');
    Linking.openURL('https://www.linkedin.com/in/chinmay-nrusingh-choudhury');
  };
  onclickfun2 = () => {
    console.log('clicked');
    Linking.openURL('https://www.linkedin.com/in/awanikendurkar');
  };

  render() {
    return (
      <View style={mainstyles.container}>
        <View>
          <Text style={mainstyles.texts}>About Us</Text>
        </View>

        <View style={mainstyles.content}>
          <Image
            style={mainstyles.image}
            source={require('../assets/covid.png')}
          />
          <Text style={mainstyles.contenttitle}>About</Text>
          <Text style={mainstyles.contenttext}>
            This is a COVID dashboard mobile app created in accordance with J
            component of Mobile Application Development, ITE1016. The app keeps
            track of number of cases and displays recent notices and news about
            COVID 19.
          </Text>
          {/* <Button title="Chinmay" color = "gray" style= {mainstyles.buttons}/> */}
          <View style={mainstyles.buttoncontainer}>
            <TouchableOpacity
              activeOpacity={1}
              style={mainstyles.button1}
              onPress={this.onclickfun1}
            >
              <Text>Chinmay</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={mainstyles.button2}
              onPress={this.onclickfun2}
            >
              <Text>Awani</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mainstyles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingRight: 25,
    paddingLeft: 25,
  },

  texts: {
    paddingTop: '20%',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
    width: 200,
  },
  content: {
    padding: 12,
    paddingBottom: 10,
    height: '45%',
    top: '10%',
    // flex: 1,
    flexDirection: 'column',
    borderColor: 'lightgray',
    borderWidth: 0.7,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'grey'
  },
  contenttitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
  contenttext: {
    color: 'black',
    top: '2%',
  },
  image: {
    // height: '30%', width:'30%',
    flex: 1,
    // flexWrap: "wrap",
    aspectRatio: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    // borderColor: 'lightgray',
    // borderWidth: .5
  },
  buttoncontainer: {
    // top: "0%",
    flex: 0.5,
    // height:"5%",
    flexDirection: 'row',
    alignSelf: 'flex-end',
    // backgroundColor: 'lightgray'
  },
  button1: {
    borderRadius: 50,
    top: '5%',
    bottom: '5%',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    backgroundColor: 'lightgray',
    padding: 10,
  },
  button2: {
    borderRadius: 50,
    top: '5%',
    bottom: '5%',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    backgroundColor: 'lightgray',
    padding: 10,
    left: '2%',
  },
});

// export default WelcomeScreen;
