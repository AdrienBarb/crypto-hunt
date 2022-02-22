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
    default:
      return state;
  }
};
