import { useUser } from "./components/context/UserContext";
import Header from './components/Header'
import Navegador from './components/Navegador'
import Footer from './components/Footer'
import MainPage from './components/MainPage'
import Servicios from './components/Servicios'
import Proyectos from './components/Proyectos'
import Nosotros from './components/Nosotros'
import Contacto from './components/Contacto'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BannerGatos from './components/BannerGatos'
import { useEffect } from "react";



function App() {
  const { user } = useUser();
  console.log('user :', user);

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.querySelectorAll(".image-transition").forEach((element) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        element.style.setProperty("--x", `${x}px`);
        element.style.setProperty("--y", `${y}px`);
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <BannerGatos />

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
