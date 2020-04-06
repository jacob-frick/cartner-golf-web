import { makeStyles } from '@material-ui/core/styles';
const roundCardStyles = makeStyles((theme) => ({
  center: {
    textAlign: 'center'
  },
  underline: {
    textDecoration: 'underline'
  },
  root: {
    flexGrow: 1,
  },
  holeStyle: {
    flexBasis: `${100/19}%`
  },
  holeStylePhoneFront : {
    flexBasis: `${100/11}%`
  },
  holeStylePhoneBack : {
    flexBasis: `${100/11}%`
  },
  input: {
    width: '40%'
  }
}))

export default roundCardStyles