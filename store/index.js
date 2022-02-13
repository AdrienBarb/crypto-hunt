import { createStore, combineReducers, applyMiddleware } from 'redux'
import { usersReducers } from './reducers/usersReducers'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { cryptoProjectsReducers } from './reducers/cryptoProjectsReducers'
import { snackBarsReducers } from './reducers/snackBarsReducers'

const rootReducer = combineReducers({
  usersReducers: usersReducers,
  cryptoProjectsReducers: cryptoProjectsReducers,
  snackBarsReducers: snackBarsReducers,
})

const middleware = [thunk]

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
