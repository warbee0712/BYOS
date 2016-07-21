import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render () {
    return <h1>Testing production build!</h1>
  }
}

render(<App />, document.getElementById('app'))

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
import { install } from 'offline-plugin/runtime';
install();
