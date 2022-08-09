import React from 'react'
import { Box } from "@mui/material"
import { makeStyles } from "@mui/styles"
import CategoryName from "../Pages/Items Page/CategoryName"
import CartList from "./CartList"

const CartCategoryItem = ({ catName, list }) => {
  return (
    <Box>
        <CategoryName />
        <CartList />
    </Box>
  )
}

export default CartCategoryItem