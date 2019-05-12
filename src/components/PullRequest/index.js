import React from 'react';
import styled from 'styled-components';

const PullRequest = ({ data }) => {
  return (
    <li>
      <a href={data.repository_url} target="_blank">{data.repo_name}</a>
      &nbsp;
      [{data.merged? 'merged' : data.state}]
    </li>
  )
}

export default PullRequest
