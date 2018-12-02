import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import { addNewDeck } from '../actions/deck'

class AddDeck extends Component {
  state = {
    text:''
  }

  handlePress = () => {
    this.props.dispatch(addNewDeck(this.state.text))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.question}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.textInput}
          selectionColor={"black"}
          placeholder="Deck Title"
          onChangeText={(text) => this.setState({text})}
        />
        <TouchableOpacity style={styles.btn} onPress={() => this.handlePress()}>
          <Text style={styles.btnText}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flex: 1,
    backgroundColor: 'white',
  },
  question: {
    textAlign:"center",
    fontSize:40,
    color: 'grey'
  },
  textInput: {
    height:100,
    borderWidth: 2,
    textAlign:"center",
    fontSize:40,
    color: 'grey',
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
  },
  btn: {
    alignItems:"center",
    borderWidth: 1,
    borderRadius: 2,
    borderBottomWidth: 1,
    shadowColor: 'blue',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 50,
    backgroundColor: 'black',
    height:50
  },
  btnText: {
    fontSize:30,
    color:'white',
  }
});

export default connect()(AddDeck)
