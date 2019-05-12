import React, { useState, useMemo, useEffect } from 'react';
import './App.css';
import UserForm from '../UserForm';
import PullRequestList from '../PullRequestList'
import ForkList from '../ForkList'

const filterByType = (type, events) => {
  return events.filter(event => event.type === type)
}

function App() {
  const [ events, setEvents ] = useState([])
  const [ pullRequests, setPullRequests ] = useState([])

  const prEvents = useMemo(
    () => events
      .filter(event => event.type === 'PullRequestEvent' && event.payload.pull_request.state === 'open')
      .sort((a, b) => new Date(b.payload.pull_request.created_at) - new Date(a.payload.pull_request.created_at))
      .slice(0, 4),
    [events]
  )

  useEffect(() => {
    Promise.all(prEvents.map(event => fetch(event.payload.pull_request.url).then(res => res.json())))
      .then(prs => setPullRequests(prs.map((pr, i) => ({
        ...pr,
        repo_name: prEvents[i].repo.name
      }))))
  }, [prEvents])

  const forkEvents = useMemo(() => filterByType('ForkEvent', events), [events])

  return (
    <div className="App">
      <UserForm setEvents={setEvents} />

      {pullRequests.length > 0 && <h1>Pull Requests</h1>}
      <PullRequestList pullRequests={pullRequests} />

      {forkEvents.length > 0 && <h1>Forked Repos</h1>}
      <ForkList events={forkEvents} />
    </div>
  );
}

export default App;
