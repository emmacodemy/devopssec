import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import img from "../../assests/source.svg";

const useStyles = makeStyles(() => ({
  addContainer: {
    position: "relative",
    width: "80%",
    height: "22.5%",
    margin: "25px auto 0 auto",
    display: "flex",
    backgroundColor: "#80485b",
    borderRadius: 24,
  },
  imgContainer: {
    width: "20%",
    position: "absolute",
    left: "5%",
    top: "-13.5%",
    height: "100%",
  },
  img: {
    position: "relative",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  addBtn: {
    position: "absolute",
    width: "70%",
    right: 0,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  btn: {
    padding: 10,
    width: "60%",
    borderRadius: 12,
    backgroundColor: "#fff",
    color: "#000",
    border: "none",
    outline: "none",
    fontWeight: "600",
    cursor: "pointer",
  },

  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "normal",
  },
}));

const Add = ({ changeView }) => {
  const classes = useStyles();
  return (
    <Box className={classes.addContainer}>
      <Box className={classes.imgContainer}>
        <img src={img} alt="add-item-icon" className={classes.img} />
      </Box>
      <Box className={classes.addBtn}>
        <h3 className={classes.text}>Didn't find what you need?</h3>
        <button onClick={() => changeView("addItem")} className={classes.btn}>
          Add Item
        </button>
      </Box>
    </Box>
  );
};

export default Add;
