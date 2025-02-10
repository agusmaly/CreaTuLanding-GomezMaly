import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    query,
    updateDoc,
    where,
    writeBatch,
} from "firebase/firestore/lite";
import { db } from "../config/firebaseConfig";
import React from 'react';
import { Link } from 'react-router-dom';
import overolImage from '../imagenes/overol.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useUser } from "../context/UserContext.jsx";
import productos from "../service/productos.js";

const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
};



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

    //CARGAR PRODUCTOS
    const cargarProducts = async () => {
        try {
            const productRef = collection(db, "Ilustraciones"); // referencia a la coleccion
            for (const product of productos) {
                await addDoc(productRef, product); // agrega cada producto como un documento
            }
            console.log("Productos cargados existosamente en Firestore");
        } catch (error) {
            console.log("Error al cargar los productos :", error);
        }
    };

    //ACTUALIZAR CON BATCH
    const uploadBatchProductos = async () => {
        try {
            const batch = writeBatch(db); // Crea una instancia de batch
            const productRef = collection(db, "Ilustraciones");
            const snapshot = await getDocs(productRef);

            snapshot.forEach((docSnap) => {
                const docRef = docSnap.ref; // Obtiene referencia al documento
                batch.update(docRef, { amigables: true }); // Agrega la operación de actualización al batch
            });

            await batch.commit(); // Ejecuta todas las operaciones
            console.log("Productos actualizados exitosamente con batch");
        } catch (error) {
            console.log("Error al actualizar los productos con batch:", error);
        }
    };

    // ELIMINAR TODOS CON BATCH
    const deleteAllProducts = async () => {
        try {
            const batch = writeBatch(db); // Crea un batch para operaciones atómicas
            const productsRef = collection(db, "Ilustraciones"); // Referencia a la colección
            const snapshot = await getDocs(productsRef); // Obtener todos los documentos

            snapshot.forEach((docSnap) => {
                batch.delete(docSnap.ref); // Agregar la eliminación de cada documento al batch
            });

            await batch.commit(); // Ejecuta todas las eliminaciones
            console.log("Todos los productos han sido eliminados con batch.");
        } catch (error) {
            console.error("Error al eliminar los productos con batch:", error);
        }
    };

    // Obtener productos cuyo precio sea mayor a $9000.
    const getExpensiveProducts = async () => {
        try {
            const productsRef = collection(db, "Ilustraciones"); // Referencia a la colección
            const q = query(productsRef, where("price", ">", 9000)); // Consulta con condición
            const snapshot = await getDocs(q); // Obtener los documentos que cumplen con la condición

            // Mapeamos los resultados
            const expensiveProducts = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            console.log("Productos caros:", expensiveProducts);
        } catch (error) {
            console.error("Error al obtener productos caros:", error);
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
                    <>
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
                        <div>
                            {/* CARGAR PRODUCTOS */}
                            <button
                                onClick={cargarProducts}
                                style={{
                                    ...buttonStyle,
                                    marginLeft: "5px",
                                    backgroundColor: "blue",
                                    color: "white",
                                }}
                            >
                                Cargar productos a Firestore
                            </button>
                            {/* ACTUALIZAR BATCH */}
                            <button
                                onClick={uploadBatchProductos}
                                style={{
                                    ...buttonStyle,
                                    marginLeft: "5px",
                                    backgroundColor: "yellow",
                                    color: "black",
                                }}
                            >
                                Actualizar productos con Batch Firestore
                            </button>
                            {/* DELETE CON BATCH */}
                            <button
                                onClick={deleteAllProducts}
                                style={{
                                    ...buttonStyle,
                                    margin: "5px",
                                    backgroundColor: "red",
                                    color: "black",
                                }}
                            >
                                Eliminar todos los productos con Batch
                            </button>
                            {/* SENTENCIAS DE QUERY Y WHERE */}
                            <button onClick={getExpensiveProducts} style={buttonStyle}>
                                Productos Mayor $9000
                            </button>
                        </div>

                    </>
                )}

                <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
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

