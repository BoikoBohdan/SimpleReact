import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import AppRouter from './router'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    )
  }
}

export default App
