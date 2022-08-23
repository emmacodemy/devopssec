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
          <IconButton title="items" aria-hidden="false" aria-label="items">
            <List style={{ transform: "scale(0.7)" }} />
          </IconButton>
        )}
        {icon === "history" && (
          <IconButton title="history" aria-hidden="false" aria-label="history">
            <Replay style={{ transform: "scale(0.7)" }} />
          </IconButton>
        )}
        {icon === "stat" && (
          <IconButton
            title="statistics"
            aria-hidden="false"
            aria-label="statistics"
          >
            <InsertChartOutlinedOutlined style={{ transform: "scale(0.7)" }} />
          </IconButton>
        )}
      </NavLink>
    </Box>
  );
};

export default NavLinks;
