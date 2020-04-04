import React, {useState, useEffect} from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Paper from '@material-ui/core/Paper'
import roundCardStyles from './style.js'

const getWidth = () => window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

const RoundCard = () => {
  const classes = roundCardStyles()
  let [width, setWidth] = useState(getWidth());

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    const resizeListener = () => {
      // change width from the state object
      setWidth(getWidth())
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    }
  }, [])
  
  if(width < 812){
    //return front and back
    return (
      <>
        <Typography className={`${classes.center} ${classes.underline}`} variant="h6" gutterBottom>
          Scorecard
        </Typography>
        <br />
        <br />
        <Paper>
          <List>
            <Grid container spacing = {3}>
              <ListItem>
                <Grid item xs={12}>
                  <Typography className={`${classes.center} ${classes.underline}`} variant="subtitle2" gutterBottom>
                    Front
                  </Typography>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid item className={`${classes.holeStylePhone} ${classes.center} ${classes.underline}`}>
                    Hole
                </Grid>
                  <Grid item className={`${classes.holeStylePhone} ${classes.center} ${classes.underline}`}>
                    1
                </Grid>
                  <Grid item className={`${classes.holeStylePhone} ${classes.center} ${classes.underline}`}>
                    2
                </Grid>
                  <Grid item className={`${classes.holeStylePhone} ${classes.center} ${classes.underline}`}>
                    3
                </Grid>
                  <Grid item className={`${classes.holeStylePhone} ${classes.center} ${classes.underline}`}>
                    4
                </Grid>
                  <Grid item className={`${classes.holeStylePhone} ${classes.center} ${classes.underline}`}>
                    5
                </Grid>
                  <Grid item className={`${classes.holeStylePhone} ${classes.center} ${classes.underline}`}>
                    6
                </Grid>
                  <Grid item className={`${classes.holeStylePhone} ${classes.center} ${classes.underline}`}>
                    7
                </Grid>
                  <Grid item className={`${classes.holeStylePhone} ${classes.center} ${classes.underline}`}>
                    8
                </Grid>
                  <Grid item className={`${classes.holeStylePhone} ${classes.center} ${classes.underline}`}>
                    9
                </Grid>
              </ListItem>
              <ListItem>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  S.I.
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
              </ListItem>
              <ListItem>
                {/* Begin mapping player scores here from hole 1-9 */}
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  RD
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
              </ListItem>
            </Grid>
          </List>
        </Paper>
        <br />
        <br />
        <Paper>
          <List>
            <Grid container spacing={3}>
              <ListItem>
                <Grid item xs={12}>
                  <Typography className={`${classes.center} ${classes.underline}`} variant="subtitle2" gutterBottom>
                    Back
                  </Typography>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid item className={`${classes.holeStylePhone} ${classes.center} ${classes.underline}`}>
                  Hole
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center} ${classes.underline}`}>
                  10
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center} ${classes.underline}`}>
                  11
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center} ${classes.underline}`}>
                  12
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center} ${classes.underline}`}>
                  13
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center} ${classes.underline}`}>
                  14
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center} ${classes.underline}`}>
                  15
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center} ${classes.underline}`}>
                  16
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center} ${classes.underline}`}>
                  17
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center} ${classes.underline}`}>
                  18
                </Grid>
              </ListItem>
              <ListItem>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  S.I.
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
              </ListItem>
              <ListItem>
                {/* Begin mapping player scores here from hole 10-18 */}
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  RD
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
                <Grid item className={`${classes.holeStylePhone} ${classes.center}`}>
                  __
                </Grid>
              </ListItem>
            </Grid>
          </List>
        </Paper>
      </>
    )
  }
  else{
    //return one long card
    return (
      <Paper>
        <List>
          <Grid container spacing ={3}>
            <ListItem>
              <Grid item xs={12}>
                <Typography className={`${classes.center} ${classes.underline}`} variant="h6" gutterBottom>
                  Scorecard
                </Typography>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item xs ={1} className = {`${classes.holeStyle} ${classes.center} ${classes.underline}`}>
                Hole
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center} ${classes.underline}`}>
                1
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center} ${classes.underline}`}>
                2
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center} ${classes.underline}`}>
                3
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center} ${classes.underline}`}>
                4
              </Grid>
              <Grid item xs ={1}  className = {`${classes.holeStyle} ${classes.center} ${classes.underline}`}>
                5
              </Grid>
              <Grid item xs ={1}  className = {`${classes.holeStyle} ${classes.center} ${classes.underline}`}>
                6
              </Grid>
              <Grid item xs ={1}  className = {`${classes.holeStyle} ${classes.center} ${classes.underline}`}>
                7
              </Grid>
              <Grid item xs ={1}  className = {`${classes.holeStyle} ${classes.center} ${classes.underline}`}>
                8
              </Grid>
              <Grid item xs ={1}  className = {`${classes.holeStyle} ${classes.center} ${classes.underline}`}>
                9
              </Grid>
              <Grid item xs ={1}  className = {`${classes.holeStyle} ${classes.center} ${classes.underline}`}>
                10
              </Grid>
              <Grid item xs ={1}  className = {`${classes.holeStyle} ${classes.center} ${classes.underline}`}>
                11
              </Grid>
              <Grid item xs ={1}  className = {`${classes.holeStyle} ${classes.center} ${classes.underline}`}>
                12
              </Grid>
              <Grid item xs ={1}  className = {`${classes.holeStyle} ${classes.center} ${classes.underline}`}>
                13
              </Grid>
              <Grid item xs ={1}  className = {`${classes.holeStyle} ${classes.center} ${classes.underline}`}>
                14
              </Grid>
              <Grid item xs ={1}  className = {`${classes.holeStyle} ${classes.center} ${classes.underline}`}>
                15
              </Grid>
              <Grid item xs ={1}  className = {`${classes.holeStyle} ${classes.center} ${classes.underline}`}>
                16
              </Grid>
              <Grid item xs ={1}  className = {`${classes.holeStyle} ${classes.center} ${classes.underline}`}>
                17
              </Grid>
              <Grid item xs ={1}  className = {`${classes.holeStyle} ${classes.center} ${classes.underline}`}>
                18
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                Par
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
            </ListItem>
            <ListItem>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                S.I.
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
            </ListItem>
            <ListItem>
              {/* start mapping player info here */}
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                RD
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
              <Grid item xs={1} className={`${classes.holeStyle} ${classes.center}`}>
                __
              </Grid>
            </ListItem>
          </Grid>
        </List>
      </Paper>
    )
  }
}

export default RoundCard