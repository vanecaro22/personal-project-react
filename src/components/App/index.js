import React, { useState, useMemo, useEffect } from 'react';
import './App.css';
import UserForm from '../UserForm';
import PullRequestList from '../PullRequestList'
import ForkList from '../ForkList'

function App () {
  return (
    <div className="App">
      <UserForm />

      <PullRequestList />

      <ForkList />
    </div>
  );
}

export default App
