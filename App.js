import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { AsyncStorage } from 'react-native';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import middleware from './middleware'
import reducer from './reducers'
import Home from './components/Home'
import store from './factory'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Home />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: 'white',
  },
});
