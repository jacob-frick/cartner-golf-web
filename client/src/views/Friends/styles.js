

import { makeStyles } from '@material-ui/core/styles'
const friendStyles = makeStyles((theme) => ({
  root: {
    height: '-webkit-fill-available',
  },
  avatar: {
    // margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    marginLeft: 'auto',
    marginRight: '1rem',
    marginTop: '2rem'
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
    backgroundRepeat: 'round',
  },
  textCenter: {
    textAlign: 'center',
    marginTop: '1rem'
  },
  header: {
    textAlign: 'center',
    fontFamily: 'Open Sans, sans- serif'
  },
  buttonGroup: {
    '&: hover': {
      backgroundColor: '#ffffff',
    },
    borderRightColor: '#4caf50',
  },
  onLinkHover: {
    '&: hover': {
      cursor: 'pointer',
    }
  }
}))
export default friendStyles