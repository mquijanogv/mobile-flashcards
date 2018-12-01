import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import { MaterialCommunityIcons } from '@expo/vector-icons';

class Deck extends React.Component {
  onPressButton = (questionId) => {
   console.log(`Question ${questionId} was pressed`)
 }
  render() {
    const { questionId, questions} = this.props
    return (
      <TouchableOpacity onPress={() => this.onPressButton(questionId)}>
        <View style={styles.deck}>
          <MaterialCommunityIcons style={styles.icon} name="cards" />
          <Text style={styles.Header}>
          { questions[questionId].title }
          </Text>
          <Text style={styles.subHeader}>{ questions[questionId].questions.length } Cards</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  deck: {
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    borderTopWidth: 1
  },
  icon: {
    fontSize: 55,
    marginTop: 25,
    color:'black'
  },
  Header: {
    fontSize:30,
  },
  subHeader: {
    fontSize: 15,
    marginBottom: 25,
    color:'grey'
  }
});

function mapStateToProps (questions) {
  return {
    questions,
  }
}

export default connect(mapStateToProps)(Deck)
