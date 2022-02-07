import {
  collection,
  onSnapshot,
  addDoc,
  getDoc,
  doc,
  updateDoc,
  orderBy,
  query,
  where,
  getDocs,
} from '@firebase/firestore'
import { db } from '../../firebase/clientApp'

export const SET_CRYPTO_PROJECTS = 'SET_CRYPTO_PROJECTS'
export const SET_CURRENT_CRYPTO_PROJECT = 'SET_CURRENT_CRYPTO_PROJECT'

export const getCryptoProjects = () => async (dispatch) => {
  try {
    const collectionRef = collection(db, 'cryptoProject')

    const q = query(collectionRef, orderBy('vote', 'desc'))

    await onSnapshot(q, (querySnapshot) => {
      dispatch({
        type: SET_CRYPTO_PROJECTS,
        payload: querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })),
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
      description: cryptoProjectValues.description
        ? cryptoProjectValues.description
        : null,
      websiteLink: cryptoProjectValues.websiteLink
        ? cryptoProjectValues.websiteLink
        : null,
      votesCounter: 0,
      voters: [],
    }
    const collectionRef = collection(db, 'cryptoProject')
    await addDoc(collectionRef, cryptoProjectData)
  } catch (error) {}
}

export const editCryptoProject = (cryptoProjectValues, id) => async (
  dispatch
) => {
  try {
    const cryptoProjectData = {
      name: cryptoProjectValues.name ? cryptoProjectValues.name : null,
      token: cryptoProjectValues.token ? cryptoProjectValues.token : null,
      description: cryptoProjectValues.description
        ? cryptoProjectValues.description
        : null,
      websiteLink: cryptoProjectValues.websiteLink
        ? cryptoProjectValues.websiteLink
        : null,
    }

    const docRef = doc(db, 'cryptoProject', id)
    await updateDoc(docRef, { ...cryptoProjectData })
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

export const voteUpForCryptoProject = (id) => async (dispatch, getState) => {
  const currentUser = getState().usersReducers.currentUser

  try {
    const docRef = doc(db, 'cryptoProject', id)
    const docSnap = await getDoc(docRef)

    await updateDoc(docRef, {
      ...docSnap.data(),
      vote: docSnap.data().vote + 1,
    })

    const collectionRef = collection(db, 'votes')
    await addDoc(collectionRef, {
      projectId: id,
      userId: currentUser.uid,
    })
  } catch (error) {
    console.log(error)
  }
}

export const voteDownForCryptoProject = (id) => async (dispatch, getState) => {
  const currentUser = getState().usersReducers.currentUser
  try {
    const docRef = doc(db, 'cryptoProject', id)
    const docSnap = await getDoc(docRef)

    await updateDoc(docRef, {
      ...docSnap.data(),
      vote: docSnap.data().vote - 1,
    })

    const collectionRef = collection(db, 'votes')
    await addDoc(collectionRef, {
      projectId: id,
      userId: currentUser.uid,
    })
  } catch (error) {}
}

export const checkIfVoted = (id) => async (dispatch, getState) => {
  const currentUser = getState().usersReducers.currentUser

  try {
    const collectionRef = collection(db, 'votes')

    const q = query(
      collectionRef,
      where('projectId', '==', id),
      where('userId', '==', currentUser.uid)
    )

    const votes = await getDocs(q)

    return votes.docs.length > 0
  } catch (error) {
    console.log(error)
  }
}
