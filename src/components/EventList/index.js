import React from 'react';
import styled from 'styled-components';

const EventList = ({ events }) => {

  return (
    <ul>
      {events.map(r =>
        <li key={r.id}>{r.repo.name}</li>
      )}
    </ul>
  )
}

export default EventList
