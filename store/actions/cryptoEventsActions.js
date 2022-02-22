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

export const CLEAN_REDUCERS = "CLEAN_REDUCERS";

export const createCryptoEvent =
  (cryptoProjectValues, projectId) => async (dispatch) => {
    try {
      const cryptoEventData = {
        eventType: cryptoProjectValues.eventType
          ? cryptoProjectValues.eventType
          : "",
        otherEventType: cryptoProjectValues.otherEventType
          ? cryptoProjectValues.otherEventType
          : "",
        currentDate: cryptoProjectValues.currentDate
          ? cryptoProjectValues.currentDate
          : "",
        link: cryptoProjectValues.link ? cryptoProjectValues.link : "",
        projectId: projectId,
        projectType: 'crypto'
      };
      const collectionRef = collection(db, "events");
      await addDoc(collectionRef, cryptoEventData);
    } catch (error) {
      console.log(error);
    }
  };

export const cleanReducers = () => async (dispatch) => {
  dispatch({
    type: CLEAN_REDUCERS,
    payload: null,
  });
};
