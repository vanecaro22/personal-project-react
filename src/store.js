import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'


export default function () {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}
