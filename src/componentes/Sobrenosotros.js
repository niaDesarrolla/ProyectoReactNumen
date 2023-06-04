import React from 'react';
import '../hojas-estilos/Sobrenosotros.css';

function Sobrenosotros(props) {
  return (
    <div className='sobrenosotros'>
      <h1 className='sobrenosotros-h1'>{props.titulo}</h1>
      <p className='parrafo1'>{props.parrafo1}</p>
      <p className='parrafo2'>{props.parrafo2}</p>
      <p className='parrafo3'>{props.parrafo3}</p>

      <div className='imagen'>
      <img className='imagen1'
        src={require(`../img/foto-${props.imagen}.jpg`)}
        alt='Planeta Tierra' />
      </div>

      <div className='imagen'>
      <img className='imagen2'
        src={require(`../img/foto-${props.imagen}.jpg`)}
        alt='Planeta Tierra' />
      </div>    
    </div>

  );      
}
export default Sobrenosotros;