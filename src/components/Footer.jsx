import React from 'react'
import overolImage from '../imagenes/overol.jpg';

const Footer = () => {
    return (
        <>
            <footer>
                <nav class="container-fluid">
                    <ul>
                        <li><a href="../html/servicios.html">Servicios</a></li>
                        <li><a href="../html/proyectos.html">Proyectos</a></li>
                        <a href="index.html">
                            <img class="foto-pie" src={overolImage} alt="overol footer" />
                        </a>
                        <li><a href="../html/nosotros.html">Nosotros</a></li>
                        <li><a href="../html/contacto.html">Contacto</a></li>
                    </ul>
                </nav>
            </footer>
        </>
    )
}

export default Footer
