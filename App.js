import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { AsyncStorage } from 'react-native';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import middleware from './middleware'
import reducer from './reducers'
import Home from './components/Home'
import AddDeck from './components/AddDeck'
import DeckDetail from './components/DeckDetail'
import store from './factory'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

const HomeStack = createStackNavigator({
  Home: { screen: Home },
  DeckDetail: { screen: DeckDetail },
  AddDeck: { screen: AddDeck }

});

const Tabs = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color='black' />
    }),
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <AntDesign name='pluscircle' size={30} color='black' />
    },
  },
 }
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Tabs/>
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
