import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ItemControl from "./ItemControl";
import ItemImage from "./ItemImage";
import Name from "./Name";
import ButtonControl from "./ButtonControl";
import Loading from "../Loading";


const useStyles = makeStyles(() => ({
  container: {
    width: "80%",
    height: "100%",
    position: "relative",
    margin: "0 auto",
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

const ItemDetails = ({ changeView, alertMessage }) => {
  const classes = useStyles();

  const details = useSelector((state) => state.items);

  const {
    loadingItems,
    itemDetails: { cat_name, item_details },
  } = details;

  return (
    <Box className={classes.container}>
      {loadingItems ? (
        <Loading />
      ) : (
        <Box className={classes.detailsCont}>
          <ItemControl control={changeView} />
          <ItemImage image={item_details.image} />
          <Name
            itemName={item_details.name}
            description={item_details.description}
            categoryName={cat_name}
          />
          <ButtonControl change={changeView} cat_name={cat_name} id={item_details.id} load={loadingItems} displayAlert={alertMessage}/>
        </Box>
      )}
    </Box>
  );
};

export default ItemDetails;
