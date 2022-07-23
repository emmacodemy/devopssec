import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Input from "./Input";
import Navigation from "./Navigation";
import SideBanner from "./SideBanner";
import Submit from "./SubmitBtn";
import Title from "./Title";
import { Grid, Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { handleSignIn } from "../../Store/Sessions/thunkCreators";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: 0,
    position: "relative",
    width: "100vw",
    height: "auto",
    backgroundColor: "#fff",
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      height: "100vh",
    },
  },
  formCont: {
    width: "100%",
    height: "70vh",
    display: "flex",
    flexDirection: "column",
    marginTop: 5,
    rowGap: 20,
    [theme.breakpoints.up("lg")]: {
      width: "58%",
      height: "95%",
    },
  },
  form: {
    position: "relative",
    width: "90%",
    margin: "0 auto",
    [theme.breakpoints.up("md")]: {
      width: "55%",
      padding: 15,
    },
  },
  input: {
    position: "relative",
    width: "100%",
    marginBottom: 8,
    "& .MuiFilledInput-root": {
      backgroundColor: "#fff",
      color: "#000000",
    },
    [theme.breakpoints.up("lg")]: {
      marginBottom: 15,
    },
    "& .MuiFormLabel-root": {
      fontFamily: "QuickSand, sans-serif",
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: 20,
    },
    "& .MuiTypography-root": {
      position: "absolute",
      right: 10,
      bottom: "35%",
      color: "#f9a109",
      fontFamily: "QuickSand, sans-serif",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: 12,
    },
  },
}));

const LoginPage = ({ loading, signedIn }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    userName: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const signIn = async (e) => {
    e.preventDefault();
    await dispatch(handleSignIn(userDetails.userName, userDetails.password));
    navigate("/");
  };

  useEffect(() => {
    if (signedIn) {
      navigate("/");
    }
  });

  return (
    <Grid container className={classes.root}>
      <SideBanner />
      <Box className={classes.formCont}>
        <Navigation
          text="Dont have an account yet?"
          push="register"
          btnText="Create an account"
        />
        <form onSubmit={signIn} className={classes.form}>
          <Title text="Welcome!" />
          <Grid>
            <Input
              ariaLabel="username"
              label="Username"
              name="userName"
              type="text"
              handle={handleInput}
            />
            <Box className={classes.input} required>
              <Input
                label="Password"
                ariaLabel="password"
                type="password"
                name="password"
                handle={handleInput}
              />
              <Typography>Forgot?</Typography>
            </Box>
            <Submit title="Login" loading={loading} />
          </Grid>
        </form>
      </Box>
    </Grid>
  );
};

export default LoginPage;
