import React, { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import PullRequest from '../PullRequest'
import { connect } from 'react-redux'
import { fetchPullRequests } from '../../actions'

const PullRequestList = ({ events, pullRequests, fetchPullRequests }) => {

  const prEvents = useMemo(
    () => events
      .filter(event => event.type === 'PullRequestEvent' && event.payload.pull_request.state === 'open')
      .sort((a, b) => new Date(b.payload.pull_request.created_at) - new Date(a.payload.pull_request.created_at))
      .slice(0, 9),
    [events]
  )

  useEffect(() => {
    fetchPullRequests(prEvents)
  }, [prEvents])

  return (
    <>
      {pullRequests.length > 0 && <h2 className="mb-4">Pull Requests</h2>}
      <ul>
        {pullRequests.map(pr => <PullRequest key={pr.id} data={pr} />)}
      </ul>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    events: state.events.events,
    pullRequests: state.pullRequests.pullRequests
  }
}

const mapDispatchToProps = {
  fetchPullRequests
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PullRequestList)
