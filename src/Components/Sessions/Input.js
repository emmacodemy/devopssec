import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, FormControl, TextField } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  search: {
    width: "100%",
    display: "flex",
    margin: "0 auto",
    backgroundColor: "#fff",
    padding: 0,
    boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.04)",
    borderRadius: "12px",
  },
}));

const Input = ({ ariaLabel, label, name, type, placeholder, handle }) => {
  const classes = useStyles();

  return (
    <Box>
      <FormControl margin="normal" className={classes.search}>
        <TextField
          inputProps={{
            style: {
              padding: 10,
            },
          }}
          aria-label={ariaLabel}
          label={label}
          name={name}
          type={type}
          placeholder={placeholder}
          required
          onInput={(e) => handle(e)}
        />
      </FormControl>
    </Box>
  );
};

export default Input;
