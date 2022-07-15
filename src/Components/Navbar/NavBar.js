import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <div>
            <Link to='/items'> Home </Link>
            <Link to='/history'> history </Link>
            <Link to='/stat'> statistics </Link>
            <Link to='/login'>Log in</Link>
        </div>
        <div>
            <Outlet />
        </div>
       
    </div>
  )
}

export default NavBar