import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux'

class Deck extends React.Component {
  render() {
    const { questionId, questions} = this.props
    return (
        <View style={styles.deck}>
          <Text style={styles.Header}> { questions[questionId].title }</Text>
          <Text style={styles.subHeader}>{ questions[questionId].questions.length } Cards</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  deck: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    alignItems: 'center',
  },
  Header: {
    fontSize:30,
    marginTop: 25,
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
