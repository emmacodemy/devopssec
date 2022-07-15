import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h1>LoginPage</h1>
        <button onClick={() => navigate("/register")}>register</button>
    </div>
  )
}

export default LoginPage