
import React, {  useEffect } from 'react';
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

  useEffect(() => {
    const intervalo = setInterval(siguienteImagen, 5000); 

    return () => {
      clearInterval(intervalo); 
    };
  }, []);
  
  
  return (
    <div className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={imagenes[indiceImagen]} alt={`Imagen ${indiceImagen + 1}`} />
        </div>
      </div>
      <button className="carousel-control-prev" onClick={anteriorImagen}>
        Anterior
      </button>
      <button className="carousel-control-next" onClick={siguienteImagen}>
        Siguiente
      </button>
    </div>
  );
};

export default Micarrusel;

 
  
  

  

  