import React from 'react'
import './style-pages.css'
import logo from '../assets/logo.png'

import Header1 from '../components/Header1'
import Footer1 from '../components/Footer1'

const Main = () => {
  return (
    <>
      <Header1 />
      <div id='sectionMainPage'>
        <div>
          <p><i>"Potencialize sua equipe com nossa gestão de treinamentos! Gerenciamos cada etapa do processo, garantindo que seus colaboradores recebam as habilidades necessárias para superar desafios e alcançar resultados excepcionais. Invista no futuro da sua empresa, desenvolvendo talentos que fazem a diferença!"</i></p>
          <img src={logo} alt="Logo" />
        </div>
      </div>
      <Footer1 />
    </>
  )
}

export default Main