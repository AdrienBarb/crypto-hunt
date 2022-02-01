import { createStore, combineReducers, applyMiddleware } from 'redux'
import { usersReducer } from './reducers/usersReducers'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  usersReducer: usersReducer,
})

const middleware = [thunk]

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
