import React, { useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ItemHeader from "./ItemHeader";
import CategoryItem from "./CategoryItem";
import { useSelector, useDispatch } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { getAllCategory } from "../../../Store/itemspagereducer/thunkCreators"

const useStyles = makeStyles((theme) => ({
  itemsPage: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    rowGap: 50,
  },
  loading: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  itemsCont: {
    position: "relative",
    width: "100%",
    height: "75%",
    overflow: "scroll",
    [theme.breakpoints.down("md")]: {
      height: "90%",
    },
  },

  items: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    rowGap: 25,
    width: "100%",
    height: "100%",
  },
}));

const ItemsPage = ({ changeView }) => {
  const classes = useStyles();

  const all_items = useSelector((state) => state.items);

  const dispatch = useDispatch();

  const { isLoading, list } = all_items;

  const handleAside = useOutletContext();

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  return (
    <Box className={classes.itemsPage}>
      <ItemHeader />
      <Box className={classes.itemsCont}>
        {isLoading ? (
          <Box className={classes.loading}>
            {" "}
            <CircularProgress style={{ style: "#f9a109" }} />
          </Box>
        ) : (
          <Box className={classes.items}>
            {list.map((listItem) => (
              <CategoryItem
                key={listItem.category}
                name={listItem.category}
                list={listItem.items}
                changeView={changeView}
                control={handleAside}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ItemsPage;
