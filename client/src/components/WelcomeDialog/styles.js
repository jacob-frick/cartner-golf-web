import { makeStyles } from '@material-ui/core/styles'
const WelcomeDialogStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 'auto',
    top: '50% !important',
    left: '55% !important',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  paperCustom: {
    top: '50% !important',
    left: '55% !important',
    minWidth: '10rem',
    border: '1px solid #000',
    borderRadius: '.8rem',
    padding: theme.spacing(2, 4, 3),
    position: 'absolute',
    boxShadow: '-10px - 6px 15px 10px rgba(0, 0, 0, 0.2), 10px 6px 15px 10px rgba(0, 0, 0, 0.14), -10px 6px 15px 6px rgba(0, 0, 0, 0.12)',
    backgroundColor: '#FFF',
    transition: '0.5s',
  },
  dialogStyle: {
    position: "inherit",
    display: 'inherit'
  },
  flipExitIcon: {
    transform: 'rotate(180deg)',
  },
}
))
export default WelcomeDialogStyles 