import { useUser } from "./context/UserContext";
import Header from './page/Header'
import Navegador from './page/Navegador'
import Footer from './page/Footer'
import MainPage from './page/MainPage'
import Servicios from './page/Servicios'
import Proyectos from './page/Proyectos'
import Nosotros from './page/Nosotros'
import Contacto from './page/Contacto'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BannerGatos from './components/BannerGatos'
import { useEffect } from "react";




function App() {
  const { user } = useUser();
  console.log('user :', user);
  const testEnv = import.meta.env.VITE_test;
  console.log('Variable de entorno: ', testEnv);

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