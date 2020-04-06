import React, { useEffect, useState } from 'react'
import OuterNavbar from './../../components/OuterNavbar'
import { useParams } from 'react-router-dom'
import Protected from './../../components/Protected'
import Course from './../../utils/Course'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CustomModel from './../../components/CustomModal'
import User from './../../utils/User'
import FriendsCard from './../../components/FriendCard'
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    padding: 0
  },
  media: {
    height: 340,
  },
  addFriendsBtn: {
    maxWidth: 200,
    width: "100%",
  }
}))


const RoundCreation = () => {
  const [courseData, setCourseData] = useState({ course: {}, courseRequested: 'NO' })
  let { id } = useParams()
  const classes = useStyles()
  const [modal, setModal] = React.useState(<></>)
  const [friends, setFriends] = React.useState([])
  const [invited, setInvited] = React.useState([])
  useEffect(() => {
    if (courseData.courseRequested === 'NO') {
      Course.findById(id)
        .then(({ data }) => {
          setCourseData({ course: data, courseRequested: 'YES' })
        })
    }
    User.getFriends()
      .then(({ data }) => {
        setFriends(data)
        console.log(data)
      })
  }, [courseData, id])
  const getFriendsDisplay = () => {
    let content = <h3>No Friends</h3>
    if (friends.length > 0) {
      content = <>
        {friends.map(person => {
          let isInvited = false
          
          return (
            <FriendsCard
              key={person._id}
              name={`${person.fname} ${person.lname}`}
              text={`Currently playing at course 1!`}
              initials={`${person.fname.charAt(0).toUpperCase()}${person.lname.charAt(0).toUpperCase()}`}>
                <Button>Invite</Button>
            </FriendsCard>
          )
        })}
      </>
    }
    return (
      <Card className={classes.media}>
        <CardActionArea>
          <CardContent>
            <Typography variant="h5" component="h2">
              Friends List
            </Typography>
            {content}
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }
  const openModal = () => {
    setModal(
      <CustomModel modalClosed={modalClosed}>
        {getFriendsDisplay()}
      </CustomModel>
    )
  }
  const modalClosed = () => {
    setModal(<></>)
  }
  return (
    <Protected>
      <OuterNavbar>
        <Container color="primary" maxWidth="lg" disableGutters={true}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={`../assets/courseImages/${id}.png`}
                title="Contemplative Reptile" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h3">{courseData.course.name}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="contained" size="medium" color="primary" className={classes.addFriendsBtn} onClick={openModal}>
                Invite Friends
                </Button>
              {modal}
            </CardActions>
          </Card>
        </Container>
      </OuterNavbar>
    </Protected>
  )
}
export default RoundCreation