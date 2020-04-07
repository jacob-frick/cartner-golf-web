import React from 'react'
import friendCardStyles from './style.js';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
const FriendCard = props => {
  const classes = friendCardStyles();
  const { name, initials} = props
  return (
    <Grid container spacing={0}>
      <Grid className={classes.icon} item xs={3}>
        <Avatar className={classes.orange}>{initials}</Avatar>
      </Grid>
      <Grid item xs={5}>
        <Typography variant="h6" component='h6'>{name}</Typography>
      </Grid>
      <Grid item xs={4} style={{display:'flex',alignItems:'flex-end' ,justifyContent:'flex-end'}}>
        {/* Buttons here */}
        {props.children}
        {/* Buttons end */}
      </Grid>
    </Grid>
  )
}

export default FriendCard