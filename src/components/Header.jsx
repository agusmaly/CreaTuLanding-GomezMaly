import React from 'react';
import { Link } from 'react-router-dom';
import overolImage from '../imagenes/overol.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                <div className="container-fluid">
                    <Link to="/">
                        <img className="foto-inicio" src={overolImage} alt="Logo de Overol - Volver al inicio" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto" id="detalle-menu">
                            <Link className="nav-link" to="/mainPage">Tienda</Link>
                            <Link className="nav-link" to="/servicios">Servicios</Link>
                            <Link className="nav-link" to="/proyectos">Proyectos</Link>
                            <Link className="nav-link" to="/nosotros">Nosotros</Link>
                            <Link className="nav-link" to="/contacto">Contacto</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;

