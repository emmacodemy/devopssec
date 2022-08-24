import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontSize: 18,
    button: {
      textTransform: "none",
      letterSpacing: 0,
      fontWeight: "bold",
    },
  },
  overrides: {
    MuiBaseInput: {
      input: {
        fontWeight: "normal",
      },
    },
  },
  palette: {
    primary: { main: "#f9a109" },
    secondary: { main: "#fff0de" },
  },
});
