import React from 'react'
import styled from 'styled-components'
import PullRequest from '../PullRequest'

const Ul = styled.ul`
  padding: 0;
  list-style: none;
`

const PullRequestList = ({ pullRequests }) => {
  return (
    <Ul>
      {pullRequests.map(pr => <PullRequest key={pr.id} data={pr} />)}
    </Ul>
  )
}

export default PullRequestList
