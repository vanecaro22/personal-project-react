import React from 'react';
import styled from 'styled-components';
import PullRequest from '../PullRequest'

const PullRequestList = ({ pullRequests }) => {
  return (
    <ul>
      {pullRequests.map(pr => <PullRequest key={pr.id} data={pr} />)}
    </ul>
  )
}

export default PullRequestList
