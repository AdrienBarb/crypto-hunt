import * as actions from '../actions/snackBarsActions'

const initialState = {
  type: '',
  isOpen: false,
  textMessage: '',
}

export const snackBarsReducers = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_SNACKBAR:
      return {
        ...state,
        type: action.payload.type,
        isOpen: action.payload.isOpen,
        textMessage: action.payload.textMessage,
      }
    case actions.SET_CLOSE_SNACKBAR:
      return {
        ...state,
        type: '',
        isOpen: false,
        textMessage: '',
      }
    default:
      return state
  }
}
