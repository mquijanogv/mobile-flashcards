import  { RECEIVE_QUESTIONS } from '../actions/InitialData'
import  { ADD_NEW_DECK } from '../actions/deck'

function questions (state = {}, action) {
  switch(action.type) {
    case  RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      }
    case ADD_NEW_DECK:
    return action.questions
    default:
      return state
  }
}

export default questions
