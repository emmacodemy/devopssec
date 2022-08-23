import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { EventNote, ChevronRight } from "@mui/icons-material";
import { getCartDetails } from "../../../Store/historyPage/thunkCreator";

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
  titleHeader: {
    position: "relative",
    width: "50%",
    textAlign: "left",
    marginLeft: 10,
    color: "#000",
    fontSize: 17,
    fontWeight: 600,
    textTransform: "capitalize",
    [theme.breakpoints.down("md")]: {
      width: '80%',
      margin: "0 auto",
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
    fontWeight: "bold",
    color: "#56ccf2",
    padding: "8px 5px",
  },
  other: {
    border: "1px solid #eb5757",
    borderRadius: 8,
    fontSize: 12,
    fontWeight: "bold",
    color: "#eb5757",
    padding: "8px 5px",
  },
}));

const CartLists = ({ title, date, status, id }) => {
  const classes = useStyles();

  const dispatch = useDispatch()

  const dateFormatter = () => {
    const d = new Date(date);
    const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    const day = days[d.getDay()];
    const p = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    return `${day} ${p}.${month}.${year}`;
  };
  return (
    <Box className={classes.container}>
      <p className={classes.titleHeader}> {title} </p>
      <Box className={classes.details}>
        <EventNote style={{ color: "#c1c1c4", transform: "scale(0.7)" }} />
        <p className={classes.date}>{dateFormatter()}</p>
        <h3
          className={status === "completed" ? classes.completed : classes.other}
        >
          {status}
        </h3>
        <Link to={`/history/cart/${id}`} onClick={() => dispatch(getCartDetails(id))}>
          <ChevronRight style={{ color: "#f9a109" }} />
        </Link>
      </Box>
    </Box>
  );
};

export default CartLists;
