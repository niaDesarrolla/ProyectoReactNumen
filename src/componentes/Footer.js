import React from "react";
import '../hojas-estilos/Footer.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'



function Footer() {
    return (
        <div className="contenedor-footer">
            <div className="footer-links">
                <div className="footer-links-wrappe">
             <div className="footer-link-items">
                        <h2>Acerca de</h2>
                        <Link to="/">Acerca de este Sitio</Link>
                        <Link to="/">Terminos y Condiciones</Link>
                        <Link to="/">Sugerencias</Link>
                    </div>
                </div>
                <div className="footer-links-wrappe">
                    <div className="footer-link-items">
                        <h2>Tramites</h2>
                        <Link to="/">Turnos</Link>
                        <Link to="/">Tramites a Distancia</Link>
                        <Link to="/">Atencion a la Ciudadania</Link>
                    </div>
                </div>
                <div className="footer-links-wrappe">
                    <div className="footer-link-items">
                        <h2>Contactos</h2>
                        <Link to="/">Direccion</Link>
                        <Link to="/">Telefono</Link>
                        <Link to="/">Email</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Redes</h2>
                        <Link to="https://www.instagram.com">
                        <a href="https://www.instagram.com" target="_blank"><i className="bi bi-instagram"></i></a>
                        </Link>
                        <Link to="/">
                        <a href="#"><i className="bi bi-facebook"></i></a>
                        </Link>
                        <Link to="/">
                        <a href="#"><i className="bi bi-linkedin"></i></a>
                        </Link>
                        <Link to="/">
                        <a href="#"><i className="bi bi-twitter"></i></a>
                        </Link>
                    </div>
                </div>
            </div>
            <section className="redes-redes">
                <div className="redes-redes-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="redes-redes-logo">
                        <img src="./img/logo.png" alt=""/>
                        </Link>
                    </div>
                    <small className="copy">Copyright © 2021 - Todos los Derechos Reservados</small>
                </div>

            </section>
        </div>

    )

}

export default Footer

