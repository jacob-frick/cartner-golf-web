import { makeStyles } from '@material-ui/core/styles'
const CustomStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    top: '50% !important',
    left: '55% !important',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: "0px !important",
    maxWidth: 600,
    width: "100%",
  },
  paperCustom: {
    top: '50% !important',
    left: '55% !important',
    border: '1px solid #000',
    borderRadius: '.8rem',
    position: 'absolute',
    boxShadow: '-10px - 6px 15px 10px rgba(0, 0, 0, 0.2), 10px 6px 15px 10px rgba(0, 0, 0, 0.14), -10px 6px 15px 6px rgba(0, 0, 0, 0.12)',
    backgroundColor: '#FFF',
    transition: '0.5s',
    padding: "0px !important"
  },
  dialogStyle: {
    position: "inherit",
    display: 'inherit',
    padding: "0px",
  },
  root: {
    padding: "-16px !important"
  }
}
))
export default CustomStyles