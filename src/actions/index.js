import React from 'react'

export const ACTION_TYPES = {
  addEvents: 'ADD_EVENTS'
}

const addEvents = (events = []) => ({
  type: ACTION_TYPES.addEvents,
  payload: {
    events: events
  }
})

export const fetchEvents = (username) => (dispatch) => {
  fetch(`https://api.github.com/users/${username}/events`)
   .then(res => res.json())
   .then(events => {
     dispatch(addEvents(events))
   })
   .catch(err => console.error(err))
}
