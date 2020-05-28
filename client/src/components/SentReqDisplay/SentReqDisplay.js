import React, { useContext, useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid'
// import List from '@material-ui/core/List'
import FriendCard from '../FriendCard'
import Button from '@material-ui/core/Button';
import User from '../../utils/User'
import sentReqDisplayStyles from './style.js'
import FriendsContext from '../../utils/FriendsContext'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
const SentReqDisplay = () => {
  const classes = sentReqDisplayStyles()
  // const [sentRequest, setSentRequests] = useState({
  //   hasRequests: '',
  //   requests: []
  // })

  let { sentRequests, updateSentRequests, hasRequests, statusSent} = useContext(FriendsContext)

  const [cancelRequestId, setCancelRequestId] = useState(null)

  const getRequests = () => {
    User.getSentFriendRequests()
      .then(({ data: requests }) => {
        console.log('requests')
        console.log(requests)
        if (requests.length < 1) {
          updateSentRequests('NONE', [])
        } else {
          updateSentRequests('REQUESTS', requests)
        }
      })
      .catch(error => console.error(error))
  }

  const cancelSentRequest = id => {
    User.cancelRequest(id)
      .then(() => {
        setCancelRequestId(id)
      })
      .catch(e => console.error(e))
  }

 useEffect(()=> {
    console.log('ping')
    getRequests()
 }, [cancelRequestId, statusSent, hasRequests])

  if (hasRequests === 'NONE') {
    return (
      <p>No sent friend requests to display.</p>
    )
  }
  else if (hasRequests === 'REQUESTS') {
    return (
      <Paper elevation={3}>
        <div className={classes.root} >
          <Card className={classes.cardWidth}>
            <CardContent className={classes.inviteCard} >
              {sentRequests.map(person =>
                <FriendCard
                  key={'sent-'+ person._id}
                  name={`${person.fname} ${person.lname}`}
                  text={`Pending acceptance.`}
                  initials={`${person.fname.charAt(0).toUpperCase()}${person.lname.charAt(0).toUpperCase()}`}
                  cancelSentRequest={cancelSentRequest}
                >
                  <Button onClick={() => cancelSentRequest(person._id)} variant="outlined" color="secondary" className = {window.innerWidth < 800 ? classes.buttonStylePhone : null}>Cancel</Button>
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

export default SentReqDisplay