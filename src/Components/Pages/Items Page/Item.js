import React from 'react'
import { Box } from '@mui/material';
import { makeStyles } from "@mui/material";
import ItemName from "./ItemName";

const useStyles = makeStyles(() => ({
    listCont: {
        width: '100%',
        position:'relative',
        display: 'flex',
        flexWrap: 'wrap',
        rowGap: 50,
        justifyContent: 'space-evenly'
    }
}))

const Item = ({ itemList }) => {
  const classes = useStyles()
  return (
    <Box className={classes.listCont}>
        {
            itemList.map((item) => <ItemName />)
        }
    </Box>
  )
}

export default Item