import React from 'react'
import './style-components.css'
import { Link } from 'react-router-dom'

const Footer1 = () => {
  return (
    <div id='footer1'>
      <div>
        <Link to="/contact">Contato</Link>
        <Link to="/email">E-mail</Link>
        <Link to="/instagram">Instagram</Link>
      </div>
    </div>
  )
}

export default Footer1