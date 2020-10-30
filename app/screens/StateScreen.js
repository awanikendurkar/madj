import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class Statewise extends React.Component {
  //state is created to store variables
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
      location: null,
      geocode: null,
      errorMessage: '',
    };
  }
  //this function takes input from TextInput and stores in state
  // handleinput = (inputtext) => {
  //   this.setState({ state: inputtext });
  //   // console.log(this.state.state);
  // };

  // location
  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Lowest,
    });
    const { latitude, longitude } = location.coords;
    this.getGeocodeAsync({ latitude, longitude });
    this.setState({ location: { latitude, longitude } });
  };

  getGeocodeAsync = async (location) => {
    let geocode = await Location.reverseGeocodeAsync(location);
    this.setState({ geocode });
  };

  // TRIAL
  componentDidMount() {
    fetch('https://api.covid19india.org/data.json')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.statewise });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { data, isLoading } = this.state;
    const { location, geocode, errorMessage } = this.state;
    if (!isLoading) {
      return (
        // CHANGE STYLES HERE
        <View style={{ flex: 1, padding: 24 }}>
          <Text style={styles.text}>
            Location detected:
            {geocode[0].city}
          </Text>

          {/* {isLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={data}
              keyExtractor={({ statecode }, index) => statecode}
              renderItem={({ item }) => (
                <Text>
                  {item.state}: {item.active}
                </Text>
              )}
            />
          )} */}
        </View>
      );
    } else {
      return <Text>Is loading</Text>;
    }
  }
}

const bgcolor = '#fff';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    fontFamily: 'nunito-regular',
  },
  text: {
    fontFamily: 'nunito-regular',
  },
  findState: {
    fontFamily: 'nunito-regular',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '5%',
  },
  boxcontainer: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingLeft: '2%',
    paddingRight: '2%',
    fontFamily: 'nunito-regular',
  },
  pagetitle: {
    width: '100%',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '15%',
    alignSelf: 'center',
    bottom: 5,
    fontFamily: 'nunito-regular',
  },
  label: {
    fontSize: 20,
    fontFamily: 'nunito-regular',
  },
  input: {
    backgroundColor: 'lightgray',
    borderRadius: 50,
    padding: '2%',
    top: '1%',
    height: '20%',
    fontFamily: 'nunito-regular',
  },
  button: {
    borderRadius: 50,
    top: '7%',
    bottom: '5%',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    backgroundColor: 'lightgray',
    padding: 10,
    fontFamily: 'nunito-regular',
  },
  boxtitle: {
    fontFamily: 'nunito-regular',
    fontSize: 16,
    fontWeight: 'bold',
  },
  numbers: {
    fontSize: 25,
    fontFamily: 'nunito-regular',
  },
  active: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'hsla(181, 77%, 31%, 0.7)',
    width: '50%',
    height: '30%',
    borderWidth: 8,
    borderColor: bgcolor,
    borderRadius: 20,
    fontFamily: 'nunito-regular',
  },
  confirmed: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
    width: '50%',
    height: '30%',
    borderWidth: 8,
    borderColor: bgcolor,
    borderRadius: 20,
    fontFamily: 'nunito-regular',
  },
  recovered: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'hsl(90, 68%, 33%)',
    width: '50%',
    height: '30%',
    borderWidth: 8,
    borderColor: bgcolor,
    borderRadius: 20,
    fontFamily: 'nunito-regular',
  },
  deaths: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8070A',
    width: '50%',
    height: '30%',
    borderWidth: 8,
    borderColor: bgcolor,
    borderRadius: 20,
    fontFamily: 'nunito-regular',
  },
});
