import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const useStyles = makeStyles(() => ({
  welcomeText: {
    color: "#000000",
    fontFamily: "QuickSand, sans-serif",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 26,
  },
}));

const Title = ({ text }) => {
  const classes = useStyles();
  return <Typography className={classes.welcomeText}>{text}</Typography>;
};

export default Title;
