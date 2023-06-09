import React from "react";
import '../hojas-estilos/Acercadenosotros.css';

function Testimonio(props) {
  return(
   
    <div className= 'contenedor-testimonio'>
     
              <img
             className='imagen-testimonio'
             src={require(`../img/testimonio-${props.imagen}.jpg`)}
             alt = 'foto de satelite'/> 
            <div className='contenedor-texto-testimonio'>
            <p className='nombre-testimonio'>
    <strong>{props.nombre}</strong>
    <br/>
    {props.pais}
    <br/>
  </p>
  <p className='cargo-testimonio'>
    <strong>{props.cargo}</strong>
    <br/>
    {props.empresa}
    <br/>
  </p>
  <p className='texto-testimonio'>"{props.testimonio}"</p>
             
            </div>
        </div>
       
    );  
}
export default Testimonio;

