import { makeStyles } from '@material-ui/core/styles';
const MenuDropdownStyles = makeStyles((theme) => ({
  accept: {
    borderColor: 'green',
    color: 'green'
  },
  buttons: {
    textAlign: 'center'
  },
  buttonGroup: {
    '&: hover': {
      backgroundColor: '#fff',
    },
    borderRightColor: '#4caf50',
  },
}));

export default MenuDropdownStyles