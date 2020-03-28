import React from 'react'
import Dashboard from './views/Dashboard'
import CreateAccount from './views/CreateAccount'
import Login from './views/Login'
import Profile from './views/Profile'
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
        <Route path="/test">
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

