import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: teal;
  color: white;
`;

const UserForm = () => {
  const [ username, setUsername ] = useState('')

  const onChange = (event) => {
    setUsername(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    console.log('Clicked')
  }

  return (
    <form onSubmit={onSubmit}>
      <input placeholder="Username" value={username} onChange={onChange}/>
      <Button>Search</Button>
    </form>
  )
}

export default UserForm
