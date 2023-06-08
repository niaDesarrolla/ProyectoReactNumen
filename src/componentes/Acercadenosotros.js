import React from "react";
import '../hojas-estilos/Acercadenosotros.css'

function Descripcion(props) {
  return(
   
    <div className= 'contenedor-descripcion'>
      
             {/* <img
             className='imagen-testimonio'
             src={require(`../img/testimonio-${props.imagen}.jpg`)}
             alt = 'foto de emma'/>  */}
            <div className='contenedor-texto-descripcion'>
            <p className='nombre-descripcion'>
    <strong>{props.skill1}</strong>
    <br/>
    {props.skill2}
    <br/>
  </p>
  <p className='cargo-descripcion'>
    <strong>{props.skill3}</strong>
    <br/>
    {props.skill4}
    <br/>
  </p>
  <p className='texto-descripcion'>"{props.detalle}"</p>
             
            </div>
        </div>
       

    );  
}

export default Descripcion;