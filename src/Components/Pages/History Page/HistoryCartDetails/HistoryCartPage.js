import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import HistoryNameHeader from "./HistoryNameHeader";
import HistoryCatName from "./HistoryCatName";

const useStyles = makeStyles(() => ({
  pageCont: {
    width: "90%",
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    rowGap: 20,
    margin: "0 auto",
  },

  listCont: {
    position: "relative",
    height: "70%",
    overflowY: "scroll",
    display: "flex",
    flexDirection: "column",
    rowGap: 20,
    paddingBottom: 20,
  },
}));
const HistoryCartPage = ({ cartName, cartList }) => {
  const classes = useStyles();
  return (
    <Box className={classes.pageCont}>
      <HistoryNameHeader
        name={cartName.name}
        date={cartName.created_at}
        status={cartName.status}
      />
      <Box className={classes.listCont}>
        {cartList.map((item) => (
          <HistoryCatName
            key={item.category.id}
            category={item.category}
            list={item.items}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HistoryCartPage;
