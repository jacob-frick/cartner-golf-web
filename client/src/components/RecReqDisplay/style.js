import { makeStyles } from '@material-ui/core/styles';
const recReqDisplayStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  listStyle: {
    display: 'contents'
  },
  accept: {
    borderColor: 'green',
    color: 'green'
  },

  buttons: {
    maxwidth: '40%',
    flexBasis: '40%',
    minWidth: '40%',
  }
}));

export default recReqDisplayStyles