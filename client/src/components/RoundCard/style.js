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
    flexBasis: `${100/19}`
  },
  holeStylePhone : {
    flexBasis: '10%'
  }
}))

export default roundCardStyles