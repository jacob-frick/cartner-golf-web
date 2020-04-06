import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    primary1Color: "#4caf50",
    primary2Color: "#81c784",
    primary3Color: "#ffca28",
    accent1Color: "#ff7043",
    accent2Color: "#3f51b5",
    accent3Color: "#d84315",
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
  themeName: "lightTheme",
  themeFile: "theme.json",
  badge: {
    primaryColor: "#00b8d4",
    secondaryColor: "#e53935"
  }
});

function Theme() {
  return (
    <ThemeProvider theme={theme}>

    </ThemeProvider>
  );
}

export default Theme;

