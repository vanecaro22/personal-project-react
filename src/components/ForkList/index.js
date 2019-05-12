import React from 'react'
import styled from 'styled-components'
import ForkEvent from '../ForkEvent'

const Ul = styled.ul`
  padding: 0;
  list-style: none;
`

const ForkList = ({ events }) => {
  return (
    <Ul>
      {events.map(event => <ForkEvent key={event.id} event={event}/>)}
    </Ul>
  )
}

export default ForkList
