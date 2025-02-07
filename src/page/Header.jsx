import React from 'react';
import { Link } from 'react-router-dom';
import overolImage from '../imagenes/overol.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useUser } from "../context/UserContext.jsx";



const Header = () => {

    const { user, Login, Logout } = useUser();
    console.log('user :', user);

    const handleLoginLogout = () => {
        if (user?.isLoggedIn) {
            Logout();
            console.log("Usuario deslogueado");
        } else {
            Login({ name: "Mariano", isLoggedIn: true });
            console.log("Usuario logueado");
        }
    };

    return (
        <>
            <header style={{ position: "relative" }}>
                <button
                    onClick={handleLoginLogout}
                    style={{
                        position: "absolute",
                        top: "20px",
                        right: "65px",
                        padding: "5px 10px",
                        fontSize: "1rem",
                        cursor: "pointer",
                        background: user?.isLoggedIn ? "red" : "#68E717",
                        border: "1px solid #000",
                        borderRadius: "5px",
                    }}
                >
                    {user?.isLoggedIn ? "Logout" : "Login"}
                </button>

                {user?.isLoggedIn && (
                    <p
                        style={{
                            position: "absolute",
                            textAlign: "center",
                            top: "20px",
                            right: "44%",
                            color: "#68E717",
                        }}
                    >
                        Bienvenido {user?.name}
                    </p>
                )}

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
        </>
    );
};

export default Header;

