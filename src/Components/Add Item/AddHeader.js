import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  header: {
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "flex-start",
  },
  title: {
    color: "#000",
    fontSize: 24,
    fontWeight: 500,
  },
}));

const AddHeader = () => {
  const classes = useStyles();
  return (
    <Box className={classes.header}>
      <h2 className={classes.title}>Add a new Item</h2>
    </Box>
  );
};

export default AddHeader;
