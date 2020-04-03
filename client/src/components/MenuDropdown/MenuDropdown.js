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
    invites: []
  })
  useEffect( () => {
    console.log('ping')
    User.getPendingRounds()
    .then( ({data: invites}) => {
      if(invites.length < 1){
        setRoundInvites({ ...roundInvites, status: 'NONE' })
      }else{
        setRoundInvites({...roundInvites, invites, status: 'INVITES'})
      }
    })
    .catch(e => console.error(e))
  }, [])

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
                key={invite.course_id}
                course_id = {invite.course_id}
                name={`${invite.owner.fname} ${invite.owner.lname}`}
                text={`Has invitied you to play a round at ${invite.course_id}`}
                initials={`${invite.owner.fname.charAt(0).toUpperCase()}${invite.owner.lname.charAt(0).toUpperCase()}`}
              >
                <Grid item xs={6} className={classes.buttons}>
                  <Button variant="outlined" className={classes.accept}>Accept</Button>
                </Grid>
                <Grid item xs={6} className={classes.buttons}>
                  <Button variant="outlined" color="secondary">Decline</Button>
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
          </Menu>
      </div >
    )
  }
}

export default MenuDropdown