// @flow
import React, { Component } from 'react'
import Link from './Link'

type Props = {
  children: React.Element<*>,
  filter: string,
  store: any
}

export default class FilterLink extends Component <
  void, Props, void> {
  componentDidMount () {
    this.unsubscribe = this.props.store.subscribe(() => {
      this.forceUpdate()
    })
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  handleClick = () => {
    this.props.store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter: this.props.filter
    })
  }

  render () {
    const { children, filter, store } = this.props
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
