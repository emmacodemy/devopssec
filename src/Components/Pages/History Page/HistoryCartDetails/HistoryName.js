import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  itemCont: {
    width: "22%",
    position: "relative",
    backgroundColor: "#fff",
    padding: 2.5,
    boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.05)",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    "& .MuiTypography-root": {
      width: "75%",
      overflowWrap: "break-word",
      fontFamily: "QuickSand, sans-serif",
      fontSize: 16,
      marginLeft: 10,
      fontWeight: "bold",
      textTransform: "capitalize",
      color: "#000",
      textAlign: "left",
    },
    [theme.breakpoints.down("md")]: {
      width: "45%",
    },
  },
  quant: {
    color: "#f9a109",
    fontSize: 12,
    fontWeight: 700,
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
  },
}));

const HistoryName = ({ itemName, unit, quantity }) => {
  const classes = useStyles();

  const useUnit = unit === null ? "" : unit;

  return (
    <Box className={classes.itemCont}>
      <Typography>{`${itemName} ${useUnit}`}</Typography>
      <p className={classes.quant}>{`${quantity} pcs`}</p>
    </Box>
  );
};

export default HistoryName;
