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
    borderColor: 'green',
    color: 'green'
  }
}));

export default courseInviteStyles