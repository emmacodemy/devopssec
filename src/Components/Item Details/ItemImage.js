import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  imageCont: {
    position: "relative",
    width: 250.43,
    height: 169.69,
  },
  img: {
    position: "relative",
    width: "100%",
    height: "100%",
    objectFit: "cover",
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
