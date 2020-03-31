import React, { useContext } from 'react'
// import CssBaseline from '@material-ui/core/CssBaseline'
// import Container from '@material-ui/core/Container'
// import Grid from '@material-ui/core/Grid'
import OuterNavbar from './../../components/OuterNavbar'
import WelcomeModel from './../../components/WelcomeModel'
import HomeContext from './../../utils/HomeContext'

export default function Dashboard(props) {
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
    </OuterNavbar>
  )
}
