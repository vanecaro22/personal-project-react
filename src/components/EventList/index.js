import React from 'react';
import styled from 'styled-components';
import PullRequestEvent from '../PullRequestEvent'
import ForkEvent from '../ForkEvent'

const EventList = ({ events }) => {

  return (
    <ul>
      {events.map(event => {
        if (event.type === 'PullRequestEvent') {
          return <PullRequestEvent key={event.id} event={event}/>
        }

        if (event.type === 'ForkEvent') {
          return <ForkEvent key={event.id} event={event}/>
        }

        return null
      }
      )}
    </ul>
  )
}

export default EventList
