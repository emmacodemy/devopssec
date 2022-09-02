import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CartListName from "./CartListName";

const useStyles = makeStyles(() => ({
  listCont: {
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    rowGap: 5,
  },
}));

const CartList = ({ list, category, alert }) => {
  const classes = useStyles();
  return (
    <Box className={classes.listCont}>
      {list.map((item) => (
        <CartListName
          id={item.id}
          key={item.id}
          name={item.itemName}
          unit={item.unit}
          catName={category}
          quantity={item.quantity}
          selected={item.selected}
          alert={alert}
        />
      ))}
    </Box>
  );
};

export default CartList;
