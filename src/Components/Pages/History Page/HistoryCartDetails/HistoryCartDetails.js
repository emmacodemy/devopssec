import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Loading from "../../../Loading";
import HistoryCartPage from "./HistoryCartPage";
import { getCartDetails } from "../../../../Store/historyPage/thunkCreator";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
}));

const HistoryCartDetails = () => {
  const classes = useStyles();

  const { id } = useParams();

  const dispatch = useDispatch();

  const details = useSelector((state) => state.history);

  useEffect(() => {
    dispatch(getCartDetails(id));
  }, []);

  const { cartName, cartDetails, isLoading } = details;
  return (
    <Box className={classes.root}>
      {isLoading ? (
        <Loading />
      ) : (
        <HistoryCartPage cartName={cartName} cartList={cartDetails} />
      )}
    </Box>
  );
};

export default HistoryCartDetails;
