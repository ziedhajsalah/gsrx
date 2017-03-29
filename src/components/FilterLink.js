// @flow
import React, { Component, PropTypes } from 'react'
import Link from './Link'

type Props = {
  children: React.Element<*>,
  filter: string,
  store: any
}

export default class FilterLink extends Component <
  void, Props, void> {
  unsubscribe: () => any

  static contextTypes = {
    store: PropTypes.object
  }
  componentDidMount () {
    this.unsubscribe = this.context.store.subscribe(() => {
      this.forceUpdate()
    })
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  handleClick = () => {
    this.context.store.dispatch({
      type: 'SET_VISIBILITY_FILTER',
      filter: this.props.filter
    })
  }

  render () {
    const { children, filter } = this.props
    const { store } = this.context
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
