import React from 'react'
import styled from 'styled-components'

const Li = styled.li`
  & + & {
    margin-top: 15px;
  }
`

const ForkEvent = ({ event }) => {

  return (
    <Li>
      <a href={event.payload.forkee.html_url} target="_blank">{event.repo.name}</a>
    </Li>
  )
}

export default ForkEvent
