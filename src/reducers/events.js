import { ACTION_TYPES } from '../actions'

const initialState = {
  events: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.addEvents:
      return {
        ...state,
        events: action.payload.events
      }

    default:
      return state
  }
}

export default reducer
