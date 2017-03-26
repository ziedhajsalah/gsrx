import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import { store } from './reducers/todos'

function render () {
  ReactDOM.render(
    <App {...store.getState()} />,
    document.getElementById('root')
  )
}

store.subscribe(render)
render()
