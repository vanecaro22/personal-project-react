import React from 'react'

export const ACTION_TYPES = {
  addEvents: 'ADD_EVENTS'
}

export const addEvents = (events) => {
  return {
    type: ACTION_TYPES.addEvents,
    payload: {
      events
    }
  }
}
