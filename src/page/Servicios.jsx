import React, { useEffect } from 'react';



const Servicios = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duración de la animación
            once: false,     // La animación ocurre siempre que scrollee
        });
    }, []);

    return (
        <main>
            <div className="image-transition">
                <h6>Follow the white rabbit.</h6>
            </div>

            <div className="animate__animated animate__flash que-es-overol">
                <h2>
                    <span>S</span>
                    <span>e</span>
                    <span>r</span>
                    <span>v</span>
                    <span>i</span>
                    <span>c</span>
                    <span>i</span>
                    <span>o</span>
                    <span>s</span>
                </h2>
            </div>

            <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <h3>About our expertise & skills</h3>
            </div>

            <section>
                <div className="container text-center">
                    <div className="row row-cols-1 row-cols-smd-2 row-cols-md-2">
                        <div
                            data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            className="col"
                        >
                            <h4 className="h4-izq">Creative fields</h4>
                            <ul className="ul-izq">
                                <li>Logo + Branding</li>
                                <li>Social Media Content</li>
                                <li>Audiovisual</li>
                                <li>Logo Motion</li>
                                <li>Photography</li>
                                <li>Web Design & Development</li>
                                <li>Typography</li>
                            </ul>
                        </div>
                        <div
                            data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            className="col"
                        >
                            <h4>Software skills</h4>
                            <ul className="ul-der">
                                <li>Adobe Illustrator</li>
                                <li>Adobe Photoshop</li>
                                <li>Adobe Premiere</li>
                                <li>Figma</li>
                                <li>Adobe InDesign</li>
                                <li>Adobe FireFly</li>
                                <li>Procreate</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Servicios;

