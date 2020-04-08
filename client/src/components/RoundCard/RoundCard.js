import React, {useContext } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import roundCardStyles from './style.js'
import RoundContext from '../../utils/RoundContext'

const RoundCard = props => {
  const classes = roundCardStyles()
  const holes = props.round.course_id.holes
  const { inputChange, memberContext } = useContext(RoundContext)
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
                return (<Grid item xs={1} className={` ${classes.center} ${classes.underline}`}  key={`${props.round._id}-handicap-${elem.handicap}`}>{elem.handicap}</Grid>)
              }else {
                return(<></>)
              }
            })}
          </ListItem>
          <ListItem>
            <Grid item xs={2} className={`${classes.center} ${classes.underline}`}>Par</Grid>
            {holes.map((elem, index) => {
              if (index >= start && index <= finish) {
                return (<Grid item xs={1} className={` ${classes.center} ${classes.underline}`}  key={`${props.round._id}-handicap-${elem.handicap}`}>{elem.par}</Grid>)
              }else {
                return(<></>)
              }
            })}
          </ListItem>
          {/* Begin mapping user */}
          {props.round.members.map((elem, i) => {
            return (
              <ListItem key={`${props.round._id}-score-${i}`}>
                <Grid item xs={2} className={`${classes.center}`}>{elem.user_id.fname}</Grid>
                {elem.score.map((sc, indx) => {
                  if (indx >= start && indx <= finish) {
                    return (
                      <Grid item xs={1} className={`${classes.center}`}  key={`${props.round._id}-score-${sc.hole_num}-${sc._id}`}>
                        <TextField
                          id={`${i}-${sc.hole_num}-${Math.random()}-${elem.user_id._id.toString()}`}
                          className={classes.input} size="small"
                          inputProps={{ style: { textAlign: 'center' } }}
                          value={props.isHistory ? sc.score : memberContext[i].score[indx].score}
                          onChange={event => inputChange(event.target.value, i, indx)}
                        />
                      </Grid>
                    )
                  } else{return(<></>)}
                })}
                <Grid item xs={1} className={`${classes.center} ${classes.underline}`}>
                  {isBack ? `${props.isHistory ? elem.total_back : memberContext[i].total_back}` : `${props.isHistory ? elem.total_front : memberContext[i].total_front}`}
                </Grid>
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
      holeArr[i] = <Grid item xs={1} className={` ${classes.center} ${classes.underline}`} key={`${props.round._id}-hole-${i+1}`}>{i + 1}</Grid>
    }
    return holeArr
  }

  return (
    <>
      {props.isHistory ? <></> : <><Typography className={`${classes.center} ${classes.underline}`} variant="h6" gutterBottom>Scorecard</Typography>
        <br />
        <br /></>}
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
