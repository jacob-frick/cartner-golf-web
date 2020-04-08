import React, { useContext, useEffect, useState } from 'react'
// import CssBaseline from '@material-ui/core/CssBaseline'
// import Container from '@material-ui/core/Container'
// import Grid from '@material-ui/core/Grid'
import OuterNavbar from './../../components/OuterNavbar'
import WelcomeDialog from './../../components/WelcomeDialog'
import HomeContext from './../../utils/HomeContext'
import Round from './../../utils/Round'
import RoundHistoryExpansPanel from './../../components/RoundHistoryExpansPanel'
export default function Dashboard(props) {
  const { isNewAcc } = useContext(HomeContext)

  const [rounds, setRounds] = useState([])
  const isNewAccModel = () => {
    if (isNewAcc) {
      return (<WelcomeDialog />)
    }
    return <></>
  }
  useEffect(() => {
    Round.getAllRounds()
      .then(({ data }) => {
        console.log(data)
        if (data.message) {
          setRounds(<h1>{data.message}</h1>)
        } else {
          console.log(data)
          setRounds(data)
        }
      })
  }, [])

  const model = isNewAccModel()
  return (
    <OuterNavbar>
      {model}
      <RoundHistoryExpansPanel rounds={rounds} />
    </OuterNavbar>
  )
}
