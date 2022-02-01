import axios from 'axios'

export const SET_CURRENT_USER = 'SET_CURRENT_USER'

export const getCurrentUser = (user) => async (dispatch) => {
  try {
    dispatch({
      type: SET_CURRENT_USER,
      payload: user,
    })
  } catch (error) {
    console.log(error)
  }
}
