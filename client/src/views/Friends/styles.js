

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
    ['@media (min-width:780px)']: { // eslint-disable-line no-useless-computed-key
      backgroundRepeat: 'round'
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: 'white',
    border: '1px solid rgba(63, 151, 181, 0.5)',
    height: '50px',
    // width: 'calc(100% - 10vh)',
    backgroundColor: '#4caf50',
    boxShadow: '0 3px 5px 2px #90ee9066',
    borderRadius: '3px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
  },
  textCenter: {
    textAlign: 'center',
    marginTop: '1rem'
  },
  header: {
    textAlign: 'center',
    fontFamily: 'Open Sans, sans- serif'
  },

  onLinkHover: {
    '&: hover': {
      cursor: 'pointer',
    }
  }
}))
export default friendStyles