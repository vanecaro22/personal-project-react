import React from 'react';
import styled from 'styled-components';

const PullRequestEvent = ({ event }) => {

  return (
    <li>
      <a href={event.payload.pull_request.html_url} target="_blank">{event.repo.name}</a>
      &nbsp;
      [{event.payload.pull_request.state}]
    </li>
  )
}

export default PullRequestEvent
