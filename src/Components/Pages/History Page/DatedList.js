import React from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import List from "./List";

const useStyles = makeStyles(() => ({
  container: {
    width: "90%",
    margin: "0 auto",
    position: "relative",
  },
  catContainer: {
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    rowGap: 15,
  },
  topDate: {
    width: "100%",
    textAlign: "left",
    color: "#000",
    fontSize: 16,
    fontWeight: 500,
    position: "relative",
  },
}));

const DatedList = ({ date, cartList }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.catContainer}>
        <h3 className={classes.topDate}>{date}</h3>
        <List list={cartList} />
      </Box>
    </Box>
  );
};

export default DatedList;
