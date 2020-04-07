import React, { useEffect, useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Summary from '../../components/Summary'
import RoundCard from '../../components/RoundCard'
import RoundProtected from './../../components/RoundProtected'
import { useParams } from 'react-router-dom'
import OuterNavbar from './../../components/OuterNavbar'
import Button from '@material-ui/core/Button'
import Round from './../../utils/Round'
import RoundContext from '../../utils/RoundContext'
import User from '../../utils/User'
const Scorecard = () => {
  const { rid } = useParams()
  const [members, setMemberContext] = useState({
    memberContext: [],
    roundId: ''
  })
  const [roundData, setRound] = useState({ round: null, requested: 'NO' })

  members.inputChange = (value, index, hole_num) => {
    // console.log(value)
    // console.log('index ' + index)
    // console.log('hole number '+ (hole_num-1))
    // console.log(members.memberContext)
    let tempArr = JSON.parse(JSON.stringify(members.memberContext))
    tempArr[index].score[hole_num].score = value
    setMemberContext({...members, memberContext: tempArr})
  }

  //run every 10 secs
  const completeRound = (id, members) => {
    console.log(members)
    User.saveRound(id, members)
      .then()
      .catch(e => console.error(e))
  }

  useEffect(() => {
    if (roundData.requested === 'NO') {
      Round.getRound(rid)
        .then(({ data }) => {
          console.log(data)
          setMemberContext({...members, memberContext: data.members, roundId: data._id})
          setRound({ ...roundData, requested: 'YES', round: data })
        })
    }
  })
  if (roundData.requested === 'NO') return (<></>)
  else {
    return (
      <RoundProtected rid={rid}>
        <OuterNavbar>
          <CssBaseline />
          <RoundContext.Provider value = {members}>
            <Summary round={roundData.round} />
            <RoundCard round={roundData.round} />
          </RoundContext.Provider>
          <br />
          <br />
          <Button onClick = {() => completeRound(members.roundId, members.memberContext)} variant="contained" color="primary">Complete Round</Button>
        </OuterNavbar>
      </RoundProtected>
    )
  }
}

export default Scorecard