 import React from "react";
import '../hojas-estilos/footer.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'


function Footer() {
    return (
        <footer>
            <><><div className="container_footer">
                <div className="box_footer">
                    <div className="logo">
                        <img className=""
                            src={require("../img/logo1.png")}
                            alt="logo-f" />
                    </div>
                    <div className="box__footer">
                    <h2>Descargate la App</h2>
                    <a href="https://play.google.com/store/" target="_blank" rel="noreferrer"><i className="bi bi-google-play">Google Play</i></a>
                    <a href="https://apps.apple.com/" target="_blank" rel="noreferrer"><i className="bi bi-apple">App Store</i></a>
                </div>
                </div>
                <div className="box__footer">
                    <h2>Redes Sociales</h2>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i>Instagram</a>
                    <a href="https://facebook.com/" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i>Facebook</a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i>LinkedIn</a>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="bi bi-twitter"></i>Twitter</a>
                </div>
                <div className="box__footer">
                    <h2>Contacto</h2>
                    <a href="/"><i className="bi bi-compass-fill"></i>Dirección: Av. Dorrego 4019 - CABA <br />
                        República Argentina (C1425GBE)</a>
                    <a href="/"><i className="bi bi-telephone-fill"></i>(+54 11) 5167-6767
                    </a>
                    <a href="/"><i className="bi bi-filetype-html"></i>www.smn.gob.ar </a>
                </div>
            </div>
                 </><div className="box__copyright">
                <hr />
                <p><b>Copyright © 2021 - Todos los Derechos Reservados</b></p>
            </div></>
            </footer >
    );

}


export default Footer 










