import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CartCategoryItem from "./CartCategoryItem";
import { Edit } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { editState } from "../../Store/cartreducer/cartreducer";

const useStyles = makeStyles(() => ({
  container: {
    width: "80%",
    display: "flex",
    position: "relative",
    flexDirection: "column",
    rowGap: 6,
    margin: "5px auto 0 auto",
  },
  shoppingHeader: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
    alignItems: "center",
  },
  cartList: {
    width: "100%",
    display: "flex",
    height: "50vh",
    overflowY: "scroll",
    position: "relative",
    flexDirection: "column",
    rowGap: 6,
  },
}));

const CartPage = ({ cartItems, name }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const toggleEdit = () => {
    name === "" && dispatch(editState());
  };
  return (
    <Box className={classes.container}>
      <Box className={classes.shoppingHeader}>
        <h3>{name === "" ? "Shopping List" : `${name}`}</h3>
        <Edit
          style={{ color: "#000", cursor: "pointer" }}
          onClick={() => toggleEdit()}
        />
      </Box>
      <Box className={classes.cartList}>
        {cartItems.map((el) => (
          <CartCategoryItem
            catName={el.category}
            list={el.items}
            key={el.category}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CartPage;
