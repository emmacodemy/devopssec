import React from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import HistoryHeader from "./HistoryHeader";
import DatedList from "./DatedList";
import Loading from "../../Loading";

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    position: "relative"
    display: "flex",
    height: "100%",
    flexDirection: "column",
    rowGap: 25,
  },

  list: {
    width: "100%",
    display: 'flex',
    position: "relative",
    overflowY:"scroll",
    alignItems: 'center',
    justifyContent: 'center',
    height: "80%"
  }
}));

const HistoryCart = () => {
  const classes = useStyles();

  const allCart = useSelector((state) => state.history);

  const { history, isLoading } = allCart;
  return (
    <Box className={classes.container}>
      <HistoryHeader />
      {isLoading ? (
        <Loading />
      ) : (
        <Box className={classes.list}>
          {Object.keys(history).length === 0 ? (
            <h1>No Completed cart, Please shop with us</h1>
          ) : (
            Object.keys(history).map((key) => (
              <DatedList key={key} date={key} cartList={history[key]} />
            ))
          )}
        </Box>
      )}
    </Box>
  );
};

export default HistoryCart;
