// @flow
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './lib/configureStore.js'
import Root from './components/Root'

const store = configureStore()

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
)
