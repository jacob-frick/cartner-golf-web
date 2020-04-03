import React, {useState} from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import FriendCard from '../FriendCard'
import MenuDropdownStyles from './style.js'
const MenuDropdown = props => {

  const classes = MenuDropdownStyles()
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <div>
      <IconButton color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <Badge badgeContent={1} color="secondary">
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
        <MenuItem>
          <FriendCard
            key={'bob'}
            name={`test test`}
            text={`Has invitied you to play a round at **course name**!`}
            initials={`TT`}
          >
            <Grid item xs={6} className={classes.buttons}>
              <Button variant="outlined" className={classes.accept}>Accept</Button>
            </Grid>
            <Grid item xs={6} className={classes.buttons}>
              <Button variant="outlined" color="secondary">Decline</Button>
            </Grid>
          </FriendCard>
        </MenuItem>
        <MenuItem>
          <FriendCard
            key={'bob'}
            name={`test test`}
            text={`Has invitied you to play a round at **course name**!`}
            initials={`TT`}
          >
            <Grid item xs={6} className={classes.buttons}>
              <Button variant="outlined" className={classes.accept}>Accept</Button>
            </Grid>
            <Grid item xs={6} className={classes.buttons}>
              <Button variant="outlined" color="secondary">Decline</Button>
            </Grid>
          </FriendCard>
        </MenuItem>
        <MenuItem>
          <FriendCard
            key={'bob'}
            name={`test test`}
            text={`Has invitied you to play a round at **course name**!`}
            initials={`TT`}
          >
            <Grid item xs={6} className={classes.buttons}>
              <Button variant="outlined" className={classes.accept}>Accept</Button>
            </Grid>
            <Grid item xs={6} className={classes.buttons}>
              <Button variant="outlined" color="secondary">Decline</Button>
            </Grid>
          </FriendCard>
        </MenuItem>
      </Menu>
    </div>
  )
}

export default MenuDropdown