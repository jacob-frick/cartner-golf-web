import React, { useEffect, useState } from 'react'
import OuterNavbar from './../../components/OuterNavbar'
import { useParams } from 'react-router-dom'
import Protected from './../../components/Protected'
import Course from './../../utils/Course'
const RoundCreation = () => {
    const [courseData, setCourseData] = useState({course: {}, courseRequested: 'NO'})
    let { id } = useParams()

    useEffect(() => {
        if(courseData.courseRequested==='NO') {
            Course.findById(id)
            .then(({data}) =>{
                setCourseData({course: data, courseRequested: 'YES'})
            })
        }
    }, [])
    const getCourseRendered = () => {
        if( courseData.courseRequested === 'NO') {
            return (<></>)
        } else if (courseData.course.message) {
            return(<h1>{courseData.course.message}</h1>)
        } else {
            return(<h1>{courseData.course.name}</h1>)
        }
    }
    return (
        <Protected>
            <OuterNavbar>
                {getCourseRendered()}
            </OuterNavbar>
        </Protected>
    )
}
export default RoundCreation
