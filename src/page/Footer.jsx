import React from 'react';
import { Link } from 'react-router-dom';
import overolImage from '../imagenes/overol.jpg';

const Footer = () => {
    return (
        <footer>
            <nav className="container-fluid">
                <ul className="footer-menu">
                    <li>
                        <Link to="/mainPage" className="footer-link">Tienda</Link>
                    </li>
                    <li>
                        <Link to="/servicios" className="footer-link">Servicios</Link>
                    </li>
                    <li>
                        <Link to="/proyectos" className="footer-link">Proyectos</Link>
                    </li>
                    <li>
                        <Link to="/nosotros" className="footer-link">Nosotros</Link>
                    </li>
                    <li>
                        <Link to="/contacto" className="footer-link">Contacto</Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img className="foto-pie" src={overolImage} alt="Logo de Overol - Inicio" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;