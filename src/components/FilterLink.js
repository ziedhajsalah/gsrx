// @flow
import React, { Component } from 'react'
import Link from './Link'
import { setFilter } from '../lib/actions'
import { store } from '../reducers/todos'

type DefaultProps = {}

type Props = {
  children: React.Element<*>,
  filter: string
}

type State = {}

export default class FilterLink extends Component<
  DefaultProps, Props, State
> {
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
    const state = store.getState()
    return (
      <Link
        active={state.visibilityFilter === filter}
        handleClick={this.handleClick}
      >
        {children}
      </Link>
    )
  }
}
