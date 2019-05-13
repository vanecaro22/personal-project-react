import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  &&& {
    background-color: #76CCC2;
    color: white;
  }
`;

const Form = styled.form`
  margin-bottom: 50px;
`

const UserForm = ({ setEvents }) => {
  const [ username, setUsername ] = useState('')

  const onChange = (event) => {
    setUsername(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()

    if (!username) { return }

     fetch(`https://api.github.com/users/${username}/events`)
      .then(res => res.json())
      .then(events => {
        setEvents(events || [])
        setUsername('')
      })
      .catch(err => console.error(err))
  }

  return (
    <Form onSubmit={onSubmit}>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Username" value={username} onChange={onChange}/>
        <div class="input-group-append">
          <Button className="btn" type="button">Search</Button>
        </div>
      </div>
    </Form>
  )
}

export default UserForm
