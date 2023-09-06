import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0078D4",
      dark: "#0063C6",
    },
    secondary: {
      main: "#F0F0F0",
      light: "#FAFAFA",
    },
    text: {
      secondary: "#243648",
      disabled: "#999999",
    },
    info: {
      "500": "#50BFA5",
    },
    background: {
      paper: "#FFF5E9",
      default: "#16AD5B",
    },
  },
});

export default theme;
