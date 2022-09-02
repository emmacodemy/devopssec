import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import ItemControl from "./ItemControl";
import { editItem } from "../../Store/cartreducer/cartreducer";

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  itemName: {
    position: "relative",
    width: "43%",
    display: "flex",
    columnGap: "10px",
  },
  name: {
    color: "#000",
    textTransform: "capitalize",
    fontSize: "16px",
    fontWeight: "bold",
    width: "100%",
    overflowWrap: "break-word",
  },
  edit: {
    textDecoration: "line-through",
  },
}));

const CartListName = ({
  name,
  quantity,
  unit,
  catName,
  id,
  selected,
  alert,
}) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const handleInput = (e) => {
    dispatch(editItem(catName, id, e.target.checked));
    if (e.target.checked) {
      alert(`${name} will be removed from shopping List`, "success");
    }
  };

  const { editingState } = cart;
  return (
    <Box className={classes.container}>
      <Box className={classes.itemName}>
        {editingState && (
          <input
            type="checkbox"
            className="input"
            onChange={(e) => handleInput(e)}
            value={selected}
          />
        )}
        <p
          className={
            selected ? `${classes.name} ${classes.edit}` : classes.name
          }
        >
          {`${name} ${unit}`}
        </p>
      </Box>
      <ItemControl quantity={quantity} id={id} category={catName} />
    </Box>
  );
};

export default CartListName;
