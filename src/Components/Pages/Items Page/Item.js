import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ItemName from "./ItemName";

const useStyles = makeStyles(() => ({
  listCont: {
    width: "100%",
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    rowGap: 25,
    columnGap: 15,
    justifyContent: "flex-start",
  },
}));

const Item = ({ itemList, changeView, category, sidecontrol }) => {
  const classes = useStyles();
  return (
    <Box className={classes.listCont}>
      {itemList.map((item) => (
        <ItemName
          changeView={changeView}
          id={item.id}
          key={item.id}
          itemName={item.name}
          unit={item.measurement_unit}
          control={sidecontrol}
          catName={category}
        />
      ))}
    </Box>
  );
};

export default Item;
