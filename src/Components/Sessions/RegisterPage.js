import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
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
    flexDirection: 'column',
    margin: 0,
    position: "relative",
    width: '100vw',
    height: 'auto',
    backgroundColor: '#fff',
    [theme.breakpoints.up('lg')]: {
      flexDirection:'row',
      height:'100vh'
    }
  },
  formCont: {
    width: '100%',
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 5,
    rowGap: 20,
    [theme.breakpoints.up('lg')]: {
      width: '58%',
      height: '95%',
    }
  },
  form: {
    position: 'relative',
    width: '90%',
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
      width: '55%',
      padding: 15,
    }
  },
  input: {
    position: 'relative',
    width: '100%',
    marginBottom: 8,
    "& .MuiFilledInput-root": {
      backgroundColor: '#fff',
      color: '#000000',
    },
    [theme.breakpoints.up('lg')]: {
      marginBottom: 15,
    },
    "& .MuiFormLabel-root": {
      fontFamily: 'QuickSand, sans-serif',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: 20,
    },
    "& .MuiTypography-root": {
      position: 'absolute',
      right: 0,
      bottom: '35%',
      color: '#f9a109',
      fontFamily: 'QuickSand, sans-serif',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: 12,
    },
  },
}))

const RegisterPage = () => {
  const classes = useStyles();
  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {

    // if (password !== confirmPassword) {
    //   setFormErrorMessage({ confirmPassword: "Passwords must match" });
    //   return;
    // }
  };

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
              name="username"
              type="text"
            />
            <Input
              label="E-mail address"
              ariaLabel="e-mail address"
              type="email"
              name="email"
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
                />
                <FormHelperText>
                  {formErrorMessage.confirmPassword}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Submit title="Register" />
          </Grid>
        </form>
      </Box>
    </Grid>
  );
};

export default RegisterPage