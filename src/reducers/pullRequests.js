import { ACTION_TYPES } from '../actions'

const initialState = {
  pullRequests: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.addPullRequests:
      return {
        ...state,
        pullRequests: action.payload.pullRequests
      }

    default:
      return state
  }
}

export default reducer
