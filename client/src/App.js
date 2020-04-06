import React from 'react'
import Profile from './views/Profile'
import Home from './views/Home'
import Friends from './views/Friends'
import Courses from './views/Courses'
import RoundHistory from './views/RoundHistory'
import SimplePopover from './components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
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
    <SimplePopover/>
  )
}

export default App

