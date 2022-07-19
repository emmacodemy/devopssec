import React from 'react'
import { makeStyles } from "@mui/styles"
import { IconButton, Box, Typography } from "@mui/material"
import { Add } from "@mui/icons-material"

const useStyles = makeStyles(() => ({
    itemCont: {
        width: '182px',
        backgroundColor: '#fff',
        padding: 5,
        boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.05)",
        borderRadius: '12px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        "& .Mui-Typography-root": {
            width: '70%',
            fontFamily: 'QuickSand, sans-serif',
            fontSize: 16,
            fontWeight: 500,
            color: '#000000',
            textAlign: 'center'
        }
    }
}))

const ItemName = ({itemName}) => {
  const classes = useStyles()
  return (
    <Box className={classes.itemCont}>
        <Typography>{itemName}</Typography>
        <IconButton> <Add /></IconButton>
    </Box>
  )
}

export default ItemName