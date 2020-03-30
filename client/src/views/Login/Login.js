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
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import HomeContext from './../../utils/HomeContext'
import axios from '../../config/axiosConfig';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  loginStyle: {
    backgroundColor: 'white',
    maxHeight: '50%',
    marginTop: '50%',
    marginBottom: '50%',
    paddingBottom: '2rem',
    paddingRight: '2rem',
    paddingLeft: '2rem',
    borderRadius: '.8rem',
    paddingTop: '1rem',
    display: 'inline-table'
  },
  avatar: {
    // margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  backgroundImage: {
    display: 'flex',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundImage: `url(${"../assets/images/backgroundImage.jpg"})`,
  },
  textCenter: {
    textAlign: 'center',
    marginTop: '1rem'
  }
}));

export default function Login() {
  const classes = useStyles();
  const { setPageCreateAccount, setPageDashboard } = useContext(HomeContext)
  const [user, setUser] = useState({email: '', password: ''})
  const formChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }
  const didSubmit = (event) => {
    event.preventDefault()
    axios.post('/api/users/login',{
      username: user.email,
      password: user.password
    }).then( ({data}) => {
      if(data.message) {
        console.log(data.message)
      }else {
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
        <Avatar className={classes.avatar}>
          <GolfCourseIcon />
        </Avatar>
        <Typography className = {classes.textCenter}component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={didSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(event) => {formChange(event)}}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={(event) => {formChange(event)}}
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
              <Link onClick={setPageCreateAccount} variant="body2">
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