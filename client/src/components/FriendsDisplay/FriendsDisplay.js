import React, {useState} from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import FriendCard from '../FriendCard'
import User from '../../utils/User'
import friendDisplayStyles from './style.js'
const FriendDisplay = () => {
  const classes = friendDisplayStyles()
  const [friendState, setFriends] = useState({
    hasRequested: '',
    friends: []
  })

  // Do api call here to get friends
  if (friendState.hasRequested === ''){
    User.getFriends()
      .then(({ data: friends }) => {
        // console.log(friends)
        if (friends.length < 1) {
          setFriends({ ...setFriends, hasRequested: 'NONE' })
        } else {
          setFriends({ ...setFriends, hasRequested: 'FRIENDS', friends })
        }
      })
      .catch(error => console.error(error))
  }
  //no friends
  if (friendState.hasRequested === 'NONE'){
    return (
      <p>No Friends to Display</p>
    )
  }
  else if (friendState.hasRequested === 'FRIENDS'){
    return (
      <Paper elevation={3}>
        <div className={classes.root}>
          <Grid container spacing={1}>
            <List className = {classes.listStyle}>
              {/* Begin mapping users friends here */}
              {friendState.friend.map(person =>
                <FriendCard
                  key={person._id}
                  name={`${person.fname} ${person.lname}`}
                  course='course 1'
                  type='friend'
                  initials={`${person.fname.charAt(0).toUpperCase()}` + `${person.lname.charAt(0).toUpperCase()}`}
                />
              )}
              {/* <FriendCard
                name='richard'
                course='course 1'
                type='friend'
              />
              <FriendCard
                name='jacob'
                course='course 2'
                type='friend'
              />
              <FriendCard
                name='jullian'
                course='course 3'
                type='friend'
              />
              <FriendCard
                name='sulakshana'
                course='course 3'
                type='friend'
              />
              <FriendCard
                name='richard'
                course='course 1'
                type='friend'
              />
              <FriendCard
                name='jacob'
                course='course 2'
                type='friend'
              />
              <FriendCard
                name='jullian'
                course='course 3'
                type='friend'
              />
              <FriendCard
                name='sulakshana'
                course='course 3'
                type='friend'
              /> */}
              {/* End mapping users friends here */}
              {/* No Divider at the end */}
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