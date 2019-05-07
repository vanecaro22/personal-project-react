import React from 'react';
import styled from 'styled-components';

const ForkEvent = ({ event }) => {

  return (
    <li>
      <a href={event.payload.forkee.html_url} target="_blank">{event.repo.name}</a>
    </li>
  )
}

export default ForkEvent
