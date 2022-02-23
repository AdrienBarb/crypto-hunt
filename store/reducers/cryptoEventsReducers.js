import * as actions from "../actions/cryptoEventsActions";

const initialState = {
  events: [],
  cryptoEvents: [],
  loading: false,
};

export const cryptoEventsReducers = (state = initialState, action) => {
  switch (action.type) {
    case actions.CLEAN_REDUCERS:
      return {
        ...state,
        events: [],
        cryptoEvents: [],
      };
    case actions.SET_CRYPTO_PROJECT_EVENTS:
      return {
        ...state,
        cryptoEvents: action.payload,
      };
    case actions.SET_EVENTS:
      return {
        ...state,
        events: action.payload,
      };
    default:
      return state;
  }
};
