import React from 'react';
import '../hojas-estilos/tarjetas.css';
/* import 'react-card-flip'; */


function Tarjeta(props) {
    return(
           <div className="card__father">
                <div className="card">
                    <div className="card__front">
                     <img className= 'imagen__card'
                        //   src= {require (`../img/${props.imagen}`)}
                          alt={props.altImagen}/>
                        <div className="body__card_front">
                            <h1>{props.titulo}</h1>
                        </div>
                        </div>
                    <div className="card__back">
                        <div className='body__card_back'>
                            <h2>{props.titulo}</h2>
                            <p>{props.subtitulo}</p>
                            <p>{props.resumen}</p>
                        </div>
                </div>
            </div>
        </div>

);
}

export default Tarjeta;