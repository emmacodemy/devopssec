import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  alertMessage: {
    position: "absolute",
    bottom: "5%",
    left: "5%",
    height: "150px",
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 2px 8px #f2f2f2',
    width: "300px",
    borderBottom: "2px solid #f9a109",
    borderTop: "2px solid #f9a109",
    transform: "translateX(-150%)",
    transition: "all 1s",
    backgroundColor: '#fff',
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
          ? `${classes.alertMessage} ${classes.display}`
          : classes.alertMessage
      }
    >
      {" "}
      <p style={{color: '#f9a109', fontSize:'24px'}}>{message}</p>
    </Box>
  );
};

export default Alert;
