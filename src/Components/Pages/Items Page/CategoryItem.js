import React from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import CategoryName from "./CategoryName";
import Item from "./Item";

const useStyles = makeStyles(() => ({
  container: {
    width: "90%",
    margin: "0 auto",
    position: "relative",
  },
  catContainer: {
    position: 'relative',
    width: '100%',
    display: "flex",
    flexDirection: "column",
    rowGap: 15,
  }
}));

const CategoryItem = ({ name, list, changeView, control }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      {list.length > 0 && (
        <Box className={classes.catContainer}>
          <CategoryName name={name} />
          <Item
            itemList={list}
            changeView={changeView}
            category={name}
            sidecontrol={control}
          />
        </Box>
      )}
    </Box>
  );
};

export default CategoryItem;
