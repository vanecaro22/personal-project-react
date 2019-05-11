import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { fetchEvents } from '../../actions'

const Button = styled.button`
  background-color: teal;
  color: white;
`;

const UserForm = ({ fetchEvents }) => {
  const [ username, setUsername ] = useState('')

  const onChange = (event) => {
    setUsername(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()

    if (!username) { return }

    fetchEvents(username)
  }

  return (
    <form onSubmit={onSubmit}>
      <input placeholder="Username" value={username} onChange={onChange}/>
      <Button>Search</Button>
    </form>
  )
}

const mapDispatchToProps = {
  fetchEvents
}

export default connect(
  null,
  mapDispatchToProps
)(UserForm)
