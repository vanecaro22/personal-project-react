import React from 'react'

export const ACTION_TYPES = {
  addEvents: 'ADD_EVENTS',
  addPullRequests: 'ADD_PRS'
}

const addEvents = (events = []) => ({
  type: ACTION_TYPES.addEvents,
  payload: {
    events: events
  }
})

const addPullRequests = (pullRequests) => ({
  type: ACTION_TYPES.addPullRequests,
  payload: {
    pullRequests: pullRequests
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

export const fetchPullRequests = (prEvents) => (dispatch) => {
  Promise.all(prEvents.map(event => fetch(event.payload.pull_request.issue_url).then(res => res.json())))
    .then(data => {
      const prs = data.map((pr, i) => ({
        ...pr,
        repo_name: prEvents[i].repo.name
      }))

      dispatch(addPullRequests(prs))
    })
}
