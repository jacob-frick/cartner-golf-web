import React, {useState} from 'react'
import OuterNavBar from '../../components/OuterNavbar'
import CourseInvite from '../../components/CourseInvite'
import Typography from '@material-ui/core/Typography';
import coursesStyles from './styles.js'
import Authorization from './../../utils/Authorization'
import Login from './../Login'
const Courses = () => {
  const [auth, setAuth] = useState({
    isAuth: false,
    page: 'NONE'
  })
  if(!auth.isAuth){
    Authorization.auth()
    .then( res => {
      if(res.status===200){
        setAuth(true)
        setAuth({...auth, page: 'COURSEINVITE'})
      }
      else{
        setAuth({...auth, page: 'LOGIN'})
      }
    })
  }
  const classes = coursesStyles();

  if(auth.page === 'COURSEINVITE'){
    return(
      <OuterNavBar>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Course Invites
          </Typography>
        <CourseInvite />
      </OuterNavBar>
    )
  }
  else if(auth.page==='LOGIN'){
    return(
      <Login />
    )
  }
  else{
    return(
      <p></p>
    )
  }
}

export default Courses