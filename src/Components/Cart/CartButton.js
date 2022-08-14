import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createNewCart } from "../../Store/cartreducer/thunkCreator";

const useStyles = makeStyles(() => ({
  buttonContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  form: {
    width: "80%",
    position: "relative",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "100%",
    position: "relative",
    padding: "12px",
    fontSize: 16,
    color: "#000"
  },
  submit: {
    position: "absolute",
    right: 1,
    top: 6,
    bottom: 0,
    fontWeight: 700,
    padding: "9px 23px 9px 23px",
    borderRadius: 13,
    color: '#fff',
    backgroundColor: "#f9a109",
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    "&:disabled": {
        backgroundColor: '#c1c1c4',
        cursor: "not-allowed"
    }
  },
}));

const CartButton = ({ cart, alert }) => {
  const classes = useStyles()

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const sessions = useSelector((state) => state.sessions)

  const { isSignedIn } = sessions

  const [ cartName, setCartName] = useState('')

  const handleSubmit = (e) => {
    if(isSignedIn) {
      e.preventDefault()
      dispatch(createNewCart(cartName))
    } else {
      navigate("/login")
      alert("Please sign in to continue", "info")
    }
    
  }
  return (
    <Box className={classes.buttonContainer}>
      <form onSubmit={(e) => handleSubmit(e)} className={classes.form}>
        <input
          type="text"
          className={classes.input}
          required
          placeholder="Enter a name"
          onInput={(e) => setCartName(e.target.value)}
        />
        <button
          disabled={cart.length > 0 ? false : true}
          className={classes.submit}
        >
          Save
        </button>
      </form>
    </Box>
  );
};

export default CartButton;
