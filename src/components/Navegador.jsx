import React, { useEffect } from 'react';
import mermeladaImage from '../imagenes/mermelada.jpeg';
import ilustracionImage from '../imagenes/ilustracionpala.jpg';
import animacionVideo from '../imagenes/animacion.mp4';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duración de la animación
            once: false,     // La animación ocurre siempre que scrollee
        });
    }, []);
    return (
        <main>
            <div className="image-transition">
                <h6>Wake up, Neo...</h6>
            </div>

            <div className="animate__animated animate__flash que-es-overol">
                <h2>
                    <span>¿</span><span>Q</span><span>u</span><span>é</span> <span>e</span><span>s</span><span> </span>
                    <span>O</span><span>v</span><span>e</span><span>r</span><span>o</span><span>l</span><span>?</span>
                </h2>
            </div>
            <div className="container text-center">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                    <div className="col">
                        <h4>Diseño</h4>
                        <img
                            data-aos="flip-left"
                            src={mermeladaImage}
                            id="ilustracion"
                            alt="diseño mermelada"
                        />
                        <p id="parrafo1y2">
                            Ofrecemos servicios de diseño gráfico que transforman tus ideas en realidades visuales
                            impactantes. Desde la creación de logotipos y branding hasta el desarrollo de material
                            publicitario y diseño editorial, nos aseguramos de que cada pieza gráfica comunique
                            efectivamente tu mensaje y refleje la esencia de tu marca.
                            <br />
                            <br />
                            We offer graphic design services that transform your ideas into impactful visual realities. From
                            logo creation and branding to the development of advertising materials and editorial design, we
                            ensure that each graphic piece effectively communicates your message and reflects the essence of
                            your brand.
                        </p>
                    </div>
                    <div className="col">
                        <h4>Ilustración</h4>
                        <img
                            data-aos="flip-up"
                            src={ilustracionImage}
                            id="ilustracion"
                            alt="ilustración ep"
                        />
                        <p id="parrafo1y2">
                            En nuestra rama de ilustración, en OVEROL damos vida a conceptos a través del arte visual.
                            Creamos ilustraciones personalizadas para libros, revistas, productos, y campañas publicitarias,
                            adaptando nuestro estilo a las necesidades específicas de cada proyecto para garantizar
                            resultados únicos y memorables.
                            <br />
                            <br />
                            In our illustration branch, at OVEROL we bring concepts to life through visual art. We create
                            customized illustrations for books, magazines, products, and advertising campaigns, adapting our
                            style to the specific needs of each project to ensure unique and memorable results.
                        </p>
                    </div>
                    <div className="col">
                        <h4>Animación</h4>
                        <video
                            data-aos="flip-right"
                            src={animacionVideo}
                            type="video/mp4"
                            id="ilustracion"
                            autoPlay
                            loop
                            muted
                        >
                            overol
                        </video>
                        <p>
                            Ofrecemos servicios de animación, donde convertimos tus historias e ideas en experiencias
                            dinámicas y cautivadoras. Desarrollamos animaciones 2D y 3D para vídeos explicativos,
                            comerciales, contenido para redes sociales, y más, aportando movimiento y vida a tus proyectos
                            para captar la atención de tu audiencia.
                            <br />
                            <br />
                            We offer animation services, where we transform your stories and ideas into dynamic and
                            captivating experiences. We develop 2D and 3D animations for explanatory videos, commercials,
                            social media content, and more, bringing movement and life to your projects to capture your
                            audience's attention.
                        </p>
                    </div>
                </div>
            </div>
            <div className="ver-proyectos">
                <a href="./html/proyectos.html">[+]</a>
            </div>
        </main>
    );
};

export default Main;

