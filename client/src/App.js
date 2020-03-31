import React from 'react'
import Profile from './views/Profile'
import Home from './views/Home'
import Friends from './views/Friends'
import Courses from './views/Courses'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

const App = props => {

  //potential for rememberme
  // useEffect(() => {
  //   window.addEventListener("beforeunload", (ev) => {
  //     ev.preventDefault()
  //     if(localStorage.getItem('jwt'))
  //   })
  // })

  return (
    <Router>
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/friends">
          <Friends />
        </Route>
        <Route path="/courses">
          <Courses />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

