import React from "react";
import  { Box } from '@mui/material'
import { makeStyles } from "@mui/styles"
import Add from "./Add";

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
  return (
    <Box className ={classes.root}>
      <Box className={classes.mainCart}>
        <Add changeView={changeSideView} />
      {/* <h1>CartPage rendered</h1>
      <button
        onClick={() =>
          changeSideView('addItem')
        }
      >
        addItem
      </button> */}
      </Box>
      <Box className={classes.btnCont}>

      </Box>
      
    </Box>
  );
};

export default Cart;
