import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './Auth/Login'
import Register from './Auth/Register'
import Nav from './Nav'
import Lobby from './Lobby/Lobby'
import Game from './Game/Game'
import Waiting from './Game/Waiting'



const App = () => (
  <Router>
    <div className='app-container has-text-centered'>
      <Route path="/" component={Nav} />
      <Route path="/login" component={Login} />
      <Route path="/Register" component={Register} />
      <Route path="/lobby" component={Lobby} />
      <Route exact path="/game/:id" component={Game} />
      <Route exact path="/waiting/:id" component={Waiting} />
    </div>
  </Router>
)

export default App
