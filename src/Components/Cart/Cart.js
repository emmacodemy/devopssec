import React from "react";
import  { Box } from '@mui/material'
import { makeStyles } from "@mui/styles"
import { useSelector  } from "react-redux";
import Add from "./Add";
import NoItem from "./NoItem";
import CartButton from "./CartButton";
import CartPage from "./CartPage";
import Loading from "../Loading"

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    rowGap: 30,
  },

  mainCart: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: '#fff0de',
  },
  btnCont: {
    backgroundColor:'#fff',
    position: 'relative',
    height: '15%',
    width: '100%',
  }
}))

const Cart = ({ changeSideView }) => {
  const classes = useStyles()

  const cart = useSelector((state) => state.cart)

  const { cartItems, isLoading } = cart
  return (
    <Box className ={classes.root}>
      <Box className={classes.mainCart}>
        <Add changeView={changeSideView} />
        {
          cartItems.length > 0 ? <CartPage cartItems={cartItems} /> : <NoItem />
        }
        
      </Box>
      <Box className={classes.btnCont}>
        {
          isLoading ? <Loading /> : <CartButton cart={cartItems} />
        }
      </Box>
      
    </Box>
  );
};

export default Cart;
