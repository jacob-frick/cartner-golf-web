import React, { useContext, useState} from 'react'
// import CssBaseline from '@material-ui/core/CssBaseline'
// import Container from '@material-ui/core/Container'
// import Grid from '@material-ui/core/Grid'
import OuterNavbar from './../../components/OuterNavbar'
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WelcomeDialog from './../../components/WelcomeDialog'
import HomeContext from './../../utils/HomeContext'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  center: {
    alignContent: 'center'
  }
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const { isNewAcc } = useContext(HomeContext)
  const isNewAccModel = () => {
    if (isNewAcc) {
      return (<WelcomeDialog />)
    }
    return <></>
  }

  const model = isNewAccModel()
  return (
    <OuterNavbar>
      {model}
      <h1>Dashboard</h1>
      <div className = {classes.root}>
        <Snackbar
          open={true}
          className = {classes.center}
          action=
          {<Button color="secondary" size="small">
            Go To Current Round
          </Button>}>
          <Alert severity="info">This is an information message!</Alert>
        </Snackbar>
      </div>
    </OuterNavbar>
  )
}
