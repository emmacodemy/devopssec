import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Box, Typography, Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  createAccountCont: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    rowGap: 10,
    width: "80%",
    margin: "10px auto",
    alignItems: "center",
    justifyContent: "flex-end",
    "& .MuiTypography-root": {
      fontFamily: "QuickSand, sans-serif ",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 14,
      color: "#b0b0b0",
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      columnGap: 40,
      height: "10vh",
      margin: "15 auto",
    },
  },
  createButton: {
    width: "80%",
    borderRadius: 5,
    padding: 5,
    marginTop: 15,
    color: "#f9a109",
    backgroundColor: "#fff",
    fontFamily: "QuickSand, sans-serif",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 14,
    boxShadow: "0px 2px 2px rgba(74, 106, 149, 0.2)",
    [theme.breakpoints.up("lg")]: {
      width: "50%",
      padding: 16,
    },
  },
}));

const Navigation = ({ text, push, btnText }) => {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <Box className={classes.createAccountCont}>
      <Typography>{text}</Typography>
      <Button
        className={classes.createButton}
        onClick={() => navigate(`/${push}`)}
      >
        {btnText}
      </Button>
    </Box>
  );
};

export default Navigation;
