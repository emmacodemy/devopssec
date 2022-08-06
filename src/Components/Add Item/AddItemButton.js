import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import { useDispatch } from "react-redux"

const useStyles = makeStyles(() => ({
  btnCont: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "12vh",
    backgroundColor: "#fafafe",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  saveBtn: {
    backgroundColor: "#f9a109",
    color: "#fff",
    padding: "12px",
    borderRadius: 12,
    border: "none",
    outline: "none",
    fontWeight: 700,
    cursor: "pointer",
  },
  cancelBtn: {
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

const AddItemButton = ({ change, submit, loading }) => {
  const classes = useStyles();

  // const dispatch = useDispatch()

  // const handleDeleteItem =  async (category, id) => {
  //  await dispatch(deleteItemFromAPI(category, id))
  //  change('cart')
  // }
  return (
    <Box className={classes.btnCont}>
      <button onClick={() => change("cart")} className={classes.cancelBtn}>
        cancel
      </button>
      <button
        onClick={() => submit()}
        className={classes.saveBtn}
        disabled={loading ? true : false}
      >
        save
      </button>
    </Box>
  );
};

export default AddItemButton;
