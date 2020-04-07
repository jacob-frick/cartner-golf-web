import React from 'react'
import friendCardStyles from './style.js';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { spacing } from '@material-ui/system'
const FriendCard = props => {
  const classes = friendCardStyles();
  const { name, initials} = props
  return (
    <Grid container className={classes.cardMarg}>
      <Grid className={classes.icon} item xs={1}>
        <Avatar className={classes.orange}>{initials}</Avatar>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h6" component='h6'>{name}</Typography>
      </Grid>
      <Grid item xs={5} style={{display:'flex',alignItems:'flex-end' ,justifyContent:'flex-end'}}>
        {/* Buttons here */}
        {props.children}
        {/* Buttons end */}
      </Grid>
    </Grid>
  )
}

export default FriendCard