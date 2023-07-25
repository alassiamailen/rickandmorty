import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import  Store  from './Redux/store'
import { Provider } from 'react-redux'


ReactDOM.render(
  <Provider store={Store}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
 
)
