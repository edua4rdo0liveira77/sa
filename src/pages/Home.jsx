import React from 'react'
import './style-pages.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer1'

const Home = () => {
  return (
    <>
      <header id='headerHomePage'>
        <img src={logo} alt="logo" />
        <h1>Seja bem vindo!</h1>
        <span></span>
        <span></span>
        <p>Veja aqui os treinamentos de seus colaboradores</p>
        <span></span>
        <span></span>
        <input type="search" name="pesquisa" id="pesquisa" placeholder='Pesquisar:' />
      </header>
      <hr />
      <div className='container'>
        <div>
          <div>
            <p>Nome do treinamento:</p>
            <p>Data de conclusão:</p>
            <p>Certificado:</p>
            <p>Colaborador:</p>
            <p>Enviado por:</p>
          </div>
          <div>
            <p>Nome do treinamento:</p>
            <p>Data de conclusão:</p>
            <p>Certificado:</p>
            <p>Colaborador:</p>
            <p>Enviado por:</p>
          </div>
        </div>

        <div>
        <div>
            <p>Nome do treinamento:</p>
            <p>Data de conclusão:</p>
            <p>Certificado:</p>
            <p>Colaborador:</p>
            <p>Enviado por:</p>
          </div>
          <div>
            <p>Nome do treinamento:</p>
            <p>Data de conclusão:</p>
            <p>Certificado:</p>
            <p>Colaborador:</p>
            <p>Enviado por:</p>
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </>
  )
}

export default Home