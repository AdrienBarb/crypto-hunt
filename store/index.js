import { createStore, combineReducers, applyMiddleware } from "redux";
import { usersReducers } from "./reducers/usersReducers";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cryptoProjectsReducers } from "./reducers/cryptoProjectsReducers";
import { snackBarsReducers } from "./reducers/snackBarsReducers";
import { cryptoFormReducers } from "./reducers/cryptoFormReducers";
import { nftFormReducers } from "./reducers/nftFormReducers";
import { nftProjectsReducers } from "./reducers/nftProjectsReducers";
import { cryptoEventsReducers } from "./reducers/cryptoEventsReducers";

const rootReducer = combineReducers({
  usersReducers: usersReducers,
  cryptoProjectsReducers: cryptoProjectsReducers,
  nftProjectsReducers: nftProjectsReducers,
  snackBarsReducers: snackBarsReducers,
  cryptoFormReducers: cryptoFormReducers,
  nftFormReducers: nftFormReducers,
  cryptoEventsReducers: cryptoEventsReducers,
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
