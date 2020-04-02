import { makeStyles } from '@material-ui/core/styles';
import { green, deepOrange, deepPurple } from '@material-ui/core/colors';
const friendCardStyles = makeStyles((theme) => ({
  icon: {
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
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
    textAlign: 'center'
  },
  accept: {
    borderColor: 'green',
    color: 'green'
  },
  root: {
    flexGrow: 1
  }
}));

export default friendCardStyles