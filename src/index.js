// @flow
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import { store } from './reducers/todos'

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
)
