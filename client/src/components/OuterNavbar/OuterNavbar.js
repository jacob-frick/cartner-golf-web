import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
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
              <Container maxWidth="xl" className={classes.container}>
                  {/* Page Info goes here */}
                  {props.children}
              </Container>
            </main>
          </div>
        </DrawerContext.Provider>
      )
}
export default OuterNavbar