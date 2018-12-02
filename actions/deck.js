import * as API from '../utils/api'

export const ADD_NEW_DECK = 'ADD_NEW_DECK'

export function addNewDeck (deck) {
  return (dispatch) => {
    return API.addNewDeck(deck)
      .then((questions) => {
        dispatch(addDeck(questions))
      })
  }
}

function addDeck (questions) {
  return {
    type: ADD_NEW_DECK,
    questions
  }
}
