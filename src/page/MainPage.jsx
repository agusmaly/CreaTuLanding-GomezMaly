import React from 'react';
import productos from '../service/productos'; // Importamos los productos
import ItemCount from '../components/ItemCount';
import useFetch from '../hooks/useFetch.jsx';
import { useEffect, useState } from 'react';
import { Loading } from '../components/Loading.jsx';
import Cart from '../components/Cart.jsx';
import { useCart } from '../context/CartContext.jsx';




const MainPage = () => {

  const { data, loading, error } = useFetch('Ilustraciones')

  useEffect(() => {
    console.log('Data obtenida :', data);

  }, [])

  const { cart, addToCart } = useCart();


  return (
    <>

      <main className="contenido-principal contenedor">

        <div className="image-transition">
          <h6>The Matrix has you...</h6>
        </div>

        <div className="animate__animated animate__flash que-es-overol">
          <h2>
            <span>T</span>
            <span>i</span>
            <span>e</span>
            <span>n</span>
            <span>d</span>
            <span>a</span>
          </h2>
        </div>

        {/* CONDICIONAL PARA MOSTRAR EL CART */}
        {
          cart.length > 0 && (
            <div className='align-center'>
              <Cart />
            </div>
          )
        }

        {
          loading ? (
            <Loading />
          ) : error ? (
            <p className="error">{error}</p>
          ) : (
            <div className="listado-productos">
              {data.map((producto) => (
                <div className="producto" key={producto.id}>
                  <img src={producto.image} alt={`Imagen de ${producto.name}`} />
                  <div className="texto-producto">
                    <h3>{producto.name}</h3>
                    <p>{producto.description}</p>
                    <p className="precio">${producto.price.toLocaleString()}</p>
                    <ItemCount stock={producto.stock} initial={1} product={producto} />

                  </div>
                </div>
              ))}
            </div>

          )
        }



      </main>
    </>
  );
};

export default MainPage;