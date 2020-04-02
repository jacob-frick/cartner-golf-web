import React, {useState, useContext, useEffect} from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import FriendCard from '../FriendCard'
import User from '../../utils/User'
import sentReqDisplayStyles from './style.js'
import FriendsContext from '../../utils/FriendsContext'
const SentReqDisplay = () => {
  const classes = sentReqDisplayStyles()
  // const [sentRequest, setSentRequests] = useState({
  //   hasRequests: '',
  //   requests: []
  // })

  let {sentRequests, statusSent, updateSentRequests, hasRequests} = useContext(FriendsContext)

  const getRequests = () => {
    User.getSentFriendRequests()
      .then(({ data: requests }) => {
        // console.log(requests)
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
    .then( () => {
      getRequests()
    })
    .catch(e => console.error(e))
  }

  useEffect(() => {
    getRequests()
  },[statusSent])


  if(hasRequests === 'NONE'){
    return(
      <p>No sent friend requests to display.</p>
    )
  }
  else if (hasRequests === 'REQUESTS'){
    return (
      <Paper elevation={3}>
        <div className={classes.root}>
          <Grid container spacing={1}>
            <List className={classes.listStyle}>
              {/* Begin mapping users friends here */}
              {sentRequests.map(person => 
                <FriendCard
                  key = {person._id}
                  id = {person._id}
                  name= {`${person.fname} ${person.lname}`}
                  course='course 1'
                  type='sent'
                  initials={`${person.fname.charAt(0).toUpperCase()}${person.lname.charAt(0).toUpperCase()}`}
                  cancelSentRequest={cancelSentRequest}
                />
                )}
            </List>
          </Grid>
          {/* </Container> */}
        </div>
      </Paper>
    )
  }
  else{
    return(
      <p></p>
    )
  }
}

export default SentReqDisplay