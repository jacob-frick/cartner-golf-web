import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import FriendCard from '../FriendCard'
import sentReqDisplayStyles from './style.js'
const SentReqDisplay = () => {
  const classes = sentReqDisplayStyles()

  return (
    <Paper elevation={3}>
      <div className={classes.root}>
        <Grid container spacing={40}>
          <List className={classes.listStyle}>
            {/* Begin mapping users friends here */}
            <FriendCard
              name='richard'
              course='course 1'
              type='sent'
            />
            <FriendCard
              name='jacob'
              course='course 2'
              type='sent'
            />
            <FriendCard
              name='jullian'
              course='course 3'
              type='sent'
            />
            <FriendCard
              name='sulakshana'
              course='course 3'
              type='sent'
            />
            {/* End mapping users friends here */}
            {/* No Divider at the end */}
          </List>
        </Grid>
        {/* </Container> */}
      </div>
    </Paper>
  )
}

export default SentReqDisplay