import { useState } from 'react'
import Header from './components/Header'
import Navegador from './components/Navegador'
import Footer from './components/Footer'
import MainPage from './components/MainPage'
import Servicios from './components/Servicios'
import Proyectos from './components/Proyectos'
import Nosotros from './components/Nosotros'
import Contacto from './components/Contacto'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Navegador />} />
          <Route path='/navegador' element={<Navegador />} />
          <Route path='/mainPage' element={<MainPage />} />
          <Route path='/servicios' element={<Servicios />} />
          <Route path='/proyectos' element={<Proyectos />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/contacto' element={<Contacto />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
