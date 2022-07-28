import React from "react";
import { useSelector } from "react-redux";
import { Box, CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ItemControl from "./ItemControl";
import ItemImage from "./ItemImage";
import Name from "./Name";

const useStyles = makeStyles(() => ({
  container: {
    width: "80%",
    height: "100%",
    position: "relative",
    margin: "0 auto",
  },
  loading: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  detailsCont: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    rowGap: 20,
    alignItems: "center",
  },
}));

const ItemDetails = ({ changeView }) => {
  const classes = useStyles();

  const details = useSelector((state) => state.items);

  const {
    loadingItems,
    itemDetails: { cat_name, item_details },
  } = details;

  return (
    <Box className={classes.container}>
      {loadingItems ? (
        <Box className={classes.loading}>
          {" "}
          <CircularProgress style={{ style: "#f9a109" }} />
        </Box>
      ) : (
        <Box className={classes.detailsCont}>
          <ItemControl control={changeView} />
          <ItemImage image={item_details.image} />
          <Name
            itemName={item_details.name}
            description={item_details.description}
            categoryName={cat_name}
          />
        </Box>
      )}
    </Box>
  );
};

export default ItemDetails;
