import React, {useState, useEffect} from 'react'
import CourseInvite from '../../components/CourseInvite'
import Typography from '@material-ui/core/Typography';
import Authorization from './../../utils/Authorization'
import Login from './../Login'
import OuterNavBar from '../../components/OuterNavbar'
import {Redirect} from 'react-router-dom'
const Courses = () => {
  const [auth, setAuth] = useState({
    isAuth: false,
    current: 'NONE'
  })

  useEffect(() => {
    if (!auth.isAuth) {
      Authorization.auth()
        .then(res => {
          if (res.status === 200) {
            setAuth(true)
            setAuth({ ...auth, current: 'COURSEINVITE' })
          }
          else {
            setAuth({ ...auth, current: 'LOGIN' })
          }
        })
    }
  }, [])


  if(auth.current === 'COURSEINVITE'){
    return(
      <OuterNavBar>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Course Invites
        </Typography>
        <CourseInvite />
      </OuterNavBar>
    )
  }
  else if(auth.current==='LOGIN'){
    return(
      <Redirect to = '/' />
    )
  }
  else{
    return(
      <p></p>
    )
  }
}

export default Courses