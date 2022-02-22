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
} from "@firebase/firestore";
import { db } from "../../firebase/clientApp";
import { SET_SNACKBAR } from "./snackBarsActions";

export const CLEAN_REDUCERS = 'CLEAN_REDUCERS'

export const createCryptoEvent =
  (cryptoProjectValues, projectId) => async (dispatch) => {};

export const cleanReducers = () => async (dispatch) => {
  dispatch({
    type: CLEAN_REDUCERS,
    payload: null,
  });
};
