import React from "react";
import { makeStyles } from "@mui/styles";
import { IconButton, Box, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  itemCont: {
    width: "22%",
    position: "relative",
    backgroundColor: "#fff",
    padding: 5,
    boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.05)",
    borderRadius: "12px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    "& .MuiTypography-root": {
      width: "75%",
      height: "100%",
      overflow: "hidden",
      textTransform: "capitalize",
      fontFamily: "QuickSand, sans-serif",
      fontSize: 16,
      fontWeight: "normal",
      color: "#000000",
      textAlign: "left",
    },
    [theme.breakpoints.down("md")]: {
      width: "45%",
    },
  },
}));

const ItemName = ({ itemName, unit, changeView, control }) => {
  const classes = useStyles();

  const useUnit = unit !== null ? unit : "";
  return (
    <Box className={classes.itemCont}>
      <Typography
        onClick={() => {
          changeView("itemDetails");
          control(false);
        }}
      >{`${itemName} ${useUnit}`}</Typography>
      <IconButton>
        {" "}
        <Add />
      </IconButton>
    </Box>
  );
};

export default ItemName;
