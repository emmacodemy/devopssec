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
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    flexDirection: "column",
    rowGap: 25,
  },

  listCont: {
    position: "relative",
    height: "90%",
    width: "100%",
    overflow: "scroll",
  },

  list: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    weight: "100%",
  },
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
        <Box className={classes.listCont}>
          <Box className={classes.list}>
            {Object.keys(history).length === 0 ? (
              <h1>No Completed cart, Please shop with us</h1>
            ) : (
              Object.keys(history).map((key) => (
                <DatedList key={key} date={key} cartList={history[key]} />
              ))
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default HistoryCart;
