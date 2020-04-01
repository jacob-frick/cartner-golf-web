import React, { useContext } from 'react'
import Drawer from '@material-ui/core/Drawer'
import clsx from 'clsx'
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PeopleIcon from '@material-ui/icons/People';
import LayersIcon from '@material-ui/icons/Layers';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';
import DrawerContext from '../../utils/DrawerContext'
import drawerStyles from './styles.js'
import {Link} from 'react-router-dom'
import HomeContext from './../../utils/HomeContext'



const DrawerComponent = () => {
  const { setPageLogin } = useContext(HomeContext)


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
          onClick={handleDrawerClose}
          component={Link} to="/Login">
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <Tooltip title='Matches'>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText
              primary="Matches"
              aria-label='Matches' />
          </ListItem>
        </Tooltip>
        <Link to = '/courses' className = {classes.linkStyles}>
        <Tooltip title='Course Invites'>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText
              primary="Course Invites"
              aria-label='Course Invites' />
          </ListItem>
        </Tooltip>
        </Link>
        <Tooltip title='Friends'>
          <ListItem
            button
            primary="Friends"
            aria-label='Friends'
          // component={Link} to="/friends" 
          >
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText />
            {/* BadgeContent value will dispaly pending notifications */}
            <Badge
              badgeContent={1}
              color="secondary"
              className={open ? classes.menuButton : classes.menuButtonHidden}>
            </Badge>
          </ListItem>
        </Tooltip>
        <Tooltip title='Profile'>
          <ListItem
            button
            primary="Profile"
            aria-label='Profile'
            component={Link} to="/profile">
            <ListItemIcon>
              <PersonOutlineIcon />
            </ListItemIcon>
            <ListItemText />
          </ListItem>
        </Tooltip>
        <Tooltip title='Match History'>
          <ListItem
            button
            primary="Match History"
            aria-label='Match History' >
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
            <ListItemText />
          </ListItem>
        </Tooltip>
      </List>
    </Drawer>
  )
}


export default DrawerComponent