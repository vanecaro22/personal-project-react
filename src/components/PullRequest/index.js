import React from 'react'
import styled from 'styled-components'
import cx from 'classnames'

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  & + & {
    margin-top: 15px;
  }
`

const Badge = styled.span`
  &&& {
    line-height: unset;
  }
`

const PullRequest = ({ data }) => {
  return (
    <Li>
      <a href={data.html_url} target="_blank">{data.title}</a>
      <Badge className={cx('badge badge-pill', {
          'badge-primary': data.merged,
          'badge-danger': data.state === 'closed' && !data.merged,
          'badge-success': data.state === 'open'
      })}>{data.merged ? 'merged' : data.state}</Badge>
    </Li>
  )
}

export default PullRequest
