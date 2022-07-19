import React from "react";
import { Box } from "@mui/material"
import { makeStyles } from "@mui/styles"
import ItemHeader from "./ItemHeader"

const useStyles = makeStyles(() => ({

}))

const ItemsPage = ({changeView }) => {
  return (
    <Box>
      <ItemHeader />
      <h1>ItemsPage</h1>
      <button
        onClick={() =>
          changeView('itemDetails')
        }
      >
        view details
      </button>
    </Box>
  );
};

export default ItemsPage;
