import { collection, onSnapshot } from '@firebase/firestore'
import { db } from '../../firebase/clientApp'

export const SET_CRYPTO_PROJECTS = 'SET_CRYPTO_PROJECTS'

export const getCryptoProjects = () => async (dispatch) => {
  try {
    const collectionRef = collection(db, 'cryptoProject')

    await onSnapshot(collectionRef, (querySnapshot) => {
      querySnapshot.docs.map((doc) => {
        dispatch({
          type: SET_CRYPTO_PROJECTS,
          payload: { ...doc.data(), id: doc.id },
        })
      })
    })
  } catch (error) {
    console.log(error)
  }
}
