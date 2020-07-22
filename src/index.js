import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import postReducer from './reducers/PostReducer'
// import viewCheckboxReducer from './reducers/viewCheckboxReducer'
import App from './App'
import './index.css'

const store = createStore(postReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
