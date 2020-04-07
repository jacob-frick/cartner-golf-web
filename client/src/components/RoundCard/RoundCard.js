import React, { useState, useEffect, useContext } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import roundCardStyles from './style.js'
import RoundContext from '../../utils/RoundContext'

const RoundCard = props => {
  const classes = roundCardStyles()
  const holes = props.round.course_id.holes
  const {inputChange, memberContext} = useContext(RoundContext)
  const getHalfScorecard = (isBack) => {
    let start, finish
    isBack ? start = 9 : start = 0
    isBack ? finish = 17 : finish = 8
    return (
      <>
        <Grid item xs={12} lg={6}>
          <Grid item xs={12}>
            <Typography className={`${classes.center} ${classes.underline}`} variant="subtitle2" gutterBottom>
              {isBack ? 'Back' : 'Front'}
            </Typography>
          </Grid>
          <ListItem>
            <Grid item xs={2} className={` ${classes.center} ${classes.underline}`}>Hole</Grid>
            {displayHoles(start, finish)}
            <Grid item xs={1} className={`${classes.center} ${classes.underline}`}>{isBack ? 'IN' : 'OUT'}</Grid>
          </ListItem>
          <ListItem>
            <Grid item xs={2} className={`${classes.center} ${classes.underline}`}>S.I.</Grid>
            {holes.map((elem, index) => {
              if (index >= start && index <= finish) {
                return (<Grid item xs={1} className={` ${classes.center} ${classes.underline}`}>{elem.handicap}</Grid>)
              }
            })}
          </ListItem>
          {/* Begin mapping user */}
          {props.round.members.map((elem, i) => {
            return (
              <ListItem>
                <Grid item xs={2} className={`${classes.center}`}>{elem.user_id.fname}</Grid>
                {elem.score.map((sc, indx) => {
                  if (indx >= start && indx <= finish) {
                    return (
                      <Grid item xs={1} className={`${classes.center}`}>
                        <TextField 
                        id={`${i}-${sc.hole_num}`} 
                        className={classes.input} size="small" 
                        inputProps={{ style: { textAlign: 'center' } }} 
                        value={memberContext[i].score[indx].score} 
                        onChange = {event => inputChange(event.target.value, i, indx)}
                        />
                      </Grid>)
                  }
                })}
              </ListItem >
            )
          })}
        </Grid>
      </>
    )

  }
  const displayHoles = (x, y) => {
    let holeArr = []
    for (let i = x; i <= y; i++) {
      holeArr[i] = <Grid item xs={1} className={` ${classes.center} ${classes.underline}`}>{i + 1}</Grid>
    }
    return holeArr
  }

  return (
    <>
      <Typography className={`${classes.center} ${classes.underline}`} variant="h6" gutterBottom>
        Scorecard
        </Typography>
      <br />
      <br />
      <Paper className={classes.min}>
        <List>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                {getHalfScorecard(false)}
                {/* Put back here */}
                {getHalfScorecard(true)}
              </Grid>
            </Grid>
          </Grid>
        </List>
      </Paper>
    </>
  )
}

export default RoundCard
