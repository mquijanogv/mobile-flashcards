import  { RECEIVE_QUESTIONS } from '../actions/InitialData'
import  { ADD_NEW_DECK } from '../actions/deck'
import { ADD_NEW_CARD } from '../actions/Card'

function questions (state = {}, action) {
  switch(action.type) {
    case  RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      }
    case ADD_NEW_DECK:
      return action.questions
    case ADD_NEW_CARD:
      return {
        ...state,
        [action.deckId]:{
          ...state[action.deckId],
          ['questions']: state[action.deckId].questions.concat(action.question)
        }
      }
    default:
      return state
  }
}

export default questions
