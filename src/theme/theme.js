import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontSize: 24,
    // button: {
    //   textTransform: "none",
    //   letterSpacing: 0,
    //   fontWeight: "bold"
    // }
  },
  overrides: {
    MuiInput: {
      input: {
        fontWeight: "bold"
      }
    }
  },
  palette: {
    primary: { main: "#f9a109" },
    secondary: { main: "#fff0de" }
  }
});