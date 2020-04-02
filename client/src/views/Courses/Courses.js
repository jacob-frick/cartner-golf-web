import React from 'react'
import CourseInvite from '../../components/CourseInvite'
import Typography from '@material-ui/core/Typography';
import Authorization from './../../utils/Authorization'
import OuterNavBar from '../../components/OuterNavbar'
import { Redirect } from 'react-router-dom';
const Courses = () => {
  const [authStatus, setAuth] = React.useState('NONE')


  if (authStatus === 'NONE') {
    Authorization.auth()
      .then(res => {
        if (res.status === 200) {
          setAuth('AUTH')
        } else {
          setAuth('NO_AUTH')
        }
      })
  }

  if (authStatus === 'AUTH') {
    return (
      <OuterNavBar>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Course Invites
        </Typography>
        <CourseInvite />
      </OuterNavBar>
    )
  } else if (authStatus === 'NO_AUTH') {
    return (<Redirect to='/' />)
  } else {
    return (<p></p>)
  }
}

export default Courses