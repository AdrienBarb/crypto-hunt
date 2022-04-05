import * as actions from '../actions/nftProjectsActions'

const initialState = {
  currentNFTProject: null,
  nftProjects: [],
  loading: false,
}

export const nftProjectsReducers = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_NFT_PROJECTS:
      return {
        ...state,
        nftProjects: action.payload,
      }
    case actions.SET_CURRENT_NFT_PROJECT:
      return {
        ...state,
        currentNFTProject: action.payload,
      }
    default:
      return state
  }
}
