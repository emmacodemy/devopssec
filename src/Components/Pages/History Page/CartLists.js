import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { EventNote, ChevronRight } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    boxShadow: "0 2px 12px rgba(0, 0, 0, 0.05)",
    borderRadius: 12,
    padding: "8px 0",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "center",
      rowGap: 10
    }
  },
  name: {
    position: "relative",
    width: "50%",
    textAlign: "left",
    color: "#fff",
    fontSize: 16,
    fontWeight: 500,
    textTransform: "capitalize",
    [theme.breakpoints.down("md")]: {
      width: '40%',
      margin: "0 auto",
      textAlign: "center"
    }
  },
  details: {
    width: "45%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      width: '100%',
      margin: "0 auto",
    }
  },
  date: {
    color: "#c1c1c4",
    fontSize: 12,
    fontWeight: 500,
  },
  completed: {
    border: "1px solid #56ccf2",
    borderRadius: 8,
    fontSize: 12,
    fontWeight: 500,
    color: "#56ccf2",
    padding: "8px 0",
  },
  other: {
    border: "1px solid #eb5757",
    borderRadius: 8,
    fontSize: 12,
    fontWeight: 500,
    color: "#eb5757",
    padding: "8px 0",
  },
}));

const CartLists = ({ title, date, status, id }) => {
  const classes = useStyles();

  const dateFormatter = () => {
    const d = new Date(date);
    const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    const day = days[d.getDay()];
    const p = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear();
    return `${day} ${p}.${month}.${year}`;
  };
  return (
    <Box className={classes.container}>
      <p className={classes.name}> {title} </p>
      <Box className={classes.details}>
        <EventNote style={{ color: "#c1c1c4" }} />
        <p className={classes.date}>{dateFormatter()}</p>
        <h3
          className={status === "completed" ? classes.completed : classes.other}
        >
          {status}
        </h3>
        <Link to={`/history/cart/${id}`}>
          <ChevronRight style={{ color: "#f9a109" }} />
        </Link>
      </Box>
    </Box>
  );
};

export default CartLists;
