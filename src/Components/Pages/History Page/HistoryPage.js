import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { getCarts } from "../../../Store/historyPage/thunkCreator";

const useStyles = makeStyles(() => ({
  historyPage: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 50,
  },
}));

const HistoryPage = () => {
  const classes = useStyles();

  const session = useSelector((state) => state.sessions);

  const { isSignedIn } = session;

  const dispatch = useDispatch()

  useEffect(() => {
    isSignedIn && dispatch(getCarts())
  }, [])
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
