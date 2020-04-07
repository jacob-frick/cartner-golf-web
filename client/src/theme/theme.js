import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
ThemeProvider = createMuiTheme({
  overrides: {
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
  },
  themeName: "theme",
  themeFile: "theme.json",
  badge: {
    primaryColor: "#00b8d4",
    secondaryColor: "#e53935"
  }
});
export default ThemeProvider