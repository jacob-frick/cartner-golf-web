import React, { useContext } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import DrawerContext from '../../utils/DrawerContext'
import Appbar from '../../components/Appbar'
import dashboardStyles from './styles.js'
import HomeContext from '../../utils/HomeContext'
import WelcomeModel from './../../components/WelcomeModel'
export default function Dashboard(props) {
  const classes = dashboardStyles()
  const [open, setOpen] = React.useState({ open: false })
  const { isNewAcc } = useContext(HomeContext)
  open.handleDrawerOpen = () => {
    setOpen({ open: true });
  }
  open.handleDrawerClose = () => {
    setOpen({ open: false });
  }
  const isNewAccModel = () => {
    if(isNewAcc) {
      return(<WelcomeModel />)
    }
    return <></>
  }
  const model = isNewAccModel()
  return (
    <DrawerContext.Provider value={open}>
      {model}
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
}
