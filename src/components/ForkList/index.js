import React from 'react';
import styled from 'styled-components';
import ForkEvent from '../ForkEvent'

const ForkList = ({ events }) => {
  return (
    <ul>
      {events.map(event => <ForkEvent key={event.id} event={event}/>)}
    </ul>
  )
}

export default ForkList
