import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Paper from '@material-ui/core/Paper'

import summaryStyles from './style.js'


const Summary = () => {
  const classes = summaryStyles()

  return (
      <Container maxwidth='lg'>
        <Paper elevation={3}>
          <List>
            <div className={classes.root}>
              <Grid container spacing={3} className={classes.padBot}>
                <ListItem>
                  <Grid item xs={12}>
                    <Typography className={`${classes.center} ${classes.underline}`} variant="h6" gutterBottom>
                      Summary
                </Typography>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid item xs={4} className={`${classes.center} ${classes.underline}`} >
                    Name
              </Grid>
                  <Grid item xs={4} className={`${classes.center} ${classes.underline}`} >
                    Handicap
              </Grid>
                  <Grid item xs={2} className={`${classes.center} ${classes.underline}`} >
                    Total
              </Grid>
                  <Grid item xs={2} className={`${classes.center} ${classes.underline}`} >
                    Net
              </Grid>
                </ListItem>
                <Divider />
                <ListItem >
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
                <Divider />
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
        </Paper>
      </Container>
  )
}

export default Summary