import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class Statewise extends React.Component {
  //state is created to store variables
  constructor(props) {
    super(props);
    this.state = {
      state: '',
      active: '-',
      confirmed: '-',
      deaths: '-',
      recovered: '-',
      isLoaded: false,
    };
  }
  //this function takes input from TextInput and stores in state
  handleinput = (inputtext) => {
    this.setState({ state: inputtext });
    // console.log(this.state.state);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.findState}>
          <Text style={styles.label}>Search for a state</Text>
          <TextInput
            placeholder='Search for a state...'
            onChangeText={this.handleinput}
            style={styles.input}
          />
          <TouchableOpacity
            activeOpacity={1}
            style={styles.button}
            onPress={this.getstatedata}
          >
            <Text style={styles.text}>Submit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.boxcontainer}>
          <View style={styles.confirmed}>
            <Text style={styles.boxtitle}>Total Confirmed</Text>
            <Text style={styles.numbers}>9999</Text>
          </View>
          <View style={styles.active}>
            <Text style={styles.boxtitle}>Active</Text>
            <Text style={styles.numbers}>9999</Text>
          </View>

          <View style={styles.recovered}>
            <Text style={styles.boxtitle}>Recovered</Text>
            <Text style={styles.numbers}>9999</Text>
          </View>
          <View style={styles.deaths}>
            <Text style={styles.boxtitle}>Deaths</Text>
            <Text style={styles.numbers}>9999</Text>
          </View>
        </View>
      </View>
    );
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
