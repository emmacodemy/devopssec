import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { fetchStatistics } from "../../../Store/StatPage/thunkCreators";
import ItemProgress from "./ItemProgress";
import Loading from "../../Loading";
import Rechart from "./Rechart";

const useStyles = makeStyles((theme) => ({
  statPage: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  root: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  statCont: {
    position: "relative",
    width: "90%",
    margin: "0 auto",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      rowGap: 50,
    },
  },
  stats: {
    position: "relative",
    width: "100%",
    height: "40%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      marginTop: 20,
    },
  },
}));

const StatisticsPage = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const stat = useSelector((state) => state.statistics);

  const session = useSelector((state) => state.sessions);

  const { isSignedIn } = session;

  const { itemStats, categoryStats, totalCount, loading, graphData } = stat;

  useEffect(() => {
    isSignedIn && dispatch(fetchStatistics());
  }, []);
  return (
    <Box className={classes.root}>
      {!isSignedIn ? (
        <h2 style={{ width: "90%", margin: "0 auto", textAlign: "center" }}>
          {" "}
          Please sign in to view your shopping statistics
        </h2>
      ) : (
        <Box className={classes.statPage}>
          {loading ? (
            <Loading />
          ) : (
            <Box className={classes.statCont}>
              <Box className={classes.stats}>
                <ItemProgress
                  itemList={itemStats}
                  header="Top Items"
                  color="#f9a109"
                  total={totalCount}
                />
                <ItemProgress
                  itemList={categoryStats}
                  header="Top Categories"
                  color="#56ccf2"
                  total={totalCount}
                />
              </Box>
              <Rechart data={graphData} />
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};
export default StatisticsPage;
