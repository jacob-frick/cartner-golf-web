import React from 'react'
import friendCardStyles from './style.js';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
const FriendCard = props => {
  const classes = friendCardStyles();
  const {name, course, type, initials, id} = props
  if(type==='friend'){
    return (
      <ListItem>
        <Grid item xs={12}>
          <div className={classes.root}>
            <Grid container spacing={1}>
              <Grid className={classes.icon} item xs={2}>
                <Avatar className={classes.orange}>{initials}</Avatar>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" component='h6'>{name}</Typography>
                <Typography variant="subtitle2">Currently playing a round at {course}</Typography>
              </Grid>
              <Grid item md={4} xs={12} className={classes.buttons}>
                <Button onClick = {() => props.removeFriend(id)}variant="outlined" color="secondary">Remove</Button>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </ListItem>
    )
  }
  else if(type==='pending'){
    return (
      <ListItem>
        <Grid item xs={12}>
          <div className = {classes.root}>
            <Grid container spacing={1}>
              <Grid className={classes.icon} item xs={2}>
                <Avatar className={classes.orange}>{initials}</Avatar>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" component='h6'>{name}</Typography>
                <Typography variant="subtitle2">Would like to be your friend!</Typography>
              </Grid>
              <Grid item md = {2} xs={6} className={classes.buttons}>
                <Button onClick = {() => props.acceptRequest(id)} variant="outlined" className={classes.accept}>Accept</Button>
              </Grid>
              <Grid item md = {2} xs={6} className={classes.buttons}>
                <Button onClick = {() => props.declineRequest(id)}variant="outlined" color="secondary">Decline</Button>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </ListItem>
    )
  }
  else if(type==='sent'){
    return(
      <ListItem>
        <Grid item xs={12}>
          <div className={classes.root}>
            <Grid container spacing={1}>
              <Grid className={classes.icon} item xs={2}>
                <Avatar className={classes.orange}>{initials}</Avatar>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" component='h6'>{name}</Typography>
                <Typography variant="subtitle2">Currently playing a round at {course}</Typography>
              </Grid>
              <Grid item md={4} xs={12} className={classes.buttons}>
                <Button onClick = {() => props.cancelSentRequest(id)}variant="outlined" color="secondary">Cancel</Button>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </ListItem>
    )
  } 
  else {
    return(
      <p>Error</p>
    )
  }
}

export default FriendCard