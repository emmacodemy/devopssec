import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { getCarts } from "../../../Store/historyPage/thunkCreator";

const useStyles = makeStyles(() => ({
  historyPage: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    rowGap: 50,
  },
}));

const HistoryPage = () => {
  const classes = useStyles();

  const session = useSelector((state) => state.sessions);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCarts())
  })

  const { isSignedIn } = session;
  return (
    <Box className={classes.historyPage}>
      {isSignedIn ? (
        <Outlet />
      ) : (
        <h1>Please sign in so view your shopping history </h1>
      )}
    </Box>
  );
};

export default HistoryPage;
