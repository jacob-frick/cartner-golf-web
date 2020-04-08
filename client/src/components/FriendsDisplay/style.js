import { makeStyles } from '@material-ui/core/styles';
const friendDisplayStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // width: '50%',
    // padding: '5px 0px',
    // minInlineSize: 'max-content',

  },
  listStyle: {
    display: 'contents',
    marginLeft: '-.5rem'
  },
  buttonGroup: {
    '&: hover': {
      backgroundColor: '#ffffff',
    },
    borderRightColor: '#4caf50',
  },
  removeButton: {
    float: 'left',
  },
  buttonStylePhone: {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}));

export default friendDisplayStyles