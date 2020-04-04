import React, { useContext } from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Drawer from '../Drawer'
import DrawerContext from '../../utils/DrawerContext'
import appbarStyles from './styles';


const AppbarComponent = () => {

  let { open, handleDrawerOpen } = useContext(DrawerContext)
  const classes = appbarStyles();

  return (
    <>
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={0} color="secondary">
              {/* BadgeContent value will dispaly pending notifications */}
              {/* <NotificationsIcon /> -- Hidden unless we decide to use the bell icon for notifications*/}
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer />
    </>
  )

}

export default AppbarComponent