import React from "react";
import { makeStyles } from "@mui/styles";
import {
    Grid,
    FormControl,
    TextField,
  } from "@mui/material";

const useStyles = makeStyles(() => ({
    search: {
        width:'80%',
        backgroundColor: '#fff',
        padding: 0,
        boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.04)',
        borderRadius: '12px',
    }
}))

const Input = ({ ariaLabel, label, name, type, placeholder, className }) => {
  const classes = useStyles()
  return (
    <Grid>
      <FormControl margin="normal" className={classes.search}>
        <TextField
          aria-label={ariaLabel}
          label={label}
          name={name}
          type={type}
          placeholder={placeholder}
        />
      </FormControl>
    </Grid>
  );
};

export default Input;