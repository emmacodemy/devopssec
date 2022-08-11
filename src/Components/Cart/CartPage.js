import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CartCategoryItem from "./CartCategoryItem";
import { Edit } from "@mui/icons-material";

const useStyles = makeStyles(() => ({
    container: {
        width: '80%',
        display: 'flex',
        height: '73.5%',
        overflowY: 'scroll',
        position: 'relative',
        flexDirection: 'column',
        rowGap: 10,
        margin: '0 auto',
    },
    shoppingHeader: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      padding: "10px 0",
      alignItems: 'center',
    }
}));

const CartPage = ({ cartItems }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.shoppingHeader}>
        <h3>Shopping List</h3>
        <Edit style={{color:  "#000"}} />
      </Box>
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
