import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import FriendCard from '../FriendCard'
import friendDisplayStyles from './style.js'
const FriendDisplay = () => {
  const classes = friendDisplayStyles()

  return (
    <Paper elevation={3}>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <List className = {classes.listStyle}>
            {/* Begin mapping users friends here */}
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
            />
            {/* End mapping users friends here */}
            {/* No Divider at the end */}
          </List>
        </Grid>
      </div>
    </Paper>
  )
}

export default FriendDisplay