import { makeStyles } from '@material-ui/core/styles'
const globalStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '-webkit-fill-available',
    palette: {
      primary: "#4caf50",
      primary2: "#81c784",
      primary3: "green",
      accent1: "#ff7043",
      accent2: "#f44336",
      accent3: "#d84315",
      textColor: "#000000",
      secondaryTextColor: "#ffffff",
      alternateTextColor: "#ffffff",
      canvasColor: "#ffffff",
      alternateСanvasColor: "#212121",
      alternate1Color: "rgba(255, 255, 255, 0.54)",
      alternate2Color: "#f5f5f5",
      borderColor: "#757575",
      disabledColor: "rgba(0,0,0,0.3)",
      pickerHeaderColor: "#00bcd4",
      clockCircleColor: "#f44336",
      shadowColor: "rgba(0,0,0,1)"
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    fixedHeight: {
      height: 240,
    },
    content: {
      flexGrow: 1,
      height: '100vh',
      overflowX: 'hide',
    }
  }
}))

export default globalStyles