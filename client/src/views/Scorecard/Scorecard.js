import React, { useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Summary from '../../components/Summary'
import RoundCard from '../../components/RoundCard'
import RoundProtected from './../../components/RoundProtected'
import { useParams } from 'react-router-dom'
import OuterNavbar from './../../components/OuterNavbar'
import Round from './../../utils/Round'
const Scorecard = () => {
  const { rid } = useParams()
  const [roundData, setRound] = React.useState({ round: null, requested: 'NO' })
  useEffect(() => {
    if (roundData.requested === 'NO') {
      Round.getRound(rid)
        .then(({ data }) => {
          console.log(data)
          setRound({ requested: 'YES', round: data })
        })
    }
  })
  if (roundData.requested === 'NO') return (<></>)
  else {
    return (
      <RoundProtected rid={rid}>
        <OuterNavbar>
          <CssBaseline />
          <Summary round={roundData.round} />
          <RoundCard round={roundData.round} />
        </OuterNavbar>
      </RoundProtected>
    )
  }
}

export default Scorecard