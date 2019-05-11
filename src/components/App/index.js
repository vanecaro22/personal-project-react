import React, { useState, useMemo, useEffect } from 'react';
import './App.css';
import UserForm from '../UserForm';
import PullRequestList from '../PullRequestList'
import ForkList from '../ForkList'
import { connect } from 'react-redux'

function App ({ events }) {
  const [ pullRequests, setPullRequests ] = useState([])

  const prEvents = useMemo(
    () => events
      .filter(event => event.type === 'PullRequestEvent' && event.payload.pull_request.state === 'open')
      .sort((a, b) => new Date(b.payload.pull_request.created_at) - new Date(a.payload.pull_request.created_at))
      .slice(0, 4),
    [events]
  )

  useEffect(() => {
    Promise.all(prEvents.map(event => fetch(event.payload.pull_request.issue_url).then(res => res.json())))
      .then(prs => setPullRequests(prs.map((pr, i) => ({
        ...pr,
        repo_name: prEvents[i].repo.name
      }))))
  }, [prEvents])


  return (
    <div className="App">
      <UserForm />

      {pullRequests.length > 0 && <h1>Pull Requests</h1>}
      <PullRequestList pullRequests={pullRequests} />

      <ForkList />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    events: state.events.events
  }
}

export default connect(
  mapStateToProps
)(App)
