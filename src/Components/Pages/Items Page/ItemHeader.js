import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Search } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "90%",
    marginTop: 30,
    display: "flex",
    height: "10%",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      height: "5%",
    },
  },

  titleCont: {
    width: "60%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& .MuiTypography-root": {
      fontSize: 26,
      color: "#34333a",
      fontWeight: 500,
      fontFamily: "QuickSand, sans-serif",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  title: {
    color: "#f9a109",
  },

  searchBar: {
    width: "40%",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
  },

  search: {
    width: "60%",
    position: "relative",
    height: "55%",
    padding: "7px 0px 0px 50px",
    backgroundColor: "#fff",
    display: "flex",
    margin: "0 auto",
    boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.04)",
    borderRadius: "12px",
    border: "none",
    outline: "none",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "80%",
    },
  },

  searchIcon: {
    position: "absolute",
    top: "-70%",
    left: "12%",
    [theme.breakpoints.down("md")]: {
      top: "-115%",
      left: "2%",
    },
  },
}));

const ItemHeader = ({ handleSearch }) => {
  const classes = useStyles();

  const handleSearchItem = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <Box className={classes.header}>
      <Box className={classes.titleCont}>
        <Typography>
          <span className={classes.title}>Naveed ask change
        </Typography>
      </Box>
      <Box className={classes.searchBar}>
        <input
          className={classes.search}
          label="search"
          aria-label="search"
          name="search"
          type="text"
          placeholder="search item"
          onInput={(e) => handleSearchItem(e)}
        />
        <IconButton className={classes.searchIcon}>
          <Search />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ItemHeader;
