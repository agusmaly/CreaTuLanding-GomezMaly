import React from 'react';
import imgWhatsapp from '../imagenes/whatsapp_5968841.png';
import imgInstagram from '../imagenes/instagram_3955024.png';
import imgBehance from '../imagenes/behance_3670094.png';

const Contacto = () => {
    return (
        <main>
            <div className="image-transition">
                <h6>...</h6>
            </div>

            <div className="animate__animated animate__flash que-es-overol">
                <h2>
                    <span>C</span>
                    <span>o</span>
                    <span>n</span>
                    <span>t</span>
                    <span>a</span>
                    <span>c</span>
                    <span>t</span>
                    <span>a</span>
                    <span>n</span>
                    <span>o</span>
                    <span>s</span>
                </h2>
            </div>

            <div className="container text-center">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                    {/* Formulario */}
                    <div data-aos="zoom-in-right" className="col">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label1">
                                Dejá tu correo
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="ejemplo@overol.com"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label2">
                                Y tu consulta
                            </label>
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                            ></textarea>
                        </div>
                        <div className="boton-enviar">
                            <a href="../html/contacto.html">Enviar</a>
                        </div>
                    </div>

                    {/* Redes Sociales */}
                    <div data-aos="zoom-out" className="col">
                        <div id="nuestras-redes">Nuestras redes</div>
                        <div className="container-fluid" id="logos-contacto">
                            <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                                <img src={imgWhatsapp} alt="whatsapp" />
                            </a>
                            <a
                                href="https://www.instagram.com/disenoenoverol/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={imgInstagram} alt="instagram" />
                            </a>
                            <a
                                href="https://www.behance.net/gallery/199234955/portfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={imgBehance} alt="behance" />
                            </a>
                        </div>
                    </div>

                    {/* Ubicación */}
                    <div data-aos="zoom-in-left" className="col">
                        <div id="donde">¿Dónde estamos?</div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52356.17226649012!2d-58.02181514301418!3d-34.89990495284041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e7a00ca9dba3%3A0x1963c8cbd726acb0!2sTolosa%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1718020531892!5m2!1ses-419!2sar"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contacto;
