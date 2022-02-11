import { auth } from "../../firebase/clientApp";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signOut, updateProfile } from "firebase/auth";
import { SET_SNACKBAR } from "./snackBarsActions";
export const SET_CURRENT_USER = "SET_CURRENT_USER";

export const getCurrentUser = (user) => async (dispatch) => {
  try {
    dispatch({
      type: SET_CURRENT_USER,
      payload: user,
    });
  } catch (error) {
    console.log(error);
  }
};

export const signIn = (values) => async (dispatch) => {
  try {
    await signInWithEmailAndPassword(auth, values.email, values.password);
    dispatch({
      type: SET_SNACKBAR,
      payload: {
        type: "success",
        textMessage: "Connecté.",
        isOpen: true,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (values) => async (dispatch) => {
  try {
    const result = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );

    await updateProfile(result.user, {
      displayName: values.surname,
    });
    
    dispatch({
      type: SET_SNACKBAR,
      payload: {
        type: "success",
        textMessage: "Connecté.",
        isOpen: true,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch({
      type: SET_SNACKBAR,
      payload: {
        type: "warning",
        textMessage: "Déconnecté.",
        isOpen: true,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
