import * as actions from '../actions/usersActions'

const initialState = {
  loading: false,
  users: [],
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}
