import React from 'react'
import { Box } from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(() => ({
    buttonContainer: {
        position: "relative",
        width: "100%",
        height: "100%",
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        columnGap: 20,
      },
      cancelBtn: {
        position:'relative',
        backgroundColor: 'transparent',
        width: 50,
        border: 'none',
        cursor: 'pointer',
        outline: 'none',
        height: 20,
        color: '#34333a',
        fontWeight: 700
      },
      completeBtn: {
        position:'relative',
        backgroundColor: '#56ccf2',
        width: 117,
        height: 58,
        borderRadius: 12,
        color: '#fff',
        fontWeight: 700,
        border: 'none',
        outline: 'none',
        cursor: 'pointer'
      }
}))

const CompleteButon = () => {
  const classes = useStyles()

  return (
    <Box className={classes.buttonContainer}>
        <button className={classes.cancelBtn}>
            cancel
        </button>
        <button className={classes.completeBtn}>
            complete
        </button>

    </Box>
  )
}

export default CompleteButon