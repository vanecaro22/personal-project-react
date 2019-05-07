import React, { useState, useMemo } from 'react';
import './App.css';
import UserForm from '../UserForm';
import EventList from '../EventList'

const filterByType = (type, events) => {
  return events.filter(event => event.type === type)
}

function App() {
  const [ events, setEvents ] = useState([])

  const pullRequests = useMemo(() => filterByType('PullRequestEvent', events), [events])
  const forkedRepos = useMemo(() => filterByType('ForkEvent', events), [events])

  return (
    <div className="App">
      <UserForm setEvents={setEvents} />
      {pullRequests.length > 0 && <h1>Pull Requests</h1>}
      <EventList events={pullRequests} />
      {forkedRepos.length > 0 && <h1>Forked Repos</h1>}
      <EventList events={forkedRepos} />
    </div>
  );
}

export default App;
