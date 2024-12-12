import { useState } from 'react'
import Header from './components/Header'
import Navegador from './components/Navegador'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Navegador />
      <Footer />
    </>
  )
}

export default App
