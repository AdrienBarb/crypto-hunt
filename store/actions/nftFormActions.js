import { collection, query, where, getDocs } from '@firebase/firestore'
import { db } from '../../firebase/clientApp'
import axios from 'axios'
import { SET_SNACKBAR } from './snackBarsActions'
export const SET_EXISTING_NFT_PROJECTS = 'SET_EXISTING_NFT_PROJECTS'
export const SET_FINDED_NFT_DETAILS = 'SET_FINDED_NFT_DETAILS'
export const SET_FORM_CAN_BE_SUBMIT = 'SET_FORM_CAN_BE_SUBMIT'
export const CLEAN_REDUCERS = 'CLEAN_REDUCERS'
export const SET_CRYPTO_FORM_LOADING = 'SET_CRYPTO_FORM_LOADING'

export const checkIfProjectExist = (value) => async (dispatch) => {
  dispatch({
    type: SET_CRYPTO_FORM_LOADING,
    payload: true,
  })

  try {
    const collectionRef = collection(db, 'nftProjects')
    const q = query(collectionRef, where('name', '==', value))
    const querySnapshot = await getDocs(q)

    dispatch({
      type: SET_EXISTING_NFT_PROJECTS,
      payload: querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })),
    })

    if (querySnapshot.docs.length > 0) {
      dispatch({
        type: SET_SNACKBAR,
        payload: {
          type: 'error',
          textMessage: 'Ce projet existe déjà',
          isOpen: true,
        },
      })
      return
    } else {
      dispatch({
        type: SET_FORM_CAN_BE_SUBMIT,
        payload: true,
      })
    }
  } catch (error) {
    console.log(error)
  }

  dispatch({
    type: SET_CRYPTO_FORM_LOADING,
    payload: false,
  })
}

export const cleanReducers = () => async (dispatch) => {
  dispatch({
    type: CLEAN_REDUCERS,
    payload: null,
  })
}
