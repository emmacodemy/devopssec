import React from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const useStyles = makeStyles(() => ({
  buttonContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  form: {
    width: "80%",
    position: "relative",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "100%",
    position: "relative",
    padding: "12px",
    fontSize: 16,
    color: "#000"
  },
  submit: {
    position: "absolute",
    right: 1,
    top: 6,
    bottom: 0,
    fontWeight: 700,
    padding: "9px 23px 9px 23px",
    borderRadius: 13,
    color: '#fff',
    backgroundColor: "#f9a109",
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    "&:disabled": {
        backgroundColor: '#c1c1c4',
        cursor: "not-allowed"
    }
  },
}));

const CartButton = ({ cart }) => {
  const classes = useStyles()
  return (
    <Box className={classes.buttonContainer}>
      <form className={classes.form}>
        <input
          type="text"
          className={classes.input}
          required
          placeholder="Enter a name"
        />
        <button
          disabled={cart.length > 0 ? false : true}
          className={classes.submit}
        >
          Save
        </button>
      </form>
    </Box>
  );
};

export default CartButton;
