import React, { useEffect } from 'react'
import CourseCard from '../../components/CourseCard'
import OuterNavBar from '../../components/OuterNavbar'
import Course from './../../utils/Course'
import { Grid } from '@material-ui/core'
import Protected from './../../components/Protected'
const Courses = () => {
  const [courseData, setCourses] = React.useState({ wasReqed: 'NONE', courses: [] })

  useEffect(() => {
    if (courseData.wasReqed === 'NONE') {
      Course.findAll()
        .then(({ data }) => {
          setCourses({ wasReqed: 'DONE', courses: data })
        })
    }
  })


  return (
    <Protected>
      <OuterNavBar head='Courses'>
        <Grid container spacing={3}>
          {courseData.courses.map((elem, index) => {
            return (
              <Grid item xl={3} lg={4} sm={6} xs={12} key={elem._id.toString()}>
                <CourseCard course={elem} />
              </Grid>
            )
          })}
        </Grid>
      </OuterNavBar>
    </Protected>
  )
}

export default Courses