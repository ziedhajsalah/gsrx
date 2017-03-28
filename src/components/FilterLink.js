// @flow
import React, { Component } from 'react'
import Link from './Link'
import { setFilter } from '../lib/actions'
import { store } from '../reducers/todos'

type Props = {
  children: React.Element<*>,
  filter: string
}

export default class FilterLink extends Component <
  void, Props, void> {
  componentDidMount () {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate()
    })
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  handleClick = filter => {
    setFilter(this.props.filter)
  }

  render () {
    const { children, filter } = this.props
    const { visibilityFilter } = store.getState()
    return (
      <Link
        active={visibilityFilter === filter}
        handleClick={this.handleClick}
      >
        {children}
      </Link>
    )
  }
}
