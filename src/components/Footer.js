// @flow
import React, { PropTypes } from 'react';
import FilterLink from '../containers/FilterLink';

const Footer = () =>
  <fieldset className="filters">
    <span className="filters__title">Show:</span>
    <FilterLink filter="all">All</FilterLink>
    <FilterLink filter="completed">Completed</FilterLink>
    <FilterLink filter="active">ACTIVE</FilterLink>
  </fieldset>;

Footer.contextTypes = {
  store: PropTypes.object,
};

export default Footer;
