import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  alertMessage: {
    position: "absolute",
    bottom: "5%",
    left: "5%",
    height: "10vh",
    width: "50%",
    borderBottom: "2px solid #f9a109",
    transform: "translateX(-150%)",
    transition: "all 1s",
    backgroundColor: 'black',
    zIndex: 100
  },

  display: {
    transform: "translateX(5%)",
  },
}));

const Alert = ({ message, display }) => {
  const classes = useStyles();
  return (
    <Box
      className={
        display
          ? `${classes.alertMessage}${classes.display}`
          : classes.alertMessage
      }
    >
      {" "}
      <p>{message}</p>
    </Box>
  );
};

export default Alert;
