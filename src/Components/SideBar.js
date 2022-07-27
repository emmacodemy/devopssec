import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AddItem from "./Add Item/AddItem";
import Cart from "./Cart/Cart";
import ItemDetails from "./Item Details/ItemDetails";

const useStyles = makeStyles(() => ({
  sideBar: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
  },
}));

const SideBar = ({ cart, addItem, details, changeView }) => {
  const classes = useStyles();
  return (
    <Box className={classes.sideBar}>
      {cart && <Cart changeSideView={changeView} />}
      {addItem && <AddItem changeView={changeView} />}
      {details && <ItemDetails changeView={changeView} />}
    </Box>
  );
};

export default SideBar;
