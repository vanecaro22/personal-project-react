import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { fetchEvents } from '../../actions'

const Button = styled.button`
  &&& {
    background-color: #76CCC2;
    color: white;
  }
`;

const Form = styled.form`
  margin-bottom: 50px;
`

const UserForm = ({ fetchEvents }) => {
  const [ username, setUsername ] = useState('')

  const onChange = (event) => {
    setUsername(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()

    if (!username) { return }

    fetchEvents(username)
      .then(events => {
        setUsername('')
      })
  }

  return (
    <Form onSubmit={onSubmit}>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Username" value={username} onChange={onChange}/>
        <div class="input-group-append">
          <Button className="btn" type="button">Button</Button>
        </div>
      </div>
    </Form>
  )
}

const mapDispatchToProps = {
  fetchEvents
}

export default connect(
  null,
  mapDispatchToProps
)(UserForm)
