import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CartLists from "./CartLists";

const useStyles = makeStyles(() => ({
  listCont: {
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    rowGap: 25,
  },
}));

const List = ({ list }) => {
  const classes = useStyles();
  return (
    <Box className={classes.listCont}>
      {list.map((item) => (
        <CartLists
          id={item.id}
          key={item.id}
          title={item.name}
          date={item.created_at}
          status={item.status}
        />
      ))}
    </Box>
  );
};

export default List;
