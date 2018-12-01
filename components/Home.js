import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'
import * as APIclient from '../utils/api'
import { handleInitialData } from '../actions/'


class Home extends React.Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { questionIds, questions} = this.props
    return (
        <View>
            {questionIds.map((id) => (
              <Text key={id}>
                {id}
              </Text>
            ))}
        </View>
    );
  }
}

function mapStateToProps (questions) {
  const questionIds = Object.keys(questions)
  return {
    questions,
    questionIds
  }
}

export default connect(mapStateToProps)(Home)
