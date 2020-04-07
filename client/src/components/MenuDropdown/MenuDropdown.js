import React, {useState, useEffect} from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import FriendCard from '../FriendCard'
import MenuDropdownStyles from './style.js'
import User from '../../utils/User'
const MenuDropdown = props => {

  const classes = MenuDropdownStyles()
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const [roundInvites, setRoundInvites] = useState({
    status: '',
    invites: [],
    currentRound: ''
  })
  const getInvites = () => {
    User.getPendingRounds()
      .then(({ data: invites }) => {
        if (invites.pending_round_invites.length < 1) {
          setRoundInvites({ ...roundInvites, currentRound: invites.active_round, status: 'NONE' })
        } else {
          setRoundInvites({ ...roundInvites, invites: invites.pending_round_invites, currentRound: invites.active_round, status: 'INVITES' })
        }
      })
      .catch(e => console.error(e))
  }
  useEffect( () => {
    getInvites()
  }, [])

  const acceptInvite = id => {
    User.acceptRoundInvite(id)
    .then( () => {
      getInvites()
    })
    .catch( e => console.error(e))
  }

  const declineInvite = id => {
    User.declineRoundInvite(id)
    .then( () => {
      getInvites()
    })
    .catch(e => console.error(e))
  }
  if(roundInvites.status === 'NONE'){
    return(
      <div>
        <IconButton color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <Badge badgeContent={0} color="secondary">
            {/* BadgeContent value will dispaly pending notifications */}
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>No Pending Round Invites</MenuItem>
        </Menu>
      </div>
    )
  }
  else if (roundInvites.status === 'INVITES') {
    return (
      <div>
        <IconButton color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <Badge badgeContent={roundInvites.invites.length} color="secondary">
            {/* BadgeContent value will dispaly pending notifications */}
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {/* Begin Mapping here */}
          {roundInvites.invites.map(invite => 
            <MenuItem>
              <FriendCard
                key={invite._id}
                round_id = {invite._id}
                course_id = {invite.course_id}
                name={`${invite.owner.fname} ${invite.owner.lname}`}
                text={roundInvites.currentRound ? `Has invitied you to play a round at ${invite.course_id}. To accept, please finish your current round` : `Has invitied you to play a round at ${invite.course_id}` }
                initials={`${invite.owner.fname.charAt(0).toUpperCase()}${invite.owner.lname.charAt(0).toUpperCase()}`}
              >
                <Grid item xs={6} className={classes.buttons}>
                  <Button onClick = {() => acceptInvite(invite._id)}variant="outlined" disabled = {roundInvites.currentRound ? true : false} className={classes.accept}>Accept</Button>
                </Grid>
                <Grid item xs={6} className={classes.buttons}>
                  <Button onClick = {() => declineInvite(invite._id)} variant="outlined" color="secondary">Decline</Button>
                </Grid>
              </FriendCard>
            </MenuItem>
          )}
        </Menu>
      </div>
    )
  }
  else{
    return (
      <p></p>
    )
  }
}

export default MenuDropdown