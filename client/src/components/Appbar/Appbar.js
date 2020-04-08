import React, { useContext} from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import Drawer from '../Drawer'
import DrawerContext from '../../utils/DrawerContext'
import MenuDropdown from '../MenuDropdown';
import appbarStyles from './styles';

const AppbarComponent = props => {

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
            {props.head}
          </Typography>
          <MenuDropdown />
        </Toolbar>
      </AppBar>
      <Drawer />
    </>
  )

}

export default AppbarComponent