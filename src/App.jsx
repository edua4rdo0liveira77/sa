import * as React from 'react'
import { Routes, Route } from 'react-router-dom'

import Main from './pages/Main.jsx'
import Enviar from './pages/Enviar.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Home from './pages/Home.jsx'

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="enviar" element={<Enviar />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}