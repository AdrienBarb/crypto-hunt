export const SET_SNACKBAR = 'SET_SNACKBAR'
export const SET_CLOSE_SNACKBAR = 'SET_CLOSE_SNACKBAR'

export const closeSnackbar = () => async (dispatch) => {
  try {
    dispatch({
      type: SET_CLOSE_SNACKBAR,
      payload: null,
    })
  } catch (error) {
    console.log(error)
  }
}
