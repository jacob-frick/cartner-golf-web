import { makeStyles } from '@material-ui/core/styles';
import { green, deepOrange, deepPurple } from '@material-ui/core/colors';
// import { spacing } from '@material-ui/system'
const friendCardStyles = makeStyles((theme) => ({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
    flexGrow: 1,
    maxWidth: '90%',
    flexBasis: '90%',
    flexWrap: 'wrap',
    // minInlineSize: 'max-content',
    // marginBottom: '.5rem',
  },
  icon: {
    marginTop: 'auto !important',
    marginRight: '1rem !important',
    display: 'flex !important',
    alignItems: 'start !important',
    justifyContent: 'start !important',
    marginBottom: 'auto !important',
    maxWidth: 'fit-content !important',
    minWidth: 'auto !important',
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: '#05b0b0cc!important;',
    borderRadius: '50% !important',
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: '#05b0b0cc!important',
    borderRadius: '50% !important',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  green: {
    color: 'white',
    backgroundColor: green[500],
  },
  buttons: {
    left: '6%',
  },
  buttonGroup: {
    '&: hover': {
      backgroundColor: 'transparent',
    }
  },
  accept: {
    '&: hover': {
      backgroundColor: '#ffffff',
    },
    borderColor: '#4caf50',
    color: '#4caf50'
  },
  MuiTypography: {
    boxSizing: 'border-box',
    marginRight: '-.5rem',
    marginBottom: '-.5rem',
  },
  MuiButtonRoot: {
    display: 'flex',
    justifyContent: 'flex-end',
    // left: '0%',
    position: 'relative',
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginLeft: 'auto',
    // marginRight: 'auto',
  },
  cardStyles: {
    // display: 'inline-flex'
  },
  cardMarg: {
    marginBottom: 4,
    marginRight: 2
  },
  buttonsStyle: {
    display: 'flex', 
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
}));

export default friendCardStyles