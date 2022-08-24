import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Box } from "@mui/material";

const useStyles = makeStyles(() => ({
  nameCont: {
    position: "relative",
    width: "100%",
    "& .MuiTypography-root": {
      fontFamily: "QuickSand, sans-serif",
      fontWeight: "bold",
      fontSize: "18px",
      color: "#000",
      textTransform: "capitalize",
    },
  },
}));

const CategoryName = ({ name }) => {
  const classes = useStyles();
  return (
    <Box className={classes.nameCont}>
      <Typography>{name}</Typography>
    </Box>
  );
};

export default CategoryName;
