import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import DrawerContext from '../../utils/DrawerContext'
import Appbar from '../../components/Appbar'
import dashboardStyles from './styles.js'


const OuterNavbar = props => {
    const classes = dashboardStyles()
    const [open, setOpen] = React.useState({ open: false })
    open.handleDrawerOpen = () => {
      setOpen({ open: true });
    }
    open.handleDrawerClose = () => {
      setOpen({ open: false });
    }

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
                  {props.children}
                </Grid>
              </Container>
            </main>
          </div>
        </DrawerContext.Provider>
      )
}
export default OuterNavbar