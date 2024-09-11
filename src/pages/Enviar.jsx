import React from 'react'
import './style-pages.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Enviar = () => {
  return (
    <>
      <header id='headerHomePage2'>
        <img src={logo} alt="logo" />
        <h1>Seja bem vindo!</h1>
      </header>
      <div id='sectionHomePage'>
        <p>Envie seus treinamentos concluídos</p>
        <label htmlFor="dataConclusao">Nome do treinamento</label>
        <input type="text" placeholder='Nome do treinamento' id='nomeTreinamento' />
        <label htmlFor="dataConclusao">Data de conclusão</label>
        <input type="date" name="dataConclusao" id="dataConclusao" />
        <label htmlFor="descricao">Descrição</label>
        <textarea name="descricao" placeholder='Descrição' id="descricao"></textarea>
        <label htmlFor="certificado">Anexe seu certificado</label>
        <input type="file" name="certificado" id="certificado" />
        <Link to='/home' className='button'>Enviar</Link>
      </div>
    </>
  )
}

export default Enviar