import React from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { KeyboardBackspace, EventNote } from "@mui/icons-material";

const useStyles = makeStyles(() => ({
  nameCont: {
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: "22%",
    justifyContent: "space-around",
    alignItems: "center",
    rowGap: 25,
  },
  back: {
    position: "relative",
    width: "100%",
    display: "flex",
    marginTop: 10,
    alignItems: "center",
    columnGap: 8,
    justifyContent: "flex-start",
  },

  itemNameDate: {
    width: "100%",
    position: "relative",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    rowGap: 7,
  },
  date: {
    width: "100%",
    display: "flex",
    alignItems:"center",
    columnGap: 17,
    justifyContent: "flex-start",
  },
  itemName: {
    fontSize: 26,
    fontWeight: 700,
    color: "#34333a",
    textTransform: "capitalize"
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
  event: {
    fontSize: 12,
    color: "#c1c1c4",
    fontWeight: 700,
  },
}));

const HistoryNameHeader = ({ name, date, status }) => {
  const navigate = useNavigate();

  const classes = useStyles();

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
    <Box className={classes.nameCont}>
      <Box className={classes.back}>
        <KeyboardBackspace
          onClick={() => navigate("/history")}
          style={{ color: "#f9a109", cursor:  "pointer" }}
        />
        <p style={{ color: "#f9a109" }}>back</p>
      </Box>
      <Box className={classes.itemNameDate}>
        <h1 className={classes.itemName}>{name}</h1>
        <Box className={classes.date}>
          <EventNote style={{ color: "#c1c1c4", transform: 'scale(0.7)'}} />
          <p className={classes.event}>{dateFormatter()}</p>
          <h3
            className={
              status === "completed" ? classes.completed : classes.other
            }
          >
            {status}
          </h3>
        </Box>
      </Box>
    </Box>
  );
};

export default HistoryNameHeader;
