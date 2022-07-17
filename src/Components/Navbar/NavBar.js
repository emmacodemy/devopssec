import React, { useState } from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { IconButton } from "@mui/material";
import { Login, ShoppingCart } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assests/logo.svg";
import NavLinks from "./NavLinks";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    marginTop: 30
  },
  navLinks: {
    height: "40%",
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },

  cartCont: {
    height: "20%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },

  cart: {
    backgroundColor: '#f9a109',
    borderRadius:'100%',
  

  }
}));

const NavBar = ({changeView}) => {
  const classes = useStyles();

  const navigate = useNavigate()

  const [borderLink, setBorderLink] = useState(0);

  const handleLink = (index) => {
    setBorderLink(index);
  };

  const navLinks = [
    {
      path: "items",
      icon: "list",
    },
    {
      path: "history",
      icon: "history",
    },
    {
      path: "statistics",
      icon: "stat",
    },
  ];
  return (
    <Box className={classes.root}>
      <Box className={classes.logo}>
        <Link to="/items" onClick={() => handleLink(0)}>
          <img src={logo} alt="logo" />
        </Link>
      </Box>
      <Box className={classes.navLinks}>
        {navLinks.map((nav, index) => (
          <NavLinks
            path={nav.path}
            icon={nav.icon}
            currentLink={borderLink}
            index={index}
            display={handleLink}
            key={nav.path}
          />
        ))}
      </Box>
      <Box className={classes.cartCont}>
        <IconButton onClick={() => navigate('/login')}>
          <Login />
        </IconButton>
        <Box className={classes.cart}>
          <IconButton onClick={() => changeView('cart')}>
            <ShoppingCart style={{color: '#fff'}} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
