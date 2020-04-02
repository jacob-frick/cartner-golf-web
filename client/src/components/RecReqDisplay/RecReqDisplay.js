import React, {useState, useContext, useEffect} from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import FriendCard from '../FriendCard'
import User from '../../utils/User'
import recReqDisplayStyles from './style.js'
import FriendsContext from '../../utils/FriendsContext'
const RecReqDisplay = () => {
  const classes = recReqDisplayStyles()

  const {updateStatus} = useContext(FriendsContext)
  const [recRequest, setRecRequest] = useState({
    hasRequests: '',
    requests: []
  })

  const getFriendRequest = () => {
    User.getRecFriendRequests()
      .then(({ data: requests }) => {
        // console.log(requests)
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
      .then( ({data}) => {
        getFriendRequest()
        updateStatus('ACCEPTED'+id.toString())
      })
      .catch(error => console.error(error))
  }

  useEffect( () => {
    getFriendRequest()
  }, [])


  if(recRequest.hasRequests ==='NONE'){
    return (
      <p>You have no pending friend requests</p>
    )
  }
  else if(recRequest.hasRequests ==='REQUESTS'){
    return (
      <Paper elevation={3}>
        <div className = {classes.root}>
          <Grid container spacing={1}>
            <List className = {classes.listStyle}>
              {/* Begin mapping users friends here */}
              {recRequest.requests.map(person =>
                <FriendCard
                  key={person._id}
                  id = {person._id}
                  name={`${person.fname} ${person.lname}`}
                  course='course 1'
                  type='pending'
                  initials={`${person.fname.charAt(0).toUpperCase()}${person.lname.charAt(0).toUpperCase()}`}
                  acceptRequest = {acceptRequest}
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

export default RecReqDisplay