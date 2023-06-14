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
                            <h3 className='titulo-front'>{props.titulo}</h3>
                        </div>
                        </div>
                    <div className="ficha__back">
                        <div className='body__ficha_back'>
                            <h2 className='titulo-back'>{props.titulo}</h2>
                            <p>{props.resumen}</p>
                        </div>
                </div>
            </div>
        </div>

);
}

export default Tarjeta;