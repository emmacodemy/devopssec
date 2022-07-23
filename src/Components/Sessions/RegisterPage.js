import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { handleSignUp } from "../../Store/Sessions/thunkCreators";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Box,
  FormControl,
  TextField,
  FormHelperText,
} from "@mui/material";
import Input from "./Input";
import Navigation from "./Navigation";
import SideBanner from "./SideBanner";
import Submit from "./SubmitBtn";
import Title from "./Title";

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
      right: 0,
      bottom: "35%",
      color: "#f9a109",
      fontFamily: "QuickSand, sans-serif",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: 12,
    },
  },
}));

const RegisterPage = ({ loading, signedUp }) => {
  const classes = useStyles();
  const [formErrorMessage, setFormErrorMessage] = useState({});

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    userName: "",
    password: "",
    email: "",
    confirmPassword: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (userDetails.password !== userDetails.confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }
    dispatch(
      handleSignUp(
        userDetails.userName,
        userDetails.email,
        userDetails.password
      )
    );
    signedUp && navigate("/login");
  };

  useEffect(() => {
    setTimeout(() => {
      setFormErrorMessage({});
    }, 5000);
  }, [formErrorMessage]);

  return (
    <Grid container className={classes.root}>
      <SideBanner />
      <Box className={classes.formCont}>
        <Navigation
          text="Already have an account?"
          push="login"
          btnText="Login"
        />
        <form onSubmit={handleRegister} className={classes.form}>
          <Title text="Create an account." />
          <Grid>
            <Input
              ariaLabel="username"
              label="Username"
              name="userName"
              type="text"
              handle={handleInput}
            />
            <Input
              label="E-mail address"
              ariaLabel="e-mail address"
              type="email"
              name="email"
              handle={handleInput}
            />
            <Grid>
              <FormControl
                className={classes.input}
                error={!!formErrorMessage.confirmPassword}
              >
                <TextField
                  aria-label="password"
                  label="Password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="password"
                  onChange={(e) => handleInput(e)}
                  required
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid>
              <FormControl
                className={classes.input}
                error={!!formErrorMessage.confirmPassword}
              >
                <TextField
                  label="Confirm Password"
                  aria-label="confirm password"
                  type="password"
                  inputProps={{ minLength: 6 }}
                  name="confirmPassword"
                  required
                  onChange={(e) => handleInput(e)}
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Submit title="Register" loading={loading} />
          </Grid>
        </form>
      </Box>
    </Grid>
  );
};

export default RegisterPage;
