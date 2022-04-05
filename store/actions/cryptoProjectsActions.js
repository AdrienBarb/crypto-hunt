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
import axios from "axios";
import { SET_SNACKBAR } from "./snackBarsActions";

export const SET_CRYPTO_PROJECTS = "SET_CRYPTO_PROJECTS";
export const SET_CURRENT_CRYPTO_PROJECT = "SET_CURRENT_CRYPTO_PROJECT";
export const SET_EXISTING_CRYPTO_PROJECTS = "SET_EXISTING_CRYPTO_PROJECTS";
export const SET_FINDED_CRYPTO_DETAILS = "SET_FINDED_CRYPTO_DETAILS";
export const SET_CRYPTO_NUMBERS_DETAILS = "SET_CRYPTO_NUMBERS_DETAILS";

export const getCryptoProjects = () => async (dispatch) => {
  try {
    const collectionRef = collection(db, "cryptoProject");

    const q = query(collectionRef, orderBy("votesCounter", "desc"));

    await onSnapshot(q, (querySnapshot) => {
      dispatch({
        type: SET_CRYPTO_PROJECTS,
        payload: querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })),
      });
    });
  } catch (error) {
    console.log(error);
  }
};

export const addCryptoProject =
  (cryptoProjectValues) => async (dispatch, getState) => {
    const currentUser = getState().usersReducers.currentUser;
    try {
      const cryptoProjectData = {
        name: cryptoProjectValues.name ? cryptoProjectValues.name : null,
        token: cryptoProjectValues.token
          ? cryptoProjectValues.token.toUpperCase()
          : null,
        description: cryptoProjectValues.description
          ? cryptoProjectValues.description
          : null,
        websiteLink: cryptoProjectValues.websiteLink
          ? cryptoProjectValues.websiteLink
          : null,
        votesCounter: 0,
        voters: [],
        whitePaperLink: cryptoProjectValues.whitePaperLink
          ? cryptoProjectValues.whitePaperLink
          : null,
        twitterLink: cryptoProjectValues.twitterLink
          ? cryptoProjectValues.twitterLink
          : null,
        networkOwnerRewards: cryptoProjectValues.networkOwnerRewards
          ? cryptoProjectValues.networkOwnerRewards
          : null,
        addressOwnerRewards: cryptoProjectValues.addressOwnerRewards
          ? cryptoProjectValues.addressOwnerRewards
          : null,
        projectOwner: currentUser.uid,
        tags: cryptoProjectValues.tags ? cryptoProjectValues.tags : [],
      };
      const collectionRef = collection(db, "cryptoProject");
      await addDoc(collectionRef, cryptoProjectData);

      if (cryptoProjectValues.tags.length) {
        createTags(cryptoProjectValues.tags);
      }
    } catch (error) {}
  };

export const editCryptoProject =
  (cryptoProjectValues, id) => async (dispatch) => {
    try {
      const cryptoProjectData = {
        name: cryptoProjectValues.name ? cryptoProjectValues.name : null,
        token: cryptoProjectValues.token
          ? cryptoProjectValues.token.toUpperCase()
          : null,
        description: cryptoProjectValues.description
          ? cryptoProjectValues.description
          : null,
        websiteLink: cryptoProjectValues.websiteLink
          ? cryptoProjectValues.websiteLink
          : null,
        whitePaperLink: cryptoProjectValues.whitePaperLink
          ? cryptoProjectValues.whitePaperLink
          : null,
        twitterLink: cryptoProjectValues.twitterLink
          ? cryptoProjectValues.twitterLink
          : null,
        networkOwnerRewards: cryptoProjectValues.networkOwnerRewards
          ? cryptoProjectValues.networkOwnerRewards
          : null,
        addressOwnerRewards: cryptoProjectValues.addressOwnerRewards
          ? cryptoProjectValues.addressOwnerRewards
          : null,
      };

      const docRef = doc(db, "cryptoProject", id);
      await updateDoc(docRef, { ...cryptoProjectData });
    } catch (error) {
      console.log(error);
    }
  };

export const getCurrentCryptoProject = (id) => async (dispatch) => {
  try {
    const docRef = doc(db, "cryptoProject", id);
    const docSnap = await getDoc(docRef);

    dispatch({
      type: SET_CURRENT_CRYPTO_PROJECT,
      payload: { ...docSnap.data(), id: docSnap.id },
    });
  } catch (error) {}
};

export const voteUpForCryptoProject = (id) => async (dispatch, getState) => {
  const currentUser = getState().usersReducers.currentUser;

  try {
    const docRef = doc(db, "cryptoProject", id);
    const docSnap = await getDoc(docRef);

    await updateDoc(docRef, {
      ...docSnap.data(),
      votesCounter: docSnap.data().votesCounter + 1,
      voters: [...docSnap.data().voters, currentUser.uid],
    });
  } catch (error) {
    console.log(error);
  }
};

export const voteDownForCryptoProject = (id) => async (dispatch, getState) => {
  const currentUser = getState().usersReducers.currentUser;
  try {
    const docRef = doc(db, "cryptoProject", id);
    const docSnap = await getDoc(docRef);

    await updateDoc(docRef, {
      ...docSnap.data(),
      votesCounter:
        docSnap.data().votesCounter == 0 ? 0 : docSnap.data().votesCounter - 1,
      voters: [
        ...docSnap.data().voters.filter((voter) => voter !== currentUser.uid),
      ],
    });
  } catch (error) {}
};

export const getProjectDetails = (value) => async (dispatch) => {
  try {
    if (value) {
      axios
        .get(`/api/crypto-details?token=${value}`, {
          headers: {
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((response) => {
          dispatch({
            type: SET_FINDED_CRYPTO_DETAILS,
            payload: response.data.data.data,
          });
        })
        .catch((err) => console.log(err));
    }
  } catch (error) {
    console.log(error);
  }
};

export const getProjectNumbers = (value) => async (dispatch) => {
  try {
    if (value) {
      axios
        .get(`/api/crypto-numbers?token=${value.toUpperCase()}`, {
          headers: {
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((response) => {
          if (response.data.data.Response == "Error") {
            dispatch({
              type: SET_CRYPTO_NUMBERS_DETAILS,
              payload: null,
            });
          } else {
            dispatch({
              type: SET_CRYPTO_NUMBERS_DETAILS,
              payload:
                response.data.data.DISPLAY[
                  Object.keys(response.data.data.DISPLAY)[0]
                ].USD,
            });
          }
        })
        .catch((err) => console.log(err));
    }
  } catch (error) {
    console.log(error);
  }
};

const createTags = (tagsList) => {
  tagsList.forEach(async (tag) => {
    const collectionRef = collection(db, "tags");
    const q = await query(collectionRef, where("name", "==", tag));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length == 0) {
      await addDoc(collectionRef, { name: tag });
    }
  });
};
