import React from 'react'
import { useNavigate } from "react-router-dom"

const RegisterPage = () => {
  const navigate = useNavigate()
  return (
    <div>
        <h1>RegisterPage</h1>
        <button onClick={() => navigate("/login")}>Login</button>

    </div>
  )
}

export default RegisterPage