import React, { useState, useEffect } from "react";
import NavBar from "../Navbar/NavBar";
import { useTheme, useMediaQuery, Grid } from "@mui/material";
import { fetchItems } from "../../Store/itemspagereducer/thunkCreators";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";
import { getAllCategory } from "../../Store/itemspagereducer/thunkCreators";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    display: "flex",
  },

  main: {
    width: "70%",
    height: "100%",
    backgroundColor: "#fafafe",
    [theme.breakpoints.down("md")]: {
      width: "81.5%",
    },
  },
  nav: {
    width: "5%",
    height: "100%",
    backgroundColor: "#fff",
    position: "relative",
    top: 0,
    left: 0,
    bottom: 0,
    [theme.breakpoints.down("md")]: {
      width: "17.5%",
    },
  },
  sideBar: {
    width: "25%",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      width: "81.5%",
    },
  },
}));

const Main = ({ cart, details, changeView, addItem, signedIn, alert }) => {
  const classes = useStyles();

  const theme = useTheme();

  const dispatch = useDispatch();

  const [displayMain, setDisplayMain] = useState(true);

  const handleAside = (status) => {
    setDisplayMain(status);
  };

  useEffect(() => {
    dispatch(fetchItems());
    dispatch(getAllCategory());
  }, []);

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      className={
        isMobile
          ? displayMain
            ? `${classes.root} display-main`
            : `${classes.root} display-side`
          : classes.root
      }
    >
      <nav className={classes.nav}>
        <NavBar
          changeView={changeView}
          signedIn={signedIn}
          sidecontrol={handleAside}
        />
      </nav>
      <main className={classes.main}>
        <Outlet context={handleAside} />
      </main>
      <aside className={classes.sideBar}>
        <SideBar
          cart={cart}
          details={details}
          changeView={changeView}
          addItem={addItem}
          alert={alert}
        />
      </aside>
    </Grid>
  );
};

export default Main;
