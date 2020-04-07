import React, { useState, useContext, useEffect } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import FriendCard from '../FriendCard'
import User from '../../utils/User'
import recReqDisplayStyles from './style.js'
import FriendsContext from '../../utils/FriendsContext'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
const RecReqDisplay = () => {
  const classes = recReqDisplayStyles()

  const { updateStatus } = useContext(FriendsContext)
  const [recRequest, setRecRequest] = useState({
    hasRequests: '',
    requests: []
  })

  const getFriendRequest = () => {
    User.getRecFriendRequests()
      .then(({ data: requests }) => {
        if (requests.length < 1) {
          setRecRequest({ ...recRequest, hasRequests: 'NONE' })
        } else {
          setRecRequest({ ...recRequest, hasRequests: 'REQUESTS', requests })
        }
      })
      .catch(error => console.error(error))
  }

  const acceptRequest = id => {
    User.acceptRequest(id)
      .then(({ data }) => {
        getFriendRequest()
        updateStatus('ACCEPTED' + id.toString())
      })
      .catch(error => console.error(error))
  }
  const declineRequest = id => {
    User.declineRequest(id)
      .then(() => {
        getFriendRequest()
      })
      .catch(e => console.error(e))
  }
  useEffect(() => {
    getFriendRequest()
  }, [])


  if (recRequest.hasRequests === 'NONE') {
    return (
      <p>You have no pending friend requests</p>
    )
  }
  else if (recRequest.hasRequests === 'REQUESTS') {
    return (
      <Paper elevation={3}>
        <div className={classes.root}>
          <Card className={classes.cardWidth}>
            <CardContent className={classes.inviteCard} >
              {recRequest.requests.map(person =>
                <FriendCard
                  key={person._id}
                  name={`${person.fname} ${person.lname}`}
                  text={`Woudld like to be your friend!`}
                  initials={`${person.fname.charAt(0).toUpperCase()}${person.lname.charAt(0).toUpperCase()}`}
                  acceptRequest={acceptRequest}
                  declineRequest={declineRequest}
                >
                  <Grid>
                    <Button
                      onClick={() => acceptRequest(person._id)}
                      variant="outlined"
                      className={classes.accept}
                    >Accept
                    </Button>
                    <Button
                      onClick={() => declineRequest(person._id)}
                      variant="outlined"
                      color="secondary"
                    >Decline
                    </Button>
                  </Grid>
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

export default RecReqDisplay