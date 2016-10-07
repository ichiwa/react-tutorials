import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';

import App from './components/App'
import configureStore from './stores/configureStore'

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById("app-container")
)