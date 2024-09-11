import React from 'react'
import './style-pages.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div id='sectionLogin'>
        <img src={logo} alt="logo" />
        <input type="email" name="emailLogin" id="emailLogin" placeholder='E-mail' />
        <input type="password" name="passwordLogin" id="passwordLogin" placeholder='Senha' />
        <Link to='/home' className='button'>Acessar</Link>
        <p>Não possúi um cadastro?<Link to='/register'>Cadastrar-se</Link></p>
      </div>
    </>
  )
}

export default Login