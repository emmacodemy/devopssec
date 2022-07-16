import React from 'react'
import { Link } from "react-router-dom"
import { Box, IconButton } from '@mui/material'

const NavLink = ({path, icon}) => {
  return (
    <Box>
        <Link to={`/${path}`}>
            <IconButton>
                {icon}
            </IconButton>
        </Link>
    </Box>
  )
}

export default NavLink