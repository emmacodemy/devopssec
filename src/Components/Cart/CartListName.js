import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux"
import ItemControl from "./ItemControl";

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  itemName: {
    psoition: 'relative',
    width: '40%',
    overflowWrap: "break-word",
    display: 'flex',
    justifyContent: 'space-between'
  },
  name: {
    color: '#000', 
    textTransform: 'capitalize', 
    fontSize:'18px',
    fontWeight: 500, 
  }
}));

const CartListName = ({ name, quantity, unit, catName, id  }) => {
  const classes = useStyles();

  const cart = useSelector((state) => state.cart)

  const { editingState } = cart
  return (
    <Box className={classes.container}>
      <Box className={classes.itemName}>
        {
          editingState && <input type="checkbox" />
        }
        <p className={classes.name}>{name}</p>
      </Box>
      <ItemControl quantity={quantity} id={id}/>
    </Box>
  );
};

export default CartListName;
