import { makeStyles } from '@material-ui/core/styles'
// import { createMuiTheme } from '@material-ui/core/styles';
// const theme = createMuiTheme({
//   "palette": {
//     "overrides": {
//       "primary1Color": "#4caf50",
//       "primary2Color": "#81c784",
//       "primary3Color": "#ffca28",
//       "accent1Color": "#ff7043",
//       "accent2Color": "#3f51b5",
//       "accent3Color": "#d84315",
//       "textColor": "#000000",
//       "secondaryTextColor": "#ffffff",
//       "alternateTextColor": "#ffffff",
//       "canvasColor": "#ffffff",
//       "alternateСanvasColor": "#212121",
//       "alternate1Color": "rgba(255, 255, 255, 0.54)",
//       "alternate2Color": "#f5f5f5",
//       "borderColor": "#757575",
//       "disabledColor": "rgba(0,0,0,0.3)",
//       "pickerHeaderColor": "#00bcd4",
//       "clockCircleColor": "#f44336",
//       "shadowColor": "rgba(0,0,0,1)"
//     },
//     "themeName": "lightTheme",
//     "themeFile": "lightTheme.json",
//     "badge": {
//       "primaryColor": "#00b8d4",
//       "secondaryColor": "#e53935"
//     }
//   }
// })

// import DrawerContext from '../../utils/DrawerContext'

const drawerWidth = 240;

const appbarStyles = makeStyles((theme) => ({

  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    backgroundColor: '#4caf50',
    // background: 'linear-gradient(45deg, #37c0c0 16%, rgba(110, 5, 176, 0.8) 99%);'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  }
}));

export default appbarStyles