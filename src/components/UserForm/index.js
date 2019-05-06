import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: teal;
  color: white;
`;

const UserForm = () => {
  const [ username, setUsername ] = useState('')
  const [ events, setEvents] = useState([])

  const onChange = (event) => {
    setUsername(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()

    if (!username) { return }

     fetch(`https://api.github.com/users/${username}/events`)
      .then(res => res.json())
      .then(events => {
        setEvents(events)
      })
      .catch(err => console.error(err))
  }

  return (
    <form onSubmit={onSubmit}>
      <input placeholder="Username" value={username} onChange={onChange}/>
      <Button>Search</Button>

      <ul>
        {events.map(r =>
          <li key={r.id}>{r.repo.name}</li>
        )}
      </ul>
    </form>
  )
}

export default UserForm
