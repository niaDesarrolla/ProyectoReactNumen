import React from 'react';
import '../hojas-estilos/tarjetas.css';
/* import 'react-card-flip'; */


function Tarjeta(props) {
    return(
           <div className="ficha__father">
                <div className="ficha">
                    <div className="ficha__front">
                     <img className= 'imagen__ficha'
                          src= {require (`../img/${props.imagen}`)}
                          alt={props.altImagen}/>
                        <div className="body__ficha_front">
                            <h1>{props.titulo}</h1>
                        </div>
                        </div>
                    <div className="ficha__back">
                        <div className='body__ficha_back'>
                            <h2>{props.titulo}</h2>
                            <p>{props.resumen}</p>
                        </div>
                </div>
            </div>
        </div>

);
}

export default Tarjeta