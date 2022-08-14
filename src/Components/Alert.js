import React from "react";
import { Box, Alert, AlertTitle } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  alertMessage: {
    position: 'absolute',
    width: "30vw",
    height: '150px',
    bottom: '2%',
    left: '5%',
    zIndex: 20,
    [theme.breakpoints.down('md')]: {
      width: '75vw'
    }
  }
}))



const AlertNotification = ({ message, display, severity }) => {
  const classes = useStyles();
  return (
    <Box className={classes.alertMessage}
    >
      <Alert severity={severity}  onClose={() => display()}>
        <AlertTitle>{severity === "success" ? "Success" : "Error"}</AlertTitle>
        {message}
      </Alert>
    </Box>
  );
};

export default AlertNotification;
