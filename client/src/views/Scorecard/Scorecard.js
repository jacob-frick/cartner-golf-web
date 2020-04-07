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
import {Redirect} from 'react-router-dom'
const Scorecard = () => {
  const { rid } = useParams()
  const [members, setMemberContext] = useState({
    memberContext: [],
    roundId: '',
  })
  const [roundData, setRound] = useState({ round: null, requested: 'NO' })

  members.inputChange = (value, index, hole_num) => {

      let tempArr = JSON.parse(JSON.stringify(members.memberContext))
      let tempScore = tempArr[index].score[hole_num].score
      tempArr[index].score[hole_num].score = value
      if (isNaN(parseInt(value))) {}
      else {
        if(hole_num < 9)
        {
          tempArr[index].total_front = tempArr[index].total_front - tempScore + parseInt(value)
        }else{
          tempArr[index].total_back = tempArr[index].total_back - tempScore + parseInt(value)
        }
      }
      setMemberContext({...members, memberContext: tempArr})

  }

  //run every 10 secs
  const saveRound = (id, members) => {
    let totalFront = 0
    let totalBack = 0
    for(let i = 0; i < members.length; i++) {
      for(let j = 0; j < 9; j++){
        // console.log(i, j, members[i].score[j].score)
        totalFront = totalFront + parseInt(members[i].score[j].score)
        totalBack = totalBack + parseInt(members[i].score[j+9].score)
      }
      members[i].total_front = totalFront
      members[i].total_back = totalBack
      totalFront = 0
      totalBack = 0 
    }
    User.saveRound(id, members)
      .then( () => {
      })
      .catch(e => console.error(e))
  }

  const finishRound = (id, members) => {
    let totalFront = 0
    let totalBack = 0
    for (let i = 0; i < members.length; i++) {
      for (let j = 0; j < 9; j++) {
        totalFront = totalFront + parseInt(members[i].score[j].score)
        totalBack = totalBack + parseInt(members[i].score[j + 9].score)
      }
      members[i].total_front = totalFront
      members[i].total_back = totalBack
      totalFront = 0
      totalBack = 0
    }
    User.completeRound(id, members)
    .then( () => {
      setRound({...roundData, requested: 'REDIRECT'})
    })
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
  }, [])
  if (roundData.requested === 'NO') return (<></>)
  else if( roundData.requested ==='REDIRECT') return <Redirect to = '/'/>
  else {
    return (
      <RoundProtected rid={rid}>
        <OuterNavbar>
          <CssBaseline />
          <RoundContext.Provider value = {members}>
            <Summary round={roundData.round} />
            <br />
            <br />
            <RoundCard round={roundData.round} />
          </RoundContext.Provider>
          <br />
          <br />
          <Button onClick = {() => saveRound(members.roundId, members.memberContext)} variant="contained" color="primary">Save Round</Button>
          <br />
          <br />
          <Button onClick = {() => finishRound(members.roundId, members.memberContext)}variant="contained" color="secondary">Complete Round</Button>
        </OuterNavbar>
      </RoundProtected>
    )
  }
}

export default Scorecard