import React from "react";
import { Box, CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  loading: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Loading = () => {
  const classes = useStyles()
  return (
    <Box className={classes.loading}>
      {" "}
      <CircularProgress style={{ style: "#f9a109" }} />
    </Box>
  );
};

export default Loading;
