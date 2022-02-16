import * as actions from "../actions/cryptoFormActions";

const initialState = {
  existingCryptoProject: [],
  haveFindCryptoDetails: false,
  findedCryptoDetails: null,
  formCanBeSubmit: false,
  loading: false,
};

export const cryptoFormReducers = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_EXISTING_CRYPTO_PROJECTS:
      return {
        ...state,
        existingCryptoProject: action.payload,
      };
    case actions.SET_FINDED_CRYPTO_DETAILS:
      return {
        ...state,
        haveFindCryptoDetails: true,
        findedCryptoDetails: action.payload,
      };
    case actions.SET_FORM_CAN_BE_SUBMIT:
      return {
        ...state,
        formCanBeSubmit: true,
      };
    case actions.CLEAN_REDUCERS:
      return {
        ...state,
        existingCryptoProject: [],
        haveFindCryptoDetails: false,
        findedCryptoDetails: null,
        formCanBeSubmit: false,
        loading: false,
      };
    default:
      return state;
  }
};
