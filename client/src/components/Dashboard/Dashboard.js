import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import DrawerContext from '../../utils/DrawerContext'
import Appbar from '../Appbar'
import { Redirect } from 'react-router-dom'
import Authorization from './../../utils/Authorization'
import dashboardStyles from './styles.js'

export default function Dashboard() {
  const classes = dashboardStyles()
  const [open, setOpen] = React.useState({ open: false })
  const [isAuth, setAtuh] = React.useState(0)

  open.handleDrawerOpen = () => {
    setOpen({ open: true });
  }
  open.handleDrawerClose = () => {
    setOpen({ open: false });
  }

  Authorization.auth()
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
