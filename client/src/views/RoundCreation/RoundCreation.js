import React, { useEffect, useState } from 'react'
import OuterNavbar from './../../components/OuterNavbar'
import { useParams, Redirect } from 'react-router-dom'
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
import Grid from '@material-ui/core/Grid'
import CustomModel from './../../components/CustomModal'
import User from './../../utils/User'
import FriendsCard from './../../components/FriendCard'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Round from './../../utils/Round'
const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0
  },
  cardWidth: {
    maxWidth: 600,
    width: "100%"
  },
  media: {
    height: 340,
  },
  addFriendsBtn: {
    maxWidth: 200,
    width: "100%"
  },
  inviteCard: {
    margin: "5px",
    maxWidth: 600,
    width: "100%"
  },
  buttonPadding: {
    padding: '8px'
  },
  buttonStylePhone: {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}))


const RoundCreation = () => {
  const [courseData, setCourseData] = useState({ course: {}, courseRequested: 'NO' })
  let { id } = useParams()
  const classes = useStyles()
  const [modal, setModal] = React.useState(<></>)
  const [friends, setFriends] = React.useState([])
  const [invited, setInvited] = React.useState([])
  const [radioValue, setRadioValue] = React.useState('Blues')
  const [createdData, setCreated] = React.useState({ created: false, id: '' })
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
      })
  }, [courseData, id])

  const getFriendsDisplay = () => {
    let content = <h3>No Friends</h3>
    if (friends.length > 0) {
      content = <>
        {friends.map((person, index) => {
          let isInvited = false
          invited.forEach(elem => {
            if (elem === person._id) isInvited = true
          })
          return (
            <FriendsCard
              key={person._id}
              name={`${person.fname} ${person.lname}`}
              initials={`${person.fname.charAt(0).toUpperCase()}${person.lname.charAt(0).toUpperCase()}`}>
              <Button
                variant="contained"
                color="primary"
                className={window.innerWidth < 800 ? classes.buttonStylePhone : null}
                onClick={(event) => {
                  event.currentTarget.className += " Mui-disabled"
                  setInvited(prev => [...prev, person._id])
                }}
                id={index}
                disabled={isInvited}
              >Invite</Button>
              <br />
            </FriendsCard>
          )
        })}
      </>
    }
    return (
      <Card className={classes.cardWidth}>
        <CardContent className={classes.inviteCard} >
          <Typography variant="h5" component="h2" m={100}>
            Friends List
            </Typography>
          {content}
        </CardContent>
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
  const handleChange = (event) => {
    setRadioValue(event.target.value)
  }
  const didTapCreate = () => {
    Round.createRound({
      pending_members: invited,
      course_id: id,
      teebox: radioValue.toLocaleLowerCase()
    }).then(({ data }) => {
      setCreated({ created: true, id: data.roundId })
    })
  }
  if (createdData.created) {
    return (<Redirect to={`/scorecard/${createdData.id}`} />)
  } else {
    return (
      <Protected>
        <OuterNavbar head="Round Creation">
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
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Tee Box:</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={radioValue} onChange={handleChange}>
                      <FormControlLabel value="Blues" control={<Radio />} label="Blues" />
                      <FormControlLabel value="Whites" control={<Radio />} label="Whites" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <CardActions>
                    <Button variant="contained" size="medium" color="primary" className={classes.addFriendsBtn} onClick={openModal}>
                      Invite Friends
                    </Button>
                    {modal}
                  </CardActions>
                </Grid>
                <Grid item xs={12}>
                  <div className={classes.buttonPadding}>
                    <Button variant="contained" size="medium" color="primary" className={classes.addFriendsBtn} onClick={didTapCreate}>
                      Create Round
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Card>
          </Container>
        </OuterNavbar>
      </Protected>
    )
  }
}
export default RoundCreation