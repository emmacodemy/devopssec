import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "90%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "5%",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      height: "5%",
    },
  },

  titleCont: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    "& .MuiTypography-root": {
      fontSize: 26,
      color: "#34333a",
      fontWeight: 700,
      marginTop: 10,
      fontFamily: "QuickSand, sans-serif",
    },
  },
}));

const HistoryHeader = () => {
  const classes = useStyles();

  return (
    <Box className={classes.header}>
      <Box className={classes.titleCont}>
        <Typography>Shopping history</Typography>
      </Box>
    </Box>
  );
};

export default HistoryHeader;
