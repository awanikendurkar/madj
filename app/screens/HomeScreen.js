import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      data: [],
    };
  }

  //use of api to fetch covid data
  componentDidMount() {
    fetch('https://api.covid19india.org/data.json')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result.statewise,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { isLoaded, data } = this.state;

    if (isLoaded) {
      return (
        <View style={styles.container}>
          {/* 4 boxes */}

          <View style={styles.confirmed}>
            <Text style={styles.boxtitle}>Total Confirmed</Text>
            <Text style={styles.numbers}>{data[0].confirmed}</Text>
          </View>
          <View style={styles.active}>
            <Text style={styles.boxtitle}>Active</Text>
            <Text style={styles.numbers}>{data[0].active}</Text>
          </View>

          <View style={styles.recovered}>
            <Text style={styles.boxtitle}>Recovered</Text>
            <Text style={styles.numbers}>{data[0].recovered}</Text>
          </View>
          <View style={styles.deaths}>
            <Text style={styles.boxtitle}>Deaths</Text>
            <Text style={styles.numbers}>{data[0].deaths}</Text>
          </View>
        </View>
      );
    } else {
      return <Text>Is loading</Text>;
    }
  }
}
const bgcolor = '#fff';
const green = '#77C483';
const red = '#F29499';
const blue = '#5EA3F8';
const styles = StyleSheet.create({
  container: {
    fontFamily: 'nunito-regular',
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingLeft: '5%',
    paddingRight: '5%',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },

  button: {
    alignSelf: 'center',
    fontFamily: 'nunito-regular',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 5,
    color: '#D6D6D6',
  },

  pagetitle: {
    fontFamily: 'nunito-regular',
    width: '100%',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    bottom: 5,
  },
  boxtitle: {
    fontFamily: 'nunito-regular',
    fontSize: 16,
    fontWeight: 'bold',
  },
  numbers: {
    fontFamily: 'nunito-regular',
    fontSize: 25,
  },
  active: {
    fontFamily: 'nunito-regular',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: blue,
    width: '50%',
    height: '25%',
    borderWidth: 8,
    borderColor: bgcolor,
    borderRadius: 20,
  },
  confirmed: {
    fontFamily: 'nunito-regular',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
    width: '50%',
    height: '25%',
    borderWidth: 8,
    borderColor: bgcolor,
    borderRadius: 20,
  },
  recovered: {
    fontFamily: 'nunito-regular',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: green,
    width: '50%',
    height: '25%',
    borderWidth: 8,
    borderColor: bgcolor,
    borderRadius: 20,
  },
  deaths: {
    fontFamily: 'nunito-regular',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: red,
    width: '50%',
    height: '25%',
    borderWidth: 8,
    borderColor: bgcolor,
    borderRadius: 20,
  },
});
