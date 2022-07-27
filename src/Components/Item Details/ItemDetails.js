import React from 'react'
import { Box } from "@mui/material"
import { makeStyles } from "@mui/styles"
import ItemControl from "./ItemControl"
import ItemImage from "./ItemImage"
import Name from "./Name"

const useStyles = makeStyles(() => ({
  detailsCont: {
    position: 'relative',
    width: '80%',
    height: '100%',
    margin:'0 auto',
    display: 'flex',
    flexDirection: 'column',
    rowGap: 20,
    alignItems: 'center',

  }
}))

const ItemDetails = ({ changeView }) => {
  const classes = useStyles()
  return (
    <Box className={classes.detailsCont}>
      <ItemControl control={changeView} />
      <ItemImage image="rsshy" />
      <Name />
    </Box>
  )
}

export default ItemDetails