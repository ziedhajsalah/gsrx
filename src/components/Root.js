import React from 'react'
import App from './App'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'

export default function Root ({store}) {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/:filter?' component={App} />
      </Router>
    </Provider>
  )
}
