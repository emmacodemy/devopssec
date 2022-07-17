import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Input from "./Input";
import { Search } from "@mui/icons-material";

const useStyles = makeStyles(() => ({
  header: {
    width: "90%",
    paddingTop: '5px',
    display: "flex",
    height: '10%',
    margin: '0 auto',
    border: '2px solid yellow'
  },

  titleCont: {
    width: '60%',
    height: '100%',
    display: 'flex',
    border: '2px solid green',
    alignItems: 'center',
    justifyContent: 'center',
    "& .MuiTypography-root": {
        fontSize: 26,
        color: "#34333a",
        fontFamily: "Quicksand, sans-serif",


    }
  },
  title: {
    color: '#f9a109'
  },

  searchBar: {
    width: '40%',
    border: '2px solid red'
  },

  searchIcon: {
    position: 'absolute'

  }
}));

const ItemHeader = () => {
  const classes = useStyles()
  return (
    <Box className={classes.header}>
      <Box className={classes.titleCont}>
        <Typography>
          <span className={classes.title}>Shoppingify</span> allows you take
          your shopping list wherever you go
        </Typography>
      </Box>
      <Box className={classes.searchBar}>
        <Input
          className="search"
          label="search"
          ariaLabel="search"
          name="search"
          type="text"
          placeholder="search"
        />
        <IconButton className={classes.searchIcon}>
          <Search />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ItemHeader;
