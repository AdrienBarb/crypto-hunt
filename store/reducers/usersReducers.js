import * as actions from '../actions/usersActions'

const initialState = {
  userData: null,
  currentUser: null,
  loading: false,
  users: [],
}

export const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      }
    default:
      return state
  }
}
