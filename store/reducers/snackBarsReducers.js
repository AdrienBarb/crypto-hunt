import * as actions from '../actions/snackBarsActions'

const initialState = {
  type: null,
  isOpen: false,
  textMessage: null,
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
    default:
      return state
  }
}
