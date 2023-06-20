import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
  palette: {
    primary: {
      light: "#2196f3",
      main: "#3f51b5",
      dark: "#2c387e",
      contrastText: "#fff",
    },

    secondary: {
      light: "#ff9100",
      main: "#E25115",
      dark: "#ba000d",
      contrastText: "#b22a00",
    },
  },
});

export default baseTheme;
