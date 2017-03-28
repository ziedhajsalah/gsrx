// @flow
import React from 'react'

type Props = {
  active: boolean,
  children?: React.Element<*>,
  handleClick(): void,
};

const Link = ({ active, children, handleClick }: Props) => {
  const onClick = e => {
    e.preventDefault()
    handleClick()
  }
  const content = active
    ? <span>{children}</span>
    : <a href='#' onClick={onClick}>{children}</a>

  return content
}

export default Link
