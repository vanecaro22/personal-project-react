import { combineReducers } from 'redux'
import events from './events'
import pullRequests from './pullRequests'

export default combineReducers({
  events,
  pullRequests
})
