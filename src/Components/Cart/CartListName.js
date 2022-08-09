import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ItemControl from "./ItemControl";

const useStyles = makeStyles(() => ({}));

const CartListName = ({ name, quantity, unit, catName  }) => {
  const classes = useStyles();
  return (
    <Box>
      <Box>
        <input type="checkbox" />
        <p>{name}</p>
      </Box>
      <ItemControl quantity={quantity} />
    </Box>
  );
};

export default CartListName;
