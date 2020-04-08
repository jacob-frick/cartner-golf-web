import React, { useContext, useState } from 'react'
import Drawer from '@material-ui/core/Drawer'
import clsx from 'clsx'
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//import DashboardIcon from '@material-ui/icons/Dashboard';
import EventNoteIcon from '@material-ui/icons/EventNote'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
// import PeopleIcon from '@material-ui/icons/People';
// import LayersIcon from '@material-ui/icons/Layers';
import GroupAddIcon from '@material-ui/icons/GroupAdd'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';
import DrawerContext from '../../utils/DrawerContext'
import drawerStyles from './styles.js'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import HomeIcon from '@material-ui/icons/Home'
import User from '../../utils/User'
//import HomeContext from './../../utils/HomeContext'



const DrawerComponent = () => {
  //const { setPageLogin } = useContext(HomeContext)

  const [requests, setRequests] = useState({
    num_request: 0,
    status: ''
  })


  if (requests.status === '') {
    User.getRecFriendRequests()
      .then(({ data: num_request }) => {
        setRequests({ ...setRequests, num_request: num_request.length, status: 'CHECKED' })
      })
      .catch(e => console.error(e))
  }


  const classes = drawerStyles();
  let { open, handleDrawerClose } = useContext(DrawerContext)

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}>
      <div className={classes.toolbarIcon}>
        <IconButton
          onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <Tooltip title='Home'>
          <ListItem
            button
            component={Link} to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText
              primary="Home"
              aria-label='Home' />
          </ListItem>
        </Tooltip>
        <Tooltip title='Courses'>
          <ListItem button
            component={Link} to="/courses">
            <ListItemIcon>
              <EventNoteIcon />
            </ListItemIcon>
            <ListItemText
              primary="Courses"
              aria-label='Courses' />
          </ListItem>
        </Tooltip>
        <Tooltip title='Friends'>
          <ListItem button
            component={Link} to="/friends">
            <ListItemIcon>
              <GroupAddIcon />
            </ListItemIcon>
            <ListItemText
              primary='Friends'
              aria-label='Friends' />
            {/* BadgeContent value will dispaly pending notifications */}
            <Badge
              badgeContent={requests.num_request}
              color="secondary"
              className={open ? classes.menuButton : classes.menuButtonHidden}>
            </Badge>
          </ListItem>
        </Tooltip>
        <Tooltip title='Round History'>
          <ListItem
            button
            component={Link} to="/roundHistory">
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary="Round History"
              aria-label='Round History' />
          </ListItem>
        </Tooltip>
        {/* <Tooltip title='Profile'>
          <ListItem
            button
            component={Link} to="/profile">
            <ListItemIcon>
              <PersonOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Profile"
              aria-label='Profile' />
          </ListItem>
        </Tooltip> */}
        <Tooltip title='Log Out'>
          <ListItem
            button
            onClick={() => {
              localStorage.removeItem('jwt')
              localStorage.removeItem('rememberMe')
              window.location.reload(false)
            }}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Log Out"
              aria-label='Log Out' />
          </ListItem>
        </Tooltip>
      </List>
    </Drawer>
  )
}


export default DrawerComponent