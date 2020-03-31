import React, { useContext } from 'react'
import Drawer from '@material-ui/core/Drawer'
import clsx from 'clsx'
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';
import DrawerContext from '../../utils/DrawerContext'
import drawerStyles from './styles.js'
import {Link} from 'react-router-dom'

const DrawerComponent = () => {
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
        <IconButton onClick={handleDrawerClose}>
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
        <Tooltip title='Courses'>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText
              primary="Courses"
              aria-label='Courses' />
          </ListItem>
        </Tooltip>
        </Link>
        <Tooltip title='Friends'>
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText
              primary="Friends"
              aria-label='Friends' />
            {/* BadgeContent value will dispaly pending notifications */}
            <Badge
              badgeContent={1}
              color="secondary"
              className={open ? classes.menuButton : classes.menuButtonHidden}>
            </Badge>
          </ListItem>
        </Tooltip>
        <Tooltip title='Account'>
          <ListItem button>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText
              primary="Account"
              aria-label='Account' />
          </ListItem>
        </Tooltip>
        <Tooltip title='Match History'>
          <ListItem button>
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
            <ListItemText
              primary="Match History"
              aria-label='Match History' />
          </ListItem>
        </Tooltip>
      </List>
    </Drawer>
  )
}


export default DrawerComponent