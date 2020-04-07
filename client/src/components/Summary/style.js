import { makeStyles } from '@material-ui/core/styles';
const summaryStyle = makeStyles((theme) => ({
  center: {
    textAlign: 'center'
  },
  underline: {
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
    borderBottomColor: 'black',
    borderWidth: '1px'
  },
  padBot: {
    paddingBottom: '1rem'
  },
  min: {
    minWidth: 650
  }
}))

export default summaryStyle