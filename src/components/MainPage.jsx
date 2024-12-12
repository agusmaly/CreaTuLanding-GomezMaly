import img1 from '../imagenes/revolutionGrano333.jpg'
import img2 from '../imagenes/ilustracionpala.jpg'
import img3 from '../imagenes/tolosa-zoom.jpeg'

const MainPage = () => {

  return (
    <>
      <main className="contenido-principal contenedor">
        <h2 className="text-center">Algo de la tienda...</h2>

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
              <a href="#" className="btn">
                Agregar al carrito
              </a>
            </div>
          </div>

          <div className="producto">
            <img src={img2} alt="Imagen producto" />
            <div className="texto-producto">
              <h3>Ilustación PALADIUM</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt maiores aperiam
              </p>
              <p className="precio">$12,000</p>
              <a href="#" className="btn">
                Agregar al carrito
              </a>
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
              <a href="#" className="btn">
                Agregar al carrito
              </a>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default MainPage;
