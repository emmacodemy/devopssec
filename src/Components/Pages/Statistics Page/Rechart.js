import React from "react";
import { makeStyles } from "@mui/styles";
import { useTheme, useMediaQuery, Box } from "@mui/material";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const useStyles = makeStyles(() => ({
  root: {
    height: "45%",
    rowGap: 15,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Rechart = ({ data }) => {
  const classes = useStyles();

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const renderLineChart = (
    <LineChart
      width={isMobile ? 280 : 600}
      height={isMobile ? 250 : 300}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="itemCount" stroke="#f9a109" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
  return (
    <Box className={classes.root}>
      <h2>Monthly Summary</h2>
      {renderLineChart}
    </Box>
  );
};

export default Rechart;
