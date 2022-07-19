import React from "react";
import { makeStyles } from "@mui/styles"
import { Typography, Box } from "@mui/material";

const useStyles = makeStyles(() => ({
    nameCont: {
        position: 'relative',
        width: '100%',
        "& .MuiTypography-root": {
            fontFamily: 'QuickSand, sans-serif',
            fontWeight: 500,
            fontSize: '18px',
            color: '#000000'
        }
    },
}))

const CategoryName = ({name}) => {
  const classes = useStyles()
  return (
    <Box className={classes.nameCont}>
      <Typography>{name}</Typography>
    </Box>
  );
};

export default CategoryName;