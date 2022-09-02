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
    "& .MuiTypography-root": {
      fontFamily: "QuickSand, sans-serif",
      fontWeight: "bold",
      fontSize: "14px",
      color: "#828282",
      textTransform: "capitalize",
    },
  },

  container: {
    width: "100%",
    margin: "0 auto",
    position: "relative",
  },
}));

const CartCategoryItem = ({ catName, list, alert }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      {list.length > 0 && (
        <Box className={classes.catItems}>
          <CategoryName name={catName} />
          <CartList list={list} category={catName} alert={alert} />
        </Box>
      )}
    </Box>
  );
};

export default CartCategoryItem;
