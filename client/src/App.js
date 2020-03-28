import React from 'react'
import Dashboard from './views/Dashboard'
import CreateAccount from './views/CreateAccount'
import Profile from './views/Profile'
import Home from './views/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

const App = props => {

  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/signup">
          <CreateAccount />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

