import React, {useState} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import DrawerContext from '../../utils/DrawerContext'
import Appbar from '../../components/Appbar'
import dashboardStyles from './styles.js'
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import User from '../../utils/User'
import {Redirect} from 'react-router-dom'
import { useEffect } from 'react'

const OuterNavbar = props => {
    const classes = dashboardStyles()
    const [open, setOpen] = useState({ open: false })
    open.handleDrawerOpen = () => {
      setOpen({ open: true });
    }
    open.handleDrawerClose = () => {
      setOpen({ open: false });
    }

    const [currentRound, setCurrentRound] = useState({roundId: null,inRound: false, course_name: null, redirect: false})

    useEffect( () => {
      User.getCurrentRound()
      .then( ({data: round}) => {
        if(round){
          setCurrentRound({...currentRound, roundId: round._id, inRound: true, course_name: round.course_id.name})
        }
      })
      .catch(e => console.error(e))
    }, [])

    const redirect = () => {
      setCurrentRound({...currentRound, redirect: true})
    }
    if(currentRound.redirect) {
      return (
        <Redirect to ={`/scorecard/${currentRound.roundId}`} />
      )
    }
    else{
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
                  {currentRound.inRound ? <Button onClick = {() => redirect()}className={classes.button}>
                    <Snackbar open={window.location.href.indexOf('scorecard')> -1 ? false : true}>
                      <Alert severity="info">Currently playing a round at {currentRound.course_name}</Alert>
                    </Snackbar>
                  </Button> : null}
                </Container>
              </main>
            </div>
          </DrawerContext.Provider>
        )

    }
}
export default OuterNavbar