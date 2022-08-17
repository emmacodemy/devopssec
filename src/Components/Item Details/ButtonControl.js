import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromAPI } from "../../Store/itemspagereducer/thunkCreators";
import { createNewCartItem } from "../../Store/cartreducer/thunkCreator";

const useStyles = makeStyles(() => ({
  btnCont: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "12vh",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  addBtn: {
    backgroundColor: "#f9a109",
    color: "#fff",
    padding: "12px 8px",
    borderRadius: 12,
    border: "none",
    outline: "none",
    fontWeight: 700,
    cursor: "pointer",
  },
  deleteBtn: {
    backgroundColor: "transparent",
    color: "#34333a",
    padding: "12px 8px",
    borderRadius: 12,
    border: "none",
    outline: "none",
    fontWeight: 700,
    cursor: "pointer",
  },
}));

const ButtonControl = ({ cat_name, id, change, name, unit, alert }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const sessions = useSelector((state) => state.sessions)

  const { isSignedIn } = sessions 

  const handleDeleteItem = async (category, id) => {
    await dispatch(deleteItemFromAPI(category, id));
    change("cart");
  };

  const addItem = () => {
    if(!isSignedIn) {
      alert('Please sign in to add item to cart', 'info')
      return;
    }
    dispatch(createNewCartItem(name, cat_name, unit))
  }


  return (
    <Box className={classes.btnCont}>
      <button
        onClick={() => handleDeleteItem(cat_name, id)}
        className={classes.deleteBtn}
      >
        delete
      </button>
      <button
        onClick={() => addItem() }
        className={classes.addBtn}
      >
        Add to list
      </button>
    </Box>
  );
};

export default ButtonControl;
