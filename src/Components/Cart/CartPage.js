import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CartCategoryItem from "./CartCategoryItem";

const useStyles = makeStyles(() => ({}));

const CartPage = () => {
  const classes = useStyles();
  return (
    <Box>
      {cartItems.map((el) => (
        <CartCategoryItem
          catName={el.category}
          list={el.items}
          key={el.category}
        />
      ))}
    </Box>
  );
};

export default CartPage;
