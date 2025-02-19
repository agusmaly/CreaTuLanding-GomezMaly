import React, { useEffect } from 'react';
import img1 from '../imagenes/ofeyrafa2.jpeg';
import img2 from '../imagenes/LOGO-OVEROL.jpeg';



const Nosotros = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duración de la animación
            once: false,     // La animación ocurre siempre que scrollee
        });
    }, []);

    return (
        <main>
            <div className="image-transition">
                <h6>Blue pill or red pill</h6>
            </div>

            <div className="animate__animated animate__flash que-es-overol">
                <h2>
                    <span>N</span>
                    <span>o</span>
                    <span>s</span>
                    <span>o</span>
                    <span>t</span>
                    <span>r</span>
                    <span>o</span>
                    <span>s</span>
                </h2>
            </div>

            <div className="container text-center">
                <div className="row row-cols-1 row-cols-md-2">
                    <div data-aos="fade-right" className="col" id="ofeyrafa">
                        <img src={img1} id="fotous" alt="overol nosotros" />
                    </div>
                    <div className="col">
                        <p data-aos="fade-left" className="parrafous">
                            Somos un equipo de diseñadores gráficos que exploramos todas las formas de expresión visual, desde el
                            diseño hasta la fotografía, la ilustración, el arte gráfico y la producción audiovisual. Cada proyecto es
                            una aventura única, muy parecida a las que viven nuestros gatos cada día, que nos inspiran a crear la
                            identidad visual de Overol.
                        </p>
                        <p data-aos="fade-left" className="parrafous">
                            We are a team of graphic designers who explore all forms of visual expressions, from design to photography,
                            illustration, graphic art and audiovisual production. Each project is a unique adventure, much like the ones
                            our cats experience every day, which inspire us to create the visual identity of Overol.
                        </p>
                        <img src={img2} data-aos="fade-left" alt="logo overol" id="logo-overol" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Nosotros;
