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
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-cards';

export default class Statewise extends React.Component {
  //state is created to store variables
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
    };
  }
  //this function takes input from TextInput and stores in state
  // handleinput = (inputtext) => {
  //   this.setState({ state: inputtext });
  //   // console.log(this.state.state);
  // };

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

    return (
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size='large' color='#EE6565' />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ statecode }, index) => statecode}
            renderItem={({ item }) => (
              <Card>
                <CardTitle style={styles.title} title={item.state} />
                <CardContent>
                  <Text style={styles.confirmed}>
                    Confirmed: {item.confirmed}
                  </Text>
                  <Text style={styles.active}>Active: {item.active}</Text>
                  <Text style={styles.recovered}>
                    Recovered: {item.recovered}
                  </Text>
                  <Text style={styles.deaths}>Deaths: {item.deaths}</Text>
                </CardContent>
              </Card>
            )}
          />
        )}
      </View>
    );
  }
}

const bgcolor = '#fff';
const red = '#ED3D3F';
const blue = '#177AF6';
const grey = '#6D767E';
const green = '#4CA747';
const size = 16;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    fontFamily: 'nunito-regular',
    padding: 10,
    backgroundColor: bgcolor,
  },
  item: {
    height: 50,
    backgroundColor: 'lightgray',
    padding: 5,
    margin: 5,
    //borderRadius: 20,
  },
  text: {
    padding: 6,
    fontFamily: 'nunito-regular',
    fontSize: 18,
  },
  // data styling
  active: {
    fontFamily: 'nunito-bold',
    color: red,
    fontSize: size,
  },
  confirmed: {
    fontFamily: 'nunito-bold',
    color: blue,
    fontSize: size,
  },
  deaths: {
    fontFamily: 'nunito-bold',
    color: grey,
    fontSize: size,
  },
  recovered: {
    fontFamily: 'nunito-bold',
    color: green,
    fontSize: size,
  },
});
