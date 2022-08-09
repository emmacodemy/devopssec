import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Delete } from "@mui/icons-material";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  container: {
    width: "70%",
    dispay: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    position: "relative",
    borderRadius: 12,
    backgroundColor: "#fff",
  },
  delete: {
    width: "20%",
    position: "relative",
    backgroundColor: "#f9a109",
    border: 12,
    height: "100%",
    display: 'none',
    outline: 'none',
    border: 'none',
  },
  control: {
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    position: "relative",
  },
  minus: {
    width: "20%",
    color: "#f9a109",
    height: "100%",
    position: "relative",
    display: 'none',
  },
  quantity: {
    width: "40%",
    color: "#f9a109",
    height: "85%",
    position: "relative",
    backgroundColor: "transparent",
    border: "2px solid #f9a109",
  },
}));

const ItemControl = ({ quantity }) => {
  const classes = useStyles();

  const cart = useSelector((state) =>  state.cart)
  
  const { cartName } = cart
  return (
    <Box className={`${classes.container} display`}>
      {cartName.length === 0 && (
        <button className={classes.delete}>
          {" "}
          <Delete style={{ color: "#fff" }} />{" "}
        </button>
      )}

      <Box className={classes.control}>
        {cartName.length === 0 && <p className={classes.minus}> - </p>}
        <h5 className={classes.quantity}>`${quantity} pcs`</h5>
        {cartName.length === 0 && <p className={classes.minus}> + </p>}
      </Box>
    </Box>
  );
};

export default ItemControl;
