import React, { useMemo } from 'react';
import styled from 'styled-components';
import ForkEvent from '../ForkEvent'
import { connect } from 'react-redux'

const ForkList = ({ events }) => {
  const forkEvents = useMemo(() => events.filter(event => event.type === 'ForkEvent'), [events])

  return (
    <>
      {forkEvents.length > 0 && <h1>Forked Repos</h1>}
      <ul>
        {forkEvents.map(event => <ForkEvent key={event.id} event={event}/>)}
      </ul>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    events: state.events.events
  }
}

export default connect(
  mapStateToProps
)(ForkList)
