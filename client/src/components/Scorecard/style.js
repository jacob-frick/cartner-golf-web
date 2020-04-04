import { makeStyles } from '@material-ui/core/styles';
const scorecardStyles = makeStyles((theme) => ({
  center: {
    textAlign: 'center',
    textDecoration: 'underline'
  },
  root: {
    flexGrow: 1,
  },
  heading: {
    backgroundColor: '#2e7d32',
    paddingBottom: '1rem',
    paddingTop: '1rem'
  },
  subheading: {
    backgroundColor: '#81c784',
  },
  divider: {
    borderBottomColor: 'black' ,
    borderWidth: '1px'
  }
}))

export default scorecardStyles