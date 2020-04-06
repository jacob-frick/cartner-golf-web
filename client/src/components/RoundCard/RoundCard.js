import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import roundCardStyles from './style.js'
const getWidth = () => window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

const RoundCard = () => {
  const classes = roundCardStyles()
  // let [width, setWidth] = useState(getWidth());

  // // in this case useEffect will execute only once because
  // // it does not have any dependencies.
  // useEffect(() => {
  //   const resizeListener = () => {
  //     // change width from the state object
  //     setWidth(getWidth())
  //   };
  //   // set resize listener
  //   window.addEventListener('resize', resizeListener);

  //   // clean up function
  //   return () => {
  //     // remove resize listener
  //     window.removeEventListener('resize', resizeListener);
  //   }
  // }, [])

  let array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16','17', '18']
  const getSIFront = array => {
    //loop through first half
    let SIArr = []
    for(let i = 0; i< 9; i++){
      SIArr[i] = <Grid item xs={1} className={` ${classes.center} ${classes.underline}`}>{array[i]}</Grid>
    }
    return SIArr
  }
  const getSIBack = array => {
    let SIArr = []
    for (let i = 0; i < 9; i++) {
      SIArr[i] = <Grid item xs={1} className={` ${classes.center} ${classes.underline}`}>{array[i]}</Grid>
    }
    return SIArr
  }
  
  const displayHoles = (x, y) => {
    let holeArr = []
    for(let i = x-1; i<y; i++){
    holeArr[i] = <Grid item xs={1} className={` ${classes.center} ${classes.underline}`}>{i+1}</Grid>
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
        <Paper>
          <List>
            <Grid container spacing = {3}>
              <Grid item xs={12}>
                <Grid container spacing = {3}>
                  <Grid item xs ={12} lg ={6}>
                    <Grid item xs={12}>
                      <Typography className={`${classes.center} ${classes.underline}`} variant="subtitle2" gutterBottom>
                        Front
                      </Typography>
                    </Grid>
                    <ListItem>
                <Grid item xs={2} className={` ${classes.center} ${classes.underline}`}>
                    Hole
                </Grid>
                {displayHoles(1, 9)}
                <Grid item xs={1} className={`${classes.center} ${classes.underline}`}>
                    OUT
                </Grid>
              </ListItem>
              <ListItem>
                <Grid item xs={2} className={`${classes.center} ${classes.underline}`}>
                  S.I.
                </Grid>
                {getSIFront(array)}
              </ListItem>
              {/* Begin mapping user */}
              <ListItem>
                <Grid item xs={2} className={`${classes.center}`}>
                  RD
                </Grid>
                <Grid item xs={1} className={`${classes.center}`}>
                  <TextField className = {classes.input} id="standard-basic" size = "small" inputProps={{ style: {textAlign: 'center'} }}/>
                </Grid>
                <Grid item xs={1} className={`${classes.center}`}>
                  <TextField className = {classes.input} id="standard-basic" size = "small" inputProps={{ style: {textAlign: 'center'} }}/>
                </Grid>
                <Grid item xs={1} className={`${classes.center}`}>
                  <TextField className = {classes.input} id="standard-basic" size = "small" inputProps={{ style: {textAlign: 'center'} }}/>
                </Grid>
                <Grid item xs={1} className={`${classes.center}`}>
                  <TextField className = {classes.input} id="standard-basic" size = "small" inputProps={{ style: {textAlign: 'center'} }}/>
                </Grid>
                <Grid item xs={1} className={`${classes.center}`}>
                  <TextField className = {classes.input} id="standard-basic" size = "small" inputProps={{ style: {textAlign: 'center'} }}/>
                </Grid>
                <Grid item xs={1} className={`${classes.center}`}>
                  <TextField className = {classes.input} id="standard-basic" size = "small" inputProps={{ style: {textAlign: 'center'} }}/>
                </Grid>
                <Grid item xs={1} className={`${classes.center}`}>
                  <TextField className = {classes.input} id="standard-basic" size = "small" inputProps={{ style: {textAlign: 'center'} }}/>
                </Grid>
                <Grid item xs={1} className={`${classes.center}`}>
                  <TextField className = {classes.input} id="standard-basic" size = "small" inputProps={{ style: {textAlign: 'center'} }}/>
                </Grid>
                <Grid item xs={1} className={`${classes.center}`}>
                  <TextField className = {classes.input} id="standard-basic" size = "small" inputProps={{ style: {textAlign: 'center'} }}/>
                </Grid>
                <Grid item xs={1} className={`${classes.center}`}>
                  <TextField className = {classes.input} id="standard-basic" size = "small" inputProps={{ style: {textAlign: 'center'} }}/>
                </Grid>
              </ListItem>
            </Grid>
          {/* Put back here */}
            <Grid item xs={12} lg={6}>
              <Grid item xs={12}>
                <Typography className={`${classes.center} ${classes.underline}`} variant="subtitle2" gutterBottom>
                  Back
                </Typography>
              </Grid>
              <ListItem>
                <Grid item xs={2} className={` ${classes.center} ${classes.underline}`}>
                  Hole
                </Grid>
                {displayHoles(10, 18)}
                <Grid item xs={1} className={`${classes.center} ${classes.underline}`}>
                  IN
                </Grid>
                </ListItem>
                <ListItem>
                  <Grid item xs={2} className={`${classes.center} ${classes.underline}`}>
                    S.I.
                  </Grid>
                  {getSIBack(array)}
                </ListItem>
                <ListItem>
                  {/* Begin mapping user here */}
                  <Grid item xs={2} className={`${classes.center}`}>
                    RD
                  </Grid>
                  <Grid item xs={1} className={`${classes.center}`}>
                    <TextField className={classes.input} id="standard-basic" size="small" inputProps={{ style: { textAlign: 'center' } }} />
                  </Grid>
                  <Grid item xs={1} className={`${classes.center}`}>
                    <TextField className={classes.input} id="standard-basic" size="small" inputProps={{ style: { textAlign: 'center' } }} />
                  </Grid>
                  <Grid item xs={1} className={`${classes.center}`}>
                    <TextField className={classes.input} id="standard-basic" size="small" inputProps={{ style: { textAlign: 'center' } }} />
                  </Grid>
                  <Grid item xs={1} className={`${classes.center}`}>
                    <TextField className={classes.input} id="standard-basic" size="small" inputProps={{ style: { textAlign: 'center' } }} />
                  </Grid>
                  <Grid item xs={1} className={`${classes.center}`}>
                    <TextField className={classes.input} id="standard-basic" size="small" inputProps={{ style: { textAlign: 'center' } }} />
                  </Grid>
                  <Grid item xs={1} className={`${classes.center}`}>
                    <TextField className={classes.input} id="standard-basic" size="small" inputProps={{ style: { textAlign: 'center' } }} />
                  </Grid>
                  <Grid item xs={1} className={`${classes.center}`}>
                    <TextField className={classes.input} id="standard-basic" size="small" inputProps={{ style: { textAlign: 'center' } }} />
                  </Grid>
                  <Grid item xs={1} className={`${classes.center}`}>
                    <TextField className={classes.input} id="standard-basic" size="small" inputProps={{ style: { textAlign: 'center' } }} />
                  </Grid>
                  <Grid item xs={1} className={`${classes.center}`}>
                    <TextField className={classes.input} id="standard-basic" size="small" inputProps={{ style: { textAlign: 'center' } }} />
                  </Grid>
                  <Grid item xs={1} className={`${classes.center}`}>
                    <TextField className={classes.input} id="standard-basic" size="small" inputProps={{ style: { textAlign: 'center' } }} />
                  </Grid>
                </ListItem>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </List>
    </Paper>
  </>
    )
}

export default RoundCard