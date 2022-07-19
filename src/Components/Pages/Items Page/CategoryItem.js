import React from 'react'
import { makeStyles } from "@mui/styles"
import { Box } from "@mui/material"
import CategoryName from "./CategoryName"
import Item from "./Item"

const useStyles = makeStyles(() => ({
    container: {
        width: '90%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        rowGap: 30,

    }
}))

const CategoryItem = ({name, list}) => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
        <CategoryName name={name} />
        <Item itemList={list} />
    </Box>
  )
}

export default CategoryItem