import React, { useState, useContext } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import GolfCourseIcon from '@material-ui/icons/GolfCourse';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import createAccountStyles from './styles.js'
import axios from 'axios'
import HomeContext from './../../utils/HomeContext'

const CreateAccount = props => {
  const classes = createAccountStyles()
  const { setPageLogin, setPageDashboard } = useContext(HomeContext)
  const [user, setUser] = useState({ fname: '', lname: '', email: '', password: ''})
  const didSubmit = (event) => {
    event.preventDefault()
    axios.post('/api/users/register', {
      fname: user.fname,
      lname: user.lname,
      username: user.email,
      password: user.password
    })
      .then(({ data }) => {
        console.log(data)
        localStorage.setItem('jwt', data.token)
        setPageDashboard(true)
      })
      .catch(error => {
        console.error(error)
      })
  }

  const formChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }


  return (
    <div className={classes.backgroundImage}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={`${classes.paper} ${classes.loginStyle}`}>
        <Avatar className={classes.avatar}>
          <GolfCourseIcon />
        </Avatar>
        <Typography className={classes.textCenter} component="h1" variant="h5">
          Create An Account
        </Typography>
        <form className={classes.form} noValidate onSubmit={didSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField autoComplete="fname"
                name="fname"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(event) => { formChange(event) }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lname"
                label="Last Name"
                name="lname"
                autoComplete="lname"
                onChange={(event) => { formChange(event) }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(event) => { formChange(event) }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(event) => { formChange(event) }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={user.fname && user.lname && user.email && user.password ? false : true}
          >
            Sign Up
              </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link onClick={setPageLogin} variant="body2">
                Already have an account? Sign in
                </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </div>
  )
}

export default CreateAccount