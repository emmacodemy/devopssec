import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CategoryName from "../Pages/Items Page/CategoryName";
import CartList from "./CartList";

const useStyles = makeStyles(() => ({
  catItems: {
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    rowGap: 5,
  },

  container: {
    width: "100%",
    margin: "0 auto",
    position: "relative",
  },
}));

const CartCategoryItem = ({ catName, list }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      {list.length > 0 && (
        <Box className={classes.catItems}>
          <CategoryName name={catName} />
          <CartList list={list} category={catName} />
        </Box>
      )}
    </Box>
  );
};

export default CartCategoryItem;
