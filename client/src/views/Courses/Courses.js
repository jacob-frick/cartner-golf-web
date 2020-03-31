import React from 'react'
import OuterNavBar from '../../components/OuterNavbar'
import CourseInvite from '../../components/CourseInvite'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import coursesStyles from './styles.js'
const Courses = () => {
  const classes = coursesStyles();

  return(
    <OuterNavBar>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Course Invites
        </Typography>
      <CourseInvite />
    </OuterNavBar>
  )
}

export default Courses