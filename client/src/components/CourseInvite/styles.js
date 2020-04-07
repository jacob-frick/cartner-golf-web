import { makeStyles } from '@material-ui/core/styles';

const courseInviteStyles = makeStyles((theme) => ({
  icon: {
    marginTop: 'auto',
    marginBottom: 'auto',
    paddingLeft: '1rem',
  },
  buttons: {
    textAlign: 'center'
  },
  paper: {
    paddingTop: '.8rem',
    paddingBottom: '.5rem',
    paddingRight: '.1rem'
  },
  accept: {
    borderColor: '#4caf50',
    color: '#4caf50',
  },
  buttonGroup: {
    '&: hover': {
      backgroundColor: '#fff',
    },
    borderRightColor: '#4caf50',
  }
}));

export default courseInviteStyles