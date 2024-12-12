import React from 'react'
import overolImage from '../imagenes/overol.jpg';


const Header = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                    <div className="container-fluid">
                        <a href="index.html">
                            <img className="foto-inicio" src={overolImage} alt="overol header" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ms-auto" id="detalle-menu">
                                <a className="nav-link" href="html/servicios.html" id="navbar-botons">Servicios</a>
                                <a className="nav-link" href="html/proyectos.html" id="navbar-botons">Proyectos</a>
                                <a className="nav-link" href="html/nosotros.html" id="navbar-botons">Nosotros</a>
                                <a className="nav-link" href="html/contacto.html" id="navbar-botons">Contacto</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
