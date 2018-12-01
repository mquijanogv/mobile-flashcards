import {
  __setInitialDataInStorage
} from './_DATA.js'

export async function getInitialData () {
  return new Promise( async (res, rej) => {
    const initialData = await __setInitialDataInStorage();
    res(initialData)
  })
}
