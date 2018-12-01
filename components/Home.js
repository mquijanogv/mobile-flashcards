import React from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import { connect } from 'react-redux'
import * as APIclient from '../utils/api'
import { handleInitialData } from '../actions/'
import Deck from './Deck'

class Home extends React.Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { questionIds, questions} = this.props
    return (
      <View style={styles.layout}>
        {questionIds.map((id) => (
          <Deck
            questionId={id}
            key={id}
            />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'stretch',
  },
  deck: {
    marginTop: 20,
    marginBottom: 20,
    color:'black',
  }
});

function mapStateToProps (questions) {
  const questionIds = Object.keys(questions)
  return {
    questions,
    questionIds
  }
}

export default connect(mapStateToProps)(Home)
