import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Card, CardContent } from 'react-native-cards';
import { ScrollView } from 'react-native-gesture-handler';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      data: [],
    };
  }

  // use of api to fetch covid data
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
    //const population = 1380004385;

    if (isLoaded) {
      return (
        <View style={styles.container}>
          {/* 4 boxes */}

          <View style={styles.time}>
            <Text style={styles.text}>
              Last updated: {data[0].lastupdatedtime}
            </Text>
          </View>

          <ScrollView>
            <Card style={styles.confirmedCard}>
              <CardContent>
                <Text style={styles.confirmed}>Total Confirmed</Text>
                <Text style={[styles.confirmed, styles.number]}>
                  {data[0].confirmed}
                </Text>
                <Text style={[styles.confirmed, styles.smallNumber]}>
                  +{data[0].deltaconfirmed}
                </Text>
              </CardContent>
            </Card>
            <Card style={styles.activeCard}>
              <CardContent>
                <Text style={styles.active}>Active</Text>
                <Text style={[styles.active, styles.number]}>
                  {data[0].active}
                </Text>
              </CardContent>
            </Card>
            <Card style={styles.recoveredCard}>
              <CardContent>
                <Text style={styles.recovered}>Recovered</Text>
                <Text style={[styles.recovered, styles.number]}>
                  {data[0].recovered}
                </Text>
                <Text style={[styles.recovered, styles.smallNumber]}>
                  +{data[0].deltarecovered}
                </Text>
              </CardContent>
            </Card>
            <Card style={styles.deathsCard}>
              <CardContent>
                <Text style={styles.deaths}>Deaths</Text>
                <Text style={[styles.deaths, styles.number]}>
                  {data[0].deaths}
                </Text>
                <Text style={[styles.deaths, styles.smallNumber]}>
                  +{data[0].deltadeaths}
                </Text>
              </CardContent>
            </Card>
          </ScrollView>
          {/* <MainTabScreen /> */}
        </View>
      );
    } else {
      return <ActivityIndicator size='large' color='#EE6565' />;
    }
  }
}

const bgcolor = '#fff';
const red = '#ED3D3F';
const blue = '#177AF6';
const grey = '#6D767E';
const green = '#4CA747';
const size = 25;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    fontFamily: 'nunito-regular',
    padding: 24,
    backgroundColor: bgcolor,
  },
  text: {
    padding: 6,
    fontSize: 18,
    color: grey,
    textAlign: 'center',
  },
  number: {
    fontFamily: 'nunito-bold',
    fontSize: size + 8,
  },
  smallNumber: {
    fontSize: size - 8,
  },
  time: {
    paddingTop: 20,
    paddingBottom: 24,
  },
  // data styling
  active: {
    fontFamily: 'nunito-regular',
    color: red,
    fontSize: size,
    textAlign: 'center',
  },
  confirmed: {
    fontFamily: 'nunito-regular',
    color: blue,
    fontSize: size,
    textAlign: 'center',
  },
  deaths: {
    fontFamily: 'nunito-regular',
    color: grey,
    fontSize: size,
    textAlign: 'center',
  },
  recovered: {
    fontFamily: 'nunito-regular',
    color: green,
    fontSize: size,
    textAlign: 'center',
  },
  confirmedCard: {
    backgroundColor: '#D3E6FC',
    margin: 10,
    padding: 15,
    paddingTop: 25,
  },
  activeCard: {
    backgroundColor: '#FAE0E2',
    margin: 10,
    padding: 15,
    paddingTop: 25,
  },
  recoveredCard: {
    backgroundColor: '#E3F3E6',
    margin: 10,
    padding: 15,
    paddingTop: 25,
  },
  deathsCard: {
    backgroundColor: '#F6F6F7',
    margin: 10,
    padding: 15,
    paddingTop: 25,
  },
});
