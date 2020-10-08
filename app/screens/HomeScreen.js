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
          //   console.log(this.state.data);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
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
      // console.log(data[0].active);

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

          {/* <Button
            style={styles.button}
            title='View Statewise Data'
            onPress={pressHandler}
          /> */}
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
    fontFamily: 'nunito-regular',
    flex: 1,
    height: '100%',
    // backgroundColor: bgcolor,
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
    // paddingTop: '20%',
    fontFamily: 'nunito-regular',
    width: '100%',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    // marginTop: '2%',
    alignSelf: 'center',
    bottom: 5,
    // backgroundColor: 'blue'
    // width:200
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
    // padding: '5%',
    backgroundColor: 'hsla(181, 77%, 31%, 0.7)',
    // flex: .5
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
    // padding: '5%',
    backgroundColor: 'lightgray',
    // flex: .5
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
    // padding: '5%',
    backgroundColor: 'hsl(90, 68%, 33%)',
    // flex: .5
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
    // padding: '5%',
    backgroundColor: '#E8070A',
    // flex: .5
    width: '50%',
    height: '25%',
    borderWidth: 8,
    borderColor: bgcolor,
    borderRadius: 20,
  },
});
