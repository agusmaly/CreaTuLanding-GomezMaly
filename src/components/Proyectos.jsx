import React from 'react';
import img1 from '../imagenes/remera.jpeg'
import img2 from '../imagenes/fotoenciende.jpeg'
import img3 from '../imagenes/tolosa.jpeg'
import img4 from '../imagenes/tolosa-zoom.jpeg'
import img5 from '../imagenes/co.lavandera.jpeg'
import img6 from '../imagenes/nylon.jpeg'
import img7 from '../imagenes/alianza360.jpeg'



const Proyectos = () => {
    return (
        <main>
            <div className="image-transition">
                <h6>Follow the white rabbit.</h6>
            </div>

            <div className="animate__animated animate__flash que-es-overol">
                <h2>
                    <span>P</span>
                    <span>r</span>
                    <span>o</span>
                    <span>y</span>
                    <span>e</span>
                    <span>c</span>
                    <span>t</span>
                    <span>o</span>
                    <span>s</span>
                </h2>
            </div>

            <nav>
                <h5>Clothing Design</h5>
                <div className="container text-center">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                        <div data-aos="fade-right" className="col">
                            <h6>[Freelance project]</h6>
                            <p>
                                This was the only capsule, designed and managed by us. It consisted of a series of 30 oversize t-shirts
                                in black and cream, screen printed and manufactured by the workshop @yourockme. The production photographs
                                were taken by Valentina Saavedra; we worked together, managing, assembling, and being part of the creative process.
                                <br />
                                <br />
                                Esta fue la única cápsula, diseñada y gestionada por nosotros. Consistió en una serie de 30 camisetas
                                oversize en negro y crema, serigrafiadas y fabricadas por el taller @yourockme. Las fotografías de
                                producción fueron tomadas por Valentina Saavedra; trabajamos juntos, gestionando, ensamblando y siendo parte
                                del proceso creativo.
                            </p>
                        </div>
                        <div data-aos="fade-up" className="col">
                            <img className="remera" src={img1} alt="overol remera" />
                        </div>
                        <div data-aos="fade-left" className="col">
                            <img className="foto-enc" src={img2} alt="overol foto remera" />
                        </div>
                    </div>
                </div>
            </nav>

            <nav>
                <h5>Illustration</h5>
                <div className="container text-center">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                        <div data-aos="fade-left" className="col">
                            <h6>[Freelance project]</h6>
                            <p>
                                This illustration was digitally created in Procreate, comprising nearly 60 layers. The typographic work
                                was done in Adobe Illustrator and then applied to the illustration.
                                <br />
                                <br />
                                Esta ilustración fue creada digitalmente en Procreate y consta de casi 60 capas. El trabajo tipográfico se
                                realizó en Adobe Illustrator y luego se aplicó a la ilustración.
                            </p>
                        </div>
                        <div data-aos="fade-down" className="col">
                            <img className="remera" src={img3} alt="overol ilustración" />
                        </div>
                        <div data-aos="fade-right" className="col">
                            <img className="foto-enc" src={img4} alt="zoom overol ilustración" />
                        </div>
                    </div>
                </div>
            </nav>

            <nav>
                <h5>Logofolio</h5>
                <div className="container text-center">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                        <div data-aos="zoom-in-right" className="col">
                            <p>
                                These logos were created this year. The first one is for a culinary venture specializing in artisanal jams.
                                We developed the logo, labels, branding, and brand identity manual.
                                <br />
                                <br />
                                Estos logotipos fueron creados este año. El primero es para un emprendimiento culinario especializado en
                                mermeladas artesanales. Desarrollamos el logotipo, etiquetas, branding y manual de identidad de marca.
                            </p>
                            <img className="lavandera" src={img5} alt="overol diseño logo co.lavandera" />
                        </div>
                        <div data-aos="zoom-in-down" className="col">
                            <img className="nylon" src={img6} alt="overol diseño logo nylon" />
                            <p className="parrafo.logos">
                                The second logo was designed for an audiovisual project, and the third was requested by a client from a social foundation.
                                <br />
                                <br />
                                El segundo logo fue diseñado para un proyecto audiovisual y el tercero fue solicitado por un cliente de una
                                fundación social.
                            </p>
                        </div>
                        <div data-aos="zoom-in-left" className="col">
                            <img className="alianza360" src={img7} alt="overol diseño logo alianza360" />
                        </div>
                    </div>
                </div>
            </nav>
        </main>
    );
};

export default Proyectos;
