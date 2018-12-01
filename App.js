import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { AsyncStorage } from 'react-native';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import middleware from './middleware'
import reducer from './reducers'
import Home from './components/Home'
import store from './factory'
import { createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color='black' />
    },

  },
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Tabs />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flex: 1,
    backgroundColor: 'white',
  },
});
