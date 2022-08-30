import React from "react";
import { makeStyles } from "@mui/styles";
import { fetchItemDetails } from "../../../Store/itemspagereducer/thunkCreators";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, Box, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";
import { createNewCartItem } from "../../../Store/cartreducer/thunkCreator";

const useStyles = makeStyles((theme) => ({
  itemCont: {
    width: "22%",
    position: "relative",
    backgroundColor: "#fff",
    padding: 2.5,
    boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.05)",
    borderRadius: "12px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    "& .MuiTypography-root": {
      width: "75%",
      overflowWrap: "break-word",
      fontFamily: "QuickSand, sans-serif",
      fontSize: 16,
      marginLeft: 10,
      fontWeight: 600,
      textTransform: "capitalize",
      color: "#000",
      textAlign: "left",
    },
    [theme.breakpoints.down("md")]: {
      width: "45%",
    },
  },
}));

const ItemName = ({
  itemName,
  unit,
  changeView,
  control,
  id,
  catName,
  alert,
}) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const sessions = useSelector((state) => state.sessions);

  const cart = useSelector((state) => state.cart);

  const { isSignedIn } = sessions;

  const { cartName } = cart;

  const viewItemDetails = (id) => {
    dispatch(fetchItemDetails(id));
    changeView("itemDetails");
    control(false);
  };

  const addToCart = async () => {
    if (!isSignedIn) {
      alert("Please sign in to add item to cart", "info");
      return;
    }
    if (cartName.length === 0) {
      await dispatch(createNewCartItem(itemName, catName, unit));
      changeView("cart");
    }
  };

  const useUnit = unit !== null ? unit : "";
  return (
    <Box className={classes.itemCont}>
      <Typography
        onClick={() => viewItemDetails(id)}
      >{`${itemName} ${useUnit}`}</Typography>
      <IconButton onClick={() => addToCart()}>
        {" "}
        <Add style={{ transform: "scale(0.7)", fontWeight: "normal" }} />
      </IconButton>
    </Box>
  );
};

export default ItemName;
