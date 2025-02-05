import img1 from '../imagenes/revolutionGrano333.jpg';
import img2 from '../imagenes/ilustracionpala.jpg';
import img3 from '../imagenes/tolosa-zoom.jpeg';
import ItemCount from './ItemCount';
import Swal from 'sweetalert2';
import React, { useEffect } from 'react';




const MainPage = () => {
  const handleAddToCart = (count, productName) => {
    Swal.fire({
      icon: 'success',
      title: '¡Producto añadido!',
      text: `Añadiste ${count} de ${productName} al carrito.`,
      confirmButtonText: 'Entendido',
    });

    // Aquí puedes manejar la lógica para añadir al carrito
    console.log(`Añadido ${count} de ${productName} al carrito.`);
  };


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
        <div className="listado-productos">
          <div className="producto">
            <img src={img1} alt="Imagen producto" />
            <div className="texto-producto">
              <h3>Ilustración REVOLUTION</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt maiores aperiam
              </p>
              <p className="precio">$10,000</p>
              <ItemCount
                stock={10}
                initial={1}
                onAdd={(count) => handleAddToCart(count, 'Ilustración REVOLUTION')}
              />
            </div>
          </div>

          <div className="producto">
            <img src={img2} alt="Imagen producto" />
            <div className="texto-producto">
              <h3>Ilustración PALADIUM</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt maiores aperiam
              </p>
              <p className="precio">$12,000</p>
              <ItemCount
                stock={8}
                initial={1}
                onAdd={(count) => handleAddToCart(count, 'Ilustración PALADIUM')}
              />
            </div>
          </div>

          <div className="producto">
            <img src={img3} alt="Imagen producto" />
            <div className="texto-producto">
              <h3>Ilustración TOLOSA</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt maiores aperiam
              </p>
              <p className="precio">$15,000</p>
              <ItemCount
                stock={5}
                initial={1}
                onAdd={(count) => handleAddToCart(count, 'Ilustración TOLOSA')}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainPage;


// import img1 from '../imagenes/revolutionGrano333.jpg';
// import img2 from '../imagenes/ilustracionpala.jpg';
// import img3 from '../imagenes/tolosa-zoom.jpeg';
// import ItemCount from './ItemCount';

// const MainPage = () => {
//   const handleAddToCart = (count, productName) => {
//     console.log(`Añadido ${count} de ${productName} al carrito.`);
//     // Aquí puedes manejar la lógica para añadir al carrito
//   };

//   return (
//     <>
//       <main className="contenido-principal contenedor">
//         <h2 className="text-center">Algo de la tienda...</h2>

//         <div className="listado-productos">
//           <div className="producto">
//             <img src={img1} alt="Imagen producto" />
//             <div className="texto-producto">
//               <h3>Ilustración REVOLUTION</h3>
//               <p>
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                 Nesciunt maiores aperiam
//               </p>
//               <p className="precio">$10,000</p>
//               <ItemCount
//                 stock={10}
//                 initial={1}
//                 onAdd={(count) => handleAddToCart(count, 'Ilustración REVOLUTION')}
//               />
//             </div>
//           </div>

//           <div className="producto">
//             <img src={img2} alt="Imagen producto" />
//             <div className="texto-producto">
//               <h3>Ilustración PALADIUM</h3>
//               <p>
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                 Nesciunt maiores aperiam
//               </p>
//               <p className="precio">$12,000</p>
//               <ItemCount
//                 stock={8}
//                 initial={1}
//                 onAdd={(count) => handleAddToCart(count, 'Ilustración PALADIUM')}
//               />
//             </div>
//           </div>

//           <div className="producto">
//             <img src={img3} alt="Imagen producto" />
//             <div className="texto-producto">
//               <h3>Ilustración TOLOSA</h3>
//               <p>
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                 Nesciunt maiores aperiam
//               </p>
//               <p className="precio">$15,000</p>
//               <ItemCount
//                 stock={5}
//                 initial={1}
//                 onAdd={(count) => handleAddToCart(count, 'Ilustración TOLOSA')}
//               />
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default MainPage;


// import img1 from '../imagenes/revolutionGrano333.jpg'
// import img2 from '../imagenes/ilustracionpala.jpg'
// import img3 from '../imagenes/tolosa-zoom.jpeg'

// const MainPage = () => {

//   return (
//     <>
//       <main className="contenido-principal contenedor">
//         <h2 className="text-center">Algo de la tienda...</h2>

//         <div className="listado-productos">
//           <div className="producto">
//             <img src={img1} alt="Imagen producto" />
//             <div className="texto-producto">
//               <h3>Ilustración REVOLUTION</h3>
//               <p>
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                 Nesciunt maiores aperiam
//               </p>
//               <p className="precio">$10,000</p>
//               <a href="#" className="btn">
//                 Agregar al carrito
//               </a>
//             </div>
//           </div>

//           <div className="producto">
//             <img src={img2} alt="Imagen producto" />
//             <div className="texto-producto">
//               <h3>Ilustación PALADIUM</h3>
//               <p>
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                 Nesciunt maiores aperiam
//               </p>
//               <p className="precio">$12,000</p>
//               <a href="#" className="btn">
//                 Agregar al carrito
//               </a>
//             </div>
//           </div>

//           <div className="producto">
//             <img src={img3} alt="Imagen producto" />
//             <div className="texto-producto">
//               <h3>Ilustración TOLOSA</h3>
//               <p>
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                 Nesciunt maiores aperiam
//               </p>
//               <p className="precio">$15,000</p>
//               <a href="#" className="btn">
//                 Agregar al carrito
//               </a>
//             </div>
//           </div>

//         </div>
//       </main>
//     </>
//   );
// };

// export default MainPage;
