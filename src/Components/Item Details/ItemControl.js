import React from 'react'
import { Box, IconButton } from "@mui/material"
import { ArrowBack  } from "@mui/icons-material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(() => ({
    control: {
        position: 'relative',
        width: '100%',
        display:'flex',
        marginTop: 10,
        columnGap: 5,
        alignItems: 'center',
    },

    backText: {
        position: 'relative',
        color: '#f9a109',
        fontSize: 14,
    }
}))

const ItemControl = ({ control }) => {
  const classes = useStyles()

  return (
    <Box className={classes.control}>
        <IconButton onClick={() => control('cart')}>
            <ArrowBack style={{color: '#f9a109'}} />
        </IconButton>
        <p className={classes.backText}>back</p>
    </Box>
  )
}

export default ItemControl