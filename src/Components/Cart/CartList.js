import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CartListName from "./CartListName";

const useStyles = makeStyles(() => ({
  listCont: {
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: 'column',
    rowGap: 5,
  },
}));

const CartList = ({ list, category }) => {
  const classes = useStyles();
  return (
    <Box className={classes.listCont}>
      {list.map((item) => (
        <CartListName
          id={item.id}
          key={item.id}
          name={item.name}
          unit={item.measurement_unit}
          catName={category}
          quantity={item.quantity}
          selected={item.selected}
        />
      ))}
    </Box>
  );
};

export default CartList;