import React from 'react'
import friendCardStyles from './style.js';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
const FriendCard = props => {
  const classes = friendCardStyles();
  const {name, course, type, initials, text} = props
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
                <Typography variant="subtitle2">{text}</Typography>
              </Grid>
              {/* Buttons here */}
              {props.children}
              {/* Buttons end */}
            </Grid>
          </div>
        </Grid>
      </ListItem>
    )
}

export default FriendCard