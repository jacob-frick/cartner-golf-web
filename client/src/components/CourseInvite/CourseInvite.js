import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import GolfCourseIcon from '@material-ui/icons/GolfCourse';
import courseInviteStyles from './styles.js'
const invites = [{ from: 'richard', course: 'course1' }, { from: 'jacob', course: 'course2' }, { from: 'jullian', course: 'course3' }, { from: 'sulakshana', course: 'course4' }];

export default function Album() {
  const classes = courseInviteStyles();

  return (
    <>
      <CssBaseline />
        <Container maxWidth="md">
          <Grid container spacing={4}>
            {invites.map((invite) => (
              <Grid item key={invite.from} xs={12}>
                <Paper className={classes.paper} elevation={3}>
                  <Grid container>
                    <Grid item md={1} xs={3} className={classes.icon}>
                      <GolfCourseIcon />
                    </Grid>
                    <Grid item md={7} xs={9}>
                        <Typography component="h6" variant="h6" color="inherit" gutterBottom>
                          {invite.from} has invited you to a match at {invite.course}
                        </Typography>
                    </Grid>
                    <Grid item md={2} xs={6} className={classes.buttons}>
                      <Button variant="outlined" className = {classes.accept}>Accept</Button>
                    </Grid>
                    <Grid item md={2} xs={6} className={classes.buttons}>
                      <Button variant="outlined" color="secondary">Decline</Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
    </>
  );
}