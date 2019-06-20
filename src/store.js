import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// import logger from 'redux-logger'

import { userLoggedInAction } from './actions/userActions'
import { getCurrentUser } from './services/UserService'

import rootReducer from './reducers'

const store = createStore(
  rootReducer, 
  composeWithDevTools(
    applyMiddleware(thunk/*, logger*/)
  )
)

store.dispatch(userLoggedInAction(getCurrentUser()))

export default store