import React from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import {
  completeCartShopping,
  updateCartName,
} from "../../Store/cartreducer/thunkCreator";

const useStyles = makeStyles(() => ({
  buttonContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 20,
  },
  cancelBtn: {
    position: "relative",
    backgroundColor: "transparent",
    width: 50,
    border: "none",
    cursor: "pointer",
    outline: "none",
    height: 20,
    color: "#34333a",
    fontWeight: 700,
  },
  completeBtn: {
    position: "relative",
    backgroundColor: "#56ccf2",
    width: 117,
    height: 58,
    borderRadius: 12,
    color: "#fff",
    fontWeight: 700,
    border: "none",
    outline: "none",
    cursor: "pointer",
  },
}));

const CompleteButon = ({ cart }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const carts = useSelector((state) => state.cart);

  const { cartName } = carts;

  const completeShopping = async (action) => {
    await dispatch(updateCartName(cartName, action, false));
    dispatch(completeCartShopping(cart));
    
  };

  return (
    <Box className={classes.buttonContainer}>
      <button
        className={classes.cancelBtn}
        onClick={() => completeShopping("cancelled")}
      >
        cancel
      </button>
      <button
        className={classes.completeBtn}
        onClick={() => completeShopping("completed")}
      >
        complete
      </button>
    </Box>
  );
};

export default CompleteButon;
