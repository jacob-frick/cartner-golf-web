import React, { useEffect, useContext } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import FriendCard from '../FriendCard'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import User from '../../utils/User'
import friendDisplayStyles from './style.js'
import FriendsContext from '../../utils/FriendsContext'
const FriendDisplay = () => {
  const classes = friendDisplayStyles()

  const { friends, hasFriends, updateFriends } = useContext(FriendsContext)

  const displayFriends = () => {
    User.getFriends()
      .then(({ data: friends }) => {
        // console.log(friends)
        if (friends.length < 1) {
          updateFriends('NONE', [])
        } else {
          updateFriends('FRIENDS', friends)
        }
      })
      .catch(error => console.error(error))
  }

  //display friends whenver status is changed
  useEffect(() => {
    displayFriends()
  })

  //display friends when component mounts
  // useEffect( () => {
  //   console.log('ping')
  //   displayFriends()
  // }, [])

  const removeFriend = id => {
    User.removeFriend(id)
      .then(() => {
        displayFriends()
      })
      .catch(e => console.error(e))
  }

  //I haz no friends ~ jvo
  if (hasFriends === 'NONE') {
    return (
      <p>No Friends to Display</p>
    )
  }
  else if (hasFriends === 'FRIENDS') {
    return (
      <Paper
        elevation={3}
      >
        <div>
          <Grid container
            className="muiGridContainer"
            spacing={1}
          >
            <List
              className={classes.listStyle}
            >
              {/* Begin mapping users friends here */}
              {friends.map(person =>
                <FriendCard
                  key={person._id}
                  name={`${person.fname} ${person.lname}`}
                  text={`Currently playing at course 1!`}
                  // className={classes.root}
                  initials={`${person.fname.charAt(0).toUpperCase()}${person.lname.charAt(0).toUpperCase()}`}
                  removeFriend={removeFriend}>
                  {/* <Grid
                    item md={4}
                    xs={12}
                  // className={classes.root}
                  > */}
                  <ButtonGroup size="small">

                    <Button
                      onClick={() => removeFriend(person._id)}
                      variant="outlined"
                      color="secondary"
                      className={classes.removeButton}
                    >Remove</Button>
                  </ButtonGroup>
                  {/* </Grid> */}
                </FriendCard>
              )}
            </List>
          </Grid>
        </div>
      </Paper>
    )
  }
  else {
    return (
      <p></p>
    )
  }
}

export default FriendDisplay