import { makeStyles } from '@material-ui/core/styles';
const friendDisplayStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '50%',
    padding: '5px 0px',
    // minInlineSize: 'max-content',

  },
  listStyle: {
    display: 'contents',
    marginLeft: '-.5rem'
  },
  buttons: {
    left: '6%',
  },
  buttonGroup: {
    '&: hover': {
      backgroundColor: '#ffffff',
    },
    borderRightColor: '#4caf50',
  },
  removeButton: {
    float: 'left',
  }
}));

export default friendDisplayStyles