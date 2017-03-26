import React from 'react'

const Link = ({active, children, handleClick}) => {
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
