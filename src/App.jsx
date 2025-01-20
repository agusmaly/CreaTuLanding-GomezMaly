import { useState } from 'react'
import Header from './components/Header'
import Navegador from './components/Navegador'
import Footer from './components/Footer'
import MainPage from './components/MainPage'
import Servicios from './components/Servicios'
import Proyectos from './components/Proyectos'


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Header />
      <Navegador />
      <MainPage />
      <Servicios />
      <Proyectos />
      <Footer />
    </>
  )
}

export default App
