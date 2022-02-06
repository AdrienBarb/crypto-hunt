import {
  collection,
  onSnapshot,
  addDoc,
  getDoc,
  doc,
  updateDoc
} from '@firebase/firestore'
import { db } from '../../firebase/clientApp'

export const SET_CRYPTO_PROJECTS = 'SET_CRYPTO_PROJECTS'
export const SET_CURRENT_CRYPTO_PROJECT = 'SET_CURRENT_CRYPTO_PROJECT'

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

export const addCryptoProject = (cryptoProjectValues) => async (dispatch) => {
  try {
    const cryptoProjectData = {
      name: cryptoProjectValues.name ? cryptoProjectValues.name : null,
      token: cryptoProjectValues.token ? cryptoProjectValues.token : null,
      description: cryptoProjectValues.description ? cryptoProjectValues.description : null,
      websiteLink: cryptoProjectValues.websiteLink ? cryptoProjectValues.websiteLink : null,
    }
    const collectionRef = collection(db, 'cryptoProject')
    await addDoc(collectionRef, cryptoProjectData)
  } catch (error) {}
}

export const editCryptoProject = (cryptoProjectValues, id) => async (dispatch) => {

  try {
    const cryptoProjectData = {
      name: cryptoProjectValues.name ? cryptoProjectValues.name : null,
      token: cryptoProjectValues.token ? cryptoProjectValues.token : null,
      description: cryptoProjectValues.description ? cryptoProjectValues.description : null,
      websiteLink: cryptoProjectValues.websiteLink ? cryptoProjectValues.websiteLink : null,
    }

    const docRef = doc(db, 'cryptoProject', id)
    await updateDoc(docRef, cryptoProjectData)

  } catch (error) {
    console.log(error)
  }
}

export const getCurrentCryptoProject = (id) => async (dispatch) => {
  try {
    const docRef = doc(db, 'cryptoProject', id)
    const docSnap = await getDoc(docRef)

    dispatch({
      type: SET_CURRENT_CRYPTO_PROJECT,
      payload: { ...docSnap.data(), id: docSnap.id },
    })
  } catch (error) {}
}
