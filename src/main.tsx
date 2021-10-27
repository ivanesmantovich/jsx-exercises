import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {RoomStore} from "./components/ContextRoom";

ReactDOM.render(
  <React.StrictMode>
      <RoomStore><App/></RoomStore>
  </React.StrictMode>,
  document.getElementById('root')
)
