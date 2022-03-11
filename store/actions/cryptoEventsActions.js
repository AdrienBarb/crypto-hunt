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
  collectionGroup,
} from '@firebase/firestore'
import { db } from '../../firebase/clientApp'
import moment, { unix } from 'moment'
import { SET_SNACKBAR } from './snackBarsActions'

export const CLEAN_REDUCERS = 'CLEAN_REDUCERS'
export const SET_CRYPTO_PROJECT_EVENTS = 'SET_CRYPTO_PROJECT_EVENTS'
export const SET_EVENTS = 'SET_EVENTS'

export const createCryptoEvent = (cryptoProjectValues, project) => async (
  dispatch
) => {
  try {
    const cryptoEventData = {
      eventType: cryptoProjectValues.eventType
        ? cryptoProjectValues.eventType
        : '',
      otherEventType: cryptoProjectValues.otherEventType
        ? cryptoProjectValues.otherEventType
        : '',
      eventDate: cryptoProjectValues.eventDate
        ? moment(cryptoProjectValues.eventDate).unix()
        : '',
      link: cryptoProjectValues.link ? cryptoProjectValues.link : '',
      projectId: project.id,
      projectName: project.name,
      projectType: 'crypto',
    }

    const collectionRef = collection(db, `cryptoProject/${project.id}/events`)
    await addDoc(collectionRef, cryptoEventData)
  } catch (error) {
    console.log(error)
  }
}

export const getCurrentCryptoProjectEvent = (projectId) => async (dispatch) => {
  const collectionRef = collection(db, `cryptoProject/${projectId}/events`)
  const q = query(collectionRef, orderBy('eventDate', 'desc'))

  try {
    await onSnapshot(q, (querySnapshot) => {
      dispatch({
        type: SET_CRYPTO_PROJECT_EVENTS,
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

export const getEvents = () => async (dispatch) => {
  try {
    const collectionRef = collectionGroup(db, 'events')

    const q = query(collectionRef, orderBy('eventDate', 'desc'))

    await onSnapshot(q, (querySnapshot) => {
      dispatch({
        type: SET_EVENTS,
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

export const cleanReducers = () => async (dispatch) => {
  dispatch({
    type: CLEAN_REDUCERS,
    payload: null,
  })
}
