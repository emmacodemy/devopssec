import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Button } from "@mui/material";

const useStyles = makeStyles(() => ({
  btnCont: {
    position: "relative",
    width: "100%",
    height: "100%",
    margin: "25px 0 10px 0",
  },
  submitBtn: {
    position: "absolute",
    width: 160,
    backgroundColor: "#f9a109",
    borderRadius: 3,
    color: "#fff",
    fontSize: 16,
    fontWeight: 700,
    fontFamily: "QuickSand, sans-serif",
    height: 56,
    left: "50%",
    transform: "translateX(-50%)",
    marginTop: "15px",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#f9a109",
    },
  },
}));

const Submit = ({ title, loading }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.btnCont}>
      <Button
        type="submit"
        className={classes.submitBtn}
        variant="contained"
        size="large"
        disabled={loading ? true : false}
      >
        {title}
      </Button>
    </Grid>
  );
};

export default Submit;
