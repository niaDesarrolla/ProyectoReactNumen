import React from 'react';
import '../hojas-estilos/micarrusel.css';

import imagen1 from '../img/1.png';
import imagen2 from '../img/2.png';
import imagen3 from '../img/3.png';

const imagenes = [
  imagen1,
  imagen2,
  imagen3,
];


const Micarrusel = () => {
  const [indiceImagen, setIndiceImagen] = React.useState(0);
  
  const siguienteImagen = () => {
    setIndiceImagen((prevIndice) => (prevIndice + 1) % imagenes.length);
  };
  
  const anteriorImagen = () => {
    setIndiceImagen((prevIndice) => (prevIndice - 1 + imagenes.length) % imagenes.length);
  };

  
  
  return (
    <div  class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
      <div className="carousel-item active">
      <img className="d-block w-100" src={imagenes[indiceImagen]} alt={`Imagen ${indiceImagen + 1}`} />
      
      <button className= "carousel-control-prev" href="#carouselExampleIndicators" role="button" onClick={anteriorImagen}>Anterior</button>
     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <button class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" onClick={siguienteImagen}>Siguiente</button>
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
    </div>
    </div>
    </div>
  

  );
};

export default Micarrusel;

 
  
  

  

  