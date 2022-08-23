import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import img from "../../assests/cart.svg";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: "73.5%",
    margin: "0 auto",
    backgroundImage: `url(${img})`,
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
  },
  text: {
    fontWeight: 800,
    fontSize: "24px",
  },
}));

const NoItem = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <p className={classes.text}>No Items</p>
    </Box>
  );
};

export default NoItem;
