import React, { useEffect, useContext, useState} from 'react'
import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid'
// import List from '@material-ui/core/List'
import FriendCard from '../FriendCard'
import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import User from '../../utils/User'
import friendDisplayStyles from './style.js'
import FriendsContext from '../../utils/FriendsContext'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
// import Typography from '@material-ui/core/Typography'
const FriendDisplay = () => {
  const classes = friendDisplayStyles()

  const { friends, hasFriends, updateFriends, status } = useContext(FriendsContext)

  const [removeId, setRemoveId] = useState(null)

  const displayFriends = () => {
      User.getFriends()
        .then(({ data: response}) => {
          console.log(response)
          if (response.length < 1) {
            updateFriends('NONE', [])
          }else{
            updateFriends('FRIENDS', response)
          }
        })
        .catch(error => console.error(error))
  }

  const removeFriend = id => {
    User.removeFriend(id)
      .then(() => {
        setRemoveId(id)
      })
      .catch(e => console.error(e))
  }

  useEffect(() => {
    console.log('ping')
    displayFriends()
  }, [hasFriends, status, removeId])



  //I haz no friends ~ jvo
  if (hasFriends === 'NONE') {
    return (
      <p>No Friends to Display</p>
    )
  }
  else if (hasFriends === 'FRIENDS') {
    return (
      <Paper elevation={3}>
        <div className={classes.root} >
          <Card className={classes.cardWidth}>
            <CardContent className={classes.inviteCard} >
              {friends.map(person =>
                <FriendCard
                  key={'friend-' + person._id}
                  name={`${person.fname} ${person.lname}`}
                  text={`Currently playing at course 1!`}
                  // className={classes.root}
                  initials={`${person.fname.charAt(0).toUpperCase()}${person.lname.charAt(0).toUpperCase()}`}
                  removeFriend={removeFriend}
                >
                  <Button
                    onClick={() => removeFriend(person._id)}
                    variant="outlined"
                    color="secondary"
                    className={`${window.innerWidth < 800 ? classes.buttonStylePhone : null}`}
                  >Remove</Button>
                </FriendCard>
              )}
            </CardContent>
          </Card>
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