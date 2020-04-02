import React, {useEffect, useContext} from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import FriendCard from '../FriendCard'
import User from '../../utils/User'
import friendDisplayStyles from './style.js'
import FriendsContext from '../../utils/FriendsContext'
const FriendDisplay = () => {
  const classes = friendDisplayStyles()

  const {friends, hasFriends, updateFriends, status} = useContext(FriendsContext)

  // Do api call here to get friends
  useEffect( () => {
    User.getFriends()
      .then(({ data: friends }) => {
        // console.log(friends)
        if (friends.length < 1) {
          updateFriends('NONE', [])
        } else {
          updateFriends('FRIENDS', friends )
        }
      })
      .catch(error => console.error(error))
  }, [status])
  //no friends
  if (hasFriends === 'NONE'){
    return (
      <p>No Friends to Display</p>
    )
  }
  else if (hasFriends === 'FRIENDS'){
    return (
      <Paper elevation={3}>
        <div className={classes.root}>
          <Grid container spacing={1}>
            <List className = {classes.listStyle}>
              {/* Begin mapping users friends here */}
              {friends.map(person =>
                <FriendCard
                  key={person._id}
                  name={`${person.fname} ${person.lname}`}
                  course='course 1'
                  type='friend'
                  initials={`${person.fname.charAt(0).toUpperCase()}${person.lname.charAt(0).toUpperCase()}`}
                />
              )}
            </List>
          </Grid>
        </div>
      </Paper>
    )
  }
  else{
    return (
      <p></p>
    )
  }
}

export default FriendDisplay