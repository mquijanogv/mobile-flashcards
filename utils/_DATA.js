import { AsyncStorage } from 'react-native';

export const APP_DATA = 'APP_DATA'
const DATA_INITIALIZED = 'DATA_INITIALIZED'

// Initial Dummy Data
let mobileDecks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

// We want to start with at least some data the first time the App is ran
export async function __setInitialDataInStorage () {
  return new Promise((res, rej) => {
    setTimeout( async () => {
      try {
        const dataIsInitialized = await AsyncStorage.getItem(DATA_INITIALIZED);
        if (dataIsInitialized) {
          const appData = await AsyncStorage.getItem(APP_DATA)
          res(appData)
        } else {
          await AsyncStorage.setItem(DATA_INITIALIZED, "true");
          AsyncStorage.setItem('APP_DATA', JSON.stringify(mobileDecks),  async() => {
            const data = await AsyncStorage.getItem(MOBILE_CARDS_DATA)
            res(data)
          });
        }
      } catch (err) {
        rej(err)
      }
    }, 1000)
  })
}

// function getemptyDeck (deckName) {
//   return {
//     deckName: {
//       title: deckName,
//       questions: []
//     }
//   }
// }
//
// export function getDecks () {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(mobileDecks)
//     }, 1000)
//   })
// }
//
// export function getDeck (id) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(mobileDeck[id])
//     }, 1000)
//   })
// }
//
// export function saveDeckTitle (id) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       mobileDecks = {
//         ...mobileDecks,
//         id: {
//           title: id,
//           questions:[]
//         }
//       }
//       res()
//     }, 1000)
//   })
// }
//
// export function addCardToDeck (id) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(mobileDeck[id])
//     }, 1000)
//   })
// }
