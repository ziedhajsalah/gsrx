import React from 'react'
import FilterLink from './FilterLink'

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter='SHOW_ALL'>
      All
    </FilterLink>
    {' '}
    <FilterLink filter='SHOW_COMPLETED'>
      Completed
    </FilterLink>
    {' '}
    <FilterLink filter='SHOW_ACTIVE'>
      ACTIVE
    </FilterLink>
  </p>
)

export default Footer
