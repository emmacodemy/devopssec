import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  imageCont: {
    position: "relative",
    width: "100%",
    height: "20vh",
  },
  img: {
    position: "relative",
    width: "100%",
    height: "100%",
    objectFit: "center",
    borderRadius: 25,
  },
}));

const ItemImage = ({ image }) => {
  const classes = useStyles();
  return (
    <Box className={classes.imageCont}>
      <img src={image && image} alt="item-img" className={classes.img} />
    </Box>
  );
};

export default ItemImage;