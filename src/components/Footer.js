// @flow
import React, { PropTypes } from 'react'
import FilterLink from '../containers/FilterLink'

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

Footer.contextTypes = {
  store: PropTypes.object
}

export default Footer
