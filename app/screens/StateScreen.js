import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  FlatList,
  ScrollView,
} from 'react-native';
import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from 'react-native-cards';
import SearchInput, { createFilter } from 'react-native-search-filter';
import { MaterialIcons } from '@expo/vector-icons';
import { SearchBar } from 'react-native-elements';
const KEYS_TO_FILTERS = ['state', 'statecode'];

export default class Statewise extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
      searchTerm: '',
    };
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }

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
    const filteredStates = data.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    );

    return (
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size='large' color='#EE6565' />
        ) : (
          <View>
            {/* <View style={styles.header}> */}
            {/* <MaterialIcons name='search' size={28} style={styles.icon} /> */}

            <SearchInput
              onChangeText={(term) => {
                this.searchUpdated(term);
              }}
              style={styles.searchInput}
              placeholder='Enter state name or state code...'
              clearIcon={
                this.state.searchTerm !== '' && (
                  <MaterialIcons name='clear' size={28} />
                )
              }
            />
            {/* </View> */}
            <ScrollView>
              {filteredStates.map((item) => {
                return (
                  <TouchableOpacity
                    onPress={() => alert(item.state)}
                    key={item.statecode}
                  >
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
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
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
  searchInput: {
    backgroundColor: bgcolor,
    padding: 10,
    margin: 10,
    borderColor: 'lightgray',
    borderWidth: 1,
    fontFamily: 'nunito-regular',
    borderRadius: 6,
    fontSize: 18,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    left: 1,
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
