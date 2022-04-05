import * as actions from '../actions/nftFormActions'

const initialState = {
  existingNFTProject: [],
  haveFindNFTDetails: false,
  findedNFTDetails: null,
  formCanBeSubmit: false,
  loading: false,
}

export const nftFormReducers = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_EXISTING_NFT_PROJECTS:
      return {
        ...state,
        existingNFTProject: action.payload,
      }
    case actions.SET_FINDED_NFT_DETAILS:
      return {
        ...state,
        haveFindNFTDetails: true,
        findedNFTDetails: action.payload,
      }
    case actions.SET_FORM_CAN_BE_SUBMIT:
      return {
        ...state,
        formCanBeSubmit: true,
      }
    case actions.CLEAN_REDUCERS:
      return {
        ...state,
        existingCryptoProject: [],
        haveFindNFTDetails: false,
        findedNFTDetails: null,
        formCanBeSubmit: false,
        loading: false,
      }
    default:
      return state
  }
}
