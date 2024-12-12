import { useState } from 'react'
import Header from './components/Header'
import Navegador from './components/Navegador'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Navegador />



    </>
  )
}

export default App
