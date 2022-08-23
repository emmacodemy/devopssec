import React from "react";
import HistoryName from "./HistoryName";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  cartListCont: {
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    rowGap: 15,
  },
  listCont: {
    width: "100%",
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    rowGap: 15,
    columnGap: 15,
    justifyContent: "flex-start",
  },
}));

const HistoryCatName = ({ category, list }) => {
  const classes = useStyles();
  return (
    <Box className={classes.cartListCont}>
      <h3 style={{ textTransform: "capitalize" }}>{category.name}</h3>
      <Box className={classes.listCont}>
        {list.map((item) => (
          <HistoryName
            itemName={item.product_name}
            quantity={item.quantity}
            unit={item.measurement_unit}
            key={item.id}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HistoryCatName;
