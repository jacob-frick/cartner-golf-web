import React, { useContext, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import GolfCourseIcon from '@material-ui/icons/GolfCourse';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import HomeContext from './../../utils/HomeContext'
import User from './../../utils/User'
import logInStyles from './styles.js'
export default function Login() {
  const classes = logInStyles()
  const { setPageCreateAccount, setPageDashboard } = useContext(HomeContext)
  const [user, setUser] = useState({ email: '', password: '', emailCheck: false, passwordCheck: false, emailErrorMessage: '', passwordErrorMessage: '' })
  const formChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }
  const didSubmit = (event) => {
    event.preventDefault()
    //reset error messages
    User.login({ username: user.email, password: user.password })
      .then(({ data }) => {
        if (data.message) {
          // console.log(data.message)
          if (data.message === 'Password Incorrect') {
            setUser({ ...user, passwordCheck: true, passwordErrorMessage: 'Incorrect Password', emailCheck: false, emailErrorMessage: '' })
          }
          else {
            setUser({ ...user, emailCheck: true, emailErrorMessage: 'Email Does Not Exist', passwordCheck: false, passwordErrorMessage: '' })
          }
        } else {
          localStorage.setItem('jwt', data.token)
          setPageDashboard()
        }
      })
  }
  return (
    <div className={classes.backgroundImage}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={`${classes.paper} ${classes.loginStyle}`}>
          <Typography className={classes.header} component="h1" variant="h3">
            Cartner-Golf
        </Typography>
          <Avatar className={classes.avatar}>
            <GolfCourseIcon />
          </Avatar>
          <Typography className={classes.textCenter} component="h1" variant="h5">
            Login
        </Typography>
          <form className={classes.form} noValidate onSubmit={didSubmit}>
            <TextField
              error={user.emailCheck}
              helperText={user.emailErrorMessage}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(event) => { formChange(event) }}
            />
            <TextField
              error={user.passwordCheck}
              helperText={user.passwordErrorMessage}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(event) => { formChange(event) }}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
          </Button>
            <Grid container>
              <Grid item xs>
                <Link variant="body2">
                  Forgot password?
              </Link>
              </Grid>
              <Grid item>
                <Link className={classes.onLinkHover} onClick={setPageCreateAccount} variant="body2">
                  {"No Account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  )
}