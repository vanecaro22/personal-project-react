import React, { useState, useMemo, useEffect } from 'react';
import UserForm from '../UserForm';
import PullRequestList from '../PullRequestList'
import ForkList from '../ForkList'
import styled from 'styled-components'

const Wrapper = styled.div`
  border: 1px solid #E1E4E8;
  border-radius: 5px;
  max-width: 900px;
  min-height: 700px;
  margin-left: auto;
  margin-right: auto
  margin-top: 60px;
  padding: 40px;
  background-color: white;
`;

function App () {
  return (
    <Wrapper>
      <UserForm />

      <div className="row">
        <div className="col">
          <PullRequestList />
        </div>
        <div className="col">
          <ForkList />
        </div>
      </div>
    </Wrapper>
  );
}

export default App
