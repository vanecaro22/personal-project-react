import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { addEvents } from '../../actions'

const Button = styled.button`
  background-color: teal;
  color: white;
`;

const UserForm = ({ addEvents }) => {
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
        addEvents(events || [])
      })
      .catch(err => console.error(err))
  }

  return (
    <form onSubmit={onSubmit}>
      <input placeholder="Username" value={username} onChange={onChange}/>
      <Button>Search</Button>
    </form>
  )
}

const mapDispatchToProps = {
  addEvents
}

export default connect(
  null,
  mapDispatchToProps
)(UserForm)
