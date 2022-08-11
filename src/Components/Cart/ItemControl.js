import React, { useState } from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Delete } from "@mui/icons-material";
import { useSelector } from "react-redux";
import "./cart.css";

const useStyles = makeStyles(() => ({
  container: {
    width: "55%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    height: 35,
    position: "relative",
    borderRadius: 12,
    cursor: 'pointer'
  },
  delete: {
    width: "20%",
    position: "relative",
    backgroundColor: "#f9a109",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    height: "100%",
    display: "none",
    outline: "none",
    border: "none",
    transition: "all 0.5s",
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
    fontSize: "23px",
    fontWeight: 800,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    display: "none",
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    transition: "all 0.5s",
  },
  quantity: {
    width: "50%",
    color: "#f9a109",
    height: "85%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    backgroundColor: "transparent",
    border: "2px solid #f9a109",
    borderRadius: 12,
  },
}));

const ItemControl = ({ quantity, id }) => {
  const classes = useStyles();

  const cart = useSelector((state) => state.cart);

  const { editingState } = cart;

  const [itemId, setItemId] = useState("");

  const showControl = () => {
    setItemId(id);
  };

  return (
    <Box
      onMouseOver={() => showControl()}
      onMouseLeave={() => setItemId("")}
      className={
        itemId === id ? `${classes.container} display` : classes.container
      }
    >
      {!editingState && (
        <button className={classes.delete}>
          {" "}
          <Delete style={{ color: "#fff", transform: "scale(0.5)", fontWeight: 400}} />{" "}
        </button>
      )}

      <Box className={classes.control}>
        { !editingState && <button className={classes.minus}> - </button>}
        <h5 className={classes.quantity}>{`${quantity} pcs`}</h5>
        { !editingState && <button className={classes.minus}> + </button>}
        
      </Box>
    </Box>
  );
};

export default ItemControl;
