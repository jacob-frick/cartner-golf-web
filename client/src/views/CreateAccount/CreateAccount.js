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
  const [user, setUser] = useState({ fname: '', lname: '', email: '', password: '', confirmPassword: '', emailCheck: false, emailErrorMessage: '', confirmPasswordCheck: false, confirmPasswordErrorMessage: '' })
  const didSubmit = (event) => {
    event.preventDefault()
    //reset error messages
    // setUser({ ...user, emailCheck: false, emailErrorMessage: '', confirmPasswordCheck: false, confirmPasswordErrorMessage: '' })
    if (user.password !== user.confirmPassword) {
      setUser({ ...user, confirmPasswordCheck: true, confirmPasswordErrorMessage: 'Passwords do not match', emailCheck: false, emailErrorMessage: '', })
    }
    else {
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
          //Error will only fire if the email has already been taken
          // console.error(error)
          setUser({ ...user, emailCheck: true, emailErrorMessage: 'Email is already in use', confirmPasswordCheck: false, confirmPasswordErrorMessage: '' })
        })
    }
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
                  error={user.emailCheck}
                  helperText={user.emailErrorMessage}
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
                  error={user.confirmPasswordCheck}
                  helperText={user.confirmPasswordErrorMessage}
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
              <Grid item xs={12}>
                <TextField
                  error={user.confirmPasswordCheck}
                  helperText={user.confirmPasswordErrorMessage}
                  variant="outlined"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="current-password"
                  onChange={(event) => { formChange(event) }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              component='button'
              className={classes.submit}
              disabled={user.fname && user.lname && user.email && user.password ? false : true}
            >
              Sign Up
              </Button>
            <Grid
              container
              justify="flex-end"
            >
              <Grid item>
                <Link
                  onClick={setPageLogin}
                  variant="body2"
                  component='button'>
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