import React from 'react'
import './style-components.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Header1 = () => {
  return (
    <header id='header1'>
      <img src={logo} alt="Logo" />
      <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Cadastrar-se</Link>
      </div>
    </header>
  )
}

export default Header1