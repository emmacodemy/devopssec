import React from 'react'
import { Box } from '@mui/material'
import { sle } from "@mui/icons-material"
import NavLink from "./NavLink"

const NavBar = () => {
    const navLinks = [
        {
            path: 'items',
            icon: 'some',
        },
        {
            path: 'history',
            icon: 'some',
        },
        {
            path: 'statistics',
            icon: 'some',
        },
    ]
  return (
    <Box component='nav'>
        {
            navLinks.map((nav)=> <NavLink path={nav.path} icon={nav.icon} />)
        }
    </Box>
  )
}

export default NavBar