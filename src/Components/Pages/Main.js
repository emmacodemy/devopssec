import React, { useState } from "react";
import NavBar from "../Navbar/NavBar";
import { useTheme, useMediaQuery, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";

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
    border: "2px solid blue",
  },

  main: {
    width: "70%",
    height: "100%",
    backgroundColor: "#fafafe",
    [theme.breakpoints.down("md")]: {
      width: "79%",
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
      width: "20%",
    },
  },
  sideBar: {
    width: "25%",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      width: "79%",
    },
  },
}));

const Main = ({ cart, details, changeView, addItem }) => {
  const classes = useStyles();

  const theme = useTheme();

  const [displayMain, setDisplayMain] = useState(true);

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
        <NavBar changeView={changeView} />
      </nav>
      <main className={classes.main}>
        <Outlet />
      </main>
      <aside className={classes.sideBar}>
        <SideBar
          cart={cart}
          details={details}
          changeView={changeView}
          addItem={addItem}
        />
      </aside>
    </Grid>
  );
};

export default Main;
