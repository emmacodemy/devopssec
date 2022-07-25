import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { List, Replay, InsertChartOutlinedOutlined } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

const useStyles = makeStyles(() => ({
  link: {
    padding: "2px 0",
    display: "flex",
    justifyContent: "center",
  },
  styleLink: {
    borderLeft: "6px solid #f9a109",
    borderRadius: "4px 4px 4px 4px",
  },
}));

const NavLinks = ({ path, icon, currentLink, index, display, control }) => {
  const classes = useStyles();
  return (
    <Box
      className={
        currentLink === index
          ? `${classes.link} ${classes.styleLink}`
          : classes.link
      }
      onClick={() => display(index)}
    >
      <NavLink to={`/${path}`} onClick={() => control(true)}>
        {icon === "list" && (
          <IconButton>
            <List />
          </IconButton>
        )}
        {icon === "history" && (
          <IconButton>
            <Replay />
          </IconButton>
        )}
        {icon === "stat" && (
          <IconButton>
            <InsertChartOutlinedOutlined />
          </IconButton>
        )}
      </NavLink>
    </Box>
  );
};

export default NavLinks;
