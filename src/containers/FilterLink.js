import React from 'react';
import { NavLink } from 'react-router-dom';

export default function FilterNavLink({ filter, children }) {
  return (
    <NavLink
      exact
      to={filter === 'all' ? '/' : `/${filter}`}
      className="filter"
      activeClassName="filter__link--active"
    >
      {children}
    </NavLink>
  );
}
