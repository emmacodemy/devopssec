import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Search } from "@mui/icons-material";

const useStyles = makeStyles(() => ({
  header: {
    width: "90%",
    marginTop: 30,
    display: "flex",
    height: '10%',
    margin: '0 auto',
  },

  titleCont: {
    width: '60%',
    height: '100%',
    display: 'flex',
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
    position: "relative"
  },

  search: {
    width:'60%',
    position: "relative",
    height: '55%',
    paddingLeft: 50,
    backgroundColor: '#fff',
    display: 'flex',
    margin: '0 auto',
    boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.04)',
    borderRadius: '12px',
    border: 'none',
    outline: 'none'
},

  searchIcon: {
    position: 'absolute',
    top:'-52%',
    left: '13%',

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
        <input
          className={classes.search}
          label="search"
          aria-label="search"
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
