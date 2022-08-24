import React from "react";
import { LinearProgress, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    rowGap: 5,
    "& .MuiLinearProgress-barColorPrimary": {
      backgroundColor: "#f9a109",
      borderRadius: "4px"
    },
  },

  root2: {
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    rowGap: 5,
    "& .MuiLinearProgress-barColorPrimary": {
      backgroundColor: "#56ccf2",
      borderRadius: "4px"
    },
  },

  nameCont: {
    width:"100%",
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
  }
}));

const ProgressBar = ({ value, total, name, color }) => {
  const progress = Math.round((value / total) * 100);

  const classes = useStyles()
  return (
    <Box className={color === "#f9a109"? classes.root : classes.root2}>
      <Box className={classes.nameCont}>
        <h4 style={{textTransform: "capitalize"}}>{name}</h4>
        <h4>{`${progress}%`}</h4>
      </Box>
      <LinearProgress
        variant="determinate"
        style={{
          width: "100%",
          borderRadius: "4px",
        }}
        value={progress}
      />
    </Box>
  );
};

export default ProgressBar;
