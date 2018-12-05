import {
  __setInitialDataInStorage,
  __addNewDeck,
  __addNewCard,
} from './_DATA.js'

export async function getInitialData () {
  return new Promise( async (res, rej) => {
    const initialData = await __setInitialDataInStorage();
    res(initialData)
  })
}

export async function addNewDeck (deck) {
  return new Promise (async (res, rej) => {
    const deckCopy = await __addNewDeck(deck)
    res(deckCopy)
  })
}

export async function addNewCard (deck, question) {
  return new Promise (async (res, rej) => {
    const deckCopy = await __addNewCard(deck, question)
    res(deckCopy)
  })
}
