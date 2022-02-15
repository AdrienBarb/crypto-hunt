import * as actions from "../actions/cryptoProjectsActions";

const initialState = {
  currentCryptoProject: null,
  cryptoProjects: [],
  existingCryptoProject: [],
  haveFindCryptoDetails: false,
  findedCryptoDetails: null,
  loading: false,
};

export const cryptoProjectsReducers = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_CRYPTO_PROJECTS:
      return {
        ...state,
        cryptoProjects: action.payload,
      };
    case actions.SET_CURRENT_CRYPTO_PROJECT:
      return {
        ...state,
        currentCryptoProject: action.payload,
      };
    // case actions.SET_EXISTING_CRYPTO_PROJECTS:
    //   return {
    //     ...state,
    //     existingCryptoProject: action.payload,
    //   }
    // case actions.SET_FINDED_CRYPTO_DETAILS:
    //   return {
    //     ...state,
    //     haveFindCryptoDetails: true,
    //     findedCryptoDetails: action.payload,
    //   }
    default:
      return state;
  }
};
