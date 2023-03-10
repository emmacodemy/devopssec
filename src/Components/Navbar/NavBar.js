import React, { useState } from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import { IconButton } from "@mui/material";
import { Login, ShoppingCart, PowerSettingsNew } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assests/logo.svg";
import NavLinks from "./NavLinks";
import { handleSignOut } from "../../Store/Sessions/thunkCreators";

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
    marginTop: 30,
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
    backgroundColor: "#f9a109",
    borderRadius: "100%",
    width: 42,
    height: 42,
    position: "relative",
  },

  count: {
    color: "#fff",
    backgroundColor: "#eb5757",
    width: 20.72,
    height: 19.97,
    borderRadius: 4,
    position: "absolute",
    top: -5,
    right: 0,
    fontSize: 15,
    textAlign: "center",
    fontWeight: "normal",
  },
}));

const NavBar = ({ changeView, signedIn, sidecontrol }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const items = useSelector((state) => state.cart);

  const { cartItems } = items;

  const calculateQuantity = (items) => {
    const categoryItems = items.map((value) => value.items);
    const allItems = categoryItems.reduce((acc, value) => {
      return [...acc, ...value];
    }, []);
    const quantity = allItems.reduce((acc, el) => {
      acc += el.quantity;
      return acc;
    }, 0);
    return quantity;
  };

  const [borderLink, setBorderLink] = useState(0);

  const handleLink = (index) => {
    setBorderLink(index);
  };

  const signOut = async () => {
    await dispatch(handleSignOut());
    navigate("/login");
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
        <Link
          to="/items"
          onClick={() => {
            handleLink(0);
            sidecontrol(true);
          }}
        >
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
            control={sidecontrol}
          />
        ))}
      </Box>
      <Box className={classes.cartCont}>
        <Box className={classes.cart}>
          <p className={classes.count}>{calculateQuantity(cartItems)}</p>
          <IconButton
            onClick={() => {
              changeView("cart");
              sidecontrol(false);
            }}
            aria-label="shopping-cart"
            aria-hidden="false"
            title="shopping-cart"
          >
            <ShoppingCart style={{ color: "#fff", transform: "scale(0.7)" }} />
          </IconButton>
        </Box>
        <Box>
          {signedIn ? (
            <IconButton
              aria-label="sign out"
              aria-hidden="false"
              title="sign out"
              onClick={() => signOut()}
            >
              <PowerSettingsNew style={{ color: "#f9a109" }} />
            </IconButton>
          ) : (
            <IconButton
              aria-label="login"
              aria-hidden="false"
              title="login"
              onClick={() => navigate("/login")}
            >
              <Login style={{ color: "#f9a109" }} />
            </IconButton>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
