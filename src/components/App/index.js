import React, { useState, useMemo, useEffect } from 'react';
import UserForm from '../UserForm';
import PullRequestList from '../PullRequestList'
import ForkList from '../ForkList'
import styled from 'styled-components'

const Wrapper = styled.div`
  border: 1px solid #E1E4E8;
  border-radius: 5px;
  max-width: 900px;
  min-height: 700px;
  margin-left: auto;
  margin-right: auto
  margin-top: 60px;
  padding: 40px;
  background-color: white;
`;

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
    <Wrapper>
      <UserForm setEvents={setEvents} />

      {pullRequests.length > 0 && <h1>Pull Requests</h1>}
      <PullRequestList pullRequests={pullRequests} />

      {forkEvents.length > 0 && <h1>Forked Repos</h1>}
      <ForkList events={forkEvents} />
    </Wrapper>
  );
}

export default App;
