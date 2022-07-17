import React from "react";
import NavBar from "../Navbar/NavBar";
import { Grid } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    display:'flex',
    border: '2px solid blue'

  },

  main: {
    width: '60%',
    height: '100%'
  },
  nav: {
    width: '10%',
    height: '100%',
    backgroundColor: "#fff",
    position: 'relative',
    top: 0,
    left: 0,
    bottom: 0,
  },
  sideBar: {
    width: '30%',
    height: '100%'
  }
}))

const Main = ({ cart, details, changeView, addItem }) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root}>
      <nav className={classes.nav}>
        <NavBar changeView={changeView} />
      </nav>
      <main className={classes.main}>
        <Outlet />
      </main>
      <div className={classes.sideBar}>
        <SideBar
          cart={cart}
          details={details}
          changeView={changeView}
          addItem={addItem}
        />
      </div>
    </Grid>
  );
};

export default Main;
