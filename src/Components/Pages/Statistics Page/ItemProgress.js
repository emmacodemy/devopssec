import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ProgressBar from "./Progress";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    rowGap: 15,
  },
  statContainer: {
    position: "relative",
    width: "45%",
    display: "flex",
    flexDirection: "column",
    height: "90%",
    rowGap: 10,
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
}));

const ItemProgress = ({ itemList, total, header, color }) => {
  const classes = useStyles();
  return (
    <Box className={classes.statContainer}>
      <h2>{header}</h2>
      <Box className={classes.container}>
        {itemList.map((item) => (
          <ProgressBar
            value={item.value}
            total={total}
            color={color}
            name={item.name}
            key={item.name}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ItemProgress;
