import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ItemHeader from "./ItemHeader";
import CategoryItem from "./CategoryItem";
import { useSelector, useDispatch } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { getAllCategory } from "../../../Store/itemspagereducer/thunkCreators";

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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },

  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    rowGap: 10,
    width: "100%",
    height: "100%",
  },
}));

const ItemsPage = ({ changeView, alert }) => {
  const classes = useStyles();

  const all_items = useSelector((state) => state.items);

  const { isLoading, list } = all_items;

  const [itemList, setItemList] = useState(list);

  const dispatch = useDispatch();

  const handleSearch = (itemName) => {
    const filteredList = list.filter((item) =>
      item.items.some((el) => el.name.toLowerCase().includes(itemName.toLowerCase()))
    );
    if (itemName === "") {
      setItemList(list);
      return;
    }
    setItemList(filteredList);
  };

  const handleAside = useOutletContext();

  useEffect(() => {
    dispatch(getAllCategory());
    setItemList(list);
  }, [list]);

  return (
    <Box className={classes.itemsPage}>
      <ItemHeader handleSearch={handleSearch} />
      <Box className={classes.itemsCont}>
        {isLoading ? (
          <Box className={classes.loading}>
            {" "}
            <CircularProgress style={{ style: "#f9a109" }} />
          </Box>
        ) : (
          <Box className={classes.items}>
            {itemList.length > 0 ? (
              <Box className={classes.container}>
                {itemList.map((listItem) => (
                  <CategoryItem
                    key={listItem.category.id}
                    name={listItem.category.name}
                    list={listItem.items}
                    changeView={changeView}
                    control={handleAside}
                    alert={alert}
                  />
                ))}
              </Box>
            ) : (
              <h1>No Items </h1>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ItemsPage;
