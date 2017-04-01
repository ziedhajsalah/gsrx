import React from 'react'
import { NavLink } from 'react-router-dom'

const styles = {
  active: {
    textDecoration: 'none',
    color: 'black'
  }
}

export default function FilterNavLink ({filter, children}) {
  return (
    <NavLink exact to={filter === 'all' ? '/' : `/${filter}`}
      activeStyle={styles.active}>
      {children}
    </NavLink>
  )
}
