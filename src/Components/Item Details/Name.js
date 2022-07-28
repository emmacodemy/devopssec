import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    root: {
        position: 'relative',
        width:'100%',
        maxHeight:'45%',
        display: 'flex',
        flexDirection: 'column',
        rowGap: 25,
        border: '2px solid yellow'
  },
  cont: {
    position: 'relative',
    display: 'flex',
    flexDirection:'column',
    rowGap: 10,

  },
  name: {
    color: '#000',
    fontSize: 24,
    textTransform: 'capitalize',
  },
  category: {
    color: '#000',
    fontSize: 18,
    textTransform: 'capitalize',
  },
  text: {
    fontSize: 12,
    color: "#c1c1c4"
  },
  desc: {
    position:'relative',
    textOverflow:'clip',
    border: '2px solid green',
    overflowWrap: 'break-word',
    maxHeight: '25vh',
    overflowY: 'scroll',
    width:'100%',
  }
}));

const Name = ({itemName, categoryName, description}) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.cont}>
        <p className={classes.text}>name</p>
        <h3 className={classes.name}>{itemName}</h3>
      </Box>
      <Box className={classes.cont}>
        <p className={classes.text}>category</p>
        <h3 className={classes.category}>{categoryName}</h3>
      </Box>
      <Box className={classes.cont}>
        <p className={classes.text}>note</p>
        <h3 className={classes.desc}>{ description && description }</h3>
      </Box>
    </Box>
  );
};

export default Name;
