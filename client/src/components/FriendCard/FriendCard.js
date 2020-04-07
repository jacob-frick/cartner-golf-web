import React from 'react'
import friendCardStyles from './style.js';
import Avatar from '@material-ui/core/Avatar';
// import ListItem from '@material-ui/core/ListItem'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
// import Button from '@material-ui/core/Button';
// import { spacing } from '@material-ui/system'
const FriendCard = props => {
  const classes = friendCardStyles();
  const { name, course, type, initials, text } = props
  return (

    <Grid container className={classes.cardMarg}>
      <Grid item className={classes.icon}>
        <Avatar className={classes.orange}>{initials}</Avatar>
      </Grid>
      <Grid item>
        <Typography
          variant="h6"
          component='h6'
          className={classes.friendName}
        >{name}
        </Typography>
      </Grid>
      <Grid className={window.innerWidth < 800 ? null : classes.buttonsStyle}>
        {/* Buttons here */}
        {props.children}
        {/* Buttons end */}
      </Grid>
    </Grid >

  )
}

export default FriendCard