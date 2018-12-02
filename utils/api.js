import {
  __setInitialDataInStorage,
  __addNewDeck,
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
