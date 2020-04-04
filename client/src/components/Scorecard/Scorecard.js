import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { borders } from '@material-ui/system';
import scorecardStyle from './style.js'


const Scorecard = () => {
  const classes = scorecardStyle()

  return(
    <Container maxwidth = 'md'>
      <List>
        <div className = {classes.root}>
        <Grid container spacing = {3}>
          <ListItem className = {classes.heading}>
            <Grid item xs={12}>
              <Typography className = {classes.center} variant="h6" gutterBottom>
                Summary
              </Typography>
            </Grid>
          </ListItem>
          <ListItem className = {classes.subheading}>
            <Grid item xs={4} className = {classes.center} >
              Name
            </Grid>
            <Grid item xs={4} className = {classes.center} >
              Handicap
            </Grid>
            <Grid item xs={2} className = {classes.center} >
              Total
            </Grid>
            <Grid item xs={2} className = {classes.center} >
              Net
            </Grid>
          </ListItem>
          <ListItem>
            {/* Map member summary data here */}
              <Grid item xs={4} className={classes.center} >
               Member 1 Name
            </Grid>
              <Grid item xs={4} className={classes.center} >
               Member 1 Handicap
            </Grid>
              <Grid item xs={2} className={classes.center} >
               1
            </Grid>
              <Grid item xs={2} className={classes.center} >
               1
            </Grid>
          </ListItem>
          <ListItem>
              <Grid item xs={4} className={classes.center} >
               Member 2 Name
            </Grid>
              <Grid item xs={4} className={classes.center} >
               Member 2 Handicap
            </Grid>
              <Grid item xs={2} className={classes.center} >
               2
            </Grid>
              <Grid item xs={2} className={classes.center} >
               2
            </Grid>
          </ListItem>
          {/* End summary mapping */}
        </Grid>
        </div>
      </List>
    </Container>
  )
}

export default Scorecard