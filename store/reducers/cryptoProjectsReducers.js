import * as actions from '../actions/cryptoProjectsActions'

const initialState = {
  currentCryptoProject: null,
  cryptoProjects: [],
  loading: false,
}

export const cryptoProjectsReducers = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_CRYPTO_PROJECTS:
      return {
        ...state,
        cryptoProjects: action.payload,
      }
    case actions.SET_CURRENT_CRYPTO_PROJECT:
      return {
        ...state,
        currentCryptoProject: action.payload,
      }

    default:
      return state
  }
}
