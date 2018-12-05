import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

class Quiz extends React.Component {
  static navigationOptions = {
    title: `Quiz`,
    headerStyle: {
      backgroundColor: 'white',
      height:40,
    },
    headerTintColor: 'black',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  state = {
    totalQuestions: 0,
    counter: 0,
    correctAnswers: 0
  }

  render() {
    const questionId = this.props.navigation.getParam('questionId', 'NO-ID');
    const { questions } = this.props

    console
    return (
      <View>
        <Text>{questions[questionId].questions[0].question}</Text>
      </View>
    );
  }
}

function mapStateToProps (questions) {
  return {
    questions,
  }
}

export default withNavigation(connect(mapStateToProps)(Quiz));
