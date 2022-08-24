import React from "react";
import { ShoppingBag } from "@mui/icons-material";
import img from "../../assests/img.jpg";

import { makeStyles } from "@mui/styles";
import { Box, Typography, IconButton } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  sideImg: {
    position: "relative",
    width: "100%",
    height: "40vh",
    display: "flex",
    backgroundImage: `url(${img}) `,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    "&:after": {
      content: '""',
      display: "block",
      position: "absolute",
      left: 0,
      right: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `linear-gradient(180deg, #fbd084 0%, #f9a109 100%) `,
      mixBlendMode: "normal",
      opacity: 0.85,
    },
    [theme.breakpoints.up("lg")]: {
      width: "40%",
      height: "100%",
    },
  },
  imgCont: {
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    rowGap: 30,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    color: "#fff",
    "& .MuiTypography-root": {
      textAlign: "center",
      width: "55%",
      fontSize: 26,
      fontFamily: "QuickSand, sans-serif",
    },
  },
  bagLogo: {
    display: "flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const SideBanner = () => {
  const classes = useStyles();

  return (
    <Box className={classes.sideImg}>
      <Box className={classes.imgCont}>
        <Box className={classes.bagLogo}>
          <IconButton>
            <ShoppingBag style={{ color: "#fff" }} />
          </IconButton>
        </Box>
        <Typography>Take your shopping list wherever you go</Typography>
      </Box>
    </Box>
  );
};

export default SideBanner;
