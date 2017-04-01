// @flow
import React, { PropTypes } from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter='all'>
      All
    </FilterLink>
    {', '}
    <FilterLink filter='completed'>
      Completed
    </FilterLink>
    {', '}
    <FilterLink filter='active'>
      ACTIVE
    </FilterLink>
  </p>
)

Footer.contextTypes = {
  store: PropTypes.object
}

export default Footer
