import { makeStyles } from '@material-ui/core/styles';
const recReqDisplayStyles = makeStyles((theme) => ({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
    flexGrow: 1,
    maxWidth: '100%',
    flexBasis: '100%',
    flexWrap: 'wrap',
  },
  listStyle: {
    display: 'contents'
  },
  accept: {
    borderColor: 'green',
    color: 'green',
    marginRight: '1vh',
    // marginLeft: '3rem',
    // marginRight: '10rem',

  },
  avatar: {
    marginTop: 'auto',
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'start',
    marginBottom: 'auto',
    maxWidth: 'fit-content',
    minWidth: 'auto',
  },
  friendName: {
    display: 'inline-flex',
    minWidth: '100%',
    marginLeft: '.2rem',
    flexWrap: 'wrap'

  },
  buttons: {
    left: '6%',
  },
  buttonGroup: {
    '&: hover': {
      backgroundColor: 'transparent',
    }
  },
  container: {
    width: '100%',
    display: 'flex',
    // flexWrap: 'wrap',
    flexBasis: '100%',
    boxSizing: 'borderBox',

  },
  buttonStylePhone: {
    display: 'table',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}))

export default recReqDisplayStyles