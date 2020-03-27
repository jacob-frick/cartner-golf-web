import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Drawer from '@material-ui/core/Drawer';
// import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import DrawerContext from '../../utils/DrawerContext'
import Appbar from '../Appbar'
import { Redirect } from 'react-router-dom';
import axios from './../../config/axiosConfig.js'
// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  fixedHeight: {
    height: 240,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
}));

export default function Dashboard() {
  const classes = useStyles()
  const [open, setOpen] = React.useState({ open: false })
  const [isAuth, setAtuh] = React.useState(0)

  open.handleDrawerOpen = () => {
    setOpen({ open: true });
  }
  open.handleDrawerClose = () => {
    setOpen({ open: false });
  }

  axios.get('/api/authorize', { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` } })
    .then(res => {
      if (res.status === 200) {
        setAtuh(1)
      } else {
        setAtuh(-1)
      }
    })

  if (isAuth === 1) {
    return (
      <DrawerContext.Provider value={open}>
        <div className={classes.root}>
          <CssBaseline />
          <Appbar />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
              <Grid container spacing={3}>
                {/* Page Info goes here */}
              </Grid>
              {/* <Box pt={4}>
              <Copyright />
            </Box> */}
            </Container>
          </main>
        </div>
      </DrawerContext.Provider>
    )
  } else if (isAuth === 0) {
    return (<p></p>)
  } else {
    return (<Redirect to='/' />)
  }
}
