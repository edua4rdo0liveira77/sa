import React from 'react'
import './style-pages.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
      <div id='sectionLogin'>
        <img src={logo} alt="logo" />
        <input type="email" name="emailLogin" id="emailLogin" placeholder='E-mail' />
        <input type="number" name="matriculaLogin" id="matriculaLogin" placeholder='Matrícula' />
        <input type="password" name="passwordLogin" id="passwordLogin" placeholder='Senha' />
        <input type="password" name="passwordLogin" id="passwordLogin" placeholder='Confirmar senha' />
        <Link to='/home' className='button'>Cadastrar</Link>
        <p>Já possúi um cadastro?<Link to='/login'>Entre aqui</Link></p>
      </div>
    </>
  )
}

export default Register