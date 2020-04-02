import React, {useState} from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import FriendCard from '../FriendCard'
import User from '../../utils/User'
import sentReqDisplayStyles from './style.js'
const SentReqDisplay = () => {
  const classes = sentReqDisplayStyles()
  const [sentRequest, setSentRequests] = useState({
    hasRequests: '',
    requests: []
  })

  if(sentRequest.hasRequests === ''){
    User.getSentFriendRequests()
    .then( ({data: requests}) => {
      // console.log(requests)
      if(requests.length < 1){
        setSentRequests({...sentRequest, hasRequests: 'NONE'})
      }else{
        setSentRequests({...sentRequest, hasRequests: 'REQUESTS', requests})
      }
    })
    .catch(error => console.error(error))
  }

  if(sentRequest.hasRequests === 'NONE'){
    return(
      <p>No sent friend requests to display.</p>
    )
  }
  else if (sentRequest.hasRequests === 'REQUESTS'){
    return (
      <Paper elevation={3}>
        <div className={classes.root}>
          <Grid container spacing={1}>
            <List className={classes.listStyle}>
              {/* Begin mapping users friends here */}
              {sentRequest.requests.map(person => 
                <FriendCard
                  key = {person._id}
                  name= {`${person.fname} ${person.lname}`}
                  course='course 1'
                  type='sent'
                  initials={`${person.fname.charAt(0).toUpperCase()}${person.lname.charAt(0).toUpperCase()}`}
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